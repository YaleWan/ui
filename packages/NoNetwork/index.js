// 导入组件，组件必须声明 name
import NoNetwork from './src'

// 为组件提供 install 安装方法，供按需引入
NoNetwork.install = function(Vue) {
  Vue.component(NoNetwork.name, NoNetwork)
}

// 导出组件
export default NoNetwork
