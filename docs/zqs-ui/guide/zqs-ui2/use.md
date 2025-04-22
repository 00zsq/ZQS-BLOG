# 快速开始
本节将介绍如何在项目中使用 ZQS-UI

## 用法

### 完整导入
如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

::: code-group

```js [main.js]
import Vue from 'vue'
import App from './App.vue'

// 全局引入 zqs-ui2
import ZqsUI2 from 'zqs-ui2'
import 'zqs-ui2/dist/style.css' // 引入样式

Vue.config.productionTip = false

Vue.use(ZqsUI2) // 注册组件库

new Vue({
  render: (h) => h(App),
}).$mount('#app')
```

:::

### 按需引入
您需要手动导入要使用的组件。但是样式还是需要全部引入。

::: code-group

```bash
npm install babel-plugin-import --save-dev
```

```js [App.vue]
<template>
  <div>
    <zqs-button type="success">按需按钮</zqs-button>
    <zqs-input v-model="inputValue" placeholder="请输入内容" />
  </div>
</template>

<script>
import { ZqsButton, ZqsInput } from 'zqs-ui2'; // 从入口文件按需导入组件
import 'zqs-ui2/dist/style.css'; // 引入全局样式

export default {
  components: {
    ZqsButton,
    ZqsInput,
  },
  data() {
    return {
      inputValue: '',
    };
  },
};
</script>
```

:::

## 开始使用
现在你可以启动项目了。对于每个组件的用法，请查阅对应的独立文档。