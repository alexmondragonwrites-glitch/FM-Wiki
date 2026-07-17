(()=>{
  const d=window.FM_IRELAND;
  const m=d?.lastMatch;
  if(!d||!m)return;
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmt=v=>Number(v).toFixed(2).replace('.',',');
  const fmtRating=v=>v==null?'–':fmt(v);
  const teamCode=name=>name==='Irland'?'IRL':name==='Belgien'?'BEL':name==='Schottland'?'SCO':name.slice(0,3).toUpperCase();

  const badge=document.querySelector('.page-hero-badge');
  if(badge)badge.innerHTML=`<span>${esc(m.competition)} · ${esc(m.group)}</span><strong>${esc(m.home)} ${m.homeScore}:${m.awayScore} ${esc(m.away)}</strong><small>${esc(d.groupStatus)} · ${esc(m.date)}</small>`;

  const intro=document.querySelector('.next-international');
  if(intro)intro.innerHTML=`<p class="kicker">LETZTES LÄNDERSPIEL</p><h2>${esc(m.analysis.headline)}</h2><div class="fixture-line"><strong>${esc(m.home)}</strong><span>${m.homeScore}:${m.awayScore}</span><strong>${esc(m.away)}</strong></div><p>${esc(m.analysis.summary)}</p><div class="match-meta"><span>HZ ${esc(m.halfTime)}</span><span>${esc(m.venue)}</span><span>${m.attendance.toLocaleString('de-DE')} Zuschauer</span><span>${esc(m.weather||'')}</span></div>`;

  const overview=document.querySelector('.national-overview');
  if(!overview)return;

  if(d.qualification){
    overview.insertAdjacentHTML('afterend',`<section class="section-wrap semifinal-banner"><article><div><p class="kicker">${esc(d.qualification.label)}</p><h2>Irland steht im Halbfinale.</h2><p>${esc(d.qualification.detail)} Der Gegner und Termin der K.-o.-Runde sind noch nicht erfasst.</p></div><div class="semifinal-mark"><span>${esc(d.qualification.status)}</span><strong>${esc(d.qualification.stage)}</strong><small>12 Punkte · 3 Siege · 3 Remis · 0 Niederlagen</small></div></article></section>`);
  }

  const statRows=[
    ['Schüsse',m.stats.shots],
    ['Schüsse aufs Tor',m.stats.shotsOnTarget],
    ['xG',m.stats.xg.map(fmt)],
    ['Großchancen',m.stats.bigChances],
    ['Ballbesitz',m.stats.possession.map(x=>`${x}%`)],
    ['Ecken',m.stats.corners],
    ['Fouls',m.stats.fouls],
    ['Angekommene Pässe',m.stats.completedPasses],
    ['Passquote',m.stats.passAccuracy.map(x=>`${x}%`)],
    ['Gewonnene Zweikämpfe',m.stats.tacklesWon],
    ['Gewonnene Kopfbälle',m.stats.headersWon]
  ];
  const eventHtml=m.events.map(e=>`<li class="event-${e.team==='Irland'?'ireland':'opponent'}"><span>${e.minute}'</span><b>${e.type==='goal'?'⚽':e.type==='yellow'?'🟨':'•'} ${esc(e.player)}</b><small>${esc(e.team)}${e.assist?` · Vorlage ${esc(e.assist)}`:''}</small></li>`).join('');
  const statsHtml=statRows.map(([label,vals])=>`<div class="match-stat-row"><strong>${esc(vals[0])}</strong><span>${esc(label)}</span><strong>${esc(vals[1])}</strong></div>`).join('');
  const ratings=m.ratings.map(p=>`<tr><td><b>${esc(p.name)}</b>${p.irelandBest?'<small class="pom-tag">Irlands Bester</small>':''}</td><td>${p.starter?'Startelf':`Ein ${p.on}.`}</td><td>${p.off?`${p.off}. Minute`:'–'}</td><td>${p.goals||0}</td><td>${p.assists||0}</td><td><strong>${fmtRating(p.rating)}</strong></td></tr>`).join('');
  const table=m.standings.map(r=>`<tr class="${r.team==='Irland'?'ireland-row':''}"><td>${r.position}</td><td><b>${esc(r.team)}</b></td><td>${r.played}</td><td>${r.wins}</td><td>${r.draws}</td><td>${r.losses}</td><td>${r.goalsFor}:${r.goalsAgainst}</td><td>${r.goalDifference>0?'+':''}${r.goalDifference}</td><td><b>${r.points}</b></td></tr>`).join('');
  const history=(window.FM_IRELAND_MATCHES||[]).slice().reverse().map(x=>`<article class="history-match ${x.id===m.id?'latest':''}"><span>${esc(x.date)} · ${esc(x.competition)}</span><h3>${esc(x.home)} ${x.homeScore}:${x.awayScore} ${esc(x.away)}</h3><p>${esc(x.analysis?.headline||'Länderspiel')}</p></article>`).join('');

  const anchor=document.querySelector('.semifinal-banner')||overview;
  anchor.insertAdjacentHTML('afterend',`<section class="section-wrap national-match-report"><div class="section-head"><div><p class="kicker dark">SPIELBERICHT · ${esc(m.date)}</p><h2>Der Punkt, der zur K.-o.-Runde wurde.</h2></div><div class="result-stamp"><span>${esc(m.competition)}</span><strong>${teamCode(m.home)} ${m.homeScore}:${m.awayScore} ${teamCode(m.away)}</strong></div></div><div class="match-report-grid"><article class="content-card"><p class="kicker dark">SPIELVERLAUF</p><h2>Ramsey trifft, Irland hält die Tür offen.</h2><ol class="match-events">${eventHtml}</ol></article><article class="content-card"><p class="kicker dark">SPIELKONTROLLE</p><h2>Weniger Schüsse, bessere Chancen.</h2><div class="match-stats">${statsHtml}</div></article></div><div class="match-analysis-grid"><article class="content-card"><p class="kicker dark">WAS TRUG</p><h2>Die positiven Signale</h2><ul class="feature-list">${m.analysis.strengths.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></article><article class="content-card"><p class="kicker dark">WAS OFFEN BLIEB</p><h2>Die Restarbeit</h2><ul class="feature-list risk">${m.analysis.limits.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></article></div><div class="content-card"><p class="kicker dark">EINZELNOTEN IRLAND</p><h2>Boylan liefert, Ramsey vollendet.</h2><div class="table-shell"><table class="data-table national-ratings"><thead><tr><th>Spieler</th><th>Status</th><th>Aus</th><th>Tore</th><th>Vorlagen</th><th>Note</th></tr></thead><tbody>${ratings}</tbody></table></div></div><div class="content-card"><p class="kicker dark">ABSCHLUSSTABELLE · GRUPPE 4</p><h2>Ungeschlagen an die Spitze.</h2><div class="table-shell"><table class="data-table standings-table"><thead><tr><th>#</th><th>Team</th><th>Sp</th><th>S</th><th>U</th><th>N</th><th>Tore</th><th>Diff.</th><th>Pkt.</th></tr></thead><tbody>${table}</tbody></table></div></div><div class="content-card match-history"><p class="kicker dark">LÄNDERSPIELCHRONIK</p><h2>Der November-Weg ins Halbfinale.</h2><div class="history-grid">${history}</div></div></section>`);
})();