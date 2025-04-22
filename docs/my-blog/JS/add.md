# 实现 `add(1)(2)(3)`

实现 `add(1)(2)(3)` 的核心是通过 **函数柯里化** 和 **闭包** 来逐步收集参数，并在最终调用时返回累加结果。以下是几种实现方式：


## 1. 固定参数长度的简单实现

适用于参数数量固定的场景（如仅支持 3 个参数）：

```javascript
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
console.log(add(1)(2)(3)); // 6
```

**缺点**：无法灵活处理更多或更少的参数。

---

## 2. 通用柯里化实现（参数长度不固定）

通过重写 `toString` 或 `valueOf` 隐式转换，支持链式调用和自动求和：

```javascript
function add(m) {
  const temp = function(n) {
    return add(m + n); // 递归累加
  };
  temp.toString = () => m; // 隐式转换时返回当前累加值
  return temp;
}
console.log(add(1)(2)(3).toString()); // 6
console.log(add(1)(2)(3)(4).toString()); // 10
```

**原理**：  
- 每次调用返回一个新函数，闭包保存当前累加值 `m`。  
- 最终打印时触发 `toString`，返回累加结果。

---

## 3. 显式调用求和的版本

提供 `getResult` 方法显式获取结果，避免隐式转换的歧义：

```javascript
function add() {
  let args = [...arguments];
  const inner = function() {
    args.push(...arguments);
    return inner;
  };
  inner.getResult = () => args.reduce((a, b) => a + b, 0);
  return inner;
}
console.log(add(1)(2)(3).getResult()); // 6
```

**优势**：逻辑更清晰，适合需要明确触发计算的场景。

---

## 4. 支持混合调用（参数列表 + 链式）

结合参数列表和链式调用的灵活写法：

```javascript
function add() {
  let args = [...arguments];
  const _adder = function() {
    args.push(...arguments);
    return _adder;
  };
  _adder.toString = () => args.reduce((a, b) => a + b, 0);
  return _adder;
}
console.log(add(1, 2)(3).toString()); // 6
console.log(add(1)(2, 3)(4).toString()); // 10
```

**特点**：支持 `add(1, 2)(3)` 和 `add(1)(2)(3)` 等多种调用方式。

---

## 关键点总结

- **柯里化**：将多参数函数转换为单参数链式调用。
- **闭包**：保存中间状态（如累加值）。
- **隐式转换**：通过 `toString` 或 `valueOf` 实现自动求值。

根据需求选择合适方案，推荐 **通用柯里化实现**（方案 2）或 **显式调用版本**（方案 3）。
<GiscusComment />