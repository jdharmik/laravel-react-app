
export const prepareDispatchEvent = (dispatch) => (action) => (...args) => dispatch(action(...args)); 
export const prepareActionsObject = (dispatch,dispatchers) => {
	let dispatchersObject = {};
	let actionDispatcher = prepareDispatchEvent(dispatch);
	for(let key in dispatchers){
		dispatchersObject[key] = actionDispatcher(dispatchers[key]);
	}
	return dispatchersObject;
}