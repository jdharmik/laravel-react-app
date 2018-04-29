const axios = require('axios');

const querystring = require('querystring');

class FetchService {

	static setBaseUrl(baseUrl){
		FetchService.baseUrl = baseUrl;
	}

	static setHeaders(headers = {}){
		FetchService.headers = headers;
	}

	static getBaseUrl(){
		if(!FetchService.baseUrl){
			FetchService.baseUrl = '';
		}
		return FetchService.baseUrl;
	}

	static getHeaders(){
		if(!FetchService.headers){
			FetchService.headers = {};
		}
		return FetchService.headers;
	}

	getUrl(url,queryParams){
		return FetchService.getBaseUrl()+url+'?'+querystring.stringify(queryParams);
	}
	
	post(url,querystring = {},payload = {},headers = {}){
		headers = Object.assign(headers,FetchService.getHeaders());
		return fetch(this.getUrl(url,querystring),{
			method: 'post',
			body: JSON.stringify(payload),
			headers:headers
		});
	}

	getData(url,queryParams = {}, headers = {}){
		headers = Object.assign(headers,FetchService.getHeaders());

		return fetch(this.getUrl(url,queryParams),{
			headers:headers
		});
	}

	put(url,querystring = {},payload = {}, headers = {}){
		headers = Object.assign(headers,FetchService.getHeaders());
		return fetch(this.getUrl(url,querystring),{
			method: 'put',
			body: JSON.stringify(payload),
			headers:headers
		});
	}

	delete(url,querystring = {},payload = {}, headers = {}){
		headers = Object.assign(headers,FetchService.getHeaders());
		return fetch(this.getUrl(url,querystring),{
			method: 'delete',
			body: JSON.stringify(payload),
			headers:headers
		});
	}
}

export default FetchService;