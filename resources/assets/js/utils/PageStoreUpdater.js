import {setServerData,setClientData} from 'actions/pageActions';

const updateClientRouteInfoToStore = (store,routeInfo) => {
    store.dispatch(setClientData(routeInfo.location.query));  
};

const updateServerDataInfoToStore = (store,data) => {
    store.dispatch(setServerData(data));
};

export {
    updateClientRouteInfoToStore,
    updateServerDataInfoToStore
};