import Immutable from 'immutable';

const actionsMap = Immutable.fromJS({
    FETCH_USER_DATA: 'FETCH_USER_DATA',
    FETCH_GROUP_DASHBOARD_DATA: 'FETCH_GROUP_DASHBOARD_DATA',
    SET_PAGE_CLIENT_DATA: 'SET_PAGE_CLIENT_DATA',
    SET_PAGE_SERVER_DATA: 'SET_PAGE_SERVER_DATA',
    LOADING_PAGE_DATA: 'LOADING_PAGE_DATA',
    LOADING_IN_TASK: 'LOADING_IN_TASK',
    SET_TASKS_DATA: 'SET_TASKS_DATA',
    SET_A_SPECIFIC_TASK: 'SET_A_SPECIFIC_TASK',
    DELETE_A_SPECIFIC_TASK: 'DELETE_A_SPECIFIC_TASK',
    SET_ERROR_IN_TASK:'SET_ERROR_IN_TASK',
    SET_EDIT_MODE_IN_TASK: 'SET_EDIT_MODE_IN_TASK'
});

export default actionsMap;