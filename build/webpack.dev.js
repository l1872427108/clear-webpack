const webpack = require('webpack');
const path = require('path');

const devConfig = {
    mode: 'development', 
    devtool: 'cheap-module-eval-source-map',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },

            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
            },
        ]
    },

    output: {
        filename: '[name].js',
        // chunkFilename: '[name].chunk.name.js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new BundleAnalyzerPlugin({
        //     generateStatsFile: true
        // })
    ],

    devServer: {
      overlay: true,
      contentBase: path.resolve(__dirname, '../dist'),
      // open: true,
      port: 8080,
      hot: true,
    //   historyApiFallback: true,
    historyApiFallback: {
        rewrites: [{
            from: '/abc.html',
            to: '/list.html'
        }]
    },
      proxy: {
        //   可以给根目录转发  /
          index: '',  
          '/react/api': {
              
              target: 'http://www.dell-lee.com',
            //   对 https 的转发
              secure: false,
            //   做了爬虫，可能对 origin 做了限制 
              changeOrigin: true,
              pathRewrite: {
                  'header.json': 'demo.json'
              },
            //   跳过转发
            //   bypass: function (req, res, proxyOptions) {
            //       if (req,headers.accpet.indexOf('html')) {

            //       }
            //   },
            //   headers: {
                // 模拟一些请求头行为
            //       host: 'www.dell-lee.com',
            //       cookie: 'sdfsfa'
            //   }
          }
      },
      hotOnly: true
    }
}

module.exports = devConfig;