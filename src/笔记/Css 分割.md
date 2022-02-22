## css 因 js。

css 会被 style-loader 注入到 js

所以我们要使用 mini-css-extract-plugin 插件自带的 loader 进行单独的打包

主意 tree shaking 可能会给摇晃掉 。 [*.css]

new MiniCssExtractPlugin() 
同一个入口下的 css 会被打包到一起。 但是不会进行代码压缩和合并。

我们需要借助另一个插件 OptimizeCssAssetsWebpackPlugin
它的底层也是借助 splitChunk 整个插件的。
所以我们可以对 css 的打包过程进行自定义的分割。

