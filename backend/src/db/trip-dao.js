/**
 * This file contains functions that access our MongoDB database based on the api call
 */

import { Trip } from './trip-schema';

// Retrieve all of users trips
export const retrieveAllTrips = async (userID) => {
  return await Trip.find({ userID: userID });
};

// Retrieve one trip based on trip id. Checking whether the trip is associated to the user will be done in trips.js
export const retrieveTrip = async (id) => {
  return await Trip.findById(id);
};
