const entrys = require('../examples/utils')('./packages')

module.exports = {
  outputDir: 'lib',
  pages: entrys,
  configureWebpack: {
    output: {
      filename: '[name]/index.js',
      libraryTarget: 'umd'
    },
    externals: {
      'vue': 'vue',
      'axios': 'axios'
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
    config.plugins.delete('copy')
    for (const key in entrys) {
      config.plugins.delete('html-' + key)
      config.plugins.delete('preload-' + key)
      config.plugins.delete('prefetch-' + key)
      config.plugins.delete('copy-' + key)
    }
  }
}
