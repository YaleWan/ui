import Vue from 'vue'
import VueRouter from 'vue-router'
import Install from '../docs/install.md'
import QuikeStart from '../docs/quikeStart.md'
import bappDowload from '../docs/bappDowload.md'
import MaskText from '../docs/maskText.md'
import NoNetwork from '../docs/noNetwork.md'
import BottomSelect from '../docs/bottomSelect.md'
import BonusPageList from '../docs/bonusPageList.md'
import Share from '../docs/share.md'
import ShareInstall from '../docs/shareInstall.md'
import GiftWheel from '../docs/giftWheel.md'
import Test from '../docs/test.md'
import CommonLoadingMask from '../docs/commonLoadingMask.md'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Install,
    name: 'default'
  },
  {
    path: '/guide/install',
    name: 'Install',
    component: Install
  },
  {
    path: '/guide/quikeStart',
    name: 'quikeStart',
    component: QuikeStart
  },
  {
    path: '/bappDowload',
    name: 'bappDowload',
    component: bappDowload
  },
  {
    path: '/maskText',
    name: 'maskText',
    component: MaskText
  },
  {
    path: '/bottomSelect',
    name: 'bottomSelect',
    component: BottomSelect
  },
  {
    path: '/noNetwork',
    name: 'noNetwork',
    component: NoNetwork
  },
  {
    path: '/bonusPageList',
    name: 'bonusPageList',
    component: BonusPageList
  },
  {
    path: '/shareInstall',
    name: 'shareInstall',
    component: ShareInstall
  },
  {
    path: '/giftWheel',
    name: 'giftWheel',
    component: GiftWheel
  },
  {
    path: '/share',
    name: 'share',
    component: Share
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/commonLoadingMask',
    name: 'commonLoadingMask',
    component: CommonLoadingMask
  }
]
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
