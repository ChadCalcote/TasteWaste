import "./index.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";


import { fetchAllReviews } from "../../store/reviews";
import { useDispatch } from "react-redux";

import ReactStars from "react-rating-stars-component";

const RestaurantCard = ({ restaurant }) => {
  const dispatch = useDispatch();

  // const [reviews, setReviews] = useState({});
  // const [rating, setRating] = useState();

  useEffect(() => {
    dispatch(fetchAllReviews(restaurant.id));
  }, [dispatch, restaurant.id]);

  return (
    <Link
      className="restaurant-card-container"
      style={{ textDecoration: "none" }}
      to={`/restaurants/${restaurant.id}`}
    >
      <h2 className="restaurant-card-container__title">{restaurant.name}</h2>
      <div className="restaurant-card-container__rating">
        <ReactStars
          count={5}
          size={24}
          edit={false}
          value={5}
          isHalf={true}
          activeColor="darkgreen"
        />
      </div>
      <div className="restaurant-card-container__address">
        {restaurant.address}
        <br />
        {`${restaurant.city}, ${restaurant.state}, ${restaurant.zip_code}`}
      </div>
      <div className="restaurant-card-container__photo">
        <img src={restaurant.photo} alt="restaurant" />
      </div>
    </Link>
  );
};

export default RestaurantCard;
