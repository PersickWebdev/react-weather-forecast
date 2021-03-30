import { weatherTypes } from './weatherActionTypes';

const initialState = {
    weather: {}
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case weatherTypes.setWeather:
            return {
                ...state,
                weather: action.payload
            }
        default:
            return state;
    }
};