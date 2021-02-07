import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import googleMapsApiKey from "../../apiKey";

const restaurants = [
  {
  address: "1224 S Congress Ave",
  city: "Austin",
  description: "Joann’s Fine Foods is a South Congress neighborhood spot, a new take on the American diner, and a vacation for locals and tourists alike. Open early and late at the Austin Motel, Joann’s is a welcome respite for early birds and night owls, outlaws and in-laws, all ways always.",
  id: 1,
  lat: "-97.7490700000",
  long: "30.2518270000",
  name: "Joann's Fine Foods",
  photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPbs93YKsB4YQpGis0wY4adNYc8FhdwFXvg&usqp=CAU",
  state: "TX",
  zip_code: "78704"
},
{
  address: "1303 S Congress Ave",
  city: "Austin",
  description: "Hip option for Tokyo-inspired street fare including Asian tacos, sushi & dumplings, plus sake punch.",
  id: 2,
  lat: "-97.7485100000",
  long: "30.2509020000",
  name: "Lucky Robot",
  photo: "https://www.luckyrobotatx.com/spillover/proto/luckyrobotatx/images/design/promo6.jpg",
  state: "TX",
  zip_code: "78704"
}
]


// Needs to take in restaurants and defaultCenter
const MapContainer = () => {

    const [selected, setSelected] = useState({});

    const onSelect = item => {
      setSelected(item)
    };
      // const locations = [
      //   {
      //     name: "Location 1",
      //     location: {
      //       lat: 39.763204628672554,
      //       lng: -104.98088346701806,
      //     },
      //   },
      //   {
      //     name: "Location 2",
      //     location: {
      //       lat: 39.7485560497633,
      //       lng: -104.9987362485851,
      //     },
      //   },
      //   {
      //     name: "Location 3",
      //     location: {
      //       lat: 39.7498758692336,
      //       lng: -104.97736440908503,
      //     },
      //   },
      // ];

      const restaurants = [
        {
          address: "1224 S Congress Ave",
          city: "Austin",
          description:
            "Joann’s Fine Foods is a South Congress neighborhood spot, a new take on the American diner, and a vacation for locals and tourists alike. Open early and late at the Austin Motel, Joann’s is a welcome respite for early birds and night owls, outlaws and in-laws, all ways always.",
          id: 1,
          lat: "30.251707630933357",
          long: "-97.74850913000363",
          name: "Joann's Fine Foods",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPbs93YKsB4YQpGis0wY4adNYc8FhdwFXvg&usqp=CAU",
          state: "TX",
          zip_code: "78704",
        },
        {
          address: "1303 S Congress Ave",
          city: "Austin",
          description:
            "Hip option for Tokyo-inspired street fare including Asian tacos, sushi & dumplings, plus sake punch.",
          id: 2,
          lat: "30.251018639052294",
          long:"-97.74898964477472",
          name: "Lucky Robot",
          photo:
            "https://www.luckyrobotatx.com/spillover/proto/luckyrobotatx/images/design/promo6.jpg",
          state: "TX",
          zip_code: "78704",
        },
      ];

    const mapStyles = {
    height: "500px",
    width: "200px"};

    const defaultCenter = {
      lat: 30.27863479793213,
      lng: -97.73967782688402
    };

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        {restaurants.map((spot) => {
          let location = {
            lat: parseFloat(spot.lat),
            lng: parseFloat(spot.long),
          }
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
            position={{lat: parseFloat(selected.lat), lng: parseFloat(selected.long)}}
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