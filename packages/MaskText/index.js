// 导入组件，组件必须声明 name
import MaskText from './src'

// 为组件提供 install 安装方法，供按需引入
MaskText.install = function(Vue) {
  Vue.component(MaskText.name, MaskText)
}

// 导出组件
export default MaskText
