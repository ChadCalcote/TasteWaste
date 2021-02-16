import React, { useEffect } from "react";
import ReviewCard from "../ReviewCard";
import "./index.css";

import { useDispatch, useSelector } from "react-redux";

import { fetchAllUsers } from "../../store/users";


const ReviewFeed = ({ reviewsToDisplay }) => {
  const dispatch = useDispatch();

  const users = useSelector((reduxState) => {
      return reduxState.users;
  });

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

    useEffect(() => {
      dispatch(fetchAllUsers());
    });

  return (
    <div className="review-feed">
      {!Array.isArray(reviewsToDisplay) && <h3>Start the Conversation</h3>}
      {Array.isArray(reviewsToDisplay) &&
        reviewsToDisplay.map((review) => (
          <ReviewCard key={review.id} review={review} user={reviewUser(review)} className="review" />
        ))}
    </div>
  );
};

export default ReviewFeed;