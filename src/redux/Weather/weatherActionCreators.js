import { weatherTypes } from './weatherActionTypes';

export const setWeather = (object) => {
    return {
        type: weatherTypes.setWeather,
        payload: object
    };
};

export const setTemperature = (number) => {
    return {
        type: weatherTypes.setTemperature,
        payload: number
    };
};