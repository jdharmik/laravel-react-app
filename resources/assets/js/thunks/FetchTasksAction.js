import AjaxAction from 'thunks/AjaxAction.js';
import config from 'utils/Config.js';
class FetchTasksAction extends AjaxAction {

	isCached(){
		return true;
	}

	acceptOnlyLastResponse(){
		return true;
	}

	getMethod(){
		return 'get';
	}
	
	prepareUrl(dispatchers,actionObject={}){

		return `${config.apiBaseUrl}/task`;
		console.log("prepareUrl",apiBaseUrl,dispatchers,actionObject);
	}

	beforeRequest({setLoadingInTasks},actionObject={}){
		setLoadingInTasks(true);
	}

	onSuccess(data,{setTasks},actionObject={}){
		console.log('before setting data');
		console.log(data);
		setTasks(data);
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