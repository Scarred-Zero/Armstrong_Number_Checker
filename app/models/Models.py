import uuid
from ..config.database import db
from flask_login import UserMixin
from sqlalchemy.sql import func


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    usr_id = db.Column(db.String, nullable=False)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    username = db.Column(db.String(50), nullable=False)
    contact_number = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(200), nullable=False)
    role = db.Column(db.String(10), default='user')
    is_email_verified = db.Column(db.Boolean, default=False)
    date_created = db.Column(db.DateTime(timezone=True), default=func.now())

    def __init__(self, name, email, username, contact_number, password, role='user',
                 date_created=func.now()):
        self.usr_id = str(uuid.uuid4())
        self.name = name
        self.email = email
        self.username = username
        self.contact_number = contact_number
        self.password = password
        self.role = role
        self.date_created = date_created

    def get_all(self):
        users = self.query.all()
        return users

    def find_by_id(self, usr_id):
        user = self.query.filter_by(usr_id=usr_id).first()  # Get the first result
        return user

    def data(self):
        return {
            'usr_id': self.usr_id,
            'name': self.name,
            'email': self.email,
            'username': self.username,
            'contact_number': self.contact_number,
            'password': self.password,
            'role': self.role,
            'date_created': self.date_created,
        }


# FEEDBACK MODEL
class Feedback(db.Model):
    __tablename__ = 'feedbacks'

    id = db.Column(db.Integer, primary_key=True)
    usr_id = db.Column(db.String, db.ForeignKey('users.usr_id'), nullable=False)
    name = db.Column(db.String(100), db.ForeignKey('users.name'), nullable=False)
    email = db.Column(db.String(100), db.ForeignKey('users.email'), nullable=False)
    subject = db.Column(db.String(100), nullable=False)
    message = db.Column(db.Text, nullable=False)
    timestamp = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False)

    def __init__(self, usr_id, name, email, subject, message):
        self.usr_id = usr_id
        self.name = name
        self.email = email
        self.subject = subject
        self.message = message

    @classmethod
    def get_all(cls):
        return cls.query.all()

    def data(self):
        return {
            'usr_id': self.usr_id,
            'name': self.name,
            'email': self.email,
            'subject': self.subject,
            'message': self.message,
            'timestamp': self.timestamp
        }

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()


# ATTEMPTS MODEL
class LoginAttempt(db.Model, UserMixin):
    __tablename__ = 'login_attempts'

    id = db.Column(db.Integer, primary_key=True)
    usr_id = db.Column(db.String, db.ForeignKey('users.usr_id'), nullable=False)
    attempt_time = db.Column(db.DateTime(timezone=True), default=func.now())
    success = db.Column(db.Boolean(), default=False, nullable=False)

    def __init__(self, usr_id, attempt_time=func.now()):
        self.usr_id = usr_id
        self.attempt_time = attempt_time

    def get_all(self):
        all_attempts = self.query.all()
        return all_attempts

    def data(self):
        return {
            'user_id': self.user_id,
            'attempt_time': self.attempt_time
        }
