const commonConfig = require('./webpack.comm');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const prodConfig = {

    mode: 'production',
    // devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, 'css-loader', 'postcss-loader']
            },

            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader']
            },
        ]
    },

    output: {
        // 源码没有改变， contenthash 就不会变化
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js'
    },

    plugins: [
        // 还需要对 loader 做一些， 使用插件提供的 loader
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css'
        })
    ],

    optimization: {
        minimizer: [new OptimizeCssAssetsWebpackPlugin({})]
    }
}

module.exports = merge(commonConfig, prodConfig);

