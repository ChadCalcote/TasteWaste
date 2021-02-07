from .db import db

class City(db.Model):
  __tablename__ = 'cities'

  # Identify Columns for Tables
  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(40), nullable = False, unique = True)
  photo = db.Column(db.Text, nullable = False)

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "photo": self.photo
    }
