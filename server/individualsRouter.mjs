import express from "express";

import * as db from "./db.mjs";

const individualsRouter = express.Router();

individualsRouter.get("/", async (request, response) => {
  const individuals = await db.getIndividuals();
  response.json(individuals);
});

individualsRouter.use(express.json());


export default individualsRouter;