// 导入组件，组件必须声明 name
import BonusPageList from './src'

// 为组件提供 install 安装方法，供按需引入
BonusPageList.install = function(Vue) {
  Vue.component(BonusPageList.name, BonusPageList)
}

// 导出组件
export default BonusPageList
