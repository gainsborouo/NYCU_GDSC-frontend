# React 基礎入門教學

## 什麼是 React

React 是由 Facebook 開發和維護的一個開源 JavaScript 函式庫，用於構建用戶界面（UI）。它特別適用於構建單頁應用（SPA），並且以其高效、靈活和組件化的特性而聞名。

- 組件化：React 將 UI 分解為可重用的組件，每個組件都有自己的狀態和邏輯。
- 虛擬 DOM：React 使用虛擬 DOM 來高效地更新和渲染變更，提升性能。
- 單向數據流：數據在 React 中是單向流動的，這使得應用的數據管理更加簡單和可預測。
- JSX 語法：React 使用 JSX（JavaScript XML）來描述 UI，讓 HTML 和 JavaScript 更加緊密結合。

### React 的主要用途

- 構建單頁應用（SPA）：例如 Facebook、Instagram 等現代網頁應用。
- 開發移動應用：使用 React Native，可以構建跨平台的移動應用。
- 創建複雜的用戶界面：如儀表板、表單、數據展示等。

## React 基本概念

在開始編寫 React 程式碼之前，我們需要了解一些基本概念和工具。

### 什麼是組件

組件是 React 的核心概念。每個組件都是一個獨立的、可重用的 UI 單位，並且可以包含自己的狀態和邏輯。組件可以分為兩種類型：

- 函數組件（Function Components）：使用 JavaScript 函數來定義。
- 類組件（Class Components）：使用 ES6 類來定義（推薦使用函數組件和 Hooks）。

## JSX 語法

JSX 是一種 JavaScript 的擴展語法，允許你在 JavaScript 代碼中編寫類似 HTML 的標記。這使得編寫和理解 UI 組件更加直觀。

```jsx
const element = <h1>Hello, World!</h1>;
```

### Props 和 State

Props（屬性）：用於向組件傳遞數據，類似於函數的參數。Props 是只讀的，不能在組件內部修改。
State（狀態）：用於管理組件內部的數據和狀態。State 是可變的，可以通過 setState（類組件）或 Hooks（函數組件）來更新。

## 開發環境設置

要開始使用 React，我們需要安裝一些工具和依賴。最簡單的方法是使用 Create React App 來初始化一個新的 React 項目。

### 安裝 Node.js 和 npm

首先，確保你的電腦已經安裝了 Node.js 和 npm。你可以從 Node.js 官方網站 下載並安裝最新的 LTS 版本。

檢查安裝是否成功：

```sh
node -v
npm -v
```

### 創建 React 應用

使用 Create React App 創建一個新的 React 項目：

```sh
npx create-react-app my-react-app
cd my-react-app
npm start
```

這將啟動開發伺服器，並在瀏覽器中打開 http://localhost:3000，你將看到 React 的歡迎頁面。

### 文件結構

創建的 React 項目包含以下主要文件和資料夾：

- `public/`：包含靜態資源，如 `index.html`。
- `src/`：包含 React 組件和應用程式的源代碼。
- `App.js`：主應用組件。
- `index.js`：應用的入口點。

## React 基本語法

### 建立函數組件

函數組件是一種用 JavaScript 函數定義的 React 組件。它接收 props 作為參數，並返回 JSX。

```jsx
// src/components/Greeting.jsx
import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

### 使用組件

在主應用組件中使用 Greeting 組件：

```jsx
// src/App.jsx
import React from "react";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="App">
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}

export default App;
```

### JSX 語法詳解

JSX 允許你在 JavaScript 中編寫類似 HTML 的標記。以下是一些 JSX 的基本規則：

- 標籤必須閉合：所有的元素必須有閉合標籤。

  ```jsx
  <img src="image.png" alt="圖片" />
  ```

- 使用大寫字母開頭的組件名稱：React 會區分內建的 HTML 元素和自定義的組件。

  ```jsx
  <Greeting />
  ```

- 表達式嵌入：可以在 JSX 中使用 {} 包含 JavaScript 表達式。

  ```jsx
  <h1>{`Hello, ${name}!`}</h1>
  ```

### 狀態管理（State）

在函數組件中使用 Hook 來管理狀態。`useState` 是最常用的 Hook，用於在函數組件中添加狀態。

```jsx
// src/components/Counter.jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>當前計數：{count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
      <button onClick={() => setCount(count - 1)}>減少</button>
    </div>
  );
}

export default Counter;
```

在 `App.js` 中使用 `Counter` 組件：

```jsx
// src/App.jsx
import React from "react";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
```

## 處理事件

React 使用合成事件來處理用戶交互。合成事件的行為類似於瀏覽器的原生事件，但具有跨瀏覽器的一致性。

### 事件處理範例

```jsx
// src/components/ClickButton.jsx
import React from "react";

function ClickButton() {
  const handleClick = () => {
    alert("按鈕被點擊了！");
  };

  return <button onClick={handleClick}>點擊我</button>;
}

export default ClickButton;
```

在 `App.js` 中使用 `ClickButton` 組件：

```jsx
// src/App.jsx
import React from "react";
import ClickButton from "./components/ClickButton";

function App() {
  return (
    <div className="App">
      <ClickButton />
    </div>
  );
}

export default App;
```

### 傳遞事件對象

事件處理函數可以接收一個事件對象，該對象包含事件的相關信息。

```jsx
// src/components/InputHandler.jsx
import React, { useState } from "react";

function InputHandler() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log("輸入的值是：", event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>當前輸入：{value}</p>
    </div>
  );
}

export default InputHandler;
```

在 `App.js` 中使用 `InputHandler` 組件：

```jsx
// src/App.jsx
import React from "react";
import InputHandler from "./components/InputHandler";

function App() {
  return (
    <div className="App">
      <InputHandler />
    </div>
  );
}

export default App;
```

## 管理表單

表單是用戶輸入數據的重要途徑。在 React 中，我們可以使用受控組件來管理表單數據。

### 建立受控表單組件

以下是一個簡單的個人資訊表單，包含姓名、電子郵件和年齡的輸入欄位，並進行基本驗證。

```jsx
// src/components/InfoForm.jsx
import React, { useState } from "react";
import "./InfoForm.css"; // 引入樣式

function InfoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    hobbies: [],
    bio: "",
  });

  ...
}

export default InfoForm;
```

### 樣式文件（CSS）

為了讓表單美觀，我們可以使用 CSS 來設計樣式。以下是與之前提供的 CSS 類似的樣式，但在 React 中，我們將其放在獨立的 CSS 文件中。

```css
/* src/components/InfoForm.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 600px;
  margin: 20px auto;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

...
```

### 使用表單組件

將 `InfoForm` 組件添加到 `App.js` 中：

```jsx
// src/App.jsx
import React from "react";
import InfoForm from "./components/InfoForm";

function App() {
  return (
    <div className="App">
      <InfoForm />
    </div>
  );
}

export default App;
```

