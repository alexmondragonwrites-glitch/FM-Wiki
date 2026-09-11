(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-07-12';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const match={
    id:'2042-world-cup-semifinal-mexico-brazil',
    stage:'Halbfinale',date,
    home:'Mexiko',away:'Brasilien',
    score:'0:0 (Mexiko gewinnt i.E.)',homeScore:0,awayScore:0,
    extraTime:true,decidedBy:'Elfmeterschießen',winner:'Mexiko',status:'beendet',
    penalties:{winner:'Mexiko',score:'nicht dokumentiert'},
    harps:{
      mexico:{player:'Emerson Escárcega',played:false,minutes:0,note:'Escárcega kam im WM-Halbfinale gegen Brasilien nicht zum Einsatz, erreicht mit Mexiko aber das Finale.'},
      brazil:{player:'Paulo Henrique',minutes:120,rating:7.6,shotsOnTargetFaced:2,saves:2,savePct:100,cleanSheet:true,role:'Mitspielender Torwart',note:'Paulo Henrique hält über 120 Minuten die Null, pariert beide Schüsse auf sein Tor und wird im Länderspielbericht als einer der entscheidenden Spieler hervorgehoben. Brasilien scheidet dennoch im Elfmeterschießen aus.'}
    },
    note:'Mexiko und Brasilien trennen sich nach 120 Minuten 0:0. Mexiko setzt sich anschließend im Elfmeterschießen durch und steht im WM-Finale. Die genaue Shootout-Torfolge beziehungsweise der Endstand des Elfmeterschießens ist in den vorliegenden Screenshots nicht dokumentiert.'
  };

  wc.status='K.-o.-Phase · Halbfinale';
  wc.updated=date;
  wc.knockoutResults=wc.knockoutResults||[];
  upsert(wc.knockoutResults,match);

  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=[match];

  wc.semiFinalists=['Mexiko','Brasilien','Niederlande','Irland'];
  wc.semiFinals=wc.semiFinals||[];
  {
    const index=wc.semiFinals.findIndex(item=>item&&((item.home==='Mexiko'&&item.away==='Brasilien')||(item.home==='Brasilien'&&item.away==='Mexiko')));
    const update={stage:'Halbfinale',date,home:'Mexiko',away:'Brasilien',status:'beendet',score:'0:0 (Mexiko gewinnt i.E.)',winner:'Mexiko'};
    if(index>=0)wc.semiFinals[index]=Object.assign({},wc.semiFinals[index],update);else wc.semiFinals.push(update);
  }

  wc.finalists=wc.finalists||[];
  if(!wc.finalists.includes('Mexiko'))wc.finalists.push('Mexiko');
  wc.final={stage:'Finale',home:'Mexiko',away:'Sieger Niederlande – Irland',status:'wartet auf zweiten Halbfinalisten'};

  wc.finnHarps=wc.finnHarps||{};
  wc.finnHarps.mexicoFinalist={
    player:'Emerson Escárcega',nation:'Mexiko',status:'im WM-Finale',semiFinalMinutes:0,
    note:'Escárcega spielte im Halbfinale nicht, steht mit Mexiko aber im WM-Finale.'
  };
  wc.finnHarps.brazilEliminated={
    player:'Paulo Henrique',nation:'Brasilien',status:'im Halbfinale ausgeschieden',semiFinalMinutes:120,rating:7.6,cleanSheet:true,
    note:'Paulo scheidet trotz 120 Minuten ohne Gegentor und perfekter Quote bei den Schüssen aufs Tor im Elfmeterschießen aus.'
  };

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-07-12-paulo-henrique-mexico-brazil-world-cup-semifinal',date,player:'Paulo Henrique',type:'nationalteam',
    title:'Paulo hält 120 Minuten die Null und scheidet trotzdem aus',
    detail:'Brasilien spielt im WM-Halbfinale gegen Mexiko über 120 Minuten 0:0. Paulo Henrique hält beide Schüsse auf sein Tor, kommt auf 100 Prozent Paradenquote und die Note 7,6. Im Elfmeterschießen setzt sich jedoch Mexiko durch.'
  });

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-07-12-escarcega-mexico-world-cup-final',date,player:'Emerson Escárcega',type:'nationalteam',
    title:'Escárcega erreicht mit Mexiko das WM-Finale',
    detail:'Mexiko setzt sich nach einem 0:0 über 120 Minuten im Elfmeterschießen gegen Brasilien durch. Emerson Escárcega kommt im Halbfinale nicht zum Einsatz, steht mit Mexiko aber im WM-Finale.'
  });

  const report={
    id:'2042-07-12-mexico-brazil-world-cup-semifinal',type:'WM-Halbfinale',date,competition:'FIFA World Cup 2042',
    headline:'Mexiko ist im WM-Finale: Paulo hält alles, doch Brasilien verliert vom Punkt',
    subheadline:'120 Minuten ohne Tor, ein starker Paulo Henrique und am Ende mexikanische Nerven: Mexiko setzt sich im Elfmeterschießen durch. Escárcega bleibt ohne Einsatz, darf aber vom WM-Titel träumen.',
    label:'FIFA WORLD CUP 2042 · HALBFINALE · 12. JULI',
    heroStat:{label:'ERSTER FINALIST',value:'MEXIKO',note:'0:0 n.V. gegen Brasilien · Sieg im Elfmeterschießen'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Der erste Finalist der WM 2042 steht fest. Mexiko und Brasilien liefern sich über 120 Minuten ein torloses Halbfinale, anschließend setzt sich Mexiko im Elfmeterschießen durch. Für Finn Harps steckt in diesem Ergebnis eine besonders bittere und gleichzeitig historische Doppelgeschichte: Paulo Henrique zeigt eines seiner besten Turnierspiele und scheidet dennoch aus, während Emerson Escárcega ohne Einsatz erstmals in einem WM-Finale steht.',
    sections:[
      {title:'Paulo macht eigentlich alles richtig',text:'Paulo Henrique spielt die kompletten 120 Minuten, bekommt zwei Schüsse auf sein Tor und pariert beide. Mit einer Quote von 100 Prozent, der Note 7,6 und einem weiteren Clean Sheet gehört er laut Länderspielbericht zu den entscheidenden Spielern der Partie. Mehr kann ein Torhüter über die reguläre Spielzeit und Verlängerung kaum leisten.'},
      {title:'Und trotzdem endet Brasiliens WM',text:'Nach 120 torlosen Minuten fällt die Entscheidung im Elfmeterschießen. Mexiko setzt sich durch und beendet Brasiliens Titeltraum. Der genaue Shootout-Endstand ist in den vorliegenden Spielinformationen nicht dokumentiert und wird daher nicht ergänzt.'},
      {title:'Escárcega schaut zu und erreicht trotzdem das Finale',text:'Emerson Escárcega kommt im Halbfinale nicht zum Einsatz. Damit fehlt ausgerechnet einer der prägenden mexikanischen Harps-Spieler in diesem Duell, doch seine Mannschaft erledigt die Aufgabe auch ohne ihn. Nach dem verlorenen Champions-League-Finale mit Finn Harps steht Escárcega nun nur noch ein Spiel vom WM-Titel entfernt.'},
      {title:'Finn Harps hat seinen ersten WM-Finalisten',text:'Mexiko ist damit sicher im Endspiel vertreten und Escárcega der erste aktuelle Finn-Harps-Spieler, dessen Finalteilnahme feststeht. Auf der anderen Seite endet Paulo Henriques Turnier trotz einer starken K.-o.-Phase mit einem bitteren Halbfinal-Aus.'},
      {title:'Jetzt wartet Mexiko auf Irland oder die Niederlande',text:'Der zweite Finalist wird im Duell Niederlande gegen Irland ermittelt. Für Ryan Flannigan und den irischen Harps-Kern bleibt damit die Möglichkeit des außergewöhnlichen Traumfinales gegen Escárcegas Mexiko bestehen.'}
    ],
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Reaktionen',items:[
      '„Paulo hat zwei von zwei gehalten und trotzdem fährt Brasilien nach Hause. Torwartleben kann grausam sein.“',
      '„Escárcega spielt keine Minute im Halbfinale und ist trotzdem nur noch ein Spiel vom WM-Pokal entfernt.“',
      '„Mexiko hat England zerlegt, Japan klar geschlagen und jetzt Brasilien überlebt. Niemand kann diesen Finaleinzug Zufall nennen.“',
      '„Jetzt fehlt nur noch Irland und das Harps-Finale ist wirklich da.“'
    ]},
    sources:['FM World Cup 2042 · Halbfinale Mexiko gegen Brasilien · 0:0 nach 120 Minuten · Mexiko gewinnt im Elfmeterschießen','FM-Länderspielbericht Paulo Henrique · 120 Minuten · Note 7,6 · 2/2 Paraden · ohne Gegentor','FM-Spielstand · Emerson Escárcega ohne Einsatz im Halbfinale']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-07-12-mexico-reaches-world-cup-final',date,type:'world-cup',
    title:'Mexiko steht im WM-Finale · Brasilien scheitert trotz starkem Paulo',
    text:'Nach 120 torlosen Minuten setzt sich Mexiko im Elfmeterschießen gegen Brasilien durch. Paulo Henrique hält beide Schüsse auf sein Tor und erhält die Note 7,6. Emerson Escárcega kommt nicht zum Einsatz, erreicht mit Mexiko aber das Finale.',
    href:`presse.html?id=${report.id}`
  });
})();