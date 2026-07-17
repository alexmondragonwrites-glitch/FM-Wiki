(()=>{
const players=window.FM_PLAYERS||[];
const config=window.FM_CONFIG||{};
const id=new URLSearchParams(location.search).get('id')||'paulo-henrique';
const p=players.find(x=>x.id===id);
const root=document.querySelector('#playerRoot');
const utils=window.FM_DATE_UTILS||{
  ageAt:()=>p?.age,
  formatBirthDate:v=>v?new Date(`${v}T12:00:00`).toLocaleDateString('de-DE'):'Nicht erfasst'
};
const referenceDate=config.referenceDate||'2040-11-23';
const formatReferenceDate=value=>value?.split('-').reverse().join('.')||'–';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmtRating=v=>Number.isFinite(Number(v))?Number(v).toFixed(2).replace('.',','):'–';
const stars=n=>{const value=Math.max(0,Math.min(5,Number(n)||0));return '★'.repeat(value)+'☆'.repeat(5-value);};
const valueClass=v=>v>=16?'elite':v>=14?'strong':v<=8?'weak':'';
const availabilityClass=v=>v==='Verletzt'?'red':v==='Einsatzbereit'?'green':'amber';
const sourceLabel=p?.profileDate?`Quelle: Spielerprofil vom ${formatReferenceDate(p.profileDate)}`:'Quelle: hinterlegter Football-Manager-Datenstand';

function renderAttributes(attributes){
  if(!attributes)return '';
  return `<section class="content-card"><p class="kicker dark">ATTRIBUTPROFIL</p><h2>Was sein Spiel wirklich trägt</h2><div class="attribute-groups">${Object.entries(attributes).map(([group,values])=>`<article class="attribute-group"><h3>${esc(group)}</h3>${Object.entries(values).map(([label,value])=>`<div class="attribute-row"><b>${esc(label)}</b><span class="attribute-value ${valueClass(value)}">${value}</span></div>`).join('')}</article>`).join('')}</div><span class="source-chip">${sourceLabel}</span></section>`;
}
function renderTraits(traits){
  if(!traits?.length)return '';
  return `<section class="content-card"><p class="kicker dark">SPIELEREIGENSCHAFTEN</p><h2>Seine Signatur auf dem Platz</h2><div class="traits-grid">${traits.map(x=>`<span class="trait-pill">${esc(x)}</span>`).join('')}</div></section>`;
}
function renderSeasonSplits(rows){
  if(!rows?.length)return '';
  return `<section class="content-card"><p class="kicker dark">SAISON ${config.currentSeason||2040}</p><h2>Leistung nach Wettbewerb</h2><div class="table-shell"><table class="season-table"><thead><tr><th>Wettbewerb</th><th>Einsätze</th><th>Tore</th><th>Vorlagen</th><th>Spieler d. Spiels</th><th>Ø</th></tr></thead><tbody>${rows.map(r=>`<tr><td><b>${esc(r.competition)}</b></td><td>${esc(r.appearances)}</td><td>${r.goals??'–'}</td><td>${r.assists??'–'}</td><td>${r.pom??'–'}</td><td><b>${fmtRating(r.rating)}</b></td></tr>`).join('')}</tbody></table></div></section>`;
}
function renderCareer(rows,total){
  if(!rows?.length)return '';
  const title=p.careerTitle||'Karriere in Zahlen';
  return `<section class="content-card"><p class="kicker dark">KARRIERESTATISTIK</p><h2>${esc(title)}</h2><div class="table-shell"><table class="career-table"><thead><tr><th>Saison</th><th>Klub</th><th>Liga</th><th>Spiele</th><th>Tore</th><th>Vorlagen</th><th>SdS</th><th>Ø</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${esc(r.season)}</td><td><b>${esc(r.club)}</b></td><td>${esc(r.league)}</td><td>${r.appearances??'–'}</td><td>${r.goals??'–'}</td><td>${r.assists??'–'}</td><td>${r.pom??'–'}</td><td>${fmtRating(r.rating)}</td></tr>`).join('')}${total?`<tr class="career-total"><td colspan="3">Gesamt Liga</td><td>${total.appearances??'–'}</td><td>${total.goals??'–'}</td><td>${total.assists??'–'}</td><td>${total.pom??'–'}</td><td>${fmtRating(total.rating)}</td></tr>`:''}</tbody></table></div></section>`;
}
function renderNarrative(items){
  if(!items?.length)return '';
  const title=p.careerNarrativeTitle||'Die Entwicklung zum heutigen Spieler';
  return `<section class="content-card"><p class="kicker dark">KARRIEREBOGEN</p><h2>${esc(title)}</h2><div class="career-story">${items.map(x=>`<p>${esc(x)}</p>`).join('')}</div></section>`;
}
function renderHonours(honours){
  if(!honours?.length)return '';
  return `<section class="content-card"><p class="kicker dark">TITEL & AUSZEICHNUNGEN</p><h2>Eine Karriere im Zeitraffer</h2><div class="honour-timeline">${honours.map(h=>`<article class="honour-year"><strong>${esc(h.year)}</strong><div><h3>${esc(h.type)}</h3><ul>${(h.items||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div></article>`).join('')}</div></section>`;
}
function renderDeepAnalysis(items){
  if(!items?.length)return '';
  const title=p.deepAnalysisTitle||`Was ${p.name} im System leistet`;
  return `<section class="content-card"><p class="kicker dark">TIEFENANALYSE</p><h2>${esc(title)}</h2><div class="deep-analysis-grid">${items.map(x=>`<article class="deep-analysis-card"><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></article>`).join('')}</div></section>`;
}

if(!root)return;
if(!p){
  root.innerHTML='<section class="empty-state"><div><h1>Spieler nicht gefunden</h1><a class="button button-blue" href="kader.html">Zurück zum Kader</a></div></section>';
  return;
}
const calculatedAge=p.birthDate?utils.ageAt(p.birthDate,referenceDate):p.age;
document.title=`${p.name} | Finn Harps`;
const peers=players.filter(x=>x.group===p.group&&x.id!==p.id).sort((a,b)=>(b.avgRating||0)-(a.avgRating||0)).slice(0,4);
const identityFields=[
  ['Geburtsort',p.birthPlace],['Persönlichkeit',p.personality],['Medienbeschreibung',p.mediaDescription],
  ['Starker Fuß',p.preferredFoot],['Nationalmannschaft',p.international],['U21',p.youthInternational],
  ['Vertrag bis',p.contractUntil],['Gehalt',p.wage],['Kaderstatus',p.status]
].filter(([,v])=>v);
const recordStrip=(p.xg||p.playerOfMatch)?`<div class="profile-record-strip"><div><span>Tore ${config.currentSeason||2040}</span><strong>${p.goals??'–'}</strong></div><div><span>xG ${config.currentSeason||2040}</span><strong>${p.xg!=null?fmtRating(p.xg):'–'}</strong></div><div><span>Über xG</span><strong>${p.xg!=null&&p.goals!=null?`${p.goals-p.xg>=0?'+':''}${(p.goals-p.xg).toFixed(2).replace('.',',')}`:'–'}</strong></div><div><span>Spieler des Spiels</span><strong>${p.playerOfMatch??'–'}</strong></div></div>`:'';

root.innerHTML=`
<section class="profile-hero">
  <a class="backlink" href="kader.html">← ZUR KADERZENTRALE</a>
  <div class="profile-title"><div><p class="kicker">${esc(p.nation)} · ${esc(p.positionCode)} · ${esc(p.systemRole&&p.systemRole!=='-'?p.systemRole:p.role)}</p><h1>${esc(p.name)}</h1><p>${esc(p.summary)}</p></div><div class="profile-monogram">${esc(p.name.split(' ').map(x=>x[0]).join('').slice(0,2))}</div></div>
</section>
<div class="profile-shell">
  <section class="profile-facts">
    <div><span>Geburtsdatum</span><strong>${utils.formatBirthDate(p.birthDate)}</strong></div>
    <div><span>Alter am ${formatReferenceDate(referenceDate)}</span><strong>${calculatedAge??'–'}${p.birthDate?'':'*'}</strong></div>
    <div><span>Größe</span><strong>${esc(p.height)}</strong></div>
    <div><span>Marktwert</span><strong>${esc(p.transferValue)}</strong></div>
    <div><span>Bewertung</span><strong class="rating">${stars(p.rating)}</strong></div>
  </section>
  <div class="profile-content"><div>
    ${p.honours?`<section class="dossier-banner"><div><p class="kicker">SPIELERDOSSIER · VOLLPROFIL</p><h2>${esc(p.verdict)}</h2><p>${esc(p.mediaDescription||p.role)} · ${esc(p.international||p.nation)}</p></div><strong>${p.goals??'–'} T</strong></section>`:''}
    <section class="content-card"><p class="kicker dark">GESAMTURTEIL</p><h2>${esc(p.verdict)}</h2><div class="analysis-callout">${esc(p.analysis||p.summary)}</div><p>${esc(p.summary)}</p>${recordStrip}${p.birthDate?'':`<p class="source-note">* Das genaue Geburtsdatum ist noch nicht erfasst. Das Alter stammt aus dem aktuellen Export.</p>`}</section>
    ${identityFields.length?`<section class="content-card"><p class="kicker dark">PERSON & VERTRAG</p><h2>Steckbrief</h2><div class="identity-grid">${identityFields.map(([label,value])=>`<div><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`).join('')}</div></section>`:''}
    <section class="content-card"><p class="kicker dark">SAISON ${config.currentSeason||2040}</p><h2>Leistungsprofil</h2><div class="metric-grid"><div><span>Einsätze</span><strong>${esc(p.appearances)}</strong></div><div><span>Tore</span><strong>${p.goals??'–'}</strong></div><div><span>Vorlagen</span><strong>${p.assists??'–'}</strong></div><div><span>Ø-Note</span><strong>${fmtRating(p.avgRating)}</strong></div><div><span>Kondition</span><strong>${esc(p.condition||'–')}</strong></div><div><span>Moral</span><strong>${esc(p.morale)}</strong></div></div></section>
    ${renderSeasonSplits(p.seasonSplits)}
    <section class="content-card"><p class="kicker dark">TAKTISCHE EINORDNUNG</p><h2>${esc(p.systemRole&&p.systemRole!=='-'?p.systemRole:p.role)}</h2><p><b>Beste Rolle laut Export:</b> ${esc(p.bestRole)}</p><p><b>Positionen:</b> ${esc(p.positionCode)}</p><p>Die Systemrolle beschreibt den aktuellen Einsatz im 4-3-3. Die beste Rolle ist die Football-Manager-Empfehlung und muss nicht identisch mit der taktischen Aufgabe sein.</p></section>
    ${renderAttributes(p.attributes)}${renderTraits(p.traits)}${renderDeepAnalysis(p.deepAnalysis)}${renderCareer(p.careerSeasons,p.careerTotals)}${renderNarrative(p.careerNarrative)}${renderHonours(p.honours)}
    <section class="content-card"><p class="kicker dark">SAISONHISTORIE</p><h2>Im Kaderarchiv verfolgen</h2><p>Geburtsdatum und Saisonstichtag werden genutzt, um das Alter in jedem archivierten Kader automatisch korrekt zu berechnen.</p><div class="hero-actions"><a class="button button-blue" href="kaderarchiv.html?year=${config.currentSeason||2040}">Kader ${config.currentSeason||2040}</a><a class="button button-blue" href="kaderarchiv.html?year=${config.nextSeason||2041}">Kader ${config.nextSeason||2041}</a></div></section>
  </div><aside>
    <section class="content-card"><p class="kicker dark">STÄRKEN</p><h2>Was trägt</h2><ul class="feature-list">${(p.strengths||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>
    <section class="content-card"><p class="kicker dark">GRENZEN</p><h2>Was bleibt</h2><ul class="feature-list risk">${(p.risks||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>
    <section class="content-card"><p class="kicker dark">KADERPLANUNG</p><h2>Nächster Schritt</h2><p>${esc(p.future)}</p><span class="status-badge ${availabilityClass(p.availability)}">${esc(p.availability)}</span></section>
    <section class="content-card"><p class="kicker dark">VERGLEICHSGRUPPE</p><h2>${esc(p.group)}</h2><div class="peer-list">${peers.map(x=>`<a href="${esc(x.page||`spieler.html?id=${x.id}`)}"><span>${esc(x.name)}</span><b>${fmtRating(x.avgRating)}</b></a>`).join('')}</div></section>
  </aside></div>
</div>`;
})();