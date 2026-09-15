// 全站常數。這個站是 tedshen.link 的身分頁：講我是誰、三條線各在哪裡、官方管道總表。
// 這裡是所有官方帳號的正本。各線的站各自複製自己那組，改帳號時先改這裡，再同步過去。

export const SITE_NAME = '沈裕德 Ted';
export const SITE_URL = 'https://tedshen.link';
export const SITE_DESCRIPTION =
  '沈裕德 Ted。軟體工程師，也是財務教練。這一頁是我的官方身分頁：我是誰、在做什麼、正式的聯絡管道在哪裡。';

// 各條線的站
export const GROW_URL = 'https://grow.tedshen.link';
export const DEV_URL = 'https://dev.tedshen.link';
// 保險站 protect.tedshen.link 還在審閱，公開後再加進這裡和 OfficialChannels

// 共用聯絡
export const EMAIL = 'ted@tedshen.link';

// 各線的官方帳號
export const CHANNELS = {
  grow: {
    handle: '@tedshen.grow',
    threads: 'https://www.threads.com/@tedshen.grow',
    instagram: 'https://www.instagram.com/tedshen.grow',
    line: 'https://lin.ee/TWsPv3R',
  },
  protect: {
    handle: '@tedshen.protect',
    threads: 'https://www.threads.com/@tedshen.protect',
    instagram: 'https://www.instagram.com/tedshen.protect',
    line: 'https://lin.ee/SIX75CN',
  },
  dev: {
    line: 'https://lin.ee/XB3OxbQ',
  },
};

// 站主資料（JSON-LD Person 用）。這裡是 Person 的正本，其他站的 Person 引用這個 @id。
export const PERSON = {
  name: '沈裕德',
  alternateName: 'Ted Shen',
  jobTitle: '軟體工程師・財務教練',
  image: '/avatar.jpg',
  sameAs: [
    GROW_URL,
    DEV_URL,
    CHANNELS.grow.threads,
    CHANNELS.grow.instagram,
    CHANNELS.grow.line,
    CHANNELS.protect.threads,
    CHANNELS.protect.instagram,
    CHANNELS.protect.line,
    ...(CHANNELS.dev.line ? [CHANNELS.dev.line] : []),
  ],
};
