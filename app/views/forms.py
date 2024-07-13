from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, TelField
from wtforms.validators import InputRequired, Email, EqualTo, Length


# Define your RegistrationForm using Flask-WTF
class RegistrationForm(FlaskForm):
    name = StringField('Name', validators=[InputRequired(), Length(min=4, max=30)],
                       render_kw={'placeholder': 'Ex. Michael Armstrong'})

    email = StringField('Email', validators=[InputRequired(), Email(), Length(min=6, max=80)],
                        render_kw={'placeholder': 'Ex. michaelarmstrong@example.com'})

    username = StringField('Username', validators=[InputRequired(), Length(min=4, max=20)],
                           render_kw={'placeholder': 'Ex. Armstrong153'})

    contact_number = TelField('Contact', validators=[InputRequired(), Length(max=20)],
                              render_kw={'placeholder': 'Enter your contact number'})

    password = PasswordField('Password', validators=[InputRequired(), Length(min=8, max=20)],
                             render_kw={'placeholder': 'Enter your password'})

    confirm_password = PasswordField('Confirm password', validators=[InputRequired(), Length(min=8, max=20),
                                                                     EqualTo('password',
                                                                             message='Passwords must match')])

    submit = SubmitField('Register')


class LoginForm(FlaskForm):
    email = StringField('Email', validators=[InputRequired(), Length(min=4, max=20)],
                        render_kw={'placeholder': 'Email address'})

    password = PasswordField('Password', validators=[InputRequired(), Length(min=4, max=20)],
                             render_kw={'placeholder': 'Password'})

    submit = SubmitField('Login')


class ProfileForm(FlaskForm):
    name = StringField('Name', validators=[InputRequired(), Length(min=4, max=30)], render_kw={'placeholder': 'Ex. Michael Armstrong'})

    email = StringField('Email', validators=[InputRequired(), Length(min=6, max=80), Email()], render_kw={'placeholder': 'Email address'})

    username = StringField('Username', validators=[InputRequired(), Length(min=4, max=20)], render_kw={'placeholder': 'Ex. Armstrong153'})

    submit = SubmitField('Save Profile')
