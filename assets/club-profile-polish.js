(()=>{
  document.querySelectorAll('.club-squad-table tbody tr').forEach(row=>{
    row.querySelectorAll('td b').forEach(cell=>{
      if(cell.textContent.trim()==='NaN')cell.textContent='–';
    });
  });
  const id=new URLSearchParams(location.search).get('id')||'finn-harps';
  const club=(window.FM_CLUBS||[]).find(x=>x.id===id);
  const heading=document.querySelector('.match-plan h2');
  if(heading&&club){
    heading.textContent=club.scouting?.planHeading||`So wird das ${club.formation||'Gegnersystem'} geknackt`;
  }
})();