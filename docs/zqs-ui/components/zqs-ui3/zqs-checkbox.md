---
outline: deep
---

# zqs-checkbox

在一组备选项中多选

## 基础用法

<script setup>
import { ref } from 'vue'
const c1 = ref(false)
const c2 = ref(false)
</script>

<zqs-checkbox
  v-model="c1"
>
  option1
</zqs-checkbox>
<zqs-checkbox
  v-model="c2"
>
  option2
</zqs-checkbox>

## 示例代码

以下是一个使用 `zqs-checkbox` 组件的示例代码：

```vue
<script setup>
import { ref } from 'vue'
const c1 = ref(false)
const c2 = ref(false)
</script>

<template>
  <div>
    <zqs-checkbox
      v-model="c1"
    >
      option1
    </zqs-checkbox>
    <zqs-checkbox
      v-model="c2"
    >
      option2
    </zqs-checkbox>
  </div>
</template>
```

## 属性说明

| 属性名  | 类型    | 默认值 | 描述                                   |
|---------|---------|--------|----------------------------------------|
| `v-model` | Boolean | `false` | 绑定的值，表示复选框是否被选中         |

## 使用方法

1. 在组件中引入 `zqs-checkbox`。
2. 使用 `v-model` 绑定一个布尔值来控制复选框的选中状态。
3. 根据需要添加复选框的内容。

<GiscusComment />