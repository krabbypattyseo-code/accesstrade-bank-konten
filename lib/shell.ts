export const SHELL_HTML = `<div class="app">
  <!-- ================= SIDEBAR (existing) ================= -->
  <aside class="sidebar">
    <div class="earn">
      <div><span>Penghasilan (IDR) :</span><b>999.999.999</b></div>
      <div><span>Superpoint :</span><b>999.999 Point</b></div>
    </div>
    <div class="site"><small>Pilih Situs Anda</small><div class="sel"><span>🌐 Domba Jago</span><span>⌄</span></div></div>
    <ul class="menu">
      <li>Beranda</li>
      <li>AT Challenge <span class="badge-new">Baru</span></li>
      <li class="open">Direktori Campaign <span>⌃</span></li>
      <li class="sub active" id="navList"><span data-act="home">Daftar Campaign</span></li>
      <li class="sub" id="navBank"><span data-act="bank">Bank Konten <span class="badge-new">Baru</span></span></li>
      <li class="sub"><span>Custom Link</span></li>
      <li>Campaign Spesial <span>⌄</span></li>
      <li>Laporan <span>⌄</span></li>
      <li>Referral <span>⌄</span></li>
      <li>AT Tools <span>⌄</span></li>
      <li>Pengaturan <span>⌄</span></li>
      <li>Voucher</li><li>Event</li><li>Pusat Bantuan</li>
    </ul>
  </aside>

  <!-- ================= MAIN ================= -->
  <div class="main">
    <header class="topbar">
      <div class="logo"><img src="https://db.accesstrade.co.id/Assets/img/AT_logo_mini.png" alt="ACCESSTRADE" onerror="this.replaceWith(document.createTextNode('ACCESSTRADE'))"></div>
      <!-- NEW ▸ tombol Bank Konten di samping Custom Link -->
      <div class="top-actions">
        <button class="btn-bank" id="btnBank" data-act="bank" title="Bank Konten">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/></svg>
          <span class="lbl">BANK KONTEN</span>
          <span class="dot" id="bankDot" title="Konten baru 7 hari terakhir"></span>
        </button>
        <button class="btn-custom-link">🔗 <span class="lbl">CUSTOM LINK</span></button>
        <!-- NEW ▸ coachmark pengenalan fitur (muncul sekali per user) -->
        <div class="coach" id="coach" role="dialog" aria-label="Fitur baru Bank Konten">
          <b>✨ Baru: Bank Konten</b>
          Semua banner &amp; video promosi dari campaign kamu sekarang ada di satu tempat. Tinggal GET LINK, lalu share.
          <div class="ca"><button class="c2" data-act="coach-close">Nanti saja</button><button class="c1" data-act="bank">Lihat sekarang</button></div>
        </div>
      </div>
    </header>

    <main class="content">
      <!-- ============ VIEW 1: DAFTAR CAMPAIGN ============ -->
      <section id="viewList">
        <h1 class="page-title">Campaign List</h1>
        <div class="filters">
          <input class="input" id="q" placeholder="Search by keyword">
          <select class="select"><option>Kategori</option></select>
          <select class="select"><option>Tipe</option></select>
          <button class="btn-cari">CARI</button>
        </div>
        <div class="status-tabs">
          <button class="stab">TERSEDIA <span class="n" style="background:var(--at-blue)">53</span></button>
          <button class="stab active">✓ TERAFILIASI <span class="n" style="background:#fff;color:#86c232">19</span></button>
          <button class="stab">PAUSE <span class="n" style="background:var(--at-yellow);color:#000">11</span></button>
        </div>
        <div class="info">Campaign yang sudah disetujui dan siap dipromosikan sekarang.</div>

        <!-- NEW ▸ filter bank konten -->
        <div class="chips" id="chips">
          <span class="lbl">Bank Konten:</span>
          <button class="chip on" data-f="all">Semua</button>
          <button class="chip" data-f="any">Punya Bank Konten</button>
          <button class="chip" data-f="banner">Ada Banner</button>
          <button class="chip" data-f="video">Ada Video</button>
          <button class="chip" data-f="new">Konten Baru <span class="new-tag">NEW</span></button>
        </div>
        <div class="grid" id="grid"></div>
      </section>

      <!-- ============ VIEW 2: DETAIL CAMPAIGN ============ -->
      <section id="viewDetail" hidden>
        <button class="back" data-act="home">← Kembali ke Daftar Campaign</button>
        <div class="dhead">
          <div class="dlogo" id="dLogo"></div>
          <h2 id="dName"></h2>
          <button class="btn-preview" data-act="toast" data-msg="Preview landing page campaign (mock)">⧉ Preview</button>
        </div>
        <div class="filters">
          <input class="input" placeholder="Campaign name">
          <select class="select"><option>Kategori</option></select>
          <select class="select"><option>Tipe</option></select>
          <button class="btn-cari orange">CARI</button>
        </div>
        <nav class="ptabs" id="dTabs"></nav>
        <div id="dContent"></div>
      </section>

      <!-- ============ VIEW 3 (NEW): BANK KONTEN GLOBAL ============ -->
      <section id="viewBank" hidden>
        <div class="bk-hero">
          <div>
            <h1>Bank Konten <span class="new-tag">NEW</span></h1>
            <p>Banner &amp; video siap pakai dari semua campaign yang kamu ikuti. Tinggal GET LINK, lalu share.</p>
          </div>
          <button class="btn btn-outline" data-act="home">← Daftar Campaign</button>
        </div>
        <div class="stats" id="bkStats"></div>
        <div class="sec-title">🔥 Promo Terbaru</div>
        <div class="promo-strip" id="bkPromos"></div>
        <div class="tab-panel" id="bkPanel">
          <nav class="ptabs" id="bkTabs" style="margin:0 0 10px"></nav>
          <div id="bkTools"></div>
          <div id="bkBody"></div>
        </div>
        <div class="sec-title" style="margin-top:22px">Campaign lain yang bisa kamu ikuti
          <small style="font-weight:600;color:var(--ink-2)">Bank konten terbuka setelah pengajuan disetujui</small></div>
        <div class="locked-grid" id="bkLocked"></div>
      </section>
    </main>
  </div>
</div>

<!-- ================= DRAWER BANK KONTEN (quick view dari Daftar Campaign) ================= -->
<div class="overlay" id="overlay" data-act="close-drawer"></div>
<aside class="drawer" id="drawer" aria-hidden="true">
  <div class="dr-head">
    <div class="dlogo" id="drLogo"></div>
    <div><h4 id="drName"></h4><small id="drSub"></small></div>
    <button class="dr-close" data-act="close-drawer" aria-label="Tutup">×</button>
  </div>
  <div class="dr-link" id="drLink"></div>
  <div class="dr-tabs" id="drTabs"></div>
  <div class="dr-tools" id="drTools"></div>
  <div class="dr-body" id="drBody"></div>
</aside>

<!-- ================= MODAL GET LINK / PREVIEW ================= -->
<div class="modal" id="modal" data-act="close-modal-bg">
  <div class="mbox">
    <div class="mhead"><h5 id="mTitle">Get Link</h5><button class="dr-close" data-act="close-modal" style="margin:0">×</button></div>
    <div class="mbody" id="mBody"></div>
  </div>
</div>
<div class="toast" id="toast"></div>`;
