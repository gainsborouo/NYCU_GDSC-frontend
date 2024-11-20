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
- 偽類選擇器：選擇處於特定狀態的元素，例如 `:hover`, `:nth-child(n)`。
- 屬性選擇器：選擇具有特定屬性的元素，例如 `[type="text"]`。

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

/* 偽類選擇器 */
a:hover {
  color: red;
}

/* 屬性選擇器 */
input[type="text"] {
  border: 1px solid #ccc;
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

   - 用來設置文字的顏色，可以使用多種表示方式，例如十六進位（`#RRGGBB`）、RGB（`rgb(r, g, b)`）、RGBA（`rgba(r, g, b, a)`）、HSL（`hsl(h, s%, l%)`）等。
   - 支援關鍵字（如 `red`, `blue`, `green`）來快速指定基本顏色。
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
     h3 {
       color: hsl(120, 100%, 50%); /* 綠色文字 */
     }

     a {
       color: blue; /* 關鍵字顏色 */
     }
     ```

2. 字體系列（`font-family`）

   - 指定文字顯示的字體系列，通常建議列出多個字體，以便瀏覽器選擇可以呈現的字體。
   - 可以使用系統默認字體系列（如 `serif`, `sans-serif`, `monospace`）作為備選。
   - 支援自定義字體，透過 `@font-face` 引入外部字體。
   - 範例 2（[指定字體](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/example/ex02.html)）

     ```css
     body {
       font-family: "Arial", sans-serif;
     }

     h1 {
       font-family: "Times New Roman", serif;
     }

     p.custom-font {
       font-family: "Courier New", monospace;
     }
     ```

3. 字體大小（`font-size`）

   - 指定文字的大小，支持多種單位，如：
     - 絕對單位：`px`, `pt`, `cm`。
     - 相對單位：`em`, `rem`, `%`。
     - 關鍵字：`small`, `medium`, `large`。
   - 使用相對單位有助於提升網頁的響應式設計和無障礙性。
   - 範例 3（[不同字體大小](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/example/ex03.html)）

     ```css
     p {
       font-size: 16px; /* 絕對單位 */
     }

     h1 {
       font-size: 2em; /* 相對單位，相對於父元素字體大小 */
     }

     h2 {
       font-size: 150%; /* 相對單位，相對於父元素字體大小 */
     }

     h3 {
       font-size: large; /* 關鍵字 */
     }
     ```

4. 字體粗細（`font-weight`）

   - 用於調整文字的粗細，可接受以下值：
     - 關鍵字：`normal`（400）, `bold`（700）。
     - 數值：從 `100`（極細）到 `900`（極粗）。
   - 應用場景：
     - 強調重要內容。
     - 創建視覺層次結構。
   - 範例 4（[不同字體粗細](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/example/ex04.html)）

     ```css
     .strong-text {
       font-weight: bold;
     }

     .light-text {
       font-weight: 300;
     }

     .normal-text {
       font-weight: normal;
     }

     .heavy-text {
       font-weight: 900;
     }
     ```

5. 文字對齊（`text-align`）

### 佈局與間距

![img01](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/img/img01.png)

1. 外邊距（`margin`）
2. 內邊距（`padding`）
