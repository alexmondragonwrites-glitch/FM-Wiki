(()=>{
  const d=window.FM_IRELAND;
  const root=document.querySelector('#nationalRoot');
  if(!d||!root)return;
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmt=v=>Number(v).toFixed(2).replace('.',',');
  const starters=d.players.filter(p=>p.starter);
  const avgAge=(d.players.reduce((s,p)=>s+p.age,0)/d.players.length).toFixed(1).replace('.',',');
  const starterAvg=(starters.reduce((s,p)=>s+p.age,0)/starters.length).toFixed(1).replace('.',',');
  const slotClass=s=>String(s||'').toLowerCase();
  const pitch=starters.map(p=>`<div class="national-player ${slotClass(p.slot)}" data-name="${esc(p.name)}"><span>${esc(p.slot)}</span></div>`).join('');
  const roles=starters.map(p=>`<div class="national-role"><strong>${esc(p.name)}</strong><span>${esc(p.role)} · ${esc(p.duty)}</span></div>`).join('');
  const core=d.harpsCore.map(p=>`<a class="core-card" href="spieler.html?id=${encodeURIComponent(p.id)}"><span>FINN-HARPS-ACHSE</span><h3>${esc(p.name)}</h3><p>${esc(p.role)}</p><b>Profil öffnen →</b></a>`).join('');
  const statusLine=d.nextMatch
    ? `Nächstes Spiel: ${esc(d.nextMatch.opponent)} (${esc(d.nextMatch.venue)}) · ${esc(d.nextMatch.date)} · ${esc(d.nextMatch.time)}`
    : esc(d.qualification?.detail||d.groupStatus||'Turnierstatus wird fortgeschrieben');
  const intro=d.nextMatch
    ? `<p class="kicker">NÄCHSTES LÄNDERSPIEL</p><h2>Die nächste Aufgabe wartet.</h2><div class="fixture-line"><strong>IRLAND</strong><span>vs.</span><strong>${esc(d.nextMatch.opponent)}</strong></div><p>${esc(d.nextMatch.date)} · ${esc(d.nextMatch.venue)}. ${esc(d.nextMatch.requirement||'')}</p>`
    : `<p class="kicker">NATIONS LEAGUE A</p><h2>Irland steht im Halbfinale.</h2><div class="fixture-line"><strong>GRUPPE 4</strong><span>1.</span><strong>12 PUNKTE</strong></div><p>Ungeschlagen durch sechs Gruppenspiele. Der kommende Halbfinalgegner ist noch nicht erfasst.</p>`;

  root.innerHTML=`<section class="page-hero ireland-hero"><div><div class="flag-mark" aria-label="Flagge Irlands"><i></i><i></i><i></i></div><p class="kicker">IRLAND · NATIONALMANNSCHAFT 2040</p><h1>Ein Land im Takt der Harps.</h1><p>Die zweite Bühne des Saves: dieselbe Traineridee, andere Spielerauswahl. Irland verbindet eine Finn-Harps-Achse mit nationaler Breite und spielt im vertrauten 4-3-3.</p><div class="hero-actions"><a class="button button-light" href="#kader">Nationalkader</a><a class="button button-ghost" href="#taktik">Taktikbrett</a></div></div><div class="page-hero-badge"><span>${esc(d.competition)} · ${esc(d.group)}</span><strong>${esc(d.position)}</strong><small>${statusLine}</small></div></section>
  <section class="dashboard-strip"><article><span>Formation</span><strong>${esc(d.formation)}</strong><small>${esc(d.system)}</small></article><article><span>Kadergröße</span><strong>${d.players.length}</strong><small>11 Startelf · ${d.players.length-11} Bank</small></article><article><span>Ø Alter Kader</span><strong>${avgAge}</strong><small>Startelf ${starterAvg}</small></article><article><span>Harps-Achse</span><strong>${d.harpsCore.length}</strong><small>Startspieler aus dem Klubkern</small></article><article><span>Turnierstatus</span><strong>${esc(d.qualification?.stage||d.position)}</strong><small>${esc(d.groupStatus||d.updated)}</small></article></section>
  <section class="section-wrap national-overview"><article class="next-international">${intro}</article><article class="coach-card"><p class="kicker dark">DOPPELFUNKTION</p><h2>Vereinsarchitekt und Nationaltrainer.</h2><p>Der Nationalteam-Bereich dokumentiert nicht nur Ergebnisse. Er zeigt, welche Klubideen sich auf Irland übertragen lassen und wo die Nationalmannschaft eigene Lösungen braucht.</p><ul><li>Finn-Harps-Spieler liefern vertraute Automatismen im Zentrum.</li><li>Die Außenrollen werden an das verfügbare irische Personal angepasst.</li><li>Vereinsform und Nationalteamleistung bleiben getrennte Datenebenen.</li></ul></article></section>
  <section class="dark-section" id="taktik"><div class="section-wrap national-tactics"><div><div class="section-head light"><div><p class="kicker">ARCHIVIERTE STARTELF · SCHOTTLAND</p><h2>${esc(d.system)}</h2></div></div><div class="national-pitch">${pitch}</div></div><aside><p class="kicker">ROLLENVERTEILUNG</p><h2>Elf Spieler, elf klar begrenzte Aufgaben.</h2><p class="muted-light">O’Neill hält den Rhythmus, Ramsey attackiert als Mezzala, O’Kane verbindet die Zonen. Das Taktikbrett bleibt als Ausgangspunkt der erfolgreichen November-Länderspiele erhalten.</p><div class="national-role-list">${roles}</div></aside></div></section>
  <section class="section-wrap" id="kader"><div class="section-head"><div><p class="kicker dark">NATIONALKADER</p><h2>Der November-Kader 2040.</h2></div></div><div class="squad-toolbar"><input id="nationalSearch" type="search" placeholder="Spieler, Position oder Rolle …"><select id="nationalFilter"><option value="all">Gesamter Kader</option><option value="starter">Ausgangsstartelf</option><option value="bench">Bank</option></select></div><div class="table-shell"><table class="data-table"><thead><tr><th>Status</th><th>Spieler</th><th>Position</th><th>Rolle</th><th>Alter</th><th>Größe</th><th>Kondition</th><th>Vereinseinsätze</th><th>T</th><th>V</th><th>Ø</th></tr></thead><tbody id="nationalTable"></tbody></table></div><p class="squad-note">Einsätze, Tore, Vorlagen und Durchschnittsnote stammen aus der im Export sichtbaren Vereinsform 2040. Sie sind keine Länderspielstatistiken.</p></section>
  <section class="section-wrap"><div class="section-head"><div><p class="kicker dark">DIE BRÜCKE NACH BALLYBOFEY</p><h2>Die Finn-Harps-Achse in Grün.</h2></div></div><div class="core-grid">${core}</div></section>
  <section class="duality-band"><div class="section-wrap"><article><p class="kicker">WAS SICH ÜBERTRAGEN LÄSST</p><h2>Das Mittelfeld spricht dieselbe Sprache.</h2><p>O’Neill, O’Kane und Ramsey kennen Abstände, Laufwege und Pressingauslöser aus dem Klub. Das verkürzt die Lernzeit und gibt Irland im Zentrum eine seltene taktische Vertrautheit.</p></article><article><p class="kicker">WAS EIGENSTÄNDIG BLEIBT</p><h2>Nationalteam ist kein Klub in anderer Flagge.</h2><p>Weniger Trainingszeit, andere Außenverteidiger und eine breitere Altersstruktur verlangen pragmatischere Anpassungen. Der Bereich hält genau diese Unterschiede fest.</p></article></div></section>`;

  const tbody=document.querySelector('#nationalTable');
  const search=document.querySelector('#nationalSearch');
  const filter=document.querySelector('#nationalFilter');
  function render(){
    const q=search.value.trim().toLowerCase();
    const f=filter.value;
    tbody.innerHTML=d.players.filter(p=>(f==='all'||(f==='starter'&&p.starter)||(f==='bench'&&!p.starter))&&[p.name,p.position,p.role].filter(Boolean).join(' ').toLowerCase().includes(q)).map(p=>`<tr><td><span class="team-status ${p.starter?'':'bench'}">${p.starter?'Ausgangs-XI':'Bank'}</span></td><td><b>${esc(p.name)}</b></td><td>${esc(p.position)}</td><td>${esc(p.role||'Noch nicht festgelegt')}</td><td>${p.age}</td><td>${esc(p.height)}</td><td>${esc(p.condition)}</td><td>${esc(p.appearances)}</td><td>${p.goals}</td><td>${p.assists}</td><td><b>${fmt(p.rating)}</b></td></tr>`).join('');
  }
  search.addEventListener('input',render);
  filter.addEventListener('change',render);
  render();
})();