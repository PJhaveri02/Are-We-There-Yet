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
  startDate: '2021-04-27',
  locationName: 'New Market',
  timeSpent: 1,
  lat: newmarket.lat,
  lng: newmarket.lng,
};

const DUMMY_USER_STOP_2 = {
  startDate: '2021-04-27',
  locationName: 'Mission Bay',
  timeSpent: 2,
  lat: missionbay.lat,
  lng: missionbay.lng,
};

const DUMMY_USER_STOP_3 = {
  startDate: '2021-04-27',
  locationName: 'Meadow Bank',
  timeSpent: 3,
  lat: meadowbank.lat,
  lng: meadowbank.lng,
};

const DUMMY_USER_STOP_4 = {
  startDate: '2021-04-27',
  locationName: 'Auckland University',
  timeSpent: 4,
  lat: aucklanduniversity.lat,
  lng: aucklanduniversity.lng,
};

const dummyTrips = [
  {
    title: 'Trip 1',
    description: 'First ever trip',
    stops: [
      {
        locationName: 'Sky City',
        startDate: '2021-04-01',
        lat: '-36.8488',
        lng: '174.7617',
        timeSpent: 5,
      },
      {
        locationName: 'UOA',
        lat: '-36.8523',
        lng: '174.7691',
        timeSpent: 1,
      },
    ],
    userID: '608794d3285468417ce4549b',
  },
  {
    title: 'Auckland City Trip',
    description: 'trip in main parts of Auckland',
    stops: [DUMMY_USER_STOP_4, DUMMY_USER_STOP_1, DUMMY_USER_STOP_2, DUMMY_USER_STOP_3],
    userID: '608794d3285468417ce4549b',
  },
  {
    title: 'USA',
    stops: [
      {
        locationName: 'LA',
        startDate: '2021-12-01',
        lat: '34.0522',
        lng: '-118.2437',
        timeSpent: 10,
      },
      {
        locationName: 'Las Vegas',
        lat: '36.1699',
        lng: '-115.1398',
        timeSpent: 5,
      },
    ],
    userID: 'USER2',
  },
];

export default dummyTrips;
