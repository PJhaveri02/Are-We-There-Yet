import mongoose from "mongoose";
import connectToDatabase from "./db-connect";
import { Trip } from "./trip-schema";

const main = async () => {
  await connectToDatabase();
  console.log("Connected to database!");
  console.log();

  // Delete Trips
  await Trip.deleteMany({});

  const newTrip = new Trip({
    title: "New Trip",
  });
  await newTrip.save();

  // Disconnect from database
  mongoose.disconnect();
};

main();
