(()=>{
  window.FM_PLAYERS=window.FM_PLAYERS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const playerId='german-ferreira';
  let player=window.FM_PLAYERS.find(item=>item.id===playerId||item.name==='Germán Ferreira');
  if(!player){
    player={id:playerId,name:'Germán Ferreira',group:'Leihspieler',availability:'Ausgeliehen'};
    window.FM_PLAYERS.push(player);
  }

  Object.assign(player,{
    name:'Germán Ferreira',
    age:19,
    positionCode:'Flügelspieler',
    group:'Leihspieler',
    availability:'Ausgeliehen an Heidenheim',
    loan2042:{
      club:'1. FC Heidenheim',
      start:'2042-01-19',
      end:'Saisonende 2042',
      squadRole:'Stammspieler',
      canPlayInCups:true,
      recallable:true,
      monthlyFeeIfPlayed:'€92.880',
      monthlyFeeIfNotPlayed:'€242.000',
      wageContribution:'100 %',
      wages:'€12.500/Woche',
      rejectedOffers:['En Avant de Guingamp','Rio Ave','Wigan Athletic']
    }
  });

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-01-19-german-ferreira-heidenheim-loan',
    date:'2042-01-19',
    player:'Germán Ferreira',
    type:'loan',
    title:'Ferreira geht auf Leihbasis zu Heidenheim',
    detail:'Der 19-jährige Flügelspieler wechselt bis zum Ende der Saison 2042 auf Leihbasis zum 1. FC Heidenheim. Heidenheim übernimmt 100 Prozent seines Gehalts von 12.500 Euro pro Woche. Die vereinbarte Einsatzrolle lautet Stammspieler; Finn Harps kann ihn zurückbeordern.'
  });

  upsert(window.FM_NEWS,{
    id:'2042-01-19-german-ferreira-heidenheim-loan',
    date:'2042-01-19',
    season:2042,
    category:'Transfers',
    accent:'blue',
    featured:false,
    eyebrow:'LEIHE · KADERENTWICKLUNG',
    title:'Ferreira sammelt Spielpraxis in Heidenheim',
    summary:'Finn Harps verleiht den 19-jährigen Flügelspieler Germán Ferreira bis zum Saisonende nach Heidenheim. Der Bundesligist übernimmt sein komplettes Gehalt und plant ihn als Stammspieler ein.',
    href:'spieler.html?id=german-ferreira',
    entities:['finn-harps','german-ferreira','heidenheim','season-2042']
  });
})();