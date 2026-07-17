(()=>{
  const items=[...(window.FM_NEWS||[])].sort((a,b)=>b.date.localeCompare(a.date)||String(a.id).localeCompare(String(b.id)));
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const formatDate=v=>new Date(`${v}T12:00:00`).toLocaleDateString('de-DE',{day:'2-digit',month:'long',year:'numeric'});
  const card=(item,featured=false)=>`<a class="news-card${featured?' featured':''}" data-accent="${esc(item.accent||'blue')}" href="${esc(item.href)}"><time datetime="${esc(item.date)}">${esc(formatDate(item.date))} · ${esc(item.eyebrow||item.category)}</time><h${featured?'2':'3'}>${esc(item.title)}</h${featured?'2':'3'}><p>${esc(item.summary)}</p><span class="news-category">${esc(item.category)} →</span></a>`;
  const latest=document.querySelector('#latestNews');
  if(latest){
    latest.innerHTML=items.slice(0,6).map((item,index)=>card(item,index===0)).join('');
  }
  const root=document.querySelector('#newsRoot');
  if(!root)return;
  const categories=[...new Set(items.map(x=>x.category))].sort((a,b)=>a.localeCompare(b,'de'));
  const first=items.at(-1)?.date;
  const last=items[0]?.date;
  root.innerHTML=`
    <section class="news-hero"><p class="kicker">FINN HARPS · CHRONIK</p><h1>Nichts verschwindet, nur weil etwas Neues passiert.</h1><p>Spiele, Transfers, Presseberichte, Nationalteam-Abende und Spielerentwicklungen bleiben dauerhaft auffindbar. Die Startseite zeigt nur das Neueste, die Chronik bewahrt den ganzen Faden.</p></section>
    <section class="news-summary"><article><span>Einträge</span><strong>${items.length}</strong></article><article><span>Kategorien</span><strong>${categories.length}</strong></article><article><span>Zeitraum</span><strong>${first&&last?`${formatDate(first)} – ${formatDate(last)}`:'–'}</strong></article></section>
    <section class="section-wrap"><div class="section-head"><div><p class="kicker dark">ARCHIV</p><h2>Die laufende Geschichte.</h2></div></div><div class="news-controls"><input id="newsSearch" type="search" placeholder="Spieler, Gegner oder Ereignis …"><select id="newsCategory"><option value="all">Alle Kategorien</option>${categories.map(x=>`<option value="${esc(x)}">${esc(x)}</option>`).join('')}</select></div><div id="newsGrid" class="news-grid"></div></section>`;
  const search=root.querySelector('#newsSearch');
  const filter=root.querySelector('#newsCategory');
  const grid=root.querySelector('#newsGrid');
  const render=()=>{
    const q=search.value.toLowerCase().trim();
    const cat=filter.value;
    const filtered=items.filter(item=>(cat==='all'||item.category===cat)&&(!q||[item.title,item.summary,item.eyebrow,item.category,...(item.entities||[])].join(' ').toLowerCase().includes(q)));
    grid.innerHTML=filtered.map((item,index)=>card(item,index===0&&cat==='all'&&!q)).join('')||'<div class="news-empty"><b>Keine Einträge für diesen Filter.</b></div>';
  };
  search.addEventListener('input',render);
  filter.addEventListener('change',render);
  render();
})();