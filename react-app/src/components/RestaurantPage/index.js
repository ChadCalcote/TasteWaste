// React Dependencies
import React, { useEffect, useState } from "react";
// React Router Dom Dependencies
import { useParams } from "react-router-dom";
// React Redux Dependencies
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
// Thunks
import { fetchOneRestaurant } from "../../store/restaurants";
import { fetchAllReviews } from "../../store/reviews";
// Custom Hooks
import useLoader from "../hooks/useLoader";
// CSS Stylesheet
import "./index.css";

// Define RestaurantPageComponent with destructured props
const RestaurantPage = ({ user }) => {
  // React Router Dom Hooks
  const params = useParams();
  const { restaurantId } = params;
  // Redux Hooks
  // Dispatch actions from store
  const dispatch = useDispatch();
  // Restaurant from store
  const restaurant = useSelector((reduxState) => {
    return reduxState.restaurants;
  });
  // All Reviews from store
  const reviews = useSelector((reduxState) => {
    return reduxState.reviews;
  });

  const loaderClose = true;
  // React Hooks
  // Setup state for reviews to be displayed
  const [reviewsToDisplay, setReviewsToDisplay] = useState([]);
  // Setup state for open and close of review modal
  const [open, setOpen] = useState(false);
  const [loader, showLoader, hideLoader] = useLoader();
  // If there is a valid restaurantId from the url params, we will dispatch actions to fetch that restaurant and fetch all the reviews of that restaurant
  useEffect(() => {
    showLoader();
    dispatch(fetchOneRestaurant(restaurantId));
    dispatch(fetchAllReviews(restaurantId));
  }, [dispatch]);
  // If we have reviews in our store set the state of our reviews to display to those reviews
  useEffect(() => {
    if (reviews[0]) {
      setReviewsToDisplay([...reviews]);
    }
  }, [dispatch, reviews]);

  useEffect(() => {
    hideLoader();
  }, [restaurant])

  // Component Functions / Variables
  // Handle the opening of review modal
  const handleOpen = () => {
    setOpen(true);
  };

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
            <button
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${restaurant.lat},${restaurant.lng}`,
                  "_blank"
                )
              }
            >
              Get Directions
              <img src={directions} alt="directions" />
            </button>
          </li>
          <li>
            <button onClick={() => window.open(restaurant.menu, "_blank")}>
              Menu
              <img src={order} alt="order" />
            </button>
          </li>
          <li>
            <a
              href={`tel:${restaurant.phone}`}
              style={{ textDecoration: "none" }}
            >
              <button>
                Call Business
                <img src={call} alt="call" />
              </button>
            </a>
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
        open={open}
        setOpen={setOpen}
      />
      {loader}
    </div>
  );
};

export default RestaurantPage;
