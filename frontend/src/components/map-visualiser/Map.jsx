import React, { useState, useEffect, useCallback, useRef } from "react";
import circle from "../../assets/circle2.png";
import endFlag from "../../assets/endFlag.png";
import startFlag from "../../assets/startFlag.png";

import {
  DEFAULT_TRAVEL_MODE,
  defaultZoom,
  mapContainerStyle,
  DEFAULT_MAP_SETTINGS,
  STROKE_COLORS,
  POLYLINE_OPT,
} from "./DefaultSettings";
import {
  GoogleMap,
  Marker,
  DirectionsService,
  Polyline,
} from "@react-google-maps/api";

export default function Map(props) {
  const { origin, destination, travelMode, stops, sliderPosition, center } = props;

  const [directions, setDirections] = useState();
  const [notDSRendered, setNotDSRendered] = useState(true);
  const [path, setPath] = useState();
  const [, setPathInfo] = useState();
  const [circleMarker, setCircleMarker] = useState();

  // Retain map throughout the lifecycle of component
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  // When directions has been set, extract the directions data.
  useEffect(() => {
    if (directions) {
      // extract the latitude and longitude to use as polyline
      const legs = directions.routes[0].legs;
      const polyPaths = new Array(legs.length);

      let steps, point, lat, lng;

      for (let i = 0; i < legs.length; i++) {
        steps = legs[i].steps;
        polyPaths[i] = [];
        for (let j = 0; j < steps.length; j++) {
          point = steps[j].path;
          for (let k = 0; k < point.length; k++) {
            lat = point[k].lat();
            lng = point[k].lng();
            polyPaths[i].push({ lat: lat, lng: lng });
          }
        }
      }
      setPath(polyPaths);

      // Extract the important data from the directions variable
      setPathInfo({
        distance: legs[0].distance,
        duration: legs[0].duration,
        startAddress: legs[0].start_address,
        endAddress: legs[0].end_Address,
        startLocation: {
          lat: `${legs[0].start_location.lat()}`,
          lng: `${legs[0].start_location.lng()}`,
        },

        endLocation: {
          lat: `${legs[0].end_location.lat()}`,
          lng: `${legs[0].end_location.lng()}`,
        },
        path: polyPaths,
      });

      setNotDSRendered(false);
    }
  }, [directions]);

  useEffect(() => {
    setNotDSRendered(true);
  }, [stops]);

  // A callback function to be called when the DirectionsService has obtained a response
  const directionsCallback = (response, status) => {
    if (response && status === "OK") {
      setDirections(response);
    }
  };

  // A callback function called when the directionsService has loaded
  const directionsLoaded = () => {
    setNotDSRendered(false);
  };

  return (
    <div>
      <GoogleMap
        id="google-map"
        mapContainerStyle={mapContainerStyle}
        options={DEFAULT_MAP_SETTINGS}
        zoom={defaultZoom}
        center={center}
        onLoad={onMapLoad}
      >
        {origin && destination && notDSRendered && (
          <DirectionsService
            options={{
              destination: destination,
              origin: origin,
              waypoints: stops.map((latLng) => ({
                location: new window.google.maps.LatLng(latLng.lat, latLng.lng),
                stopover: true,
              })),
              travelMode: travelMode ? travelMode : DEFAULT_TRAVEL_MODE,
            }}
            callback={directionsCallback}
            onLoad={directionsLoaded}
          />
        )}

        {path && stops &&
          path.map((item, index) => (
            <Polyline
              path={item}
              key={index}
              visible={true}
              options={{
                POLYLINE_OPT,
                strokeColor: Object.keys(STROKE_COLORS)[index],
              }}
              onMouseUp={(e) => {
                setCircleMarker({ lat: e.latLng.lat(), lng: e.latLng.lng() });
              }}
            />
          ))}
        {origin ? (
          <Marker
            key={"ORIGIN"}
            position={{ lat: origin.lat, lng: origin.lng }}
            icon={{
              url: startFlag,
              scaledSize: new window.google.maps.Size(50, 50),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 50),
            }}
          />
        ) : null}

        {destination ? (
          <Marker
            key={"DESTINATION"}
            position={{ lat: destination.lat, lng: destination.lng }}
            icon={{
              url: endFlag,
              scaledSize: new window.google.maps.Size(50, 50),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 50),
            }}
          />
        ) : null}

        {sliderPosition && (
          <Marker 
          key={"SLIDER"}
          position={{ lat: stops[sliderPosition - 1].lat, lng: stops[sliderPosition - 1].lng}}/>
        )}
        {stops
          ? stops.map((stop, index) => (
              <Marker
                key={index}
                icon={circle}
                position={{ lat: stop.lat, lng: stop.lng }}
              />
            ))
          : null}

        {circleMarker && (
          <Marker
            key={"POINT"}
            position={{ lat: circleMarker.lat, lng: circleMarker.lng }}
            icon={{
              url: circle,
              scaledSize: new window.google.maps.Size(10, 10),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(5, 5),
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
}