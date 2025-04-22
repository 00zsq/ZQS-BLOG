# zqs-alert
## 示例代码

以下是一个使用 `zqs-alert` 组件的示例代码：

```vue
<script>
export default {
  methods: {
    showAlert() {
      this.$alert({
        size: 'medium', // 可选大小：small, medium, large
        message: '这是一个动态 Alert 弹窗',
        type: 'warning', // 可选类型：success, warning, error, info
      });
    }
  }
}
</script>

<template>
  <button @click="showAlert">显示 Alert</button>
</template>

<style scoped>
</style>
```

## 属性说明

| 属性名  | 类型   | 默认值   | 描述                     |
|---------|--------|----------|--------------------------|
| `size`  | String | `medium` | 弹窗的大小，可选值：`small`, `medium`, `large` |
| `type`  | String | `info`   | 弹窗的类型，可选值：`success`, `warning`, `error`, `info` |
| `message` | String | `''`   | 弹窗的内容               |

## 使用方法

1. 在组件中引入 `zqs-alert`。
2. 调用 `this.$alert` 方法，传入所需的属性配置。
3. 点击按钮即可触发弹窗显示。

<GiscusComment />