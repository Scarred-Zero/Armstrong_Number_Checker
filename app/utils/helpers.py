from random import randint
import re
from flask import flash


# Custom password validation function

def validate_password(password, length_error='Password must be at least 8 characters long.',
                      uppercase_error='Password must contain at least one uppercase letter.',
                      lowercase_error='Password must contain at least one lowercase letter.',
                      digit_error='Password must contain at least one digit.',
                      special_error='Password must contain at least one special character.'):
    # Check length (at least 8 characters)
    if len(password) < 8:
        flash(length_error)
        return length_error
    # Check for at least 1 uppercase letter
    if not re.search(r'[A-Z]', password):
        flash(uppercase_error)
        return uppercase_error
    # Check for at least 1 lowercase letter
    if not re.search(r'[a-z]', password):
        flash(lowercase_error)
        return lowercase_error
    # Check for at least 1 digit
    if not re.search(r'\d', password):
        flash(digit_error)
        return digit_error
    # Check for at least 1 special character (non-alphanumeric)
    if not re.search(r'[!@#$%^&*()_+{}[\]:;<>,.?~]', password):
        flash(special_error)
        return special_error
    return None  # Password meets all requirements


def generate_id(length=8):
    """Generates random id"""
    return [randint(1, 9).__str__() for _ in range(length)]
