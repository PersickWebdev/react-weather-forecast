import { weatherTypes } from './weatherActionTypes';

const initialState = {
    weather: {},
    temperature: 'isNeutral'
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case weatherTypes.setWeather:
            return {
                ...state,
                weather: action.payload
            }
        case weatherTypes.setTemperature:
            return {
                ...state,
                temperature: action.payload
            }
        default:
            return state;
    }
};