import actionConsts from 'constants/actions';
const setTasks = (tasksData) => ({
    type: actionConsts.get('SET_TASKS_DATA'),
    data: tasksData
});

const setASpecificTask = (taskData) => ({
    type: actionConsts.get('SET_A_SPECIFIC_TASK'),
    data: taskData
});

const deleteASpecificTask = (id) => ({
    type: actionConsts.get('DELETE_A_SPECIFIC_TASK'),
    id
});

const setLoadingInTasks = (isLoading = false,id=null) => ({
    type: actionConsts.get('LOADING_IN_TASK'),
    loading: isLoading,
    id
});

const setErrorInTasks = (errorMessage = '',id=null) => ({
    type: actionConsts.get('ERROR_IN_TASK'),
    error: errorMessage,
    id
});

const setIsInEditMode = (isInEditMode = false,id=null) => ({
    type: actionConsts.get('SET_EDIT_MODE_IN_TASK'),
    isInEditMode,
    id
});

export {
    setTasks,
    setASpecificTask,
    deleteASpecificTask,
    setLoadingInTasks,
    setErrorInTasks,
    setIsInEditMode
};