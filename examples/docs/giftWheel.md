## 转盘抽奖

````html demo:vue
<template>
    <gift-wheel
        :wheel-image="giftWheel.wheelImageUrl"
        :point-image="giftWheel.pointImageUrl"
        :rotating="giftWheel.rotating"
        :level="giftWheel.level"
        :level-list="giftWheel.levelList"
        :reset="giftWheel.reset"
        @start-rotating="startRotating"
        @stop-rotating="stopRotating"
        @click-point="clickPoint"
    />
</template>
<script>
    export default {
        data() {
            return {
                giftWheel: {
                    wheelImageUrl: "https://assets.che300.com/feimg/h5/activityDoubleTwelve/double-eleven-wheel.png",
                    pointImageUrl: "https://assets.che300.com/feimg/h5/activityDoubleTwelve/double-eleven-point.png",
                    rotating: false,
                    level: null,
                    levelList: [3, 6, 5, 1, 4, 2],
                    reset: true,
                },
            };
        },
        methods: {
            // 点击抽奖
            clickPoint() {
                this.giftWheel.level = Number(1);
                this.giftWheel.rotating = true;
            },
            // 开始转动的时候触发
            startRotating() {
                this.giftWheel.reset = false;
            },
            // 结束转动的时候触发
            stopRotating() {
                this.giftWheel.rotating = false;
            },
        },
    };
</script>
````

## Options

|  参数 |	说明	|类型   | 可选值  |
|------| --------|------| --------|
|  wheel-image |	轮盘图片	| string   | 必须  |
|  point-image |	轮盘指针图片	| String   | 必须  |
|  level |	级别	| number   | 必须  |
|  level-list |	级别数组	| Arrary   | 必须  |
|  rotating |	是否旋转	| Boolean   | 必须  |
|  reset |	是否重置	| Boolean   | 必须  |

## Events


|  参数 |	说明	|类型   | 可选值  |
|------| --------|------| --------|
|  stop-rotating |	停止转动	| function   | 必须  |
|  start-rotating |	开始转动	| function   | 必须  |
|  click-point |	点击指针的方法	| function   | 必须  |
