import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { timeReducer } from './Time/timeReducer';
import { weatherReducer } from './Weather/weatherReducer';

const reducers = combineReducers({
    timeData: timeReducer,
    weatherData: weatherReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));