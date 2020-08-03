
## 无网络的缺省图

## 使用方式
````html demo:vue
<template>
    <no-network class='no-network' @reload='reload'/>
</template>
<script>
     export default {
        data() {
            return {
                visible: false
            };
        },
        methods:{
            reload(){
                this.getData()
            },
            getData(){
                console.log(123)
                // 获取数据
            }
        }
    };
</script>
````
<style data-demo="vue">
  .no-network {
    width:667px;
  }
</style>
## Events
|  参数 |	说明	|类型   | 可选值  |
|------| --------|------| --------|
|  reload |	点击重新加载获取数据	| function   | 必须  |


