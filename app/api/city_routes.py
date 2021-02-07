from flask import Blueprint
from app.models import City

city_routes = Blueprint('city', __name__)


# Retrieve single city
@city_routes.route('/<string:city>')
def city(city):
    search_city = city.capitalize()
    found_city = City.query.filter(City.name == search_city).first()
    return found_city.to_dict()