const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {

    // mode: 'development', 
    mode: 'production',
    entry: {
        index: './src/index.js'
    },

    output: {
        path:  path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash:8].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },

            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
            },

            {
                test: /\.(eot|ttf|svg|pdf|woff|)$/,
                use: 'file-loader'
            },

            {
                test: /\.(png|jpg|jpeg|webp)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'image/',
                        limit: 10240
                    }
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin({
            filename: 'dist'
        })
    ],

    // optimization: {
//         // sideEffects 
//         // "sideEffects": ["@babel/poll-fill"],
// //   "sideEffects": false, 对所有的文件都做 three
//         // 使用导出的模块
        // usedExports: true
    // },


    // watch: false,
    // watchOptions: {
    //   ignored: /node_modules/,
    //   aggregateTimeout: 5000,
    //   poll: 1000
    // },

    // devServer: {
    //   contentBase: './dist',
    //   open: true
    // }
}
