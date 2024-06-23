import express from "express";
import { getWeather } from "../service/api.service.js";

const weatherRouter = express.Router();

weatherRouter.get("/", async (req, res) => {
  const weather = await getWeather(
    req.query.q,
    req.query.appId,
    req.query.lang,
    req.query.units,
  );
  res.json(weather);
});

export default weatherRouter;
