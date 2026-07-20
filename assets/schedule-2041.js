(()=>{
  const fixtures=(window.FM_FIXTURES||[])
    .filter(item=>String(item[0]).startsWith('2041-'))
    .map(([date,time,opponent,venue,result,competition,tv])=>({date,time,opponent,venue,result,competition,tv:Boolean(tv)}))
    .sort((a,b)=>a.date.localeCompare(b.date)||a.time.localeCompare(b.time)||a.opponent.localeCompare(b.opponent));
  const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const formatDate=value=>new Date(`${value}T12:00:00`).toLocaleDateString('de-DE',{weekday:'short',day:'2-digit',month:'2-digit'});
  const formatLongDate=value=>new Date(`${value}T12:00:00`).toLocaleDateString('de-DE',{weekday:'long',day:'2-digit',month:'long',year:'numeric'});
  const monthLabel=value=>new Date(`${value}-01T12:00:00`).toLocaleDateString('de-DE',{month:'long',year:'numeric'});
  const league=fixtures.filter(f=>f.competition==='Premier Division');
  const home=fixtures.filter(f=>f.venue==='Heim');
  const away=fixtures.filter(f=>f.venue==='Auswärts');
  const open=fixtures.filter(f=>f.venue==='Offen');
  const setText=(id,value)=>{const node=document.querySelector(id);if(node)node.textContent=String(value);};
  setText('#scheduleTotal',fixtures.length);
  setText('#scheduleLeague',league.length);
  setText('#scheduleHome',home.length);
  setText('#scheduleAway',away.length);
  setText('#scheduleOpen',open.length);
  const next=fixtures[0];
  const nextBox=document.querySelector('#next2041');
  if(next&&nextBox){
    nextBox.innerHTML=`<div><p class="kicker">SAISONAUFTAKT</p><h2>${esc(next.opponent)}</h2><p>${esc(formatLongDate(next.date))} · ${esc(next.time)} · ${esc(next.venue)}</p><small>${esc(next.competition)}</small></div><strong>vs.</strong>`;
  }
  const search=document.querySelector('#scheduleSearch');
  const competition=document.querySelector('#scheduleCompetition');
  const venue=document.querySelector('#scheduleVenue');
  const list=document.querySelector('#scheduleList');
  [...new Set(fixtures.map(f=>f.competition))].sort().forEach(item=>competition?.insertAdjacentHTML('beforeend',`<option value="${esc(item)}">${esc(item)}</option>`));
  function render(){
    if(!list)return;
    const query=(search?.value||'').trim().toLowerCase();
    const competitionValue=competition?.value||'all';
    const venueValue=venue?.value||'all';
    const filtered=fixtures.filter(f=>(!query||`${f.opponent} ${f.competition} ${f.venue}`.toLowerCase().includes(query))&&(competitionValue==='all'||f.competition===competitionValue)&&(venueValue==='all'||f.venue===venueValue));
    const groups=new Map();
    filtered.forEach(f=>{const key=f.date.slice(0,7);if(!groups.has(key))groups.set(key,[]);groups.get(key).push(f);});
    list.innerHTML=[...groups.entries()].map(([month,items])=>`<section class="schedule-month"><div class="schedule-month-head"><h3>${esc(monthLabel(month))}</h3><span>${items.length} Spiele</span></div><div class="fixture-list">${items.map(f=>`<article class="fixture-row upcoming"><time datetime="${esc(f.date)}">${esc(formatDate(f.date))}</time><small>${esc(f.time)}</small><div><b>${esc(f.opponent)}</b><small>${esc(f.venue)}${f.tv?' · TV':''}</small></div><div class="result">–</div><small>Geplant</small><div class="competition">${esc(f.competition)}</div></article>`).join('')}</div></section>`).join('')||'<div class="content-card"><b>Keine Spiele für diesen Filter gefunden.</b></div>';
  }
  search?.addEventListener('input',render);
  competition?.addEventListener('change',render);
  venue?.addEventListener('change',render);
  render();
})();