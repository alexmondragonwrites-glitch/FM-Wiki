(()=>{
  const id=new URLSearchParams(location.search).get('id');
  const p=(window.FM_PLAYERS||[]).find(item=>item.id===id);
  const details=p?.contractDetails;
  if(!details)return;

  const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const shell=document.querySelector('#playerRoot .profile-shell');
  if(!shell)return;

  const panel=document.createElement('section');
  panel.className='transfer-status-panel transfer-confirmed player-contract-panel';
  panel.innerHTML=`
    <div class="transfer-status-head">
      <div>
        <p class="kicker">VERTRAG · ${esc(details.signed)}</p>
        <h2>${esc(p.name)} bindet sich langfristig</h2>
        <p>${esc(details.reason)}</p>
      </div>
      <div class="transfer-fee">
        <span>GESAMTVOLUMEN</span>
        <strong>${esc(details.totalValue)}</strong>
        <small>${esc(details.duration)} · bis ${esc(details.until)}</small>
      </div>
    </div>
    <div class="transfer-contract-grid">
      <div><span>Vertragsbeginn</span><strong>${esc(details.start)}</strong></div>
      <div><span>Vertragsende</span><strong>${esc(details.until)}</strong></div>
      <div><span>Gehalt</span><strong>${esc(details.wage)}</strong></div>
      <div><span>Einsatzzeit</span><strong>${esc(details.playingTime)}</strong></div>
      ${(details.bonuses||[]).map(item=>`<div><span>${esc(item.label)}</span><strong>${esc(item.value)}</strong></div>`).join('')}
    </div>`;

  shell.insertBefore(panel,shell.firstChild);
})();
