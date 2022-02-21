const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        // lodash: './src/lodash.js',
        main: './src/index.js'
    },

    output: {
        path:  path.resolve(__dirname, '../dist'),
        filename: '[name].js'
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
            // 跟路径 build 上一层
            root: path.resolve(__dirname, '../'),
            filename: 'dist'
        })
    ],

    optimization: {
        splitChunks: {
            // 让 webpack 去做代码分割。
            chunks: 'all'
        }
    }

}