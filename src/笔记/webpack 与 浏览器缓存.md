
# 利用缓存

我们打包好的文件， 部署到上线，是会被缓存的。

即使我们做了修改, 也会进行一个缓存的。

我们可以 将输出的文件， 
库文件 我们是不会更改的，我们是需要做一个缓存的。

逻辑代码，我们也需要缓存，但是我们修改之后，就不会要缓存了。

我们就需要去服务器获取最新的逻辑代码。

我们可以利用  [contenthash]  来进行缓存。

这样子，我们就可以将代码缓存下来了。

代码更改后，就回去或取最新的代码


# 主意：
旧版本的 webpack 

// 兼容旧版本
// 业务逻辑和库 的关联逻辑的代码  manifest 默认是存在与业务和库, 
// 旧版本可能因为 manifest 内置的之间的内容可能发生变化
// runtime 就会抽离出来，放的就是关系的代码
runtimeChunk: {
    name: 'runtime'
},