(()=>{
  const c=(window.FM_CLUBS||[]).find(x=>x.id==='finn-harps');
  if(!c)return;
  c.profileDate='2040-12-10';
  c.infrastructure={
    ...(c.infrastructure||{}),
    trainingFacilities:{
      current:'Hochmodern · 10/10',
      projectStatus:'Vom Vorstand akzeptiert',
      project:'Verbesserung der Trainingseinrichtungen',
      cost:2900000,
      costLabel:'€2,9 Mio.',
      constructionStart:'2041-02-07',
      expectedCompletion:'März 2041',
      timing:'Winterpause 2040/41',
      reason:'Der Ausbau soll die Qualität und Entwicklung der Spieler des Klubs insgesamt verbessern.'
    }
  };
  c.developmentProjects=[
    ...((c.developmentProjects||[]).filter(x=>x.id!=='2041-training-facilities-upgrade')),
    {
      id:'2041-training-facilities-upgrade',
      type:'Infrastruktur',
      status:'Geplant',
      title:'Trainingseinrichtungen werden verbessert',
      approved:'2040-12-10',
      start:'2041-02-07',
      completion:'März 2041',
      cost:'€2,9 Mio.',
      note:'Die Bauphase liegt bewusst in der Winterpause. Der Vorstand begründet die Zustimmung mit der langfristigen Verbesserung der Spielerqualität.'
    }
  ];
  c.tags=[...new Set([...(c.tags||[]),'Trainingsausbau 2041','Winterprojekt'])];
})();