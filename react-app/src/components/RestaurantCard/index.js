import "./index.css"
import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

import { fetchAllReviews } from "../../store/reviews";
import { useSelector, useDispatch } from "react-redux";

const RestaurantCard = ({ restaurant }) => {
  const dispatch = useDispatch();

  // const [reviews, setReviews] = useState({});
  // const [rating, setRating] = useState();

  // const fetchAllReviews = (restaurantId) => {
  //   return async () => {
  //     const responseFromDb = await fetch(
  //       `/api/restaurants/${restaurantId}/reviews`
  //     );
  //     const reviewsList = await responseFromDb.json();
  //     return reviewsList;
  //   };
  // };

  // const overallScore = (reviews) => {
  //   let scores = [];
  //   for (let i = 0; i < reviews.length; i++) {
  //     let review = reviews[i];
  //     scores.push(review["rating"]);
  //   }

  //   let score = 0;
  //   for (let j = 0; j < scores.length; j++) {
  //   score += scores[j];
  //   }

  //   return score / scores.length;

  //   };

  // useEffect(() => {
  //     setReviews(fetchAllReviews(restaurant.id));
  //     console.log(reviews);
  // }, [restaurant.id]);

  // useEffect(() => {
  //   setRating(overallScore(reviews));
  // }, [reviews])


  // state to track all reviews
    // set state
  // Another state for the rating
  // useEffect to get all restaurant reviews
  // useEffect listens to first fetch

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
          {/* {rating} */}
          {/* <img
            src="https://lh3.googleusercontent.com/proxy/FbGWNQjICuLl5S5N4WRQmARk-c-UL4_A15_fgxOTmn1rc__MQ_9_YHkdr1Uc2xSq22Ftie96XDgq1tb-iKZ3DpEOkV_CnRDtC_0qn4G2EhRY"
            alt="stars"
          /> */}
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