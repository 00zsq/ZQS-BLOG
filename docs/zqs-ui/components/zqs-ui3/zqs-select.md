---
outline: deep
---

# zqs-select 与 zqs-option

使用下拉菜单展示并选择内容

## 基础用法

<script setup>
import { ref } from 'vue';

const selectedValue = ref("");
const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];
</script>

<zqs-select v-model="selectedValue">
  <zqs-option
    v-for="option in options"
    :label="option.label"
    :key="option.value"
    :value="option.value"
  />
</zqs-select>
<p>选中的值：{{ selectedValue }}</p>

## 示例代码

以下是一个使用 `zqs-select` 和 `zqs-option` 组件的示例代码：

```vue
<script setup>
import { ref } from 'vue';

const selectedValue = ref("");
const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];
</script>

<template>
  <div>
    <zqs-select v-model="selectedValue">
      <zqs-option
        v-for="option in options"
        :label="option.label"
        :key="option.value"
        :value="option.value"
      />
    </zqs-select>
    <p>选中的值：{{ selectedValue }}</p>
  </div>
</template>
```

## 属性说明

### zqs-select

| 属性名      | 类型   | 默认值 | 描述                     |
|-------------|--------|--------|--------------------------|
| `v-model`   | String | `''`   | 绑定的选中值             |

### zqs-option

| 属性名      | 类型   | 默认值 | 描述                     |
|-------------|--------|--------|--------------------------|
| `label`     | String | `''`   | 选项的显示文本           |
| `value`     | String | `''`   | 选项的实际值             |

## 使用方法

1. 在组件中引入 `zqs-select` 和 `zqs-option`。
2. 使用 `v-model` 绑定选中的值。
3. 使用 `zqs-option` 定义下拉选项。

<GiscusComment />