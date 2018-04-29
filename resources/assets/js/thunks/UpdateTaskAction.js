import AjaxAction from 'thunks/AjaxAction.js';
import config from 'utils/Config.js';
class UpdateTaskAction extends AjaxAction {

	isCached(){
		return false;
	}

	acceptOnlyLastResponse(){
		return false;
	}

	getMethod(){
		return 'put';
	}
	
	prepareUrl(dispatchers,actionObject={}){

		return `${config.apiBaseUrl}/task/${actionObject.id}`;
		console.log("prepareUrl",apiBaseUrl,dispatchers,actionObject);
	}

	beforeRequest({setLoadingInTasks},actionObject={}){
		setLoadingInTasks(true,actionObject.id);
	}

	onSuccess(responseData,{setASpecificTask},actionObject={}){
		console.log('response is');
		console.log(responseData);
		setASpecificTask(responseData);
	}

	onError(errorObject,{setErrorInTasks},actionObject={}){
		console.log("Error",errorObject);
		setErrorInTasks(errorObject.message,actionObject.id);

	}

	onFinish(data,{setIsInEditMode, setLoadingInTasks},actionObject={}){
		setLoadingInTasks(false,actionObject.id);
		setIsInEditMode(false,actionObject.id);
	}

} 

export default new UpdateTaskAction;  