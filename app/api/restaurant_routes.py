from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Restaurant, Review

restaurant_routes = Blueprint('restaurants', __name__)


# Retrieve All Restuarants
@restaurant_routes.route('/')
def restaurants():
    restaurants = Restaurant.query.all()
    return jsonify([restaurant.to_dict() for restaurant in restaurants])

# Retrieve single restaurant by ID
@restaurant_routes.route('/<int:id>')
def restaurant(id):
    restaurant = Restaurant.query.get(id)
    return restaurant.to_dict()

# Retrieve all reviews from single user
@restaurant_routes.route('/<int:id>/reviews')
def restaurant_reviews(id):
    restaurant_reviews = Review.query.filter(Review.restaurant_id == id).all()
    return jsonify([review.to_dict() for review in restaurant_reviews])

# Retrieve all restaurants from the same city
@restaurant_routes.route('/<string:city>')
def city_restaurants(city):
    search_city = city.capitalize()
    print(search_city)
    city_restaurants = Restaurant.query.filter(Restaurant.city == search_city).all()
    return jsonify([restaurant.to_dict() for restaurant in city_restaurants])
