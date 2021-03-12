# Import FlaskForm
from flask_wtf import FlaskForm
# FieldTypes
from wtforms import StringField, TextField, IntegerField, BooleanField
# Form Validators for Database Input
from wtforms.validators import DataRequired, ValidationError
# Import User Model
from app.models import User

# Check if user exists


def user_exists(form, field):
    print("Checking if user exits", field.data)
    # Originally was puting in user ID in the form, not necessarily needed now
    id = field.data
    # Finds user in database
    user = User.query.filter(User.id == id).first()
    if not user:
        raise ValidationError("User is not registered.")


class ReviewForm(FlaskForm):
    # Setup Form Fields with validations on all except Boolean Fields (avoid doing DataRequired on Boolean Fields at all costs)
    user = IntegerField('user', validators=[DataRequired(), user_exists])
    restaurant = IntegerField('restaurant', validators=[DataRequired()])
    body = TextField('body', validators=[DataRequired()])
    rating = IntegerField('rating', validators=[DataRequired()])
    bags = BooleanField('bags')
    utensils = BooleanField('utensils')
    napkins = BooleanField('napkins')
    cups = BooleanField('cups')
    bowls = BooleanField('bowls')
    straws = BooleanField('straws')
