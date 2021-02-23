from app.models import db, Restaurant

# Adds a demo restaurant, you can add other restaurants here if you want
def seed_restaurants():

    joann = Restaurant(name='Joann\'s Fine Foods', description='Joann’s Fine Foods is a South Congress neighborhood spot, a new take on the American diner, and a vacation for locals and tourists alike. Open early and late at the Austin Motel, Joann’s is a welcome respite for early birds and night owls, outlaws and in-laws, all ways always.', photo='https://joannsaustin.com/wp-content/uploads/2018/10/MH_MMG_JOANNS_1568_FINAL-e1540241567159.jpg', address='1224 S Congress Ave', city='Austin', state='TX', zip_code='78704',
                lat="30.251772505429667", lng="-97.7491314024451")

    db.session.add(joann)

    db.session.commit()

    lucky = Restaurant(name='Lucky Robot', description='Hip option for Tokyo-inspired street fare including Asian tacos, sushi & dumplings, plus sake punch.', photo='https://www.luckyrobotatx.com/spillover/proto/luckyrobotatx/images/design/promo6.jpg', address='1303 S Congress Ave', city='Austin', state='TX', zip_code='78704',
                lat="30.25093840149734", lng="-97.74901338525792")

    db.session.add(lucky)

    db.session.commit()

    marker10 = Restaurant(name='Marker 10 Spirits and Cuisine', description='Cocktails, sushi & bar bites served in a posh lounge featuring a patio with lake views at the Hyatt.', photo='https://resizer.otstatic.com/v2/photos/wide-huge/1/26369987.jpg', address='208 Barton Springs Rd', city='Austin', state='TX', zip_code='78704',
                lat="30.261064352407683", lng="-97.74743137360971")

    db.session.add(marker10)

    db.session.commit()

    cityO = Restaurant(name='City O\' City', description='Bohemian hangout dishing up high-concept vegetarian fare to meat & plant eaters alike.', photo='https://custombyrushton.com/w/wp-content/uploads/2015/04/city-o-city-vegetarian-restaurant-denver_1.jpg', address='206 E 13th Ave', city='Denver', state='CO', zip_code='80203',
                lat="39.73686403703116", lng="-104.98463530223482")

    db.session.add(cityO)

    db.session.commit()

    osaka = Restaurant(name='Osaka Ramen', description='Busy restaurant & bar specializing in ramen bowls plus other Japanese food in a playful setting.', photo='https://assets.simpleviewinc.com/simpleview/image/fetch/q_75/https://assets.simpleviewinc.com/simpleview/image/upload/crm/denver/osaka-ramen-cb7d030dede0c78_cb7d03ef-0096-9fed-3e04b4469eae13a8.jpg', address='2611 Walnut St', city='Denver', state='CO', zip_code='80205',
                lat="39.75968772727945", lng="-104.98608384456384")

    db.session.add(osaka)

    db.session.commit()

    barcelona = Restaurant(name='Barcelona Wine Bar', description='Tapas, paella & an extensive list of Spanish wines on offer amid quaint-meets-industrial decor.', photo='https://barcelonawinebar.com/media/Screen-Shot-2018-04-02-at-4.24.37-PM.png', address='2900 Larimer St', city='Denver', state='CO', zip_code='80205',
                lat="39.761490980261954", lng="-104.98131768689338")

    db.session.add(barcelona)

    db.session.commit()

    kamonegi = Restaurant(name='kamonegi', description='Pocket-sized space specializing in handmade soba noodles, tempura & other Japanese specialties.', photo='https://cdn.vox-cdn.com/thumbor/KPFCra3K9ZyTwKLBaOJRN2cc4G8=/0x0:2000x1334/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/57142447/Pratt_Kamonegi_017.0.jpg', address='1054 N 39th St', city='Seattle', state='WA', zip_code='98103',
                lat="47.654173311085216", lng="-122.34428170201583")

    db.session.add(kamonegi)

    db.session.commit()

    junebaby = Restaurant(name='Junebaby', description='Classic Southern fare made with heirloom ingredients is served in a stylish locale with cocktails.', photo='https://cdn.vox-cdn.com/thumbor/2QuzoRBdEK8jcGAECGV2LLKvlP8=/0x0:2000x1333/1200x675/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/54460701/Pratt_Junebaby_56.0.jpg', address='2122 NE 65th St', city='Seattle', state='WA', zip_code='98115',
                lat="47.67608156256543", lng="-122.30418100201531")

    db.session.add(junebaby)

    db.session.commit()

    fats = Restaurant(name='Fat\'s Chicken and Waffles', description='Small, stylish cafe offers Southern favorites such as chicken & waffles and catfish & greens.', photo='http://fatschickenandwaffles.com/wp-content/themes/1140FluidStarkers/images/about-bk.jpg', address='2726 E Cherry St', city='Seattle', state='WA', zip_code='98122',
                lat="47.60836081263612", lng="-122.29640408667647")

    db.session.add(fats)

    db.session.commit()




# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_restaurants():
    db.session.execute('TRUNCATE restaurants CASCADE;')
    db.session.commit()
