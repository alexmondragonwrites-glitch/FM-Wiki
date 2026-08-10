(()=>{
  window.FM_PLAYERS=window.FM_PLAYERS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]={...list[index],...item};else list.push(item);
  };

  const playerId='giacomo-papini';
  let player=(window.FM_PLAYERS||[]).find(p=>p.id===playerId||p.name==='Giacomo Papini');
  if(!player){
    player={id:playerId,name:'Giacomo Papini'};
    window.FM_PLAYERS.push(player);
  }

  Object.assign(player,{
    profileDate:'2041-07-14',
    name:'Giacomo Papini',
    currentClub:'Finn Harps',
    nationCode:'IRL',
    nation:'Irland',
    nationality:'Irland',
    sportingNationality:'Irland',
    nationalTeam:'Irland',
    internationalStatus:'Nationalmannschaftswechsel zu Irland bestätigt · 14.07.2041 · Debüt noch offen',
    status:'Finn Harps · für Irland entschieden',
    height:'195 cm',
    weight:'87 kg',
    age:28,
    birthPlace:'Eschen, Liechtenstein',
    positionCode:'M/OM (R), M (Z)',
    mediaDescription:'Flügelspieler',
    personality:'Perfektionist',
    squadStatus:'Rotationsspieler',
    squadNumber:7,
    currentAbility:168,
    contractUntil:'31.12.2045',
    wage:'€140.000 pro Woche',
    nationalTeamSwitch:{
      date:'2041-07-14',
      from:'Italien',
      to:'Irland',
      status:'bestätigt',
      debut:'noch offen',
      reason:'Papini entschied sich nach reiflicher Überlegung für Irland, weil er sich dort das Potenzial als Schlüsselspieler der Nationalmannschaft ausrechnet.',
      note:'Der Wechsel betrifft Papinis sportliche Nationalmannschaftszugehörigkeit. Sein Geburtsort Eschen in Liechtenstein bleibt unverändert.'
    }
  });

  player.careerNarrative=player.careerNarrative||[];
  const narrative='Am 14. Juli 2041 bestätigte Giacomo Papini den Wechsel seiner Nationalmannschaftszugehörigkeit von Italien zu Irland. Der 28-jährige Finn-Harps-Flügelspieler will seine internationale Karriere künftig im irischen Trikot fortsetzen; ein Debüt ist zu diesem Zeitpunkt noch nicht erfolgt.';
  if(!player.careerNarrative.includes(narrative))player.careerNarrative.push(narrative);

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2041-07-14-giacomo-papini-ireland-switch',
    date:'2041-07-14',
    player:'Giacomo Papini',
    type:'national-team-switch',
    title:'Papini entscheidet sich für Irland',
    detail:'Der 28-jährige, 1,95 Meter große Finn-Harps-Flügelspieler Giacomo Papini bestätigt seinen Nationalmannschaftswechsel von Italien zu Irland. Er sieht die Chance, für Irland zu einem Schlüsselspieler zu werden; sein irisches Debüt steht noch aus.'
  });

  upsert(window.FM_NEWS,{
    id:'2041-07-14-papini-irland-wechsel',
    date:'2041-07-14',
    season:2041,
    category:'Nationalteam',
    accent:'green',
    featured:true,
    eyebrow:'IRLAND · NATIONALTEAM',
    title:'Papini entscheidet sich für Irland',
    summary:'Giacomo Papini wechselt mit 28 Jahren seine sportliche Nationalmannschaftszugehörigkeit von Italien zu Irland. Der 1,95-Meter-Flügelspieler der Finn Harps hofft, für Irland eine Schlüsselrolle einzunehmen. Sein Debüt steht noch aus.',
    href:'spieler.html?id=giacomo-papini',
    entities:['giacomo-papini','finn-harps','ireland']
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-07-14';
    season.latestHeadline='Giacomo Papini entscheidet sich international für Irland.';
    season.changes=season.changes||{notes:[]};
    const note='14.07.2041: Giacomo Papini bestätigt den Nationalmannschaftswechsel von Italien zu Irland. Ein Debüt für Irland steht noch aus.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }
})();