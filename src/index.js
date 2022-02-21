import test from './test';  // 1kb 都不到
import jquery from 'jquery';
import a from 'a'
import b from 'b'
console.log(test.name);
// import 异步加载就会打包的。
import _ from 'lodash';
var element = document.createElement('div');
element.innerHTML = _.join(['Dell', 'Lee'], '-')
document.body.appendChild(element);

// function getComponent() {
//     // 异步加载这个模块   default 兼容 commonjs
//     return import(/* webpackChunkName:"lodash" */ 'lodash').then(({default: _}) => {
//         var element = document.createElement('div');
//         element.innerHTML = _.join(['Dell', 'Lee'], '-')
//         return element;
//     })
// }

// getComponent().then(element => {
//     document.body.appendChild(element);
// })

// 魔法注释
// babel 官方提供的动态引入的插件

// 不论是同步还是异步分割， 都要使用 splitChunksPlugins
