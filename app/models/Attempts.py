from flask_login import UserMixin
from ..config.database import db
from sqlalchemy.sql import func


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
