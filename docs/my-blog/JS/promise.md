# Promise

## 1. 对 Promise 的理解

Promise 是一种用于解决异步编程问题的方案，它可以将异步操作以同步操作的流程表达出来，从而避免回调地狱。

### Promise 的状态
Promise 实例有三种状态：
- **Pending**（初始状态）
- **Fulfilled**（成功状态）
- **Rejected**（失败状态）

### 状态转换过程
Promise 实例的状态转换过程如下：
- `Pending` → `Fulfilled`：称为 **Resolved**（已完成）
- `Pending` → `Rejected`：称为 **Rejected**（已拒绝）

**注意**：一旦状态从 `Pending` 转变为其他状态，就无法再更改，状态转换是不可逆的。

### 构造函数
Promise 构造函数接收一个带有 `resolve` 和 `reject` 参数的回调函数：
- `resolve`：将 Promise 状态从 `Pending` 变为 `Fulfilled`，在异步操作成功时调用，并将异步结果作为参数传递出去。
- `reject`：将 Promise 状态从 `Pending` 变为 `Rejected`，在异步操作失败时调用，并将错误信息作为参数传递出去。

### Promise 的缺点
1. 无法取消 Promise，一旦创建就会立即执行，无法中途取消。
2. 如果不设置回调函数，Promise 内部抛出的错误不会反映到外部。
3. 当处于 `Pending` 状态时，无法得知当前进展到哪一个阶段（刚开始还是即将完成）。

---

## 2. Promise 方法

- **`promise.then()`**：处理 `resolve` 成功的情况。
- **`promise.catch()`**：处理 `reject` 失败的情况。
- **`promise.all()`**：用于并行处理多个 Promise 实例，将多个 Promise 实例的数组包装成一个新的 Promise 实例。返回的实例是普通的 Promise：
  - 如果所有子 Promise 都成功，返回值是所有结果组成的数组。
  - 如果有一个子 Promise 失败，则整个 Promise 失败。
- **`promise.race()`**：与 `promise.all()` 类似，但只要任意一个子 Promise 完成，就会立即返回结果。
- **`promise.allSettled()`**：返回一个新的 Promise，当所有给定的 Promise 都已 `Fulfilled` 或 `Rejected` 后完成。返回值是一个对象数组，每个对象表示对应 Promise 的结果。

---

## 3. `promise.all` 和 `promise.allSettled` 的区别

### `Promise.all`
- 只有当所有 Promise 实例都 `resolve` 后，才会返回一个由所有 Promise 返回值组成的数组。
- 如果有一个 Promise 实例 `reject`，则整个 Promise 会立即被拒绝，并返回拒绝原因。
- 类比：团队中所有成员成功才算成功，如果有一个人失败就算失败。

### `Promise.allSettled`
- 等所有 Promise 执行完毕后（无论成功或失败），返回一个包含每个 Promise 状态信息的数组。
- 类比：团队中每个人的结果都会被记录，无论成功还是失败。
<GiscusComment />