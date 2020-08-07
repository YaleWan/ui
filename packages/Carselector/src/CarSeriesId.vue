<template>
  <div
    id="car-series"
    class="c3-car-series"
    :style="
      direction + ':213px;background-color:' + bgcolor + ';border: 1px solid ' + themeColor
    "
  >
    <div class="car-brands-title" :style="'color:' + themeColor">请选择车系</div>
    <div class="right-list" :style="'background-color:' + bgcolor + ';color:' + textColor">
      <template v-for="(group, gIndex) in list">
        <div :id="group.letter" :key="'group' + gIndex" class="gray">{{ group.key }}</div>
        <a
          v-for="(serie, sIndex) in group.series"
          :key="'group' + gIndex + 'series' + sIndex"
          :class="'car-brands-name ' + (serie.id == series ? 'orange' : '')"
          href="javascript:void(0)"
          @click="getSeriesId(serie)"
        >
          {{ serie.name }}
        </a>
      </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CarSeriesId',
  components: {},
  props: {
    brandId: {
      type: String,
      default: ''
    },
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
    }
  },
  data() {
    return {
      list: [],
      series: ''
    }
  },
  created: function() {
    var me = this
    axios
      .get('https://open.che300.com/api/series/query/' + me.brandId)
      .then(response => {
        me.list = response.data.data
      })
      .catch(err => {
        throw new Error(err)
      })
  },

  mounted: function() {},

  updated: function() {},
  methods: {
    getSeriesId(series) {
      this.series = series.id
      this.$emit('getFatherSeries', series)
    }
  }
}
</script>

<style lang="scss">
.c3-car-series {
    position: absolute;
    top: 0;
    background-color: #fff;
    width: 227px;
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
    .right-list {
        float: left;
        height: 420px;
        width: 210px;
        background: #fff;
        margin: 0 10px;
        overflow-x: hidden;
    }
    .orange {
        background: #f60;
        color: #fff;
    }
    .car-brands-name {
        text-align: left;
        display: block;
        padding-left: 8px;
        height: 25px;
        line-height: 25px;
        font-size: 12px;
        text-align: left;
        cursor: pointer;
        border-bottom: 1px solid #f8f8f8;
    }
}
</style>
