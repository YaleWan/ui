
const entrys = require('./examples/utils')('./packages')
// 开发环境配置
const devConfig = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
    config.module
      .rule('js')
      .include.add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
    config.module
      .rule('dotmd')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .options({
        ...(config.module.rules
          .get('vue')
          .uses.get('vue-loader')
          .get('options') || null)
      })
      .end()
      .use('vue-dotmd-loader')
      .loader('vue-dotmd-loader')
      .options({
        dest: false,
        markdown: {
          options: {
            html: true
          }
        }
      })
      .end()
  }
}
const buildConfig = {
  outputDir: 'lib',
  pages: entrys,
  configureWebpack: {
    output: {
      filename: '[name]/index.js'
    }
  },
  css: {
    sourceMap: true,
    extract: {
      filename: 'style/[name].css'
    }
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')
    for (const key in entrys) {
      config.plugins.delete('html-' + key)
      config.plugins.delete('preload-' + key)
      config.plugins.delete('prefetch-' + key)
      config.plugins.delete('copy-' + key)
    }
  }
}
module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig
