var path = require("path");

var _ = require("underscore")._;

var webpack = require("webpack");

var APP_DIR = path.resolve(__dirname,'../');
 
module.exports = {
	
	resolveAlias:function(object,base){  
	  return _.mapObject(object,function(val,key){
	  	return path.resolve(APP_DIR,base.trim('/')+'/'+val.trim('/'));
	  });
	},
	addGlobals:function(object,config){

		config.plugins = (config.plugins || [])
			.concat(
				_.map(object,function(vars,nodeName){
					
					pluginObject = {};
					
					_.map(vars,function(var_name){

						pluginObject[var_name] = nodeName
					
					})
					
					return new webpack.ProvidePlugin(pluginObject)
				
				})
			);

		return config;
	},
	applyCommonChunk:function(entryObject,config){
		
		var commonChunkMinLimit = (Object.keys(entryObject).length+1)/2;

		config.plugins = (config.plugins || [])
			.concat([
				new webpack.optimize.CommonsChunkPlugin({
        		
		        		minChunks: commonChunkMinLimit,
		        		
		        		name: "common"
		        })
			]);

		return config;
	},
	includeExternalFiles:function(object,baseDir,config){
		
		var baseDir = path.resolve(APP_DIR,baseDir);
		
		var bowerAliases = _.mapObject(object,function(val,key){
			return path.join(baseDir,val);
		});

		config.resolve = config.resolve || {};

		config.resolve.alias = _.extend((config.resolve.alias || {}),bowerAliases);

		globalObjects = _.mapObject(object,function(val,key){
			
			return [key];
		
		});

		config = this.addGlobals(globalObjects,config);

		return config;
	
	},
	generateExtractLoaders:function(loaders) {
	  
	  return loaders.map(function (loader) {
	    return loader + '-loader';
	  }).join('!');
	
	}
}