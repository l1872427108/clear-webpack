const webpack = require('webpack');

const commonConfig = require('./webpack.comm');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const devConfig = {
    mode: 'development', 
    devtool: 'cheap-module-eval-source-map',

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new BundleAnalyzerPlugin({
        //     generateStatsFile: true
        // })
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