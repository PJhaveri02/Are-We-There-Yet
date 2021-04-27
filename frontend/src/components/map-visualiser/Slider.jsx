import React, { useState } from "react";

export default function Slider(props) {
  const { min, max, defaultValue, step, points } = props;
  const [value, setValue] = useState(defaultValue);

  const handleSliderEvent = (e) => {
    const tgtValue = e.target.value;
    let bestDiff = Number.MAX_VALUE;
    let closerTo;

    for (let i = 0; i < points.length; i++) {
      if (Math.abs(tgtValue - points[i]) <= bestDiff) {
        closerTo = points[i];
        bestDiff = Math.abs(tgtValue - points[i]);
      }

      if (!closerTo) {
        setValue(tgtValue);
      } else {
        setValue(closerTo);
      }
    }
  };

  return (
    <div>
      <input
        type="range"
        min={min}
        step={step}
        max={max}
        value={value}
        onChange={(e) => {
          handleSliderEvent(e);
        }}
      />
      <div>
        <p>{`At: ${value}`}</p>
      </div>
    </div>
  );
}