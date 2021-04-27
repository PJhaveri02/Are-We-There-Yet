import React, { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Searchbar from "./Searchbar";
import DestinationList from "./DestinationList";

function Trip() {
  const libraries = ["places"];

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [destinations, setDestinations] = useState([]);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading...";

  const onDestinationSelect = (destination, lat, lng) => {
    setDestinations([
      ...destinations,
      { startDate: "2021-04-27", locationName: destination, timeSpent: 1 , lat: lat, lng: lng},
    ]);
    console.log(destinations);
  };

  return (
    <div>
      <Searchbar onDestinationSelect={onDestinationSelect} />
      <DestinationList destinations={destinations} />
    </div>
  );
}

export default Trip;
