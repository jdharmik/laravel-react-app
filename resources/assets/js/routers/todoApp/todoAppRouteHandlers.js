import {setClientData} from 'actions/pageActions';
import store from 'stores/todoApp';
import {updateClientRouteInfoToStore} from 'utils/PageStoreUpdater';
import { fetchTasksThunk,updateTaskThunk,deleteTaskThunk, createTaskThunk } from '../../thunks/todoAppThunks';

const onEnterTodoAppDetailsRoute = (routeInfo) => {
    updateClientRouteInfoToStore(store,routeInfo);
    store.dispatch(fetchTasksThunk());
};

const onChangeTodoAppDetailsRoute = (prevState, nextState) => {
    console.log('on change');
    console.log('route info params');
    console.log(nextState);
    updateClientRouteInfoToStore(store,nextState);
};

const onEnterCreateTodoRoute =  (routeInfo) => {
    store.dispatch(createTaskThunk({
        name: 'shell -1',
        description: 'shell description'
    }));
};

const onEnterEditTodoRoute = (routeInfo) => {
    store.dispatch(updateTaskThunk(routeInfo.params.id,{
        name: 'shell 101',
        description: 'shell 001 description'
    }));
};

const onEnterDeleteTodoRoute = (routeInfo) => {
    store.dispatch(deleteTaskThunk(routeInfo.params.id));
};

export {
    onEnterTodoAppDetailsRoute,
    onChangeTodoAppDetailsRoute,
    onEnterCreateTodoRoute,
    onEnterEditTodoRoute,
    onEnterDeleteTodoRoute

};