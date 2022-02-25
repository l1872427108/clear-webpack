# 提升 Webpack 打包速度的方法
1. 跟上技术的迭代 node npm  yarn  的版本

2. 尽可能少的模块上应用 loader   include export 作用范围越小

3. Plugin 尽可能精简并确保可靠。

4. resolve 参数合理配置

5. DllPlugin
第三方模块只打包一次
    1. 第三方模块只打包一次 (实现了)
    2. 我们引入的第三方模块要去使用 dll 文件


6. 控制包文件大小
冗余的代码。 tree shaking

代码进行拆分。 大文件 -》 小文件。

多进程打包。  thread-loader ,  parallel-webpack  , happypack 
多个 cpu 项目打包

合理使用 source-Map  越详细就打包的越慢

结合 stats 分析打包结果   描述打包的json文件

开发环境内存编译

开发环境无用插件剔除