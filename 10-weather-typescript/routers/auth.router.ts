import express, {Request, Response, NextFunction, Router} from 'express';
import { getKeyValue, TOKEN_DICTIONARY } from "../service/storage.service.js";

const authRouter: Router = express.Router();

authRouter.get('/',  async (req: Request, res: Response, next: NextFunction) => {
    req.query.q = req.query.q ?? await getKeyValue(TOKEN_DICTIONARY.city);
    req.query.appId = req.query.appId ?? await getKeyValue(TOKEN_DICTIONARY.appId);
    req.query.units = req.query.units ?? await getKeyValue(TOKEN_DICTIONARY.units);
    req.query.lang = req.query.lang ?? await getKeyValue(TOKEN_DICTIONARY.lang);

    next();
});

export default authRouter ;