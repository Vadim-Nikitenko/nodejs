import chalk from "chalk";
import dedent from "dedent-js";
import { getIcon } from "./api.service.js";

const printError = (errorMessage) => {
  console.log(`${chalk.bgRed("ERROR")} ${errorMessage}`);
};
const printSuccess = (successMessage) => {
  console.log(`${chalk.bgGreen("SUCCESS")} ${successMessage}`);
};
const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan("HELP")}
        Без параметров - вывод погоды
        -s [...CITIES] для установки городов через запятую или пробел
        -h для вывода помощи
        -t [API_KEY] для сохранения токена
        -l [LANGUAGE] для сохранения языка`,
  );
};

const printWeather = (weatherData) => {
  const { name, main, weather, wind, sys } = weatherData;
  const weatherDescription = weather[0].description;
  const weatherIcon = getIcon(weather[0].icon);
  const sunriseTime = new Date(sys.sunrise * 1000).toLocaleTimeString("ru-RU", {
    timeZone: "Europe/Moscow",
  });
  const sunsetTime = new Date(sys.sunset * 1000).toLocaleTimeString("ru-RU", {
    timeZone: "Europe/Moscow",
  });

  console.log(dedent`
  ${chalk.bold("Погода в городе")}: ${name}
  ${weatherIcon} ${chalk.magenta(weatherDescription)}
  ${chalk.yellowBright("Температура")}: ${main.temp}°C (${chalk.greenBright("ощущается как")} ${main.feels_like}°C)
  Мин. температура: ${main.temp_min} °C
  Макс. температура: ${main.temp_max} °C
  Давление: ${main.pressure} гПа
  Влажность: ${main.humidity} %
  Видимость: ${weatherData.visibility} м
  Ветер: ${wind.speed} м/с, направление ${wind.deg}°
  Порывы ветра: ${wind.gust} м/с
  Облачность: ${weatherData.clouds.all} %
  Восход солнца: ${sunriseTime}
  Закат солнца: ${sunsetTime}
  _____________________________
  `);
};

export { printError, printSuccess, printHelp, printWeather };
