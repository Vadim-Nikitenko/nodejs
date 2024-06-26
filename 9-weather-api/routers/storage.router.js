import express from 'express';
import { getKeyValue, TOKEN_DICTIONARY } from "../service/storage.service.js";

const storageRouter = express.Router();

storageRouter.get('/',  async (req, res, next) => {
    req.query.q = req.query.q ?? await getKeyValue(TOKEN_DICTIONARY.city);
    req.query.appId = req.query.appId ?? await getKeyValue(TOKEN_DICTIONARY.appId);
    req.query.units = req.query.units ?? await getKeyValue(TOKEN_DICTIONARY.units);
    req.query.lang = req.query.lang ?? await getKeyValue(TOKEN_DICTIONARY.lang);

    next();
});

export default storageRouter ;