# tedshen.link

沈裕德 Ted 的官方身分頁。一頁式：我是誰、各條線的入口、官方管道與防冒用聲明。

- 財務教練：<https://grow.tedshen.link>（另一個 repo：`TedShen/grow`）
- 軟體開發：<https://dev.tedshen.link>（`TedShen/tedshen-dev`）
- 保險服務：<https://protect.tedshen.link>（`TedShen/tedshen-protect`）

## 技術

Astro 靜態站，GitHub Actions 部署到 GitHub Pages，DNS 在 Cloudflare。
版型（`src/layouts/Base.astro`）和官方管道元件是從 grow 複製後微調，樣式一致。

## 常用指令

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # 產出到 dist/
```

## 改東西時

- 社群帳號、Email、LINE 連結在 `src/consts.ts`，和 grow 的 `src/consts.ts` 要保持一致。
- `PERSON` 是 JSON-LD Person 的正本，`@id` 是 `https://tedshen.link/#person`。
