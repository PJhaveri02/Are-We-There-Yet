import mongoose from "mongoose";

const Schema = mongoose.Schema;

// The Schema of a single trip
const subTrip = new Schema({
  startDate: Date,
  endDate: Date,
  xCoordinate: String,
  yCoordinate: String,
});

const tripSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    trips: [subTrip],
  },
  {
    timestamps: {},
  }
);

const Trip = mongoose.model("Trip", tripSchema);

export { Trip };
