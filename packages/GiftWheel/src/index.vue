<template>
  <div class="wheel" :class="wheelClass">
    <img class="wheel-img" :style="wheelStyle" :src="wheelImage">
    <img class="point-img" :src="pointImage" @click.stop="clickPoint">
  </div>
</template>

<script>
// 抽奖大转盘组件 @author zzt
export default {
  name: 'GiftWheel',
  props: {
    // 可以设置转盘内容样式的类名
    wheelClass: {
      type: String,
      default: ''
    },
    // 转盘图片地址
    wheelImage: {
      type: String,
      default: ''
    },
    // 指针图片地址
    pointImage: {
      type: String,
      default: ''
    },
    // 是否旋转
    rotating: {
      type: Boolean,
      default: false
    },
    // 预转动的圈数
    turns: {
      type: Number,
      default: 10
    },
    // 中奖级别
    level: {
      type: [String, Number],
      default: ''
    },
    // 中奖序列数组
    levelList: {
      type: Array,
      default: () => []
    },
    // 整个旋转的毫秒数
    rotateTime: {
      type: Number,
      default: 5
    },
    // 转盘是否复原到初始位置
    reset: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      wheelStyle: {
        transition: '',
        transform: 'rotate(0deg)'
      },
      rotateDeg: 0
    }
  },
  watch: {
    // 监听转盘是否开始滚动
    rotating: {
      handler(isRotating) {
        if (isRotating) this.rotateWheel()
      }
    },
    reset: {
      handler(isReset) {
        if (isReset) this.resetWheel()
      }
    }
  },
  methods: {
    // 计算总共需要旋转的角度
    calcRotateDeg() {
      const OneTurnDeg = 360
      // 获取中间level的索引值
      const levelIndex = this.levelList.indexOf(this.level)
      if (levelIndex > -1) {
        // 最后一圈需要转动的角度数
        const restDeg = OneTurnDeg - (OneTurnDeg / this.levelList.length) * (levelIndex + 0.5)
        this.rotateDeg = restDeg + OneTurnDeg * this.turns
      } else {
        throw new Error('current level is not in levelList')
      }
    },
    // 让转盘转动起来
    rotateWheel() {
      this.calcRotateDeg()
      this.wheelStyle.transition = `transform ${this.rotateTime}s ease`
      this.$nextTick(() => {
        this.$emit('start-rotating')
        this.wheelStyle.transform = `rotate(${this.rotateDeg}deg)`
        this.$nextTick(() => {
          setTimeout(() => {
            this.$emit('stop-rotating')
          }, this.rotateTime * 1000)
        })
      })
    },
    // 让转盘复原
    resetWheel() {
      this.wheelStyle.transition = ''
      this.wheelStyle.transform = 'rotate(0deg)'
    },
    clickPoint() {
      this.$emit('click-point')
    }
  }
}

</script>

<style scoped lang="scss">
.wheel {
    position: relative;
    width: 100%;
    height: 100%;

    .wheel-img {
        width: 100%;
        height: 100%;
    }

    .point-img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 2.026667rem;
        height: 2.533333rem;
    }
}
</style>
