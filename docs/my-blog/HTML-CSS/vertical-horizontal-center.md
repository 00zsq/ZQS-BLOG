# 垂直水平居中

## 1. 使用 Flexbox
1. 添加到父元素：
  - `justify-content: center`
  - `align-items: center`
2. 如果父元素没有高度：
  - 父元素设置 `display: flex`
  - 子元素设置 `margin: auto`

## 2. 使用 Margin
1. 父元素设置 `height: calc(100vh - npx)`
2. 子元素设置 `margin: auto`

## 3. 使用绝对定位和 Transform
1. 将元素左上角定位到页面中心：
  ```css
  .parent {    
     position: relative;
  } 
  .child {    
     position: absolute;    
     left: 50%;    
     top: 50%;    
     transform: translate(-50%, -50%);
  }
  ```
2. 注意：需考虑浏览器兼容性。

## 4. 使用绝对定位和 Margin
1. 设置四个方向的值为 `0`，并设置 `margin: auto`：
  ```css
  .parent {    
     position: relative;
  } 
  .child {    
     position: absolute;    
     top: 0;    
     bottom: 0;    
     left: 0;    
     right: 0;    
     margin: auto;
  }
  ```
2. 适用于盒子有固定宽高的情况。

## 5. 使用绝对定位和负 Margin
1. 将元素左上角定位到页面中心：
  ```css
  .parent {    
     position: relative;
  } 
  .child {    
     position: absolute;    
     top: 50%;    
     left: 50%;    
     margin-top: -50px; /* 自身高度的一半 */    
     margin-left: -50px; /* 自身宽度的一半 */
  }
  ```
2. 适用于盒子宽高已知的情况。
<GiscusComment />