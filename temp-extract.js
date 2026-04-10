const fs = require("fs");

function extractBlock(source, marker) {
  const i = source.indexOf(marker);
  if (i < 0) return "";
  let depth = 0;
  let started = false;
  let pos = i;
  while (pos < source.length) {
    const open = source.indexOf("<div", pos);
    const close = source.indexOf("</div>", pos);
    if (open === -1 && close === -1) break;
    if (open !== -1 && open < close) {
      depth += 1;
      started = true;
      pos = open + 4;
    } else {
      depth -= 1;
      pos = close + 6;
      if (started && depth === 0) return source.slice(i, pos);
    }
  }
  return "";
}

function toTree(html, maxNodes = 400) {
  const re = /<(section|div|article|img|button)([^>]*)>/g;
  const stack = [];
  const out = [];
  let m;
  let count = 0;
  while ((m = re.exec(html)) && count < maxNodes) {
    const tag = m[1];
    const attrs = m[2] || "";
    const cls = /class=\"([^\"]+)\"/.exec(attrs)?.[1] || "";
    const short = cls ? `${tag}.${cls.split(" ").join(".")}` : tag;
    out.push(short);
    count++;
  }
  return out.join("\n");
}

const s = fs.readFileSync("tmp-service-transcript.txt", "utf8");
const e = fs.readFileSync("tmp-energy-transcript.txt", "utf8");
const sb = extractBlock(s, '<div class="service-content"');
const eb = extractBlock(e, '<div class="energy-content"');
fs.writeFileSync("tmp-service-content.html", sb);
fs.writeFileSync("tmp-energy-content.html", eb);
fs.writeFileSync("tmp-service-tree.txt", toTree(sb, 1200));
fs.writeFileSync("tmp-energy-tree.txt", toTree(eb, 1200));
console.log("service block", sb.length, "energy block", eb.length);
