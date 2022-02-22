// import 异步加载就会打包的。
async function getComponent() {
    const {default: _} = await import (/* webpackChunkName:"lodash" */ 'lodash')
    // 异步加载这个模块   default 兼容 commonjs
    // return import(/* webpackChunkName:"lodash" */ 'lodash').then(({default: _}) => {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Dell', 'Lee'], '-')
    return element;
    // })
}

document.addEventListener('click', () => {
    getComponent().then(element => {
        document.body.appendChild(element);
    })
})


// 懒加载， 通过 import 异步的加载一个模块， 到底什么时候去加载才会被载入
// 可以让加载速度更快

// 路由 展示不同的组件。 
// 页面的代码都打包到一块。 都一起加载了


// 懒加载 是 import 是 js 提出的。 和 webpack 关系不大。

// 必须使用 poll-fill 因为promise 可能在低版本不实现


// 异步函数, 就可以省略 

// 异步函数

// 异步引入。 异步函数  异步组件  异步路由


// chunk  每一个js文件都是一个 chunk

