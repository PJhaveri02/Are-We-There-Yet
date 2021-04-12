import mongoose from "mongoose";
import connectToDatabase from "./db-connect";
import dummyTrips from "./dummy-trips";
import { Trip } from "./trip-schema";

const addData = async () => {
  await Trip.insertMany(dummyTrips.map((t) => new Trip(t)));
};

const main = async () => {
  await connectToDatabase();
  console.log("Connected to database!");
  console.log();

  // Delete Trips
  await Trip.deleteMany({});

  // Add Trips to database
  await addData();

  // Disconnect from database
  mongoose.disconnect();
};

main();
