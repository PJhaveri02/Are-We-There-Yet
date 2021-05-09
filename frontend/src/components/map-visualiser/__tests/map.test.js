import { render } from "@testing-library/react";
import React from "react";
import Map from "../Map";

const origin = {
  lat: -36.8523,
  lng: 174.7691,
};

const destination = {
  lat: -36.8556501,
  lng: 174.8242479,
};

const travelMode = "DRIVING";

const stops = [
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

const sliderPosition = 1;

const center = {
  lat: -36.85,
  lng: 174.76,
};

const mockCallbacks = {
  mockSize: jest.fn(),
  mockPoint: jest.fn(),

  mockSetMap: jest.fn(),
  mockSetIcon: jest.fn(),
  mockSetPosition: jest.fn(),

  mockSetCenter: jest.fn(),
  mockSetOptions: jest.fn(),
  mockSetZoom: jest.fn(),
  mockSetRoute: jest.fn(),

};
const setupGoogleMapsMock = (mockCallbacks) => {
  const {
    mockSize,
    mockPoint,
    mockSetRoute,
    mockSetMap,
    mockSetIcon,
    mockSetPosition,
    mockSetCenter,
    mockSetOptions,
    mockSetZoom,
  } = mockCallbacks;
  const google = {
    maps: {
      TravelMode: {
        DRIVING: "DRIVING",
        WALKING: "WALKING",
        BICYCLING: "BICYCLING",
        TRANSIT: "TRANSIT",
        TWO_WHEELER: "TWO_WHEELER",
      },

      DirectionsService: class {
        route(result) {
          mockSetRoute(result);
        }
      },

      Marker: class {
        setMap(result) {
          mockSetMap(result);
        }
        setIcon(result) {
          mockSetIcon(result);
        }
        setPosition(result) {
          mockSetPosition(result);
        }
      },

      Size: class {
        constructor(xSize, ySize) {
          mockSize(xSize, ySize);
        }

      },
      Point: class {
        constructor(xSize, ySize) {
          mockPoint(xSize, ySize);
        }
      },

      LatLng: class {},
      Map: class {
        setCenter(center) {
          mockSetCenter(center);
        }
        setOptions(options) {
          mockSetOptions(options);
        }
        setZoom(zoom) {
          mockSetZoom(zoom);
        }
      },
    },
  };
  global.window.google = google;
};

let map;

describe('Testing the map', () => {

  beforeEach(() => {
    setupGoogleMapsMock(mockCallbacks);
    map = render(
      <Map
        origin={origin}
        destination={destination}
        travelMode={travelMode}
        stops={stops}
        sliderPosition={sliderPosition}
        center={center}
      />
    );
  });

  it("map renders correctly", () => {
    const { container } = map;
    const mapComponent = container.querySelector("#google-map");
    expect(mapComponent).toBeTruthy();    
  });
  
  it("the set size callback is called", () => {
    expect(mockCallbacks.mockSize.mock.calls.length).toBe(4);
    expect(mockCallbacks.mockSize.mock.calls[0][0]).toBe(50);
    expect(mockCallbacks.mockSize.mock.calls[0][1]).toBe(50);
    expect(mockCallbacks.mockSize.mock.calls[1][0]).toBe(50);
    expect(mockCallbacks.mockSize.mock.calls[0][1]).toBe(50);
  });

  it("the set point callback is called", () => {
    expect(mockCallbacks.mockPoint.mock.calls.length).toBe(8);
    expect(mockCallbacks.mockPoint.mock.calls[0][0]).toBe(0);
    expect(mockCallbacks.mockPoint.mock.calls[0][1]).toBe(0);
    expect(mockCallbacks.mockPoint.mock.calls[1][0]).toBe(15);
    expect(mockCallbacks.mockPoint.mock.calls[1][1]).toBe(50);
    expect(mockCallbacks.mockPoint.mock.calls[2][0]).toBe(0);
    expect(mockCallbacks.mockPoint.mock.calls[2][1]).toBe(0);
    expect(mockCallbacks.mockPoint.mock.calls[3][0]).toBe(15);
    expect(mockCallbacks.mockPoint.mock.calls[3][1]).toBe(50);
  });
  
  it("the set route callback is called", () => {
    expect(mockCallbacks.mockSetRoute.mock.calls.length).toBe(1);
  });

  it("the marker class has been called", () => {
    expect(mockCallbacks.mockSetMap.mock.calls.length).toBe(7);
    expect(mockCallbacks.mockSetIcon.mock.calls.length).toBe(8);
    expect(mockCallbacks.mockSetPosition.mock.calls.length).toBe(14);
  });

  it("the map class has been called", () => {
    expect(mockCallbacks.mockSetCenter.mock.calls.length).toBe(1);
    expect(mockCallbacks.mockSetOptions.mock.calls.length).toBe(1);
    expect(mockCallbacks.mockSetZoom.mock.calls.length).toBe(1);
  });
})
