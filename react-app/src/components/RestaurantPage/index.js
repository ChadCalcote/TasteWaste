// React Dependencies
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Local Components
import RestaurantCard from "../RestaurantCard";
import ReviewCard from "../ReviewCard";
import ReviewModal from "../auth/ReviewModal";

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


  const { restaurantId } = params;

  useEffect(() => {
    changeImg("darkgreen")
  })

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchOneRestaurant(restaurantId));
    dispatch(fetchAllReviews(restaurantId));
  }, [dispatch, restaurantId]);

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
        <ReviewModal user={user} restaurant={restaurant}/>
        Get Directions
        <img src={directions} alt="directions" />
        Order Food
        <img src={order} alt="order" />
        Call Business
        <img src={call} alt="call" />
      </div>
      <div className="restaurant-page-container__reviews">
        Recent Reviews
        {reviews.length > 0
          ? reviews.map((review) => (
              <ReviewCard
                className="review"
                key={review.id}
                review={review}
                user={reviewUser(review)}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default RestaurantPage;