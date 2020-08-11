## 快速上手

本节将介绍如何在项目中使用组件库。

### 引入 C3Ui

你可以引入整个 C3Ui，或是根据需要仅引入部分组件。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from "vue";
import C3Ui from "c3-ui";
import "c3-ui/lib/theme/index.css";
import App from "./App.vue";

Vue.use(C3Ui);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```

注意：样式文件需要单独引入。

#### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "c3-ui",
        "camel2Dash": false,
        "styleLibrary": {
          "name": "style",
          "base": false
        }
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 只需要引入素材通用模块中的 Content（latex 转义 html 解析），那么需要在 main.js 中写入以下内容：

```javascript
import Vue from "vue";
import { Input } from "c3-ui";
import App from "./App.vue";

Vue.use(Input)

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```
