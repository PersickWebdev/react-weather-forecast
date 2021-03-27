import { authTypes } from './authActionTypes';

export const setIsLogged = (booleanValue) => {
    return {
        type: authTypes.setIsLogged,
        payload: booleanValue
    };
};

export const setUser = (userObject) => {
    return {
        type: authTypes.setUser,
        payload: userObject
    };
};

export const setError = (errorObject) => {
    return {
        type: authTypes.setError,
        payload: errorObject
    };
};