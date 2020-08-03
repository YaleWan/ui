<template>
  <div class="loadingMask">
    <div class="picLoading">
      <div class="rect1" />
      <div class="rect2" />
      <div class="rect3" />
      <div class="rect4" />
      <div class="rect5" />
    </div>
  </div>
</template>
<script>

export default {
  name: 'CommonLoadingMask'
}
</script>

<style lang="less">
.loadingMask{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255,255,255,.8);
    .picLoading {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50px;
        height: 60px;
        text-align: center;
        font-size: 10px;
        transform: translate(-50%,-50%);
        > div {
            background-color: #ff6600;
            height: 100%;
            width: 6px;
            display: inline-block;
            -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
            animation: stretchdelay 1.2s infinite ease-in-out;
        }
        .rect2 {
            -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s;
        }
        .rect3 {
            -webkit-animation-delay: -1.0s;
            animation-delay: -1.0s;
        }
        .rect4 {
            -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s;
        }
        .rect5 {
            -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s;
        }
    }
}

@-webkit-keyframes stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
    20% { -webkit-transform: scaleY(1.0) }
}

@keyframes stretchdelay {
    0%, 40%, 100% {
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
    }  20% {
        transform: scaleY(1.0);
        -webkit-transform: scaleY(1.0);
    }
}
</style>
