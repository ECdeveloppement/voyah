import { p as publicAssetsURL } from '../_/renderer.mjs';
import 'file://E:/voyah-nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://E:/voyah-nuxt/node_modules/h3/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://E:/voyah-nuxt/node_modules/destr/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/hookable/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/ofetch/dist/node.mjs';
import 'file://E:/voyah-nuxt/node_modules/node-mock-http/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/unstorage/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///E:/voyah-nuxt/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://E:/voyah-nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://E:/voyah-nuxt/node_modules/ohash/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/klona/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/defu/dist/defu.mjs';
import 'file://E:/voyah-nuxt/node_modules/scule/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://E:/voyah-nuxt/node_modules/pathe/dist/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/vue/server-renderer/index.mjs';
import 'file://E:/voyah-nuxt/node_modules/unhead/dist/server.mjs';
import 'file://E:/voyah-nuxt/node_modules/devalue/index.js';
import 'file://E:/voyah-nuxt/node_modules/unhead/dist/plugins.mjs';
import 'file://E:/voyah-nuxt/node_modules/unhead/dist/utils.mjs';
import 'file://E:/voyah-nuxt/node_modules/vue/index.mjs';

const main = "@font-face{font-display:swap;font-family:DDIN;src:url(" + publicAssetsURL("/static/assets/D-DIN-f7fdbc8e.otf") + ') format("opentype")}:root{--bg:#090d12;--panel:#101720;--panel-2:#16212d;--surface:hsla(0,0%,100%,.06);--surface-strong:hsla(0,0%,100%,.12);--text:#edf2f7;--text-soft:rgba(237,242,247,.74);--line:hsla(0,0%,100%,.12);--accent:#c59c62;--accent-strong:#f0c07f;--max-width:1320px;--radius:28px;--shadow:0 24px 80px rgba(0,0,0,.3)}*{box-sizing:border-box}html{background:var(--bg);font-family:DDIN,Segoe UI,sans-serif;scroll-behavior:smooth}body,html{color:var(--text)}body{background:radial-gradient(circle at top right,rgba(197,156,98,.16),transparent 32%),linear-gradient(180deg,#0a1017,#090d12 35%,#0c1119);margin:0}a{color:inherit;text-decoration:none}img,video{display:block;max-width:100%}button,input,select,textarea{font:inherit}.site-shell{min-height:100vh}.site-main{padding-top:84px}.container{margin:0 auto;width:min(var(--max-width),calc(100% - 32px))}.section-shell{padding:64px 0}.panel{background:linear-gradient(180deg,#ffffff17,#ffffff0a);border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow)}.eyebrow{color:var(--accent-strong);font-size:.92rem;letter-spacing:.18em;margin:0 0 12px;text-transform:uppercase}.page-title,.section-title{font-size:clamp(2rem,3.6vw,4.4rem);line-height:1;margin:0}.page-summary,.section-copy{color:var(--text-soft);font-size:1.03rem;line-height:1.75;margin:18px 0 0;max-width:720px}.button-row{display:flex;flex-wrap:wrap;gap:14px}.base-button{align-items:center;border:1px solid transparent;border-radius:999px;cursor:pointer;display:inline-flex;justify-content:center;min-height:48px;padding:0 22px;transition:transform .25s ease,background-color .25s ease,border-color .25s ease}.base-button:hover{transform:translateY(-1px)}.base-button.primary{background:var(--accent);color:#121212}.base-button.secondary{background:transparent;border-color:#ffffff47;color:var(--text)}.metric-grid{display:grid;gap:16px;grid-template-columns:repeat(3,minmax(0,1fr))}.metric-card{background:#ffffff0a;border:1px solid var(--line);border-radius:20px;padding:22px}.metric-value{font-size:1.3rem;font-weight:600}.metric-label{color:var(--text-soft);font-size:.92rem;margin-top:8px}.page-hero{align-items:end;display:grid;min-height:62vh;overflow:hidden;position:relative}.page-hero-media{inset:0;position:absolute}.page-hero-media img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.page-hero-overlay{background:linear-gradient(180deg,#05080c24,#05080cd9);inset:0;position:absolute}.page-hero-content{padding:120px 0 72px;position:relative;z-index:1}.page-logo{margin-bottom:24px;width:180px}.content-grid{display:grid;gap:24px;grid-template-columns:repeat(2,minmax(0,1fr))}.content-card{background:#ffffff0a;border:1px solid var(--line);border-radius:26px;overflow:hidden}.content-card img{aspect-ratio:16/9;-o-object-fit:cover;object-fit:cover;width:100%}.content-card-body{padding:22px}.content-card-title{font-size:1.18rem;margin:0}.content-card-copy{color:var(--text-soft);line-height:1.7;margin:10px 0 0}.legal-stack{display:grid;gap:18px}.legal-card{background:#ffffff0a;border:1px solid var(--line);border-radius:24px;padding:24px}.legal-card h3{margin:0 0 12px}.legal-card p{color:var(--text-soft);line-height:1.8;margin:0}.legal-card p+p{margin-top:12px}.locale-badge{align-items:center;background:#ffffff0a;border:1px solid var(--line);border-radius:999px;color:var(--text-soft);display:inline-flex;font-size:.88rem;height:36px;padding:0 12px}.is-rtl{direction:rtl}.is-rtl .button-row{justify-content:flex-start}@media(max-width:1024px){.content-grid,.metric-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:768px){.site-main{padding-top:72px}.section-shell{padding:44px 0}.content-grid,.metric-grid{grid-template-columns:minmax(0,1fr)}.page-hero-content{padding:108px 0 48px}}';

const entryStyles_DER1VTj4 = [
  main
];

export { entryStyles_DER1VTj4 as default };
//# sourceMappingURL=entry-styles.DER1VTj4.mjs.map
