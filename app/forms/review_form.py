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
    restuarant = IntegerField('restuarant', validators=[DataRequired()])
    body = TextField('body', validators=[DataRequired()])
    rating = IntegerField('rating', validators=[DataRequired()])
    bags = BooleanField('bags', validators=[DataRequired()])
    utensils = BooleanField('utensils', validators=[DataRequired()])
    napkins = BooleanField('napkins', validators=[DataRequired()])
    cups = BooleanField('cups', validators=[DataRequired()])
    bowls = BooleanField('bowls', validators=[DataRequired()])
    straws = BooleanField('straws', validators=[DataRequired()])