var config = require('./webpack.base.config.js');
var utils = require('./webpack.util.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJsPlugin = require('uglify-js-plugin');
var webpack = require("webpack");
config.module.rules = (config.module.rules || []).concat([
       
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },           
            {
                test: /\.styl$/,
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader','stylus-loader'],
                    fallback: "style-loader",
                    allChunks: true
                }) 
            }, 
            {
                test: /\.css$/, 
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader'],
                    fallback: "style-loader",
                    allChunks: true
                }) 
            },
            {
            test: /\.sass$/,
            exclude: /(node_modules|bower_components)/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader','sass-loader'],
                fallback: "style-loader",
                allChunks: true
            }) 
            }
       
]);
config.optimization = {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: false,
	    compress: {
            warnings: false
          }
    })
    ],
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
          vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
          },
      default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
          }
      }
    }        
};
config.mode = 'production';
config.plugins = (config.plugins || []).concat([
	


  new ExtractTextPlugin("../public/css/common.css",
   		{
			allChunks:true,
			disable:false
		}
	)
   

]);

module.exports = config;