# CSS 基礎入門教學

## 什麼是 CSS

CSS 是「Cascading Style Sheets」（層疊樣式表）的縮寫，它是用來控制網頁外觀和佈局的樣式語言。通過 CSS，我們可以美化 HTML 元素，使網頁更加吸引人和易於閱讀。

- 層疊 (Cascading)：指的是樣式可以從多個來源應用到元素上，並按照一定的優先順序進行合併和覆蓋。
- 樣式表 (Style Sheets)：指的是定義樣式規則的文件或區塊，這些規則決定了 HTML 元素的外觀。

### CSS 的主要作用

- 控制佈局：決定元素在頁面中的位置和排列方式，例如使用彈性盒模型（Flexbox）或網格系統（Grid）來構建響應式佈局。
- 設置樣式：包括顏色、字體、間距、邊框、背景等，使網頁具有吸引力和一致性。
- 響應式設計：根據不同設備和屏幕大小調整樣式，確保網頁在各種設備上都能良好顯示。

## CSS 基本語法

CSS 的基本語法由選擇器（Selector）和聲明（Declaration）組成。選擇器用來指定要應用樣式的 HTML 元素，聲明則定義具體的樣式屬性和值。

### 選擇器

選擇器用來選擇 HTML 元素，常見的選擇器包括：

- 元素選擇器：選擇所有指定的 HTML 標籤，例如 `p` 選擇所有段落。
- 類選擇器：選擇具有特定類別的元素，使用 `.` 符號，例如 `.container`。
- ID 選擇器：選擇具有特定 ID 的元素，使用 `#` 符號，例如 `#header`。
- 組合選擇器：可以組合多個選擇器來選擇特定的元素，例如 `div p` 選擇所有在 `div` 內的 `p` 元素。

### 聲明

聲明由屬性和屬性值組成，使用冒號 `:` 分隔，並以分號 `;` 結尾。例如：

```css
color: blue;
font-size: 16px;
```

### 範例

```css
/* 元素選擇器 */
p {
  color: blue;
  font-size: 16px;
}

/* 類選擇器 */
.container {
  width: 80%;
  margin: 0 auto;
}

/* ID 選擇器 */
#header {
  background-color: #f0f0f0;
  padding: 20px;
}

/* 組合選擇器 */
div p {
  line-height: 1.5;
}
```

### 如何在 HTML 中使用 CSS

有三種方式將 CSS 應用到 HTML 中：

1. 內聯樣式（Inline Styles）：直接在 HTML 元素的 `style` 屬性中定義樣式。
   ```html
   <p style="color: red;">這是一個紅色的段落。</p>
   ```
2. 內部樣式表（Internal Style Sheet）：在 HTML 文件的 `<head>` 區域內使用 `<style>` 標籤定義樣式。

   ```html
   <head>
     <style>
       p {
         color: green;
       }
     </style>
   </head>
   ```

3. 外部樣式表（External Style Sheet）：將 CSS 定義在獨立的 `.css` 文件中，並在 HTML 文件中使用 `<link>` 標籤引用。
   ```html
   <head>
     <link rel="stylesheet" href="styles.css" />
   </head>
   ```
   ```css
   /* styles.css */
   p {
     color: purple;
   }
   ```

## 基本樣式屬性介紹

### 字體與文字

1. 顏色（`color`）

   - 設置文字的顏色。
   - 範例 1（[基本顏色應用](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/example/ex01.html)）

     ```css
     p {
       color: #333333; /* 深灰色文字 */
     }

     h1 {
       color: rgb(70, 130, 180); /* 鋼藍色文字 */
     }

     h2 {
       color: rgba(255, 0, 0, 0.7); /* 半透明紅色文字 */
     }
     ```

2. 字體系列（`font-family`）

   - 設置元素的字體系列。
   - 範例 2（[指定字體](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/example/ex02.html)）

     ```css
     body {
       font-family: "Arial", sans-serif;
     }

     h1 {
       font-family: "Times New Roman", serif;
     }
     ```

3. 字體大小（`font-size`）

   - 設置文字的大小。
   - 範例 3（[不同字體大小](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/example/ex03.html)）

     ```css
     p {
       font-size: 16px;
     }

     h1 {
       font-size: 32px;
     }

     h2 {
       font-size: 24px;
     }
     ```

4. 字體粗細（`font-weight`）

   - 設置文字的粗細。
   - 範例 4（[不同字體粗細](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/example/ex04.html)）

     ```css
     strong {
       font-weight: bold;
     }

     .light-text {
       font-weight: 300;
     }

     .normal-text {
       font-weight: normal;
     }
     ```

5. 文字對齊（`text-align`）

### 佈局與間距

![img01](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/img/img01.png)

1. 外邊距（`margin`）
2. 內邊距（`padding`）
