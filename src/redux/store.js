import { createStore, combineReducers, applyMiddleware } from 'redux'
import { periods, currentPeriod } from './reducers.js';
import stateData from '../state.json';
/**
 * The idea here would be to define a Service Layer
 * that will query an endpoint to get the Periods and
 * another endpoint with UI-State data only, to handle preferred views and so on.
 */
const getInitialState = (data = {}) => {
    // let reduxStore = localStorage['redux-store'];
    // return reduxStore ? JSON.parse(reduxStore): data;
    return data;
};

const logger = (store) => (next) => (action) => {
    console.groupCollapsed('dispatching', action.type);
    console.log('Prev State:', store.getState());
    console.log('Action:', action);
    next(action);
    console.log('Next State:', store.getState());
    console.groupEnd();
};

const saver = (store) => (next) => (action) => {
    let result = next(action);
    // localStorage['redux-store'] = JSON.stringify(store.getState());
    return result;
};

const storeFactory = (initialState = stateData) => {
    return applyMiddleware(logger, saver)(createStore)(
        combineReducers({ periods, currentPeriod }),
        getInitialState(initialState)
    )
};

export default storeFactory;

