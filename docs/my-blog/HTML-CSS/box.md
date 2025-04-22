# 盒模型

盒模型由四个部分组成：`margin`、`border`、`padding` 和 `content`。

## 1. 标准盒模型与 IE 盒模型的区别
- **标准盒模型**：`width` 和 `height` 仅包含 `content` 部分。
- **IE 盒模型**：`width` 和 `height` 包含 `content`、`border` 和 `padding`。

## 2. 修改盒模型
通过设置元素的 `box-sizing` 属性可以切换盒模型：
- `box-sizing: content-box`：表示标准盒模型（默认值）。
- `box-sizing: border-box`：表示 IE 盒模型。
<GiscusComment />