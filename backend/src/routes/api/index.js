import express from "express";

const router = express.Router();

import trips from "./trips";
router.use("/trips", trips);

export default router;
