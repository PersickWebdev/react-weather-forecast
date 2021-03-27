import { authTypes } from './authActionTypes';

const initialState = {
    isLogged: false,
    user: {},
    error: {}
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authTypes.setIsLogged:
            return {
                ...state,
                isLogged: action.payload
            }
        case authTypes.setUser:
            return {
                ...state,
                user: action.payload
            }
        case authTypes.setError:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};