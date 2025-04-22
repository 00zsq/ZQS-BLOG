# zqs-input

## 示例代码

以下是一个使用 `zqs-input` 组件的示例代码：

```vue
<script>
export default {
  data() {
    return {
      username: '' // 定义响应式数据
    };
  }
};
</script>

<template>
  <zqs-input 
    type="text" 
    placeholder="请输入用户名" 
    name="username"
    v-model="username"
  />
</template>

<style scoped>
</style>
```

## 属性说明

| 属性名    | 类型   | 默认值   | 描述                                   |
|-----------|--------|----------|----------------------------------------|
| `type`    | String | `text`   | 输入框的类型，可选值：`text`, `password`, `email` 等 |
| `placeholder` | String | `''`   | 输入框的占位符文本                     |
| `name`    | String | `''`     | 输入框的名称                           |
| `v-model` | Any    | `''`     | 双向绑定的值                           |

## 使用方法

1. 在组件中引入 `zqs-input`。
2. 在模板中使用 `<zqs-input>` 标签，配置所需的属性。
3. 使用 `v-model` 实现数据的双向绑定。

<GiscusComment />