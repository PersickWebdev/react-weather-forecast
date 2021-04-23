import { weatherTypes } from './weatherActionTypes';

export const setWeather = (object) => {
    return {
        type: weatherTypes.setWeather,
        payload: object
    };
};