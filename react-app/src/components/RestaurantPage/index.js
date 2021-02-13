// React Dependencies
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Local Components
import RestaurantCard from "../RestaurantCard";
import ReviewModal from "../auth/ReviewModal";
import ReviewFeed from "../ReviewFeed";

// Icons
import directions from "../../resources/directions.svg";
import order from "../../resources/orderFood.svg";
import call from "../../resources/phone.svg";

// CSS
import "./index.css";

// Thunks
import { fetchOneRestaurant } from "../../store/restaurants";
import { fetchAllReviews } from "../../store/reviews";
import { fetchAllUsers } from "../../store/users";

const RestaurantPage = ({ changeImg, user }) => {
  const params = useParams();
  const dispatch = useDispatch();

  const restaurant = useSelector((reduxState) => {
    return reduxState.restaurants;
  });

  const reviews = useSelector((reduxState) => {
    return reduxState.reviews;
  });

  const users = useSelector((reduxState) => {
    return reduxState.users;
  });

  const [ reviewsToDisplay, setReviewsToDisplay ] = useState([])


  const { restaurantId } = params;

  useEffect(() => {
    changeImg("darkgreen")
  });

  useEffect(() => {
    dispatch(fetchOneRestaurant(restaurantId));
    dispatch(fetchAllReviews(restaurantId));
  }, [dispatch, restaurantId]);

  useEffect(() => {
    dispatch(fetchAllReviews(restaurantId))
  }, [ReviewModal, restaurantId]);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (reviews[0]) {
      setReviewsToDisplay([...reviews])
    }
  }, [dispatch, reviews]);

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
    <div className="restaurant-page-container">
      <div className="restaurant-page-container__banner">
        <img className="photo" src={restaurant.photo} alt="restaurant"></img>
        <RestaurantCard restaurant={restaurant} />
      </div>
      <div className="restaurant-page-container__link-bar">
        Leave Review
        <ReviewModal user={user} restaurant={restaurant} reviewsToDisplay={reviewsToDisplay} setReviewsToDisplay={setReviewsToDisplay} />
        Get Directions
        <img src={directions} alt="directions" />
        Order Food
        <img src={order} alt="order" />
        Call Business
        <img src={call} alt="call" />
      </div>
      <div>
        <ReviewFeed reviewsToDisplay={reviewsToDisplay} setReviewsToDisplay={setReviewsToDisplay} />
      </div>
    </div>
  );
};

export default RestaurantPage;