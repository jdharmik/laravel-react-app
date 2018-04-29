import Immutable from 'immutable';
import actionConsts from 'constants/actions';
const initialState = Immutable.fromJS({
    data: {},
    loading: false
});

const userReducer = (state = initialState, action = {}) => {
    switch(action.type){
        case actionConsts.get('LOADING_USER_DATA'):
            return state.set('loading',action.loading);
        case actionConsts.get('SET_USER_DATA'):     
            return state.set('data',action.data); 
        default:
            return state;     
    }
    return state;
};

export default userReducer;