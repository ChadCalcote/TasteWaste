import "./index.css";
import React from "react";

import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import UserPhoto from "../UserPhoto";
import ReactStars from "react-rating-stars-component";

import { useDispatch } from "react-redux";
import { deleteReviewTest } from "../../store/reviews";


const dateFormat = (date) => {
  return date.slice(5, 17);
};

const ReviewCard = ({
  review,
  user,
  currentUser,
  reviewsToDisplay,
  setReviewsToDisplay,
}) => {
  const dispatch = useDispatch();

  const handleReviewDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteReviewTest(review.id));
    setReviewsToDisplay([
      ...reviewsToDisplay.filter((setReview) => setReview.id !== review.id),
    ]);
  };

  return (
    <div className="review-card-container">
      <div className="review-card-container__username">
        <div>
          <UserPhoto user={user} />
          {user.username}
        </div>
        {currentUser && user.id === currentUser.id ? (
          <CancelRoundedIcon onClick={handleReviewDelete} />
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
