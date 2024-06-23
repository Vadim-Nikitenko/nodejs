import axios from "axios";
import { WeatherDTO } from "../model/WeatherDTO";

const url: string = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = async (weather: WeatherDTO) => {
  const { data } = await axios.get(url, {
    params: {
      q: weather.city,
      appId: weather.appId,
      lang: weather.lang,
      units: weather.units,
    },
  });
  return data;
};

export { getWeather };
