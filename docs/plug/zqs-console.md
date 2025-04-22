# zqs-console

## 安装
我们建议您使用包管理器（如 `npm`、`yarn` 或 `pnpm`）安装 `zqs-console`，然后可以在项目中使用。


选择一个你喜欢的包管理器
::: code-group

```sh [yarn]
#查询pnpm版本
yarn add zqs-console
```
```sh [npm]
#查询pnpm版本
npm install zqs-console
```

```sh [pnpm]
#查询pnpm版本
pnpm install zqs-console
```
:::



## 用法

::: code-group

```js [main.js]
zqs_console.run('warn("用户登录")', '', 20);
```
:::

## 参数说明

| 属性名    | 类型   | 默认值   | 描述                     |
|-----------|--------|----------|--------------------------|
| `code`    | String | `console.` | 控制台打印类型以及内容 |
| `filename`    | String | 获取文件根路径   | 文件名 |
| `lineNumber` | Number | `0`     | 代码行数 |
<GiscusComment />