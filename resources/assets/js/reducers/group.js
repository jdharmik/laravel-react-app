import Immutable from 'immutable';

// initialState of the user reducer
const initialState = Immutable.fromJS({
	data:{},
    loading: false
});

const groupDashboardReducer = (state = initialState, action = {}) => {
	const stateCopy = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case 'SET_GROUP_DATA':
			return state.set('data',action.data);
		case 'LOADING_GROUP_DATA':
			return state.set('loading',action.data);
		default:
			// return default state
			return state;
	}
};

export default groupDashboardReducer;
