const fs = require("fs");
const files = ["components/page/legacy/ServiceCenterPage.vue", "components/page/legacy/EnergyCenterPage.vue"];
for (const f of files) {
  const t = fs.readFileSync(f, "utf8");
  const paths = [...t.matchAll(/['\"](\/static\/assets\/[^'\"\)\?]+)['\"]/g)].map((m) => m[1]);
  const uniq = [...new Set(paths)];
  const miss = uniq.filter((p) => !fs.existsSync(`.${p}`));
  console.log(f, "assets", uniq.length, "missing", miss.length);
  if (miss.length) console.log(miss);
}
