````html demo:vue
<template>
    <div>
         <el-button @click='showVinKeyboard=true'>click</el-button>
         <test-component
                v-show="showVinKeyboard"
                :isCanSearch="canSearch"
                sureBtnText="确定"
                @showPasteDialog="showPasteDialog"
                @deleteFn="deleteFn"
                @searchFn="closeKeyb"
                @closeKeyb="closeKeyb"
            >
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showVinKeyboard: false,
                canSearch: false,
            };
        },
        methods:{
            showPasteDialog() {
                this.pasteDialog = true;
                this.closeKeyb();
            },
            //键盘事件
            closeKeyb() {
                this.showVinKeyboard = false;
                // this.overFlow = false;
            },
            // vin删除事件
            deleteFn() {
                this.vin = '';
            },
        }
    };
</script>
````
