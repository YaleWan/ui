// 导入组件，组件必须声明 name
import Carselector from './src'

// 为组件提供 install 安装方法，供按需引入
Carselector.install = function(Vue) {
  Vue.component(Carselector.name, Carselector)
}

// 导出组件
export default Carselector
