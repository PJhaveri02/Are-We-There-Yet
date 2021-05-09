import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// The Schema of a sub trip
const stop = new Schema({
  startDate: Date,
  locationName: String,
  timeSpent: Number,
  lat: Number,
  lng: Number,
});

const tripSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    stops: [stop],
    userID: String,
  },
  {
    timestamps: {},
  }
);

const Trip = mongoose.model('Trip', tripSchema);

export { Trip };
