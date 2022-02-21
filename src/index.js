
// import _ from 'lodash';

// // 业务逻辑
// console.log(_.join(['a', 'b', 'c']));
// 打包文件会很大，加载时间很长


// 重新访问我们页面，还要再次加载一次 lodash 的内容

// 拆分成两个文件,main.js ---->  main.js(1MB) 和 lodash.js(1MB)

// 不需要加载一个2MB文件， 可以同时并行加载 1MB 和 1MB 两个文件

// 页面逻辑变更，不需要重新加载 lodash 文件， 缓存， 只需要加载业务代码。


// Code Splitting 代码分割 
// 对代码进行拆分， 性能更好一些
// 没有 webpack ， 通过对代码自己的拆分。
// 本质上和 webpack 没有关系的。


// webpack 有一些插件 很容易进行分割。
// 做代码分割非常的简单


// 现在的代码分割是我们手动做的，不够智能

// webpack 怎么自动的帮助我们做







// 异步模块的引入

function getComponent() {
    // 异步加载这个模块   default 兼容 commonjs
    return import('lodash').then(({default: _}) => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Dell', 'Lee'], '-')
        return element;
    })
}

getComponent().then(element => {
    document.body.appendChild(element);
})


// webpack 在做同步性代码的时候，会分析代码，去自动的做代码分割

// 异步加载的代码，webpack 也会做一个代码分割。

// webpack 代码分割，一种是借助 同步代码，做一个代码分割。

// 第二种是异步的代码也会被打包进入一个


// webpack 中做代码分割， 
// 同步代码，只需要在 webpack.common.js 中做配置即可

// 异步代码，import : 异步代码 ， 无需做任何的配置，会自动的进行代码的分割

