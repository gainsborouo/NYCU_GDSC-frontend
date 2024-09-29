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
   git config --global init.defaultBranch {default_name}
   ```

### Git 基本指令

<!-- TODO -->

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
   cat {id_ed25519.pub的檔案路徑}
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

### 基本網路概念
