from flask import Blueprint, render_template, request, redirect, url_for, flash
from flask_login import login_required, current_user

# from ..config.database import db
# from ..models.Attempts import LoginAttempt

# Blueprint Configuration
arm_num_checker = Blueprint('arm_num_checker', __name__)


# IS_ARMSTRONG FUNCTION
def is_armstrong(number):
    num_str = str(number)
    num_digits = len(num_str)
    total = sum(int(digit) ** num_digits for digit in num_str)
    return total == number


# HOME_PAGE ROUTE (VIEWS)
@arm_num_checker.route('/', methods=['GET', 'POST'])
@arm_num_checker.route('/home', methods=['GET', 'POST'])
@login_required
def home_page():
    form_data = request.form
    if request.method == 'POST':
        if int(form_data['min_num']) > int(form_data['max_num']):
            flash('Minimum number must be less than or equal to maximum number.', category='error')
            return render_template('index.html', user=current_user, title='Home | Armstrong Number Checker')
        elif int(form_data['min_num']) < 1 or int(form_data['max_num']) < 1:
            flash('Please enter positive integers for minimum and maximum numbers.', category='error')
            return render_template('index.html', user=current_user, title='Home | Armstrong Number Checker')
        else:
            # HANDLE FORM SUBMISSION
            min_num = int(form_data['min_num'])
            max_num = int(form_data['max_num'])
            check_particular_num = form_data.get('check_particular_num')  # Get the number to check (if provided)

            # CALCULATE ARMSTRONG NUMBERS WITHIN THE RANGE
            armstrong_numbers = [num for num in range(min_num, max_num + 1) if is_armstrong(num)]
            if armstrong_numbers == 0:
                flash('No Armstrong numbers found within the given range.', category='error')
                return redirect(url_for('arm_num_checker.results_page', user=current_user, armstrong_numbers=armstrong_numbers, title='Home | Armstrong Number Checker'))

            # CHECK IF A SPECIFIC NUMBER IS ARMSTRONG
            check_result = None
            if check_particular_num:
                check_num = int(check_particular_num)
                check_result = "It is an Armstrong Number" if is_armstrong(check_num) else "Not an Armstrong Number"
            return redirect(
                url_for('arm_num_checker.results_page', user=current_user, armstrong_numbers=armstrong_numbers, check_result=check_result))

    return render_template('index.html', user=current_user, title='Home | Armstrong Number Checker')

    # Record the login attempt
    # success = is_armstrong(int(check_particular_num)) if check_particular_num else None
    # attempt = LoginAttempt(user_id=user_id, success=success)  # Replace 1 with actual user ID
    #
    # db.session.add(attempt)
    # db.session.commit()
    #
    # # Retrieve login attempts for the user
    # user_attempts = LoginAttempt.query.filter_by(user_id).all()


@arm_num_checker.get('/results')
# @login_required
def results_page():
    return render_template('results.html', user=current_user, title='Results | Armstrong Number Checker')


@arm_num_checker.get('/contact')
def contact_page():
    return render_template('contact.html', user=current_user, title='Contact Us | Armstrong Number Checker')
