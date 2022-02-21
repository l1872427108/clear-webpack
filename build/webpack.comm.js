const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },

    output: {
        path:  path.resolve(__dirname, 'dist'),
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
            filename: 'dist'
        })
    ],

}