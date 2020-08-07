## 车型选择器
````html demo:vue
<template>
    <div class='car-selector'>
         <el-input
            v-model="myModel"
            @focus="inputFocus"
            style='width:200px'
            placeholder='获取焦点时打开车型选择器'
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


## Options

|  参数 |	说明	|类型   | 可选值  |默认
|------| --------|------| --------|--------|
|  bgcolor  |	背景颜色	| string   | -  |#fff|
| themeColor  |	主题颜色	| String   | -  |#f60|
|  textColor  |	文字颜色	| String   | -  |#000|
|  direction  |	左右展开	| String   | left/right  |-|
|  listShow  |	是否展开列表	| Boolean   | false/true  |-|
|  hideBrands |	不显示的字段([车型id,车型id])	| array   | -  | - |

## Events


|  参数 |	说明	|类型   | 可选值  |
|------| --------|------| --------|
|  callBack |	选择车型回调	| function   | 必须  |
|  close |	关闭弹窗	| function   | 必须  |
