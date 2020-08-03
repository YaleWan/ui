<template>
  <div v-if="showSelect" class="color-select" @click="closeSelect" @touchmove.prevent>
    <div class="select-container" @click.stop="">
      <div class="select-title">
        <span class="close-select" @click="closeSelect">
          取消
        </span>
        {{ title }}
        <span class="sure-select" @click="sureSelect">
          确定
        </span>
      </div>
      <div class="value-container">
        <span
          v-for="item in selectArr"
          :key="item.id"
          :class="{active: selectedItem == item}"
          @click="chooseValue(item)"
        >
          {{ item.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'BottomSelect',
  props: ['selectArr', 'title', 'showTransSelect'],
  data() {
    return {
      showSelect: this.showTransSelect,
      selectedItem: ''
    }
  },
  watch: {
    showTransSelect(val) {
      this.showSelect = val
    }
  },
  methods: {
    // 选中某个值
    chooseValue(item) {
      this.selectedItem = item
    },
    // 关闭选择器
    closeSelect() {
      this.showSelect = false
      this.$emit('on-change-show', this.showSelect)
      this.selectedItem = ''
    },
    // 确定某个反馈类型
    sureSelect() {
      if (this.selectedItem === '') {
        Toast('请选择反馈内容')
      } else {
        this.$emit('on-select-value', this.selectedItem)
        this.closeSelect()
      }
    }
  }
}
</script>
<style lang="less">
.color-select {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 30;

    .select-container {
        position: absolute;
        z-index: 11;
        left: 0;
        bottom: 0;
        width: 100%;
        color: #333;
        background: #fff;
    }
    .select-title {
        text-align: center;
        height: 1.066667rem;
        line-height: 1.066667rem;
        color: #666;
        font-size: 0.426667rem;
        border-bottom: 1px solid #f0f0f0;
        padding: 0 0.3rem;

        .close-select {
            float: left;
            font-size: 0.373333rem;
        }
        .sure-select {
            float: right;
            font-size: 0.373333rem;
        }
    }
    .value-container {
        padding: 0 0.4rem 0.4rem 0.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        font-size: 0;

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2.8rem;
            height: 1.066667rem;
            font-size: 0.4rem;
            color: #666;
            border-radius: 4px;
            border: 1px solid #f0f0f0;
            margin-top: 0.4rem;
        }
        .active {
            color: #2a8cff;
            border: 1px solid #2a8cff;
            background-color: #ecf4fd;
        }
    }
}
</style>
