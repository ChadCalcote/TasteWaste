from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='RickRoso', email='demo@aa.io', photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YsD_la2rVKnomkk6GhPMy7a0z2HskhmPFQ&usqp=CAU',
                hashed_password='rossboss', zip_code=78704)

    db.session.add(demo)

    db.session.commit()

    jimmy = User(username='JimmyBuckets', email='jb@tastewaste.com', photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPXUM7HkSUlBD-H1OTJ8R_sIhAjvmNn6qj1g&usqp=CAU',
                hashed_password='miamiheat', zip_code=98101)

    db.session.add(jimmy)

    db.session.commit()

    hez = User(username='hezekiah', email='hez@tastewaste.com', photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUCjQluo2q7zdpotaVXLTD7EvLXYiRi1VAw&usqp=CAU',
                hashed_password='lookitup', zip_code=78704)

    db.session.add(hez)

    db.session.commit()

    evan = User(username='evan', email='evan@tastewaste.com', photo='https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/12573051_10153841541358427_2886908032463095761_n.jpg?_nc_cat=100&ccb=2&_nc_sid=174925&_nc_ohc=Wx-3GIf7NjUAX-jVNrz&_nc_ht=scontent-den4-1.xx&oh=a783ff6f0ab9dc718c45a11ce29e4075&oe=603DF249',
                hashed_password='portland', zip_code=80205)

    db.session.add(evan)

    db.session.commit()

    eugene = User(username='eugene', email='eugene@tastewaste.com', photo='https://media-exp1.licdn.com/dms/image/C5603AQEG6yHR1wjoyw/profile-displayphoto-shrink_800_800/0/1517239454875?e=1617840000&v=beta&t=-NwbBZTTTUg4089MTFHy2Cpw78bR5MuE_cMcL7_DdHg',
                hashed_password='shinobi', zip_code=80205)

    db.session.add(eugene)

    db.session.commit()

    mac = User(username='mac', email='mac@tastewaste.com', photo='https://pbs.twimg.com/profile_images/654128264840151040/FNq0rrj0_400x400.jpg',
                hashed_password='michigan', zip_code=80205)

    db.session.add(mac)

    db.session.commit()

    ari = User(username='ari', email='ari@tastewaste.com',
                password='meatloverspizza', zip_code=98101)

    db.session.add(ari)

    db.session.commit()

    zendaya = User(username='zendaya', email='zendaya@tastewaste.com', photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Vv5o-FfKG3fhWdU6KTmKJfw2NSJr5PxKuA&usqp=CAU',
                password='emmy', zip_code=98101)

    db.session.add(zendaya)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
