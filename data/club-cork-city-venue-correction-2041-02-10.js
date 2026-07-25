(()=>{
  const club=(window.FM_CLUBS||[]).find(item=>item.id==='cork-city');
  if(!club)return;
  club.summary=String(club.summary||'').replace('in Finn Park','im Donegal Stadium');
  if(club.nextMatch)club.nextMatch.venue='Donegal Stadium';
  if(club.pressReport){
    club.pressReport.standfirst=String(club.pressReport.standfirst||'').replace('nach Finn Park','ins Donegal Stadium');
  }
})();
