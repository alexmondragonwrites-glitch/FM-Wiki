(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-06-25';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const results=[
    {
      id:'2042-world-cup-round2-mexico-south-africa',stage:'2. Runde',home:'Mexiko',away:'Südafrika',score:'4:1',homeScore:4,awayScore:1,
      winner:'Mexiko',status:'beendet',
      harps:{player:'Emerson Escárcega',minutes:90,rating:8.6,goals:1,assists:1,xg:0.47,xa:0.96,note:'Trifft in der 72. Minute und liefert zusätzlich eine Vorlage.'}
    },
    {
      id:'2042-world-cup-round2-argentina-ivory-coast',stage:'2. Runde',home:'Argentinien',away:'Elfenbeinküste',score:'1:2',homeScore:1,awayScore:2,
      winner:'Elfenbeinküste',status:'beendet',upset:true,
      harps:{player:'Diego Fernández',minutes:60,rating:6.6,interceptions:1,duelsWon:'2/2',fouls:2,note:'Startet für Argentinien als Flügelverteidiger und wird nach 60 Minuten ausgewechselt.'}
    }
  ];

  wc.status='K.-o.-Phase · 2. Runde';
  wc.updated=date;
  wc.knockoutResults=wc.knockoutResults||[];
  results.forEach(result=>upsert(wc.knockoutResults,result));

  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=results;

  wc.knockoutPairings=wc.knockoutPairings||[];
  results.forEach(result=>{
    const index=wc.knockoutPairings.findIndex(item=>item&&(item.id===result.id||(item.home===result.home&&item.away===result.away&&item.stage==='2. Runde')));
    const pairing={id:result.id,stage:'2. Runde',home:result.home,away:result.away,status:'beendet',score:result.score,winner:result.winner,date};
    if(index>=0)wc.knockoutPairings[index]=Object.assign({},wc.knockoutPairings[index],pairing);else wc.knockoutPairings.push(pairing);
  });

  wc.june25KnockoutSummary={
    date,stage:'2. Runde',results,
    headline:'Paukenschlag in der ersten K.-o.-Runde: Die Elfenbeinküste wirft Argentinien mit 2:1 aus der WM, während Mexiko Südafrika 4:1 schlägt.',
    harpsHeadline:'Emerson Escárcega führt Mexiko mit einem Tor und einer Vorlage weiter. Diego Fernández scheidet mit Argentinien aus.'
  };

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-06-25-escarcega-mexico-south-africa-world-cup',date,player:'Emerson Escárcega',type:'nationalteam',
    title:'Escárcega führt Mexiko mit Tor und Vorlage in die nächste Runde',
    detail:'90 Minuten beim 4:1 gegen Südafrika, 1 Tor, 1 Vorlage, 0,47 xG, 0,96 xA und Note 8,6. Sein Treffer fällt in der 72. Minute.'
  });

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-06-25-diego-fernandez-argentina-ivory-coast-world-cup',date,player:'Diego Fernández',type:'nationalteam',
    title:'Fernández scheidet mit Argentinien überraschend aus',
    detail:'60 Minuten als Flügelverteidiger beim 1:2 gegen die Elfenbeinküste, Note 6,6. Fernández gewinnt beide Zweikämpfe, kann den frühen WM-K.-o. von Argentinien aber nicht verhindern.'
  });

  const report={
    id:'2042-06-25-world-cup-round2-argentina-upset-escarcega',type:'WM-K.-o.-Roundup',date,competition:'FIFA World Cup 2042',
    headline:'Paukenschlag: Elfenbeinküste wirft Argentinien raus, Escárcega führt Mexiko weiter',
    subheadline:'Einer der großen Turnierfavoriten ist bereits ausgeschieden. Mexiko dagegen bestätigt seine starke WM und gewinnt 4:1 gegen Südafrika.',
    label:'FIFA WORLD CUP 2042 · 2. RUNDE · ERSTE ERGEBNISSE',
    heroStat:{label:'PAUKENSCHLAG',value:'ARGENTINIEN 1:2 ELFENBEINKÜSTE',note:'Der makellose Gruppensieger scheidet im ersten K.-o.-Spiel aus'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Die ersten Ergebnisse der 2. Runde liefern sofort den ersten großen Schock dieser WM. Argentinien, nach neun Punkten in der Gruppenphase noch einer der heißesten Titelkandidaten, verliert 1:2 gegen die Elfenbeinküste. Für Finn Harps gibt es gleichzeitig eine gegensätzliche Geschichte: Emerson Escárcega glänzt beim 4:1 Mexikos gegen Südafrika mit Tor und Vorlage.',
    sections:[
      {title:'Argentinien fällt aus allen Wolken',text:'Nach einer perfekten Gruppenphase mit drei Siegen endet die WM für Argentinien abrupt. Die Elfenbeinküste gewinnt 2:1 und sorgt für den bislang größten K.-o.-Paukenschlag des Turniers. Diego Fernández beginnt für Argentinien als Flügelverteidiger, spielt 60 Minuten, erhält die Note 6,6 und gewinnt seine beiden registrierten Zweikämpfe.'},
      {title:'Escárcega bleibt auf WM-Betriebstemperatur',text:'Mexiko schlägt Südafrika 4:1 und zieht weiter. Emerson Escárcega spielt 90 Minuten, erzielt in Minute 72 ein Tor, bereitet einen weiteren Treffer vor und kommt auf 0,47 xG sowie starke 0,96 xA. Seine Note 8,6 unterstreicht, wie groß sein Einfluss auf Mexikos Offensive inzwischen ist.'},
      {title:'Das Turnier öffnet sich',text:'Mit Argentinien verliert die WM schon in der 2. Runde einen der Mannschaften, die nach der Gruppenphase zum engsten Favoritenkreis gehörten. Für Teams wie Spanien, Belgien, Mexiko, Deutschland, Frankreich und auch Irland verändert sich damit die Statik des Turnierbaums spürbar.'},
      {title:'Finn Harps zwischen Freude und Frust',text:'Escárcega spielt sich mit Mexiko weiter ins Rampenlicht, während Fernández mit Argentinien ausscheidet. Damit liefert selbst die K.-o.-Phase weiter große Harps-Geschichten, noch bevor Irland gegen Italien antritt.'}
    ],
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Reaktionen',items:[
      '„Argentinien neun Punkte in der Gruppe und dann sofort raus. Genau deshalb liebt und fürchtet man K.-o.-Fußball.“',
      '„Escárcega sieht aus, als hätte er beschlossen, diese WM persönlich auszukosten.“',
      '„Wenn die Elfenbeinküste Argentinien schlagen kann, schaut jetzt wirklich jeder Außenseiter ein bisschen größer auf den Turnierbaum.“'
    ]},
    sources:['FM-Spielbericht Emerson Escárcega · Mexiko 4:1 Südafrika · 2. Runde','FM-Spielbericht Diego Fernández · Argentinien 1:2 Elfenbeinküste · 2. Runde']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-06-25-world-cup-round2-first-results',date,type:'world-cup',
    title:'Paukenschlag: Elfenbeinküste eliminiert Argentinien',
    text:'Argentinien scheidet nach perfekter Gruppenphase mit 1:2 gegen die Elfenbeinküste aus. Mexiko gewinnt 4:1 gegen Südafrika; Emerson Escárcega steuert ein Tor und eine Vorlage bei.',
    href:'presse.html?id=2042-06-25-world-cup-round2-argentina-upset-escarcega'
  });
})();