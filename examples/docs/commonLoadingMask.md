````html demo:vue
<template>
    <div>
        <el-button @click="showLoading">click</el-button>
        <common-loading-mask v-show="showPicLoading" />
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showPicLoading: false,
            };
        },
        methods: {
            showLoading() {
                this.showPicLoading = true;
                setTimeout(() => {this.showPicLoading = false}, 3000);
            },
        },
    };
</script>
````
