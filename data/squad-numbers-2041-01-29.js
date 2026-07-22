(()=>{
  const seasonNumber=2041;
  const numbers={
    'paulo-henrique':1,
    'diego-fernandez':2,
    'billy-kendrick':3,
    'darcy-andrews':4,
    'amir-masic':6,
    'vinicius':8,
    'eduardo-blanco':9,
    'justin-ramsey':12,
    'giacomo-papini':14,
    'cormac-okane':16,
    'jim-oneill':17,
    'basile-rouviere':18,
    'torric-bruce':19,
    'callum-brennan':20,
    'kevin-kelly':21,
    'radim-mal':22,
    'gustavo-da-silva':23,
    'romano-maisto':32,
    'daryl-frame':33,
    'ben-barry':35,
    'jake-roberts':37,
    'evan-reilly':38,
    'billy-walker':42,
    'mareks-istrankins':46,
    'mark-kenny':48
  };

  (window.FM_PLAYERS||[]).forEach(player=>{
    if(numbers[player.id]===undefined)return;
    player.shirtNumber=numbers[player.id];
    player.shirtNumberSeason=seasonNumber;
  });

  const season=(window.FM_SEASONS||[]).find(item=>item.year===seasonNumber);
  if(season){
    (season.snapshotRows||[]).forEach(player=>{
      if(numbers[player.id]===undefined)return;
      player.shirtNumber=numbers[player.id];
    });
    season.squadNumbers={...numbers};
    season.squadNumberSource={
      label:'Rückennummern 2041 aus den Spieltagskadern gegen Young Boys und Paris Saint-Germain',
      date:'2041-01-29',
      known:25,
      total:(season.snapshotRows||[]).length||30
    };
    season.changes=season.changes||{};
    season.changes.notes=[
      ...(season.changes.notes||[]).filter(note=>!String(note).includes('Rückennummern 2041')),
      'Rückennummern 2041: 25 Nummern aus den Spieltagskadern gegen Young Boys und Paris Saint-Germain bestätigt; fünf Kaderspieler bleiben bis zu einem weiteren Export offen.'
    ];
  }
})();
