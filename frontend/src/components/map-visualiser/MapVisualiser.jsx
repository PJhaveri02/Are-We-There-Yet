import React, { useContext } from 'react';
import { ResourceContext } from '../../pages/Homepage';
import Map from './Map';

export default function MapVisualizer({ center, sliderPosition }) {
  // need these two states for map to display location based on slider
  const { trip } = useContext(ResourceContext);

  return (
    <div>
      {trip ? (
        <Map
          origin={trip.stops[0]}
          destination={trip.stops[trip.stops.length - 1]}
          stops={trip.stops}
          sliderPosition={sliderPosition}
          center={center}
        />
      ) : (
        <Map center={center} />
      )}
    </div>
  );
}
