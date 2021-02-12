import "./index.css";
import React from "react";

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
