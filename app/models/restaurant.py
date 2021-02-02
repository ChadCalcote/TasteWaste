from .db import db
class Restaurant(db.Model):
  __tablename__ = 'restaurants'

  # Identify Columns for Tables
  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  photo = db.Column(db.String(100000), default='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-icon%2Fimportant-person_696850.htm&psig=AOvVaw3pkEtaQXwdXgoV2gLhJoy7&ust=1612388763560000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLD9o7GWzO4CFQAAAAAdAAAAABAD')
  zip_code = db.Column(db.String(10), nullable = False)
  hashed_password = db.Column(db.String(255), nullable = False)

  # Set up has many relationship
#   reviews = db.relationship('Review', back_populates='user')

  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email
    }