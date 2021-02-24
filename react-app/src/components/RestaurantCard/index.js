import "./index.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import ReactStars from "react-rating-stars-component";

const RestaurantCard = ({ restaurant }) => {
  const dispatch = useDispatch();

  const [reviews, setReviews] = useState({});
  const [rating, setRating] = useState(0);

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

  useEffect(() => {
    setRating(getRating(reviews))
  }, [reviews])

  const getRating = (reviews) => {
    let ratings = [];

    if (Array.isArray(reviews)) {
      reviews.forEach((review) => {
        ratings.push(review["rating"]);
      });
      return ratings.reduce((rating, acc) => rating + acc) / ratings.length;
    }
  }


  return (
    <Link
      className="restaurant-card-container"
      style={{ textDecoration: "none" }}
      to={`/restaurants/${restaurant.id}`}
    >
      <h2 className="restaurant-card-container__title">{restaurant.name}</h2>
      <div className="restaurant-card-container__rating">
        {rating && <ReactStars
          count={5}
          size={24}
          edit={false}
          value={rating}
          isHalf={true}
          activeColor="darkgreen"
        />}
      </div>
      <div className="restaurant-card-container__address">
        {restaurant.address}
        <br />
        {`${restaurant.city}, ${restaurant.state}, ${restaurant.zip_code}`}
      </div>
      <div className="restaurant-card-container__photo">
        <img src={restaurant.photo} alt="restaurant" />
      </div>
    </Link>
  );
};

export default RestaurantCard;
