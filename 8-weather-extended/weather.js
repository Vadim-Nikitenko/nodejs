#!/usr/bin/env node

/**
 * Предусловие:
 * - npm i
 * - наличие в homedir файла weather-data.json c активным API-key
 *
 * Для проверки заданий нужно запустить:
 * 1) Возможность установки языка (default ru)
 * - node ./weather.js -l en
 * - node ./weather.js
 *
 * 2) Возможность передачи множества городов
 * - node ./weather.js -s moscow, kazan london
 * - node ./weather.js
 */

import { getArgs } from "./helpers/args.js";
import {
  printHelp,
  printError,
  printSuccess,
  printWeather,
} from "./services/log.service.js";
import {
  getKeyValue,
  saveKeyValue,
  TOKEN_DICTIONARY,
} from "./services/storage.service.js";
import { getWeather } from "./services/api.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Не передан токен");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Токен сохранен");
  } catch (error) {
    printError(error.message);
  }
};

const saveCity = async (city) => {
  if (city.length <= 0) {
    printError("Не передан город");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    const arr = await getKeyValue(TOKEN_DICTIONARY.city);
    const text = arr.length > 1 ? "Города сохранены" : "Город сохранен";
    printSuccess(text);
  } catch (error) {
    printError(error.message);
  }
};

const saveLanguage = async (language) => {
  if (!language.length) {
    printError("Не передан язык");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.language, language);
    printSuccess("Язык сохранен");
  } catch (error) {
    printError(error.message);
  }
};

const getForecast = async () => {
  try {
    const cities = await getKeyValue(TOKEN_DICTIONARY.city);
    for (const c of cities) {
      const weather = await getWeather(c);
      printWeather(weather);
    }
  } catch (error) {
    if (error?.response?.status === 404) {
      printError(`Неверно указан город`);
    } else if (error?.response?.status === 401) {
      printError(`Неверно указан токен`);
    } else {
      printError(error.message);
    }
  }
};

const initCLI = async () => {
  const args = getArgs(process.argv);

  if (args.h !== undefined) {
    printHelp();
    return;
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  if (args.l) {
    return saveLanguage(args.l);
  }

  return getForecast();
};

await initCLI();
