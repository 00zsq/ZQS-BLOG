# Vue 中父子组件的渲染、更新与卸载流程

## 1. Vue 2 父子组件生命周期流程

### 渲染流程
- **父组件**: `beforeCreate()` → `created()` → `beforeMount()`
- **子组件**: `beforeCreate()` → `created()` → `beforeMount()` → `mounted()`
- **父组件**: `mounted()`

### 更新流程
- **父组件**: `beforeUpdate()` → **子组件**: `beforeUpdate()` → `updated()` → **父组件**: `updated()`

### 卸载流程
- **父组件**: `beforeDestroy()` → **子组件**: `beforeDestroy()` → `destroyed()` → **父组件**: `destroyed()`


## 2. Vue 3 父子组件生命周期流程

### 渲染流程
- **父组件**: `setup()` → `onBeforeMount()`
- **子组件**: `setup()` → `onBeforeMount()` → `onMounted()`
- **父组件**: `onMounted()`

### 更新流程
- **父组件**: `onBeforeUpdate()` → **子组件**: `onBeforeUpdate()` → `onUpdated()` → **父组件**: `onUpdated()`

### 卸载流程
- **父组件**: `onBeforeUnmount()` → **子组件**: `onBeforeUnmount()` → `onUnmounted()` → **父组件**: `onUnmounted()`

---

## 总结
- **顺序一致**: Vue 2 和 Vue 3 的父子组件生命周期执行顺序逻辑相同。
- **差异在细节**: Vue 3 通过组合式 API 提供更灵活的钩子注册方式，并调整了卸载阶段的钩子名称。
- **组合式 API**: 在 Vue 3 中，`setup()` 替代了 `beforeCreate` 和 `created`，且组合式钩子优先于选项式钩子执行。
<GiscusComment />