(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  const upsert=(list,item)=>{const i=list.findIndex(x=>x&&x.id===item.id);if(i>=0)list[i]=item;else list.push(item);};
  const date='2042-07-13';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const result={
    id:'2042-world-cup-semifinal-netherlands-ireland',stage:'Halbfinale',date,
    home:'Niederlande',away:'Irland',score:'0:2',homeScore:0,awayScore:2,winner:'Irland',status:'beendet',
    venue:'Wembley, London',attendance:90000,
    scorers:{away:['Harry O’Leary 26','Cormac O’Kane 50']},
    stats:{shots:{netherlands:3,ireland:14},shotsOnTarget:{netherlands:0,ireland:5},xg:{netherlands:0.40,ireland:2.03},possession:{netherlands:52,ireland:48}},
    manOfTheMatch:{player:'Brendan McHugh',rating:7.9,assists:1,keyPasses:2,distanceKm:8.3},
    note:'Irland gewinnt hochverdient 2:0. O’Leary trifft in Minute 26, O’Kane in Minute 50. Im Finale wartet Mexiko.'
  };

  wc.status='K.-o.-Phase · Finale';wc.updated=date;
  wc.knockoutResults=wc.knockoutResults||[];upsert(wc.knockoutResults,result);
  wc.resultsByDate=wc.resultsByDate||{};wc.resultsByDate[date]=[result];
  wc.semiFinals=wc.semiFinals||[];
  {const i=wc.semiFinals.findIndex(x=>x&&x.home==='Niederlande'&&x.away==='Irland');const u={stage:'Halbfinale',date,home:'Niederlande',away:'Irland',status:'beendet',score:'0:2',winner:'Irland'};if(i>=0)wc.semiFinals[i]=Object.assign({},wc.semiFinals[i],u);else wc.semiFinals.push(u);}
  wc.finalists=['Mexiko','Irland'];
  wc.final={stage:'Finale',home:'Mexiko',away:'Irland',status:'angesetzt',note:'Emerson Escárcega trifft mit Mexiko auf Ryan Flannigans Irland und zahlreiche Finn-Harps-Teamkollegen.'};
  upsert(window.FM_MATCHES,result);

  [
    {id:'2042-07-13-cormac-okane-netherlands-ireland',player:'Cormac O’Kane',title:'O’Kane trifft Irland ins WM-Finale',detail:'90 Minuten, Tor zum 2:0, Note 7,7, 29 von 33 Pässen angekommen.'},
    {id:'2042-07-13-brendan-mchugh-netherlands-ireland',player:'Brendan McHugh',title:'McHugh ist Spieler des Spiels',detail:'Note 7,9, eine Vorlage und zwei entscheidende Pässe. Der 34-Jährige hat sein Karriereende für Juli 2042 angekündigt und erreicht nun noch das WM-Finale.'},
    {id:'2042-07-13-evan-reilly-netherlands-ireland',player:'Evan Reilly',title:'Reilly hält erneut die Null',detail:'Note 7,6. Die Niederlande bringen keinen einzigen Schuss auf sein Tor.'},
    {id:'2042-07-13-jim-oneill-netherlands-ireland',player:'Jim O’Neill',title:'O’Neill prägt das Zentrum',detail:'90 Minuten, eine Vorlage, Note 7,5.'},
    {id:'2042-07-13-ben-barry-netherlands-ireland',player:'Ben Barry',title:'Barry diesmal ohne großen Einfluss',detail:'Start als Mezzala, 58 Minuten, keine Torbeteiligung, Note 6,5.'},
    {id:'2042-07-13-callum-brennan-netherlands-ireland',player:'Callum Brennan',title:'Brennan stark im Halbfinale',detail:'90 Minuten, vier abgefangene Bälle, Note 7,2.'}
  ].forEach(x=>upsert(window.FM_PLAYER_UPDATES,Object.assign({date,type:'nationalteam'},x)));

  const report={
    id:'2042-07-13-ireland-netherlands-world-cup-semifinal-final-bound',type:'WM-Halbfinale',date,competition:'FIFA World Cup 2042',
    headline:'Irland im WM-Finale: 2:0 gegen die Niederlande in Wembley',
    subheadline:'O’Leary und O’Kane treffen. Irland gewinnt die Schussbilanz 14:3 und lässt keinen niederländischen Schuss aufs Tor zu.',
    label:'FIFA WORLD CUP 2042 · HALBFINALE · 13. JULI',
    heroStat:{label:'WM-FINALE',value:'MEXIKO – IRLAND',note:'Das Traumfinale ist Realität'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Ohne den gesperrten Justin Ramsey liefert Irland eine reife, dominante Halbfinalleistung. Harry O’Leary trifft nach 26 Minuten, Cormac O’Kane legt in Minute 50 nach. Brendan McHugh wird mit 7,9 Spieler des Spiels.',
    sections:[
      {title:'Klare Überlegenheit',text:'14:3 Schüsse, 5:0 aufs Tor und 2,03:0,40 xG zeigen, wie deutlich Irland dieses Halbfinale kontrolliert.'},
      {title:'McHughs letzter Sommer wird immer größer',text:'Der 34-Jährige liefert eine Vorlage und wird Spieler des Spiels. Sein angekündigtes Karriereende im Juli 2042 kann nun tatsächlich mit einem WM-Finale enden.'},
      {title:'Ramsey fehlt, Irland findet trotzdem Lösungen',text:'Barry bleibt als Mezzala diesmal blass, doch O’Neill und O’Kane übernehmen Verantwortung im Zentrum.'},
      {title:'Traumfinale',text:'Im Endspiel wartet Mexiko. Damit trifft Emerson Escárcega auf seinen Klubtrainer Ryan Flannigan und zahlreiche Finn-Harps-Teamkollegen.'}
    ],
    sources:['FM World Cup 2042 · Niederlande 0:2 Irland · Halbfinale','FM Spielerberichte Irland · 13.07.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);
  upsert(window.FM_NEWS,{id:'2042-07-13-ireland-beats-netherlands-world-cup-final',date,type:'world-cup',title:'Irland schlägt die Niederlande 2:0 und steht im WM-Finale',text:'O’Leary und O’Kane treffen in Wembley. Im Finale wartet Mexiko.',href:`presse.html?id=${report.id}`});
})();