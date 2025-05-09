# CSS选择器权重

CSS选择器的权重（也称为特异性）是决定样式应用优先级的关键机制。以下是核心规则和计算方式：

## 1. 权重等级（从高到低）

1. **`!important`声明**  
  强制覆盖所有其他样式（慎用），不参与权重计算但优先级最高。

2. **内联样式**  
  如 `<div style="color:red">`，权重值为 `1000`。

3. **ID选择器**  
  如 `#header`，权重值为 `0100`。

4. **类/伪类/属性选择器**  
  - 类选择器（`.btn`）  
  - 伪类（`:hover`）  
  - 属性选择器（`[type="text"]`）  
  权重值为 `0010`。

5. **元素/伪元素选择器**  
  - 标签选择器（`div`）  
  - 伪元素（`::before`）  
  权重值为 `0001`。

6. **通配符/继承样式**  
  如 `*`、`>` 等，权重值为 `0000`。

---

## 2. 权重计算规则

将选择器的各部分权重按 **(a, b, c)** 格式相加：  
- **a**：ID选择器数量  
- **b**：类/伪类/属性选择器数量  
- **c**：元素/伪元素选择器数量  

### 示例  
选择器 `#nav .item li::before` 的权重计算：  
- 1个ID（`#nav`）→ `a=1`  
- 1个类（`.item`）→ `b=1`  
- 1个元素（`li`）+ 1个伪元素（`::before`）→ `c=2`  

最终权重：**(1, 1, 2)**

---

## 3. 优先级规则

1. **比较权重等级**  
  按 `a → b → c` 顺序逐级比较，数值大的胜出（如 `(1, 0, 0) > (0, 2, 0)`）。

2. **相同权重时后定义的样式生效**  
  遵循“后来居上”原则。

3. **`!important`例外**  
  即使权重低，`!important`样式也会强制生效（但内联样式的`!important`优先级更高）。

---

## 4. 常见误区

- **权重不是十进制相加**  
  `(0, 1, 0) + (0, 1, 0) ≠ (0, 2, 0)`，而是保持独立计数。

- **选择器数量不影响权重等级**  
  100个类选择器（`(0, 100, 0)`）仍低于1个ID选择器（`(1, 0, 0)`）。

---

## 5. 实用建议

- 避免滥用 `!important`，推荐通过合理设计选择器结构控制优先级。  
- 需要覆盖样式时，可增加选择器的特异性（如添加ID或类）。  

通过理解这些规则，可以更精准地控制CSS样式的应用顺序。如需具体案例演示，可提供代码片段进一步分析。
<GiscusComment />