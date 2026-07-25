(()=>{
  const byId=id=>(window.FM_PLAYERS||[]).find(item=>item.id===id);

  const maisto=byId('romano-maisto');
  if(maisto){
    maisto.profileDate='2041-02-15';
    maisto.careerNarrative=[...(maisto.careerNarrative||[]),'Am 15. Februar 2041 führte Romano Maisto Finn Harps mit zwei Toren zu einem 4:0 gegen Cork City. Er gab zwölf Abschlüsse ab, traf in der 37. und 89. Minute und wurde mit der Note 9,5 Spieler des Spiels.'];
    maisto.honours=[{year:'2041',type:'Premier-Division-Auftakt',items:['Doppelpack beim 4:0 gegen Cork City','Tore in der 37. und 89. Minute','Zwölf Abschlüsse · Note 9,5 · Spieler des Spiels']},...(maisto.honours||[])];
    maisto.matchUpdates=[...(maisto.matchUpdates||[]),{date:'2041-02-15',opponent:'Cork City',competition:'Premier Division',result:'4:0',minutes:90,goals:2,assists:0,rating:9.5,note:'Spieler des Spiels beim Ligastart'}];
  }

  const frame=byId('daryl-frame');
  if(frame){
    frame.profileDate='2041-02-15';
    frame.careerNarrative=[...(frame.careerNarrative||[]),'Daryl Frame erzielte am 15. Februar 2041 beim 4:0 gegen Cork City in der 12. Minute das erste Ligator der Finn-Harps-Saison 2041.'];
    frame.honours=[{year:'2041',type:'Saisonmeilenstein',items:['Erstes Finn-Harps-Ligator der Saison 2041','1:0 gegen Cork City in der 12. Minute','90 Minuten · Note 7,9']},...(frame.honours||[])];
    frame.matchUpdates=[...(frame.matchUpdates||[]),{date:'2041-02-15',opponent:'Cork City',competition:'Premier Division',result:'4:0',minutes:90,goals:1,assists:0,rating:7.9,note:'Eröffnete die Ligasaison mit dem Führungstor'}];
  }

  const paulo=byId('paulo-henrique');
  if(paulo){
    paulo.profileDate='2041-02-15';
    paulo.careerNarrative=[...(paulo.careerNarrative||[]),'Paulo Henrique blieb beim 4:0 gegen Cork City ohne Gegentor und verlängerte seine Serie am 15. Februar 2041 auf 270 Minuten ohne Gegentreffer.'];
    paulo.honours=[{year:'2041',type:'Defensivserie',items:['270 Minuten ohne Gegentor nach dem 4:0 gegen Cork City','Kein gegnerischer Schuss aufs Tor beim Premier-Division-Auftakt']},...(paulo.honours||[])];
    paulo.matchUpdates=[...(paulo.matchUpdates||[]),{date:'2041-02-15',opponent:'Cork City',competition:'Premier Division',result:'4:0',minutes:90,cleanSheet:true,rating:7.4,note:'270 Minuten in Folge ohne Gegentor'}];
  }

  const roberts=byId('jake-roberts');
  if(roberts){
    roberts.profileDate='2041-02-15';
    roberts.info='Finn-Harps-Spieler · Ligadebüt am 15.02.2041';
    roberts.careerNarrative=[...(roberts.careerNarrative||[]),'Am 15. Februar 2041 gab Jake Roberts beim 4:0 gegen Cork City sein Ligadebüt für Finn Harps. Er wurde in der 59. Minute eingewechselt, spielte 31 Minuten und erhielt die Note 7,0.'];
    roberts.honours=[{year:'2041',type:'Ligadebüt für Finn Harps',items:['Premier-Division-Debüt gegen Cork City am 15.02.2041','31 Minuten beim 4:0-Heimsieg','Note 7,0']},...(roberts.honours||[])];
    roberts.matchUpdates=[...(roberts.matchUpdates||[]),{date:'2041-02-15',opponent:'Cork City',competition:'Premier Division',result:'4:0',minutes:31,goals:0,assists:0,rating:7.0,note:'Ligadebüt für Finn Harps'}];
  }
})();
