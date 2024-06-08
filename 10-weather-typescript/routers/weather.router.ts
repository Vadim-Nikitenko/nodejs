import express, {Request, Response, Router} from "express";
import { getWeather } from "../service/api.service.js";

const weatherRouter: Router = express.Router();

weatherRouter.get("/", async (req: Request, res: Response) => {
  const weather = await getWeather(
    req.query.q as string,
    req.query.appId as string,
    req.query.lang as string,
    req.query.units as string,
  );
  res.json(weather);
});

export default weatherRouter;
