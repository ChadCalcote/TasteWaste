import "./index.css";
import React from "react";
import { NavLink } from "react-router-dom";
import reviewsReducer from "../../store/reviews";

const review = {
    bags: false,
    body: "Their carbon footprint is the size of the restuarant: SMALL",
    bowls: true,
    created: "Sun, 07 Feb 2021 11:59:09 GMT",
    cups: true,
    id: 7,
    napkins: true,
    rating: 5,
    restaurant_id: 7,
    straws: true,
    updated: "Sun, 07 Feb 2021 11:59:09 GMT",
    user_id: 7,
    utensils: false,
}

const dateFormat = (date) => {
  return date.slice(5, 17);
};


const ReviewCard = ({review, user}) => {

  return (
    <div className="review-card-container">
      <div className="review-card-container__username">
          {user.username}
      </div>
      <div className="review-card-container__date">
          {dateFormat(review.created)}
      </div>
      <div className="review-card-container__rating">
            {review.rating}
      </div>
      <div className="review-card-container__body">
        {review.body}
      </div>
    </div>
  );
};

export default ReviewCard;
