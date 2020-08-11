module.exports = {
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
