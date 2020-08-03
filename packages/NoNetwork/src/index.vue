<template>
  <div class="no-network">
    <slot name="img">
      <img src="https://assets.che300.com/feimg/h5/base/no_wifi@3x.png">
    </slot>
    <span v-if="text">
      {{ text }}
    </span>
    <div class="reload" @click="reload">
      重新加载
    </div>
  </div>
</template>

<script>
/**
 * 无网络
 */
export default {
  name: 'NoNetwork',
  props: {
    text: {
      type: String,
      default: '当前网络不太好'
    }
  },
  methods: {
    reload() {
      this.$emit('reload')
    }
  }
}
</script>

<style lang="scss" scoped>
.no-network {
    height: 100vh;
    font-size: 0.373333rem;
    color: #999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f2f7fa;

    img {
        height: 4.373333rem;
        width: 3.333333rem;
        margin-bottom: 0.533333rem;
    }
    .reload {
        height: 1.066667rem;
        border-radius: 0.533333rem;
        background-color: #2a8cff;
        font-size: 0.373333rem;
        color: #fff;
        width: 4.266667rem;
        margin-top: 0.533333rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
