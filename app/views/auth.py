from flask import Blueprint, request, session, render_template, redirect, flash, url_for
from ..config.database import db
from ..models.User import User
from .forms import LoginForm, RegistrationForm
from ..utils.helpers import validate_password
from email_validator import validate_email, EmailNotValidError
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import current_user, login_user, login_required, logout_user

# CREATE A BLUEPRINT FOR AUTHENTICATION
auth = Blueprint('auth', __name__)


# ROUTE FOR THE LOGIN PAGE
@auth.route('/login', methods=['GET', 'POST'])
def login_page():
    form_data = LoginForm()

    if request.method == 'POST':
        if form_data.validate_on_submit():
            email = form_data.email.data
            password = form_data.password.data

            # VALIDATE EMAIL
            user = User.query.filter_by(email=email).first()
            print('USER:', user)
            if not user:
                flash('User does not exist. Please register first.', category='error')
                return redirect(url_for('auth.register_page'))

            # CHECK PASSWORD
            if not user and not check_password_hash(user.password, password):
                flash('Incorrect password. Please try again.', category='error')
                return redirect(url_for('auth.login_page'))

            # LOGIN THE USER
            login_user(user, remember=True)
            flash('Logged in successfully!', category='success')
            return redirect(url_for('arm_num_checker.home_page', user=current_user))

        else:
            flash('Invalid credentials. Please check your inputs.', category='error')
            return redirect(url_for('auth.login_page'))

    return render_template('auth/login.html', user=current_user, form=form_data)


# ROUTE FOR HANDLING USER REGISTRATION
@auth.route('/register', methods=['GET', 'POST'])
def register_page():
    required_fields = {'name', 'email', 'username', 'contact_number', 'password', 'confirm_password'}
    form_data = RegistrationForm()

    if request.method == 'POST':
        # CHECK IF ALL REQUIRED FIELDS ARE PRESENT
        missing_fields = [field for field in required_fields if not getattr(form_data, field, None)]

        if missing_fields:
            flash(f'Missing fields: {", ".join(missing_fields)}', category='error')
            return redirect(url_for('auth.register_page'))

        print("VALIDATE:", form_data.validate_on_submit())
        if form_data.validate_on_submit():
            name = form_data.name.data
            email = form_data.email.data

            try:
                # VALIDATE EMAI WITH EMAIL-VALIDATOR
                valid_email = validate_email(email)
                email = valid_email.normalized
            except EmailNotValidError as e:
                flash(f'Invalid email format: {e}', category='error')
                return redirect(url_for('auth.register_page'))

            username = form_data.username.data
            contact_number = form_data.contact_number.data
            password = form_data.password.data
            confirm_password = form_data.confirm_password.data

            # VALIDATE PASSWORD REQUIREMENTS
            error_message = validate_password(password)
            if error_message:
                flash(error_message, category='error')
                return redirect(url_for('auth.register_page'))

            # CHECK IF CONFIRM PASSWORD MATCHES REGISTERED PASSWORD
            if password != confirm_password:
                flash('Passwords do not match', category='error')
                return redirect(url_for('auth.register_page'))

            # HASH THE PASSWORD
            hashed_password = generate_password_hash(password)

            # CHECK IF EMAIL EXISTS
            existing_user = User.query.filter_by(name=name, email=email, username=username,
                                                 contact_number=contact_number).first()
            if existing_user:
                flash('User already exists. Please register to have your own account.', category='error')
                return redirect(url_for('auth.register_page'))

            new_user = User(
                name=name,
                email=email,
                username=username,
                contact_number=contact_number,
                role='user',  # Sets the role to user
                password=hashed_password)  # Defines the hashing method

            # ADD NEW USER TO THE DATABASE
            db.session.add(new_user)
            db.session.commit()

            # LOGIN THE NEWLY REGISTERED USER
            # login_user(new_user, remember=True)
            flash(f'Hey {username}, your account was created successfully!', category='success')
            return redirect(url_for('auth.login_page', user=current_user))

    return render_template('auth/register.html', user=current_user, form=form_data)


# HANDLE USER LOGOUT
@auth.get('/logout')
@login_required
def logout():
    logout_user()
    flash('Logged out successfully!', category='success')
    return redirect(url_for('auth.login_page'))
