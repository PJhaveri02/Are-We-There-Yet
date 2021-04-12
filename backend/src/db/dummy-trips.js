const dummyTrips = [
  {
    title: "Trip 1",
    description: "First ever trip!",
    trips: [
      {
        // Sky City
        startDate: "2021-04-01",
        endDate: "2021-04-05",
        lat: "-36.8488",
        lng: "174.7617",
      },
      {
        // UOA
        startDate: "2021-04-06",
        endDate: "2021-04-06",
        lat: "-36.8523",
        lng: "174.7691",
      },
    ],
    userID: "ABC123",
  },
  {
    title: "USA",
    trips: [
      {
        // LA
        startDate: "2021-12-01",
        endDate: "2021-12-12",
        lat: "34.0522",
        lng: "-118.2437",
      },
      {
        // Las Vegas
        startDate: "2021-12-13",
        endDate: "2021-12-16",
        lat: "36.1699",
        lng: "-115.1398",
      },
    ],
    userID: "USER2",
  },
];

export default dummyTrips;
