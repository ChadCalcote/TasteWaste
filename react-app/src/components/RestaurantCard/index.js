import "./index.css"
import React from "react"

const restaurant = {
  address: "1224 S Congress Ave",
  city: "Austin",
  description:
    "Joann’s Fine Foods is a South Congress neighborhood spot, a new take on the American diner, and a vacation for locals and tourists alike. Open early and late at the Austin Motel, Joann’s is a welcome respite for early birds and night owls, outlaws and in-laws, all ways always.",
  id: 1,
  lat: "-97.7490700000",
  long: "30.2518270000",
  name: "Joann's Fine Foods",
  photo:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPbs93YKsB4YQpGis0wY4adNYc8FhdwFXvg&usqp=CAU",
  state: "TX",
  zip_code: "78704",
  rating: 3
};


const RestaurantCard = () => {


  return (
    <div className="restaurant-card-container">
      <div className="restaurant-card-container__title">{restaurant.name}</div>
      <div className="restaurant-card-container__rating">
        <img
          src="https://lh3.googleusercontent.com/proxy/FbGWNQjICuLl5S5N4WRQmARk-c-UL4_A15_fgxOTmn1rc__MQ_9_YHkdr1Uc2xSq22Ftie96XDgq1tb-iKZ3DpEOkV_CnRDtC_0qn4G2EhRY"
          alt="stars"
        />
      </div>
      <div className="restaurant-card-container__address street">
        {restaurant.address}
      </div>
      <div className="restaurant-card-container__address city">{`${restaurant.city}, ${restaurant.state}, ${restaurant.zip_code}`}</div>
      <div className="restaurant-card-container__photo">
        <img src={restaurant.photo} alt="restaurant" />
      </div>
    </div>
  );
}

export default RestaurantCard;