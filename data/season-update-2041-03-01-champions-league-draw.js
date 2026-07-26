(()=>{
  const season=(window.FM_SEASONS||[]).find(item=>item.year===2041);
  if(!season)return;
  season.status='Laufend';
  season.referenceDate='2041-03-01';
  season.snapshotDate='2041-03-01';
  season.headline='Der Titelverteidiger zieht A.S. Roma';
  season.summary='Finn Harps trifft im Achtelfinale der UEFA Champions League 2040/41 auf A.S. Roma. Die Spieltermine sind noch offen.';
  season.championsLeagueRoundOf16={drawDate:'2041-03-01',opponent:'A.S. Roma',dates:'offen',ties:[['A.S. Roma','Finn Harps'],['Bayern München','Inter'],['Paris Saint-Germain','Atlético de Madrid'],['Newcastle','Manchester United'],['Napoli','Real Madrid'],['Barcelona','Dortmund'],['Manchester City','RB Leipzig'],['Milan','Monaco']]};
  season.changes=season.changes||{incoming:[],outgoing:[],promoted:[],notes:[]};
  season.changes.notes=[...(season.changes.notes||[]),'01.03.2041: A.S. Roma wird als Achtelfinalgegner der UEFA Champions League ausgelost','Hin- und Rückspieltermine sind noch offen','Weitere Duelle: Bayern gegen Inter, PSG gegen Atlético, Newcastle gegen Manchester United, Napoli gegen Real Madrid, Barcelona gegen Dortmund, Manchester City gegen RB Leipzig und Milan gegen Monaco'];
})();
