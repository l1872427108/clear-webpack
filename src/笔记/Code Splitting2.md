## webpack代码分割

```javascript
splitChunks: {
            // 代码分割的时候只对异步代码生效
            chunks: 'all', // webpack 不会直接就做代码分割的 走到cacheGroups
            // 包/模块/库 大于这个字节 才做这个代码分割   30000 -> 30kb
            minSize: 30000,
            maxSize: 0,  // 50kb   lodash 1mb 可能进行二次拆分
            // 当一个模块至少倍用来多少次才来进行代码分割
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

```


chunks: all async  init
all 会对 异步引入代码和同步引入代码进行生效


minSize: 30000,
包/模块/库 大于这个字节 才做这个代码分割   30000 -> 30kb

maxSize: 50000,    0
lodash 1mb 可能进行二次拆分 . 50kb 一次， 可能还会二次分割。

minChunks: 1,
当一个模块至少倍用来多少次才来进行代码分割


maxAsyncRequests: 5,
10个类库，同时加载五个, 超过五个就不会做代码分割了

maxInitialRequests: 3,
整个网站入口进行加载的时候，入口文件引入的库最多也能引入 3个, 超过不分割了

automaticNameDelimiter: '~',
文件生成的时候有链接符号 组和文件连接的时候的链接符


name: true,
name 让 cacheGroups 的名字有效


// 缓存组
cacheGroups: {
    // vendors 组名 组的要求 
    // 这个打包的代码属于 vendors 组，并且 入口是 main.js 作为入
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