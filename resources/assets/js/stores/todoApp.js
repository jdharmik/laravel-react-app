import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux-immutable';

import task from 'reducers/task';
import page from 'reducers/page';

const appReducer = combineReducers({
    page,
    task
});

/**
 * createStore creates store from appReducer
 */
export default createStore(appReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
