---
outline: deep
---

# zqs-alert

用于主动操作后的反馈提示

## 基础用法
<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

function showAlert() {
  proxy.$alert({
    size: 'small', // 可选大小：small, medium, large
    message: '这是一个警告消息！', // 提示内容
    type: 'warning', // 可选类型：success, warning, error, info
    duration: 3000 // 自动关闭时间，单位毫秒
  });
}
</script>

<zqs-button @click="showAlert" type="primary">显示 Alert</zqs-button>

## 示例代码

以下是一个使用 `zqs-alert` 组件的示例script
```vue
<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

function showAlert() {
  proxy.$alert({
    size: 'small', // 可选大小：small, medium, large
    message: '这是一个警告消息！', // 提示内容
    type: 'success', // 可选类型：success, warning, error, info
    duration: 3000 // 自动关闭时间，单位毫秒
  });
}
</script>

<template>
  <button @click="showAlert">显示 Alert</button>
</template>

<style scoped>
</style>
```

## 属性说明

| 属性名    | 类型   | 默认值   | 描述                     |
|-----------|--------|----------|--------------------------|
| `size`    | String | `medium` | 弹窗的大小，可选值：`small`, `medium`, `large` |
| `type`    | String | `info`   | 弹窗的类型，可选值：`success`, `warning`, `error`, `info` |
| `message` | String | `''`     | 弹窗的内容               |
| `duration`| Number | `3000`   | 自动关闭时间，单位毫秒    |

## 使用方法

1. 在组件中引入 `zqs-alert`。
2. 调用 `proxy.$alert` 方法，传入所需的属性配置。
3. 点击按钮即可触发弹窗显示。style11

<GiscusComment />