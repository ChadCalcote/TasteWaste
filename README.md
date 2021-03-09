# TasteWaste
*By [Chad Calcote](http://chadcalcote.com/) - [Live Site](https://tastewaste.herokuapp.com/)*

A consumer-based review app geared to increase sustainability practices in the restaurant industry.

For a deeper dive into my planning process and code setup, please visit my [Wiki](https://github.com/ChadCalcote/TasteWaste/wiki)!

**Table of Contents**
  * [TasteWaste at a Glance](#TasteWaste-at-a-glance)
  * [Technologies Used](#technologies-used)
  * [Application Architecture](#application-architecture)
  * [Frontend Overview](#frontend-overview)
  * [Backend Overview](#backend-overview)
  * [Backend Installation and Setup](#Backend-Installation-and-Setup)
  * [Frontend Installation and Run Application Locally](#Frontend-Installation-and-Run-Application-Locally)
  * [Conclusion](#conclusion)

## TasteWaste at a Glance
TasteWaste is a consumer-based review app geared to increase sustainability practices in the restaurant industry.

The application is made with a React frontend utilizing mostly original components and some material-ui components.
The backend is a Python Flask server with a PostgreSQL database.

**Key Features**
* User sign in / sign up with flask-login authentication and encrypted password with werkzeug

![Animated GIF-downsized_large](https://user-images.githubusercontent.com/65975008/110410419-172fb280-8046-11eb-87d7-3157ce57ec49.gif)

* View other user reviews, add new reviews, or delete your own reviews
* View restaurants using TasteWaste in your area
* Call restaurant, get directions to their location, and view their menu

## Technologies Used
* Frontend
  * React
  * Javascript
  * Redux
  * CSS
  * Material-UI
* Backend
  * Flask
  * Python
  * Postgres
  * SQLAlchemy
  * Alembic
  * Heroku deployment via Docker

## Application Architecture
The frontend is a `create-react-app` using functional components with hooks. The backend is a Flask server with various RESTful endpoints. They are deployed via Docker to a Heroku server.

##### TasteWaste Postgres Database Schema
![image](https://user-images.githubusercontent.com/65975008/110405539-fc594000-803d-11eb-88d6-e439fc2950f7.png)

## Frontend Overview
The front end is an original design aiming for a modern website with original styling. I implemented a custom component library for all restaurants, reviews, and users to keep styling the same and DRY up the code base.

To render out the unique rating for each restaurant, I had to make an API call to fetch all the reviews from that restaurant and construct a function that calculated the average of all of the ratings from those reviews:

<img width="852" alt="TasteWaste" src="https://user-images.githubusercontent.com/65975008/110406263-2bbc7c80-803f-11eb-9df9-b28b9109d997.png">


## Backend Overview
The Flask backend is a collection of RESTful routes serving data to the frontend and an interface with the Postgres database.

The database is queried using the SQLAlchemy ORM, and seed data added using the Alembic library.

To get all of the reviews from a single restaurant I had to write a custom query that filtered the Reivew model using the restaurant id passed into the route:

<img width="920" alt="TasteWaste (1)" src="https://user-images.githubusercontent.com/65975008/110406557-a9808800-803f-11eb-82c5-4af9f4ec6506.png">


## Backend Installation and Setup

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/ChadCalcote/TasteWaste
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the .env.example with proper settings for your
   development environment

4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Frontend Installation and Run Application Locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

No environment variables are needed to run this application in development, but be sure to set the REACT_APP_BASE_URL environment variable in heroku!

This app will be automatically built when you deploy to heroku, please see the `heroku-postbuild` script in your `express.js` applications `package.json` to see how this works.

1. Change Directory to react-app

   ```bash
   cd react-app
   ```
   
2. Install Dependencies

  ```bash
   npm install
   ```
 
3. Start the local host

 ```bash
   npm start
   ```

4. Visit application at localhost:3000 (changes you make locally will appear)


## Conclusion
COVID-19 has minimized our dining experiences to mostly takeout service only. With that, this means more of those to-go boxes going into your trash. What are your favorite restaurants doing to reduce waste and help the planet? Our application dives into this question by rating restaurants' sustainability practices while offering solutions.

Future features would include a search bar to find restaurants, more information in review form to better support sustainability efforts, and expand to cities across the U.S. rather than select cities.
