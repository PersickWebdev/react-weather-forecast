import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from './Auth/authReducer';
import { weatherReducer } from './Weather/weatherReducer';

const reducers = combineReducers({
    authData: authReducer,
    weatherData: weatherReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));