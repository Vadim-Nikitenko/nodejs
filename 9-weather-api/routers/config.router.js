import express from "express";
import { replaceConfig, updateConfig } from "../service/storage.service.js";
import { ConfigDTO } from "../model/ConfigDTO.js";

const configRouter = express.Router();

configRouter.post("/", async (req, res) => {
  const config = new ConfigDTO(
    req.query.q,
    req.query.units,
    req.query.lang,
    req.query.appId,
  );
  await replaceConfig(config);
  res.status(201).end();
});

configRouter.patch("/", async (req, res) => {
  const config = new ConfigDTO(
    req.query.q,
    req.query.units,
    req.query.lang,
    req.query.appId,
  );
  await updateConfig(config);
  res.end();
});

export default configRouter;
