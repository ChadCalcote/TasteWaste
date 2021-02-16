import "./city.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MapContainer from "../MapContainer";
import { fetchCityRestaurants } from "../../store/restaurants";
import { fetchOneCity } from "../../store/cities";
import RestaurantCard from "../RestaurantCard";

const CityPage = ({changeImg}) => {

  const { city } = useParams();

  const dispatch = useDispatch();

  const restaurants = useSelector(reduxState => {
    return reduxState.restaurants
  });

  const reduxCity = useSelector(reduxState => {
    return reduxState.cities
  });

  useEffect(() => {
    switch(city) {
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

  useEffect(() => {
    dispatch(fetchOneCity(city));
    dispatch(fetchCityRestaurants(city))
  }, [dispatch, city])

    return (
      <div className="city-page-container">
        {restaurants.length > 0 ? (
          <RestaurantCard className="restaurant" restaurant={restaurants[0]} />
        ) : null}
        <div className="city-page-container__restaurant-cards">
          {restaurants.length > 0
            ? restaurants.slice(1).map((restaurant) => (
                <RestaurantCard
                  className="restaurant"
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              ))
            : null}
        </div>
        <div className="city-page-container__community-impact">
          {/* Community Impact Card  */}
        </div>
        <div className="city-page-container__map-container">
          {restaurants.length > 0 ? (
            <MapContainer restaurants={restaurants} city={reduxCity} />
          ) : null}
        </div>
      </div>
    );
}

export default CityPage;