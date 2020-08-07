import Vue from 'vue'
import VueRouter from 'vue-router'
import Install from '../docs/guide/install.md'
Vue.use(VueRouter)

const routes = [
  { path: '*', component: Install }
]
importPages(require.context('../docs', true, /\.md$/, 'lazy'))
function importPages(r) {
  r.keys().forEach(key => {
    routes.push({ path: (key.split('.'))[1], component: () => r(key) })
  })
}
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
