<<<<<<< HEAD
import express from 'express';
import {
  createTrip,
  deleteTrip,
  modifyTrip,
  retrieveAllTrips,
  retrieveTrip,
} from '../../db/trip-dao';
import mongoose from 'mongoose';
=======
import express from "express";
>>>>>>> dc90a20338b37393218fcaedece1678f17df5082

const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;
<<<<<<< HEAD
const HTTP_UNAUTHORISED = 401;
const HTTP_BAD_REQUEST = 400;

const router = express.Router();

router.use('/:id', async (req, res, next) => {
  const { id } = req.params;
  if (mongoose.isValidObjectId(id)) {
    next();
  } else {
    res.status(HTTP_BAD_REQUEST).contentType('text/plain').send('Invalid ID');
  }
});

// Retrieve all of users trip. The users id is provided in request body
router.get('/', async (req, res) => {
  const userID = req.body.userID;

  if (!userID) {
    res.sendStatus(HTTP_UNAUTHORISED);
    return;
  }
  res.json(await retrieveAllTrips(userID));
});

// Retrieve single trip
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const trip = await retrieveTrip(id);
  const userID = req.body.userID;

  if (!trip) {
    res.sendStatus(HTTP_NOT_FOUND);
  } else if (trip.userID !== userID) {
    res.sendStatus(HTTP_UNAUTHORISED);
  } else {
    res.json(trip);
  }
});

// Delete user's trip
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const userID = req.body.userID;
  const success = await deleteTrip(id, userID);
  res.sendStatus(success ? HTTP_NO_CONTENT : HTTP_UNAUTHORISED);
});

// Create new trip
router.post('/', async (req, res) => {
  const userID = req.body.userID;
  if (!userID) {
    res.sendStatus(HTTP_UNAUTHORISED);
    return;
  }

  const trip = { ...req.body.trip, userID: userID };
  const newTrip = await createTrip(trip);
  res.sendStatus(HTTP_CREATED).header('location', `/api/trips/${newTrip._id}`).json(newTrip);
});

// Update trip
router.put('/:id', async (req, res) => {
  const userID = req.body.userID;
  if (!userID) {
    res.sendStatus(HTTP_UNAUTHORISED);
    return;
  }

  const { id } = req.params;
  const trip = {
    ...req.body.trip,
    _id: id,
    userID: userID,
  };

  const status = await modifyTrip(trip);
  res.sendStatus(status);
});
=======

const router = express.Router();

// TODO: Need to add API endpoints
>>>>>>> dc90a20338b37393218fcaedece1678f17df5082

export default router;
