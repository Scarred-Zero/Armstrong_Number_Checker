from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, TelField, TextAreaField, IntegerField
from wtforms.validators import InputRequired, Email, EqualTo, Length, NumberRange


# Define your RegistrationForm using Flask-WTF
class RegistrationForm(FlaskForm):
    name = StringField('Name:', validators=[InputRequired(), Length(min=4, max=50)],
                       render_kw={'placeholder': 'Ex. Michael Armstrong', 'class': 'form-control'})

    email = StringField('Email:', validators=[InputRequired(), Email(), Length(min=6, max=80)],
                        render_kw={'placeholder': 'Ex. michaelarmstrong@example.com', 'class': 'form-control'})

    username = StringField('Username:', validators=[InputRequired(), Length(min=4, max=30)],
                           render_kw={'placeholder': 'Ex. Armstrong153', 'class': 'form-control'})

    contact_number = TelField('Contact:', validators=[InputRequired(), Length(max=20)],
                              render_kw={'placeholder': 'Enter your contact number', 'class': 'form-control'})

    password = PasswordField('Password:', validators=[InputRequired(), Length(min=8, max=20)],
                             render_kw={'placeholder': 'Enter your password', 'class': 'form-control'})

    confirm_password = PasswordField('Confirm password:', validators=[InputRequired(), Length(min=8, max=20),
                                                                     EqualTo('password',
                                                                             message='Passwords must match')], render_kw={'placeholder': 'Confirm password', 'class': 'form-control'})

    submit = SubmitField('Register', render_kw={'class': 'btn btn-soft-primary'})


class LoginForm(FlaskForm):
    email = StringField('Email:', validators=[InputRequired(), Length(min=6, max=80)],
                        render_kw={'placeholder': 'Email address', 'class': 'form-control'})

    password = PasswordField('Password:', validators=[InputRequired(), Length(min=8, max=20)],
                             render_kw={'placeholder': 'Password', 'class': 'form-control'})

    submit = SubmitField('Login', render_kw={'class': 'btn btn-soft-primary w-100'})


class ArmstrongForm(FlaskForm):
    min_num = IntegerField('Minimum Number:', validators=[InputRequired(), NumberRange(min=1)], render_kw={'id': 'min_num', 'class': 'form-control', 'value': 'initial', 'placeholder': 'Enter Min Value'})

    max_num = IntegerField('Maximum Number:', validators=[InputRequired(), NumberRange(min=1)], render_kw={'id': 'max_num','class': 'form-control', 'value': 'initial', 'placeholder': 'Enter Max Value'})

    submit = SubmitField('Find Armstrong Numbers', render_kw={'class': 'btn', 'id': 'find_armstrong_num'})


class CheckNumberForm(FlaskForm):
    check_particular_num = IntegerField('Check Number:', validators=[InputRequired(), NumberRange(min=1)], render_kw={'id': 'check_particular_num', 'class': 'form-control', 'placeholder': 'Enter Value'})

    submit = SubmitField('Check Number', render_kw={'class': 'btn', 'id': 'find_armstrong_num'})


class ProfileForm(FlaskForm):
    name = StringField('Name:', validators=[InputRequired(), Length(min=4, max=30)], render_kw={'class': 'form-control'})

    email = StringField('Email:', validators=[InputRequired(), Length(min=6, max=80), Email()], render_kw={'class': 'form-control'})

    username = StringField('Username:', validators=[InputRequired(), Length(min=4, max=20)], render_kw={'class': 'form-control'})

    contact_number = TelField('Contact:', validators=[InputRequired(), Length(max=20)], render_kw={'class': 'form-control'})

    password = PasswordField('Password:', validators=[InputRequired(), Length(min=8, max=20)], render_kw={'class': 'form-control'})

    submit = SubmitField('Save Profile', render_kw={'class': 'btn', 'id': 'find_armstrong_num'})


class FeedbackForm(FlaskForm):
    name = StringField('Name', validators=[InputRequired()], render_kw={'class': 'form-control'})

    email = StringField('Email', validators=[InputRequired(), Email()], render_kw={'class': 'form-control'})

    subject = StringField('Subject', validators=[InputRequired()], render_kw={'class': 'form-control'})

    message = TextAreaField('Message', validators=[InputRequired()], render_kw={'class': 'form-control'})

    submit = SubmitField('Submit Feedback', render_kw={'class': 'btn', 'id': 'find_armstrong_num'})
