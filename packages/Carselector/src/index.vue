<template>
  <div id="carSelectList">
    <CarBrandId
      v-if="listShow"
      :direction="direction"
      :bgcolor="bgcolor"
      :theme-color="themeColor"
      :text-color="textColor"
      :hide-brands="hideBrands"
      @getFatherbrandId="getFatherbrandId"
    />
    <CarSeriesId
      v-if="brandListShow && listShow"
      :direction="direction"
      :brand-id="brandId"
      :bgcolor="bgcolor"
      :theme-color="themeColor"
      :text-color="textColor"
      @getFatherSeries="getFatherSeries"
    />
    <CarModelsId
      v-if="modelsListShow && listShow"
      :direction="direction"
      :series-id="seriesId"
      :bgcolor="bgcolor"
      :theme-color="themeColor"
      :text-color="textColor"
      @getFatherModel="getFatherModel"
    />
    <div v-if="listShow" id="mask" @click="close()" />
  </div>
</template>
<script>
import CarModelsId from "./CarModelsId";
import CarBrandId from "./CarBrandId";
import CarSeriesId from "./CarSeriesId";

export default {
  name: "CarSelector",
  components: {
    CarModelsId,
    CarBrandId,
    CarSeriesId
  },
  props: {
    listShow: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: "left"
    },
    bgcolor: {
      type: String,
      default: "#fff"
    },
    themeColor: {
      type: String,
      default: "#f60"
    },
    textColor: {
      type: String,
      default: "#000"
    },
    hideBrands: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      brandId: "",
      brandName: "",
      seriesId: "",
      seriesName: "",
      brandListShow: false,
      modelsListShow: false
    };
  },
  computed: {},
  created: function() {
    this.css(
      "#carSelectList .left-list>a:hover {background: " + this.themeColor + ";}"
    );
    this.css(
      "#carSelectList .right-list>a:hover {background: " +
        this.themeColor +
        ";}"
    );
    this.css("#carSelectList .orange {background: " + this.themeColor + ";}");
  },
  methods: {
    getFatherbrandId(brand) {
      var me = this;
      me.brandListShow = false;
      me.modelsListShow = false;
      setTimeout(function() {
        me.brandListShow = true;
        me.brandId = brand.id;
        me.brandName = brand.name;
      }, 100);
    },
    getFatherSeries(series) {
      var me = this;
      me.modelsListShow = false;
      setTimeout(function() {
        me.modelsListShow = true;
        me.seriesId = series.id;
        me.seriesName = series.name;
      }, 100);
    },
    getFatherModel(models) {
      var me = this;
      me.modelsListShow = false;
      me.brandListShow = false;
      models.brandId = me.brandId;
      models.brandName = me.brandName;
      models.seriesId = me.seriesId;
      models.seriesName = me.seriesName;
      this.$emit("callback", models);
    },
    close() {
      var me = this;
      me.modelsListShow = false;
      me.brandListShow = false;
      this.$emit("close");
    },
    css(t, s) {
      s = document.createElement("style");
      s.innerText = t;
      document.body.appendChild(s);
    }
  }
};
</script>
<style>
a {
  font-family: inherit;
  text-decoration: none;
  color: inherit;
  outline: none;
}
#mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.left-list > a:hover {
  background: #f60;
  color: #fff;
}
.right-list > a:hover {
  background: #f60;
  color: #fff;
}

.c3-car-selector {
  font-size: 14px;
}

.c3-car-selector * {
  box-sizing: border-box;
}
</style>
