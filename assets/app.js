const players = window.FM_PLAYERS || [];
const grid = document.querySelector('#playerGrid');
const searchInput = document.querySelector('#searchInput');
const positionFilter = document.querySelector('#positionFilter');
const dialog = document.querySelector('#playerDialog');
const dialogContent = document.querySelector('#dialogContent');
const closeButton = document.querySelector('.dialog-close');

const escapeHtml = value => String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const stars = value => '★'.repeat(value) + '☆'.repeat(Math.max(0, 5 - value));

function populateStats(){
  document.querySelector('#playerCount').textContent = players.length;
  const average = players.reduce((sum,p)=>sum+p.age,0) / Math.max(players.length,1);
  document.querySelector('#averageAge').textContent = average.toFixed(1).replace('.',',');
  document.querySelector('#talentCount').textContent = players.filter(p=>p.age<=21).length;
}

function populatePositions(){
  [...new Set(players.map(p=>p.position))].sort().forEach(position=>{
    const option = document.createElement('option');
    option.value = position;
    option.textContent = position;
    positionFilter.appendChild(option);
  });
}

function playerCard(player,index){
  const profileState = player.page ? '<span class="profile-ready">Tiefenanalyse</span>' : '<span class="profile-pending">Kurzprofil</span>';
  return `<article class="player-card" tabindex="0" role="button" data-index="${index}" data-position="${escapeHtml(player.position)}">
    <div class="card-topline">${profileState}<div class="rating" title="Wiki-Bewertung">${stars(player.rating)}</div></div>
    <header><div><h3>${escapeHtml(player.name)}</h3><div class="meta">${escapeHtml(player.nation)} · ${player.age} Jahre</div></div></header>
    <div class="tags"><span class="tag">${escapeHtml(player.position)}</span><span class="tag">${escapeHtml(player.status)}</span><span class="tag">${escapeHtml(player.role)}</span></div>
    <p>${escapeHtml(player.summary)}</p>
    <span class="card-action">${player.page ? 'Profil öffnen →' : 'Kurzprofil ansehen →'}</span>
  </article>`;
}

function render(){
  const query = searchInput.value.trim().toLowerCase();
  const position = positionFilter.value;
  const filtered = players.map((player,index)=>({player,index})).filter(({player})=>{
    const haystack = [player.name,player.nation,player.position,player.role,player.status,player.summary,...player.strengths,...player.risks].join(' ').toLowerCase();
    return (!query || haystack.includes(query)) && (position === 'all' || player.position === position);
  });
  grid.innerHTML = filtered.length ? filtered.map(({player,index})=>playerCard(player,index)).join('') : '<p>Keine Spieler gefunden. Der Scout hat im Nebel gestochert.</p>';
}

function openPlayer(index){
  const player = players[index];
  if(!player) return;
  if(player.page){ window.location.href = player.page; return; }
  dialogContent.innerHTML = `<div class="dialog-hero compact"><p class="kicker">${escapeHtml(player.position)} · ${escapeHtml(player.nation)}</p><h2>${escapeHtml(player.name)}</h2><p>${escapeHtml(player.summary)}</p></div>
  <div class="dialog-body"><div class="dialog-grid"><div><span>Alter</span><strong>${player.age}</strong></div><div><span>Kaderstatus</span><strong>${escapeHtml(player.status)}</strong></div><div><span>Ideale Rolle</span><strong>${escapeHtml(player.role)}</strong></div><div><span>Bewertung</span><strong class="rating">${stars(player.rating)}</strong></div></div>
  <div class="preview-columns"><section><p class="kicker dark">PROFIL</p><h3>Stärken</h3><ul>${player.strengths.map(item=>`<li>${escapeHtml(item)}</li>`).join('')}</ul></section><section><p class="kicker dark">ENTWICKLUNG</p><h3>Risiken & Grenzen</h3><ul>${player.risks.map(item=>`<li>${escapeHtml(item)}</li>`).join('')}</ul></section></div>
  <div class="future-box"><span>ZUKUNFTSPLAN</span><p>${escapeHtml(player.future)}</p></div><p class="profile-status-note">Die vollständige gestaltete Webanalyse wird als eigene Spielerseite ergänzt.</p></div>`;
  dialog.showModal();
}

searchInput.addEventListener('input',render);
positionFilter.addEventListener('change',render);
grid.addEventListener('click',event=>{ const card = event.target.closest('.player-card'); if(card) openPlayer(Number(card.dataset.index)); });
grid.addEventListener('keydown',event=>{ const card = event.target.closest('.player-card'); if(card && (event.key === 'Enter' || event.key === ' ')){ event.preventDefault(); openPlayer(Number(card.dataset.index)); }});
closeButton.addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{ const rect = dialog.getBoundingClientRect(); const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom; if(outside) dialog.close(); });

populateStats();
populatePositions();
render();