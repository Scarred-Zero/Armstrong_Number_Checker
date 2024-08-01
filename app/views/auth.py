from flask import Blueprint, request, render_template, redirect, flash, url_for
from ..config.database import db
from ..models.Models import User
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
            if not user:
                flash('Incorrect email. Please check your email.', category='error')

            # VALIDATE PASSWORD
            if not check_password_hash(user.password, password):
                flash('Your email was correct, but your password was incorrect. Please, try again.', category='error')
            else:
                # LOGIN THE USER
                name = user.name
                login_user(user, remember=True)
                flash(f'Logged in {name}, successfully!', category='success')
                return redirect(url_for('arm_num_checker.home_page', current_user=current_user))
        
    return render_template('auth/login.html', current_user=current_user, form=form_data)


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

        if form_data.validate_on_submit():
            name = form_data.name.data
            email = form_data.email.data
            username = form_data.username.data
            contact_number = form_data.contact_number.data
            password = form_data.password.data
            confirm_password = form_data.confirm_password.data

            try:
                # VALIDATE EMAIL WITH EMAIL-VALIDATOR
                valid_email = validate_email(email)
                email = valid_email.normalized
            except EmailNotValidError as e:
                flash(f'Invalid email format: {e}', category='error')
                return redirect(url_for('auth.register_page'))

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
            existing_user = User.query.filter_by(email=email).first()
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

            try:
                # ADD NEW USER TO THE DATABASE
                db.session.add(new_user)
                db.session.commit()
                flash(f'Hey {name}, your account was created successfully!', category='success')
                flash('Remember to save your password either on the browser or somewhere else.', category='success')
                return redirect(url_for('auth.login_page', current_user=current_user))
            except Exception as e:
                db.session.rollback()
                flash(f'Error creating account: {e}', category='error')
                return redirect(url_for('auth.register_page'))

    return render_template('auth/register.html', current_user=current_user, form=form_data)


# HANDLE USER LOGOUT
@auth.get('/logout')
@login_required
def logout():
    name = current_user.name  # Get the user's name before logging out
    logout_user()
    flash(f'Logged out {name}, successfully!', category='success')
    return redirect(url_for('auth.login_page'))
