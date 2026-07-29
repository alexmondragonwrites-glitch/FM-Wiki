(()=>{
  const find=(id,name)=>(window.FM_PLAYERS||[]).find(item=>item.id===id||item.name===name);
  const addMatch=(player,update)=>{if(player)player.matchUpdates=[...(player.matchUpdates||[]),update];};

  const ramsey=find('justin-ramsey','Justin Ramsey');
  if(ramsey){
    ramsey.profileDate='2041-04-01';
    ramsey.careerNarrative=[...(ramsey.careerNarrative||[]),'Justin Ramsey bereitete beim 3:1 Irlands gegen Kroatien beide Tore von Harry O’Leary aus der Mezzala-Rolle vor und erhielt die Note 8,0.'];
    ramsey.honours=[{year:'2041',type:'Zwei Vorlagen gegen Kroatien',items:['Zwei Assists beim 3:1 in der WM-Qualifikation','Beide Vorlagen für Harry O’Leary','Note 8,0 als Mezzala']},...(ramsey.honours||[])];
    addMatch(ramsey,{date:'2041-04-01',opponent:'Kroatien',competition:'FIFA-WM-Qualifikation Europa',result:'3:1',minutes:90,goals:0,assists:2,rating:8.0,note:'Zwei Vorlagen aus der Mezzala-Rolle'});
  }

  const brennan=find('callum-brennan','Callum Brennan');
  if(brennan){
    brennan.profileDate='2041-04-01';
    addMatch(brennan,{date:'2041-04-01',opponent:'Kroatien',competition:'FIFA-WM-Qualifikation Europa',result:'3:1',minutes:90,goals:0,assists:0,rating:6.8,note:'Rechtsverteidiger beim zweiten Qualifikationssieg'});
  }

  const istrankins=find('mareks-istrankins','Mareks Istrankins');
  if(istrankins){
    istrankins.profileDate='2041-04-01';
    addMatch(istrankins,{date:'2041-04-01',opponent:'Kroatien',competition:'FIFA-WM-Qualifikation Europa',result:'3:1',minutes:37,goals:0,assists:0,rating:6.8,note:'Half nach seiner Einwechslung, den Heimsieg abzusichern'});
  }
})();