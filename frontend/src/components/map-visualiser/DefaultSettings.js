const DEFAULT_TRAVEL_MODE = "DRIVING";

// Center in Auckland, New Zealand
const defaultCenter = {
  lat: -36.85,
  lng: 174.76,
};

const defaultZoom = 14;

const mapContainerStyle = {
  width: "75vw",
  height: "75vh",
};

// See https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions for options
const DEFAULT_MAP_SETTINGS = {
  disableDefaultUI: true,
  fullScreenControl: false,
  rotateControl: true,
  scrollWheel: true,
  streetViewControl: true,
  zoomControl: true,
  clickableIcons: false,
  fullScreen: false,
};

// returns a random property from an object
var getRandomProperty = (obj) => {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

const STROKE_COLORS = {
  blue: "#0000FF",
  navy: "#000080",
  green: "#00FF00",
  yellow: "#FFFF00",
  red: "#FF0000",
};

const DEFAULT_POLYLINE_OPT = {
  geodesic: true,
  strokeColor: "#89CFF0",
  strokeOpacity: 2.0,
  strokeWeight: 4,
};

const POLYLINE_OPT = {
  geodesic: true,
  strokeOpacity: 2.0,
  strokeWeight: 4,
};

export {
  DEFAULT_TRAVEL_MODE,
  defaultCenter,
  defaultZoom,
  mapContainerStyle,
  DEFAULT_MAP_SETTINGS,
  DEFAULT_POLYLINE_OPT,
  STROKE_COLORS,
  POLYLINE_OPT,
  getRandomProperty,
};
