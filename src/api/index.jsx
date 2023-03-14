import axios from "axios";
import { config } from "../config";

const apiKey = config.apiKey;

export const getWeather = (city) => {
  let url = `${config.baseURL}weather`;
  return axios.get(url, {
    params: {
      q: city,
      appid: apiKey,
      lang: "en",
      units: "metric",
    },
  });
};

// const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
//         params: {
//             q: city,
//             appid: token,
//             lang: 'en',
//             units: "metric"
//         },
//     })
