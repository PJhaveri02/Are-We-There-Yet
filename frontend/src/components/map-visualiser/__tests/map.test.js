import React from "react";
import Map from "../Map";
import { render, fireEvent, getByTitle } from "@testing-library/react";

const dummyOrigin = {
  lat: -36.8523,
  lng: 174.7691,
};

const dummyDestination = {
  lat: -36.8556501,
  lng: 174.8242479,
};

const dummyTravelMode = "DRIVING";

const dummyStops = [
  {
    locationName: "Sky City",
    startDate: "2021-04-01",
    lat: "-36.8488",
    lng: "174.7617",
    timeSpent: 5,
  },
  {
    locationName: "UOA",
    lat: "-36.8523",
    lng: "174.7691",
    timeSpent: 1,
  },
  {
    locationName: "UOA",
    lat: "-36.8523",
    lng: "174.7691",
    timeSpent: 3,
  },
  {
    locationName: "Meadow Bank",
    timeSpent: 3,
    lat: "-36.8707214",
    lng: "174.8224248",
  },
];

const dummySliderPosition = 1;

const dummyCenter = {
  lat: -36.85,
  lng: 174.76,
};

let map;

// beforeAll(() => {
//   map = render(
//     <Map
//       origin={dummyOrigin}
//       destination={dummyDestination}
//       travelMode={dummyTravelMode}
//       stops={dummyStops}
//       sliderPosition={dummySliderPosition}
//       center={dummyCenter}
//     />
//   );
// });

it("map renders correctly", () => {
	
})
