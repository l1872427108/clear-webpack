
# PWA 
实现一个 service worker 

插件 workbox-webpack-plugin

new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
})

会生成一个 service-worker 的文件  

然后进行文件注册 就可以

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('service-worker registed');
        }).catch(error => {
            console.log('service-worker registed error')
        });
    })
}