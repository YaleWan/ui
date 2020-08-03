<template>
  <div class="nav-wrapper">
    <div class="nav-bar">
      <ul>
        <li
          v-for="(item, index) in navList"
          :key="item.level"
          :style="[
            {color: chooseLevel == item.level ? activeColor : ''},
            {
              backgroundColor:
                chooseLevel == item.level
                  ? activeColor === '#f60'
                    ? '#ffefe5'
                    : '#e9f3ff'
                  : ''
            }
          ]"
          @click="changeTab($event, item, index)"
        >
          <span>{{ item.name }}</span>
          <img
            v-if="item.child && item.child.length"
            :class="[
              {
                activeTable:
                  Number(chooseLevel) === Number(item.level) && isShowOption
              }
            ]"
            src="https://assets.che300.com/feimg/h5/c-326/bang_icon_down@3x.png"
          >
        </li>
      </ul>
    </div>
    <div v-if="isShowOption" class="mask" @click.stop="isShowOption = false">
      <div class="option-wrapper">
        <div
          v-for="(item, index) in activeOption"
          :key="index"
          class="option-item"
          :style="[
            {color: chooseLevel == item.level ? activeColor : ''},
            {
              backgroundColor:
                chooseLevel == item.level
                  ? activeColor === '#f60'
                    ? '#ffefe5'
                    : '#e9f3ff'
                  : ''
            }
          ]"
          @click.stop="chooseOption(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
 *顶部导航栏滑动
 *
 *
 *navList:[{id:'1',name:'中型车'}]
 *navListId  navList中表示id的key
 *navListName navList中表示name的key
 *type {forC/forB}用来判断是专业版还是个人版
 *Zindex {Number} 当前的滑动组件所在的层级 值越大越上层 默认10
 *activeId 当前选中的tab的id
 *
 *event
 *switchTab  通知父组件，切换tab
 *makeNavCenter  使选中的tab移动到中间
 *
 *
 */

import BScroll from 'better-scroll'
const componentName = 'MaskText'
// tab滚动条配置
const navbarScrollOption = {
  click: true,
  scrollX: true,
  scrollY: false
}
export default {
  name: componentName,
  props: ['navList', 'activeId', 'activeColor'],
  data() {
    return {
      list: [],
      activeOption: [],
      isShowOption: false,
      chooseLevel: undefined
    }
  },
  computed: {},
  created() {
    this.chooseLevel = this.activeId
  },
  mounted() {
    this.initNavbarScroll()
  },
  methods: {
    // 初始化BScroll
    initNavbarScroll() {
      if (!this.navbarScroll) {
        this.navbarScroll = new BScroll('.nav-wrapper', navbarScrollOption)
      }
    },
    // 切换tab
    changeTab(event, item, index) {
      if (
        this.activeIndex &&
                Number(this.activeIndex) === Number(index) &&
                this.navList[this.activeIndex].child &&
                this.navList[this.activeIndex].child.length &&
                this.isShowOption
      ) {
        this.isShowOption = false
      } else {
        this.isShowOption = false
        this.makeNavCenter(event)
        this.chooseLevel = item.level
        this.switchTab(item.level)
        if (item.child && item.child.length) {
          this.showOption(item)
        }
        if (
          this.activeIndex &&
                    Number(this.activeIndex) !== Number(index) &&
                    this.navList[this.activeIndex].child &&
                    this.navList[this.activeIndex].child.length
        ) {
          this.navList[this.activeIndex].level = this.navList[
            this.activeIndex
          ].child[0].level
          this.navList[this.activeIndex].name = this.navList[
            this.activeIndex
          ].child[0].name
        }
        this.activeIndex = index
      }
    },
    showOption(item) {
      this.activeOption = item.child
      this.isShowOption = true
    },
    chooseOption(item) {
      this.chooseLevel = item.level
      this.navList[this.activeIndex].level = item.level
      this.navList[this.activeIndex].name = item.name
      this.isShowOption = false
      this.switchTab(item.level)
    },
    // 通知父组件，切换tab
    switchTab(level) {
      this.$emit('switchTab', level)
      // this.isShowOption = false;
    },
    // 使选中的tab移动到中间
    makeNavCenter(event) {
      const wrapperWidth = document.querySelector('.nav-wrapper').offsetWidth
      const scrollWidth = document.querySelector('.nav-bar').offsetWidth
      if (Number(scrollWidth) > Number(wrapperWidth)) {
        const labelEl =
                    event.target.tagName === 'SPAN' ? event.target.parentNode : event.target
        const labelElWidth = labelEl.offsetWidth
        const labelElLeft = labelEl.offsetLeft
        const positionRight = scrollWidth - labelElLeft - labelElWidth / 2
        const positionLeft = labelElLeft + labelElWidth / 2
        let scrollX = 0
        if (positionLeft < wrapperWidth / 2) {
          scrollX = 0
        } else if (positionRight < wrapperWidth / 2) {
          scrollX = scrollWidth - wrapperWidth
        } else {
          scrollX = labelElLeft - wrapperWidth / 2 + labelElWidth / 2
        }
        this.navbarScroll.scrollTo(-scrollX, 0, 300, 'bounce')
      }
    }
  }
}
</script>

<style lang="scss">
// @import '../../common/style/mixin.scss';
.nav-wrapper {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    .nav-bar {
        display: inline-block;
        padding: 0.266667rem 0.4rem;
        z-index: 10;
        background-color: #fff;
        border-bottom: 1px solid #f0f0f0;
    }
    ul {
        display: flex;
        white-space: nowrap;
    }
    li {
        display: flex;
        align-items: center;
        margin-right: 0.266667rem;
        height: 1.066667rem;
        padding: 0 0.533333rem;
        border-radius: 0.533333rem;
        font-size: 0.426667rem;
        background-color: #f5f5f5;
        img {
            width: 0.186667rem;
            margin-left: 0.133333rem;
        }
    }
    .label {
        position: absolute;
        left: 0;
        bottom: -0.4rem;
        width: 100%;
        height: 0.053333rem;
        border-radius: 0.026667rem;
    }
    .mask {
        height: 100vh;
        background: rgba(0, 0, 0, 0.6);
    }
    .option-wrapper {
        display: flex;
        flex-wrap: wrap;
        padding: 0.4rem 0 0.133333rem 0.4rem;
        background-color: #fff;
        z-index: 1;
        font-size: 0;
    }
    .option-item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.4rem 0.266667rem 0;
        height: 1.066667rem;
        border-radius: 0.106667rem;
        background-color: #f5f5f5;
        width: 2.8rem;
        font-size: 0.373333rem;
    }
    .activeTable {
        transform: rotate(180deg);
    }
}
</style>
