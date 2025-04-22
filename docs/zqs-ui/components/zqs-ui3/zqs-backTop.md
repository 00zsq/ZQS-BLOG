---
outline: deep
---

# zqs-backTop

用于返回到页面顶部的操作按钮

## 基础用法

通过滑动查看右下角按钮
<zqs-backTop 
  :visibilityHeight="100"
  :right="'50px'"
  :bottom="'50px'"
></zqs-backTop>

## 示例代码

以下是一个使用 `zqs-backTop` 组件的示例代码：

```vue
<template>
  <div>
    <zqs-backTop 
      target="div" 
      visibilityHeight="100"
      :right="'50px'"
      :bottom="'50px'"
    ></zqs-backTop>
  </div>
</template>

<style scoped>
div {
  height: 2000px;
}
</style>
```

## 属性说明

| 属性名            | 类型   | 默认值 | 描述                                   |
|-------------------|--------|--------|----------------------------------------|
| `target`          | String | `''`   | 挂载节点                               |
| `visibilityHeight`| Number | `100`  | 滚动出现范围                           |
| `:right`          | String | `'50px'` | 位于右下角的水平距离                   |
| `:bottom`         | String | `'50px'` | 位于右下角的垂直距离                   |

## 使用方法

1. 在组件中引入 `zqs-backTop`。
2. 配置所需的属性，如 `target`、`visibilityHeight` 等。
3. 滚动页面到指定范围后，点击按钮即可返回顶部。

<GiscusComment />