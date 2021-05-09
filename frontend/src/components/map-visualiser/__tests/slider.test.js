import { fireEvent, getByTitle, render } from '@testing-library/react';
import React from "react";
import { ResourceContext } from "../../../pages/Homepage";
import Slider from "../Slider.jsx";

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

let component;

let sliderPosition = 1;

const setSliderPosition = (pos) => {
  sliderPosition = pos;
}

beforeEach(() => {
  let onChangeSlider = (sliderPos) => {};
  let setCenter = (center) => {};
  component = render(
    <ResourceContext.Provider value={{sliderPosition, setSliderPosition}}>
      <Slider 
        step={1}
        stops={dummyStops}
        onChangeSlider={onChangeSlider}
        setCenter={setCenter}
      />
    </ResourceContext.Provider>
  );
});

it("test Slider's initial state", () => {
  const { container } = component;
  const slider = getByTitle(container, "slider");
  expect(slider.type).toBe("range");
  expect(slider.min).toBe("0");
  expect(slider.max).toBe("7");
  expect(slider.step).toBe("1");
  expect(slider.value).toBe("0");
});

it("a change in the slider's value", () => {
  const { container } = component;
  const slider = getByTitle(container, "slider");
  fireEvent.change(slider, { target: { value: "1" } });
  expect(slider.value).toBe("1");
});

it("slider target value between two stops", () => {
  const { container } = component;
  const slider = getByTitle(container, "slider");
  fireEvent.change(slider, { target: { value: "5" } });
  expect(slider.value).toBe("4");
});

it("slider target value is above the limit", () => {
  const { container } = component;
  const slider = getByTitle(container, "slider");
  fireEvent.change(slider, { target: { value: "99" } });
  expect(slider.value).toBe("7");
});
