// React Dependency
import React from "react";
// React Redux Dependency
import { useDispatch } from "react-redux";
// Material UI Component
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
// Local Component
import UserPhoto from "../UserPhoto";
// React Rating Stars Component
import ReactStars from "react-rating-stars-component";
// Redux Thunk
import { deleteReview } from "../../store/reviews";
// CSS Stylesheet
import "./index.css";

// Define Review Card Component with destructured props
const ReviewCard = ({
  review,
  user,
  currentUser,
  reviewsToDisplay,
  setReviewsToDisplay,
}) => {
  // Redux Hooks
  const dispatch = useDispatch();

  // Component Functions / Variables
  const handleReviewDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteReview(review.id));
    setReviewsToDisplay([
      ...reviewsToDisplay.filter((setReview) => setReview.id !== review.id),
    ]);
  };
  // Format the date to display on card
  const dateFormat = (date) => {
    return date.slice(5, 17);
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
