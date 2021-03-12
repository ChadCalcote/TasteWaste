# Import Setup Database
from .db import db

# Setup City Model


class City(db.Model):
    __tablename__ = 'cities'

    # Identify Columns for Tables with any constraints
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    photo = db.Column(db.Text, nullable=False)
    lng = db.Column(db.String, nullable=False)
    lat = db.Column(db.String, nullable=False)

    # Return instances of City class as dictionaries
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "photo": self.photo,
            "lng": self.lng,
            "lat": self.lat
        }
