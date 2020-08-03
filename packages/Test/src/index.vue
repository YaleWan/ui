<template>
  <div class="common-keyboard">
    <div ref="keyB" class="VirtualKey" @click.stop="inputed($event)">
      <ul class="first">
        <li><a href="javascript:;" class="num">1</a></li>
        <li><a href="javascript:;" class="num">2</a></li>
        <li><a href="javascript:;" class="num">3</a></li>
        <li><a href="javascript:;" class="num">4</a></li>
        <li><a href="javascript:;" class="num">5</a></li>
        <li><a href="javascript:;" class="num">6</a></li>
        <li><a href="javascript:;" class="num">7</a></li>
        <li><a href="javascript:;" class="num">8</a></li>
        <li><a href="javascript:;" class="num">9</a></li>
        <li><a class="num">0</a></li>
      </ul>
      <ul class="second">
        <li :class="classObj0"><a href="javascript:;">Q</a></li>
        <li><a href="javascript:;">W</a></li>
        <li><a href="javascript:;">E</a></li>
        <li><a href="javascript:;">R</a></li>
        <li><a href="javascript:;">T</a></li>
        <li><a href="javascript:;">Y</a></li>
        <li><a href="javascript:;">U</a></li>
        <li :class="classObj7"><a href="javascript:;">I</a></li>
        <li :class="classObj8"><a href="javascript:;">O</a></li>
        <li><a href="javascript:;">P</a></li>
      </ul>
      <ul class="third">
        <li><a href="javascript:;">A</a></li>
        <li><a href="javascript:;">S</a></li>
        <li><a href="javascript:;">D</a></li>
        <li><a href="javascript:;">F</a></li>
        <li><a href="javascript:;">G</a></li>
        <li><a href="javascript:;">H</a></li>
        <li><a href="javascript:;">J</a></li>
        <li><a href="javascript:;">K</a></li>
        <li><a href="javascript:;">L</a></li>
      </ul>
      <ul class="fourth">
        <li class="pasteBtn" :class="classObj7">
          <a
            href="javascript:;"
            :style="{backgroundColor: pasteBtnBgColor}"
            @click="showPasteDialog"
          >粘 贴</a>
        </li>
        <li><a href="javascript:;">Z</a></li>
        <li><a href="javascript:;">X</a></li>
        <li><a href="javascript:;">C</a></li>
        <li><a href="javascript:;">V</a></li>
        <li><a href="javascript:;">B</a></li>
        <li><a href="javascript:;">N</a></li>
        <li><a href="javascript:;">M</a></li>
        <li class="backspaceBtn"><a href="javascript:;" @click.stop="deleteFn">删 除</a></li>
      </ul>
      <div class="sureBtn"><a :style="{backgroundColor: isCanSearch ? sureBtnBgColor : ''}" @click.stop="searchFn">{{ sureBtnText }}</a></div>
    </div>
    <div class="keybMask" @click="closeKeyb" />
  </div>
</template>
<script>

export default {
  name: 'TestComponent',
  props: {
    isCanSearch: {
      type: Boolean
    },
    // 确定按钮的文本
    sureBtnText: {
      type: String,
      default: '查　询'
    },
    sureBtnBgColor: {
      type: String,
      default: '#ff6600'
    },
    pasteBtnBgColor: {
      type: String,
      default: '#ff7d4c'
    }

  },
  data() {
    return {
      classObj0: {
        'prohibit': true
      },
      classObj7: {
        'prohibit': true
      },
      classObj8: {
        'prohibit': true
      }

    }
  },
  methods: {
    inputed(e) {
      this.$emit('inputed', e)
    },
    showPasteDialog() {
      this.$emit('showPasteDialog')
    },
    deleteFn() {
      this.$emit('deleteFn')
    },
    searchFn() {
      this.$emit('searchFn')
    },
    closeKeyb() {
      this.$emit('closeKeyb')
    }
  }
}
</script>

<style lang="less">
   .VirtualKey{
        margin: 0;
        width: 100%;
        left: 0;
    }
    .keybMask{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        // background-color: transparent;
        background-color: rgba(21, 20, 20, 0.02);
    }
     .VirtualKey li {
        float: left;
        width: 10%;
        padding: 0 .15rem .15rem 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        height: 1.25rem;
        font-size: .383rem;
    }
    .VirtualKey li a {
        text-align: center;
        display: block;
        width: 100%;
        height: 100%;
        line-height: 1.11rem;
        border-radius: .3em;
        background: #fff;
        -webkit-box-shadow: 0px 1px 1px #aaa;
        box-shadow: 0px 1px 1px #aaa;
        color: #5c5c5c;
    }
    .VirtualKey .sureBtn {
        height: 1.11rem;
        line-height: 1.11rem;
        text-align: center;
        padding: 0px .15rem .15rem 0;
    }
    .VirtualKey .sureBtn a {
        display: block;
        border-radius: .3em;
        background: #a5a5a5;
        font-size: .45rem;
        color: #fff;
    }
</style>
