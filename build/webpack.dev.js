const webpack = require('webpack');

const commonConfig = require('./webpack.comm');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const devConfig = {
    mode: 'development', 
    devtool: 'cheap-module-eval-source-map',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },

            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
            },
        ]
    },

    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.name'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new BundleAnalyzerPlugin({
        //     generateStatsFile: true
        // })
    ],

    optimization: {
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