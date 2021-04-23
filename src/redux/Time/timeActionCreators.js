import { timeTypes } from './timeActionTypes';

export const setDayPart = (dayPart) => {
    return {
        type: timeTypes.setDayPart,
        payload: dayPart
    };
};