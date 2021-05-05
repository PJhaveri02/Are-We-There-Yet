import React, { useContext, useState } from 'react';
import { ResourceContext } from '../../pages/Homepage';
import { defaultCenter } from './DefaultSettings';
import Map from './Map';
import Slider from './Slider';

export default function MapVisualizer() {
  // need these two states for map to display location based on slider
  const { trip } = useContext(ResourceContext);
  const [sliderPosition, setSliderPosition] = useState(1);
  const [center, setCenter] = useState(defaultCenter);

  return (
    <div>
      {trip ? (
        <>
          <Map
            origin={trip.stops[0]}
            destination={trip.stops[trip.stops.length - 1]}
            stops={trip.stops}
            sliderPosition={sliderPosition}
            center={center}
          />
          <Slider
            step={1}
            stops={trip.stops}
            onChangeSlider={setSliderPosition}
            setCenter={setCenter}
          />
        </>
      ) : (
        <Map center={center} />
      )}
    </div>
  );
}
