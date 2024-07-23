from flask import Blueprint, render_template, request, redirect, url_for, flash
from flask_login import login_required, current_user

# CREATE A BLUEPRINT FOR THE ARMSTRONG NUMBER CHECKER
arm_num_checker = Blueprint('arm_num_checker', __name__)


# FUNCTION TO CHECK IF NUMBER IS AN ARMSTRONG NUMBER
def is_armstrong(number):
    num_str = str(number)
    num_digits = len(num_str)
    total = sum(int(digit) ** num_digits for digit in num_str)
    return total == number


# ROUTE FOR HOME PAGE
@arm_num_checker.route('/', methods=['GET', 'POST'])
@arm_num_checker.route('/home', methods=['GET', 'POST'])
@login_required
def home_page():
    form_data = request.form
    if request.method == 'POST':
        # VALIDATE INPUT: MINIMUM <= MAXIMUM
        if int(form_data['min_num']) > int(form_data['max_num']):
            flash('Minimum number must be less than or equal to maximum number.', category='error')
            return render_template('index.html', current_user=current_user, title='Home | Armstrong Number Checker')
        # VALIDATE INPUTS: POSITIVE INTEGERS
        elif int(form_data['min_num']) < 1 or int(form_data['max_num']) < 1:
            flash('Please enter positive integers for minimum and maximum numbers.', category='error')
            return render_template('index.html', current_user=current_user, title='Home | Armstrong Number Checker')
        else:
            # HANDLE FORM SUBMISSION
            min_num = int(form_data['min_num'])
            max_num = int(form_data['max_num'])

            # CALCULATE ARMSTRONG NUMBERS WITHIN THE SPECIFIED RANGE
            armstrong_numbers = [num for num in range(min_num, max_num + 1) if is_armstrong(num)]
            if not armstrong_numbers:
                flash('No Armstrong numbers found within the given range.', category='error')
                return redirect(
                    url_for('arm_num_checker.results_page', current_user=current_user, armstrong_numbers=armstrong_numbers,
                            title='Home | Armstrong Number Checker'))

    return render_template('index.html', current_user=current_user, title='Home | Armstrong Number Checker')


# ROUTE FOR CHECKING A SPECIFIC ARMSTRONG NUMBER
@arm_num_checker.route('/check_number', methods=['POST'])
def check_number():
    form_data = request.form
    check_particular_num = form_data.get('check_particular_num')  # Get the number to check (if provided)
    # CHECK IF A SPECIFIC NUMBER IS ARMSTRONG
    if check_particular_num:
        check_num = int(check_particular_num)
        result = "It is an Armstrong Number" if is_armstrong(check_num) else "Not an Armstrong Number"
        return redirect(
            url_for('arm_num_checker.results_page', current_user=current_user, result=result))


# ROUTES FOR DISPLAYING RESULTS
@arm_num_checker.get('/results')
def results_page():
    return render_template('results.html', current_user=current_user, title='Results | Armstrong Number Checker')


# ROUTES FOR CONTACT PAGE
@arm_num_checker.get('/contact')
def contact_page():
    return render_template('contact.html', current_user=current_user, title='Contact Us | Armstrong Number Checker')
