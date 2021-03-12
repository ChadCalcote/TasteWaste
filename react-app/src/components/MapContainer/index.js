// React Dependencies
import React, { useState } from "react";
// Google Maps API Dependencies
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import googleMapsApiKey from "../../apiKey";

// Define component with destructured props
const MapContainer = ({ restaurants, city }) => {
  // React Hooks
  // Setup state of selected -- this wil display the selected restaurant location
  const [selected, setSelected] = useState({});
  // Component Functions / Variables
  // Once you select a restaurant location on map, we wil set the state to that restaurant
  const onSelect = (restaurant) => {
    setSelected(restaurant);
  };
  // Styles for map
  const mapStyles = {
    height: "200px",
    width: "300px",
    borderRadius: "20px",
    boxShadow: "5px 0 5px -2px #036603",
  };
  // Default Point on map where it will display
  const defaultCenter = {
    lat: parseFloat(city["lat"]),
    lng: parseFloat(city["lng"]),
  };

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        className="map"
        mapContainerStyle={mapStyles}
        zoom={11}
        center={defaultCenter}
      >
        {restaurants.map((spot) => {
          let location = {
            lat: parseFloat(spot.lat),
            lng: parseFloat(spot.lng),
          };
          return (
            <Marker
              key={spot.name}
              position={location}
              onClick={() => onSelect(spot)}
            />
          );
        })}
        {selected.lat && (
          <InfoWindow
            position={{
              lat: parseFloat(selected.lat),
              lng: parseFloat(selected.lng),
            }}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>{selected.name}</p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};
export default MapContainer;
