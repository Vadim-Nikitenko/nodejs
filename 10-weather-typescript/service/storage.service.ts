import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";
import { ConfigDTO } from "../model/ConfigDTO.js";

const filePath = join(homedir(), "weather-data.json");
const TOKEN_DICTIONARY = {
  appId: "appId",
  city: "city",
  lang: "lang",
  units: "units",
};

const updateConfig = async (config: ConfigDTO) => {
  let data: ConfigDTO = new ConfigDTO();
  if (await isExist(filePath)) {
    const file: Buffer = await promises.readFile(filePath);
    data = JSON.parse(file.toString());
    for (const key in config) {
      if (config[key] !== undefined) {
        data[key] = config[key];
      }
    }
  }
  await promises.writeFile(filePath, JSON.stringify(data));
};

const replaceConfig = async (config: ConfigDTO) => {
  await promises.writeFile(filePath, JSON.stringify(config));
};

const getKeyValue = async (key: string) => {
  if (await isExist(filePath)) {
    const file: Buffer = await promises.readFile(filePath);
    const data = JSON.parse(file.toString());
    return data[key];
  }
  return undefined;
};

const isExist = async (path: string) => {
  try {
    await promises.access(path);
    return true;
  } catch (error) {
    return false;
  }
};

export { replaceConfig, updateConfig, getKeyValue, TOKEN_DICTIONARY };
