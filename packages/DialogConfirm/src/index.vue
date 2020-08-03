<template>
  <div class="bottom-download">
    <div class="left-logo-desc">
      <img
        class="logo-icon"
        src="https://ssl-assets.che300.com/feimg/bapp/card/icon-logo.png"
        alt=""
      >
      <div class="download-desc">
        <div class="desc-title">车300专业版</div>
        <div>80%业内同行都在用的经营神器</div>
      </div>
    </div>
    <a class="download-btn">
      立即下载
    </a>
  </div>
</template>
<script>
export default {
  name: 'DialogConfirm'
}
</script>
<style lang="less" scoped>
.bottom-download {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.4rem;
    background-color: #2a8cff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 1.813333rem;
    color: #fff;
    background: linear-gradient(to right, #3d7ced, #1f4cf0);
    z-index: 999;

    .left-logo-desc {
        display: inline-flex;
        align-items: center;
    }

    img.logo-icon {
        display: inline-block;
        width: 1.066667rem;
        height: 1.066667rem;
    }
    .download-desc {
        display: inline-block;
        margin-left: 0.266667rem;
        font-size: 0.32rem;

        .desc-title {
            font-size: 0.48rem;
            font-weight: bold;
        }
    }
    .download-btn {
        width: 1.813333rem;
        height: 0.666667rem;
        text-align: center;
        line-height: 0.666667rem;
        background-color: #fff;
        color: #1f4cf0;
        border-radius: 0.666667rem;
        font-size: 0.32rem;
    }
}
</style>
