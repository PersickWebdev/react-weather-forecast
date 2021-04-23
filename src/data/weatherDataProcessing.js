import axios from 'axios';
import { setWeather } from '../redux/Weather/weatherActionCreators';

const API_KEY = '5fe3099bc9e3ebcf55fe80c518fc08fc';

const generateRequestUrl = (city, apiKey) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
}

export const useWeather = () => {
    const fetchWeather = async (city, dispatch) => {
        const result = await axios.get(generateRequestUrl(city, API_KEY));
        const weather = result.data;
        const temperature = Math.round(weather.main?.temp);
        const defineTemperature = (temperature) => {
            if (temperature <= 10) return 'isCold';
            if (temperature > 10 && temperature <= 25) return 'isWarm';
            if (temperature > 25) return 'isHot';
        };
        const temp = defineTemperature(temperature);
        dispatch(setWeather(weather));
    }

    return { fetchWeather }
}