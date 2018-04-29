
module.exports = (env) => {
  let config = require('./webpack.base.config.js')(env);
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  var ExtractTextPlugin = require('extract-text-webpack-plugin');
  const OpenBrowserPlugin = require("open-browser-webpack-plugin");
  const webpack = require('webpack');
  const path = require('path');
  config.devtool = 'cheap-module-eval-source-map';
  config.devServer = {
      compress: true,
      port: 8081,
      hot: true
      }
    config.plugins = (config.plugins || []).concat([
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.OpenBrowserPlugin({
        url: 'http://localhost:8081/public/js'
      })
    ]);    

    config.mode = 'development';
    return config;
};