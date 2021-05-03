/**
 * This file contains functions that access our MongoDB database based on the api call
 */

import { Trip } from './trip-schema';

const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;
const HTTP_UNAUTHORISED = 401;

// Retrieve all of users trips
export const retrieveAllTrips = async (userID) => {
  return await Trip.find({ userID: userID });
};

// Retrieve one trip based on trip id. Checking whether the trip is associated to the user will be done in trips.js
export const retrieveTrip = async (id) => {
  return await Trip.findById(id);
};

// Delete a users trip. The function returns false if the user tries to acccess someone elses trip
// Otherwise, the function returns true
export const deleteTrip = async (id, userID) => {
  const trip = await Trip.findById(id);
  if (trip && trip.userID !== userID) {
    return false;
  }

  await Trip.deleteOne({ _id: id });
  return true;
};

// Create a new trip
export const createTrip = async (trip) => {
  const dbTrip = new Trip(trip);
  await dbTrip.save();
  return dbTrip;
};

// Function that allows users to modify their own trip
export const modifyTrip = async (trip) => {
  const currentTrip = await Trip.findById(trip._id);
  if (currentTrip && currentTrip.userID !== trip.userID) {
    return HTTP_UNAUTHORISED;
  }

  const result = await Trip.findByIdAndUpdate(trip._id, trip, {
    new: true,
    useFindAndModify: false,
  });

  return result ? HTTP_NO_CONTENT : HTTP_NOT_FOUND;
};
