<<<<<<< HEAD
import mongoose from 'mongoose';
=======
import mongoose from "mongoose";
>>>>>>> dc90a20338b37393218fcaedece1678f17df5082

const Schema = mongoose.Schema;

// The Schema of a sub trip
const stop = new Schema({
  startDate: Date,
  locationName: String,
  timeSpent: Number,
  lat: String,
  lng: String,
});

const tripSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
<<<<<<< HEAD
    stops: [stop],
=======
    trips: [stop],
>>>>>>> dc90a20338b37393218fcaedece1678f17df5082
    userID: String,
  },
  {
    timestamps: {},
  }
);

<<<<<<< HEAD
const Trip = mongoose.model('Trip', tripSchema);
=======
const Trip = mongoose.model("Trip", tripSchema);
>>>>>>> dc90a20338b37393218fcaedece1678f17df5082

export { Trip };
