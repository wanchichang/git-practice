### package.json 中的 dependencies 與 devDependencies 分別是什麼?
`dependencies` : 是指在已經發布的環境（production）運行必須安裝的套件。

`devDependencies` : 是指只在開發中的環境（development）才需要的套件，例如用來做測試或進行檢查的套件。

相關指令：
```bash
npm install <packagename> # 寫入 dependencies
npm install <packagename> –save # 同時寫入 dependencies 和 devDependencies
npm install <packagename> –save-dev # 寫入 devDependencies
```

參考資料：[https://hackmd.io/@Hsuan93625/HkUdUG8zd#dependencies%E8%88%87devDependencies](https://hackmd.io/@Hsuan93625/HkUdUG8zd#dependencies%E8%88%87devDependencies)

### package.json 中的 scripts 怎麼用？
`package.json` 中的 `scripts` 區塊讓我們能自訂指令，並透過 `npm run` 執行。幫助我們自動化一些常用的工作。

語法：scripts 是一組 key-value pair ，其中 `key` 是自訂的指令名稱， `value` 是實際執行的指令內容。

常見的 `scripts` 指令名稱有：`dev`、`start`、`build`、`test`...

`scripts`範例：
```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}
```
使用範例：
```bash
npm run start # 如同執行 node app.js
npm run dev # 如同執行 nodemon app.js
```

參考資料：[https://blog.csdn.net/qq_17335549/article/details/126784270](https://blog.csdn.net/qq_17335549/article/details/126784270
)
### Port number 如何以環境變數來設定？
可以用 `process.env.PORT` 來讀取PORT這個環境變數，動態設定監聽的 port

例如：

<img src="./assets/env_port.png" >

而設定環境變數有以下兩種方法：

1. 手動設定環境變數
```bash
# linux or mac
PORT=5000 node app.js

# windows
set PORT=5000 && node app.js
```
2. 使用 `.env`

使用`dotenv`這個套件來從 `.env` 文件中讀取環境變數，這樣就不需要每次都手動設定環境變數，步驟如下：
```bash
npm install dotenv # 安裝 dotenv
vim .env # 在.env中設定 port number, e.g. PORT=3001
```
實際使用範例：[/backend/app.js](https://github.com/wanchichang/git-practice/blob/main/backend/app.js)
### 哪些檔案不該被放上 github repo
1. `.env`: 裡面可能包含資料庫密碼或API_KEY等重要資訊，因此不該被上傳至github repo。
2. `node_module`: `node_module` 這個資料夾裡面包含了此專案用到的所有套件內容，檔案數量非常多，而其他使用者可透過 `package.json` 自行下載相關套件，因此不需將node_module上傳至github repo。
### CJS vs ESM
CJS (CommonJS) 和 ESM (ECMAScript Modules) 是 JavaScript 的兩種模組系統，主要用來管理模組的匯入與匯出。

#### CJS
CJS 使用 `require` 函數來匯入模組，並使用 `module.exports` 或 `exports` 來定義匯出的內容。
##### 特點
- **動態匯入**：執行時根據需要動態載入模組，而不是在編譯時就確定模組的依賴關係。
- **同步匯入**：當使用 `require()` 匯入模組時，模組的所有內容必須立即被讀取並執行。
- **Node.js 支援**：Node.js 預設支援 CJS，不需要進行額外的設定。

##### 使用範例：
```js
// math.js
const add = (a, b) => a + b;

module.exports = {
  add
};
```

```js
// app.js
const { add } = require('./math');

console.log(add(2, 3));  // 5
```
#### ESM
ESM 使用 `import` 和 `export` 來引入或導出模組，為目前主流。
##### 特點
- **靜態匯入**：ESM 在編譯時就可以確定模組的依賴關係，這讓瀏覽器可以更有效進行模組的載入和暫存，提高應用程式的性能。
- **非同步匯入**：與 CJS 不同，ESM 可以非同步載入模組，代表當瀏覽器遇到 `<script type="module">` 標籤時，它可以繼續解析後面的 HTML，而不需要等待模組載入完成。
- **Node.js 支援**：從 Node.js 12 開始，Node.js 支援 ESM，但使用前需要先進行以下設定。
> [!IMPORTANT]
>在 Node.js 中使用 ESM 需要將 package.json 中的 `type` 設為 `module`，否則必須將副檔名改為 `.mjs` 才能正確執行。
>```json
>{
>  "type": "module"
>}
>```
##### 使用範例：
```js
// math.js
export const add = (a, b) => a + b;
```
```js
// app.js
import { add } from './math.js';

console.log(add(2, 3));  // 5
```

參考資料：[https://vocus.cc/article/649cc0e0fd89780001a7d34d](https://vocus.cc/article/649cc0e0fd89780001a7d34d)