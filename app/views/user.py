from flask import Blueprint, render_template, flash, redirect, url_for, request
from flask_login import login_required, current_user
from ..config.database import db
from ..models.User import User
from .forms import ProfileForm

user_bluprt = Blueprint('user', __name__)


# HANDLE USER VIEW
@user_bluprt.get('/user_profile/<user_id>')  #
@login_required
def user_page(user_id):
    # FIND THE USER BY ID AND RETURN THEIR PROFILE PAGE
    user = User.query.filter(user_id == user_id)
    if user is None:
        flash('User not found!', category='error')
        return redirect(url_for('arm_num_checker.home_page'))
    return render_template('profile/view.html', user_id=user, user=current_user, title='User Profile | Armstrong Number Checker')


# USER_PROFILE PAGE ROUTE
@user_bluprt.route('/update_profile/<user_id>', methods=['GET', 'PATCH'])
def update_profile_page(user_id):
    user = User.query.filter(user_id == user_id)
    # INITIALISE THE FORM WITH EXISTING DATA
    form_data = ProfileForm(obj=user)

    if request.method == 'GET':
        return render_template('profile/edit.html', form=form_data, user_id=user, user=current_user, title='Edit Profile | Armstrong Number Checker')
    elif request.method == 'PATCH':
        previous_data = user.data()

        # UPDATE EDITED_USER ATTRIBUTES BASED ON FORM DATA
        user.name = form_data.name.data or previous_data['name']
        user.email = form_data.email.data or previous_data['email']
        user.username = form_data.username.data or previous_data['username']
        # RESET IS EMAIL VERIFIED
        if form_data.email.data and form_data.email.data != previous_data['email']:
            user.is_email_verified = False

        db.session.commit()

        flash('Profile updated successfully!', category='success')
        return redirect(
            url_for('user.user_page', user=current_user, user_id=user))  # Redirect to profile page

    flash('Invalid input. Please check your data.', category='error')
    return redirect(url_for('user.update_profile_page', user_id=user, user=current_user))


# DELETE USER_PROFILE
@user_bluprt.route('/delete_profile/<user_id>', methods=['POST'])
def delete_profile(user_id):
    old_profile = User.query.get_or_404(user_id == user_id)
    # DELETE THE PROFILE
    db.session.delete(old_profile)
    db.session.commit()
    flash('Profile deleted successfully!', category='success')
    return redirect(url_for('auth.register_page'))
