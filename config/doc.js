'use strict'
const path = require('path')

const SftpAfterWebpack = require('sftp-after-webpack')

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  publicPath: 'http://fezz.ceshi.che300.com/vuedocs',
  outputDir: 'dist',
  productionSourceMap: false,
  configureWebpack: {
    name: '车300vue组件库',
    performance: {
      hints: false
    },
    plugins: [
      new SftpAfterWebpack({
        host: '118.190.91.189',
        user: 'bge',
        password: 'bge@che300!',
        port: '22',
        localPath: path.resolve(__dirname, '../dist'),
        remotePath: '/home/webserver/static/fezz.che300.com/vuedocs/'
      })
    ]
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
