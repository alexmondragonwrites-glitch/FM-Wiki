(()=>{
  const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const formatDate=value=>new Date(`${value}T12:00:00`).toLocaleDateString('de-DE',{day:'2-digit',month:'long',year:'numeric'});

  function renderNews(){
    const items=[...(window.FM_NEWS||[])].sort((a,b)=>b.date.localeCompare(a.date)||String(b.id).localeCompare(String(a.id)));
    const card=(item,featured=false)=>`<a class="news-card${featured?' featured':''}" data-accent="${esc(item.accent||'blue')}" href="${esc(item.href)}"><time datetime="${esc(item.date)}">${esc(formatDate(item.date))} · ${esc(item.eyebrow||item.category)}</time><h${featured?'2':'3'}>${esc(item.title)}</h${featured?'2':'3'}><p>${esc(item.summary)}</p><span class="news-category">${esc(item.category)} →</span></a>`;

    const latest=document.querySelector('#latestNews');
    if(latest)latest.innerHTML=items.slice(0,6).map((item,index)=>card(item,index===0)).join('');

    const root=document.querySelector('#newsRoot');
    if(!root)return;
    const categories=[...new Set(items.map(item=>item.category))].sort((a,b)=>a.localeCompare(b,'de'));
    const first=items.at(-1)?.date;
    const last=items[0]?.date;
    root.innerHTML=`
      <section class="news-hero"><p class="kicker">FINN HARPS · CHRONIK</p><h1>Nichts verschwindet, nur weil etwas Neues passiert.</h1><p>Spiele, Transfers, Presseberichte, Nationalteam-Abende und Spielerentwicklungen bleiben dauerhaft auffindbar. Die Startseite zeigt nur das Neueste, die Chronik bewahrt den ganzen Faden.</p></section>
      <section class="news-summary"><article><span>Einträge</span><strong>${items.length}</strong></article><article><span>Kategorien</span><strong>${categories.length}</strong></article><article><span>Zeitraum</span><strong>${first&&last?`${formatDate(first)} – ${formatDate(last)}`:'–'}</strong></article></section>
      <section class="section-wrap"><div class="section-head"><div><p class="kicker dark">ARCHIV</p><h2>Die laufende Geschichte.</h2></div></div><div class="news-controls"><input id="newsSearch" type="search" placeholder="Spieler, Gegner oder Ereignis …"><select id="newsCategory"><option value="all">Alle Kategorien</option>${categories.map(category=>`<option value="${esc(category)}">${esc(category)}</option>`).join('')}</select></div><div id="newsGrid" class="news-grid"></div></section>`;

    const search=root.querySelector('#newsSearch');
    const filter=root.querySelector('#newsCategory');
    const grid=root.querySelector('#newsGrid');
    const render=()=>{
      const query=search.value.toLowerCase().trim();
      const category=filter.value;
      const filtered=items.filter(item=>(category==='all'||item.category===category)&&(!query||[item.title,item.summary,item.eyebrow,item.category,...(item.entities||[])].join(' ').toLowerCase().includes(query)));
      grid.innerHTML=filtered.map((item,index)=>card(item,index===0&&category==='all'&&!query)).join('')||'<div class="news-empty"><b>Keine Einträge für diesen Filter.</b></div>';
    };
    search.addEventListener('input',render);
    filter.addEventListener('change',render);
    render();
  }

  const ready=window.FM_DOMAIN_READY?.news;
  if(ready&&typeof ready.then==='function')ready.then(renderNews).catch(error=>{
    console.error('Newsdaten konnten nicht vollständig geladen werden.',error);
    renderNews();
  });
  else renderNews();
})();
