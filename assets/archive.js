(()=>{
  const players=window.FM_PLAYERS||[];
  const seasons=window.FM_SEASONS||[];
  const utils=window.FM_DATE_UTILS;
  const config=window.FM_CONFIG||{};
  const root=document.querySelector('#archiveRoot');
  const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const fallbackYear=config.nextSeason||config.currentSeason||2040;
  const requested=Number(new URLSearchParams(location.search).get('year'))||(seasons.length?Math.max(...seasons.map(item=>item.year)):fallbackYear);
  const season=seasons.find(item=>item.year===requested)||seasons[0];

  if(!root)return;
  if(!season){
    root.innerHTML='<section class="empty-state"><div><h1>Kein Saisonstand gefunden</h1><a class="button button-blue" href="kader.html">Zurück zum Kader</a></div></section>';
    return;
  }

  const snapshotMode=Array.isArray(season.snapshotRows)&&season.snapshotRows.length>0;
  const snapshotById=new Map((season.snapshotRows||[]).map(item=>[item.id,item]));
  const squad=(season.squadIds||[])
    .map(id=>{
      const base=players.find(player=>player.id===id)||{};
      const snapshot=snapshotById.get(id)||{};
      return {...base,...snapshot,id,name:snapshot.name||base.name||id,page:base.page||`spieler.html?id=${id}`};
    })
    .filter(player=>player.name);

  const baseSeason=config.currentSeason||2040;
  const age=player=>{
    if(snapshotMode&&Number.isFinite(Number(player.age)))return Number(player.age);
    if(player.birthDate&&utils)return utils.ageAt(player.birthDate,season.referenceDate);
    return Number(player.age||0)+(season.year-baseSeason);
  };
  const average=squad.reduce((sum,player)=>sum+age(player),0)/Math.max(squad.length,1);
  const exact=squad.filter(player=>player.birthDate).length;
  const list=(title,items,empty)=>`<article class="change-card"><span>${title}</span>${items.length?`<ul>${items.map(item=>`<li>${esc(item)}</li>`).join('')}</ul>`:`<p>${empty}</p>`}</article>`;
  const sourceLabel=snapshotMode
    ? `${season.snapshotSource?.playerCount||squad.length} Spieler · FM-Export`
    : `${exact}/${squad.length} Geburtsdaten exakt erfasst`;

  const tableHead=snapshotMode
    ? '<tr><th>Spieler</th><th>Alter</th><th>Größe</th><th>Position</th><th>Rolle/Aufgabe</th><th>Auswahl</th><th>Kondition</th><th>Moral</th><th>Eins</th><th>T</th><th>V</th><th>Ø</th></tr>'
    : '<tr><th>Spieler</th><th>Geburtsdatum</th><th>Alter am Stichtag</th><th>Nation</th><th>Rolle</th><th>Status</th><th>Einsätze</th><th>T</th><th>V</th><th>Ø</th></tr>';
  const sourceNote=snapshotMode
    ? `Quelle: <a href="${esc(season.snapshotSource?.path||'#')}">${esc(season.snapshotSource?.label||'FM-Kaderexport')}</a>. Auswahlordnung, Rollen, Kondition, Moral und sichtbare Einsatzdaten entsprechen dem Export; Abkürzungen im Info-Feld werden unverändert archiviert.`
    : 'Bei fehlendem exakten Geburtsdatum wird das im aktuellen Export ausgewiesene Alter saisonweise fortgeschrieben. Diese Werte sind als Näherung markiert.';

  root.innerHTML=`
    <section class="page-hero archive-hero">
      <div>
        <p class="kicker">KADERARCHIV · ${season.year}</p>
        <h1>${esc(season.headline)}</h1>
        <p>${esc(season.summary)}</p>
        <div class="season-tabs">${seasons.map(item=>`<a class="${item.year===season.year?'active':''}" href="kaderarchiv.html?year=${item.year}">${item.year}<small>${esc(item.status)}</small></a>`).join('')}</div>
      </div>
      <div class="page-hero-badge">
        <span>REFERENZDATUM</span>
        <strong>${season.referenceDate.split('-').reverse().join('.')}</strong>
        <small>${sourceLabel}</small>
      </div>
    </section>
    <section class="dashboard-strip archive-strip">
      <article><span>Kadergröße</span><strong>${squad.length}</strong></article>
      <article><span>Ø Alter</span><strong>${average.toFixed(1).replace('.',',')}</strong></article>
      <article><span>U21</span><strong>${squad.filter(player=>age(player)<=21).length}</strong></article>
      <article><span>System</span><strong>${esc(season.formation)}</strong></article>
      <article><span>Status</span><strong>${esc(season.status)}</strong></article>
    </section>
    <section class="section-wrap">
      <div class="section-head"><div><p class="kicker dark">VERÄNDERUNG ZUM VORJAHR</p><h2>Was sich bewegt hat</h2></div></div>
      <div class="change-grid">
        ${list('Zugänge',season.changes?.incoming||[],'Noch keine Zugänge erfasst.')}
        ${list('Abgänge',season.changes?.outgoing||[],'Noch keine Abgänge erfasst.')}
        ${list('Aufgerückt',season.changes?.promoted||[],'Keine neuen Aufrücker erfasst.')}
        ${list('Kadernotizen',season.changes?.notes||[],'Keine Notizen vorhanden.')}
      </div>
    </section>
    <section class="section-wrap archive-table-section">
      <div class="section-head">
        <div>
          <p class="kicker dark">SAISONKADER ${season.year}</p>
          <h2>${snapshotMode?'Aktueller Kadersnapshot':'Ein eingefrorener Datenstand'}</h2>
        </div>
        <div class="filters">
          <input id="archiveSearch" type="search" placeholder="Spieler, Rolle, Nation …">
          <select id="archiveGroup"><option value="all">Alle Mannschaftsteile</option></select>
        </div>
      </div>
      <div class="table-shell"><table class="data-table"><thead>${tableHead}</thead><tbody id="archiveBody"></tbody></table></div>
      <p class="source-note">${sourceNote}</p>
    </section>
    <section class="dark-section">
      <div class="section-wrap">
        <div class="section-head light"><div><p class="kicker">ERFOLGE</p><h2>${season.honours.length?'Die Bilanz dieser Saison':'Noch eine leere Vitrine'}</h2></div></div>
        <div class="honour-row">${season.honours.length?season.honours.map(item=>`<span>${esc(item)}</span>`).join(''):'<p>Die Saison ist als Planung angelegt. Titel und Meilensteine werden fortlaufend ergänzt.</p>'}</div>
      </div>
    </section>`;

  const groups=[...new Set(squad.map(player=>player.group).filter(Boolean))].sort();
  const groupFilter=document.querySelector('#archiveGroup');
  const search=document.querySelector('#archiveSearch');
  const body=document.querySelector('#archiveBody');
  groups.forEach(group=>groupFilter.insertAdjacentHTML('beforeend',`<option>${esc(group)}</option>`));

  const numberOrDash=value=>value===null||value===undefined||value===''?'–':esc(value);
  const rating=value=>Number.isFinite(Number(value))?Number(value).toFixed(2).replace('.',','):'–';

  function render(){
    const term=search.value.toLowerCase();
    const group=groupFilter.value;
    const filtered=squad.filter(player=>{
      const matchesGroup=group==='all'||player.group===group;
      const haystack=[
        player.name,player.nation,player.role,player.systemRole,player.status,
        player.matchRole,player.selection,player.morale,player.positionCode
      ].join(' ').toLowerCase();
      return matchesGroup&&(!term||haystack.includes(term));
    });

    body.innerHTML=filtered.map(player=>{
      if(snapshotMode){
        return `<tr>
          <td><a class="player-link" href="${esc(player.page)}"><b>${esc(player.name)}</b><small>${esc(player.nation||'')}</small></a></td>
          <td><b>${age(player)}</b></td>
          <td>${esc(player.height||'–')}</td>
          <td>${esc(player.positionCode||'–')}</td>
          <td>${esc(player.matchRole||player.systemRole||player.role||'–')}</td>
          <td>${esc(player.selection||'Kader')}${player.info?` <small class="estimated">${esc(player.info)}</small>`:''}</td>
          <td>${esc(player.condition||'–')}</td>
          <td>${esc(player.morale||'–')}</td>
          <td>${numberOrDash(player.appearances)}</td>
          <td>${numberOrDash(player.goals)}</td>
          <td>${numberOrDash(player.assists)}</td>
          <td>${rating(player.avgRating)}</td>
        </tr>`;
      }
      const exactDate=Boolean(player.birthDate);
      return `<tr>
        <td><a class="player-link" href="${esc(player.page)}"><b>${esc(player.name)}</b><small>${esc(player.positionCode)}</small></a></td>
        <td>${exactDate&&utils?utils.formatBirthDate(player.birthDate):'<span class="estimated">nicht erfasst</span>'}</td>
        <td><b>${age(player)}</b>${exactDate?'':' <small class="estimated">geschätzt</small>'}</td>
        <td>${esc(player.nation)}</td>
        <td>${esc(player.systemRole&&player.systemRole!=='-'?player.systemRole:player.role)}</td>
        <td>${esc(player.status)}</td>
        <td>${esc(player.appearances)}</td>
        <td>${player.goals??'–'}</td>
        <td>${player.assists??'–'}</td>
        <td>${rating(player.avgRating)}</td>
      </tr>`;
    }).join('');
  }

  search.addEventListener('input',render);
  groupFilter.addEventListener('change',render);
  render();
})();