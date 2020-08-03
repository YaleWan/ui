<template>
  <div />
</template>
<script>
// 遮罩组件
const componentName = 'dialogMask'

export default {
  name: componentName,
  props: {
    zIndex: {
      type: Number,
      default: 1000
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible: {
      handler(isVisible) {
        isVisible ? this.createMask() : this.destoryMask()
      },
      immediate: true
    }
  },
  methods: {
    // 生成遮罩的方法
    createMask() {
      const self = this
      const maskEl = document.createElement('div')
      maskEl.className = 'dialog-mask'
      maskEl.style.zIndex = this.zIndex
      // 绑定冒泡点击事件
      maskEl.addEventListener('click', event => {
        self.$emit('click-mask')
      }, false)
      document.body.appendChild(maskEl)
    },
    // 销毁遮罩
    destoryMask() {
      const childNodes = Array.prototype.slice.call(document.body.childNodes, 0)
      const len = childNodes.length
      for (let i = len - 1; i >= 0; i--) {
        if (childNodes[i].className === 'dialog-mask') {
          document.body.removeChild(childNodes[i])
          break
        }
      }
    }
  }
}

</script>
