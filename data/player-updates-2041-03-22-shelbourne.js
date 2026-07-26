(()=>{
  const find=(id,name)=>(window.FM_PLAYERS||[]).find(item=>item.id===id||item.name===name);
  const addMatch=(player,update)=>{if(player)player.matchUpdates=[...(player.matchUpdates||[]),update];};

  const ramsey=find('justin-ramsey','Justin Ramsey');
  if(ramsey){
    ramsey.profileDate='2041-03-22';
    ramsey.careerNarrative=[...(ramsey.careerNarrative||[]),'Justin Ramsey erzielte am 22. März 2041 beim 5:1 gegen Shelbourne einen Hattrick innerhalb der ersten 42 Minuten. Damit erreichte er sowohl 75 Ligatore seiner Karriere als auch 75 Tore für Finn Harps.'];
    ramsey.honours=[{year:'2041',type:'Hattrick und Doppelmeilenstein',items:['Drei Tore beim 5:1 gegen Shelbourne','75 Ligatore seiner Karriere','75 Tore für Finn Harps','Note 9,2']},...(ramsey.honours||[])];
    addMatch(ramsey,{date:'2041-03-22',opponent:'Shelbourne',competition:'Premier Division',result:'1:5',minutes:55,goals:3,assists:0,rating:9.2,note:'Hattrick sowie 75. Liga- und Klubtor'});
  }

  const roberts=find('jake-roberts','Jake Roberts');
  if(roberts){
    roberts.profileDate='2041-03-22';
    roberts.careerNarrative=[...(roberts.careerNarrative||[]),'Jake Roberts traf am 22. März 2041 nach seiner Einwechslung beim 5:1 gegen Shelbourne zum 4:0.'];
    addMatch(roberts,{date:'2041-03-22',opponent:'Shelbourne',competition:'Premier Division',result:'1:5',minutes:31,goals:1,assists:0,rating:7.3,note:'Traf als Einwechselspieler'});
  }

  const barry=find('ben-barry','Ben Barry');
  if(barry){
    barry.profileDate='2041-03-22';
    barry.careerNarrative=[...(barry.careerNarrative||[]),'Ben Barry absolvierte gegen Shelbourne sein 25. Spiel als Profi und erzielte in der Nachspielzeit den Treffer zum 5:1.'];
    barry.honours=[{year:'2041',type:'25. Profispiel',items:['25. Profispiel beim 5:1 gegen Shelbourne','Tor in der 90+1. Minute','Note 7,3']},...(barry.honours||[])];
    addMatch(barry,{date:'2041-03-22',opponent:'Shelbourne',competition:'Premier Division',result:'1:5',minutes:35,goals:1,assists:0,rating:7.3,note:'25. Profispiel und Tor'});
  }

  const brennan=find('callum-brennan','Callum Brennan');
  if(brennan){
    brennan.profileDate='2041-03-22';
    brennan.careerNarrative=[...(brennan.careerNarrative||[]),'Callum Brennan bereitete beim 5:1 gegen Shelbourne zwei Treffer vor und erhielt die Note 8,2.'];
    addMatch(brennan,{date:'2041-03-22',opponent:'Shelbourne',competition:'Premier Division',result:'1:5',minutes:90,goals:0,assists:2,rating:8.2,note:'Zwei Vorlagen aus der Rechtsverteidigerposition'});
  }

  const paulo=find('paulo-henrique','Paulo Henrique');
  if(paulo){
    paulo.profileDate='2041-03-22';
    addMatch(paulo,{date:'2041-03-22',opponent:'Shelbourne',competition:'Premier Division',result:'1:5',minutes:90,goalsConceded:1,cleanSheet:false,rating:7.1,note:'Erstes Ligagegentor der Finn-Harps-Saison 2041'});
  }
})();
