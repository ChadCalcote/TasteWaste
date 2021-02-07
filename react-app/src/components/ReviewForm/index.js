import './index.css';

import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import addReview from "../../services/review";
import useToggleState from "../hooks/useToggleHook";

const ReviewForm = ({ authenticated, setAuthenticated }) => {
  const [user, setUser] = useState();
  const [restaurant, setRestaurant] = useState();
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
    console.log(user);
    if (user) {
      const review = await addReview(user, restaurant, body, rating, bags, utensils, napkins, cups, bowls, straws);
      console.log(review);
    }
  };

  const updateUser = (e) => {
    setUser(e.target.value);
  };

  const updateRestaurant = (e) => {
    setRestaurant(e.target.value);
  };

  const updateBody = (e) => {
    setBody(e.target.value);
  };

  const updateRating = (e) => {
    setRating(e.target.value);
  };

  // const updateBags= (e) => {
  //   setBags(e.target.value);
  // };

  // const updateUtensils = (e) => {
  //   setUtensils(e.target.value);
  // };

  // const updateNapkins = (e) => {
  //    setNapkins(e.target.value);
  //  };

  //  const updateCups = (e) => {
  //    setCups(e.target.value);
  //  };

  //  const updateBowls = (e) => {
  //    setBowls(e.target.value);
  //  };

  //  const updateStraws = (e) => {
  //    setStraws(e.target.value);
  //  };


  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>User</label>
        <input
          type="number"
          name="user"
          onChange={updateUser}
          value={user}
        ></input>
      </div>
      <div>
        <label>Restaurant</label>
        <input
          type="number"
          name="restaurant"
          onChange={updateRestaurant}
          value={restaurant}
        ></input>
      </div>
      <div>
        <label>Body</label>
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

