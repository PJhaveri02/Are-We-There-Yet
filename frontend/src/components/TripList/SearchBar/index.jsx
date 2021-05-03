import React, { useState } from 'react';
import Searchbar from './Searchbar';
import DestinationList from './DestinationList';

function SearchBar() {
  const [destinations, setDestinations] = useState([]);

  const onDestinationSelect = (destination, lat, lng) => {
    setDestinations([
      ...destinations,
      {
        startDate: '2021-04-27',
        locationName: destination,
        timeSpent: 1,
        lat: lat,
        lng: lng,
      },
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

export default SearchBar;
