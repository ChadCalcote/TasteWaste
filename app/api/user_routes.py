# Flask Dependencies
from flask import Blueprint, jsonify
# Flask Login Dependencies
from flask_login import login_required
# Import Database Models
from app.models import User, Review
# Setup Blueprint for all routes written below
user_routes = Blueprint('users', __name__)

# Retrieve All Users
@user_routes.route('/')
# @login_required
def users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users])

# Retrieve single user by ID
@user_routes.route('/<int:id>')
# @login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

# Retrieve all reviews from single user
@user_routes.route('/<int:id>/reviews')
@login_required
def user_reviews(id):
    user_reviews = Review.query.filter(Review.user_id == id).all()
    return jsonify([review.to_dict() for review in user_reviews])
