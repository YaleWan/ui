// 导入组件，组件必须声明 name
import GiftWheel from './src'

// 为组件提供 install 安装方法，供按需引入
GiftWheel.install = function(Vue) {
  Vue.component(GiftWheel.name, GiftWheel)
}

// 导出组件
console.log('GiftWheel', GiftWheel)
export default GiftWheel
