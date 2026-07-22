(()=>{
  const table=document.querySelector('.archive-table-section table');
  const body=document.querySelector('#archiveBody');
  if(!table||!body)return;

  const numberById=new Map((window.FM_PLAYERS||[]).map(player=>[player.id,player.shirtNumber]));

  function ensureHeader(){
    const row=table.querySelector('thead tr');
    if(!row||row.querySelector('[data-shirt-number-head]'))return;
    const th=document.createElement('th');
    th.dataset.shirtNumberHead='true';
    th.textContent='Nr.';
    th.style.width='54px';
    row.insertBefore(th,row.firstElementChild);
  }

  function decorate(){
    ensureHeader();
    body.querySelectorAll('tr').forEach(row=>{
      const link=row.querySelector('a.player-link');
      if(!link)return;
      const id=new URL(link.href,location.href).searchParams.get('id');
      let cell=row.querySelector('[data-shirt-number-cell]');
      if(!cell){
        cell=document.createElement('td');
        cell.dataset.shirtNumberCell='true';
        row.insertBefore(cell,row.firstElementChild);
      }
      const number=numberById.get(id);
      cell.innerHTML=number===undefined?'<span class="estimated">–</span>':`<strong>#${number}</strong>`;
    });

    const note=document.querySelector('.archive-table-section .source-note');
    if(note&&!note.dataset.shirtNumberNote){
      note.dataset.shirtNumberNote='true';
      note.insertAdjacentHTML('beforeend',' Rückennummern: 25 bestätigte Nummern aus den Spieltagskadern gegen Young Boys und Paris Saint-Germain; nicht sichtbare Nummern bleiben offen.');
    }
  }

  decorate();
  new MutationObserver(decorate).observe(body,{childList:true});
  document.querySelector('#archiveSearch')?.addEventListener('input',()=>queueMicrotask(decorate));
  document.querySelector('#archiveGroup')?.addEventListener('change',()=>queueMicrotask(decorate));
})();
