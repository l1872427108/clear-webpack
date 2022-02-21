const commonConfig = require('./webpack.comm');
const merge = require('webpack-merge');

const prodConfig = {

    mode: 'production',
    devtool: 'cheap-module-source-map',

}

module.exports = merge(commonConfig, prodConfig);

