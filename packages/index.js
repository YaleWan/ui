// 导入button组件
import BappDownload from './BappDownload'
import MaskText from './MaskText'
import DialogConfirm from './DialogConfirm'
import NoNetwork from './NoNetwork'
import BottomSelect from './BottomSelect'
import BonusPageList from './BonusPageList'
import GiftWheel from './GiftWheel'
import CommonLoadingMask from './CommonLoadingMask'
import Carselector from './Carselector'
import Test from './Test'

// 组件列表
const components = [
  BappDownload,
  MaskText,
  DialogConfirm,
  NoNetwork,
  BottomSelect,
  BonusPageList,
  GiftWheel,
  Test,
  CommonLoadingMask,
  Carselector
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...components
}
