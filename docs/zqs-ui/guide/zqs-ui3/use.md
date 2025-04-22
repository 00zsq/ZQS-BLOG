# 快速开始
本节将介绍如何在项目中使用 ZQS-UI

## 用法

### 完整导入
如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

::: code-group

```js [main.js]
import { createApp } from 'vue'
import App from './App.vue'

// 全局引入组件库
import ZqsUI3 from 'zqs-ui3'
import 'zqs-ui3/dist/zqs-ui3.css' // 引入样式

const app = createApp(App)
app.use(ZqsUI3)
app.mount('#app')
```

:::

### 按需引入
您需要手动导入要使用的组件。但是样式还是需要全部引入。

::: code-group

```bash
pnpm add -D unplugin-vue-components unplugin-auto-import
```

```js [App.vue]
<script setup>
import { ZqsHeader } from 'zqs-ui3'
import 'zqs-ui3/dist/zqs-ui3.css'
</script>

<template>
  <zqs-header></zqs-header>
</template>

<style scoped>
div {
  height: 2000px;
}
</style>
```

:::

## 开始使用
现在你可以启动项目了。对于每个组件的用法，请查阅对应的独立文档。