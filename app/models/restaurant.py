from .db import db
class Restaurant(db.Model):
  __tablename__ = 'restaurants'

  # Identify Columns for Tables
  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(100), nullable = False, unique = True)
  description = db.Column(db.Text, nullable = False)
  photo = db.Column(db.String(100000), default='https://cdn.iconscout.com/icon/free/png-256/restaurant-1495593-1267764.png')
  address = db.Column(db.String(50), nullable = False)
  city = db.Column(db.String(50), nullable = False)
  state = db.Column(db.String(3), nullable = False)
  zip_code = db.Column(db.String(10), nullable = False)
  long = db.Column(db.Float(10,6), nullable = False)
  lat = db.Column(db.Float(10,6), nullable = False)

  # Set up has many relationship
#   reviews = db.relationship('Review', back_populates='restaurant')

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "description": self.description,
      "photo": self.photo,
      "address": self.address,
      "city": self.city,
      "state": self.state,
      "zip_code": self.zip_code,
      "long": self.long,
      "lat": self.lat
    }