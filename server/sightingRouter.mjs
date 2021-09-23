import express from "express";

import * as db from "./db.mjs";

const sightingRouter = express.Router();

sightingRouter.get("/", async (request, response) => {
  const sightings = await db.getSightings();
  response.json(sightings);
});

sightingRouter.use(express.json());
sightingRouter.post("/", async (request, response) => {
  console.log("body", request.body)
  const params = {
    date: request.body.date,
    indId: request.body.indId,
    location: request.body.location,
    health: request.body.health,
    email: request.body.email,
    timestamp: request.body.timestamp
  }
  const sighting = await db.postSighting(params);
  response.status(201).json(sighting);
});

export default sightingRouter;