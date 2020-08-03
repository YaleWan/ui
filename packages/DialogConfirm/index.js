// 导入组件，组件必须声明 name
import DialogConfirm from './src'

// 为组件提供 install 安装方法，供按需引入
DialogConfirm.install = function(Vue) {
  Vue.component(DialogConfirm.name, DialogConfirm)
}

// 导出组件
export default DialogConfirm
