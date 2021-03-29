import express from "express";
import path from "path";
import mongoose from "mongoose";
import routes from "./routes";

// Setup Express
const app = express();
const port = process.env.PORT || 3001;

// Setup body-parser
app.use(express.json());

// Setup routes
app.use("/", routes);

// Make the "public" folder available statically
app.use(express.static(path.join(__dirname, "../public")));

// TODO: Serve up the frontend's "build" directory, if we're running in production mode.

// TODO: Start the DB running. Then, once it's connected, start the server.
