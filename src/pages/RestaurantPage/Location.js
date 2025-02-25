import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const mapStyle = {
  width: "100%",
  height: "100%",
  borderRadius: '10px',
  zIndex: -1
};

function Map() {
  const [center, setCenter] = useState({
    lat: 9.0563,
    lng: 7.491302
  });

  const { isLoaded } = useJsApiLoader({
    id: "94be1b754fd3aee",
    googleMapsApiKey: "AIzaSyCwoSjppYajRChYEkn6joNsZyqLboqAXAU",
  });

  const [map, setMap] = useState(null);
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className="location-con">
      <div className="location">
        <section>
          <span>
            <h2>McDonald's</h2>
            <p>South London</p>
            <br/>
            <small>Company #783639hr, registered with house of companies</small>
            <br/>
            <br/>
            <b>Phone number</b>
            <p>+91256788</p>
            <br/>
            <b>Website</b>
            <p>https://www.McDonald.com</p>
          </span>
        </section>
      <main>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={mapStyle}
            zoom={17}
            center={center}
            onLoad={onLoad}
            onUnmount={onUnmount}
          ></GoogleMap>
        ) : (
          <p>Loading Map...</p>
        )}
        </main>
      </div>
    </div>
  );
}

export default Map;
