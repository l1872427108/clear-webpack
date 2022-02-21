// Tree Shaking 只支持 ES Module 静态引用
import './math';
import './style/index.scss';
// const add = require('./main');  // 不支持
// add(1, 2);

// babel window.promise 没导出, 可能直接就给忽略掉了, 打包就会出错了。
// package.json 中的

// import './style.css'; // 就会忽略掉这个样式
// ['*.css] 也不要使用 three sharking 


// /*! exports provided: add, munus */
/*! exports used: add */

// 开发环境下， 只是会提示一下。 做调试。 source-map 对应的都会出错

// 生成环境，就会生效了

// devtool: cheap-module
// 自动一些配置就会写好了
