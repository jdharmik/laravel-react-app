import AjaxAction from 'thunks/AjaxAction.js';
import config from 'utils/Config.js';
import { setErrorInTasks } from '../actions/todoActions';
class FetchTasksAction extends AjaxAction {

	isCached(){
		return true;
	}

	acceptOnlyLastResponse(){
		return true;
	}

	getMethod(){
		return 'post';
	}
	
	prepareUrl(dispatchers,actionObject={}){

		return `${config.apiBaseUrl}/task`;
		console.log("prepareUrl",apiBaseUrl,dispatchers,actionObject={});
	}

	beforeRequest({setLoadingInTasks},actionObject={}){
		setLoadingInTasks(true);
	}

	onSuccess(responseData,{setASpecificTask},actionObject={}){
		setASpecificTask(responseData);
	}

	onError(errorObject,{setErrorInTasks},actionObject={}){
		console.log("Error",errorObject);
		setErrorInTasks(errorObject.message);

	}

	onFinish(data,{setLoadingInTasks},actionObject={}){
		setLoadingInTasks(false);
	}

} 

export default new FetchTasksAction;  