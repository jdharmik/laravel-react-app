import {setClientData} from 'actions/pageActions';
import store from 'stores/groupDashboard';
const onEnterDefaultGroupDashboardRoute = (routeInfo) => {
    console.log('on enter');
    console.log('route info params');
    console.log(routeInfo);
    store.dispatch(setClientData(routeInfo.location.query));
    const appState = store.getState();
    console.log('app state is');
    console.log(appState.getIn(['page','client','hello']));
    console.log(appState.getIn(['page','client','data']));
};

const onChangeDefaultGroupDashboardRoute = (prevState, nextState) => {
    console.log('on change');
    console.log('route info params');
    console.log(nextState);
    store.dispatch(setClientData(nextState.location.query));
};

export {
    onEnterDefaultGroupDashboardRoute,
    onChangeDefaultGroupDashboardRoute
};