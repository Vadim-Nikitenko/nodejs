import express, { Request, Response, NextFunction, Router } from "express";
import { getKeyValue, TOKEN_DICTIONARY } from "../service/storage.service.js";

const storageRouter: Router = express.Router();

storageRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
  req.data = {
    city:
      req.query.q ??
      (await getKeyValue(TOKEN_DICTIONARY.city)),
    appId:
      req.query.appId ??
      (await getKeyValue(TOKEN_DICTIONARY.appId)),
    units:
      req.query.units ??
      (await getKeyValue(TOKEN_DICTIONARY.units)),
    lang:
      req.query.lang ??
      (await getKeyValue(TOKEN_DICTIONARY.lang)),
  };
  console.log(req.data);
  next();
});

export default storageRouter;
