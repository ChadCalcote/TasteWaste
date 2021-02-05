import "./city.css";
import React from "react";
import MapContainer from "../MapContainer";
import NavBar from "../NavBar";

const CityPage = () => {

    return (
      <div className="city-page-container">
        <NavBar />
        <div className="city-page-container__restaurant-card1">
          {/* Restaurant Card */}
        </div>
        <div className="city-page-container__restaurant-cards">
          {/* Restaurant Cards */}
        </div>
        <div className="city-page-container__community-impact">
          {/* Community Impact Card  */}
        </div>
        <div className="city-page-container__map-container">
          <MapContainer />
        </div>
      </div>
    );
}

export default CityPage;