from flask import Blueprint, render_template, flash, redirect, url_for
from flask_login import login_required
from ..config.database import db
from ..models.User import User
from .forms import ProfileForm

user_bluprt = Blueprint('user', __name__)


# HANDLE USER VIEW
@user_bluprt.get('/user_profile')  # /<int:user_id>
# @login_required
def user_page(user_id):
    user = User.query.get_or_404(user_id)
    return render_template('profile/view.html', user=user, title='User Profile | Armstrong Number Checker')


# EDIT_USER ROUTE
@user_bluprt.get('/update_profile/<int:user_id>')
def update_profile_page(user_id):
    edited_user = User.query.get_or_404(user_id)
    # INITIALISE THE FORM WITH EXISTING DATA
    form_data = ProfileForm(obj=edited_user)
    return render_template('profile/edit.html', form=form_data, profile=edited_user, title='Edit Profile | Armstrong Number Checker')


# HANDLE USER_PROFILE UPDATE
@user_bluprt.patch('/update_profile/<int:user_id>')
def update_profile(user_id):
    edited_user = User.query.get_or_404(user_id)

    # INITIALISE THE FORM WITH EXISTING DATA
    form_data = ProfileForm(obj=edited_user)

    if form_data.validate_on_submit():
        # UPDATE EDITED_USER ATTRIBUTES BASED ON FORM DATA
        edited_user.name = form_data.name.data
        edited_user.email = form_data.email.data
        edited_user.username = form_data.username.data

        db.session.commit()

        flash('Profile updated successfully!', category='success')
        return redirect(url_for('user.user_page', user_id=user_id))  # Redirect to profile page
    else:
        flash('Invalid input. Please check your data.', category='error')
        return redirect(url_for('user.update_profile_page', user_id=user_id))


# DELETE USER_PROFILE
@user_bluprt.post('/delete_profile/<int:user_id>')
def delete_profile(user_id):
    old_profile = User.query.get_or_404(user_id)

    # DELETE THE PROFILE
    db.session.delete(old_profile)
    db.session.commit()

    flash('Profile deleted successfully!', category='success')
    return redirect(url_for('auth.register_page'))
