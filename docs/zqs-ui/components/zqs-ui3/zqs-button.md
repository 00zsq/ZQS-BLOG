---
outline: deep
---

# zqs-button

## 基础用法
使用`type`、`plain`、`round`和`circle`来定义按钮的样式。

<zqs-button style="margin-right: 10px;">默认</zqs-button>
<zqs-button type="success" style="margin-right: 10px;">success</zqs-button>
<zqs-button type="info" style="margin-right: 10px;">info</zqs-button>
<zqs-button type="warning" style="margin-right: 10px;">warning</zqs-button>
<zqs-button type="primary" style="margin-right: 10px;">primary</zqs-button>
<zqs-button type="danger" style="margin-right: 10px;">danger</zqs-button>
<zqs-button round style="margin-right: 10px;">round</zqs-button>
<zqs-button circle style="margin-top: 10px;">圆</zqs-button>
<zqs-button disabled style="margin-left: 10px;">禁用</zqs-button>

## 示例代码

以下是一个使用 `zqs-button` 组件的示例代码：

```vue
<script setup>
function handleClick() {
  console.log('Button clicked');
}
</script>

<template>
  <zqs-button type="primary" size="large" loading @click="handleClick">
    按钮
  </zqs-button>
</template>

<style scoped></style>
```

## 属性说明

| 属性名    | 类型    | 默认值    | 描述                                               |
| --------- | ------- | --------- | -------------------------------------------------- |
| `type`    | String  | `default` | 按钮的类型，可选值：`primary`, `default`, `danger`,`success`, `info`, `warning` |
| `plain`   | Boolean | `false`   | 是否为朴素按钮                                     |
| `round`   | Boolean | `false`   | 是否为圆角按钮                                     |
| `circle`  | Boolean | `false`   | 是否为圆形按钮                                     |
| `disabled`| Boolean | `false`   | 是否禁用按钮                                       |
| `size`    | String  | `medium`  | 按钮的大小，可选值：`small`, `medium`, `large`     |
| `loading` | Boolean | `false`   | 是否显示加载状态                                   |

## 使用方法

1. 在组件中引入 `zqs-button`。
2. 配置所需的属性，例如 `type`、`size` 和 `loading`。
3. 点击按钮即可触发绑定的事件。

<GiscusComment />