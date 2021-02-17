import "./index.css";
import React from "react";

import CancelRoundedIcon from "@material-ui/icons/CancelRounded";

const dateFormat = (date) => {
  return date.slice(5, 17);
};

const ReviewCard = ({ review, user, currentUser }) => {

  const onDelete = async () => {
    const response = await fetch(`/api/reviews/${review.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }

  return (
    <div className="review-card-container">
      <div className="review-card-container__username">
          {user.username}
          {user === currentUser ? <CancelRoundedIcon onClick={onDelete}/> : null}
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
