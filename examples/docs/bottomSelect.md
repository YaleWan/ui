
## 底部选择器

````html demo:vue
<template>
     <el-button @click='showFeedbackSelect=true'>click</el-button>
     <bottom-select
            title="线索反馈"
            :selectArr="feedbackList"
            @on-select-value="selectFeedbackType"
            :showTransSelect="showFeedbackSelect"
            @on-change-show="changeShowFeedbackSelect"
    />
</template>
<script>
     export default {
        data() {
            return {
                feedbackList: [
                    {
                        id: "1",
                        name: "打不通",
                    },
                    {
                        id: "2",
                        name: "明确不卖车了",
                    },
                    {
                        id: "3",
                        name: "号码不存在",
                    },
                    {
                        id: "4",
                        name: "对方是车商",
                    },
                ],
                showFeedbackSelect: false,
            };
        },
        methods:{
            selectFeedbackType(item) {
                console.log(item);
            },
            changeShowFeedbackSelect(val) {
                this.showFeedbackSelect = val
            },
        }
    };
</script>
````
## Options

|  参数 |	说明	|类型   | 可选值  |
|------| --------|------| --------|
|  selectArr |	选项数据	| Array   | 必须  |
|  title |	标题	| String   | 必须  |
|  showTransSelect |	控制显示	| Boolean   | 必须  |

## Events


|  参数 |	说明	|类型   | 可选值  |
|------| --------|------| --------|
|  selectFeedbackType |	点击重新加载获取数据	| function   | 必须  |
|  selectFeedbackType |	点击重新加载获取数据	| function   | 必须  |