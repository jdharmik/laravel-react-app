import Immutable from 'immutable';
import actionConsts from 'constants/actions';
const initialState = Immutable.fromJS({
    client: {},
    server: {}
});

const pageReducer = (state = initialState, action = {}) => {
    switch(action.type){
        case actionConsts.get('LOADING_PAGE_DATA'):
            return state.set('loading',action.loading);
        case actionConsts.get('SET_PAGE_CLIENT_DATA'):         
            return state.set('client',Immutable.fromJS(action.data));
        case actionConsts.get('SET_PAGE_SERVER_DATA'):
            return state.set('server',Immutable.fromJS(action.data));
        default:
            return state;     
    }
    return state;
};

export default pageReducer;