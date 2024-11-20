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
   - 範例 1（[CSS 基本顏色應用](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/example/ex01.html)）

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
   - 範例 2（[CSS 指定字體](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/example/ex02.html)）

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
   - 範例 3（[CSS 不同字體大小](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/example/ex03.html)）

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
   - 範例 4（[CSS 不同字體粗細](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/example/ex04.html)）

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

   - 設置文字的對齊方式。
     - left：左對齊（默認）。
     - right：右對齊。
     - center：居中對齊。
     - justify：兩端對齊，文字間距自動調整以填滿行。
   - 範例 5（[CSS 不同對齊方式](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/example/ex05.html)）

     ```css
     .left-align {
       text-align: left;
     }

     .center-align {
       text-align: center;
     }

     .right-align {
       text-align: right;
     }

     .justify-align {
       text-align: justify;
     }
     ```

### 佈局與間距

![img01](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/img/img01.png)

1. 外邊距（`margin`）

   - 設置元素的外邊距，用於控制元素之間的間距。

     - 單一值：`margin: 10px;` 四周均設置 10px 的外邊距。
     - 雙值：`margin: 10px 20px;` 上下 10px，左右 20px。
     - 四值：`margin: 5px 10px 15px 20px;` 上、右、下、左依序設置。

   - 範例 6（[CSS 不同外邊距設置](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/example/ex06.html)）

     ```css
     .no-margin {
       margin: 0;
     }

     .small-margin {
       margin: 10px;
     }

     .large-margin {
       margin: 30px;
     }

     .symmetric-margin {
       margin: 20px 40px; /* 上下20px，左右40px */
     }

     .custom-margin {
       margin: 5px 10px 15px 20px; /* 上5px，右10px，下15px，左20px */
     }
     ```

2. 內邊距（`padding`）

   - 設置元素的內邊距，用於控制內容與邊框之間的空間。
     - 單一值：`padding: 10px;` 四周均設置 10px 的內邊距。
     - 雙值：`padding: 10px 20px;` 上下 10px，左右 20px。
     - 四值：`padding: 5px 10px 15px 20px;` 上、右、下、左依序設置。
   - 範例 7（[CSS 不同內邊距設置](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/example/ex07.html)）

     ```css
     .no-padding {
       padding: 0;
     }

     .small-padding {
       padding: 10px;
     }

     .large-padding {
       padding: 30px;
     }

     .symmetric-padding {
       padding: 20px 40px; /* 上下20px，左右40px */
     }

     .custom-padding {
       padding: 5px 10px 15px 20px; /* 上5px，右10px，下15px，左20px */
     }
     ```

3. 邊框（`border`）

   - 設置元素的邊框，包括邊框的寬度、樣式和顏色。
     - 邊框寬度：如 `1px`, `2px`。
     - 邊框樣式：`solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`。
     - 邊框顏色：可以使用顏色值或關鍵字。
   - 範例 8（[CSS 不同邊框設置](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/example/ex08.html)）

     ```css
     .no-border {
       border: none;
     }

     .solid-border {
       border: 2px solid #000000;
     }

     .dashed-border {
       border: 2px dashed #ff0000;
     }

     .dotted-border {
       border: 2px dotted #00ff00;
     }

     .double-border {
       border: 4px double #0000ff;
     }

     .groove-border {
       border: 3px groove #8e44ad;
     }
     ```

4. 寬度與高度（`width` & `height`）

   - 設置元素的寬度和高度。
     - 寬度（`width`）：可以使用 `px`, `%`, `em`, `rem`, `vw`（視窗寬度單位）等。
     - 高度（`height`）：同寬度，支持多種單位。
     - 自動調整：`auto` 允許元素根據內容自動調整大小。
   - 範例 9（[CSS 不同寬度和高度設置](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/example/ex09.html)）

     ```css
     .fixed-size {
       width: 200px;
       height: 100px;
       background-color: #d1c4e9;
     }

     .percentage-size {
       width: 50%;
       height: 150px;
       background-color: #c5cae9;
     }

     .auto-size {
       width: auto;
       height: auto;
       background-color: #bbdefb;
     }

     .vw-size {
       width: 50vw; /* 視窗寬度的 50% */
       height: 100px;
       background-color: #b3e5fc;
     }

     .em-size {
       width: 20em; /* 當前字體大小的 20 倍 */
       height: 100px;
       background-color: #81d4fa;
     }
     ```

### 背景

1. 背景顏色（`background-color`）

   - 設置元素的背景顏色。
   - 可以使用多種顏色表示方式，如 `#RRGGBB`, `rgb()`, `rgba()`, `hsl()`, 關鍵字等。
   - 範例 10（[CSS 不同背景顏色](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/example/ex10.html)）

     ```css
     .bg-white {
       background-color: #ffffff;
     }

     .bg-light {
       background-color: #f0f0f0;
     }

     .bg-dark {
       background-color: #333333;
       color: #ffffff; /* 為了對比，設置文字為白色 */
     }

     .bg-transparent {
       background-color: rgba(0, 0, 0, 0); /* 透明背景 */
     }
     ```

2. 背景圖片（`background-image`）

   - 設置元素的背景圖片。
   - 屬性：
     - `background-size`：控制背景圖片的大小，如 `cover`, `contain`, `auto`, 或具體尺寸。
     - `background-repeat`：控制背景圖片是否重複，如 `no-repeat`, `repeat`, `repeat-x`, `repeat-y`。
     - `background-position`：控制背景圖片的位置，如 `center`, `top right`, `10px 20px`。
     - `background-attachment`：控制背景圖片是否固定，如 `fixed`, `scroll`。
   - 範例 11（[CSS 不同背景圖片設置](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/3_css/example/ex11.html)）

### 其他常用屬性

1. 顯示類型（`display`）

```

```
