(()=>{
  const id=new URLSearchParams(location.search).get('id');
  const p=(window.FM_PLAYERS||[]).find(x=>x.id===id);
  if(!p?.transferStatus)return;
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const root=document.querySelector('#playerRoot');
  const shell=root?.querySelector('.profile-shell');
  if(!shell)return;
  const c=p.proposedContract||{};
  const confirmed=!!p.transferConfirmed;
  const section=document.createElement('section');
  section.className=`transfer-status-panel${confirmed?' transfer-confirmed':''}`;
  section.innerHTML=`
    <div class="transfer-status-head">
      <div><p class="kicker">${confirmed?'TRANSFER 2041 · BESTÄTIGT':'TRANSFER 2041 · IN VERHANDLUNG'}</p><h2>${esc(p.transferStatus)}</h2><p>${confirmed?`Roberts hat den Vertrag unterschrieben und den Medizincheck mit ausgezeichnetem Gesundheitszustand bestanden. Bis zum Vollzug am ${esc(p.transferCompletionDate)} bleibt er formal Liverpool-Spieler, ist aber als Zugang für Finn Harps sicher.`:'Der Spieler gehört weiterhin Liverpool. Das Profil dokumentiert den aktuellen Verhandlungsstand und wird erst nach der Unterschrift als Finn-Harps-Kaderprofil geführt.'}</p></div>
      <div class="transfer-fee"><span>${confirmed?'FIXE ABLÖSE':'AKZEPTIERTE ABLÖSE'}</span><strong>${esc(p.transferFee)}</strong><small>${confirmed?'Bestätigt':'Stand'} ${esc(p.transferDate)}</small></div>
    </div>
    <div class="transfer-contract-grid">
      <div><span>${confirmed?'Wechselvollzug':'Geplanter Beginn'}</span><strong>${esc(c.start||'–')}</strong></div>
      <div><span>Laufzeit</span><strong>bis ${esc(c.until||'–')}</strong></div>
      <div><span>Gehalt</span><strong>${esc(c.wage||'–')}</strong></div>
      <div><span>Einsatzzeit</span><strong>${esc(c.playingTime||'–')}</strong></div>
      <div><span>Ab 2042</span><strong>${esc(c.futurePlayingTime||'–')}</strong></div>
      <div><span>Jährliche Steigerung</span><strong>${esc(c.annualRaise||'–')}</strong></div>
      <div><span>Loyalitätsbonus</span><strong>${esc(c.loyaltyBonus||'–')}</strong></div>
      <div><span>${confirmed?'Medizincheck':'Beratergebühr'}</span><strong>${esc(confirmed?p.medicalStatus:(c.agentFee||'–'))}</strong></div>
    </div>
    <div class="transfer-fit-note"><b>Kaderlogik:</b> Roberts ist spielerisch näher an Vinícius als an Rouvière. Er übernimmt einen Mittelfeldplatz für die neue Saison, sollte dessen Rolle aber nicht kopieren.</div>`;
  shell.insertBefore(section,shell.firstChild);
  const back=root.querySelector('.backlink');
  if(back)back.textContent='← ZURÜCK ZUM SAVE-ARCHIV';
})();