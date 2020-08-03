// 导入组件，组件必须声明 name
import BappDownload from './src'

// 为组件提供 install 安装方法，供按需引入
BappDownload.install = function(Vue) {
  Vue.component(BappDownload.name, BappDownload)
}

// 导出组件
export default BappDownload
