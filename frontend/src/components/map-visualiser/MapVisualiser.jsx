import React, { useState } from 'react';
import Map from "./Map";
import {defaultCenter} from './DefaultSettings';
import { meadowbank, aucklanduniversity, routes } from "./dummyData";
import Slider from "./Slider";

export default function MapVisualizer() {
  
  // need these two states for map to display location based on slider
  const [sliderPosition, setSliderPosition] = useState(1);
  const [center, setCenter] = useState(defaultCenter);
  
  return (
    <div>
      <Map
        origin={aucklanduniversity}
        destination={meadowbank}
        stops={routes}
        sliderPosition={sliderPosition}
        center={center}
      />
      <Slider step={1} stops={routes} onChangeSlider={setSliderPosition} setCenter={setCenter}/>
    </div>
  );
}
