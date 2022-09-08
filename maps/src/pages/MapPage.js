import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import "./MapPage.css";

const MapPage = () => {
  console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const position = {
    lat: -23.567914149043254,
    lng: -46.70148579705192,
  };

  return (
    <div className="map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={15}
        >
          <Marker
            position={position}
            options={{
              label: {
                text: "Turn2C",
                className: "map-marker",
              },
            }}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MapPage;
