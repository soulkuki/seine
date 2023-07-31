// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const path = require('path')
const WebpackBar = require('webpackbar')

function resolve(dir) {
  // __dirname:当前目录
  return path.join(__dirname, dir)
}

// console.log(`🚀 🚀 🚀  您当前运行环境 ------ ${process.env.NODE_ENV}`)
module.exports = {
  publicPath: './',
  // outputDir: process.env.VUE_APP_OUTPUT_DIR,
  assetsDir: './static',
  // lintOnSave: false,
  // lintOnSave: process.env.NODE_ENV === 'development', // 是否在开发环境下每次保存代码时都启用 eslint 验证
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@styles/index.scss";`, // 全局公共样式
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = ''
      return args
    })
    // 首屏加载会一次性加载所有路由，导致加载速度变慢，因此手动移除 prefetch ，Preload
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    // config.output.filename('js/[name].[hash].js').chunkFilename('js/pcauto_chunk-[name].[hash].js').end()  // 自定义打包文件命名
  },
  configureWebpack: {
    plugins: [
      // 注意！！依赖分析模块 webpack-bundle-analyzer 在线上环境此处需要注释禁用
      // new (require("webpack-bundle-analyzer").BundleAnalyzerPlugin)({
      //   analyzerPort: 8920,
      // }),
      new WebpackBar(),
    ],
    // 加了以下这段  懒加载图片才不会报错~
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
      ],
    },
    resolve: {
      alias: {
        // 别名
        '@': resolve('src'),
        '@views': resolve('src/views'),
        '@components': resolve('src/components'),
        '@utils': resolve('src/utils'),
        '@store': resolve('src/store'),
        '@router': resolve('src/router'),
        '@assets': resolve('src/assets'),
        '@styles': resolve('src/styles'),
        // '@services': resolve('src/services'),
        // '@plugins': resolve('src/plugins'),
        '@config': resolve('src/config'),
        // '@const': resolve('src/const'),
      },
    },
  },
  // 生产环境构建不生成 source map，加快打包速度
  productionSourceMap: false,
  // 配置 webpack-dev-server 。
  devServer: {
    // disableHostCheck: true,
    open: true,
    // host: 'dev.seine.com.cn',
    port: 8089,
    https: false,
    // hotOnly: false,
    hot: 'only',
    // stats: 'errors-only', // 只打印错误信息
    proxy: {},
  },
}