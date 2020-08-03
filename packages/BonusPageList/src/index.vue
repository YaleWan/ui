<template>
  <div class="bones-pic-container">
    <div v-for="(item,index) in list" :key="index" class="bones-pic">
      <div class="left-box" />
      <div class="right-container">
        <p class="fir-line" />
        <p class="sec-line" />
        <p class="thi-line" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BonusPageList',
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6]
    }
  }
}
</script>
<style lang="less" scoped>
@bgcolor: #f5f5f5;

.bones-pic {
    display: flex;
    align-items: flex-start;
    padding: 0.266667rem 0.4rem;
    border-bottom: 1px solid #f5f5f5;
    font-size: 0;

    .left-box {
        width: 3.013333rem;
        height: 2.08rem;
        margin-right: 0.266667rem;
        background-color: #f5f5f5;
    }
    .right-container {
        .fir-line {
            width: 6.386667rem;
        }
        .sec-line {
            width: 2.666667rem;
            margin-top: 0.2rem;
        }
        .thi-line {
            width: 4rem;
            margin-top: 0.266667rem;
        }
        p {
            height: 0.32rem;
            background-color: #f5f5f5;
        }
    }
}
</style>
