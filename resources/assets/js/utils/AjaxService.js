const axios = require('axios');

const querystring = require('querystring');

class AjaxService {

	static setBaseUrl(baseUrl){
		AjaxService.baseUrl = baseUrl;
	}

	static setHeaders(headers = {}){
		AjaxService.headers = headers;
	}

	static getBaseUrl(){
		if(!AjaxService.baseUrl){
			AjaxService.baseUrl = '';
		}
		return AjaxService.baseUrl;
	}

	static getHeaders(){
		if(!AjaxService.headers){
			AjaxService.headers = {};
		}
		return AjaxService.headers;
	}

	getUrl(url,queryParams){
		return AjaxService.getBaseUrl()+url+'?'+querystring.stringify(queryParams);
	}
	
	post(url,querystring = {},payload = {},headers = {}){
		headers = Object.assign(headers,AjaxService.getHeaders);
		return axios.post(this.getUrl(url,querystring),payload,{post:{headers}});
	}

	getData(url,queryParams = {}, headers = {}){
		headers = Object.assign(headers,AjaxService.getHeaders);

		return fetch(this.getUrl(url,queryParams),{
			headers:headers
		});
	}

	put(url,querystring = {},payload = {}, headers = {}){
		headers = Object.assign(headers,AjaxService.getHeaders);
		return axios.put(this.getUrl(url,querystring),payload,{put:{headers}});
	}

	delete(url,querystring = {},payload = {}, headers = {}){
		headers = Object.assign(headers,AjaxService.getHeaders);
		return axios.delete	(this.getUrl(url,querystring),payload,{delete:{headers}});
	}
}

export default AjaxService;