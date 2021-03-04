import "./index.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import ReactStars from "react-rating-stars-component";

const RestaurantPlaceholder = () => {

    return (
      <>
        <h2 className="restaurant-card-container__title">{"Restaurant"}</h2>
        <div className="restaurant-card-container__rating">
            <ReactStars
              count={5}
              size={24}
              edit={false}
              value={5}
              isHalf={true}
              activeColor="darkgreen"
            />
        </div>
        <div className="restaurant-card-container__address">
          {"Address"}
          <br />
          {"Address"}
        </div>
        <div className="restaurant-card-container__photo">
          <img
            src={
              "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_280,q_50,w_640/v1/clients/denver/Edible_Beats_El_Five_01_85ace7a0-3b91-494f-8794-386d5ae516bf.jpg"
            }
            alt="restaurant"
          />
        </div>
      </>
    );
};

export default RestaurantPlaceholder;
