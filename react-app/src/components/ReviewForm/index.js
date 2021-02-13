import './index.css';

import React, { useState } from "react";
import addReview from "../../services/review";
import useToggleState from "../hooks/useToggleHook";

const ReviewForm = ({ authenticated, closeModal, user, restaurant, reviewsToDisplay, setReviewsToDisplay }) => {
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
      const review = await addReview(user.id, restaurant.id, body, rating, bags, utensils, napkins, cups, bowls, straws);
      if (!review.errors) {
        closeModal();
        setReviewsToDisplay([...reviewsToDisplay, review])
      }
  };

  const updateBody = (e) => {
    setBody(e.target.value);
  };

  const updateRating = (e) => {
    setRating(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
    <h1 style={{color: "black"}}>{`${restaurant.name} Waste Review`}</h1>
      <div>
        <input
          type="hidden"
          name="user"
          value={user ? user.id : 1}
        ></input>
      </div>
      <div>
        <input
          type="hidden"
          name="restaurant"
          value={restaurant.id}
        ></input>
      </div>
      <div>
        <label>How was your experience?</label>
        <br />
        <textarea
          className="body"
          type="text"
          name="body"
          onChange={updateBody}
          value={body}
        ></textarea>
      </div>
      <div>
        <label>Rating</label>
        <input
          type="number"
          name="rating"
          onChange={updateRating}
          value={rating}
        ></input>
      </div>
      <h3>Check Box if Items were Compostable, Recyclable, or not offered</h3>
      <div>
        <label>Bags</label>
        <input
          type="checkbox"
          name="bags"
          checked={bags}
          onChange={toggleBags}
          value={bags}
        ></input>
      </div>
      <div>
        <label>Utensils</label>
        <input
          type="checkbox"
          name="utensils"
          checked={utensils}
          onChange={toggleUtensils}
          value={utensils}
        ></input>
      </div>
      <div>
        <label>Napkins</label>
        <input
          type="checkbox"
          name="napkins"
          checked={napkins}
          onChange={toggleNapkins}
          value={napkins}
        ></input>
      </div>
      <div>
        <label>Cups</label>
        <input
          type="checkbox"
          name="cups"
          checked={cups}
          onChange={toggleCups}
          value={cups}
        ></input>
      </div>
      <div>
        <label>Bowls</label>
        <input
          type="checkbox"
          name="bowls"
          checked={bowls}
          onChange={toggleBowls}
          value={bowls}
        ></input>
      </div>
      <div>
        <label>Straws</label>
        <input
          type="checkbox"
          name="straws"
          checked={straws}
          onChange={toggleStraws}
          value={straws}
        ></input>
      </div>
      <button type="submit">Add Review</button>
    </form>
  );
};

export default ReviewForm;

