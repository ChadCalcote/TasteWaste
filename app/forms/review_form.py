from flask_wtf import FlaskForm
from wtforms import StringField, TextField, IntegerField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User

def user_exists(form, field):
    print("Checking if user exits", field.data)
    id = field.data
    user = User.query.filter(User.id == id).first()
    if not user:
        raise ValidationError("User is not registered.")


class ReviewForm(FlaskForm):
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