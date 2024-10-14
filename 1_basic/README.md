# 常用開發工具與網頁基礎

## Git 設定與教學

Git 是一個強大的版本控制系統，廣泛應用於軟體開發中，能夠幫助團隊協作、追蹤代碼變更，以及管理不同的版本。無論是個人開發者還是大型團隊，Git 都能有效提升工作流程效率。以下將介紹如何設定 Git，並透過 GitHub 進行實作。

### Git 設定

安裝 Git package 才能在 terminal 直接執行`Git`指令。步驟：

1. 到[Git](https://git-scm.com/downloads)下載 Git package 並執行安裝程式，Linux 用戶可以在 termianl 輸入
   ```
   sudo apt update
   sudo apt install git
   ```
2. 在 terminal 使用下列指令確認是否安裝成功
   ```
   git --version
   ```
3. 設定使用者名稱和郵件 (email 可使用 no-reply 郵件)
   ```
   git config --global user.name "your_name"
   git config --global user.email "your_email@example.com"
   ```
4. 設定新的 repository 的預設 branch 名稱 ex. main (optional)
   ```
   git config --global init.defaultBranch <default_name>
   ```

### Git 基本指令

參考[git-tutorial](https://github.com/chou-ting-wei/git-tutorial/blob/main/README.md)

### GitHub 設定

在點擊右上角的頭像後在下方找到`settings`的選項，並依照個人喜好設定`Public profile`、`Appearance`、`Notifications`等，並到`emails`中檢查綁定的個人郵件是否正確，並勾選下方的`Keep my email address private`(非常建議)。勾選後，Github 會提供每個使用者一個用來保護用戶隱私的 no-reply 郵件，主要目的是防止用戶的個人電子郵件地址在公共活動中曝光，例如`commit`、`push request`、`pull request`或發佈評論時。使用 no-reply 郵件地址可以讓你保持匿名，避免垃圾郵件或未經授權的聯繫。

#### SSH key 設定

設定 SSH keys 可以讓使用者在進行各種 Git 操作時不需要輸入帳密，透過裝置和 Github 存儲的公鑰/私鑰作為驗證使用者身分的憑證。設定流程：

1. 在 terminal 輸入以下指令，email 可以使用 no-reply 郵件或個人郵件，後續的儲存路徑和 Passphrase 設定可以直接按 enter 跳過
   ```
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
2. 執行下列指令後將輸出結果複製到剪貼簿(若使用 cmd 將 cat 改為 type)，檔案路徑可在上個指令的輸出結果中找到
   ```
   cat <id_ed25519.pub的檔案路徑>
   ```
3. 回到`settings`中的`SSH and GPG keys`點擊`New SSH key`，並將剪貼簿中的內容貼到`Key`，`Title`建議使用裝置名稱(若使用多台裝置，每台裝置都須照流程設置自己的 SSH key)。`Add SSH key`後若成功會跳出新增成功的提示訊息。

### GitHub 實作

GitHub 是一個基於 Git 版本控制系統的協作平台，為開發者提供了遠端倉庫來進行代碼管理與共享。透過 GitHub，你可以輕鬆地管理代碼版本、追蹤歷史變更，並與團隊成員進行協作。這裡將介紹如何使用 GitHub 並提供實作教學。

透過這個實作教學，你將學習如何：

- 新增分支（Branch）：學習如何從主分支建立新的分支，並在分支上進行開發而不影響主代碼。
- 提交變更（Commit）：掌握如何提交代碼變更，並撰寫清晰的提交訊息來記錄每次的修改。
- 合併分支（Merge）：在完成開發後，將分支的變更合併回主分支，確保代碼保持更新。

#### GitHub Repository 連結

[chou-ting-wei/git-tutorial: Git tutorial for newbies](https://github.com/chou-ting-wei/git-tutorial)

## VS Code 安裝與設定

1. 瀏覽 VS Code 官方網站

   - 至 [VS Code 官方網站](https://code.visualstudio.com/) 下載安裝檔。

2. 選擇適合作業系統的安裝檔

   - 根據使用的作業系統（Windows、macOS 或 Linux），在網站首頁點擊相應的下載按鈕。
     - 對於 Windows 用戶，點擊 `Download for Windows`。
     - 對於 macOS 用戶，點擊 `Download for macOS`。
     - 對於 Linux 用戶，點擊 `Download for Linux`，然後選擇對應的發行版（如 .deb 或 .rpm）。

3. 安裝 VS Code

   - Windows 用戶

     - 下載完成後，雙擊 `.exe` 文件，開始安裝精靈。
     - 勾選 `Add to PATH` 和 `Create a desktop icon` 以便於在終端使用 VS Code。
     - 按照安裝精靈的步驟，點擊 `Next` 並完成安裝。

   - macOS 用戶

     - 下載完成後，解壓 `.zip` 文件，將 `Visual Studio Code.app` 拖動到 `Applications` 文件夾。
     - 打開應用程式文件夾，雙擊 VS Code 圖標執行。

   - Linux 用戶
     - 如果下載了 `.deb` 或 `.rpm` 文件，可以使用命令列安裝
       - Debian/Ubuntu 系統：打開終端，運行以下命令
         ```bash
         sudo dpkg -i file_name.deb
         ```
       - Red Hat/Fedora 系統：運行以下命令
         ```bash
         sudo rpm -i file_name.rpm
         ```

4. 首次啟動 VS Code
   - 安裝完成後，啟動 VS Code。
   - 初次啟動時，會顯示歡迎頁面，可以看到一些快速上手教程或擴展推薦。

### 安裝 Extension

#### 必裝套件

1. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
3. [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
4. [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
5. [ES7+ React/Redux/React-Native/JS snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
6. [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

#### 選用套件

1. [Monokai Pro](https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode)
2. [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
3. [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

### 配置 VS Code

#### 字體選擇

可以至 [Nerd Fonts](https://www.nerdfonts.com/font-downloads) 網站選擇合適的程式碼字體，以下是兩種推薦的字體

1. [Fira Code](https://github.com/tonsky/FiraCode)
2. [Victor Mono](https://rubjo.github.io/victor-mono/)

#### 設定 `settings.json`

1. 打開設定介面
   點擊 VS Code 右下角的齒輪圖示，然後選擇`設定`。

2. 進入 `settings.json` 檔案
   在設定介面中，點擊右上角的圖示「打開設定 (JSON)」，這會直接打開 `settings.json` 檔案，供你手動編輯設定。

3. 添加或修改 `settings.json` 設定。
   ```json
   {
     "files.autoSave": "afterDelay",
     "workbench.iconTheme": "material-icon-theme",
     "git.autofetch": true,
     "editor.fontFamily": "'Victor Mono'",
     "editor.fontLigatures": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.formatOnSave": true
   }
   ```

## 網頁基礎

### 網頁三要素

#### HTML (HyperText Markup Language)

- 是一種標記語言(非程式語言)，用於描述超文本內容的顯示方式
- 決定了網頁的架構和內容，可被絕大多數的瀏覽器讀取，**是所有網頁開發的基礎 **
- 基本架構：`<html>`、`<head>`、`<body>`
- 利用不同的標籤(tag)結合屬性(attribute)形成巢狀結構
  - `<tag attribute="value">content<tag>`
  - `<a href="https://www.google.com">Example</a>`
- 目前標準的版本是 HTML5，支援多媒體和 API 的使用

#### CSS (Cascading Style Sheet)

- 設計和美化 HTML 內容的外觀，提升可讀性和吸引力
- 利用 selector、property、value 的架構指定要更改樣式的 HTML 元素和要更改的屬性和數值
  ```
  selector {
     property: value;
  }
  ```
- 可根據設備特性(ex: 螢幕大小)讓同一個 HTML 元素應用不同的樣式

#### JavaScript

- 控制網頁的行為，為 HTML 增添互動性和動態行為
- 可根據用戶行為即時更改 HTML 內容、提供即時顯示的時間和日期、新增或移除 HTML 元素等
- 基本上撇除外觀和文字內容外的功能都與 JavaScript 有關
- 動畫/特效仰賴 JavaScript 與 CSS 的結合

### 基本網路概念

#### 何謂 IP？

IP，也就是所謂的網際網路協定，是網際網路運作的根本。IP 位址是每個設備在網際網路上的唯一辨識，類似於家裡的郵寄地址。用戶透過 IP 位址來接收傳送給自己的封包，當我們造訪網頁時也需要通過該網頁服務的伺服器的 IP 位址來取得資訊和相關服務。現在主要使用 IPv4 (32 位元)，由於 IP 位址數量上的不足，全球已經開始積極部署跟普及 IPv6(128 位元)的使用。

#### 何謂網域 (Domain)？

我們平常在使用網頁時並不會輸入該網頁伺服器的 IP 位址(也是可行的方法)，而是輸入**網域名稱**(如[www.google.com](www.google.com))，也就是我們熟悉的網址。以`www.google.com`為例：

- `www`： WWW (World Wide Web) 是一個網域下的子域，通常會指向一個網域中的網站首頁。一個網域可能會提供多種不同的服務，像是 google 也提供了 mail.google.com 的郵件服務，而 mail 跟 www 同樣都是 google.com 下的子域。
- `google.com`：是網域名稱的核心部分，也就是我們熟悉的網址。
- `.com`： 是 TLD (頂級域/Top-Level Domain)的其中之一，通常為商業用途。常見的 TLD 還有`.org`（組織）、`.net`（網絡）、`.edu`（教育機構）等。

#### 何謂 DNS (Domain Name System)

我們究竟是如何透過網址連結到對應的伺服器 IP 位址的呢？當我們使用瀏覽器時輸入網址，會先訪問 DNS 伺服器將網域名稱轉換成對應的 IP 位址後再進行連接。一個網域名稱可以對應到不只一個 IP 位址(分流)。

#### HTTP (Hypertext Transfer Protocol) / HTTPS (HTTP secure)

HTTP 是一種應用層的網路協定，專門處理我們設備上的網頁瀏覽器和網頁伺服器之間的資料傳輸，定義了客戶端是如何項伺服器請求資源，即伺服器該如何回應客戶端的請求。而 HTTPS 是在 HTTP 的基礎上增加了 SSL/TLS 加密層，確保資料傳輸的安全性，防止數據被竊取或篡改。

#### 總結

這裡將簡單敘述客戶端使用網頁瀏覽器造訪網頁時的流程

1. 在瀏覽器輸入網域名稱 (如 www.example.com)
2. 瀏覽器向 DNS 伺服器發送請求，並從 DNS 伺服器拿到網址對應的 IP 位址
3. 用戶端與伺服器透過網路協定進行連線 (如 HTTPS)
4. 向伺服器請求網頁內容 
5. 從伺服器端接收網頁資料(HTML、CSS、JavaScript 文件)
6. 瀏覽器根據接受到的資料呈現網頁內容
