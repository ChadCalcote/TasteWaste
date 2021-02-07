import "./index.css";
import React from "react";

const restaurant = {
  address: "1224 S Congress Ave",
  city: "Austin",
  description:
    "Joann\u2019s Fine Foods is a South Congress neighborhood spot, a new take on the American diner, and a vacation for locals and tourists alike. Open early and late at the Austin Motel, Joann\u2019s is a welcome respite for early birds and night owls, outlaws and in-laws, all ways always.",
  id: 1,
  lat: "-97.7490700000",
  long: "30.2518270000",
  name: "Joann's Fine Foods",
  photo:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPbs93YKsB4YQpGis0wY4adNYc8FhdwFXvg&usqp=CAU",
  state: "TX",
  zip_code: "78704",
};

const RestaurantPage = () => {
    return (
      <div className="restaurant-page-container">
        <div className="restaurant-page-container__banner">
            <img src={restaurant.photo} alt="restaurant"></img>
        </div>
        <div className="restaurant-page-container__restaurant-card">
          {/* Restaurant Card */}
        </div>
        <div className="restaurant-page-container__link-bar">{/* Links */}</div>
        <div className="restaurant-page-container__reviews">{/* Reviews */}</div>
      </div>
    );
}

export default RestaurantPage;