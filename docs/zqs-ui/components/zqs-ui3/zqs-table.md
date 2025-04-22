---
outline: deep
---


# zqs-table

用于展示多条结构类似的数据

## 基础用法

<script setup>
import { ref } from 'vue';

const tableHeader = [
  { value: 'id', label: 'ID' },
  { value: 'name', label: '姓名' },
  { value: 'age', label: '年龄' },
  { value: 'gender', label: '性别' },
  { value: 'address', label: '住址' },
];

const tableData = ref([
  {
    id: 1,
    name: '张三',
    age: 18,
    gender: '男',
    address: '北京市朝阳区',
  },
  {
    id: 1,
    name: '张三',
    age: 18,
    gender: '男',
    address: '北京市朝阳区',
  },
]);
</script>

<zqs-table :data="tableData" :columns="tableHeader" width="800px" :stript=true></zqs-table>

## 示例代码

以下是一个使用 `zqs-table` 组件的示例代码：

```vue
<script setup>
import { ref } from 'vue';

const tableHeader = [
  { value: 'id', label: 'ID' },
  { value: 'name', label: '姓名' },
  { value: 'age', label: '年龄' },
  { value: 'gender', label: '性别' },
  { value: 'address', label: '住址' },
];

const tableData = ref([
  {
    id: 1,
    name: '张三',
    age: 18,
    gender: '男',
    address: '北京市朝阳区',
  },
  // 假设你会动态填充数据
]);
</script>

<template>
  <zqs-table :data="tableData" :columns="tableHeader" width="800px" :stript=false></zqs-table>
</template>
```

## 属性说明

| 属性名   | 类型   | 默认值 | 描述                     |
|----------|--------|--------|--------------------------|
| `data`   | Array  | `[]`   | 表格的数据源             |
| `columns`| Array  | `[]`   | 表格的列配置             |
| `width`  | String | `auto` | 表格的宽度，支持像素或百分比 |
| `stript`  | Boolean | `true` | 可以创建带斑马纹的表格,如果 `true`, 表格将会带有斑马纹|

## 使用方法

1. 在组件中引入 `zqs-table`。
2. 配置表格的 `columns` 和 `data` 属性。
3. 在模板中使用 `<zqs-table>` 标签，传入所需的属性配置。

<GiscusComment />