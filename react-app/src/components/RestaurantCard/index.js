// React Dependencies
import React, { useEffect, useState } from "react";
// React Router Dom Dependencies
import { Link } from "react-router-dom";
// React Redux Dependencies
import { useDispatch } from "react-redux";
// React Stars Component
import ReactStars from "react-rating-stars-component";
// CSS Stylesheet
import "./index.css";

// Define Restaurant Card Component with destructured props
const RestaurantCard = ({ isLink, restaurant }) => {
  // Redux Hooks
  // Used to dispatch actions from store
  const dispatch = useDispatch();
  // React Hooks
  // Setup state for reviews and rating to display
  const [reviews, setReviews] = useState({});
  const [rating, setRating] = useState(0);
  // As soon as there is a restaurant with a valid id, fetch the reviews from that restaurant, and set the reviews state to those reviews
  useEffect(() => {
    async function fetchData() {
      const responseFromDb = await fetch(
        `/api/restaurants/${restaurant.id}/reviews`
      );
      const reviewsList = await responseFromDb.json();
      setReviews(reviewsList);
    }
    fetchData();
  }, [dispatch, restaurant.id]);
  // As soon as there are reviews, set the rating state to the result of all of the reviews being passed into getRating helper function
  useEffect(() => {
    setRating(getRating(reviews));
  }, [reviews]);

  [...document.querySelectorAll("[data-src]")].map((img) =>
    img.addEventListener("click", (e) => (img.src = img.dataset.src))
  );

  // Takes all reviews, pushes the rating into an array, and averages out all of the ratings from that array
  const getRating = (reviews) => {
    let ratings = [];

    if (Array.isArray(reviews)) {
      reviews.forEach((review) => {
        ratings.push(review["rating"]);
      });
      return ratings.reduce((rating, acc) => rating + acc) / ratings.length;
    }
  };
  // If the isLink prop is set to true, we will make the entire component clickable to take us to the restaurant page (on city page)
  // We don't want it to be a link when we are on the restaurant page
  if (isLink) {
    return (
      <Link
        className="restaurant-card-container"
        style={{ textDecoration: "none" }}
        to={`/restaurants/${restaurant.id}`}
      >
        <h2 className="restaurant-card-container__title">
          {restaurant ? restaurant.name : "Restaurant"}
        </h2>
        <div className="restaurant-card-container__rating">
          {rating && (
            <ReactStars
              count={5}
              size={24}
              edit={false}
              value={rating}
              isHalf={true}
              activeColor="darkgreen"
            />
          )}
        </div>
        <div className="restaurant-card-container__address">
          {restaurant.address}
          <br />
          {restaurant
            ? `${restaurant.city}, ${restaurant.state}, ${restaurant.zip_code}`
            : "Address"}
        </div>
        <div className="restaurant-card-container__photo">
          <img data-src={restaurant.photo} src={restaurant.photo} alt="restaurant" />
        </div>
      </Link>
    );
  } else {
    return (
      <article className="restaurant-card-container">
        <h2 className="restaurant-card-container__title">{restaurant.name}</h2>
        <div className="restaurant-card-container__rating">
          {rating && (
            <ReactStars
              count={5}
              size={24}
              edit={false}
              value={rating}
              isHalf={true}
              activeColor="darkgreen"
            />
          )}
        </div>
        <div className="restaurant-card-container__address">
          {restaurant.address}
          <br />
          {`${restaurant.city}, ${restaurant.state}, ${restaurant.zip_code}`}
        </div>
        <div className="restaurant-card-container__photo">
          <img src={restaurant.photo} alt="restaurant" />
        </div>
      </article>
    );
  }
};

export default RestaurantCard;
