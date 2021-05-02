import axios from 'axios';
import mongoose from 'mongoose';
import { Trip } from '../../../db/trip-schema';
import connectToDatabase from '../../../db/db-connect';
import express from 'express';
import routes from '../trips';

const dummyData = [
  {
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
    userID: 'ABC123',
  },
  {
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
    userID: 'USER2',
  },
];
