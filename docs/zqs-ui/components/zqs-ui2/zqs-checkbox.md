# zqs-checkBox

## 示例代码

以下是一个使用 `zqs-checkBox` 组件的示例代码：

```vue
<script>
export default {
  data() {
    return {
      c1: true,
      c2: false
    };
  },
  methods: {
    updateC1(value) {
      this.c1 = value;
    },
    updateC2(value) {
      this.c2 = value;
    }
  }
};
</script>

<template>
  <div>
    <zqs-checkbox
      :value="c1"
      @input="updateC1"
    >
      option1
    </zqs-checkbox>
    <zqs-checkbox
      :value="c2"
      @input="updateC2"
    >
      option2
    </zqs-checkbox>
  </div>
</template>

<style scoped>
</style>
```

## 属性说明

| 属性名  | 类型    | 默认值  | 描述                     |
|---------|---------|---------|--------------------------|
| `value` | Boolean | `false` | 复选框的选中状态         |
| `label` | String  | `''`    | 复选框的显示文本         |

## 使用方法

1. 在组件中引入 `zqs-checkBox`。
2. 使用 `value` 属性绑定复选框的选中状态。
3. 通过 `@input` 事件监听状态变化并更新数据。

<GiscusComment />