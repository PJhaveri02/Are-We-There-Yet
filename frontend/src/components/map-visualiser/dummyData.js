const newmarket = {
  lat: -36.868251,
  lng: 174.7712577,
};

const missionbay = {
  lat: -36.8556501,
  lng: 174.8242479,
};

const meadowbank = {
  lat: -36.8707214,
  lng: 174.8224248,
};
const aucklanduniversity = {
  lat: -36.8523,
  lng: 174.7691,
};

const DUMMY_USER_STOP_1 = {
  startDate: "2021-04-27",
  locationName: "New Market",
  timeSpent: 1,
  lat: newmarket.lat,
  lng: newmarket.lng,
};

const DUMMY_USER_STOP_2 = {
  startDate: "2021-04-27",
  locationName: "Mission Bay",
  timeSpent: 2,
  lat: missionbay.lat,
  lng: missionbay.lng,
};

const DUMMY_USER_STOP_3 = {
  startDate: "2021-04-27",
  locationName: "Meadow Bank",
  timeSpent: 3,
  lat: meadowbank.lat,
  lng: meadowbank.lng,
};

const DUMMY_USER_STOP_4 = {
  startDate: "2021-04-27",
  locationName: "Auckland University",
  timeSpent: 4,
  lat: aucklanduniversity.lat,
  lng: aucklanduniversity.lng,
};

const routes = [
  DUMMY_USER_STOP_4,
  DUMMY_USER_STOP_1,
  DUMMY_USER_STOP_2,
  DUMMY_USER_STOP_3,
];

export {
  newmarket,
  missionbay,
  meadowbank,
  aucklanduniversity,
  routes,
  DUMMY_USER_STOP_1,
  DUMMY_USER_STOP_2,
  DUMMY_USER_STOP_3,
  DUMMY_USER_STOP_4,
};