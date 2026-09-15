// 全站常數。這個站是 tedshen.link 的身分頁：講我是誰、三條線各在哪裡、官方管道。
// 社群帳號與 Email 和 grow 站共用同一份值，改的時候兩邊都要改。

export const SITE_NAME = '沈裕德 Ted';
export const SITE_URL = 'https://tedshen.link';
export const SITE_DESCRIPTION =
  '沈裕德 Ted。軟體工程師，也是財務教練。這一頁是我的官方身分頁：我是誰、在做什麼、正式的聯絡管道在哪裡。';

// 各條線的站
export const GROW_URL = 'https://grow.tedshen.link';
export const DEV_URL = 'https://dev.tedshen.link';

// 官方聯絡管道
export const LINE_URL = 'https://lin.ee/TWsPv3R';
export const THREADS_URL = 'https://www.threads.com/@tedshen.grow';
export const INSTAGRAM_URL = 'https://www.instagram.com/tedshen.grow';
export const EMAIL = 'ted@tedshen.link';

// 站主資料（JSON-LD Person 用）。這裡是 Person 的正本，其他站的 Person 之後改成引用這個 @id。
export const PERSON = {
  name: '沈裕德',
  alternateName: 'Ted Shen',
  jobTitle: '軟體工程師・財務教練',
  image: '/avatar.jpg',
  sameAs: [GROW_URL, DEV_URL, THREADS_URL, INSTAGRAM_URL, LINE_URL],
};
