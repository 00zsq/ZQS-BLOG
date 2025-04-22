# 手写 `call()`、`apply()`、`bind()`

## 1. 手写 `call`

### 实现步骤

1. **检查调用者类型**：
  - 调用 `myCall` 方法时，首先检查调用该方法的对象是否为函数。使用 `typeof this !== "function"` 进行判断，如果不是函数，则抛出 `TypeError` 异常，提示 “Caller is not a function”。

2. **处理 `context` 参数**：
  - `context` 是指定的调用上下文对象，`call` 还能传递参数，我们使用 ES6 的 `rest` 参数。
  - 如果 `context` 为 `null` 或 `undefined`，则将其设置为全局对象 `globalThis`（在浏览器环境中是 `window`，在 Node.js 环境中是 `global`）。
  - 如果 `context` 不是 `null` 或 `undefined`，则使用 `Object()` 函数将其转换为对象类型。
  - 如果调用时没有传入额外的参数，`rest` 参数默认是一个空数组 `[]`。

3. **创建唯一属性名**：
  - 使用 `Symbol('temp')` 创建一个唯一的符号 `key`，作为临时属性名。`Symbol` 类型的属性名是唯一的，能避免与 `context` 对象已有的属性名冲突。

4. **将函数添加到 `context` 对象**：
  - 使用 `Object.defineProperty` 方法将当前调用 `myCall` 的函数（即 `this`）添加到 `context` 对象上，属性名就是之前创建的 `key`。
  - 设置该属性的 `enumerable` 为 `false`，这样在遍历 `context` 对象时，这个临时属性不会被访问到。

  > **注意**：有些版本的 `call` 实现不需要用到 `Object.defineProperty`，直接赋值即可。但在 Node 环境下，`console.log()` 打印 `this` 时会显示这个临时属性，而在浏览器环境下，无论是否可枚举，都会显示该属性。

5. **调用函数并获取结果**：
  - 使用 `try` 块调用 `context` 对象上的临时函数 `context[key]`，并将 `args` 展开作为参数传入。
  - 返回函数执行的结果。

6. **清理临时属性**：
  - 使用 `finally` 块确保无论函数执行是否出错，都会删除 `context` 对象上的临时属性 `context[key]`，避免污染 `context` 对象。

### 完整实现

```javascript
Function.prototype.myCall = function (context, ...args) {
   if (typeof this !== "function") {
      throw new TypeError("Caller is not a function");
   }
   context = (context === null || context === undefined) ? globalThis : Object(context);
   const key = Symbol('temp');
   Object.defineProperty(context, key, {
      value: this,
      enumerable: false
   });
   try {
      return context[key](...args);
   } finally {
      delete context[key];
   }
};
```

---

## 2. 手写 `apply`

### 实现步骤

- 实现 `apply` 与 `call` 的思路类似，但需要注意参数传递的方式。`apply` 是以数组作为第二个参数的，需要对 `args` 加以判断。
- 使用展开运算符 `...` 可以展开数组，但对 `undefined` 或 `null` 使用展开运算符会引发错误。

### 完整实现

```javascript
Function.prototype.myApply = function (context, args) {
   if (typeof this !== "function") {
      throw new TypeError("Caller is not a function");
   }
   if (!Array.isArray(args)) {
      throw new TypeError("The parameter must be an array");
   }
   args = args || [];
   context = (context === null || context === undefined) ? globalThis : Object(context);
   const key = Symbol('temp');
   context[key] = this;
   try {
      return context[key](...args);
   } finally {
      delete context[key];
   }
};
```

---

## 3. 手写 `bind`

### 实现步骤

1. **校验调用者**：
  - 调用者必须是函数。

2. **处理 `this` 绑定**：
  - 如果 `context` 为 `null` 或 `undefined`，绑定到全局对象。
  - 如果是基本类型，则转换为包装对象。
  - 如果是对象，直接使用。

3. **闭包保存关键变量**：
  - 保存原函数 `fn` 和 `context`。

4. **实现绑定函数逻辑**：
  - 合并预先传入的参数和调用时传入的参数。
  - 区分普通调用和 `new` 调用。

5. **维护原型链**：
  - 确保通过 `new` 调用的实例能继承原函数的原型。

6. **返回新函数**：
  - 返回绑定后的新函数。

### 完整实现

```javascript
Function.prototype.myBind = function (context, ...args) {
   if (typeof this !== 'function') {
      throw new TypeError('Function.prototype.myBind - what is trying to be bound is not callable');
   }
   context = (context === null || context === undefined) ? globalThis : Object(context);
   const fn = this;
   const bound = function (...innerArgs) {
      const allArgs = args.concat(innerArgs);
      if (this instanceof bound) {
        return new fn(...allArgs);
      } else {
        return fn.apply(context, allArgs);
      }
   };
   if (fn.prototype) {
      bound.prototype = Object.create(fn.prototype);
   }
   return bound;
};
```

## 4. 掘金文章
[可恶的手撕](https://juejin.cn/post/7486394018156576794?searchId=202504191800037763C1B9448BAAA4401D)
<GiscusComment />