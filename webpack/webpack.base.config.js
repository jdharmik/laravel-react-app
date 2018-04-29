// //basic utils
// var webpack = require("webpack");
// var path       = require("path");
// var APP_DIR = path.resolve(__dirname,'../');
// var utils  = require("./webpack.util.js");
// var appConfig = require("./app.config.js");

// var config     = {};

// config.context = APP_DIR;

// config.entry   = appConfig.entries;

// config.output  = {
//   path          : path.resolve(APP_DIR,'public/js'),
//   publicPath    : '/public/js/',
//   filename      : "[name].js"
// };

// config.resolve = {

// 	alias : utils.resolveAlias({
        	    
//         'components':"js/components",
        
//         'containers': "js/containers",

//         'constants': "js/constants",

//         'mains':"js/mains",

//         'providers':"js/providers",

//         'stores':"js/stores",
    
//         'actions':"js/actions",
        
//         'routers': "js/routers",

//         "reducers": "js/reducers",

//         "routes": "js/routes",

//         "utils":"js/utils",

//         "stylus": "stylus"

// 	},'resources/assets'),

// 	extensions:[".css",".sass",".styl",".js",".jsx"],

//     modules:[path.join(APP_DIR, "node_modules"),path.resolve(APP_DIR, "resources/assets")]

// }
// // config.resolveLoader = { 
// //     root: path.join(APP_DIR, "node_modules")
// // };

// config.module = config.module || {};

// config.module.rules = (config.module.rules || []).concat([
           
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /(node_modules|bower_components)/,
//                 use: ['babel-loader']
//             },           
//             {
//                 test: /\.(png|jpg|gif)$/,
//                 use: [
//                 {
//                     loader: 'url-loader',
//                     options: {
//                         limit: 10000,
//                         name: '[name].[ext]?[hash]'
//                     }
//                 }
//             ]},
//             {
//                 test: /\.styl$/,
//                 exclude: /(node_modules|bower_components)/,
//                 use: ['css-loader','stylus-loader'] 
//             }, 
//             {
//               test: /\.css$/, 
//               exclude: /(node_modules|bower_components)/,
//               use: ['css-loader']
//             }
       
//         ]);

// // /* include bower components */

// // config = utils.includeExternalFiles(appConfig.bowerPackages,'bower_components',config);

// // /* include node components */
// // config = utils.addGlobals(appConfig.nodePackages,config);


// // config = utils.applyCommonChunk(appConfig.entries,config);


module.exports = env => {
    var webpack = require("webpack");
    var path       = require("path");
    var ExtractTextPlugin = require('extract-text-webpack-plugin');
    var APP_DIR = path.resolve(__dirname,'../');
    var utils  = require("./webpack.util.js");
    var appConfig = require("./app.config.js");
    
    var config     = {};
    
    // config.context = APP_DIR;
    
    config.entry   = appConfig.entries;
    
    // let PUBLIC_PATH = '/public/js/';
    
    // if(env && env.dev==true){
    //     PUBLIC_PATH = '';
    // }
    
    config.output  = {
      path          : path.join(APP_DIR,'public/js'),
      publicPath    : '/public/js/',
      filename      : "[name].js"
    };
    
    config.resolve = {
    
        alias : utils.resolveAlias({
                    
            'components':"js/components",
            
            'containers': "js/containers",
    
            'constants': "js/constants",
    
            'mains':"js/mains",
    
            'providers':"js/providers",
    
            'stores':"js/stores",
        
            'actions':"js/actions",
            
            'routers': "js/routers",
    
            "reducers": "js/reducers",
    
            "routes": "js/routes",
    
            "utils":"js/utils",
    
            "stylus": "stylus",

            "thunks": "js/thunks"
    
        },'resources/assets'),
    
        extensions:[".css",".sass",".styl",".js",".jsx"],
    
        modules:[path.join(APP_DIR, "node_modules"),path.resolve(APP_DIR, "resources/assets")]
    
    }
    // config.resolveLoader = { 
    //     root: path.join(APP_DIR, "node_modules")
    // };
    
    config.module = config.module || {};
    config.optimization = {};
    config.optimization.splitChunks = {
        chunks: "async",
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '-',
        name: true,
        cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                name: "vendors",
                chunks: "all",
                filename: 'vendor.bundle.js'
            }
        }
    };
    config.module.rules = (config.module.rules || []).concat([
               
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: ['babel-loader']
                },           
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: '[name].[ext]?[hash]'
                        }
                    }
                ]},
                {
                    test: /\.styl$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        'style-loader', 
                        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                        'stylus-loader'    
                    ]
                }, 
                {
                  test: /\.css$/, 
                  exclude: /(node_modules|bower_components)/,
                  use: [
                      'style-loader', 
                      'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                  ]
                }
           
            ]);
        return config;
    };
    