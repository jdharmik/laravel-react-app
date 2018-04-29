import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux-immutable';

import group from 'reducers/group';
import page from 'reducers/page';
import user from 'reducers/user';

const appReducer = combineReducers({
    page,
    user,
    group
});

/**
 * createStore creates store from appReducer
 */
export default createStore(appReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
