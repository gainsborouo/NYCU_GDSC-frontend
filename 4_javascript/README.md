# JavaScript 基礎入門教學

## 什麼是 JavaScript

JavaScript（簡稱 JS）是一種高級、解釋型的程式語言，廣泛應用於網頁開發中。它主要用於增加網頁的互動性和動態效果，使得網頁不僅僅是靜態的內容展示。JavaScript 可以在用戶端（瀏覽器）運行，也可以在伺服器端（如 Node.js）運行。

- 動態性：可以根據用戶的操作動態修改網頁內容。
- 互動性：實現用戶與網頁之間的交互，如表單驗證、動畫效果等。
- 多功能性：不僅限於前端開發，還可用於後端、桌面應用、移動應用等。

### JavaScript 的主要用途

- 表單驗證：在用戶提交表單前檢查輸入資料是否符合要求。
- 動態內容更新：無需刷新頁面即可更新部分內容，如即時搜尋、數據加載等。
- 動畫效果：創建視覺上吸引人的動畫和過渡效果。
- 與伺服器通信：使用 AJAX 技術與伺服器進行數據交換，實現更流暢的用戶體驗。

## JavaScript 基本語法

JavaScript 的基本語法包括變數宣告、數據類型、運算符、控制結構、函數等。了解這些基礎知識是學習 JavaScript 的第一步。

### 如何在 HTML 中使用 JavaScript

有三種方式將 JavaScript 應用到 HTML 中：

1. 內聯腳本（Inline Script）：直接在 HTML 元素的 `onclick`、`onchange` 等事件屬性中編寫 JavaScript 代碼。

   ```html
   <button onclick="alert('Hello, World!')">點擊我</button>
   ```

2. 內部腳本（Internal Script）：在 HTML 文件的 `<head>` 或 `<body>` 區域內使用 `<script>` 標籤定義 JavaScript 代碼。

   ```html
   <head>
     <script>
       function greet() {
         alert("Hello from internal script!");
       }
     </script>
   </head>
   <body>
     <button onclick="greet()">點擊我</button>
   </body>
   ```

3. 外部腳本（External Script）：將 JavaScript 代碼存放在獨立的 `.js` 文件中，並在 HTML 文件中使用 `<script>` 標籤引用。

   ```html
   <head>
     <script src="script.js"></script>
   </head>
   <body>
     <button onclick="greet()">點擊我</button>
   </body>
   ```

   ```javascript
   // script.js
   function greet() {
     alert("Hello from external script!");
   }
   ```

### 基本範例

以下是一個簡單的 JavaScript 範例，當用戶點擊按鈕時，會彈出一個提示框：

- 範例 1（[JavaScript 基本範例](https://chou-ting-wei.github.io/NYCU_GDSC-frontend/4_javascript/example/ex01.html)）
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>JavaScript 基本範例</title>
      <script>
        function showMessage() {
          alert("歡迎學習 JavaScript！");
        }
      </script>
    </head>
    <body>
      <button onclick="showMessage()">點擊我</button>
    </body>
  </html>
  ```

### 變數與數據類型

#### 變數宣告

變數用於存儲數據，JavaScript 提供了三種關鍵字來宣告變數：

- `var`：ES5 之前的變數宣告方式，具有函數作用域。
- `let`：ES6 引入的變數宣告方式，具有塊級作用域。
- `const`：ES6 引入的常數宣告方式，一旦賦值後不能更改。
- 範例 2（JavaScript 變數宣告）

  ```javascript
  // 使用 var
  var name = "Alice";
  console.log(name); // 輸出: Alice

  // 使用 let
  let age = 25;
  console.log(age); // 輸出: 25

  // 使用 const
  const PI = 3.14159;
  console.log(PI); // 輸出: 3.14159
  ```

### 數據類型

JavaScript 有多種數據類型，主要分為原始類型和複合類型。

#### 原始類型

- Number：數字類型，包括整數和浮點數。
- String：字符串類型，用於表示文本。
- Boolean：布林類型，只有 `true` 和 `false` 兩個值。
- Undefined：未定義類型，表示變數已宣告但尚未賦值。
- Null：空類型，表示變數沒有值。
- Symbol（ES6）：獨一無二的標識符。
- BigInt（ES2020）：用於表示非常大的整數。

#### 複合類型

- Object：對象類型，用於存儲多個值和複雜的數據結構。
- Array：陣列類型，用於存儲有序的數據集合。
- Function：函數類型，用於封裝可重複使用的代碼。

#### 範例 3（JavaScript 變數宣告）

```javascript
// Number
let score = 100;
let temperature = -5.5;

// String
let greeting = "Hello, World!";
let name = "John Doe";

// Boolean
let isActive = true;
let isCompleted = false;

// Undefined
let address;
console.log(address); // 輸出: undefined

// Null
let selectedItem = null;

// Object
let person = {
  name: "Alice",
  age: 30,
  isStudent: false,
};

// Array
let colors = ["red", "green", "blue"];

// Function
function add(a, b) {
  return a + b;
}
```

### 運算符
