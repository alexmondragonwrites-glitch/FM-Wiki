(()=>{
  const byId=id=>(window.FM_PLAYERS||[]).find(item=>item.id===id);

  const ramsey=byId('justin-ramsey');
  if(ramsey){
    ramsey.profileDate='2041-03-01';
    ramsey.careerNarrative=[...(ramsey.careerNarrative||[]),'Justin Ramsey erzielte am 1. März 2041 beim 2:0 gegen Shamrock Rovers per Elfmeter das entscheidende 1:0.'];
    ramsey.matchUpdates=[...(ramsey.matchUpdates||[]),{date:'2041-03-01',opponent:'Shamrock Rovers',competition:'Premier Division',result:'2:0',minutes:60,goals:1,assists:0,rating:7.3,note:'Verwandelte den Elfmeter zum 1:0'}];
  }

  const bruce=byId('torric-bruce');
  if(bruce){
    bruce.profileDate='2041-03-01';
    bruce.careerNarrative=[...(bruce.careerNarrative||[]),'Torric Bruce erzielte am 1. März 2041 beim 2:0 gegen Shamrock Rovers in der 78. Minute per Kopf den Endstand und wurde mit Note 7,9 bester Feldspieler.'];
    bruce.honours=[{year:'2041',type:'Premier-Division-Spiel',items:['Tor zum 2:0 gegen Shamrock Rovers','Kopfballtreffer in der 78. Minute','Note 7,9 · bester Feldspieler']},...(bruce.honours||[])];
    bruce.matchUpdates=[...(bruce.matchUpdates||[]),{date:'2041-03-01',opponent:'Shamrock Rovers',competition:'Premier Division',result:'2:0',minutes:90,goals:1,assists:0,rating:7.9,note:'Kopfballtor zum Endstand'}];
  }

  const paulo=byId('paulo-henrique');
  if(paulo){
    paulo.profileDate='2041-03-01';
    paulo.careerNarrative=[...(paulo.careerNarrative||[]),'Paulo Henrique blieb am 1. März 2041 beim 2:0 gegen Shamrock Rovers erneut ohne Gegentor und verlängerte seine Serie auf 360 Minuten ohne Gegentreffer.'];
    paulo.honours=[{year:'2041',type:'Defensivserie',items:['360 Minuten ohne Gegentor','Drei Ligaspiele 2041 ohne Gegentreffer','Zu-null-Spiel gegen Shamrock Rovers']},...(paulo.honours||[])];
    paulo.matchUpdates=[...(paulo.matchUpdates||[]),{date:'2041-03-01',opponent:'Shamrock Rovers',competition:'Premier Division',result:'2:0',minutes:90,cleanSheet:true,rating:7.4,note:'360 Minuten in Folge ohne Gegentor'}];
  }

  const maisto=byId('romano-maisto');
  if(maisto){
    maisto.profileDate='2041-03-01';
    maisto.careerNarrative=[...(maisto.careerNarrative||[]),'Romano Maisto absolvierte am 1. März 2041 beim 2:0 gegen Shamrock Rovers sein 50. Ligaspiel für Finn Harps.'];
    maisto.honours=[{year:'2041',type:'Ligameilenstein',items:['50. Ligaspiel für Finn Harps','Meilenstein beim 2:0 gegen Shamrock Rovers']},...(maisto.honours||[])];
    maisto.matchUpdates=[...(maisto.matchUpdates||[]),{date:'2041-03-01',opponent:'Shamrock Rovers',competition:'Premier Division',result:'2:0',minutes:45,goals:0,assists:0,rating:6.6,note:'50. Ligaspiel für Finn Harps'}];
  }
})();