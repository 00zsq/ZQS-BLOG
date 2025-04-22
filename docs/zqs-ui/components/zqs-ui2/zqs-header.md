# zqs-header

## 示例代码

以下是一个使用 `zqs-header` 组件的示例代码：

```vue
<script>
export default {
  data() {
    return {
      systemName: 'logo',
      userName: 'ctt',
      logo: 'ker.png',
      avatar: 'ker.png',
    };
  },
  methods: {
    handleLogout() {
      // 处理登出逻辑
      console.log('Logout clicked');
    },
  },
};
</script>

<template>
  <zqs-header
    :logo="logo"
    :systemName="systemName"
    :avatar="avatar"
    :username="userName"
    @logout="handleLogout"
  />
</template>

<style scoped>
</style>
```

## 属性说明

| 属性名       | 类型   | 默认值   | 描述                     |
|--------------|--------|----------|--------------------------|
| `logo`       | String | `''`     | 系统的 logo 图片路径      |
| `systemName` | String | `''`     | 系统名称                 |
| `avatar`     | String | `''`     | 用户头像图片路径         |
| `username`   | String | `''`     | 用户名                   |

## 使用方法

1. 在组件中引入 `zqs-header`。
2. 配置所需的属性，如 `logo`、`systemName`、`avatar` 和 `username`。
3. 绑定登出事件，通过 `@logout` 捕获登出操作。

<GiscusComment />