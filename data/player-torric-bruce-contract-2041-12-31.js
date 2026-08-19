(()=>{
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const p=(window.FM_PLAYERS||[]).find(item=>item.id==='torric-bruce');
  if(p){
    Object.assign(p,{
      profileDate:'2041-12-31',
      age:22,
      status:'Starspieler',
      contractUntil:'31.12.2046',
      wage:'€49.000 pro Woche',
      summary:'Torric Bruce bleibt langfristig bei Finn Harps. Der 22-jährige Elite-Innenverteidiger hat einen neuen Fünfjahresvertrag bis Ende 2046 unterschrieben und wird als Starspieler eingeplant.',
      contractDetails:{
        signed:'30.12.2041',
        start:'30.12.2041',
        until:'31.12.2046',
        duration:'Fünf Jahre',
        totalValue:'€14,0 Mio.',
        wage:'€49.000 pro Woche',
        playingTime:'Starspieler',
        reason:'Die Chance auf mehr Spielpraxis war ein erheblicher Faktor bei seiner Entscheidung.',
        clauses:[
          {label:'Ausstiegsklausel für ausländische Vereine',value:'€583 Mio.'}
        ],
        bonuses:[
          {label:'Loyalitätsbonus',value:'€2,1 Mio.'},
          {label:'Auflaufprämie',value:'€925'},
          {label:'Ohne-Gegentor-Prämie',value:'€8.750'},
          {label:'Ersatzspieler-Prämie',value:'€230'},
          {label:'Beratergebühr',value:'€165.000'}
        ]
      }
    });

    p.careerNarrative=[
      ...(p.careerNarrative||[]),
      'Zum Jahresende 2041 verlängerte Torric Bruce langfristig bei Finn Harps. Der neue Vertrag läuft vom 30. Dezember 2041 bis zum 31. Dezember 2046 und besitzt ein Gesamtvolumen von 14 Millionen Euro.',
      'Bruce wird künftig als Starspieler eingeplant. Die Ausstiegsklausel für ausländische Vereine liegt bei 583 Millionen Euro und unterstreicht, dass Finn Harps einen Verkauf nur zu praktisch außergewöhnlichen Bedingungen zulassen will.'
    ];

    p.honours=[
      {year:'2041',type:'Langfristige Bindung',items:['Neuer Fünfjahresvertrag bis 31.12.2046','Gesamtvolumen €14,0 Mio. · Gehalt €49.000 pro Woche','Vereinbarte Einsatzzeit: Starspieler','Ausstiegsklausel für ausländische Vereine: €583 Mio.']},
      ...(p.honours||[])
    ];
  }

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2041-12-31-torric-bruce-contract',date:'2041-12-31',player:'Torric Bruce',type:'contract',
    title:'Fünf Jahre für Bruce',
    detail:'Der 22-jährige Elite-Innenverteidiger bindet sich bis zum 31.12.2046 an Finn Harps. Der Vertrag besitzt ein Gesamtvolumen von €14 Mio.; Bruce wird als Starspieler eingeplant.'
  });

  const report={
    id:'2041-12-31-torric-bruce-vertragsverlaengerung',type:'Vertrag',date:'2041-12-31',competition:'Finn Harps',
    headline:'Bruce bleibt: Finn Harps bindet seinen Elite-Innenverteidiger bis 2046',
    subheadline:'Der 22-Jährige unterschreibt einen neuen Fünfjahresvertrag über insgesamt 14 Millionen Euro. Seine vereinbarte Einsatzzeit steigt auf Starspieler.',
    label:'VERTRAG · TORRIC BRUCE · 31.12.2041',
    heroStat:{label:'Vertragslaufzeit',value:'bis 31.12.2046',note:'€49.000 pro Woche · Gesamtvolumen €14 Mio.'},
    backlink:{href:'spieler.html?id=torric-bruce',label:'← ZUM SPIELERPROFIL'},
    intro:'Finn Harps schließt das Jahr mit einer strategisch wichtigen Personalentscheidung ab. Torric Bruce, mit 22 Jahren bereits als Elite-Innenverteidiger geführt, verlängert langfristig und bleibt für weitere fünf Jahre an den Klub gebunden.',
    sections:[
      {title:'Vom Schlüsselspieler zum Starspieler',text:'Bruce erhält im neuen Vertrag die vereinbarte Einsatzzeit Starspieler. Laut Vertragsmeldung war die Aussicht auf mehr Spielpraxis ein erheblicher Faktor bei seiner Entscheidung.'},
      {title:'Langfristige Planungssicherheit',text:'Der neue Vertrag läuft vom 30. Dezember 2041 bis zum 31. Dezember 2046. Das Gesamtvolumen beträgt 14 Millionen Euro, das Wochengehalt 49.000 Euro.'},
      {title:'Eine Klausel mit Abschreckungswirkung',text:'Für ausländische Vereine ist eine Ausstiegsklausel über 583 Millionen Euro vereinbart. Praktisch bedeutet das: Finn Harps behält bei einem möglichen Transfer die volle Kontrolle.'},
      {title:'Auch die Fans begrüßen die Bindung',text:'In der Vereinsmeldung wird Bruce als einer der besten Spieler des Klubs hervorgehoben. Entsprechend positiv fällt die Reaktion des Fanlagers auf die langfristige Verlängerung aus.'}
    ],
    verdictHeading:'Ein Fundament bleibt stehen',
    verdict:'Bei einem 22-jährigen Innenverteidiger dieses Status ist die Laufzeit fast wichtiger als jede kurzfristige Kaderfrage. Finn Harps sichert sich einen Abwehrbaustein bis 2046 und nimmt möglichen Transfergerüchten früh den Sauerstoff.',
    sources:['FM-Posteingang · Bruce bindet sich an Finn Harps · 31.12.2041','FM-Vertragsdetails Torric Bruce · 30.12.2041 bis 31.12.2046']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-12-31-torric-bruce-contract',date:'2041-12-31',season:2041,category:'Vertrag',accent:'green',featured:true,
    eyebrow:'VERTRAG · TORRIC BRUCE',title:'Bruce bindet sich bis 2046 an Finn Harps',
    summary:'Der 22-jährige Elite-Innenverteidiger unterschreibt einen neuen Fünfjahresvertrag über insgesamt 14 Millionen Euro. Künftig wird er als Starspieler eingeplant.',
    href:'presse.html?id=2041-12-31-torric-bruce-vertragsverlaengerung',entities:['finn-harps','torric-bruce','season-2041','vertrag']
  });
})();