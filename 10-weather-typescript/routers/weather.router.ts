import express, { Request, Response, Router } from "express";
import { getWeather } from "../service/api.service.js";
import { WeatherDTO } from "../model/WeatherDTO.js";

const weatherRouter: Router = express.Router();

weatherRouter.get("/", async (req: Request, res: Response) => {
  const weather = await getWeather(
    new WeatherDTO(
        req.data?.city,
        req.data?.units,
        req.data?.lang,
        req.data?.appId
    ),
  );
  res.json(weather);
});

export default weatherRouter;
