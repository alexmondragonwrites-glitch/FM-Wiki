(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_IRELAND_MATCHES=window.FM_IRELAND_MATCHES||[];
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_IRELAND=window.FM_IRELAND||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-06-29';
  const matchId='2042-06-29-ireland-italy-world-cup';
  const reportId='2042-06-29-ireland-italy-3-1-achtelfinale';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const match={
    id:matchId,date,season:2042,competition:'FIFA World Cup 2042',stage:'2. Runde',
    home:'Irland',away:'Italien',homeScore:3,awayScore:1,score:'3:1',halfTime:'2:1',
    venue:'Stadion an der Anfield Road',location:'Liverpool, England',attendance:61276,referee:'Joseph Jimenez',weather:'26°C',
    context:'Irland kassiert nach nur einer Minute das 0:1, antwortet aber praktisch sofort. Harry O’Leary gleicht in Minute 4 aus, Justin Ramsey dreht die Partie in Minute 23 und O’Leary entscheidet sie mit seinem zweiten Treffer in Minute 74. Irland steht im Achtelfinale.',
    events:[
      {minute:1,team:'Italien',type:'goal',player:'Alberto Fabbri',text:'0:1'},
      {minute:4,team:'Irland',type:'goal',player:"Harry O'Leary",text:'1:1'},
      {minute:23,team:'Irland',type:'goal',player:'Justin Ramsey',text:'2:1'},
      {minute:74,team:'Irland',type:'goal',player:"Harry O'Leary",text:'3:1'}
    ],
    scorers:[
      {team:'Irland',player:"Harry O'Leary",minutes:[4,74],goals:2},
      {team:'Irland',player:'Justin Ramsey',minutes:[23],goals:1},
      {team:'Italien',player:'Alberto Fabbri',minutes:[1],goals:1}
    ],
    stats:{
      shots:[8,5],shotsOnTarget:[4,4],xg:[1.46,0.70],bigChances:[2,1],possession:[56,44],corners:[6,5],fouls:[20,12],
      completedPasses:['422/489','328/384'],passCompletion:[86,85],duelsWon:['17/22','21/28'],duelWinPct:[77,75],
      headersWon:['32/65','30/64'],headerWinPct:[49,47],yellowCards:[3,0],redCards:[0,0],intensiveSprints:[109,118]
    },
    ratings:{
      'Evan Reilly':6.6,'Callum Brennan':6.4,'Darcy Andrews':6.8,'Callum Duggan':6.7,'Kevin Kelly':7.1,
      "Jim O'Neill":6.5,'Justin Ramsey':6.7,"Cormac O'Kane":6.6,'Giacomo Papini':7.4,'Brendan McHugh':7.0,
      "Harry O'Leary":8.0,'Billy Walker':6.8,'Ben Barry':7.0,'Robert Boylan':6.8,'Shane Fox':6.9
    },
    irelandStandouts:[
      {player:"Harry O'Leary",rating:8.0,goals:2,note:'Gleicht den Schockstart in Minute 4 aus und entscheidet die Partie in Minute 74. Gleichzeitig sein 100. Länderspiel für Irland.'},
      {player:'Giacomo Papini',rating:7.4,note:'Starke Vorstellung im irischen Trikot gegen Italien. Für den Italiener in Irlands Mannschaft ein besonderes K.-o.-Spiel.'},
      {player:'Justin Ramsey',rating:6.7,goals:1,note:'Dreht das Spiel in Minute 23 mit dem Treffer zum 2:1.'},
      {player:'Ben Barry',rating:7.0,note:'Bleibt Teil des starken irischen Turnierlaufs; in der Turnierübersicht bereits mit zwei Spieler-des-Spiels-Auszeichnungen geführt.'}
    ],
    analysis:{
      shockStart:'Italien trifft nach nur einer Minute durch Alberto Fabbri. Irland benötigt aber nur drei Minuten für die Antwort und verhindert, dass der frühe Rückstand die Partie prägt.',
      control:'Irland hat 56 Prozent Ballbesitz, 8:5 Abschlüsse und 1,46:0,70 xG. Italien bringt zwar vier seiner fünf Abschlüsse aufs Tor, kommt aber nur auf eine Großchance.',
      oleary:'Harry O’Leary liefert in seinem 100. Länderspiel einen Doppelpack. Das 1:1 in Minute 4 nimmt dem italienischen Blitzstart sofort die Wirkung, das 3:1 in Minute 74 beendet die Partie.',
      papini:'Giacomo Papini spielt für Irland gegen Italien und erhält mit 7,4 eine der besten irischen Noten. Gerade wegen seiner italienischen Herkunft ist dieses K.-o.-Spiel innerhalb der Save-Geschichte ein besonderer Moment.',
      nextStep:'Im Achtelfinale wartet Österreich, das unmittelbar zuvor Titelverteidiger Frankreich mit 3:2 ausgeschaltet hat.'
    },
    sources:['FM-Spielübersicht Irland – Italien · 29.06.2042','Irland-Spielerstatistiken · Irland 3:1 Italien','90min-Spielbericht · World Cup 2042 · Irland 3:1 Italien','FM World Cup 2042 · Achtelfinalübersicht · 29.06.2042']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_IRELAND_MATCHES,match);

  wc.status='Achtelfinale';
  wc.updated=date;
  wc.knockoutResults=wc.knockoutResults||[];
  upsert(wc.knockoutResults,{id:'2042-world-cup-round2-ireland-italy',stage:'2. Runde',date,home:'Irland',away:'Italien',score:'3:1',homeScore:3,awayScore:1,winner:'Irland',status:'beendet',note:'Irland dreht einen Rückstand aus der 1. Minute und gewinnt 3:1.'});
  wc.resultsByDate=wc.resultsByDate||{};
  const june29=wc.resultsByDate[date]||[];
  upsert(june29,{id:'2042-world-cup-round2-ireland-italy',stage:'2. Runde',date,home:'Irland',away:'Italien',score:'3:1',homeScore:3,awayScore:1,winner:'Irland',status:'beendet'});
  wc.resultsByDate[date]=june29;

  wc.knockoutPairings=wc.knockoutPairings||[];
  upsert(wc.knockoutPairings,{id:'2042-world-cup-round2-ireland-italy',stage:'2. Runde',date,home:'Irland',away:'Italien',score:'3:1',winner:'Irland',status:'beendet'});

  const roundOf16=[
    {id:'2042-world-cup-r16-england-mexico',stage:'Achtelfinale',home:'England',away:'Mexiko',status:'angesetzt'},
    {id:'2042-world-cup-r16-netherlands-ivory-coast',stage:'Achtelfinale',home:'Niederlande',away:'Elfenbeinküste',status:'angesetzt'},
    {id:'2042-world-cup-r16-serbia-south-korea',stage:'Achtelfinale',home:'Serbien',away:'Südkorea',status:'angesetzt'},
    {id:'2042-world-cup-r16-belgium-japan',stage:'Achtelfinale',home:'Belgien',away:'Japan',status:'angesetzt'},
    {id:'2042-world-cup-r16-switzerland-spain',stage:'Achtelfinale',home:'Schweiz',away:'Spanien',status:'angesetzt'},
    {id:'2042-world-cup-r16-brazil-denmark',stage:'Achtelfinale',home:'Brasilien',away:'Dänemark',status:'angesetzt'},
    {id:'2042-world-cup-r16-saudi-arabia-germany',stage:'Achtelfinale',home:'Saudi-Arabien',away:'Deutschland',status:'angesetzt'},
    {id:'2042-world-cup-r16-austria-ireland',stage:'Achtelfinale',home:'Österreich',away:'Irland',status:'angesetzt',note:'Österreich kommt nach dem 3:2 gegen Titelverteidiger Frankreich, Irland nach dem 3:1 gegen Italien.'}
  ];
  roundOf16.forEach(pairing=>upsert(wc.knockoutPairings,pairing));
  wc.roundOf16=roundOf16;
  wc.irelandKnockout={stage:'Achtelfinale',opponent:'Österreich',status:'angesetzt',story:'Nach dem 3:1 gegen Italien trifft Irland auf Österreich, das Titelverteidiger Frankreich ausgeschaltet hat.'};

  Object.assign(window.FM_IRELAND,{
    updated:'29.06.2042',competition:'FIFA World Cup 2042',lastMatch:match,
    latestMatch:{date,opponent:'Italien',venue:'Stadion an der Anfield Road · Liverpool',result:'3:1',competition:'FIFA World Cup 2042 · 2. Runde'},
    latestHeadline:'Schock nach einer Minute, dann die Antwort: Irland schlägt Italien 3:1 und steht im Achtelfinale.',
    worldCup2042:Object.assign({},window.FM_IRELAND.worldCup2042||{}, {
      status:'Achtelfinale erreicht',latestMatch:{date,opponent:'Italien',result:'3:1'},
      knockout:{stage:'Achtelfinale',opponent:'Österreich',note:'Österreich eliminierte Titelverteidiger Frankreich mit 3:2.'}
    }),
    nextFocus:{competition:'FIFA World Cup 2042',stage:'Achtelfinale',opponent:'Österreich',date:'noch nicht im aktuellen Material eingeblendet'}
  });

  [
    {id:'2042-06-29-harry-oleary-100th-cap-brace-italy',date,player:"Harry O'Leary",type:'nationalteam',title:"100. Länderspiel, Doppelpack: O'Leary führt Irland ins Achtelfinale",detail:'Trifft in Minute 4 und 74 beim 3:1 gegen Italien und erhält Note 8,0.'},
    {id:'2042-06-29-justin-ramsey-goal-italy',date,player:'Justin Ramsey',type:'nationalteam',title:'Ramsey dreht das Italien-Spiel',detail:'Trifft in Minute 23 zum 2:1 für Irland.'},
    {id:'2042-06-29-giacomo-papini-ireland-vs-italy',date,player:'Giacomo Papini',type:'nationalteam',title:'Papini erlebt besonderes K.-o.-Spiel gegen Italien',detail:'Der Italiener im irischen Team spielt gegen Italien und gehört mit Note 7,4 zu Irlands besseren Spielern.'},
    {id:'2042-06-29-ben-barry-world-cup-potm-count',date,player:'Ben Barry',type:'nationalteam',title:'Barry weiter unter den auffälligen Spielern der WM',detail:'Die Turnierübersicht führt ihn nach der 2. Runde mit zwei Spieler-des-Spiels-Auszeichnungen.'}
  ].forEach(update=>upsert(window.FM_PLAYER_UPDATES,update));

  const report={
    id:reportId,type:'WM-Spielbericht',date,competition:'FIFA World Cup 2042',
    headline:'Schock nach 60 Sekunden, dann dreht Irland auf: 3:1 gegen Italien',
    subheadline:'Harry O’Leary feiert sein 100. Länderspiel mit einem Doppelpack, Justin Ramsey trifft ebenfalls. Im Achtelfinale wartet nun Frankreich-Schreck Österreich.',
    label:'FIFA WORLD CUP 2042 · 2. RUNDE · IRLAND 3:1 ITALIEN',
    heroStat:{label:'100. LÄNDERSPIEL',value:"HARRY O'LEARY · 2 TORE",note:'4. und 74. Minute'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Nach nicht einmal einer Minute sieht es kurz nach einem Albtraumstart aus: Alberto Fabbri bringt Italien mit 1:0 in Führung. Doch Irland kippt die Stimmung sofort. O’Leary gleicht drei Minuten später aus, Ramsey dreht das Spiel noch vor der Pause und O’Leary setzt in seinem 100. Länderspiel den Schlusspunkt.',
    sections:[
      {title:'Der Schock hält genau drei Minuten',text:'Alberto Fabbri trifft in Minute 1 zum 0:1. Irland reagiert jedoch sofort: Harry O’Leary stellt in Minute 4 auf 1:1. Aus einem möglichen Nervenspiel wird damit sehr schnell wieder ein kontrollierbares K.-o.-Duell.'},
      {title:'Ramsey dreht das Spiel',text:'Justin Ramsey erzielt in Minute 23 das 2:1. Irland geht mit der Führung in die Pause und gibt sie danach nicht mehr her.'},
      {title:'O’Learys perfektes Jubiläum',text:'In seinem 100. Länderspiel trifft Harry O’Leary doppelt. Mit dem 3:1 in Minute 74 beendet er Italiens Hoffnung auf eine späte Wende. Note 8,0 und zwei Tore machen ihn zum Mann des Abends.'},
      {title:'Papinis persönliches Duell',text:'Für Giacomo Papini besitzt dieses Spiel eine zusätzliche Ebene: Der Italiener läuft für Irland gegen Italien auf. Mit Note 7,4 gehört er zu den besten irischen Spielern. Ein ungewöhnliches Kapitel in seiner Finn-Harps- und Nationalmannschaftsgeschichte.'},
      {title:'Jetzt wartet der Frankreich-Schreck',text:'Das Achtelfinale steht. Irland trifft auf Österreich, das Titelverteidiger Frankreich mit 3:2 aus dem Turnier geworfen hat. Weitere Paarungen sind England gegen Mexiko, Niederlande gegen Elfenbeinküste, Serbien gegen Südkorea, Belgien gegen Japan, Schweiz gegen Spanien, Brasilien gegen Dänemark und Saudi-Arabien gegen Deutschland.'}
    ],
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Reaktionen',items:[
      '„Nach einer Minute hinten und drei Minuten später wieder auf null. Genau so sieht Turnierreife aus.“',
      '„O’Leary macht sein 100. Spiel und trifft doppelt. Das Drehbuch hat heute wirklich alles bekommen.“',
      '„Österreich hat Frankreich rausgeworfen. Wer jetzt noch von einem einfachen Achtelfinale spricht, hat diese WM nicht gesehen.“'
    ]},
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);
  upsert(window.FM_NEWS,{
    id:'2042-06-29-ireland-beats-italy-round-of-16',date,type:'world-cup',
    title:'Irland schlägt Italien 3:1 und trifft im Achtelfinale auf Österreich',
    text:'Nach dem 0:1 in der ersten Minute dreht Irland das Spiel durch O’Leary (4., 74.) und Ramsey (23.). O’Leary feiert dabei sein 100. Länderspiel. Im Achtelfinale wartet Frankreich-Schreck Österreich.',
    href:'presse.html?id='+reportId
  });
})();