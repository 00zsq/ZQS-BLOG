# Vue Router 的 Hash 模式与 History 模式详解

## 1. 什么是 Hash 模式？

Hash 模式是 Vue Router 的默认路由模式。它的 URL 中会带有一个 `#` 符号，`#` 后面的部分被称为哈希值，用于表示路由路径。

### 1. Hash 模式的 URL 示例

假设我们有以下路由配置：

```javascript
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
];
```

使用 Hash 模式时，URL 会显示为以下形式：

- 首页：http://example.com/#/
- 关于页：http://example.com/#/about
- 联系页：http://example.com/#/contact

### 2. Hash 模式的特点

- **URL 中带有 `#` 符号**：`#` 后的内容不会发送到服务器，适合单页应用。
- **无需服务器配置**：完全由前端处理，服务器无需额外配置。
- **兼容性好**：支持所有浏览器，包括不支持 HTML5 History API 的旧浏览器。

### 3. 如何启用 Hash 模式

Hash 模式是 Vue Router 的默认模式，无需额外配置。如果需要显式声明，可以这样写：

```javascript
const router = new VueRouter({
  mode: 'hash', // 默认就是 hash 模式
  routes
});
```

---

## 2. 什么是 History 模式？

History 模式利用 HTML5 的 History API（如 `pushState`、`replaceState`）实现路由，URL 中没有 `#` 符号，看起来更加简洁和现代化。

### 1. History 模式的 URL 示例

同样以上述路由配置为例，使用 History 模式时，URL 会显示为以下形式：

- 首页：http://example.com/
- 关于页：http://example.com/about
- 联系页：http://example.com/contact

### 2. History 模式的特点

- **URL 中无 `#` 符号**：URL 更加简洁，符合传统 URL 格式。
- **需要服务器支持**：由于路径是真实的 URL，刷新页面时服务器需要正确返回 `index.html`，否则会返回 404 错误。
- **现代浏览器支持**：需要浏览器支持 HTML5 History API（现代浏览器均支持）。

### 3. 如何启用 History 模式

在 Vue Router 中启用 History 模式，只需将 `mode` 设置为 `history`：

```javascript
const router = new VueRouter({
  mode: 'history', // 使用 history 模式
  routes
});
```


## 2. Hash 模式与 History 模式的对比

| 特性           | Hash 模式                          | History 模式                     |
|----------------|------------------------------------|-----------------------------------|
| **URL 格式**   | 带 `#`，如 `http://example.com/#/about` | 无 `#`，如 `http://example.com/about` |
| **服务器配置** | 无需额外配置                       | 需要配置回退规则，将所有路由指向 `index.html` |
| **兼容性**     | 兼容所有浏览器，包括旧浏览器       | 需要支持 HTML5 History API 的浏览器（现代浏览器均支持） |
| **SEO 友好性** | 较差（搜索引擎可能忽略 `#` 后的内容） | 较好（URL 更友好，有利于 SEO）   |
| **适用场景**   | 简单应用、旧浏览器支持             | 现代应用、需要干净的 URL         |

---

## 4. 如何选择适合的模式？

- **Hash 模式**：适合简单的单页应用，或需要兼容旧浏览器的项目。开发和部署更加简单，无需额外配置服务器。
- **History 模式**：适合现代应用，尤其是对 URL 美观和 SEO 有较高要求的项目。虽然需要服务器配置，但能提供更好的用户体验和 SEO 效果。

---

## 5. 个人Oph-Diseases项目使用history
### 出现的问题有（是服务器部署问题）：
- 路由重定向有问题，登录过期无法退转到login，但是我写了重定向
[图片]
- 刷新之后404，也是写在onMounted生命周期钩子函数中出现的问题
- 游客因为只需要输入名称登录，但是如果输入空白直接回车会出404问题
### 原因：
- 使用的history模式，服务器部署出现的错误，交给服务器重新部署之后解决了问题

## 6. 掘金原文
[点击跳转](https://juejin.cn/post/7493798605658112041?searchId=2025041821435276C06F1BD2408DFEC057)
<GiscusComment />