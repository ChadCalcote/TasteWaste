# Flask Dependency
from flask import Blueprint
# Import City Model
from app.models import City

# Setup Blueprint for all routes written below
city_routes = Blueprint('city', __name__)


# Retrieve single city
@city_routes.route('/<string:city>')
def city(city):
    search_city = city.capitalize()
    found_city = City.query.filter(City.name == search_city).first()
    return found_city.to_dict()
