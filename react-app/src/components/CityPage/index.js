import "./index.css";
// React Dependencies
import React, { useEffect } from "react";
// React Redux Dependencies
import { useDispatch, useSelector } from "react-redux";
// React Router Dom Dependencies
import { useParams } from "react-router-dom";
// Components
import RestaurantCard from "../RestaurantCard";
import RestaurantPlaceholder from "../RestaurantPlaceholder";
import MapContainer from "../MapContainer";
// Redux Thunks
import { fetchCityRestaurants } from "../../store/restaurants";
import { fetchOneCity } from "../../store/cities";

// Define CityPage component with destructured props
const CityPage = ({ changeImg, user }) => {
  // React Router Dom hooks
  // Get the city from the params of the url
  const { city } = useParams();
  // Redux Hooks
  // Used to dispatch actions
  const dispatch = useDispatch();
  // React Hooks
  // Based on city in param change the background image state to city photo
  // Need to change the photos to grab them from AWS or other photo bucket site
  useEffect(() => {
    switch (city) {
      case "denver":
        changeImg(
          "url(https://red.msudenver.edu/media/red/2020/august/denversummer_hero2_RED.jpg)"
        );
        return;
      case "austin":
        changeImg(
          "url(https://rmcdmc.com/wp-content/uploads/2015/03/BIG-Austin-Skyline-.jpeg)"
        );
        return;
      case "seattle":
        changeImg("url(https://fi.co/system/posts/Seattle.jpg)");
        return;
      default:
        changeImg("url(https://cdn.wallpapersafari.com/59/17/Mp2ga4.jpg)");
        return;
    }
  });

  // Dispatch these actions as soon as city is defined
  // Fetch one city
  // Fetch the restaurants of that city
  useEffect(() => {
    dispatch(fetchOneCity(city));
    dispatch(fetchCityRestaurants(city));
  }, [dispatch, city]);

  // All City Restaurants
    const restaurants = useSelector((reduxState) => {
      return reduxState.restaurants;
    });
  // City from store
  // Used Redux here in order to get all information from that city in the database
    const reduxCity = useSelector((reduxState) => {
      return reduxState.cities;
    });

  return (
    <div className="city-page-container">
      {user ? <h1>{`Welcome to TasteWaste, ${user.username}!`}</h1> : null}

      <div className="city-page-container__restaurant-cards">
        {restaurants.length > 0
          ? restaurants.map((restaurant) => (
              <RestaurantCard
                className="restaurant"
                key={restaurant.id}
                restaurant={restaurant}
                isLink
              />
            ))
          : <RestaurantPlaceholder />}
      </div>

      {/*<div className="city-page-container__community-impact">
        Community Impact Card
      </div>*/}

      <div className="city-page-container__map-container">
        {restaurants.length > 0 ? (
          <MapContainer restaurants={restaurants} city={reduxCity} />
        ) : null}
      </div>
    </div>
  );
};

export default CityPage;
