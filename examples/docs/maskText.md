
## B端公共下载头部

````html demo:vue
<template>
     <mask-text
        :navList="navList"
        navListId='1'
        activeColor='#ff0000'
        class='tabs'
    />
</template>
<script>
     export default {
        data() {
            return {
                navList: [
                    {
                        id: "1",
                        name: "奔驰",
                    },
                    {
                        id: "2",
                        name: "宝马",
                    },
                    {
                        id: "3",
                        name: "奥迪",
                    },
                ],
            };
        },
        methods:{
        }
    };
</script>
````