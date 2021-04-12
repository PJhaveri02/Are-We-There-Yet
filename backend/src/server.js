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

// Start the DB running. Then, once it's connected, start the server.
mongoose
  .connect("mongodb://localhost:27017/Are-We-There-Yet", {
    useNewUrlParser: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`App server listening on port ${port}!`))
  );
