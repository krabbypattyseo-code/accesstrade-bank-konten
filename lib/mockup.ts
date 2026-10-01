// @ts-nocheck
/* Accesstrade Bank Konten mockup logic — ported from publisher dashboard mockup */
let _initialized = false;
let _listeners = [];

function on(target, type, handler, opts) {
  target.addEventListener(type, handler, opts);
  _listeners.push([target, type, handler, opts]);
}

export function destroyAccesstradeMockup() {
  for (const [target, type, handler, opts] of _listeners) {
    target.removeEventListener(type, handler, opts);
  }
  _listeners = [];
  _initialized = false;
  document.body.style.overflow = "";
}

export function initAccesstradeMockup() {
  if (_initialized) destroyAccesstradeMockup();
  _initialized = true;


/* =========================================================
   1. DATA – diambil dari dashboard publisher (1 Okt 2026).
   Di production ganti dengan response API, mis.:
     GET /api/campaign/{id}/content-bank/summary   -> jumlah banner/video, lastUpdate, preview
     GET /api/campaign/{id}/banners?group=&size=   -> list banner per promo
     GET /api/campaign/{id}/videos?category=&q=    -> list video
   Item dengan src:null = placeholder (datanya ada di dashboard tapi gambarnya
   belum diambil untuk mockup ini).
   ========================================================= */
const S = 'https://images.accesstrade.co.id/ca75910166da03ff9d4655a0338e6b09/';
const T = 'https://images.accesstrade.co.id/995693c15f439e3d189b06e89d145dd5/';
const V = 'https://db.accesstrade.co.id/';

const fromFile = (base, f) => { const m = f.match(/_(\d+)x(\d+)_/);
  return { src: base + f, w: +m[1], h: +m[2], fmt: f.split('.').pop().toUpperCase() }; };
const fromSize = (s, fmt = 'JPG') => { const [w, h] = s.split('x').map(Number); return { src: null, w, h, fmt }; };
const unknown = n => Array.from({ length: n }, () => ({ src: null, w: null, h: null, fmt: 'JPG' }));

const CAMPAIGNS = [
  {
    id: 973, name: 'Shopee ID KOL Tier 2', category: 'E-Commerce', comm: 'Up To 70%',
    logo: 'https://s3-ap-southeast-1.amazonaws.com/images.accesstrade.co.id/ca75910166da03ff9d4655a0338e6b09/logo_20230120075501.png',
    link: 'https://atid.me/002d1g0028t4', lastUpdate: '2026-09-28',
    tabs: ['overview', 'affiliate', 'banner', 'video', 'custom', 'datafeed', 'xtra'],
    overview: {
      status: 'RUNNING', period: ['27 Nov 20', '31 Dec 23'], type: 'CPS',
      devices: ['PC', 'Android', 'iPhone', 'Android Tablet', 'iPad'],
      app: { web: false, mobile: false, both: true }, country: 'Indonesia',
      desc: `<p>Shopee adalah platform belanja online di Indonesia. KPI berdasarkan <b>purchase</b>. Cookie web 30 hari, aplikasi 7 hari; action tercatat di desktop web browser dan aplikasi.</p>
        <p><b>Action dihitung sah apabila:</b></p><ol><li>Pengunjung berhasil melakukan pemesanan/order.</li><li>Pengunjung melakukan transfer sesuai biaya pemesanan.</li></ol>
        <p><b>Tolong diperhatikan:</b></p><ol><li>Tidak boleh memakai robot / pembelian otomatis.</li><li>1 user maksimal 10 pembelian tercatat dalam 1 bulan.</li><li>Tidak boleh memakai fake account.</li><li>Metode pop under tidak diperbolehkan.</li></ol>`,
      rewards: [['New-Indirect-Ams','0.55%'],['New-Indirect','1.82%'],['New-Direct-Ams','0.95%'],['New-Direct','3.15%'],['Xtra Commission','70%'],
                ['Existing-Indirect-Ams','0.55%'],['Existing-Indirect','1.82%'],['Existing-Direct-Ams','0.95%'],['Existing-Direct','3.15%'],['Xtra Commission','70%']],
      rewardCats: [], window: '30 hari (web) / 7 hari (app)'
    },
    bannerGroups: [
      { name: 'Shopee 10.10 Brands Festival', total: 21, date: '2026-09-28', items: [
        '1411346_250x300_20260928075047283.jpg','1411345_210x600_20260928075047247.jpg','1411344_160x600_20260928075047205.jpg',
        '1411343_1344x624_20260928075047170.jpg','1411342_1200x628_20260928075047133.jpg','1411341_1200x600_20260928075047098.jpg',
        '1411340_1200x200_20260928075047063.jpg','1411339_1080x1920_20260928075047026.jpg','1411338_1080x1080_20260928075046989.jpg',
        '1411337_960x368_20260928075046955.jpg','1411336_750x126_20260928075046922.jpg','1411335_750x125_20260928075046891.jpg',
        '1411334_728x90_20260928075046856.jpg','1411333_656x188_20260928075046824.jpg','1411332_640x160_20260928075046786.jpg',
        '1411331_320x480_20260928075046753.jpg','1411330_320x100_20260928075046723.jpg','1411329_320x50_20260928075046690.jpg',
        '1411328_300x600_20260928075046658.jpg','1411327_300x250_20260928075046627.jpg','1411326_300x50_20260928075046534.jpg'
      ].map(f => fromFile(S, f)) },
      { name: 'Matrix', total: 7, date: '2026-09-17', items: [
        '1404794_790x90_20260917043820297.jpg','1404793_728x90_20260917043820260.jpg','1404792_680x450_20260917043820227.jpg',
        '1404791_640x320_20260917043820195.jpg','1404790_300x600_20260917043820162.jpg','1404789_128x600_20260917043820131.jpg',
        '1404788_1080x1080_20260917043820069.jpg'
      ].map(f => fromFile(S, f)) },
      { name: 'Biolage', total: 7, date: '2026-09-17', items: [
        '1404787_680x450_20260917043728695.jpg','1404786_640x320_20260917043728662.jpg','1404785_300x600_20260917043728630.jpg',
        '1404784_128x600_20260917043728599.jpg','1404783_1080x1080_20260917043728564.jpg','1404782_790x90_20260917043728530.jpg',
        '1404781_728x90_20260917043728461.jpg'
      ].map(f => fromFile(S, f)) },
      { name: 'Shopee 7.7 Great Mid Year Sale', total: 19, date: '2026-07-06', items: [
        ...['1281441_960x368_20260706043317824.jpg','1281440_750x126_20260706043317788.jpg','1281439_728x90_20260706043317749.jpg',
            '1281438_640x160_20260706043317685.jpg','1281437_320x480_20260706043317646.jpg'].map(f => fromFile(S, f)),
        ...['320x100','320x50','300x600','300x250','300x50','250x300','210x600','160x600','1344x624','1200x628','1200x600','1200x200','1080x1920','1080x1080'].map(s => fromSize(s))
      ] },
      { name: 'Shopee ID Peak Ramadhan 9.3', total: 20, date: null, items: [
        ...['300x50','750x125','320x100','1200x628','1200x600','960x368','1200x200','160x600','250x300','300x250','320x50','210x600','1080x1920','300x600','728x90','1344x624','640x160','320x480','1080x1080'].map(s => fromSize(s)),
        fromSize('1080x1080', 'PNG')
      ] },
      { name: 'Shopee 1.1 New Year Sale!!!', total: 16, date: '2025-12-24', items: [
        ...['1143065_1.1_NYS_BAU_1344x624_20251224041444842.jpg','1143064_1.1_NYS_BAU_1200x628_20251224041431544.jpg',
            '1143063_1.1_NYS_BAU_1200x600_20251224041414449.jpg','1143062_1.1_NYS_BAU_1200x200_20251224041356994.jpg',
            '1143061_1.1_NYS_BAU_1080x1920_20251224041341918.jpg','1143060_1.1_NYS_BAU_1080x1080_20251224041316316.jpg',
            '1143059_1.1_NYS_BAU_960x368_20251224041300733.jpg','1143058_1.1_NYS_BAU_728x90_20251224041243267.jpg'].map(f => fromFile(S, f)),
        ...['640x160','320x50','320x480','320x50','300x50','250x300','210x600','160x600'].map(s => fromSize(s))
      ] }
    ],
    videoCats: { beauty_and_health: 120, home_and_living: 41, fashion: 32, gadget_and_electronics: 35, groceries: 12 },
    videos: [
      ["Pond's Bright Beauty Facial 1",'Pond_s-Bright-Beauty-Facial-1.jpg','beauty_and_health'],
      ["Pond's Bright Beauty Facial 2",'Pond_s-Bright-Beauty-Facial-2.jpg','beauty_and_health'],
      ['Scarlett Whitening Brightening Facial Wash','Scarlett-Whitening-Brightening-Facial-Wash-.jpg','beauty_and_health'],
      ['Skin Game Kind Hydrating Facial Wash','Skin-Game-Kind-Hydrating-Facial-Wash.jpg','beauty_and_health'],
      ['YOU Hy Amino Facial Wash 1','YOU-Hy-Amino-Facial-Wash-1.jpg','beauty_and_health'],
      ['YOU Hy Amino Facial Wash 2','YOU-Hy-Amino-Facial-Wash-2.jpg','beauty_and_health'],
      ['SOMETHINC Low pH Gentle Jelly Cleanser','SOMETHINC-Low-pH-Gentle-Jelly-Cleanser.jpg','beauty_and_health'],
      ['SOMETHINC Calm Down Skinpair R Cover Cream Moisturizer','SOMETHINC-Calm-Down-Skinpair-R-Cover-Cream-Moisturizer.jpg','beauty_and_health'],
      ['SKINTIFIC Mugwort Acne Clay Stick 40g','SKINTIFIC-Mugwort-Acne-Clay-Stick-40g.jpg','beauty_and_health'],
      ['MAYBELLINE VINYL INK SWATCHES','1789095344_maybelline-vinyl-ink.webp','beauty_and_health'],
      ['WARDAH Crystal Secret Serum Niacinamide','1789114349_wardah-crystal-secret-serum-niacinamide-tranexamic-acid-txa-alpha-arbutin-dark-spot-brightening-serum.jpg','beauty_and_health'],
      ['Racoon Anti Kutu','Racoon-Anti-Kutu.jpg','home_and_living'],
      ['Informa Mesin Kopi','Informa-Mesin-Kopi.jpg','home_and_living'],
      ['Informa Penghisap Debu','Informa-Penghisap-Debu.jpg','home_and_living'],
      ['Freemir Wajan Panci Anti Lengket','Freemir-Wajan-Panci-Anti-Lengket.jpg','home_and_living'],
      ['Freemir Set Pisau Daging','Freemir-Set-Pisau-Daging.jpg','home_and_living'],
      ['LocknLock Oven Glass','LocknLock-Oven-Glass.jpg','home_and_living'],
      ['JINISO Highwaist Cargo','JINISO-Highwaist-Cargo.jpg','fashion'],
      ['JINISO Highwaist Rok','JINISO-Highwaist-Rok.jpg','fashion'],
      ['JINISO Jaket Jeans Oversize','JINISO-Jaket-Jeans-Oversize.jpg','fashion'],
      ['MSMO Karina Set Long Kni','MSMO-Karina-Set-Long-Kni.jpg','fashion'],
      ['MSMO Karis Assymetrical Shirt','MSMO-Karis-Assymetrical-Shirt-.jpg','fashion'],
      ['MSMO Tshirt polo pria','MSMO-Tshirt-polo-pria.jpg','fashion'],
      ['INONE Selfie Stick Tripod','INONE-Selfie-Stick-Tripod.jpg','gadget_and_electronics'],
      ['INONE Vacuum Cleaner','INONE-Vacuum-Cleaner.jpg','gadget_and_electronics'],
      ['INONE Timbangan Badan Digital','INONE-Timbangan-Badan-Digital.jpg','gadget_and_electronics'],
      ['Anker TWS Soundcore R50i','Anker-TWS-Soundcore-R50i.jpg','gadget_and_electronics'],
      ['Robot Wireless Mouse','Robot-Wireless-Mouse.jpg','gadget_and_electronics'],
      ['Vivo Y36','Vivo-Y36.jpg','gadget_and_electronics'],
      ['Dove','Dove.jpg','groceries'],['Sunsilk','Sunsilk.jpg','groceries'],['Dancow','Dancow.jpg','groceries'],
      ['Kitkat','Kitkat.jpg','groceries'],['Milo','Milo.jpg','groceries']
    ].map(([title, f, cat]) => ({ title, thumb: V + f, cat }))
  },
  {
    id: 7790, name: 'Traveloka ID', category: 'Travel And Leisure', comm: 'Up To 12.61%',
    logo: 'https://images.accesstrade.co.id/995693c15f439e3d189b06e89d145dd5/logo_20250624100930.png',
    link: 'https://atid.me/xxxxxxxx', lastUpdate: '2026-07-01',
    tabs: ['overview', 'affiliate', 'banner', 'video', 'custom', 'datafeed'],
    overview: {
      status: 'RUNNING', period: ['-', '-'], type: 'CPS',
      devices: ['PC', 'Android', 'iPhone', 'Android Tablet', 'iPad'],
      app: { web: false, mobile: false, both: true }, country: 'Indonesia', desc: '<p>-</p>',
      rewards: [['Default', '12.61%']],
      rewardCats: [['Universal Studios Tickets','0.63%'],['Attractions','2.52%'],['Bus','1.26%'],['Train','0.32%'],['Domestic Flights','0.32%'],['International Flights','0.72%']],
      window: '14 hari setelah affiliate link diklik'
    },
    bannerGroups: [
      { name: 'promo-liburan-sekolah-special', total: 14, date: '2026-06-09', items: [
        '1257681_1920x1080_20260609042849284.png','1257680_1080x1920_20260609042849245.png','1257679_1080x1080_20260609042849206.png',
        '1257678_960x720_20260609042849169.png','1257677_960x368_20260609042849129.png','1257676_790x344_20260609042849091.png',
        '1257675_782x309_20260609042849052.png','1257674_300x250_20260609042849022.png','1257673_1200x1200_20260609042848976.png',
        '1257672_1200x1500_20260609042848928.png','1257671_1200x628_20260609042848889.png','1257670_2250x4000_20260609042848850.png',
        '1257669_2250x2813_20260609042848801.png','1257668_1080x1920_20260609042848659.png'
      ].map(f => fromFile(T, f)) },
      { name: 'Traveloka ID', total: 12, date: '2026-07-01', items: [
        ...['1271016_790x344_20260701101056962.png','1271015_782x309_20260701101056927.png','1271014_600x500_20260701101056889.png',
            '1271013_1200x1500_20260701101056846.png','1271012_1200x1200_20260701101056799.png','1271011_1200x628_20260701101056764.png',
            '1271010_1080x1920_20260701101056726.png','1271009_1080x1920_20260701101056689.png','1271008_1080x1080_20260701101056650.png',
            '1271007_960x720_20260701101056611.png','1271006_960x368_20260701101056576.png'].map(f => fromFile(T, f)),
        fromSize('800x1200', 'PNG')
      ] },
      { name: 'Hotel Deals', total: 5, items: unknown(5) },
      { name: 'Disney Cruise', total: 10, items: unknown(10) },
      { name: 'Promo Lebaran Traveloka', total: 7, items: unknown(7) }
    ],
    videoCats: {}, videos: []
  },
  {
    id: 7860, name: '[New] Tokopedia CPS', category: 'E-Commerce', comm: 'Up To 24%',
    logo: 'https://images.accesstrade.co.id/ddb4955263e6c08179393d1beaf18602/logo_20260505085528.png',
    link: 'https://atid.me/xxxxxxxx', lastUpdate: null,
    tabs: ['overview', 'search', 'banner', 'video', 'datafeed'],
    overview: {
      status: 'RUNNING', period: ['6 May 26', '-'], type: 'CPS',
      devices: ['Android', 'iPhone', 'Android Tablet', 'iPad'],
      app: { web: false, mobile: false, both: true }, country: 'Indonesia',
      desc: `<p>Maksimalkan potensi pendapatan kamu dengan Tokopedia Campaign! Buat konten menarik dan arahkan audiens ke produk Tokopedia lewat link afiliasi.</p>
        <p><b>Action dihitung sah apabila:</b></p><ol><li>Pengunjung berhasil menyelesaikan pembelian melalui aplikasi.</li><li>Pengunjung berasal dari klik link publisher.</li></ol>`,
      rewards: [['Default', '24%']],
      rewardCats: [['Cate1300','7.8%'],['Cate3350','20.1%'],['Cate3400','20.4%'],['Cate150','0.9%'],['Cate200','1.2%'],['Cate250','1.5%']],
      window: '30 hari setelah affiliate link diklik'
    },
    bannerGroups: [], videoCats: {}, videos: []
  }
];

const TAB_META = {
  overview:  { label: 'OVERVIEW',        icon: '▤', color: 'var(--c-overview)' },
  affiliate: { label: 'AFFILIATE LINK',  icon: '⌂', color: 'var(--c-affiliate)' },
  search:    { label: 'SEARCH PRODUCT',  icon: '⌕', color: 'var(--c-search)' },
  banner:    { label: 'BANNER',          icon: '🖼', color: 'var(--c-banner)' },
  video:     { label: 'VIDEO',           icon: '▶', color: 'var(--c-video)' },
  custom:    { label: 'CUSTOM LINK',     icon: '🔗', color: 'var(--c-custom)' },
  datafeed:  { label: 'DATAFEED',        icon: '☰', color: 'var(--c-datafeed)' },
  xtra:      { label: 'XTRA COMMISSION', icon: '✦', color: 'var(--c-xtra)' }
};

/* =========================================================
   2. HELPERS
   ========================================================= */
const TODAY = new Date('2026-10-01');
const NEW_DAYS = 7;                                   // konten <= 7 hari = "Baru"
const $ = s => document.querySelector(s);
const byId = id => CAMPAIGNS.find(c => c.id === +id);
const sumBanner = c => c.bannerGroups.reduce((a, g) => a + g.total, 0);
const sumVideo  = c => Object.values(c.videoCats).reduce((a, n) => a + n, 0);
const isNewDate = d => d && (TODAY - new Date(d)) / 864e5 <= NEW_DAYS;
const isNew = c => isNewDate(c.lastUpdate);
const fmtDate = d => new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
const catLabel = k => k.replace(/_/g, ' ').replace(/\b\w/g, m => m.toUpperCase());
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const sizeType = (w, h) => { if (!w) return 'unknown'; const r = w / h;
  if (r > 2.2) return 'leaderboard'; if (r < .6) return 'story'; if (r >= .9 && r <= 1.1) return 'square';
  return r > 1 ? 'landscape' : 'portrait'; };
const SIZE_TYPES = [['all','Semua Ukuran'],['square','Square / Feed 1:1'],['story','Story / Vertikal'],['landscape','Landscape'],['portrait','Portrait'],['leaderboard','Leaderboard / Strip']];
const ICON = {
  img: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>',
  vid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="15" height="14" rx="2"/><path d="m17 10 5-3v10l-5-3z"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/></svg>'
};
const logoImg = c => `<img src="${c.logo}" alt="${esc(c.name)}" data-fb="logo">`;
function toast(msg){ const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 1800); }
function copy(text){
  const done = () => toast('Tersalin ke clipboard');
  if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, fallback); else fallback();
  function fallback(){ const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { toast('Salin manual: Ctrl+C'); } ta.remove(); }
}
const affBox = c => `<div class="aff-box"><div><small>AFFILIATE LINK</small><code>${c.link}</code></div>
  <button class="btn btn-outline" style="padding:5px 10px" data-act="copy" data-text="${c.link}">Salin</button></div>`;

/* Fallback gambar: kalau gambar eksternal gagal load, ganti dengan placeholder berlabel */
on(document, 'error', e => {
  const img = e.target; if (img.tagName !== 'IMG' || img.dataset.done) return; img.dataset.done = 1;
  const s = document.createElement('span'); s.className = 'fb' + (img.dataset.fb === 'logo' ? ' fb-logo' : '');
  s.textContent = img.alt || ''; img.replaceWith(s);
}, true);

/* =========================================================
   3. ROUTER (Daftar Campaign  <->  Detail Campaign)
   #/                       -> daftar campaign
   #/campaign/973           -> detail (overview)
   #/campaign/973/banner    -> detail tab banner
   ========================================================= */
function go(hash){
  try { if (location.hash !== hash) history.pushState(null, '', hash); } catch (e) { /* preview sandbox */ }
  route(hash);
}
function route(hash){
  const m = (hash || '').match(/^#\/campaign\/(\d+)(?:\/(\w+))?/);
  closeDrawer(); closeModal();
  ['#viewList', '#viewDetail', '#viewBank'].forEach(v => $(v).hidden = true);
  let nav = 'list';
  if (/^#\/bank-konten/.test(hash || '')) { $('#viewBank').hidden = false; renderBankPage(); nav = 'bank'; hideCoach(); }   // NEW
  else if (m && byId(m[1])) { showDetail(byId(m[1]), m[2] || 'overview'); }
  else { $('#viewList').hidden = false; renderGrid(); }
  $('#navList').classList.toggle('active', nav === 'list');
  $('#navBank').classList.toggle('active', nav === 'bank');
  $('#btnBank').classList.toggle('active', nav === 'bank');
  window.scrollTo(0, 0);
}
on(window, 'popstate', () => route(location.hash));

/* =========================================================
   4. VIEW: DAFTAR CAMPAIGN
   ========================================================= */
let listFilter = 'all';
function renderGrid(){
  const q = $('#q').value.toLowerCase();
  const list = CAMPAIGNS.filter(c => {
    if (q && !c.name.toLowerCase().includes(q)) return false;
    const nb = sumBanner(c), nv = sumVideo(c);
    return listFilter === 'all' || (listFilter === 'any' && nb + nv > 0) || (listFilter === 'banner' && nb > 0)
        || (listFilter === 'video' && nv > 0) || (listFilter === 'new' && isNew(c));
  });
  $('#grid').innerHTML = list.map(cardHTML).join('') || '<div class="empty" style="grid-column:1/-1">Tidak ada campaign yang cocok.</div>';
}

function previewThumbs(c, max){
  const nb = sumBanner(c), nv = sumVideo(c);
  const bItems = c.bannerGroups.flatMap(g => g.items).filter(i => i.src && i.w / i.h > .7 && i.w / i.h < 1.6).slice(0, nv ? Math.ceil((max - 1) / 2) : max - 1);
  const vItems = c.videos.slice(0, max - 1 - bItems.length);
  const rest = nb + nv - bItems.length - vItems.length;
  return [
    ...bItems.map(i => `<div class="t"><img src="${i.src}" loading="lazy" alt="Banner"></div>`),
    ...vItems.map(v => `<div class="t vid"><img src="${v.thumb}" loading="lazy" alt="Video"></div>`),
    rest > 0 ? `<div class="t more">+${rest}</div>` : ''
  ].join('');
}

function cardHTML(c){
  const nb = sumBanner(c), nv = sumVideo(c), has = nb + nv > 0;
  const bk = has ? `
    <div class="bk">
      <div class="bk-head">
        <span class="bk-title">Bank Konten ${isNew(c) ? '<span class="new-tag">NEW</span>' : ''}</span>
        <span class="bk-upd">Update ${fmtDate(c.lastUpdate)}</span>
      </div>
      <div class="bk-count">
        <span class="pill ${nb ? '' : 'zero'}">${ICON.img} ${nb} Banner</span>
        <span class="pill ${nv ? '' : 'zero'}">${ICON.vid} ${nv} Video</span>
      </div>
      <div class="thumbs">${previewThumbs(c, 4)}</div>
    </div>` : `
    <div class="bk"><div class="bk-empty"><b>Belum ada bank konten</b>Gunakan Affiliate Link atau Custom Link untuk promosi.</div></div>`;

  return `
  <article class="ccard">
    ${isNew(c) ? '<span class="ribbon new-tag">KONTEN BARU</span>' : ''}
    <div class="logo">${logoImg(c)}</div>
    <h3>${esc(c.name)}</h3>
    <div class="cat">${c.category}</div>
    <div class="comm">${c.comm}</div>
    ${bk}
    <div class="btn-row">
      <button class="btn btn-outline" data-act="detail" data-c="${c.id}">DETAIL</button>
      <button class="btn btn-orange" data-act="copy" data-text="${c.link}">AMBIL LINK</button>
      <button class="btn btn-bk" ${has ? '' : 'disabled'} data-act="drawer" data-c="${c.id}">${ICON.box} LIHAT BANK KONTEN</button>
    </div>
  </article>`;
}

/* =========================================================
   5. VIEW: DETAIL CAMPAIGN
   ========================================================= */
function showDetail(c, tab){
  if (!c.tabs.includes(tab)) tab = 'overview';
  $('#viewList').hidden = true; $('#viewDetail').hidden = false;
  $('#dLogo').innerHTML = logoImg(c); $('#dName').textContent = c.name;
  $('#dTabs').innerHTML = c.tabs.map(t => {
    const meta = TAB_META[t];
    const n = t === 'banner' ? sumBanner(c) : t === 'video' ? sumVideo(c) : null;   // NEW ▸ badge jumlah konten di tab
    return `<button class="ptab ${t === tab ? 'active' : ''} ${n === 0 ? 'zero' : ''}" style="--c:${meta.color}" data-act="tab" data-c="${c.id}" data-tab="${t}">
      <span>${meta.icon}</span> ${meta.label}${n !== null ? ` <span class="n">${n}</span>` : ''}</button>`;
  }).join('');

  const box = $('#dContent');
  if (tab === 'overview') box.innerHTML = overviewHTML(c);
  else if (tab === 'banner' || tab === 'video') {
    box.innerHTML = `<div class="tab-panel">
      <div class="info ${tab === 'banner' ? 'cyan' : 'red'}">${tab === 'banner' ? 'Banner' : 'Video'} campaign disediakan untuk memudahkan kamu membagikan link afiliasi. ${tab === 'banner' ? 'Banner' : 'Video'} ini sudah termasuk link afiliasi yang mengarah ke halaman promo atau produk tertentu. Terdapat juga Custom Link untuk mempromosikan produk spesifik.</div>
      <div id="pgTools"></div><div id="pgBody"></div></div>`;
    mountBank('page', c, tab, $('#pgTools'), $('#pgBody'));
    if (tab === 'banner' && pendingGroup !== null) { CTX.page.st.group = String(pendingGroup); drawTools(CTX.page); drawBody(CTX.page); }
    pendingGroup = null;
  }
  else if (tab === 'affiliate') box.innerHTML = `<div class="tab-panel">${affBox(c)}<p class="placeholder-tab">Tab Affiliate Link existing (tidak diubah di mockup ini).</p></div>`;
  else box.innerHTML = `<div class="tab-panel"><p class="placeholder-tab">Tab <b>${TAB_META[tab].label}</b> existing — tidak diubah di mockup ini.</p></div>`;
}

function overviewHTML(c){
  const o = c.overview, nb = sumBanner(c), nv = sumVideo(c);
  const latest = c.bannerGroups.filter(g => g.date).sort((a, b) => b.date.localeCompare(a.date))[0];
  const tick = v => v ? '<span class="ok">✔</span>' : '<span class="no">✖</span>';

  // NEW ▸ ringkasan bank konten langsung di Overview
  const bank = (nb + nv) ? `
    <div class="bk" style="margin-top:16px">
      <div class="bk-head"><span class="bk-title">Bank Konten ${isNew(c) ? '<span class="new-tag">NEW</span>' : ''}</span>
        <span class="bk-upd">Update ${fmtDate(c.lastUpdate)}</span></div>
      <div class="bk-count">
        <span class="pill ${nb ? '' : 'zero'}">${ICON.img} ${nb} Banner · ${c.bannerGroups.length} promo</span>
        <span class="pill ${nv ? '' : 'zero'}">${ICON.vid} ${nv} Video · ${Object.keys(c.videoCats).length} kategori</span>
      </div>
      ${latest ? `<div class="bk-latest">Promo terbaru: <b>${esc(latest.name)}</b> (${latest.total} banner) ${isNewDate(latest.date) ? '<span class="new-tag">NEW</span>' : ''}</div>` : ''}
      <div class="thumbs six">${previewThumbs(c, 6)}</div>
      <div class="bk-actions">
        ${nb ? `<button class="btn btn-cyan" data-act="tab" data-c="${c.id}" data-tab="banner">🖼 Lihat Banner (${nb})</button>` : ''}
        ${nv ? `<button class="btn btn-red" data-act="tab" data-c="${c.id}" data-tab="video">▶ Lihat Video (${nv})</button>` : ''}
      </div>
    </div>` : `
    <div class="bk" style="margin-top:16px"><div class="bk-empty"><b>Belum ada bank konten untuk campaign ini</b>
      Kamu tetap bisa promosi pakai Affiliate Link atau Custom Link.<br><br>
      <button class="btn btn-outline" data-act="toast" data-msg="Request konten terkirim ke Account Manager (mock)">Request konten ke AM</button></div></div>`;

  return `<div class="dgrid">
    <div class="dleft">
      ${affBox(c)}
      <div class="sec-h">Campaign</div>
      <div class="igrid">
        <div><label>Status:</label><span class="badge b-run">${o.status}</span>
          <label style="margin-top:10px">Periode:</label>🔵 ${o.period[0]}<br>🔴 ${o.period[1]}</div>
        <div><label>Kategori:</label><span class="badge b-cat">${c.category}</span>
          <label style="margin-top:10px">Tipe:</label><span class="badge b-type">${o.type}</span></div>
        <div><label>Perangkat:</label>${o.devices.join('<br>')}</div>
        <div><label>Aplikasi:</label>${tick(o.app.web)} Hanya Web<br>${tick(o.app.mobile)} Hanya Aplikasi Mobile<br>${tick(o.app.both)} Web &amp; Aplikasi Mobile</div>
        <div><label>Negara:</label>${o.country}</div>
      </div>
      ${bank}
      <div class="sec-h">Deskripsi</div>
      <div class="desc">${o.desc}</div>
    </div>
    <div class="dright">
      <div class="sec-h" style="margin-top:0">Komisi</div>
      <b>Hadiah:</b>
      <ol class="comm-list">${o.rewards.map(([k, v]) => `<li>${k} - <b>Sales ${v}</b></li>`).join('')}</ol>
      ${o.rewardCats.length ? `<b>Hadiah berdasarkan Kategori:</b>
        <ol class="comm-list">${o.rewardCats.map(([k, v]) => `<li>${k} - <b>Sales ${v}</b></li>`).join('')}</ol>` : ''}
      <div class="sec-h">Konversi</div>
      <div style="font-size:13px"><b>Jendela Konversi:</b><br>${o.window}</div>
    </div>
  </div>`;
}

/* =========================================================
   6. KOMPONEN BANK KONTEN (dipakai di Drawer & Halaman Detail)
   mode 'drawer' = ringkas (hanya item yg ada preview + tile "lihat semua")
   mode 'page'   = lengkap (semua item, filter per grup)
   ========================================================= */
const CTX = {};
function mountBank(key, c, tab, toolsEl, bodyEl){
  CTX[key] = { key, c, tab, toolsEl, bodyEl, st: { group: 'all', size: 'all', gsize: {}, cat: 'all', q: '' } };
  drawTools(CTX[key]); drawBody(CTX[key]);
}

function drawTools(x){
  const c = x.c;
  if (x.tab === 'banner') {
    if (!c.bannerGroups.length) { x.toolsEl.innerHTML = ''; return; }
    x.toolsEl.innerHTML = `<div class="toolbar">
      <select class="select" data-ctx="${x.key}" data-f="group"><option value="all">Semua Promo (${c.bannerGroups.length})</option>
        ${c.bannerGroups.map((g, i) => `<option value="${i}" ${x.st.group == i ? 'selected' : ''}>${esc(g.name)} (${g.total})${isNewDate(g.date) ? ' • BARU' : ''}</option>`).join('')}</select>
      <select class="select" data-ctx="${x.key}" data-f="size">${SIZE_TYPES.map(([v, l]) => `<option value="${v}" ${x.st.size === v ? 'selected' : ''}>${l}</option>`).join('')}</select>
      <span class="result" id="res-${x.key}"></span></div>`;
  } else {
    if (!c.videos.length) { x.toolsEl.innerHTML = ''; return; }
    x.toolsEl.innerHTML = `<div class="toolbar">
      <select class="select" data-ctx="${x.key}" data-f="cat"><option value="all">Semua Kategori (${sumVideo(c)})</option>
        ${Object.entries(c.videoCats).map(([k, n]) => `<option value="${k}" ${x.st.cat === k ? 'selected' : ''}>${catLabel(k)} (${n})</option>`).join('')}</select>
      <input class="input" data-ctx="${x.key}" data-f="q" placeholder="Cari produk, mis. Skintific" value="${esc(x.st.q)}">
      <span class="result" id="res-${x.key}"></span></div>`;
  }
}

function drawBody(x){
  x.bodyEl.innerHTML = x.tab === 'banner' ? bannerBody(x) : videoBody(x);
}

function videoCard(c, v, i, showCamp){
  return `<div class="acard video">
    <div class="img" data-act="prev-v" data-c="${c.id}" data-i="${i}"><img src="${v.thumb}" loading="lazy" alt="${esc(v.title)}"></div>
    <div class="title">${esc(v.title)}</div>
    <div style="padding:4px 8px 0;display:flex;gap:4px;flex-wrap:wrap">${showCamp ? `<span class="camp-chip">${esc(c.name)}</span>` : ''}<span class="cat-tag">${catLabel(v.cat)}</span></div>
    <div class="acts"><button class="b-link" data-act="link-v" data-c="${c.id}" data-i="${i}">GET LINK</button><button class="b-dl" data-act="prev-v" data-c="${c.id}" data-i="${i}">PUTAR</button></div>
  </div>`;
}

function bannerCard(c, gi, it, ii, arch){
  const size = it.w ? `${it.w} × ${it.h}` : 'Ukuran —';
  const a = `data-c="${c.id}" data-g="${gi}" data-i="${ii}"`;
  return `<div class="acard${arch ? ' archived' : ''}">
    <div class="meta"><b>${size}</b><span>${it.fmt}</span></div>
    <div class="img" data-act="prev-b" ${a}>${it.src
      ? `<img src="${it.src}" loading="lazy" alt="${it.w}x${it.h}">`
      : `<span class="ph">${it.w ? it.w + '×' + it.h : 'Banner'}<small>preview belum diambil di mockup</small></span>`}</div>
    <div class="acts"><button class="b-link" data-act="link-b" ${a}>GET LINK</button><button class="b-dl" data-act="dl-b" ${a}>UNDUH</button></div>
  </div>`;
}

function bannerBody(x){
  const c = x.c, st = x.st, page = x.key === 'page';
  if (!c.bannerGroups.length) return emptyHTML('banner');
  let shownTotal = 0;
  const html = c.bannerGroups.map((g, gi) => {
    if (st.group !== 'all' && +st.group !== gi) return '';
    const gs = st.gsize[gi] || 'all';
    let items = g.items.map((it, ii) => ({ it, ii }))
      .filter(({ it }) => (st.size === 'all' || sizeType(it.w, it.h) === st.size) && (gs === 'all' || `${it.w}x${it.h}` === gs));
    if (!page) items = items.filter(({ it }) => it.src);
    const filtered = st.size !== 'all' || gs !== 'all';
    if (!items.length && filtered) return '';
    shownTotal += items.length;
    const rest = g.total - items.length;
    const sizes = [...new Set(g.items.filter(i => i.w).map(i => `${i.w}x${i.h}`))];
    return `<section class="grp">
      <div class="grp-h"><b>${esc(g.name)} <span class="cnt">(${g.total})</span> ${statusBadge(g)}</b>
        ${page && sizes.length ? `<select class="select" data-ctx="${x.key}" data-f="gsize" data-g="${gi}"><option value="all">All Size</option>
          ${sizes.map(s => `<option value="${s}" ${gs === s ? 'selected' : ''}>${s.replace('x', ' x ')}</option>`).join('')}</select>` : ''}</div>
      <div class="agrid">
        ${items.map(({ it, ii }) => bannerCard(c, gi, it, ii, groupStatus(g) === 'arsip')).join('')}
        ${!page && !filtered && rest > 0 ? `<div class="more-tile"><div>+${rest} banner lainnya<br>
          <button data-act="more" data-c="${c.id}" data-tab="banner">Lihat semua di Detail →</button></div></div>` : ''}
      </div></section>`;
  }).join('');
  setTimeout(() => { const r = document.getElementById('res-' + x.key); if (r) r.textContent = `${shownTotal} banner ditampilkan`; });
  return html || '<div class="empty">Tidak ada banner dengan ukuran ini.</div>';
}

function videoBody(x){
  const c = x.c, st = x.st, page = x.key === 'page';
  if (!c.videos.length) return emptyHTML('video');
  const all = c.videos.map((v, i) => ({ v, i })).filter(({ v }) => (st.cat === 'all' || v.cat === st.cat) && v.title.toLowerCase().includes(st.q.toLowerCase()));
  const list = page ? all : all.slice(0, 8);
  const total = st.cat === 'all' ? sumVideo(c) : c.videoCats[st.cat];
  const rest = total - list.length;
  setTimeout(() => { const r = document.getElementById('res-' + x.key); if (r) r.textContent = `${list.length} dari ${total} video`; });
  if (!list.length) return '<div class="empty">Video tidak ditemukan.</div>';
  return `<div class="agrid">
    ${list.map(({ v, i }) => videoCard(c, v, i)).join('')}
    ${rest > 0 && !st.q ? `<div class="more-tile"><div>+${rest} video lainnya<br>${page
      ? '<small>(mockup hanya memuat sebagian data)</small>'
      : `<button data-act="more" data-c="${c.id}" data-tab="video">Lihat semua di Detail →</button>`}</div></div>` : ''}
  </div>`;
}

function emptyHTML(type){
  return `<div class="empty"><div class="ic">${type === 'banner' ? '🖼' : '🎬'}</div>
    <b>Belum ada ${type} untuk campaign ini</b>
    Kamu tetap bisa promosi pakai Affiliate Link atau Custom Link.<br><br>
    <button class="btn btn-outline" data-act="toast" data-msg="Request ${type} terkirim ke Account Manager (mock)">Request ${type} ke AM</button></div>`;
}

/* =========================================================
   7. DRAWER (quick view dari Daftar Campaign)
   ========================================================= */
let drawerC = null;
function openDrawer(id, tab){
  const c = byId(id); drawerC = c;
  tab = tab || (sumBanner(c) ? 'banner' : 'video');
  $('#drLogo').innerHTML = logoImg(c); $('#drName').textContent = c.name;
  $('#drSub').textContent = `${c.category} · ${c.comm}`;
  $('#drLink').innerHTML = affBox(c);
  $('#drTabs').innerHTML = ['banner', 'video'].map(t => {
    const m = TAB_META[t], n = t === 'banner' ? sumBanner(c) : sumVideo(c);
    return `<button class="ptab ${t === tab ? 'active' : ''} ${n === 0 ? 'zero' : ''}" style="--c:${m.color}" data-act="drawer-tab" data-tab="${t}">${m.icon} ${m.label} <span class="n">${n}</span></button>`;
  }).join('') + `<button class="open-detail" data-act="more" data-c="${c.id}" data-tab="${tab}">Buka halaman Detail →</button>`;
  mountBank('drawer', c, tab, $('#drTools'), $('#drBody'));
  $('#drawer').classList.add('show'); $('#overlay').classList.add('show');
  $('#drawer').setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
}
function closeDrawer(){
  $('#drawer').classList.remove('show'); $('#overlay').classList.remove('show');
  $('#drawer').setAttribute('aria-hidden', 'true'); document.body.style.overflow = '';
}

/* =========================================================
   8. MODAL GET LINK / PREVIEW
   ========================================================= */
function openModal(title, html){ $('#mTitle').textContent = title; $('#mBody').innerHTML = html; $('#modal').classList.add('show'); }
function closeModal(){ $('#modal').classList.remove('show'); }
const copyRow = (label, value, rows) => `<div class="field"><label>${label}</label><div class="copybox">
  ${rows ? `<textarea rows="${rows}" readonly>${esc(value)}</textarea>` : `<input readonly value="${esc(value)}">`}
  <button data-act="copy" data-text="${esc(value)}">Salin</button></div></div>`;

function bannerPreviewHTML(it, maxH){
  return it.src ? `<img src="${it.src}" alt="${it.w}x${it.h}" style="max-height:${maxH}px">`
                : `<span class="ph" style="height:${Math.min(maxH, 160)}px">${it.w ? it.w + '×' + it.h : 'Banner'}<small>preview belum diambil di mockup</small></span>`;
}
function previewBanner(c, gi, ii){
  const g = c.bannerGroups[gi], it = g.items[ii];
  openModal(`${g.name} · ${it.w ? it.w + '×' + it.h : ''}`, `<div class="mprev">${bannerPreviewHTML(it, 300)}</div>
    <button class="btn btn-orange" style="width:100%" data-act="link-b" data-c="${c.id}" data-g="${gi}" data-i="${ii}">GET LINK</button>`);
}
function getLinkBanner(c, gi, ii){
  const g = c.bannerGroups[gi], it = g.items[ii];
  const code = `<a href="${c.link}" target="_blank" rel="sponsored noopener"><img src="${it.src || '[URL_BANNER]'}"${it.w ? ` width="${it.w}" height="${it.h}"` : ''} alt="${g.name}"></a>`;
  openModal(`Get Link · ${it.w ? it.w + '×' + it.h : g.name}`, `
    ${groupStatus(g) === 'arsip' ? '<div class="warn">⚠ Promo <b>' + esc(g.name) + '</b> sudah berakhir. Pastikan kamu tidak mempromosikan diskon yang sudah tidak berlaku.</div>' : ''}
    <div class="mprev">${bannerPreviewHTML(it, 180)}</div>
    ${copyRow('Affiliate Link', c.link)}
    ${copyRow('Kode HTML (pasang di website/blog)', code, 4)}`);
}
function previewVideo(c, i){
  const v = c.videos[i];
  openModal(v.title, `<div class="mprev"><img src="${v.thumb}" alt="${esc(v.title)}">
    <span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,.6);color:#fff;border-radius:50%;width:60px;height:60px;display:flex;align-items:center;justify-content:center;font-size:22px">▶</span></div>
    <p style="font-size:12px;color:var(--ink-2);margin:0 0 10px">*Mockup: di production pakai player video existing.</p>
    <button class="btn btn-orange" style="width:100%" data-act="link-v" data-c="${c.id}" data-i="${i}">GET LINK</button>`);
}
function getLinkVideo(c, i){
  const v = c.videos[i];
  openModal('Get Link · Video', `
    <div class="field"><label>Produk</label><b>${esc(v.title)}</b></div>
    ${copyRow('Affiliate Link', c.link)}
    ${copyRow('Caption siap pakai (TikTok/IG/Reels)', `Lagi cari ${v.title}? Cek promonya di sini 👉 ${c.link}`, 3)}`);
}

/* =========================================================
   8b. NEW ▸ HALAMAN BANK KONTEN GLOBAL  (#/bank-konten)
   Menggabungkan banner & video dari semua campaign terafiliasi.
   API usulan:
     GET /api/publisher/content-bank?type=banner|video&campaign=&status=aktif|arsip&size=&category=&q=
     GET /api/publisher/content-bank/summary   -> stats + promo terbaru + jumlah konten baru (badge header)
   ========================================================= */

/* Periode promo -> status AKTIF / ARSIP.
   Dev: ambil dari field end_date per banner group (mockup: diisi manual). null = evergreen */
const PROMO_END = {
  'Shopee 10.10 Brands Festival': '2026-10-10', 'Shopee 7.7 Great Mid Year Sale': '2026-07-07',
  'Shopee ID Peak Ramadhan 9.3': '2026-03-09', 'Shopee 1.1 New Year Sale!!!': '2026-01-01',
  'promo-liburan-sekolah-special': '2026-07-15', 'Promo Lebaran Traveloka': '2026-03-31'
};
CAMPAIGNS.forEach(c => { c.affiliated = true; c.bannerGroups.forEach(g => { g.end = PROMO_END[g.name] || null; }); });
const groupStatus = g => (g.end && new Date(g.end) < TODAY) ? 'arsip' : 'aktif';
const fmtShort = d => new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
function statusBadge(g){
  const s = groupStatus(g);
  return (isNewDate(g.date) ? '<span class="new-tag">NEW</span> ' : '')
    + (s === 'arsip' ? '<span class="st-badge st-arsip">ARSIP</span>'
                     : `<span class="st-badge st-aktif">AKTIF${g.end ? ' s.d. ' + fmtShort(g.end) : ''}</span>`);
}

/* Campaign yang belum diikuti (data asli dari tab Tersedia). Saat ini halaman detailnya
   hanya menampilkan APPLY NOW, jadi bank kontennya ditampilkan terkunci. */
const NOT_JOINED = [
  { id: 8024, name: 'OPPO ID', category: 'E-Commerce', comm: 'Up To 1.2%', logo: 'https://images.accesstrade.co.id/859555c74e9afd45ab771c615c1e49a6/logo_20260717063143.png' },
  { id: 7995, name: '[New] Trip.com Direct', category: 'Travel And Leisure', comm: 'Up To 3.51%', logo: 'https://images.accesstrade.co.id/2d44e06a7038f2dd98f0f54c4be35e22/logo_20260204100637.png' },
  { id: 8021, name: 'Dario Website', category: 'E-Commerce', comm: 'Up To 8%', logo: 'https://images.accesstrade.co.id/31917677a66c6eddd3ab1f68b0679e2f/logo_20260610081132.png' },
  { id: 7988, name: 'Otten Coffee CPS', category: 'E-Commerce', comm: 'Up To 2.5%', logo: 'https://images.accesstrade.co.id/c02d0450cdd75ce7595f5eaeb5f041a3/logo_20260121102231.png' }
];
const applied = new Set();
const BK = { tab: 'banner', q: '', camp: 'all', status: 'aktif', size: 'all', cat: 'all', promo: null };
let pendingGroup = null;

const joined = () => CAMPAIGNS.filter(c => c.affiliated);
const newContentCount = () => joined().reduce((a, c) => a + c.bannerGroups.filter(g => isNewDate(g.date)).reduce((x, g) => x + g.total, 0), 0);
function setRes(t){ setTimeout(() => { const r = $('#res-bk'); if (r) r.textContent = t; }); }
function hideCoach(){ const c = $('#coach'); if (c) c.hidden = true; }

function renderBankPage(){
  const camps = joined();
  const nb = camps.reduce((a, c) => a + sumBanner(c), 0), nv = camps.reduce((a, c) => a + sumVideo(c), 0);
  const withC = camps.filter(c => sumBanner(c) + sumVideo(c) > 0).length;
  $('#bkStats').innerHTML = [[nb, 'Banner siap pakai'], [nv, 'Video siap pakai'],
    [`${withC}/${camps.length}`, 'Campaign punya bank konten'], [newContentCount(), 'Konten baru 7 hari terakhir']]
    .map(([n, l]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`).join('');

  const promos = camps.flatMap(c => c.bannerGroups.map((g, gi) => ({ c, g, gi })))
    .filter(x => groupStatus(x.g) === 'aktif' && x.g.date)
    .sort((a, b) => b.g.date.localeCompare(a.g.date)).slice(0, 4);
  $('#bkPromos').innerHTML = promos.map(({ c, g, gi }) => {
    const th = g.items.find(i => i.src && i.w / i.h > .7 && i.w / i.h < 1.6) || g.items.find(i => i.src);
    return `<button class="promo" data-act="bank-promo" data-c="${c.id}" data-g="${gi}">
      <div class="pimg">${th ? `<img src="${th.src}" alt="${esc(g.name)}">` : '<span class="ph">Banner</span>'}</div>
      <div class="pb"><div class="pc">${logoImg(c)} ${esc(c.name)}</div>
        <div class="pn">${esc(g.name)}</div>
        <div class="pm">${g.total} banner · ${statusBadge(g)}</div></div></button>`;
  }).join('');

  renderBankTabs(); renderBankTools(); renderBankBody(); renderLocked();
}

function renderBankTabs(){
  const camps = joined();
  $('#bkTabs').innerHTML = ['banner', 'video'].map(t => {
    const m = TAB_META[t], n = camps.reduce((a, c) => a + (t === 'banner' ? sumBanner(c) : sumVideo(c)), 0);
    return `<button class="ptab ${BK.tab === t ? 'active' : ''}" style="--c:${m.color}" data-act="bank-tab" data-tab="${t}">${m.icon} ${m.label} <span class="n">${n}</span></button>`;
  }).join('');
}

function renderBankTools(){
  const camps = joined().filter(c => BK.tab === 'banner' ? sumBanner(c) : sumVideo(c));
  const campSel = `<select class="select" data-bk="camp"><option value="all">Semua Campaign (${camps.length})</option>
    ${camps.map(c => `<option value="${c.id}" ${BK.camp == c.id ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}</select>`;
  const q = `<input class="input" data-bk="q" value="${esc(BK.q)}" placeholder="${BK.tab === 'banner' ? 'Cari campaign / promo, mis. 10.10' : 'Cari produk, mis. Skintific'}">`;
  let extra = '';
  if (BK.tab === 'banner') {
    extra = `<div class="seg">${[['aktif', 'Aktif'], ['arsip', 'Arsip'], ['all', 'Semua']].map(([v, l]) =>
      `<button class="${BK.status === v ? 'on' : ''}" data-act="bk-status" data-v="${v}">${l}</button>`).join('')}</div>
      <select class="select" data-bk="size">${SIZE_TYPES.map(([v, l]) => `<option value="${v}" ${BK.size === v ? 'selected' : ''}>${l}</option>`).join('')}</select>`;
    if (BK.promo) { const g = byId(BK.promo.c).bannerGroups[BK.promo.g];
      extra += `<span class="promo-chip">Promo: ${esc(g.name)} <button data-act="bk-clear-promo" aria-label="Hapus filter promo">✕</button></span>`; }
  } else {
    const cats = {}; camps.filter(c => BK.camp === 'all' || c.id == BK.camp)
      .forEach(c => Object.entries(c.videoCats).forEach(([k, n]) => cats[k] = (cats[k] || 0) + n));
    extra = `<select class="select" data-bk="cat"><option value="all">Semua Kategori</option>
      ${Object.entries(cats).map(([k, n]) => `<option value="${k}" ${BK.cat === k ? 'selected' : ''}>${catLabel(k)} (${n})</option>`).join('')}</select>`;
  }
  $('#bkTools').innerHTML = `<div class="toolbar">${q}${campSel}${extra}<span class="result" id="res-bk"></span></div>`;
}

function renderBankBody(){ $('#bkBody').innerHTML = BK.tab === 'banner' ? bankBannerBody() : bankVideoBody(); }

function bankBannerBody(){
  const q = BK.q.toLowerCase(); let shown = 0;
  let groups = joined().filter(c => BK.camp === 'all' || c.id == BK.camp)
    .flatMap(c => c.bannerGroups.map((g, gi) => ({ c, g, gi })));
  if (BK.promo) groups = groups.filter(x => x.c.id === BK.promo.c && x.gi === BK.promo.g);
  groups = groups.filter(x => (BK.status === 'all' || groupStatus(x.g) === BK.status)
    && (!q || (x.c.name + ' ' + x.g.name).toLowerCase().includes(q)));
  groups.sort((a, b) => (groupStatus(a.g) === 'aktif' ? 0 : 1) - (groupStatus(b.g) === 'aktif' ? 0 : 1)
    || (b.g.date || '').localeCompare(a.g.date || ''));
  let nGroups = 0;
  const html = groups.map(({ c, g, gi }) => {
    const items = g.items.map((it, ii) => ({ it, ii })).filter(({ it }) => BK.size === 'all' || sizeType(it.w, it.h) === BK.size)
      .sort((a, b) => (b.it.src ? 1 : 0) - (a.it.src ? 1 : 0));
    if (!items.length) return '';
    nGroups++; shown += items.length;
    const limit = BK.promo ? items.length : 5, show = items.slice(0, limit), rest = items.length - show.length;
    const arch = groupStatus(g) === 'arsip';
    return `<section class="grp">
      <div class="grp-h"><b class="gcamp"><span class="gl">${logoImg(c)}</span>${esc(c.name)} · ${esc(g.name)} <span class="cnt">(${g.total})</span> ${statusBadge(g)}</b>
        <button class="btn btn-outline" style="padding:4px 10px;font-size:12px" data-act="tab" data-c="${c.id}" data-tab="banner" data-g="${gi}">Buka di Detail →</button></div>
      <div class="agrid">${show.map(({ it, ii }) => bannerCard(c, gi, it, ii, arch)).join('')}
        ${rest > 0 ? `<div class="more-tile"><div>+${rest} banner lainnya<br><button data-act="bank-promo" data-c="${c.id}" data-g="${gi}">Lihat semua →</button></div></div>` : ''}</div>
    </section>`;
  }).join('');
  setRes(`${shown} banner · ${nGroups} promo`);
  return html || `<div class="empty"><div class="ic">🔍</div><b>Banner tidak ditemukan</b>Coba ubah status promo (Aktif/Arsip) atau filter ukuran.</div>`;
}

function bankVideoBody(){
  const q = BK.q.toLowerCase();
  const camps = joined().filter(c => BK.camp === 'all' || c.id == BK.camp);
  const all = camps.flatMap(c => c.videos.map((v, i) => ({ c, v, i })))
    .filter(({ c, v }) => (BK.cat === 'all' || v.cat === BK.cat) && (!q || (v.title + ' ' + c.name).toLowerCase().includes(q)));
  const total = camps.reduce((a, c) => a + (BK.cat === 'all' ? sumVideo(c) : (c.videoCats[BK.cat] || 0)), 0);
  const list = all.slice(0, 24);
  setRes(q ? `${list.length} video cocok` : `${list.length} dari ${total} video`);
  if (!list.length) return `<div class="empty"><div class="ic">🎬</div><b>Video tidak ditemukan</b>Coba kata kunci atau kategori lain.</div>`;
  const vc = camps.find(c => c.videos.length);
  return `<div class="agrid">${list.map(({ c, v, i }) => videoCard(c, v, i, true)).join('')}
    ${!q && total > list.length && vc ? `<div class="more-tile"><div>+${total - list.length} video lainnya<br>
      <button data-act="tab" data-c="${vc.id}" data-tab="video">Lihat semua →</button></div></div>` : ''}</div>`;
}

function renderLocked(){
  $('#bkLocked').innerHTML = NOT_JOINED.map(c => `<div class="lcard">
    <div class="ll"><img src="${c.logo}" alt="${esc(c.name)}" data-fb="logo"></div>
    <b>${esc(c.name)}</b>
    <div style="font-size:12px;color:var(--ink-2)">${c.category} · <b style="color:var(--ink)">${c.comm}</b></div>
    <div class="lock">🔒 Bank konten terbuka setelah kamu bergabung</div>
    ${applied.has(c.id) ? '<button class="btn btn-outline" disabled>⏳ MENUNGGU PERSETUJUAN</button>'
                        : `<button class="btn btn-orange" data-act="apply" data-id="${c.id}">DAFTAR</button>`}
  </div>`).join('');
}
function openApply(id){
  const c = NOT_JOINED.find(x => x.id === id);
  openModal('Daftar Campaign', `<p style="margin-top:0">Ajukan bergabung ke <b>${esc(c.name)}</b> (${c.comm})?</p>
    <p style="font-size:12px;color:var(--ink-2)">Setelah disetujui advertiser, campaign akan pindah ke tab Terafiliasi dan bank kontennya otomatis muncul di halaman ini.</p>
    <button class="btn btn-orange" style="width:100%" data-act="apply-ok" data-id="${id}">AJUKAN SEKARANG</button>`);
}

/* =========================================================
   9. EVENT DELEGATION (semua tombol pakai data-act)
   ========================================================= */
on(document, 'click', e => {
  const el = e.target.closest('[data-act]'); if (!el) return;
  const d = el.dataset, c = d.c ? byId(d.c) : null;
  switch (d.act) {
    case 'home':        go('#/'); break;
    case 'detail':      go(`#/campaign/${d.c}`); break;
    case 'tab':         pendingGroup = d.g !== undefined ? +d.g : null; go(`#/campaign/${d.c}/${d.tab}`); break;
    case 'more':        go(`#/campaign/${d.c}/${d.tab}`); break;
    case 'drawer':      openDrawer(d.c); break;
    case 'drawer-tab':  openDrawer(drawerC.id, d.tab); break;
    case 'close-drawer':closeDrawer(); break;
    case 'close-modal': closeModal(); break;
    case 'close-modal-bg': if (e.target === el) closeModal(); break;
    case 'copy':        copy(d.text); break;
    case 'toast':       toast(d.msg); break;
    case 'prev-b':      previewBanner(c, +d.g, +d.i); break;
    case 'link-b':      getLinkBanner(c, +d.g, +d.i); break;
    case 'dl-b': { const it = c.bannerGroups[+d.g].items[+d.i];
                   it.src ? window.open(it.src, '_blank') : toast('File banner belum tersedia di mockup'); break; }
    case 'prev-v':      previewVideo(c, +d.i); break;
    case 'link-v':      getLinkVideo(c, +d.i); break;
    /* NEW ▸ Bank Konten global */
    case 'bank':        go('#/bank-konten'); break;
    case 'coach-close': hideCoach(); break;
    case 'bank-tab':    BK.tab = d.tab; BK.q = ''; renderBankTabs(); renderBankTools(); renderBankBody(); break;
    case 'bk-status':   BK.status = d.v; renderBankTools(); renderBankBody(); break;
    case 'bank-promo':  Object.assign(BK, { tab: 'banner', camp: d.c, status: 'all', size: 'all', q: '', promo: { c: +d.c, g: +d.g } });
                        renderBankTabs(); renderBankTools(); renderBankBody(); $('#bkPanel').scrollIntoView({ behavior: 'smooth' }); break;
    case 'bk-clear-promo': BK.promo = null; BK.status = 'aktif'; renderBankTools(); renderBankBody(); break;
    case 'apply':       openApply(+d.id); break;
    case 'apply-ok':    applied.add(+d.id); closeModal(); renderLocked(); toast('Pengajuan terkirim. Bank konten terbuka setelah disetujui.'); break;
  }
});
function onFilter(e){
  const el = e.target; if (!el.dataset || !el.dataset.ctx) return;
  const x = CTX[el.dataset.ctx]; if (!x) return;
  if (el.dataset.f === 'gsize') x.st.gsize[el.dataset.g] = el.value; else x.st[el.dataset.f] = el.value;
  drawBody(x);
}
on(document, 'change', onFilter);
on(document, 'input', e => { if (e.target.dataset && e.target.dataset.f === 'q') onFilter(e); });
function onBkFilter(e){
  const el = e.target; if (!el.dataset || !el.dataset.bk) return;
  BK[el.dataset.bk] = el.value;
  if (el.dataset.bk === 'camp') { BK.promo = null; if (BK.tab === 'video') BK.cat = 'all'; renderBankTools(); }
  renderBankBody();
}
on(document, 'change', onBkFilter);
on(document, 'input', e => { if (e.target.dataset && e.target.dataset.bk === 'q') onBkFilter(e); });

on($('#chips'), 'click', e => {
  const ch = e.target.closest('.chip'); if (!ch) return;
  document.querySelectorAll('.chip').forEach(x => x.classList.toggle('on', x === ch));
  listFilter = ch.dataset.f; renderGrid();
});
on($('#q'), 'input', renderGrid);
on(document, 'keydown', e => { if (e.key === 'Escape') { $('#modal').classList.contains('show') ? closeModal() : closeDrawer(); } });

$('#bankDot').textContent = newContentCount() || '';   // NEW ▸ jumlah konten baru di tombol header
route(location.hash);

  return destroyAccesstradeMockup;
}
