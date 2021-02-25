import "./index.css";

import React, { useState } from "react";
import addReview from "../../services/review";
import useToggleState from "../hooks/useToggleHook";
import ReactStars from "react-rating-stars-component";

const ReviewForm = ({
  authenticated,
  closeModal,
  user,
  restaurant,
  reviewsToDisplay,
  setReviewsToDisplay,
}) => {
  const [body, setBody] = useState("");
  const [rating, setRating] = useState();
  const [bags, toggleBags] = useToggleState(false);
  const [utensils, toggleUtensils] = useToggleState(false);
  const [napkins, toggleNapkins] = useToggleState(false);
  const [cups, toggleCups] = useToggleState(false);
  const [bowls, toggleBowls] = useToggleState(false);
  const [straws, toggleStraws] = useToggleState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const review = await addReview(
      user.id,
      restaurant.id,
      body,
      rating,
      bags,
      utensils,
      napkins,
      cups,
      bowls,
      straws
    );
    if (!review.errors) {
      closeModal();
      setReviewsToDisplay([...reviewsToDisplay, review]);
    }
  };

  const updateBody = (e) => {
    setBody(e.target.value);
  };

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <form onSubmit={onSubmit}>
      <h1 style={{ color: "black" }}>{`${restaurant.name} Waste Review`}</h1>
      <div>
        <input type="hidden" name="user" value={user ? user.id : 1}></input>
      </div>
      <div>
        <input type="hidden" name="restaurant" value={restaurant.id}></input>
      </div>
      <div className="review-form__item">
        <label>Overall Sustainability Score</label>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          value={rating}
          size={24}
          activeColor="darkgreen"
        />
      </div>
      <div className="review-form__item">
        <label htmlFor="experience">Tell us about your experience</label>
        <textarea
          className="body"
          type="text"
          name="body"
          id="experience"
          onChange={updateBody}
          value={body}
        ></textarea>
      </div>

      <h3>Check box if items were Compostable, Recyclable, or not offered</h3>
      <div className="review-form__checkbox">
        <input
          type="checkbox"
          name="bags"
          checked={bags}
          onChange={toggleBags}
          value={bags}
        />
        <label>Bags</label>
      </div>
      <div className="review-form__checkbox">
        <input
          type="checkbox"
          name="utensils"
          checked={utensils}
          onChange={toggleUtensils}
          value={utensils}
        />
        <label>Utensils</label>
      </div>
      <div className="review-form__checkbox">
        <input
          type="checkbox"
          name="napkins"
          checked={napkins}
          onChange={toggleNapkins}
          value={napkins}
        />
        <label>Napkins</label>
      </div>
      <div className="review-form__checkbox">
        <input
          type="checkbox"
          name="cups"
          checked={cups}
          onChange={toggleCups}
          value={cups}
        />
        <label>Cups</label>
      </div>
      <div className="review-form__checkbox">
        <input
          type="checkbox"
          name="bowls"
          checked={bowls}
          onChange={toggleBowls}
          value={bowls}
        />
        <label>Bowls</label>
      </div>
      <div className="review-form__checkbox">
        <input
          type="checkbox"
          name="straws"
          checked={straws}
          onChange={toggleStraws}
          value={straws}
        />
        <label>Straws</label>
      </div>
      <button className="review-form__button" type="submit">
        Add Review
      </button>
    </form>
  );
};

export default ReviewForm;
