import FetchTasksAction from 'thunks/FetchTasksAction';
import CreateTaskAction from 'thunks/CreateTaskAction';
import UpdateTaskAction from 'thunks/UpdateTaskAction';
import DeleteTaskAction from 'thunks/DeleteTaskAction';

import { prepareActionsObject } from 'utils/ThunkActionCreator';
import {    
    setTasks,
    setASpecificTask,
    deleteASpecificTask,
    setLoadingInTasks,
    setErrorInTasks,
    setIsInEditMode
} from 'actions/todoActions';

const fetchTasksThunk = () => {
    return async(dispatch, getState) => {

    let dispatchers = prepareActionsObject(dispatch, { setTasks, setLoadingInTasks, setErrorInTasks });

    let tasks = await FetchTasksAction.send(dispatchers,{});
    console.log("fetched tasks are", tasks);
    return tasks;
    };
}

const createTaskThunk  = (data) => {
    return async(dispatch, getState) => {

    let dispatchers = prepareActionsObject(dispatch, { setASpecificTask, setLoadingInTasks, setErrorInTasks });
    console.log('create task thunk');
    console.log(data);
    let task = await CreateTaskAction.send(dispatchers,{data});
    console.log("created task is", task);
    return task;
    };
}

const updateTaskThunk  = (id,data) => {
    return async(dispatch, getState) => {

    let dispatchers = prepareActionsObject(dispatch, { setIsInEditMode, setASpecificTask, setLoadingInTasks, setErrorInTasks });

    let task = await UpdateTaskAction.send(dispatchers, {id,data});
    console.log("updated task is", task);
    return task;
    };
}

const deleteTaskThunk = (id) => {
    return async(dispatch, getState) => {
    console.log('inside delete task thunk');
    console.log(id);
    let dispatchers = prepareActionsObject(dispatch, { deleteASpecificTask, setLoadingInTasks, setErrorInTasks });

    let task = await DeleteTaskAction.send(dispatchers,{id});
    console.log("deleted task is", task);
    return task;
    };
}

const isInEditModeThunk = (status,id) => {
    console.log('set is in edit mode');
    return async(dispatch, getState) => {
        dispatch(setIsInEditMode(status,id));
    }
};

export {
    fetchTasksThunk,
    deleteTaskThunk,
    updateTaskThunk,
    createTaskThunk,
    isInEditModeThunk
};