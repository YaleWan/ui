````html demo:vue
<template>
    <div class='car-selector'>
         <el-input
            v-model="myModel"
            @focus="inputFocus"
        />
         <car-selector
            :theme-color="'#409EFF'"
            :direction="direction"
            :list-show="listShow"
            :hide-brands="hideBrandsList"
            @callback="modelSelectallBack"
            @close="closeModelSelect"
        />
    </div>
</template>
<script>
    export default {
        data() {
            return {
                myModel:'',
                myModelId:'',
                listShow: false,
                direction: 'left',
                hideBrandsList: [],
            };
        },
        methods:{
            // 车型选择器的回调
            modelSelectallBack(data) {
                this.myModel = data.name
                this.myModelId = data.id
                this.listShow = !this.listShow
            },
            // 关闭车型选择器
            closeModelSelect() {
                var me = this
                me.listShow = false
            },
            // 输入框foucus的时候打开车型选择器
            inputFocus() {
                this.listShow = true
            },
        }
    };
</script>
````
<style data-demo="vue">
  .car-selector {
    position:relative;
  }
</style>
