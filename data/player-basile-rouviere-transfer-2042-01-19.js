(()=>{
  window.FM_PLAYERS=window.FM_PLAYERS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const playerId='basile-rouviere';
  let player=window.FM_PLAYERS.find(item=>item.id===playerId||item.name==='Basile Rouviere');
  if(!player){
    player={id:playerId,name:'Basile Rouviere'};
    window.FM_PLAYERS.push(player);
  }

  Object.assign(player,{
    name:'Basile Rouviere',
    age:30,
    positionCode:'Mittelfeldspieler',
    group:'Abgänge',
    availability:'Transfer zu Derby County',
    transfer2042:{
      club:'Derby County',
      date:'2042-01-19',
      fee:'€20 Mio.',
      trainingCompensation:{club:'Benfica',share:'5 % der Transfersumme'},
      transferBudgetAdded:'€12,5 Mio.'
    }
  });

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-01-19-basile-rouviere-derby-transfer',
    date:'2042-01-19',
    player:'Basile Rouviere',
    type:'transfer',
    title:'Rouviere wechselt zu Derby County',
    detail:'Der 30-jährige Mittelfeldspieler Basile Rouviere verlässt Finn Harps für 20 Mio. Euro und wechselt zu Derby County. Benfica erhält 5 Prozent der Transfersumme als Ausbildungsentschädigung. Der Vorstand stellt 12,5 Mio. Euro des Erlöses zusätzlich für das Transferbudget bereit.'
  });

  upsert(window.FM_NEWS,{
    id:'2042-01-19-basile-rouviere-derby-transfer',
    date:'2042-01-19',
    season:2042,
    category:'Transfers',
    accent:'green',
    featured:true,
    eyebrow:'TRANSFER · ABGANG',
    title:'Rouviere verlässt Finn Harps für 20 Millionen Euro',
    summary:'Basile Rouviere wechselt zu Derby County. Für den 30-jährigen Mittelfeldspieler fließen 20 Mio. Euro Ablöse; 12,5 Mio. Euro davon wandern laut Vorstand zusätzlich ins Transferbudget.',
    href:'spieler.html?id=basile-rouviere',
    entities:['finn-harps','basile-rouviere','derby-county','season-2042']
  });
})();