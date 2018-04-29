import AjaxAction from 'thunks/AjaxAction.js';
import config from 'utils/Config.js';
class FetchTasksAction extends AjaxAction {

	isCached(){
		return false;
	}

	acceptOnlyLastResponse(){
		return false;
	}

	getMethod(){
		return 'delete';
	}
	
	prepareUrl(dispatchers,actionObject={}){

		return `${config.apiBaseUrl}/task/${actionObject.id}`;
		console.log("prepareUrl",apiBaseUrl,dispatchers,actionObject);
	}

	beforeRequest({setLoadingInTasks},actionObject={}){
		console.log('before request');
		setLoadingInTasks(true,actionObject.id);
		console.log('after request');
	}

	onSuccess(data,{deleteASpecificTask},actionObject={}){
		deleteASpecificTask(actionObject.id);
	}

	onError(errorObject,{setErrorInTasks},actionObject={}){
		console.log("Error",errorObject);
		setErrorInTasks(errorObject.message,actionObject.id);
	}

	onFinish(data,{setLoadingInTasks},actionObject={}){
		setLoadingInTasks(false,actionObject.id);
	}

} 

export default new FetchTasksAction;  