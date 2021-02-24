import "./index.css";
import React from "react";

import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import UserPhoto from "../UserPhoto";
import ReactStars from "react-rating-stars-component";

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
        <UserPhoto user={user} />
        {user.username}
        {currentUser && user.id === currentUser.id ? (
          <CancelRoundedIcon onClick={onDelete} />
        ) : null}
      </div>
      <div className="review-card-container__date">
        {dateFormat(review.created)}
      </div>
      <div className="review-card-container__rating">
        <ReactStars
          count={5}
          size={24}
          edit={false}
          value={review.rating}
          isHalf={true}
          activeColor="darkgreen"
        />
      </div>
      <div className="review-card-container__body">{review.body}</div>
    </div>
  );
};

export default ReviewCard;
