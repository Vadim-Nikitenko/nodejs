import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const filePath = join(homedir(), "weather-data.json");
const TOKEN_DICTIONARY = {
  appId: "appId",
  city: "city",
  lang: "lang",
  units: "units",
};

const updateConfig = async (config) => {
  let data = {};
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    data = JSON.parse(file);
    for (const key in config) {
      if (config[key] !== undefined) {
        data[key] = config[key];
      }
    }
  }
  await promises.writeFile(filePath, JSON.stringify(data));
};

const replaceConfig = async (config) => {
  await promises.writeFile(filePath, JSON.stringify(config));
};

const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    const data = JSON.parse(file);
    return data[key];
  }
  return undefined;
};

const isExist = async (path) => {
  try {
    await promises.access(path);
    return true;
  } catch (error) {
    return false;
  }
};

export { replaceConfig, updateConfig, getKeyValue, TOKEN_DICTIONARY };
