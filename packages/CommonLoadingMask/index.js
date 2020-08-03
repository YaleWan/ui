// 导入组件，组件必须声明 name
import CommonLoadingMask from './src'

// 为组件提供 install 安装方法，供按需引入
CommonLoadingMask.install = function(Vue) {
  Vue.component(CommonLoadingMask.name, CommonLoadingMask)
}

// 导出组件
export default CommonLoadingMask
