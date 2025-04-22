---
outline: deep
---


# zqs-input

通过鼠标或键盘输入字符

## 基本用法

<script setup>
import { ref } from 'vue';

const username = ref(''); // 定义一个响应式变量 username
</script>

<zqs-input 
  type="text" 
  placeholder="请输入用户名" 
  name="username"
  v-model="username"
/>


## 示例代码

以下是一个使用 `zqs-input` 组件的示例代码：

```vue
<script setup>
import { ref } from 'vue';

const username = ref(''); // 定义一个响应式变量 username
</script>

<template>
  <zqs-input 
    type="text" 
    placeholder="请输入用户名" 
    name="username"
    v-model="username"
  />
</template>
```

## 属性说明

| 属性名      | 类型    | 默认值   | 描述                                   |
|-------------|---------|----------|----------------------------------------|
| `type`      | String  | 无       | 输入框的类型，例如 `text`、`password`、`email` 等。 |
| `placeholder` | String | 无       | 输入框的占位符文本。                   |
| `disabled`  | Boolean | `false`  | 是否禁用输入框，`true` 为禁用状态。     |
| `name`      | String  | `''`     | 输入框的名称属性，用于表单提交时标识该输入框。 |
| `modelValue` | String | `''`     | 输入框的值，支持 `v-model` 双向绑定。   |

## 使用方法

1. 在组件中引入 `zqs-input`。
2. 配置所需的属性，例如 `type`、`placeholder` 等。
3. 使用 `v-model` 绑定输入框的值，实现双向数据绑定。

<GiscusComment />