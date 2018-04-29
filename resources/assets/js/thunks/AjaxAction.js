import FetchService from 'utils/FetchService.js';
FetchService.setHeaders({
	'Accept': 'application/json',
	'content-type': 'application/json'
});
export default class AjaxAction {

	constructor(){
		this.payload = null,
		this.queryParams = {};
		this.image = null;
		
	}
	/*default local properties*/
	isCached(){
		return false;
	}

	acceptOnlyLastResponse(){
		return false;
	}

	getMethod() {
		return 'get';
	}

	/*util functions*/

	setPayload(objectOrKey,value = null){
		
		if(typeof objectOrKey === 'string'){
			this.payload[objectOrKey] = value 	
		} else {
			this.payload = objectOrKey;
		}

		return this;

	}

	setQuery(objectOrKey,value = null){

		if(typeof objectOrKey === 'string'){
			this.queryParams[objectOrKey] = value 
		} else {
			this.queryParams = objectOrKey;
		}

		return this;
	}

	/*Process functions*/

	prepareUrl(dispatchers,actionObject){
		return '/';
	}

	beforeRequest(dispatchers,actionObject){
		return actionObject;
	}

	parseAndValidateResponse(data,dispatchers,actionObject){
		// Eg. throw new Error("Some error");
		// or
		return data;
	}

	onSuccess(data,dispatchers,actionObject){
		return data;
	}

	onError(errorObject,dispatchers,actionObject){
		console.error("Error:",errorObject,errorObject);
	}

	onFinish(dispatchers,actionObject){
		// done clean up
	}

	async send(dispatchers,actionObject){
		console.log("map",dispatchers,actionObject);
		let fetchService = new FetchService;
		this.image = fetchService;
		let data = {};

		let url = this.prepareUrl(dispatchers,actionObject);

		let showCall = this.beforeRequest(dispatchers,actionObject);

		if(showCall === false && showCall === null){
			return false;
		}

		let payload = null;
		
		if(actionObject.data!=undefined)
		{
			this.setPayload(actionObject.data);
		}

		if(this.getMethod() !='get'){
			payload =this.payload; 
		}
		
		try {
			
			switch(this.getMethod()){

				case 'get': 
					if(this.isCached()){
						this.setQuery('cache',true);
					}
					console.log(url,this.queryParams);
					data = await fetchService.getData(url,this.queryParams);
					data = await data.json();
					
					break;
				case 'post':
					data  = await fetchService.post(url,this.queryParams,payload);
					data = await data.json();
					break;
				case 'put':
					data  = await fetchService.put(url,this.queryParams,payload);
					data = await data.json();
					break;
				case 'delete':
					data  = await fetchService.delete(url,this.queryParams,payload);
					data = await data.json();
					break;
				default:
					throw new Error("Invalid method");

			}	
			

			if(this.acceptOnlyLastResponse() && this.image != fetchService){
				return false;
			}
	
			data = this.parseAndValidateResponse(data,dispatchers,actionObject);
			let newData = this.onSuccess(data,dispatchers,actionObject);
			data = newData || data;
		} catch (e){
			this.onError(e,dispatchers,actionObject);
		}

		this.onFinish(data,dispatchers,actionObject);
		
		return data;
	}
}
