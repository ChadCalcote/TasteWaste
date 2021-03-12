# Import Flask Form
from flask_wtf import FlaskForm
# Import Field Types
from wtforms import StringField
# Import Validators for data to be added to database correctly
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User

# Check if the user exists in the database


def user_exists(form, field):
    print("Checking if user exists", field.data)
    # Grabs username from input
    username = field.data
    # Search for user in database
    user = User.query.filter(User.username == username).first()
    if not user:
        raise ValidationError("Email provided not found.")

# Check if password matches to hashed password in database


def password_matches(form, field):
    print("Checking if password matches")
    # Grabs password from input
    password = field.data
    # Grabs username from input
    username = form.data['username']
    # Search for user in database
    user = User.query.filter(User.username == username).first()
    if not user:
        raise ValidationError("No such user exists.")
    # Checks password with User model method
    if not user.check_password(password):
        raise ValidationError("Password was incorrect.")

# Setup Login Form


class LoginForm(FlaskForm):
    # username string field checks if data has been inputted and username exists in database
    username = StringField('username', validators=[
                           DataRequired(), user_exists])
    # password string field checks if data has been inputted and password matches to what is in database
    password = StringField('password', validators=[
                           DataRequired(), password_matches])
