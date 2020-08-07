<template>
  <div
    id="car-brand"
    class="c3-car-brand"
    :style="direction + ':0px;background-color:' + bgcolor + ';border: 1px solid ' + themeColor"
  >
    <div class="car-brands-title" :style="'color:' + themeColor">请选择品牌</div>
    <div class="left-list" :style="'background-color:' + bgcolor + ';color:' + textColor">
      <a v-for="n in initial" :key="n" class="left-list-a" :href="'#' + n">{{ n }}</a>
    </div>
    <div class="right-list" :style="'background-color:' + bgcolor + ';color:' + textColor">
      <template v-for="(group, letterIndex) in list">
        <div :id="group.letter" :key="letterIndex" class="gray">
          {{ group.letter }}
        </div>
        <a
          v-for="(brand, bIndex) in group.brands"
          :key="letterIndex + 'brand' + bIndex"
          :class="'car-brands-name ' + (brand.id == brandId ? 'orange' : '')"
          href="javascript:void(0)"
          @click="getBrandId(brand)"
        >
          {{ brand.name }}
        </a>
      </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CarBrandId',
  components: {},
  props: {
    direction: {
      type: String,
      default: 'left'
    },
    bgcolor: {
      type: String,
      default: '#fff'
    },
    themeColor: {
      type: String,
      default: '#f60'
    },
    textColor: {
      type: String,
      default: '#000'
    },
    hideBrands: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      list: [],
      initial: [],
      brandId: ''
    }
  },
  created: function() {
    var me = this
    axios
      .get('https://open.che300.com/api/brands/query')
      .then(response => {
        var list = response.data.data.list
        var chooseList = []
        var brandsList = []
        var initialList = []
        var num = 0
        for (var a in list) {
          for (var i in list[a].brands) {
            if (me.isInArray(list[a].brands[i].id)) {
              brandsList.push(list[a].brands[i])
            } else {
              num++
            }
          }
          if (num !== list[a].brands.length) {
            initialList.push(list[a].letter)
            chooseList.push({ letter: list[a].letter })
            chooseList.push({ brands: brandsList })
          }
          brandsList = []
          num = 0
        }
        me.list = chooseList
        me.initial = initialList
      })
      .catch(err => {
        throw new Error(err)
      })
  },
  methods: {
    getBrandId(brand) {
      this.brandId = brand.id
      this.$emit('getFatherbrandId', brand)
    },
    isInArray(value) {
      var me = this
      for (var i = 0; i < me.hideBrands.length; i++) {
        if (value === me.hideBrands[i]) {
          return false
        }
      }
      return true
    }
  }
}
</script>

<style lang="scss">
.c3-car-brand {
    position: absolute;
    top: 0;
    background-color: #fff;
    width: 212px;
    height: 470px;
    border: 1px solid #f60;
    z-index: 1000;
    overflow: auto;
    font: 14px/1.5 "microsoft yahei", Arial, sans-serif;
    .car-brands-title {
        text-align: center;
        color: #f60;
        margin: 10px 0;
        font-size: 16px;
    }
    .gray {
        background: #e3e3e3;
        text-align: center;
        font-size: 12px;
    }
    .car-brands-name {
        display: block;
        padding-left: 8px;
        height: 25px;
        line-height: 25px;
        font-size: 12px;
        text-align: left;
        cursor: pointer;
        border-bottom: 1px solid #f8f8f8;
    }
    .left-list {
        float: left;
        width: 16px;
        height: 100px;
        margin: 6px;
        padding-right: 10px;
    }
    .left-list > a {
        background: #ddd;
        border: 1px solid #fff;
        color: #333;
        float: left;
        height: 15px;
        line-height: 15px;
        margin-bottom: 1.5px;
        text-align: center;
        width: 15px;
        margin-top: 0.5px;
        font-size: 14px;
    }
    .right-list {
        float: left;
        height: 420px;
        width: 170px;
        background: #fff;
        margin-right: 1px;
        overflow-x: hidden;
    }
    .orange {
        background: #f60;
        color: #fff;
    }
}
</style>
