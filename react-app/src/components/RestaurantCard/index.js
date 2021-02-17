import "./index.css"
import React, { useEffect } from "react"
import { NavLink } from "react-router-dom"

import { fetchAllReviews } from "../../store/reviews";
import { useSelector, useDispatch } from "react-redux";

const RestaurantCard = ({ restaurant }) => {
  const dispatch = useDispatch();

  const currentRestaurantReviews = useSelector((reduxState) => {
    return reduxState.reviews;
  });

  useEffect(() => {
    dispatch(fetchAllReviews(restaurant.id))
  }, [dispatch, restaurant.id]);

  

  return (
    <div className="restaurant-card-container">
      <NavLink
        style={{ textDecoration: "none" }}
        to={`/restaurants/${restaurant.id}`}
      >
        <div className="restaurant-card-container__title">
          {restaurant.name}
        </div>
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
      </NavLink>
    </div>
  );
}

export default RestaurantCard;