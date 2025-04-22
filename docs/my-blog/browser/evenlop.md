# 事件循环

主要知识点有
- 消息队列与事件循环
- 微任务队列和宏任务队列
- 浏览器渲染线程的配合

## 1. 任务队列

```javascript
console.info("1");
new Promise((resolve) => {
  resolve();
  console.info("2");
}).then(() => {
  console.info("3");
});
setTimeout(() => {
  console.info("4");
}, 0);
console.info("5");

1
2
5
3
4
```

### 解释
1. **同步任务执行**  
   JavaScript 是单线程的，首先会按顺序执行同步代码：  
   - `console.info("1")`：立即输出 `1`。  
   - `new Promise(...)`：Promise 构造函数中的回调是同步执行的，所以会立即执行 `resolve()` 和 `console.info("2")`，输出 `2`。  
   - `setTimeout(...)`：将回调函数放入宏任务队列（MacroTask Queue），等待执行。  
   - `console.info("5")`：立即输出 `5`。  

   此时，同步代码执行完毕，输出顺序为 `1, 2, 5`。

2. **微任务队列（MicroTask Queue）**  
   同步代码执行完后，事件循环会检查微任务队列：  
   - Promise 的 `then` 回调（`() => { console.info("3"); }`）会被放入微任务队列。  
   - 由于微任务的优先级高于宏任务，事件循环会先执行微任务队列中的任务，输出 `3`。

3. **宏任务队列（MacroTask Queue）**  
   微任务队列清空后，事件循环会从宏任务队列中取出任务执行：  
   - `setTimeout` 的回调（`() => { console.info("4"); }`）被执行，输出 `4`。

## 2. 浏览器原理
- 笔记 15.15消息队列和事件循环：页面是怎么“活”起来的？
- [掘金文章](https://juejin.cn/post/7488927722774069257?searchId=20250418215812FA1A4D791FD39D31AD00)
<GiscusComment />