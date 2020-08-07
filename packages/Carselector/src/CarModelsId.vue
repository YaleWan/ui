<template>
  <div
    id="car-models"
    class="c3-car-models"
    :style="
      direction + ':441px;background-color:' + bgcolor + ';border: 1px solid ' + themeColor
    "
  >
    <div class="car-models-title" :style="'color:' + themeColor">请选择车型</div>
    <div class="right-list" :style="'background-color:' + bgcolor + ';color:' + textColor">
      <template v-for="(group, yIndex) in list">
        <div :id="group.letter" :key="'year'+yIndex" class="gray">{{ group.key }}</div>
        <a
          v-for="(model, mIndex) in group.models"
          :key="'year'+yIndex + 'model'+mIndex"
          class="car-models-name"
          href="javascript:void(0)"
          @click="getModel(model)"
        >
          {{ model.short_name }}
          <span class="right-price">{{ parseFloat(model.price).toFixed(2) }}万</span>
        </a>
      </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CarModelsId',
  props: {
    seriesId: {
      type: String,
      default: 'models'
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
      model: ''
    }
  },
  created: function() {
    var me = this
    axios
      .get('https://open.che300.com/api/models/query/' + me.seriesId)
      .then(response => {
        me.list = response.data.data.list
      })
      .catch(err => {
        throw new Error(err)
      })
  },
  methods: {
    getModel(model) {
      this.model = model
      this.$emit('getFatherModel', model)
    }
  }
}
</script>

<style lang="scss">
.c3-car-models {
    position: absolute;
    top: 0;
    width: 411px;
    height: 470px;
    z-index: 1000;
    overflow: auto;
    font: 14px/1.5 "microsoft yahei", Arial, sans-serif;
    .car-models-title {
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
        width: 400px;
        background: #fff;
        margin: 0 10px;
        overflow-x: hidden;
    }
    .right-price {
        float: right;
    }
    .car-models-name {
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
