# zqs-button

## 示例代码

以下是一个使用 `zqs-button` 组件的示例代码：

```vue
<template>
  <zqs-button 
    type="primary" 
    plain 
    round 
    circle 
    disabled 
    size="large" 
    loading>
    按钮
  </zqs-button>
</template>
```

## 属性说明

| 属性名   | 类型   | 默认值   | 描述                                                                 |
|----------|--------|----------|----------------------------------------------------------------------|
| `type`   | String | `default` | 按钮的类型，可选值：`default`, `primary`, `success`, `warning`, `danger` |
| `plain`  | Boolean | `false` | 是否为朴素按钮                                                      |
| `round`  | Boolean | `false` | 是否为圆角按钮                                                      |
| `circle` | Boolean | `false` | 是否为圆形按钮                                                      |
| `disabled` | Boolean | `false` | 是否禁用按钮                                                      |
| `size`   | String | `medium` | 按钮的大小，可选值：`small`, `medium`, `large`                      |
| `loading` | Boolean | `false` | 是否显示加载状态                                                   |

## 使用方法

1. 在组件中引入 `zqs-button`。
2. 在模板中使用 `<zqs-button>` 标签，传入所需的属性配置。
3. 根据需要自定义按钮内容和样式。

<GiscusComment />