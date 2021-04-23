import { timeTypes } from './timeActionTypes';

const initialState = {
    dayPart: ''
};

export const timeReducer = (state = initialState, action) => {
    switch (action.type) {
        case timeTypes.setDayPart:
            return {
                ...state,
                dayPart: action.payload
            }
        default:
            return state;
    }
};