import Vue from 'vue'
import App from './App.vue'
import router from './router'
import C3Ui from '../packages/index'
import DemoBlock from './components/demo-block' // import DemoBlock
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/less/index.less'
import 'github-markdown-css/github-markdown.css'
import 'highlight.js/styles/color-brewer.css'
import 'vue-dotmd-loader/src/docs.css'
import './utils/rem'
Vue.use(C3Ui)
Vue.use(Element)
Vue.component('DemoBlock', DemoBlock)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
