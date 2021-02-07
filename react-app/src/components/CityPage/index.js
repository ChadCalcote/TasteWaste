import "./city.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MapContainer from "../MapContainer";
import NavBar from "../NavBar";
import { fetchCityRestaurants } from "../../store/restaurants";
import RestaurantCard from "../RestaurantCard";
import { useRef } from "react";

const CityPage = () => {

  const { city } = useParams();

  const dispatch = useDispatch();

  const restaurants = useSelector(reduxState => {
    return reduxState.restaurants
  });

  useEffect(() => {
    dispatch(fetchCityRestaurants(city))
  }, [dispatch])

    return (
      <div className="city-page-container">
        <div className="city-page-container__restaurant-card1">
          <RestaurantCard />
        </div>
        <div className="city-page-container__restaurant-cards">
          {/* Restaurant Cards */}
        </div>
        <div className="city-page-container__community-impact">
          {/* Community Impact Card  */}
        </div>
        <div className="city-page-container__map-container">
          {/* <MapContainer /> */}
        </div>
      </div>
    );
}

export default CityPage;