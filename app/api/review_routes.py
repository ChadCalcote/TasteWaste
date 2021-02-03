from flask import Blueprint, jsonify, session, request
from app.forms import ReviewForm
from app.models import User, db, Review, Restaurant
import datetime

review_routes = Blueprint('review', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages

@review_routes.route('/add', methods=['POST'])
def addReview():
    """
    Posts a New Review
    """
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            user_id=form.data['user'],
            restaurant_id=form.data['restaurant'],
            body=form.data['body'],
            rating=form.data['rating'],
            bags=form.data['bags'],
            utensils=form.data['utensils'],
            napkins=form.data['napkins'],
            cups=form.data['cups'],
            bowls=form.data['bowls'],
            straws=form.data['straws'],
            created=datetime.datetime.now(),
            updated=datetime.datetime.now()
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}

@review_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401