# Allow us to get environment variables
import os
# Flask Dependencies
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
# Migration of database and app
from flask_migrate import Migrate
# CSRF Protection and geneate a csrf token
from flask_wtf.csrf import CSRFProtect, generate_csrf
# Allows app and Flask-Login to work together
from flask_login import LoginManager
# Import Database Models
from .models import db, User, Restaurant, Review
# Import Routes
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .api.review_routes import review_routes
from .api.restaurant_routes import restaurant_routes
from .api.city_routes import city_routes
# Allows us to use seed comands written in seeds file
from .seeds import seed_commands
# Configuration with environment variables
from .config import Config
# Setup app with name
app = Flask(__name__)

# Setup login manager
login = LoginManager(app)
# Setup login view
login.login_view = 'auth.unauthorized'

# Load the user when they login


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)
# Setup all blueprints to have url prefixes to be called from backend server
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(review_routes, url_prefix='/api/reviews')
app.register_blueprint(restaurant_routes, url_prefix='/api/restaurants')
app.register_blueprint(city_routes, url_prefix='/api/cities')
# Initialize the app with the database
db.init_app(app)
# Allows migrations to happen from the database to the app
Migrate(app, db)

# Application Security
CORS(app)

# Since we are deploying with Docker and Flask,
# we won't be using a buildpack when we deploy to Heroku.
# Therefore, we need to make sure that in production any
# request made over http is redirected to https.
# Well.........


@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get(
                            'FLASK_ENV') == 'production' else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') == 'production' else None,
                        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
