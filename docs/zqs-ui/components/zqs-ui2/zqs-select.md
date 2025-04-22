# zqs-select 与 zqs-option

## 示例代码

以下是一个使用 `zqs-select` 和 `zqs-option` 组件的示例代码：

```vue
<script>
export default {
  data() {
    return {
      selectedValue: "",
      options: [
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
        { value: "3", label: "Option 3" },
      ],
    };
  },
};
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
| `v-model`   | String | `''`   | 绑定的值，表示选中的选项 |

### zqs-option

| 属性名      | 类型   | 默认值 | 描述                     |
|-------------|--------|--------|--------------------------|
| `label`     | String | `''`   | 选项的显示文本           |
| `value`     | String | `''`   | 选项的值                 |

## 使用方法

1. 在组件中引入 `zqs-select` 和 `zqs-option`。
2. 使用 `zqs-select` 包裹多个 `zqs-option`，并通过 `v-model` 绑定选中的值。
3. 配置 `zqs-option` 的 `label` 和 `value` 属性。

<GiscusComment />