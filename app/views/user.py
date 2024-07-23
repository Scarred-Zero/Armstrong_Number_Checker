from flask import Blueprint, render_template, flash, redirect, url_for, request
from flask_login import login_required, current_user
from ..config.database import db
from ..models.User import User
from .forms import ProfileForm

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

    return render_template('profile/view.html', user=user, current_user=current_user, title='User Profile | Armstrong Number Checker')


# USER_PROFILE PAGE ROUTE
@user_bluprt.get('/update_profile/<usr_id>')
def update_profile_page(usr_id):
    user = User.query.filter_by(usr_id=usr_id).first()
    form_data = ProfileForm(obj=user)
    return render_template('profile/edit.html', form=form_data, user=user, current_user=current_user, title='Edit Profile | Armstrong Number Checker')


#UPDATE USER PROFILE
@user_bluprt.post('/update_profile_edit/<usr_id>')
def update_profile_page_edit(usr_id):
    user = User.query.filter_by(usr_id=usr_id).first()

    # INITIALISE THE FORM WITH EXISTING DATA
    form_data = ProfileForm(obj=user)
    previous_data = user.data()

    # UPDATE EDITED_USER ATTRIBUTES BASED ON FORM DATA
    user.name = form_data.name.data or previous_data['name']
    user.email = form_data.email.data or previous_data['email']
    user.username = form_data.username.data or previous_data['username']
    user.contact_number = form_data.contact_number.data or previous_data['contact_number']
    user.password = form_data.password.data or previous_data['password']

    # RESET IS EMAIL VERIFIED
    if form_data.email.data and form_data.email.data != previous_data['email']:
        user.is_email_verified = False

    db.session.add(user)
    db.session.commit()



    flash('Profile updated successfully!', category='success')
    return redirect(url_for('user.user_page', usr_id=user.usr_id))  # Redirect to profile page




# DELETE USER_PROFILE
@user_bluprt.route('/delete_profile/<usr_id>')
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
