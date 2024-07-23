from ..config.database import db
from sqlalchemy.sql import func


class Feedback(db.Model):
    __tablename__ = 'feedbacks'

    id = db.Column(db.Integer, primary_key=True)
    usr_id = db.Column(db.String, db.ForeignKey('users.usr_id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
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
