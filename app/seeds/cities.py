from app.models import db, City

# Adds a demo city, you can add other cities here if you want
def seed_cities():

    austin = City(name='Austin', photo='../../react-app/src/resources/austin.png')
    denver = City(name='Denver', photo='../../react-app/src/resources/denver.jpg')
    seattle = City(name='Seattle', photo='../../react-app/src/resources/seattle.jpg')

    db.session.add(austin)
    db.session.add(denver)
    db.session.add(seattle)

    db.session.commit()





# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_cities():
    db.session.execute('TRUNCATE cities CASCADE;')
    db.session.commit()