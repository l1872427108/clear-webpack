const webpack = require('webpack');

const commonConfig = require('./webpack.comm');
const merge = require('webpack-merge');
const devConfig = {

    mode: 'development', 
    devtool: 'cheap-module-eval-source-map',

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    optimization: {
        usedExports: true
    },

    devServer: {
      contentBase: './dist',
      open: true,
      port: 8080,
      hot: true
    //   hotOnly: true
    }
}

module.exports = merge(commonConfig, devConfig);