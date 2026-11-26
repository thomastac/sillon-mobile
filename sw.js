// Sillon de poche hors ligne : les fichiers de l'app sont gardés à l'installation (liste écrite par vite.config.ts),
// le reste du même site est gardé au premier usage. Les données du coffre sont dans IndexedDB, pas ici.
const CACHE = 'sillon-mwwqdsmt';
const FICHIERS = ["./","./icone-180.png","./icone-192.png","./icone-512.png","./icone.svg","./manifest.webmanifest","./assets/index-DqGS0HD0.js","./assets/Accueil-m9yLjPvK.js","./assets/Amis-BTumzcil.js","./assets/Appairer-Dtm4EOy9.js","./assets/Candidature-BhiNf-Ie.js","./assets/Canvas-DlW6RiLH.js","./assets/Carte3D-CKWjCcCo.js","./assets/Coffre-CEeqxlJE.js","./assets/Creer-BEk1Xl0v.js","./assets/Diapos-Dutu_i1i.js","./assets/Document-CEMh8VoY.js","./assets/Lise-BC1RMxxM.js","./assets/Note-CKdBjtZ6.js","./assets/Outils-BP8H5hcJ.js","./assets/Projets-DbYTCD3u.js","./assets/Recevoir-Cd_M8H8E.js","./assets/Redaction-bb4o7rDO.js","./assets/Reglages-Cz443wfI.js","./assets/Synchro-CtCuLszt.js","./assets/Tableur-DrazUeTB.js","./assets/__vite-browser-external-DGgK3jMU.js","./assets/browser-Fetu2SsX.js","./assets/camera-DyekgDR3.js","./assets/charts-Dq_jgwHm.js","./assets/cloud-off-D0-ZXr8w.js","./assets/copy-CtPjEwTQ.js","./assets/couleur-CJBMnUED.js","./assets/docx-CHf0E9wz.js","./assets/download-DjBGi9Hy.js","./assets/ecrans-eHHOJGIv.js","./assets/editeur-DyIFBeEi.js","./assets/editeurs-BdDcl_Y6.js","./assets/exceljs.min-DfecxsXL.js","./assets/file-text-D7sK09Ri.js","./assets/format-FGRPlD9B.js","./assets/images-CJHy-H1F.js","./assets/jsQR-BtQ2k5V2.js","./assets/laptop-kz1jPqOI.js","./assets/layers-CfSYM4Jp.js","./assets/layout-CuH4q214.js","./assets/lib-C3WdwDzB.js","./assets/list-HVvyZHZy.js","./assets/lock-CUqdV0pP.js","./assets/markdown-sOYaPZhY.js","./assets/math-ydhmK2IQ.js","./assets/ouvrir-U8zGkwSD.js","./assets/pages-C1wqBYRL.js","./assets/palette-BeHYiKs5.js","./assets/parse-BCkY0mo1.js","./assets/pdfjs-mnaWLlwW.js","./assets/pencil-AEbdjNiN.js","./assets/presentation-BvxlUk7R.js","./assets/qr-code-yxkG9Khq.js","./assets/refresh-cw-DXMl9H2S.js","./assets/rolldown-runtime-BCiCTKAo.js","./assets/scan-DBGJypBS.js","./assets/send-B29C-ZdQ.js","./assets/share-2-BFhpvHop.js","./assets/square-check-big-BPKgFo8z.js","./assets/study-WINQ8hTp.js","./assets/three.module-DW8mPdZG.js","./assets/trash-MDumdr98.js","./assets/user-plus-CVH5tFs_.js","./assets/wand-sparkles-BsWYBAJJ.js","./assets/x-BGhYrnV4.js","./assets/Coffre--wdzoBff.css","./assets/Document-02v-lFpN.css","./assets/KaTeX_AMS-Regular-BQhdFMY1.woff2","./assets/KaTeX_AMS-Regular-DMm9YOAa.woff","./assets/KaTeX_AMS-Regular-DRggAlZN.ttf","./assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf","./assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff","./assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2","./assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff","./assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2","./assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf","./assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf","./assets/KaTeX_Fraktur-Bold-BsDP51OF.woff","./assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2","./assets/KaTeX_Fraktur-Regular-CB_wures.ttf","./assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2","./assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff","./assets/KaTeX_Main-Bold-Cx986IdX.woff2","./assets/KaTeX_Main-Bold-Jm3AIy58.woff","./assets/KaTeX_Main-Bold-waoOVXN0.ttf","./assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2","./assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf","./assets/KaTeX_Main-BoldItalic-SpSLRI95.woff","./assets/KaTeX_Main-Italic-3WenGoN9.ttf","./assets/KaTeX_Main-Italic-BMLOBm91.woff","./assets/KaTeX_Main-Italic-NWA7e6Wa.woff2","./assets/KaTeX_Main-Regular-B22Nviop.woff2","./assets/KaTeX_Main-Regular-Dr94JaBh.woff","./assets/KaTeX_Main-Regular-ypZvNtVU.ttf","./assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf","./assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2","./assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff","./assets/KaTeX_Math-Italic-DA0__PXp.woff","./assets/KaTeX_Math-Italic-flOr_0UB.ttf","./assets/KaTeX_Math-Italic-t53AETM-.woff2","./assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf","./assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2","./assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff","./assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2","./assets/KaTeX_SansSerif-Italic-DN2j7dab.woff","./assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf","./assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf","./assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff","./assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2","./assets/KaTeX_Script-Regular-C5JkGWo-.ttf","./assets/KaTeX_Script-Regular-D3wIWfF6.woff2","./assets/KaTeX_Script-Regular-D5yQViql.woff","./assets/KaTeX_Size1-Regular-C195tn64.woff","./assets/KaTeX_Size1-Regular-Dbsnue_I.ttf","./assets/KaTeX_Size1-Regular-mCD8mA8B.woff2","./assets/KaTeX_Size2-Regular-B7gKUWhC.ttf","./assets/KaTeX_Size2-Regular-Dy4dx90m.woff2","./assets/KaTeX_Size2-Regular-oD1tc_U0.woff","./assets/KaTeX_Size3-Regular-CTq5MqoE.woff","./assets/KaTeX_Size3-Regular-DgpXs0kz.ttf","./assets/KaTeX_Size4-Regular-BF-4gkZK.woff","./assets/KaTeX_Size4-Regular-DWFBv043.ttf","./assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2","./assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff","./assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2","./assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf","./assets/Outils-tyg_YBTf.css","./assets/detourage.worker-DkHXIftW.js","./assets/ecrans-ZcNMxYcV.css","./assets/editeurs-DrQcoPja.css","./assets/index-D8bzbBoX.css","./assets/pdf.worker.min-CjEcRF4W.mjs"];
const GARDES = ['sillon-modeles']; // the background-removal model, downloaded once (src/lib/detourage.ts)

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((cles) => Promise.all(cles.filter((k) => k !== CACHE && !GARDES.includes(k)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  if (r.mode === 'navigate') {
    // the page itself: the kept copy at once (opens in airplane mode), the network only if none
    e.respondWith(caches.match('./').then((m) => m || fetch(r)));
    return;
  }
  e.respondWith(
    caches.match(r).then((m) => m || fetch(r).then((rep) => {
      if (rep.ok) { const copie = rep.clone(); caches.open(CACHE).then((c) => c.put(r, copie)); }
      return rep;
    })),
  );
});
