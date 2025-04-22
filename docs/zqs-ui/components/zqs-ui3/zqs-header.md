---
outline: deep
---

# zqs-header

系统顶部栏，包含logo图标，系统名称，个人头像，个人姓名，退出按钮

## 基础用法

通过四个参数实现头部渲染
<script setup>
import { ref } from 'vue';
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const logo = ref(''); // 左侧 Logo 图片路径
const systemName = ref('ZQS'); // 系统名称
const avatar = ref(''); // 右侧头像图片路径
const username = ref('竹秋拾'); // 用户名

// 退出逻辑
const handleLogout = () => {
  proxy.$alert({
    size: 'medium', // 可选大小：small, medium, large
    message: '已退出登录', // 提示内容
    type: 'success', // 可选类型：success, warning, error, info
    duration: 3000 // 自动关闭时间，单位毫秒
  });
};
</script>

<zqs-header
  :logo="logo"
  :system-name="systemName"
  :avatar="avatar"
  :username="username"
  @logout="handleLogout"
></zqs-header>

## 示例代码

以下是一个使用 `zqs-header` 组件的示例代码：

```vue
<script setup>
import { ref } from 'vue';

const logo = ref('/ker.png'); // 左侧 Logo 图片路径
const systemName = ref('智慧'); // 系统名称
const avatar = ref('/ker.png'); // 右侧头像图片路径
const username = ref('竹秋拾'); // 用户名

// 退出逻辑
const handleLogout = () => {
  alert('用户已退出登录');
};
</script>

<template>
  <zqs-header
    :logo="logo"
    :system-name="systemName"
    :avatar="avatar"
    :username="username"
    @logout="handleLogout"
  ></zqs-header>
</template>
```

## 属性说明

| 属性名       | 类型   | 默认值      | 描述                     |
|--------------|--------|-------------|--------------------------|
| `logo`       | String | `''`        | 左侧 Logo 图片路径        |
| `systemName` | String | `''`        | 系统名称                 |
| `avatar`     | String | `''`        | 右侧头像图片路径          |
| `username`   | String | `''`        | 用户名                   |

## 使用方法

1. 在组件中引入 `zqs-header`。
2. 配置所需的属性，如 `logo`、`systemName`、`avatar` 和 `username`。
3. 绑定 `@logout` 事件以处理退出逻辑。

<GiscusComment />