const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
// 引入压缩的model
const CompressionWebpackPlugin = require('compression-webpack-plugin')

// 压缩js文件
const compress = new CompressionWebpackPlugin({
  filename: (info) => {
    return `${info.path}.gz${info.query}`
  },
  algorithm: 'gzip',
  threshold: 10240, // 对超过10k的数据压缩
  test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
  minRatio: 0.8,
  deleteOriginalAssets: false, //不删除源文件
})

const isProduction = process.env.NODE_ENV === 'production'

let vuejs = 'https://cdn.jsdelivr.net/npm/vue@2.6.11'
if (!isProduction) {
  vuejs = 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'
}

function resolve(dir) {
  return path.join(__dirname, dir)
}

const cdn = {
  css: [],
  js: [
    vuejs,
    'https://unpkg.com/axios/dist/axios.min.js', // axios
    'https://unpkg.com/vuex', // vuex
    'https://unpkg.com/vue-router/dist/vue-router.js', // vue-router
    'https://lib.baomitu.com/core-js/2.6.11/core.min.js', // core
    'https://cdn.bootcss.com/wangEditor/10.0.13/wangEditor.min.js', // sha256
  ],
}

module.exports = {
  // 部署文件使用的路径
  publicPath: isProduction ? '/' : '/',

  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本

  productionSourceMap: false, // 生产环境的 source map

  configureWebpack: (config) => {
    config.plugins.push(compress) //压缩代码 生成zgip

    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production'
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log'], // 移除console
            },
          },
        }),
      ]
    } else {
      // 为开发环境修改配置...
      config.mode = 'development'
    }
  },

  chainWebpack: (config) => {
    //修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@img', resolve('src/assets/img'))
    config.resolve.extensions.add('.js', '.json', '.vue', '.scss')

    // 配置CDN
    config.plugin('html').tap((args) => {
      args[0].cdn = cdn
      return args
      // return [ /* 传递给 html-webpack-plugin's 构造函数的新参数 */ ]
    })

    //优化 稍微压缩
    config.optimization.minimize(true)
    // 代码分割
    config.optimization.splitChunks({
      chunks: 'all',
    })
    // cdn 引入方式
    config.externals({
      vue: 'Vue',
      axios: 'axios',
      echarts: 'echarts',
      core: 'core',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
    })
  },
  // 关闭 eslint 语法检查
  lintOnSave: false,

  css: {
    extract: true, // 优化 从js中把css 提取出来 形成一个单独的css文件
    loaderOptions: {
      sass: {
        // @是src的别名
        data: `
                @import "@/assets/scss/variable.scss";
              `,
      },
    },
  },

  devServer: {
    // overlay: {
    //   warnings: true,
    //   errors: true
    // },
    open: true,
    host: '0.0.0.0',
    port: 8091,
    https: false,
    hotOnly: false,
    // 配置跨域处理,只有一个代理
    proxy: {
      '/api': {
        target: 'http://192.168.0.105:9001',
        changeOrigin: true,
      },
    },
  },
}
