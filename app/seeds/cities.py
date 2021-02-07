from app.models import db, City

# Adds a demo city, you can add other cities here if you want
def seed_cities():

    austin = City(name='Austin', photo='../../react-app/src/resources/austin.png', lat="30.267071088546306", lng="-97.74654428141095")
    denver = City(name='Denver', photo='../../react-app/src/resources/denver.jpg', lat="39.73733106711871", lng="-104.98214927100975")
    seattle = City(name='Seattle', photo='../../react-app/src/resources/seattle.jpg', lat="47.605536396351354", lng="-122.33108563970562")

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