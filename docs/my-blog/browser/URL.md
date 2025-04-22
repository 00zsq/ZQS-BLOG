# 页面从 URL 输入到渲染完成的全过程

以下是一个页面从输入 URL 到渲染完成的关键步骤：

## 1. URL 解析
浏览器解析 URL，提取以下信息：
- 协议（如 `http`/`https`）
- 主机名（如 `www.example.com`）
- 端口号（默认 `80`/`443`）
- 路径和查询参数

## 2. DNS 解析
通过 DNS 查询将域名转换为 IP 地址，查询顺序如下：
1. 浏览器缓存
2. 操作系统缓存
3. 路由器缓存
4. ISP DNS 缓存
5. 递归查询根 DNS 服务器  
例如：`www.baidu.com` 解析为 `220.181.38.150`

## 3. 建立 TCP 连接
通过三次握手建立 TCP 连接：
1. 客户端发送 `SYN=1, Seq=x`
2. 服务端返回 `SYN=1, ACK=1, Seq=y, Ack=x+1`
3. 客户端发送 `ACK=1, Seq=x+1, Ack=y+1`  
若为 HTTPS，还需进行 TLS 握手协商加密。

## 4. 发送 HTTP 请求
浏览器发送 HTTP 请求，包括：
- 请求行（如 `GET /index.html HTTP/1.1`）
- 请求头（如 `Host`、`User-Agent`）
- 请求体（如 POST 数据）

## 5. 服务器处理响应
服务器处理请求后返回：
- 状态行（如 `HTTP/1.1 200 OK`）
- 响应头（如 `Content-Type`）
- 响应体（HTML 内容）

## 6. 浏览器渲染流程
1. **构建 DOM 树**：解析 HTML 生成文档对象模型。
2. **构建 CSSOM**：解析 CSS 样式表。
3. **生成渲染树**：合并 DOM 和 CSSOM，排除不可见元素。
4. **布局（Layout）**：计算元素的精确位置和大小。
5. **绘制（Painting）**：将渲染树转换为屏幕像素。
6. **合成（Compositing）**：分层绘制以优化性能。

## 7. 加载子资源
解析 HTML 时，遇到 `<img>`、`<script>` 等标签会发起新的 HTTP 请求加载资源，可能触发重排（Reflow）和重绘（Repaint）。

## 8. JavaScript 执行
- 同步脚本会阻塞 DOM 解析。
- 异步脚本（如 `async`/`defer`）按特定时机执行。

整个过程涉及浏览器多线程协作（如 GUI 渲染线程、JS 引擎线程、HTTP 请求线程等）。现代浏览器还通过预加载扫描器（Preload Scanner）优化资源加载。
<GiscusComment />