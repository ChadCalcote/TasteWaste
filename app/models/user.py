# Import Created Database
from .db import db
# Security Imports for passwords
from werkzeug.security import generate_password_hash, check_password_hash
# User Mixin allows us to call is_authenticated or get_id later
from flask_login import UserMixin

# Setup User Class


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    # Identify Columns for Tables
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    photo = db.Column(db.Text, default='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-icon%2Fimportant-person_696850.htm&psig=AOvVaw3pkEtaQXwdXgoV2gLhJoy7&ust=1612388763560000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLD9o7GWzO4CFQAAAAAdAAAAABAD')
    zip_code = db.Column(db.String(10), nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)

    # Set up has many relationship
    reviews = db.relationship('Review', back_populates='user')

    # Return the hashed password
    @property
    def password(self):
        return self.hashed_password

    # Generates a hashed password based on password from input
    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    # Checks if password equals password passed into form
    def check_password(self, password):
        return check_password_hash(self.password, password)

    # Return the user in a dictionary
    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "photo": self.photo,
            "zip_code": self.zip_code
        }
