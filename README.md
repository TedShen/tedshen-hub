# tedshen.link

沈裕德 Ted 的官方身分頁。一頁式：我是誰、各條線的入口、官方管道與防冒用聲明。

- 財務教練：<https://grow.tedshen.link>（另一個 repo：`TedShen/grow`）
- 軟體開發：<https://dev.tedshen.link>（`TedShen/tedshen-dev`）
- 保險服務：<https://protect.tedshen.link>（`TedShen/tedshen-protect`）

## 技術

Astro 靜態站，GitHub Actions 部署到 GitHub Pages，DNS 在 Cloudflare。
版型（`src/layouts/Base.astro`）是 2026-11-03 改版後的「雜誌封面＋目錄」風格：只做淺色、明體大標、三條線各一個顏色（軟體紅 `--dev`、財務綠 `--grow`、保險藍 `--protect`）。三站從這次起各自有不同風格（dev 深色儀器風、protect 淺色專業風），不再要求樣式一致；各站之間共用的只有官方管道資料與連結方向。

照片放在 `public/img/`，來自 Unsplash（Unsplash License，可免費商用）：封面 Tangchi Lee、頁尾 Timo Volz，頁面上已標註。

## 常用指令

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # 產出到 dist/
```

## 改東西時

- 社群帳號、Email、LINE 連結在 `src/consts.ts`，和 grow 的 `src/consts.ts` 要保持一致。
- `PERSON` 是 JSON-LD Person 的正本，`@id` 是 `https://tedshen.link/#person`。
