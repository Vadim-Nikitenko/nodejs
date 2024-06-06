import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = async (city, appId, lang, units) => {
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
