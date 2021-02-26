# Flask Dependencies
from flask import Blueprint, jsonify, session, request
# Flask Login Dependencies
from flask_login import login_required, current_user
# Flask Form for Validation
from app.forms import ReviewForm
# Import Database Models
from app.models import User, db, Review, Restaurant
# DateTime Object to be used for reviews
import datetime
# Setup Blueprint for all routes written below
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

# Get all reviews
@review_routes.route('/')
# @login_required
def reviews():
    reviews = Review.query.all()
    return jsonify([review.to_dict() for review in reviews])

# Get single review
@review_routes.route('/<int:id>')
@login_required
def review(id):
    review = Review.query.get(id)
    return review.to_dict()


# Post a new review
@review_routes.route('', methods=['POST'])
def addReview():
    """
    Posts a New Review
    """
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print('Request', request.json)
    print('Form', form.data)
    if form.validate_on_submit():
        print('Current User', current_user)
        review = Review(
            user_id=(form.data['user']),
            restaurant_id=(form.data['restaurant']),
            body=form.data['body'],
            rating=(form.data['rating']),
            bags=form.data['bags'],
            utensils=form.data['utensils'],
            napkins=form.data['napkins'],
            cups=form.data['cups'],
            bowls=form.data['bowls'],
            straws=form.data['straws'],
            created=datetime.datetime.now(),
            updated=datetime.datetime.now()
        )
        print('Review', review)
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}

# Edit a review
@review_routes.route('/<int:id>', methods=["PUT"])
@login_required
def edit(id):
    review = Review.query.get(id)

    if "body" in request.json:
        review.body = request.json["body"]
    if "rating" in request.json:
        review.rating = request.json["rating"]
    review.updated = datetime.datetime.now()

    db.session.commit()

    return {"message": "success"}

# Delete a Review
@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete(id):
    review = Review.query.get(id)
    # if current_user.id == review.user_id:
    db.session.delete(review)
    db.session.commit()
    # else:
    #     return {"error": "You are not authorized to delete this review"}

    return review.to_dict()

# Retrieve the user of the review
@review_routes.route('/<int:id>/user')
def get_user(id):
    user_of_review = User.query.join(Review).filter(Review.id == id).filter(User.id == Review.user_id).all()
    return jsonify([user.to_dict() for user in user_of_review])


@review_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401