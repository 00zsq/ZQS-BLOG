# zqs-backTop

## 示例代码

以下是一个使用 `zqs-backTop` 组件的示例代码：

```vue
<template>
  <div>
    <zqs-backTop 
      visibility-height="200"
      :right="'40px'"
      :bottom="40px"
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

| 属性名            | 类型   | 默认值 | 描述                                         |
|-------------------|--------|--------|----------------------------------------------|
| `visibility-height` | Number | `200`  | 滚动高度达到该值时，按钮才会显示               |
| `right`           | String | `40px` | 按钮距离页面右侧的距离                        |
| `bottom`          | String | `40px` | 按钮距离页面底部的距离                        |

## 使用方法

1. 在组件中引入 `zqs-backTop`。
2. 配置所需的属性，例如 `visibility-height`、`right` 和 `bottom`。
3. 页面滚动到指定高度后，点击按钮即可返回顶部。

<GiscusComment />