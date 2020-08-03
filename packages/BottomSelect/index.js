// 导入组件，组件必须声明 name
import BottomSelect from './src'

// 为组件提供 install 安装方法，供按需引入
BottomSelect.install = function(Vue) {
  Vue.component(BottomSelect.name, BottomSelect)
}

// 导出组件
export default BottomSelect
