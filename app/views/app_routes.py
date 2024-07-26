from flask import Blueprint, render_template, request, redirect, url_for, flash, session
from flask_login import login_required, current_user
from ..models.Models import User, Feedback
from ..config.database import db
from .forms import ArmstrongForm, CheckNumberForm, FeedbackForm

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
    form_data = ArmstrongForm()
    form_data_2 = CheckNumberForm()

    if request.method == 'POST':
        if form_data.validate_on_submit():
            print('Validate:', form_data.validate_on_submit())
            # VALIDATE INPUT: MINIMUM <= MAXIMUM
            if int(form_data.min_num.data) > int(form_data.max_num.data):
                flash('Minimum number must be less than or equal to maximum number.', category='error')
                return render_template('index.html', form=form_data, current_user=current_user, title='Home | Armstrong Number Checker')
            # VALIDATE INPUTS: POSITIVE INTEGERS
            elif int(form_data.min_num.data) < 1 or int(form_data.max_num.data) < 1:
                flash('Please enter positive integers for minimum and maximum numbers.', category='error')
                return render_template('index.html', form=form_data, current_user=current_user, title='Home | Armstrong Number Checker')
            else:
                # HANDLE FORM SUBMISSION
                min_num = int(form_data.min_num.data)
                max_num = int(form_data.max_num.data)

                # CALCULATE ARMSTRONG NUMBERS WITHIN THE SPECIFIED RANGE
                armstrong_numbers = [number for number in range(min_num, max_num + 1) if is_armstrong(number)]
                if not armstrong_numbers:
                    flash('No Armstrong numbers found within the given range.', category='error')
                    return redirect(
                        url_for('arm_num_checker.results_page', current_user=current_user, armstrong_numbers=armstrong_numbers,
                                title='Results | Armstrong Number Checker'))

                # STORE THE RESULTS IN THE SESSION
                session['armstrong_numbers'] = armstrong_numbers

                return redirect(
                    url_for('arm_num_checker.results_page', current_user=current_user, armstrong_numbers=armstrong_numbers,
                            title='Results | Armstrong Number Checker'))

        # FOR CHECKING A SPECIFIC ARMSTRONG NUMBER
        if form_data_2.validate_on_submit():
            print('Validate:', form_data_2.validate_on_submit())
            # VALIDATE INPUTS: POSITIVE INTEGER
            if int(form_data_2.check_particular_num.data) < 1:
                flash('Please enter a positive integer for the number to check.', category='error')
                return redirect(
                    url_for('arm_num_checker.home_page', current_user=current_user,
                            title='Home | Armstrong Number Checker'))
            else:
                # HANDLE FORM SUBMISSION
                check_particular_num = int(form_data_2.check_particular_num.data)
                result = "It is an Armstrong Number" if is_armstrong(check_particular_num) else "Not an Armstrong Number"

                # STORE THE RESULTS IN THE SESSION
                session['check_num_result'] = result

                return redirect(
                    url_for('arm_num_checker.results_page', current_user=current_user, result=result))

    return render_template('index.html', form=form_data, form2=form_data_2, current_user=current_user, title='Home | Armstrong Number Checker')


# ROUTES FOR DISPLAYING RESULTS
@arm_num_checker.get('/results')  # <usr_id>
@login_required
def results_page():  # usr_id
    # user = User.query.filter_by(usr_id=usr_id).first()
    armstrong_numbers = request.args.getlist('armstrong_number')  # Get the Armstrong numbers (if provided)
    result = request.args.get('result')  # Get the result (if provided)
    return render_template('results.html', armstrong_numbers=armstrong_numbers, result=result,
                           current_user=current_user, title='Results | Armstrong Number Checker')


# ROUTES FOR CONTACT PAGE
@arm_num_checker.route('/contact_submit_feedback/<usr_id>', methods=['GET', 'POST'])
@login_required
def contact_page(usr_id):
    user = User.query.filter_by(usr_id=usr_id).first()
    form_data = FeedbackForm(obj=user)

    if request.method == 'POST':
        if form_data.validate_on_submit():
            name = form_data.name.data
            email = form_data.email.data
            subject = form_data.subject.data
            message = form_data.message.data

            feedback = Feedback(usr_id=current_user.usr_id, name=name, email=email, subject=subject, message=message)

            try:
                # SAVE THE FEEDBACK TO THE DATABASE
                db.session.add(feedback)
                db.session.commit()
                flash('Your message was sent successfully. Thank you for your feedback!', category='success')
                return redirect(url_for('arm_num_checker.contact_page', usr_id=user.usr_id, current_user=current_user))
            except Exception as e:
                db.session.rollback()
                flash(f'Error submitting feedback: {e}', category='error')
                return redirect(url_for('arm_num_checker.contact_page', usr_id=user.usr_id, current_user=current_user))

    return render_template('contact.html', form=form_data, current_user=current_user,
                           title='Contact Us | Armstrong Number Checker')
