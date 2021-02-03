from .db import db

class Review(db.Model):
  __tablename__ = 'reviews'

  # Identify Columns for Tables
  id = db.Column(db.Integer, primary_key = True)
  user_id = db.Column(db.Integer,  db.ForeignKey('users.id'), nullable = False)
  restaurant_id = db.Column(db.Integer,  db.ForeignKey('restaurants.id'), nullable = False)
  body = db.Column(db.Text, nullable = False)
  rating = db.Column(db.Integer, nullable = False)
  bags = db.Column(db.Boolean, default = False)
  utensils = db.Column(db.Boolean, default = False)
  napkins = db.Column(db.Boolean, default = False)
  cups = db.Column(db.Boolean, default = False)
  bowls = db.Column(db.Boolean, default = False)
  straws = db.Column(db.Boolean, default = False)
  created = db.Column(db.DateTime, nullable = False)
  updated = db.Column(db.DateTime, nullable = False)

  # Set up has many relationship
  restaurant = db.relationship('Restaurant', back_populates='reviews')
  user = db.relationship('User', back_populates='reviews')

  # Access Data From Requests
  def to_dict(self):
    return {
      "id": self.id,
      "user_id": self.user_id,
      "restaurant_id": self.restaurant_id,
      "body": self.body,
      "rating": self.rating,
      "bags": self.bags,
      "utensils": self.utensils,
      "napkins": self.napkins,
      "cups": self.cups,
      "bowls": self.bowls,
      "straws": self.straws,
      "created": self.created,
      "updated": self.updated,
    }