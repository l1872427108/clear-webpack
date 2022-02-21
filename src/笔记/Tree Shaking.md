## Tree Shaking
    可以理解为摇晃。可以把无用的给去除掉。

### 在开发环境下
```javascript
mode = 'development'
```
需要配置

```javascript
optimization: {
    usedExports: true
}
```
意思是：只是使用导出的模块。

我们每一个文件都是一个模块。当我们在 index.js 中导入模块.
模块中暴露出来的模块， 并没有导入 index.js ，说明项目压根没有用到这个东西

为了减少我们的项目的体积，我们可以不把它打包进去。

并且我们需要需要配置 package.json
```javascript
"sideEffects": false
````
sideEffects ：当我们配置了比如：
    import './style.css';  css的话，我们并没有向外暴漏任何的东西，false 的话，就可能不会把 css 进入一个导入，给去除掉了。
    import '@babel/properil'; babel的填充是给 window 是上加的，也并没有任何的导出，也可能会被摇晃掉。

我们可以配置为一个数组，表示过滤掉这些文件
```javascript
"sideEffects": ['*.css', '@babel/properil']
```


Tree Shaking  只能摇晃掉 ES Module 暴漏的。 静态分析。


development
/*! exports provided: add, munus */  默认会这么导入的

webpack.config.js 配置之后 就会开启

production 
生成环境下默认就会开启这个配置，所以不用配置


默认情况下 production 环境下就已经会摇晃掉没有引用的。

如果配置了
sideEffects:false 就会对任何的东西都进行摇晃的。
如果没有用到的文件，就直接全摇晃掉。什么代码都不加载

如果没有:
如果没有用到的文件，暴漏出的摇晃掉。正常代码都加载

