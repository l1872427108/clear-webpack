const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const webpack = require('webpack');

const commonConfig  = {
    entry: {
        // lodash: './src/lodash.js',
        main: './src/index.js',
    },

    output: {
        path:  path.resolve(__dirname, '../dist'),
        // index.html 只引用了 main.js , main.js 走的 filename 
        // lodash 是在 main.js 中引入的，间接引入走 chunkFilename
        
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
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
    // 不让提示性能上的警告
    performance: false,

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin({
            // 跟路径 build 上一层
            root: path.resolve(__dirname, '../'),
            filename: 'dist'
        }),
        // 当我发现一个模块用来 $ , 在这个模块自动的引入 jquery
        // 垫片，解决之前存在的问题
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'lodash'
        })
    ],
    
    // 默认的配置内容
    optimization: {
        // 兼容旧版本
        // 业务逻辑和库 的关联逻辑的代码  manifest 默认是存在与业务和库, 
        // 旧版本可能因为 manifest 内置的之间的内容可能发生变化
        // runtime 就会抽离出来，放的就是关系的代码
        // runtimeChunk: {
        //     name: 'runtime'
        // },
        usedExports: true,
        splitChunks: {
            // 代码分割的时候只对异步代码生效
            chunks: 'all', // webpack 不会直接就做代码分割的 走到cacheGroups
            // 包/模块/库 大于这个字节 才做这个代码分割   30000 -> 30kb
            minSize: 30000,
            maxSize: 0,  // 50kb   lodash 1mb 可能进行二次拆分
            // 当一个模块至少倍用来多少次才来进行代码分割

            // lodash 到底要不要分割呢? /dist/chunk文件。 如果两个以上的文件都依赖 lodash
            // 才进行生成一个 lodash 
            // 打包生成的
            minChunks: 1,
            // 10个类库，同时加载五个, 超过五个就不会做代码分割了
            maxAsyncRequests: 5,
            // 整个网站入口进行加载的时候，入口文件引入的库最多也能引入 3个, 超过就不做代码分割了。
            maxInitialRequests: 3,
            // 文件生成的时候有链接符号 组和文件连接的时候的链接符
            automaticNameDelimiter: '~',
            // name 让 cacheGroups 的名字有效
            name: true,
            // 缓存组
            cacheGroups: {
                // vendors 组名 组的要求 
                // 这个打包的代码属于 vendors 组，并且 入口是 main.js 作为入口
                vendors: {
                    // 检测是否是在 node_modules 下, 单独把loadash 打包进去
                    test: /[\\/]node_modules[\\/]/,
                    // 优先级
                    priority: -10,
                    // 打包的名字
                    filename: 'vendors.js'
                },
                default: {
                    priority: -20,
                    // b 代码已经打包了a， a 厘米的b就不会放进来了
                    // 如果已经打包过了，那么就忽视直接去使用
                    reuseExistingChunk: true,
                    filename: 'common.js'
                }
            }
        }
    }
}

module.exports = (env) => {
    console.log(env);  // { production: true }
    // production
    // --env.production=123
    if (env && env.production) {
        // 生产环境
        return merge(commonConfig, prodConfig)
    } else {
        // 开发环境
        return merge(commonConfig, devConfig);
    }
}
