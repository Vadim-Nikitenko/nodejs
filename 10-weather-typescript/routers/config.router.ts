import express, {Router} from "express";
import { replaceConfig, updateConfig } from "../service/storage.service.js";
import { ConfigDTO } from "../model/ConfigDTO.js";

const configRouter: Router = express.Router();

configRouter.post("/", async (req, res) => {
  const config = new ConfigDTO(
    req.query.q as string,
    req.query.units as string,
    req.query.lang as string,
    req.query.appId as string,
  );
  await replaceConfig(config);
  res.status(201).end();
});

configRouter.patch("/", async (req, res) => {
  const config = new ConfigDTO(
    req.query.q as string,
    req.query.units as string,
    req.query.lang as string,
    req.query.appId as string,
  );
  await updateConfig(config);
  res.end();
});

export default configRouter;
