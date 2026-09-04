(()=>{
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_TRANSFER_UPDATES=window.FM_TRANSFER_UPDATES||[];
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-07-01';
  const reportId='2042-07-01-raul-offiziell-finn-harps';

  const transfer={
    id:'2042-07-01-raul-finn-harps',date,type:'arrival',player:'Raúl',from:'Valencia',to:'Finn Harps',
    fee:'€0',weeklyWage:'€275.000',squadStatus:'Starspieler',age:27,nation:'Spanien',position:'V (L), FV (L)',
    currentAbility:195,recommendedCurrentAbility:194,strongFoot:'links',heightCm:190,weightKg:85,
    international:{caps:66,worldCup2042:{appearances:4,goals:1,assists:0,averageRating:7.65}},
    careerBeforeHarps:{valencia:{appearances:270,goals:8},valenciaMestalla:{appearances:67,goals:1},total:{appearances:337,goals:9}},
    context:'Der ablösefreie Elite-Linksverteidiger ist am 1. Juli 2042 offiziell Spieler von Finn Harps. Spanien ist zu diesem Zeitpunkt bei der WM 2042 noch im Turnier.',
    note:'Die ursprüngliche Finn-Harps-WM-Nominierung vom 23. Mai bleibt bei 20 Spielern. Raúl war damals noch Valencia-Spieler und erhöht erst mit seinem Vereinsbeitritt während des laufenden Turniers die Zahl der aktuell bei Finn Harps unter Vertrag stehenden WM-Akteure.'
  };
  upsert(window.FM_TRANSFER_UPDATES,transfer);

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-07-01-raul-joins-finn-harps',date,player:'Raúl',type:'transfer',
    title:'Raúl ist offiziell ein Harp',
    detail:'Finn Harps bestätigt die Verpflichtung des 27-jährigen spanischen Elite-Linksverteidigers ablösefrei. Raúl erhält €275.000 pro Woche und den Kaderstatus Starspieler. Seine derzeitige Fähigkeit liegt bei 195.'
  });

  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});
  wc.updated=date;
  wc.finnHarps=wc.finnHarps||{};
  wc.finnHarps.postNominationAdditions=wc.finnHarps.postNominationAdditions||[];
  upsert(wc.finnHarps.postNominationAdditions,{
    id:'2042-07-01-raul-spain-harps-during-world-cup',date,player:'Raúl',nation:'Spanien',
    note:'Raúl wechselt während der laufenden WM offiziell von Valencia zu Finn Harps. Er gehörte daher nicht zu den ursprünglich 20 nominierten Harps-Spielern.'
  });
  wc.finnHarps.currentActivePlayersAfterRaulSigning=15;
  wc.finnHarps.currentActiveNationsAfterRaulSigning=['Irland','Mexiko','Spanien','Schweiz','Brasilien'];
  wc.finnHarps.spainCurrentHarps=['Pol Muñoz','Raúl'];
  wc.finnHarps.contextAfterRaulSigning='Mit Raúls offiziellem Wechsel stehen während der laufenden WM nun 15 noch im Turnier befindliche Spieler bei Finn Harps unter Vertrag. Spanien stellt mit Pol Muñoz und Raúl zwei aktuelle Harps.';

  const season=(window.FM_SEASONS||[]).find(item=>item&&(item.year===2042||item.season===2042));
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Weltklasse ablösefrei: Raúl ist offiziell Spieler von Finn Harps.';
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='01.07.2042: Raúl wechselt ablösefrei von Valencia zu Finn Harps. Der 27-jährige spanische Elite-Linksverteidiger kommt mit CA 195, 66 Länderspielen und einem Wochengehalt von €275.000 als Starspieler nach Donegal.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  const report={
    id:reportId,type:'Transfer',date,competition:'Finn Harps · Transfermarkt',
    headline:'Jetzt offiziell: Raúl ist ein Harp',
    subheadline:'Finn Harps holt den 27-jährigen spanischen Elite-Linksverteidiger ablösefrei von Valencia. Mit CA 195 ist der Neuzugang sofort einer der stärksten Spieler des Kaders.',
    label:'FINN HARPS · TRANSFER · 1. JULI 2042',
    heroStat:{label:'ABLÖSE',value:'€0',note:'€275.000 pro Woche · Starspieler'},
    backlink:{href:'kaderplanung.html',label:'← ZUR KADERPLANUNG'},
    intro:'Der angekündigte Coup ist vollzogen. Raúl hat seinen Vertrag bei Finn Harps unterschrieben und beginnt offiziell seine Karriere in Donegal. Der 27-jährige Spanier kommt nach 270 Einsätzen für Valencia ohne Ablöse und bringt 66 Länderspiele sowie aktuelle Weltklassewerte mit.',
    sections:[
      {title:'Ein Spieler aus der absoluten Spitze',text:'Raúls derzeitige Fähigkeit liegt bei 195, der Co-Trainer bewertet ihn ebenfalls praktisch am Maximum. Der 1,90 Meter große Linksverteidiger vereint Tempo, Athletik und außergewöhnliche defensive Mentalwerte. Mit 19 in Antizipation und Konzentration, 18 bei Entscheidungen und Geschwindigkeit sowie 17 im Stellungsspiel ist er für die linke Seite sofort eine Elitebesetzung.'},
      {title:'Ablösefrei, aber alles andere als billig',text:'Die Ablöse beträgt €0. Dafür erhält Raúl €275.000 pro Woche und den Status Starspieler. Finn Harps investiert damit nicht in eine Transfersumme, sondern direkt in Weltklassequalität für die Mannschaft.'},
      {title:'Valencia-Kapitel endet nach 270 Spielen',text:'Raúl verlässt Valencia nach 270 Einsätzen und acht Toren für die erste Mannschaft. Einschließlich Valencia Mestalla stehen vor seinem Harps-Debüt 337 Vereinsspiele und neun Treffer in seiner Karriere. 2036 gehörte er zur Valencia-Mannschaft, die die UEFA Europa League als Zweiter beendete.'},
      {title:'Mitten in der WM wird aus Zukunft Gegenwart',text:'Besonders kurios ist der Zeitpunkt. Raúl spielt mit Spanien noch bei der WM 2042 und war zu Turnierbeginn noch Valencia-Spieler. Seit dem 1. Juli gehört er offiziell zu Finn Harps. Damit hat Spanien nun mit Pol Muñoz und Raúl gleich zwei aktuelle Harps-Spieler im Turnier.'},
      {title:'Papini soll beim Ankommen helfen',text:'Der Klub empfiehlt Giacomo Papini als Ansprechpartner, um Raúl bei der Eingewöhnung zu unterstützen. Noch sind beide allerdings auf unterschiedlichen WM-Pfaden unterwegs: Papini mit Irland, Raúl mit Spanien.'}
    ],
    verdictHeading:'Ein Transfer, der den Maßstab verschiebt',
    verdict:'Finn Harps verpflichtet keinen Entwicklungsspieler und keinen Marktwert-Coup für später, sondern einen fertigen Weltklassespieler in seinen besten Jahren. CA 195, 66 Länderspiele, ablösefrei: Raúl hebt die linke Seite sofort auf ein neues Niveau.',
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Reaktionen, ergänzt um die im Spiel sichtbare sehr positive Fan-Stimmung.',items:[
      '„Ablösefrei? Bei einem Spieler dieses Kalibers fühlt sich das fast illegal an.“',
      '„195 Fähigkeit und er kommt nach Donegal. Der Klub hat endgültig jede alte Größenordnung gesprengt.“',
      '„Erst die WM mit Spanien, danach direkt zu den Harps. Willkommen im Wahnsinn.“'
    ]},
    sources:['FM Transfer-News · Verpflichtung von Raúl bestätigt · 01.07.2042','FM Spielerprofil Raúl · Finn Harps · 01.07.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-07-01-raul-signing-confirmed',date,type:'transfer',
    title:'Raúl ist offiziell Spieler von Finn Harps',
    text:'Der 27-jährige spanische Elite-Linksverteidiger wechselt ablösefrei von Valencia nach Donegal. Raúl kommt mit CA 195, 66 Länderspielen und einem Wochengehalt von €275.000 als Starspieler.',
    href:`presse.html?id=${reportId}`
  });
})();