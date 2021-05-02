import axios from 'axios';
import mongoose, { mongo } from 'mongoose';
import { Trip } from '../../../db/trip-schema';
import connectToDatabase from '../../../db/db-connect';
import express from 'express';
import routes from '../trips';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongod, app, server;

const dummyData = [
  {
    trip: {
      _id: new mongoose.mongo.ObjectId('000000000000000000000001'),
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
    },
    userID: 'ABC123',
  },
  {
    trip: {
      _id: new mongoose.mongo.ObjectId('000000000000000000000003'),
      title: 'Trip 2',
      description: 'Second trip',
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
          timeSpent: 3,
        },
      ],
    },
    userID: 'ABC123',
  },
  {
    trip: {
      _id: new mongoose.mongo.ObjectId('000000000000000000000002'),
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
    },
    userID: 'USER2',
  },
];

// Begin server and db before running tests
beforeAll(async (done) => {
  mongod = new MongoMemoryServer();

  await mongod.getUri().then((cs) => connectToDatabase(cs));

  app = express();
  app.use(express.json());
  app.use('/api/trips', routes);
  server = app.listen(3001, done);
});

// Stop server and db once all tests complete
afterAll((done) => {
  server.close(async () => {
    await mongoose.disconnect();
    await mongod.stop();
    done();
  });
});

// Populate db with dummy data before each test
beforeEach(async () => {
  for (let i = 0; i < dummyData.length; i++) {
    await axios.post('http://localhost:3001/api/trips', dummyData[i]);
  }
});

// Clear database after each test
afterEach(async () => {
  await Trip.deleteMany({});
});

it('retrieve all trips successfully', async () => {
  const response = await axios({
    method: 'GET',
    url: 'http://localhost:3001/api/trips',
    data: {
      userID: 'ABC123',
    },
  });

  expect(response.status).toBe(200);
  const responseTrips = response.data;
  expect(responseTrips.length).toBe(2);

  for (let i = 0; i < responseTrips.length; i++) {
    const responseTrip = responseTrips[i];
    const expectedTrip = dummyData[i].trip;

    expect(responseTrip._id.toString()).toEqual(expectedTrip._id.toString());
    expect(responseTrip.title).toEqual(expectedTrip.title);
    expect(responseTrip.description).toEqual(expectedTrip.description);
    expect(responseTrip.stops.locationName).toEqual(expectedTrip.stops.locationName);
    expect(responseTrip.stops.lat).toEqual(expectedTrip.stops.lat);
    expect(responseTrip.stops.lng).toEqual(expectedTrip.stops.lng);
  }
});

it('retrieve a single trip successfully', async () => {
  const response = await axios({
    method: 'GET',
    url: 'http://localhost:3001/api/trips/000000000000000000000001',
    data: {
      userID: 'ABC123',
    },
  });
  expect(response.status).toBe(200);

  const responseTrip = response.data;
  const expectedTrip = dummyData[0].trip;
  expect(responseTrip._id.toString()).toEqual(expectedTrip._id.toString());
  expect(responseTrip.title).toEqual(expectedTrip.title);
  expect(responseTrip.description).toEqual(expectedTrip.description);
  expect(responseTrip.stops.locationName).toEqual(expectedTrip.stops.locationName);
  expect(responseTrip.stops.lat).toEqual(expectedTrip.stops.lat);
  expect(responseTrip.stops.lng).toEqual(expectedTrip.stops.lng);
});

it('returns a 404 when attempting to retrieve a nonexistant trip (valid id)', async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'http://localhost:3001/api/trips/000000000000000000000000',
      data: {
        userID: 'ABC123',
      },
    });
    fail('Should have thrown an exception.');
  } catch (err) {
    const { response } = err;
    expect(response).toBeDefined();
    expect(response.status).toBe(404);
  }
});

it('returns a 400 when attempting to retrieve a nonexistant trip (invalid id)', async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'http://localhost:3001/api/trips/randomID',
      data: {
        userID: 'ABC123',
      },
    });
    fail('Should have thrown an exception.');
  } catch (err) {
    const { response } = err;
    expect(response).toBeDefined();
    expect(response.status).toBe(400);
    expect(response.data).toBe('Invalid ID');
  }
});

it('401 should be thrown when no id given', async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'http://localhost:3001/api/trips/000000000000000000000001',
      data: {
        userID: '',
      },
    });
    fail('Should have thrown an exception.');
  } catch (error) {
    const { response } = error;
    expect(response).toBeDefined();
    expect(response.status).toBe(401);
  }
});

it("401 should be thrown when access other's trip ", async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'http://localhost:3001/api/trips/000000000000000000000001',
      data: {
        userID: 'USER2',
      },
    });
    fail('Should have thrown an exception.');
  } catch (error) {
    const { response } = error;
    expect(response).toBeDefined();
    expect(response.status).toBe(401);
  }
});

it('Create a new trip', async () => {
  const trip = {
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
  };

  const response = await axios({
    method: 'POST',
    url: 'http://localhost:3001/api/trips',
    data: {
      userID: 'USER2',
      trip: trip,
    },
  });

  //Check response if correct
  expect(response.status).toBe(201);
  expect(response.data).toBeDefined();
  const responseTrip = response.data;
  expect(responseTrip.title).toEqual(trip.title);
  expect(responseTrip.description).toEqual(trip.description);
  expect(responseTrip.stops.locationName).toEqual(trip.stops.locationName);
  expect(responseTrip.stops.lat).toEqual(trip.stops.lat);
  expect(responseTrip.stops.lng).toEqual(trip.stops.lng);

  // Check added to database
  const dbTrip = await Trip.findById(responseTrip._id);
  expect(dbTrip.title).toEqual(trip.title);
  expect(dbTrip.description).toEqual(trip.description);
  expect(dbTrip.stops.locationName).toEqual(trip.stops.locationName);
  expect(dbTrip.stops.lat).toEqual(trip.stops.lat);
  expect(dbTrip.stops.lng).toEqual(trip.stops.lng);
});

it('401 when adding trip and not authorised', async () => {
  const trip = {
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
  };

  try {
    const response = await axios({
      method: 'POST',
      url: 'http://localhost:3001/api/trips',
      data: {
        userID: '',
        trip: trip,
      },
    });
    fail('Should have thrown an exception.');
  } catch (error) {
    const { response } = error;
    expect(response).toBeDefined();
    expect(response.status).toBe(401);
  }
});

it('Deletes a trip', async () => {
  const response = await axios({
    method: 'DELETE',
    url: 'http://localhost:3001/api/trips/000000000000000000000003',
    data: {
      userID: 'ABC123',
    },
  });
  expect(response.status).toBe(204);

  // Check db item was deleted
  expect(await Trip.findById('000000000000000000000003')).toBeNull();
});

it("Doesn't delete trip when not needed", async () => {
  const response = await axios({
    method: 'DELETE',
    url: 'http://localhost:3001/api/trips/000000000000000000000013',
    data: {
      userID: 'ABC123',
    },
  });
  expect(response.status).toBe(204);

  expect(await Trip.countDocuments()).toBe(3);
});

it("401 when deleting someone else's trip", async () => {
  try {
    await axios({
      method: 'DELETE',
      url: 'http://localhost:3001/api/trips/000000000000000000000002',
      data: {
        userID: 'ABC123',
      },
    });
    fail('Should have trown an error');
  } catch (err) {
    const { response } = err;
    expect(response).toBeDefined();
    expect(response.status).toBe(401);
    expect(await Trip.countDocuments()).toBe(3);
  }
});
