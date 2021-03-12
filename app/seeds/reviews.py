# Import Database and Review Model
from app.models import db, Review
import datetime
# Adds a demo restaurant, you can add other restaurants here if you want


def seed_reviews():

    joann = Review(user_id=1, restaurant_id=1, body='Place is vey clean, I appreciated them offering me plastic or paper bags', rating=3, bags=True, utensils=True,
                   created=datetime.datetime.now(), updated=datetime.datetime.now())

    db.session.add(joann)

    db.session.commit()

    lucky = Review(user_id=2, restaurant_id=2, body='No care in the world for saving the environment', rating=1, napkins=True, cups=True,
                   created=datetime.datetime.now(), updated=datetime.datetime.now())

    db.session.add(lucky)

    db.session.commit()

    marker10 = Review(user_id=3, restaurant_id=3, body='The most GREEN restaurant I\'ve ever been to. LEED Certified and although not my favorite, there were paper straws', rating=5, bowls=True, cups=True, bags=True, napkins=True, straws=True,
                      created=datetime.datetime.now(), updated=datetime.datetime.now())

    db.session.add(marker10)

    db.session.commit()

    cityO = Review(user_id=4, restaurant_id=4, body='GREAT to see vegan restaurants taking the lead in green initiatives in the Mile High City.', rating=4, bowls=True, cups=True, napkins=True, straws=True,
                   created=datetime.datetime.now(), updated=datetime.datetime.now())

    db.session.add(cityO)

    db.session.commit()

    osaka = Review(user_id=5, restaurant_id=5, body='Lots of plastic being used here. Would not recommend to my friends.', rating=2, bowls=False, cups=False, napkins=False, straws=True,
                   created=datetime.datetime.now(), updated=datetime.datetime.now())

    osaka1 = Review(user_id=2, restaurant_id=5, body='Using up a lot of energy with their bright lights.', rating=3, bowls=False, cups=False, napkins=False, straws=True,
                    created=datetime.datetime.now(), updated=datetime.datetime.now())

    osaka2 = Review(user_id=6, restaurant_id=5, body='I really enjoyed it, kept it simple with fine linens being used. Not a lot of waste going on in my experience', rating=5, bowls=False, cups=False, napkins=False, straws=True,
                    created=datetime.datetime.now(), updated=datetime.datetime.now())

    osaka3 = Review(user_id=3, restaurant_id=5, body='There was more plastic being used for my to-go order than I expected.', rating=1, bowls=False, cups=False, napkins=False, straws=True,
                    created=datetime.datetime.now(), updated=datetime.datetime.now())

    osaka4 = Review(user_id=4, restaurant_id=5, body='I would recommend staying away from here if you care about the Earth.', rating=2, bowls=False, cups=False, napkins=False, straws=True,
                    created=datetime.datetime.now(), updated=datetime.datetime.now())

    osaka5 = Review(user_id=2, restaurant_id=5, body='Not my favorite place to be since they are wasting SO much.', rating=3, bowls=False, cups=False, napkins=False, straws=True,
                    created=datetime.datetime.now(), updated=datetime.datetime.now())

    db.session.add(osaka)
    db.session.add(osaka1)
    db.session.add(osaka2)
    db.session.add(osaka3)
    db.session.add(osaka4)
    db.session.add(osaka5)

    db.session.commit()

    barcelona = Review(user_id=6, restaurant_id=6, body='The owner has made it their mission to make everything reusable or compostable by 2023. Definitely coming back!', rating=5, bowls=True, cups=True, napkins=True, straws=True,
                       created=datetime.datetime.now(), updated=datetime.datetime.now())

    db.session.add(barcelona)

    db.session.commit()

    kamonegi = Review(user_id=7, restaurant_id=7, body='Their carbon footprint is the size of the restuarant: SMALL', rating=5, bowls=True, cups=True, napkins=True, straws=True,
                      created=datetime.datetime.now(), updated=datetime.datetime.now())

    db.session.add(kamonegi)

    db.session.commit()

    fats = Review(user_id=1, restaurant_id=9, body='If their sustainability was a car, it would be a hummer.', rating=2,
                  created=datetime.datetime.now(), updated=datetime.datetime.now())

    db.session.add(fats)

    db.session.commit()

    junebaby = Review(user_id=2, restaurant_id=8, body='Great local business doing their part to help the environment', rating=4, bowls=True, cups=True, napkins=True, straws=True,
                      created=datetime.datetime.now(), updated=datetime.datetime.now())

    db.session.add(junebaby)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_reviews():
    db.session.execute('TRUNCATE reviews CASCADE;')
    db.session.commit()
