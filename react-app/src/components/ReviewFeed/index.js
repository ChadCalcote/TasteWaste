// React Dependencies
import React, { useEffect } from "react";
// React Redux Dependencies
import { useDispatch, useSelector } from "react-redux";
// Redux Thunks
import { fetchAllUsers } from "../../store/users";
// Review Card Component
import ReviewCard from "../ReviewCard";
// CSS Stylesheet
import "./index.css";
// Define ReviewFeed Component with destructured props
const ReviewFeed = ({ reviewsToDisplay, setReviewsToDisplay, currentUser }) => {
  // Redux Hooks
  // Used to dispatch actions from store
  const dispatch = useDispatch();
  // All users from store
  const users = useSelector((reduxState) => {
      return reduxState.users;
  });
  // React Hooks
      useEffect(() => {
        dispatch(fetchAllUsers());
      }, [dispatch]);
  // Component Functions / Variables
  const reviewUser = (review) => {
    if (Array.isArray(users)) {
      let foundUser = users.find((user) => {
        return user.id === review.user_id;
      });
      return foundUser;
    } else {
      return {
        username: "Demo",
      };
    }
  };


  return (
    <div className="review-feed">
      {!Array.isArray(reviewsToDisplay) && <h3>Start the Conversation</h3>}
      {Array.isArray(reviewsToDisplay) &&
        reviewsToDisplay.map((review) => (
          <ReviewCard key={review.id} review={review} user={reviewUser(review)} currentUser={currentUser} reviewsToDisplay={reviewsToDisplay} setReviewsToDisplay={setReviewsToDisplay} className="review" />
        ))}
    </div>
  );
};

export default ReviewFeed;