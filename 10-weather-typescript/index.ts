/**
 * Для запуска выполни:
 * npm i
 * npm start
 *
 * Получение погоды со всеми параметрами переданными в запрос
 * GET http://localhost:8000/weather?q=moscow&lang=ru&units=metrics&appId=YOUR_TOKEN_HERE
 *
 * Сохранение конфигов в локальный файл. После сохранения, параметры в последующих запросах можно не указывать.
 * POST http://localhost:8000/config?q=moscow&lang=ru&units=metrics&appId=YOUR_TOKEN_HERE
 *
 * Получение погоды после сохранения конфига. Если парамметр передан, то он переопределит
 * значение из локального конфига в рамках запрос без перезаписи в файл.
 * GET http://localhost:8000/weather
 *
 * Пример обновления конфига
 * PATCH http://localhost:8000/config?q=london
 */

import express, {Express} from "express";
import weatherRouter from "./routers/weather.router.js";
import configRouter from "./routers/config.router.js";
import authRouter from "./routers/auth.router.js";

const port: number = 8000;
const app: Express = express();

app.use("/weather", authRouter);
app.use("/weather", weatherRouter);
app.use("/config", configRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
