### week05 - 網域購買與憑證申請
#### 網址
[https://www.wictornado.xyz/](https://www.wictornado.xyz/)
#### 在哪購買網域？
 [goDaddy](https://tw.godaddy.com/) 

#### A Record
A Record（Address Record）是 DNS 中的一種記錄類型，用來將網域（如 `example.com`）對應到 IP 位址（如 `192.168.1.1`）。

也就是說，當使用者輸入 `example.com` ，瀏覽器會將 request 發送到 IP 位址 `192.168.1.1`。
#### NS Record
NS 代表 Name Server，NS Record 用來指定哪個 Name Server 負責解析該網域的 DNS 查詢。

當有人查詢我們的網域名稱時，NS Record 會告訴 DNS 查詢系統該向哪一台 server 請求進一步的 DNS Record，如 A Record、Cname Record 等等。
#### Domain Name vs FQDN vs URL
- **Domain Name** 

    用來識別一個網站或網路服務的名稱，讓使用者不需要記憶數字形式的 IP 位址。它只指向一個網站或網域，不包含具體的主機名或資源路徑。

    例如 `example.com`。

- **FQDN（Fully Qualified Domain Name）** 

    FQDN 是一個完整的 Domain Name，包含所有必需的部分，用來唯一識別 DNS 樹狀圖下的一個具體位置。由 Host Name、Domain Name、Top-Level Domain、Root Domain 組成。

    例如：`www.example.com.`

    `www` 是 Host Name，`example` 是 Domain Name， `com` 是 Top-Level Domain，最右邊的 `.` 是 Root Domain，通常省略不寫。


- **URL（Uniform Resource Locator）**

     URL 是網際網路上資源的完整地址，包括協議（https or http）、網域名稱或 IP 位址，以及路徑、查詢字串等。

    例如：`https://www.example.com/path/to/resource?query=123#section1`。

#### 為什麼應該要為網站加上憑證？而不是直接用 http 就好？

 - 資料安全性

    `https` 使用 SSL/TLS 加密，可以保護瀏覽器和伺服器之間的資料傳輸。讓敏感訊息（如密碼、信用卡號）不會被攔截或篡改。
    
    而 `http` 不加密資料，所有傳輸內容都是明文，容易被中間人攻擊，導致資料被攔截和竄改，可能導致網站功能異常或用戶資料被操縱。
 - 瀏覽器警告

    現在的主流瀏覽器會對使用 http 的網站顯示「不安全」的警告。這些警告可能會降低訪客的意願，影響流量和信譽。

#### 參考資料
[https://www.cloudflare.com/zh-tw/learning/dns/dns-records/dns-a-record/](https://www.cloudflare.com/zh-tw/learning/dns/dns-records/dns-a-record/
)

[https://its-okay.medium.com/%E6%90%9E%E6%87%82-ip-fqdn-dns-name-server-%E9%BC%A0%E5%B9%B4%E5%85%A8%E9%A6%AC%E9%90%B5%E4%BA%BA%E6%8C%91%E6%88%B0-05-aa60f45496fb](https://its-okay.medium.com/%E6%90%9E%E6%87%82-ip-fqdn-dns-name-server-%E9%BC%A0%E5%B9%B4%E5%85%A8%E9%A6%AC%E9%90%B5%E4%BA%BA%E6%8C%91%E6%88%B0-05-aa60f45496fb)

[https://zh.wikipedia.org/zh-tw/%E5%AE%8C%E6%95%B4%E7%B6%B2%E5%9F%9F%E5%90%8D%E7%A8%B1](https://zh.wikipedia.org/zh-tw/%E5%AE%8C%E6%95%B4%E7%B6%B2%E5%9F%9F%E5%90%8D%E7%A8%B1)