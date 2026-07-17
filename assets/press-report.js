(()=>{
  const reports=window.FM_PRESS_REPORTS||[];
  const id=new URLSearchParams(location.search).get('id')||reports[0]?.id;
  const r=reports.find(x=>x.id===id);
  const root=document.querySelector('#pressRoot');
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  if(!r){root.innerHTML='<section class="empty-state"><div><h1>Bericht nicht gefunden</h1><a class="button button-blue" href="index.html">Zur Startseite</a></div></section>';return;}
  document.title=`${r.home} – ${r.away} | Pressevorbericht`;
  const date=new Date(`${r.date}T12:00:00`).toLocaleDateString('de-DE',{weekday:'long',day:'2-digit',month:'long',year:'numeric'});
  const sections=r.sections.map(s=>`<article class="press-copy"><h2>${esc(s.title)}</h2><p>${esc(s.text)}</p></article>`).join('');
  const xi=r.probableXI.map(p=>`<div class="press-xi-row"><span>${esc(p.zone)}</span><b>${esc(p.name)}</b><small>${esc(p.role)}</small></div>`).join('');
  const list=(items,cls='')=>`<ul class="feature-list ${cls}">${items.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
  root.innerHTML=`
    <section class="press-hero">
      <a class="backlink" href="klub.html?id=tottenham">← ZUM TOTTENHAM-DOSSIER</a>
      <div class="press-masthead"><span>${esc(r.label)}</span><time>${esc(date)}</time></div>
      <p class="kicker">${esc(r.competition)}</p>
      <h1>${esc(r.headline)}</h1>
      <p class="press-deck">${esc(r.subheadline)}</p>
      <div class="press-fixture"><strong>${esc(r.home)}</strong><span>${esc(r.fixtureDate)}</span><strong>${esc(r.away)}</strong></div>
      <small>${esc(r.location)}</small>
    </section>
    <section class="section-wrap press-layout">
      <div class="press-main-column">
        <article class="press-lead"><p>${esc(r.intro)}</p></article>
        ${sections}
        <article class="content-card press-verdict"><p class="kicker dark">REDAKTIONELLES URTEIL</p><h2>Kein Anlass für einen Systemwechsel</h2><p>${esc(r.verdict)}</p></article>
      </div>
      <aside>
        <article class="press-stat"><span>${esc(r.heroStat.label)}</span><strong>${esc(r.heroStat.value)}</strong><small>${esc(r.heroStat.note)}</small></article>
        <article class="content-card"><p class="kicker dark">WAHRSCHEINLICHE ELF</p><h2>Tottenhams 4-4-2</h2><div class="press-xi">${xi}</div></article>
      </aside>
    </section>
    <section class="dark-section"><div class="section-wrap press-scout-grid">
      <article><p class="kicker">WAS TOTTENHAM TRÄGT</p><h2>Stärken</h2>${list(r.strengths)}</article>
      <article><p class="kicker">WO DAS SPIEL AUFBRICHT</p><h2>Angriffspunkte</h2>${list(r.vulnerabilities,'risk')}</article>
    </div></section>
    <section class="section-wrap"><div class="section-head"><div><p class="kicker dark">SCHLÜSSELDUELLE</p><h2>Vier Kämpfe im Spiel</h2></div></div><div class="press-duels">${r.keyDuels.map(d=>`<article><h3>${esc(d.title)}</h3><p>${esc(d.text)}</p></article>`).join('')}</div></section>
    <section class="section-wrap"><article class="content-card press-plan"><p class="kicker dark">MATCHPLAN FINN HARPS</p><h2>Die sieben Leitplanken</h2><ol>${r.matchPlan.map(x=>`<li>${esc(x)}</li>`).join('')}</ol></article></section>
    <section class="archive-band"><div><p class="kicker">QUELLENLAGE</p><h2>Scoutdaten, nicht Orakel.</h2><p>Der Vorbericht trennt sichtbare FM-Daten und redaktionelle Schlussfolgerungen. Die tatsächliche Aufstellung kann bis zum Anpfiff abweichen.</p></div><ul>${r.sources.map(s=>`<li>${esc(s)}</li>`).join('')}</ul></section>`;
})();