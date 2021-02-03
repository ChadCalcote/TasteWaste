import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import googleMapsApiKey from "../../apiKey";
const MapContainer = () => {

    const [selected, setSelected] = useState({});

    const onSelect = item => {
      setSelected(item)
    };
      const locations = [
        {
          name: "Location 1",
          location: {
            lat: 39.763204628672554,
            lng: -104.98088346701806,
          },
        },
        {
          name: "Location 2",
          location: {
            lat: 39.7485560497633,
            lng: -104.9987362485851,
          },
        },
        {
          name: "Location 3",
          location: {
            lat: 39.7498758692336,
            lng: -104.97736440908503,
          },
        },
      ];

    const mapStyles = {
    height: "100vh",
    width: "100%"};

    const defaultCenter = {
      lat: 39.76233445692628,
      lng: -104.98388880044858,
    };

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        {locations.map((spot) => {
          return (
            <Marker
              key={spot.name}
              position={spot.location}
              onClick={() => onSelect(spot)}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>{selected.name}</p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}
export default MapContainer;