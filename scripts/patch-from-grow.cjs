// 一次性：把從 grow 複製過來的 Base.astro / OfficialChannels.astro 改成 hub 用。
// 跑過一次之後就沒用了，留著只是記錄改了什麼。
const fs = require('fs');

{
  const f = 'src/layouts/Base.astro';
  let s = fs.readFileSync(f, 'utf8');
  const rss = /\n\s*<link rel="alternate" type="application\/rss\+xml"[^\n]*/;
  if (!rss.test(s)) throw new Error('rss link not found');
  s = s.replace(rss, '');
  const nav = `        <a href="/">首頁</a> · <a href="/blog/">部落格</a> · <a href="/notes/">Notes</a> · <a href="/disclaimer/">免責聲明</a>`;
  if (!s.includes(nav)) throw new Error('footer nav not found');
  s = s.replace(nav, `        <a href="/">tedshen.link</a> · <a href="https://grow.tedshen.link/">財務教練 grow</a> · <a href="https://grow.tedshen.link/blog/">部落格</a>`);
  s = s.replace('<p>Ted ｜ 財務教練 · grow.tedshen.link</p>', '<p>沈裕德 Ted · tedshen.link</p>');
  fs.writeFileSync(f, s);
  console.log('Base.astro patched');
}

{
  const f = 'src/components/OfficialChannels.astro';
  let s = fs.readFileSync(f, 'utf8');
  const row = `    <li><span>網站</span><a href={SITE_URL}>{SITE_URL.replace('https://', '')}</a></li>`;
  if (!s.includes(row)) throw new Error('site row not found');
  s = s.replace(row, `    <li><span>身分頁</span><a href={SITE_URL}>{SITE_URL.replace('https://', '')}</a></li>\n    <li><span>財務教練</span><a href={GROW_URL}>{GROW_URL.replace('https://', '')}</a></li>`);
  const imp = "import { LINE_URL, THREADS_URL, INSTAGRAM_URL, EMAIL, SITE_URL } from '../consts';";
  if (!s.includes(imp)) throw new Error('import not found');
  s = s.replace(imp, "import { LINE_URL, THREADS_URL, INSTAGRAM_URL, EMAIL, SITE_URL, GROW_URL } from '../consts';");
  fs.writeFileSync(f, s);
  console.log('OfficialChannels.astro patched');
}
