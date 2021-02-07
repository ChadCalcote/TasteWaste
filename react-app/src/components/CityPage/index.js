import "./city.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MapContainer from "../MapContainer";
import NavBar from "../NavBar";
import { fetchCityRestaurants } from "../../store/restaurants";
import { fetchOneCity } from "../../store/cities";
import RestaurantCard from "../RestaurantCard";
import { useRef } from "react";

const CityPage = () => {

  const { city } = useParams();

  const dispatch = useDispatch();

  const restaurants = useSelector(reduxState => {
    return reduxState.restaurants
  });

  const reduxCity = useSelector(reduxState => {
    return reduxState.cities
  })

  useEffect(() => {
    dispatch(fetchOneCity(city));
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
          {restaurants.length > 0 ? <MapContainer restaurants={restaurants} city={reduxCity}/> : null}
        </div>
      </div>
    );
}

export default CityPage;