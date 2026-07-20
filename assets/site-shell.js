(()=>{
  const config=window.FM_CONFIG||{};
  const nav=config.navigation||[];
  const path=location.pathname.split('/').pop()||'index.html';
  const activeId=(()=>{
    if(path==='index.html'||path===''||path==='news.html')return 'news';
    if(path==='kader.html')return 'squad';
    if(path==='kaderplanung.html')return 'planning';
    if(path==='kaderarchiv.html')return 'archive';
    if(path==='spieler.html')return 'players';
    if(path==='nationalteam.html')return 'ireland';
    if(path==='saison.html'||path==='spielplan-2041.html')return 'season';
    if(path==='spiele.html'||path==='spiel.html')return 'matches';
    if(path==='klubs.html'||path==='klub.html')return 'clubs';
    if(path==='presse.html')return 'press';
    if(path==='verein.html')return 'club';
    if(path==='mitarbeiter.html')return 'staff';
    if(path==='dokumentation.html')return 'docs';
    return '';
  })();
  const menu=document.querySelector('.main-nav');
  if(menu&&nav.length){
    menu.innerHTML=nav.map(item=>`<a${item.id===activeId?' class="active"':''} href="${item.href}">${item.label}</a>`).join('');
    menu.setAttribute('aria-label','Hauptnavigation');
  }
  if(path==='saison.html'&&!document.querySelector('a[href="spielplan-2041.html"]')){
    const archiveButton=document.querySelector('.section-head a[href="spiele.html"]');
    archiveButton?.insertAdjacentHTML('afterend',' <a class="button button-blue" href="spielplan-2041.html">Spielplan 2041</a>');
  }
  const footer=document.querySelector('footer');
  if(footer){
    const strong=footer.querySelector('strong');
    const span=footer.querySelector('span');
    if(strong)strong.textContent=config.siteName||'Finn Harps FM Wiki';
    if(span)span.textContent=config.footerText||'Dynastie, Daten und Entscheidungen. Saison für Saison.';
  }
  const visibleDate=config.updatedAt||config.referenceDate;
  if(visibleDate){
    const formatted=new Date(`${visibleDate}T12:00:00`).toLocaleDateString('de-DE',{day:'2-digit',month:'2-digit',year:'numeric'});
    document.querySelectorAll('.utility-bar span').forEach(span=>{
      const text=span.textContent||'';
      if(!/(?:DATENSTAND|\bSTAND\b|REFERENZDATUM)/i.test(text))return;
      if(/\d{1,2}[./-]\d{1,2}[./-]\d{4}/.test(text))span.textContent=text.replace(/\d{1,2}[./-]\d{1,2}[./-]\d{4}/,formatted);
    });
  }
  document.documentElement.dataset.schemaVersion=String(config.schemaVersion||1);
})();