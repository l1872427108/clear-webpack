const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode: 'production',
    entry: {
        vendors: ['lodash'],
        react: ['jquery']
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, '../dll'),
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            // 对这个库进行分析
            name: '[name]',
            // 第三方映射关系
            path: path.resolve(__dirname, '../dll/[name].manifest.json')
        })
    ]
}
