from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Restaurant, Review

restaurant_routes = Blueprint('restaurants', __name__)