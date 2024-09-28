# 常用開發工具與網頁基礎

## VS Code 安裝與設定
1. 訪問 VS Code 官方網站
   - 打開瀏覽器並訪問 [VS Code 官方網站](https://code.visualstudio.com/)，這是下載安裝包的地方。

2. 選擇適合作業系統的安裝包
   - 根據使用的作業系統（Windows、macOS 或 Linux），在網站首頁點擊相應的下載按鈕。
     - 對於 Windows 用戶，點擊 `Download for Windows`。
     - 對於 macOS 用戶，點擊 `Download for macOS`。
     - 對於 Linux 用戶，點擊 `Download for Linux`，然後選擇對應的發行版（如 .deb 或 .rpm）。

3. 安裝 VS Code
   - Windows 用戶：
     - 下載完成後，雙擊 `.exe` 文件，開始安裝嚮導。
     - 勾選 `Add to PATH` 和 `Create a desktop icon` 以便於在終端使用 VS Code。
     - 按照安裝精靈的步驟，點擊 `Next` 並完成安裝。

   - macOS 用戶：
     - 下載完成後，解壓 `.zip` 文件，將 `Visual Studio Code.app` 拖動到 `Applications` 文件夾。
     - 打開應用程式文件夾，雙擊 VS Code 圖標運行。

   - Linux 用戶：
     - 如果下載了 `.deb` 或 `.rpm` 文件，可以使用命令列安裝：
       - 對於 Debian/Ubuntu 系統：打開終端，運行以下命令：
         ```bash
         sudo dpkg -i file_name.deb
         ```
       - 對於 Red Hat/Fedora 系統：運行以下命令：
         ```bash
         sudo rpm -i file_name.rpm
         ```

4. 首次啟動 VS Code
   - 安裝完成後，運行 VS Code。
   - 初次啟動時，會顯示歡迎頁面，可以看到一些快速上手教程或擴展推薦。

### 安裝 Extension 
#### 必須安裝
1. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
3. [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
4. [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
5. [ES7+ React/Redux/React-Native/JS snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

#### 選用安裝
1. Monokai Pro
2. Material Icon Theme
3. Prettier - Code formatter
4. Path Intellisense

<!-- ### 配置 VS Code
#### autosave
#### 

### 字體
victor mono
fira code -->