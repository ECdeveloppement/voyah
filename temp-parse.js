const fs=require("fs");
const txt=fs.readFileSync("tmp-service-transcript.txt","utf8");
function extractByClass(src, klass){
  const k = `class=\"${klass}\"`;
  const ki=src.indexOf(k);
  if(ki<0) return "";
  const start=src.lastIndexOf('<div', ki);
  if(start<0) return "";
  const re=/<\/?div\b[^>]*>/g;
  re.lastIndex=start;
  let depth=0, started=false, end=-1, m;
  while((m=re.exec(src))){
    const tag=m[0];
    if(tag.startsWith('</div')) depth--; else depth++;
    started=true;
    if(started && depth===0){ end=re.lastIndex; break; }
  }
  return end>start?src.slice(start,end):"";
}
const s=extractByClass(txt,'service-content');
const e=extractByClass(txt,'energy-content');
fs.writeFileSync('tmp-service-content.html',s.replace(/></g,'>\n<'));
fs.writeFileSync('tmp-energy-content.html',e.replace(/></g,'>\n<'));
console.log('service',s.length,'energy',e.length);
