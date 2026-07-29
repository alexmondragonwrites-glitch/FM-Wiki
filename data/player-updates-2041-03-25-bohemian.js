(()=>{
  const find=(id,name)=>(window.FM_PLAYERS||[]).find(item=>item.id===id||item.name===name);
  const addMatch=(player,update)=>{if(player)player.matchUpdates=[...(player.matchUpdates||[]),update];};

  const ramsey=find('justin-ramsey','Justin Ramsey');
  if(ramsey){
    ramsey.profileDate='2041-03-25';
    ramsey.careerNarrative=[...(ramsey.careerNarrative||[]),'Justin Ramsey erzielte beim 4:0 bei Bohemian am 25. März 2041 zwei Tore und erhöhte sein Ligakonto auf acht Treffer nach sieben Spielen.'];
    addMatch(ramsey,{date:'2041-03-25',opponent:'Bohemian',competition:'Premier Division',result:'0:4',minutes:90,goals:2,assists:0,rating:8.3,note:'Doppelpack beim siebten Ligasieg'});
  }

  const blanco=find('eduardo-blanco','Eduardo Blanco');
  if(blanco){
    blanco.profileDate='2041-03-25';
    blanco.careerNarrative=[...(blanco.careerNarrative||[]),'Eduardo Blanco wurde beim 4:0 gegen Bohemian mit der Note 8,4 zum Spieler des Spiels. Er bereitete einen Treffer vor und absolvierte sechs erfolgreiche Dribblings.'];
    blanco.honours=[{year:'2041',type:'Spieler des Spiels gegen Bohemian',items:['Note 8,4','Eine Vorlage','Sechs erfolgreiche Dribblings']},...(blanco.honours||[])];
    addMatch(blanco,{date:'2041-03-25',opponent:'Bohemian',competition:'Premier Division',result:'0:4',minutes:90,goals:0,assists:1,rating:8.4,note:'Spieler des Spiels'});
  }

  const rouviere=find('basile-rouviere','Basile Rouvière')||find('basile-rouviere','Basile Rouviere');
  if(rouviere){
    rouviere.profileDate='2041-03-25';
    rouviere.careerNarrative=[...(rouviere.careerNarrative||[]),'Basile Rouvière erzielte beim 4:0 bei Bohemian in der 30. Minute den Treffer zum 3:0 und erhielt die Note 7,8.'];
    addMatch(rouviere,{date:'2041-03-25',opponent:'Bohemian',competition:'Premier Division',result:'0:4',minutes:90,goals:1,assists:0,rating:7.8,note:'Tor zum 3:0'});
  }

  const fernandez=find('diego-fernandez','Diego Fernández');
  if(fernandez){
    fernandez.profileDate='2041-03-25';
    fernandez.careerNarrative=[...(fernandez.careerNarrative||[]),'Diego Fernández absolvierte beim 4:0 gegen Bohemian sein 100. Ligaspiel der Karriere und erzielte in der 71. Minute den Schlusspunkt.'];
    fernandez.honours=[{year:'2041',type:'100. Ligaspiel',items:['100. Ligaspiel der Karriere','Tor zum 4:0 gegen Bohemian','Note 7,7']},...(fernandez.honours||[])];
    addMatch(fernandez,{date:'2041-03-25',opponent:'Bohemian',competition:'Premier Division',result:'0:4',minutes:90,goals:1,assists:0,rating:7.7,note:'100. Ligaspiel und Tor'});
  }

  const reilly=find('evan-reilly','Evan Reilly');
  if(reilly){
    reilly.profileDate='2041-03-25';
    reilly.careerNarrative=[...(reilly.careerNarrative||[]),'Evan Reilly blieb beim 4:0 gegen Bohemian in seinem fünften Finn-Harps-Spiel in Folge ohne Gegentor und erreichte 450 saubere Minuten.'];
    reilly.honours=[{year:'2041',type:'450 Minuten ohne Gegentor',items:['Fünf Harps-Spiele in Folge ohne Gegentor','Nur ein gegnerischer Schuss aufs Tor gegen Bohemian','Note 7,4']},...(reilly.honours||[])];
    addMatch(reilly,{date:'2041-03-25',opponent:'Bohemian',competition:'Premier Division',result:'0:4',minutes:90,goalsConceded:0,cleanSheet:true,rating:7.4,note:'450 Minuten ohne Gegentor für Finn Harps'});
  }

  const okane=find('cormac-okane',"Cormac O'Kane");
  if(okane){
    okane.profileDate='2041-03-25';
    addMatch(okane,{date:'2041-03-25',opponent:'Bohemian',competition:'Premier Division',result:'0:4',minutes:22,goals:0,assists:1,rating:7.3,note:'Vorlage drei Minuten nach seiner Einwechslung'});
  }

  const oneill=find('jim-oneill','Jim O’Neill')||find('jim-oneill',"Jim O'Neill");
  if(oneill){
    oneill.profileDate='2041-03-25';
    oneill.careerNarrative=[...(oneill.careerNarrative||[]),'Jim O’Neill absolvierte beim 4:0 gegen Bohemian sein 225. Ligaspiel der Karriere.'];
    oneill.honours=[{year:'2041',type:'225. Ligaspiel',items:['225. Ligaspiel der Karriere','39 Minuten beim 4:0 gegen Bohemian']},...(oneill.honours||[])];
    addMatch(oneill,{date:'2041-03-25',opponent:'Bohemian',competition:'Premier Division',result:'0:4',minutes:39,goals:0,assists:0,rating:6.7,note:'225. Ligaspiel der Karriere'});
  }

  const maly=find('radim-maly','Radim Malý');
  if(maly){
    maly.profileDate='2041-03-25';
    maly.careerNarrative=[...(maly.careerNarrative||[]),'Radim Malý absolvierte beim 4:0 gegen Bohemian seinen 50. Einsatz für Finn Harps.'];
    maly.honours=[{year:'2041',type:'50. Einsatz für Finn Harps',items:['39 Minuten gegen Bohemian','Note 7,1','Zu-null-Sieg']},...(maly.honours||[])];
    addMatch(maly,{date:'2041-03-25',opponent:'Bohemian',competition:'Premier Division',result:'0:4',minutes:39,goals:0,assists:0,rating:7.1,note:'50. Einsatz für Finn Harps'});
  }
})();