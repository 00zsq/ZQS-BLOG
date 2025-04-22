# 数组扁平化


```javascript
function flatten(arr) {
  // 如果存在数组元素
  while (arr.some(item => Array.isArray(item))) {
    console.log(...arr);
    // 将数组元素展开并拼接为一个新数组
    arr = [].concat(...arr);
    console.log(arr);
  }
  return arr;
}

// 示例调用
const arr = [1, [2, [3, [4]]]];
console.log(flatten(arr)); // 输出: [1, 2, 3, 4]
```

通过循环检查数组中是否存在嵌套数组 (`Array.isArray(item)`)，如果存在，则使用 `[].concat(...arr)` 将其展开，直到数组完全扁平化
<GiscusComment />