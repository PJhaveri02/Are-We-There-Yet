import React, { useState, useEffect } from "react";

export default function Slider(props) {
  const { step, stops, onChangeSlider, setCenter } = props;
  const [value, setValue] = useState(0);
  const [sliderDistances, setSliderDistances] = useState();
  const [sliderPosition, setSliderPosition] = useState(1);

  // When stops parameter changes, render the slider time
  useEffect(() => {
    let currentDistance = 0;
    let sliderDistance = [0];
    stops.map((stop, index) => {
      if (index > 0) {
        currentDistance += stop.timeSpent;
        sliderDistance.push(currentDistance);
      }
      return currentDistance;
    });
    setSliderDistances(sliderDistance);
  }, [stops]);

  // When the slider position has been set
  useEffect(() => {
    setCenter({
      lat: stops[sliderPosition - 1].lat,
      lng: stops[sliderPosition - 1].lng,
    });
  }, [sliderPosition, stops, setCenter]);

  const handleSliderEvent = (e) => {
    const tgtValue = e.target.value;
    let bestDiff = Number.MAX_VALUE;
    let closerTo;

    for (let i = 0; i < sliderDistances.length; i++) {
      if (Math.abs(tgtValue - sliderDistances[i]) <= bestDiff) {
        closerTo = sliderDistances[i];
        bestDiff = Math.abs(tgtValue - sliderDistances[i]);
        onChangeSlider(i + 1);
        setSliderPosition(i + 1);
      }
    }
    setValue(closerTo);
  };

  return (
    <div>
      {sliderDistances && (
        <input
          type="range"
          min={sliderDistances[0]}
          step={step}
          max={sliderDistances[sliderDistances.length - 1]}
          value={value}
          onChange={(e) => {
            handleSliderEvent(e);
          }}
        />
      )}

      <div>
        <p>{`At: ${value}`}</p>
      </div>
    </div>
  );
}
