// React Dependencies
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Local Components
import RestaurantCard from "../RestaurantCard";
import ReviewModal from "../auth/ReviewModal";
import ReviewFeed from "../ReviewFeed";

// Icons
import addReview from "../../resources/addReview.svg";
import directions from "../../resources/directions.svg";
import order from "../../resources/orderFood.svg";
import call from "../../resources/phone.svg";

// CSS
import "./index.css";

// Thunks
import { fetchOneRestaurant } from "../../store/restaurants";
import { fetchAllReviews } from "../../store/reviews";

const RestaurantPage = ({ changeImg, user }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const restaurant = useSelector((reduxState) => {
    return reduxState.restaurants;
  });

  const reviews = useSelector((reduxState) => {
    return reduxState.reviews;
  });

  const [reviewsToDisplay, setReviewsToDisplay] = useState([]);

  const { restaurantId } = params;

  useEffect(() => {
    changeImg("darkgreen");
  });

  useEffect(() => {
    dispatch(fetchOneRestaurant(restaurantId));
    dispatch(fetchAllReviews(restaurantId));
  }, [dispatch, restaurantId]);

  useEffect(() => {
    if (reviews[0]) {
      setReviewsToDisplay([...reviews]);
    }
  }, [dispatch, reviews]);

  return (
    <div className="restaurant-page__container">
      <div className="restaurant-page__banner">
        <img className="photo" src={restaurant.photo} alt="restaurant"></img>
      </div>
      <div className="restaurant-page__content">
        <RestaurantCard restaurant={restaurant} />

        <ul className="restaurant-page__link-bar">
          <li>
            <button onClick={handleOpen}>
              Leave Review
              <img src={addReview} alt="addReview" />
            </button>
          </li>
          <li>
            <button onClick={handleOpen}>
              Get Directions
              <img src={directions} alt="directions" />
            </button>
          </li>
          <li>
            <button onClick={handleOpen}>
              Order Food
              <img src={order} alt="order" />
            </button>
          </li>
          <li>
            <button onClick={handleOpen}>
              Call Business
              <img src={call} alt="call" />
            </button>
          </li>
        </ul>

        <ReviewFeed
          reviewsToDisplay={reviewsToDisplay}
          setReviewsToDisplay={setReviewsToDisplay}
          currentUser={user}
        />
      </div>
      <ReviewModal
        user={user}
        restaurant={restaurant}
        reviewsToDisplay={reviewsToDisplay}
        setReviewsToDisplay={setReviewsToDisplay}
      />
    </div>
  );
};

export default RestaurantPage;
