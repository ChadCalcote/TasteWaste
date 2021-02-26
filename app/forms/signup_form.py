# Import FlaskForm
from flask_wtf import FlaskForm
# Field Types
from wtforms import StringField
# Validate From Data going into Database
from wtforms.validators import DataRequired, Email, ValidationError
# Import User Model
from app.models import User

# Check if user exists
def user_exists(form, field):
    print("Checking if user exits", field.data)
    # Grabs email from user input on form
    email = field.data
    # Search for user in database
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")


class SignUpForm(FlaskForm):
    # Setup Form Fields, All Fields Required For Database Entry
    username = StringField('username', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists])
    photo = StringField('photo', validators=[DataRequired()])
    zipCode = StringField('zipCode', validators=[DataRequired()])
    password = StringField('password', validators=[DataRequired()])
