from flask import Blueprint, render_template, flash, redirect, url_for
from flask_login import login_required, current_user
from ..config.database import db
from ..models.Models import User
from .forms import ProfileForm
from werkzeug.security import generate_password_hash
from ..utils.helpers import validate_password
from email_validator import validate_email, EmailNotValidError

user_bluprt = Blueprint('user', __name__)


# HANDLE USER VIEW
@user_bluprt.get('/user_profile/<usr_id>')  #
@login_required
def user_page(usr_id):
    # FIND THE USER BY ID AND RETURN THEIR PROFILE PAGE
    user = User.query.filter_by(usr_id=usr_id).first()
    if user is None:
        flash('User not found!', category='error')
        return redirect(url_for('arm_num_checker.home_page'))

    return render_template('profile/view.html', user=user, current_user=current_user,
                           title='User Profile | Armstrong Number Checker')


# USER_PROFILE PAGE ROUTE
@user_bluprt.get('/update_profile_page/<usr_id>')
@login_required
def update_profile_page(usr_id):
    user = User.query.filter_by(usr_id=usr_id).first()
    form_data = ProfileForm(obj=user)
    return render_template('profile/edit.html', form=form_data, user=user, current_user=current_user,
                           title='Edit Profile | Armstrong Number Checker')


# UPDATE USER PROFILE
@user_bluprt.post('/update_profile_page_edit/<usr_id>')
@login_required
def update_profile_page_edit(usr_id):
    user = User.query.filter_by(usr_id=usr_id).first()

    # INITIALISE THE FORM WITH EXISTING DATA
    form_data = ProfileForm(obj=user)
    previous_data = user.data()

    # UPDATE EDITED_USER ATTRIBUTES BASED ON FORM DATA
    if form_data.validate_on_submit():
        user.name = form_data.name.data or previous_data['name']
        user.username = form_data.username.data or previous_data['username']
        user.contact_number = form_data.contact_number.data or previous_data['contact_number']

        if form_data.email.data:
            # VALIDATE EMAIL FORMAT
            try:
                valid_email = validate_email(form_data.email.data)
                email = valid_email.normalized
            except EmailNotValidError as e:
                flash(f'Invalid email format: {e}', category='error')
                return redirect(url_for('user.update_profile_page_edit', form=form_data, usr_id=user.usr_id, current_user=current_user))

            user.email = email
        else:
            user.email = previous_data['email']

        # RESET IS_EMAIL_VERIFIED
        if form_data.email.data and form_data.email.data != previous_data['email']:
            user.is_email_verified = False

            # VALIDATE PASSWORD REQUIREMENTS
        if form_data.password.data:
            error_message = validate_password(form_data.password.data)
            if error_message:
                flash(error_message, category='error')
                return redirect(url_for('user.update_profile_page_edit', form=form_data, usr_id=user.usr_id, current_user=current_user))

            user.password = generate_password_hash(form_data.password.data)
        else:
            user.password = previous_data['password']

        try:
            db.session.add(user)
            db.session.commit()
            flash('Profile updated successfully!', category='success')
            return redirect(url_for('user.user_page', current_user=current_user, usr_id=user.usr_id))
        except Exception as e:
            db.session.rollback()
            flash('Error updating profile: {}'.format(e), category='error')
            return redirect(url_for('user.update_profile_page_edit', form=form_data, usr_id=user.usr_id, current_user=current_user))
    #
    # return redirect(url_for('user.user_page', current_user=current_user, usr_id=user.usr_id))


# DELETE USER_PROFILE
@user_bluprt.route('/delete_profile/<usr_id>')
@login_required
def delete_profile(usr_id):
    old_profile = User.query.filter_by(usr_id=usr_id).first()
    # DELETE THE PROFILE
    if old_profile:
        db.session.delete(old_profile)
        db.session.commit()
        flash('Profile deleted successfully!', category='success')
        return redirect(url_for('auth.register_page'))
    else:
        flash('User not found!', category='error')
        return redirect(url_for('arm_num_checker.home_page'))
