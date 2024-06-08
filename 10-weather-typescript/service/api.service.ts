import axios from "axios";

const url: string = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = async (city: string, appId: string, lang: string, units: string) => {
  const { data } = await axios.get(url, {
    params: {
      q: city,
      appId: appId,
      lang: lang,
      units: units,
    },
  });
  return data;
};

export { getWeather };
