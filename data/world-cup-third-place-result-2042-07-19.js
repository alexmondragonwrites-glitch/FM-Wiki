(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-07-19';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const match={
    id:'2042-world-cup-third-place-brazil-netherlands',
    stage:'Spiel um Platz 3',
    date,
    home:'Brasilien',
    away:'Niederlande',
    score:'1:1',
    homeScore:1,
    awayScore:1,
    winner:'Niederlande',
    placement:{third:'Niederlande',fourth:'Brasilien'},
    status:'beendet',
    scorers:{home:['N. Ribeiro 44'],away:['K. Arana Barrantes 75']},
    decisionNote:'Der sichtbare Wettbewerbsbildschirm weist ein 1:1 aus; die Niederlande sichern sich laut Turnierausgang dennoch Platz 3. Die konkrete Entscheidungsart ist im vorliegenden Screenshot nicht ausgewiesen.',
    note:'Nach dem Halbfinal-Aus gegen Irland schließen die Niederlande die WM 2042 auf Rang drei ab. Brasilien beendet das Turnier als Vierter.'
  };

  wc.updated=date;
  wc.thirdPlaceMatch=match;
  wc.placements=Object.assign({},wc.placements||{}, {third:'Niederlande',fourth:'Brasilien'});
  wc.knockoutResults=wc.knockoutResults||[];
  upsert(wc.knockoutResults,match);
  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=[match];

  const report={
    id:'2042-07-19-netherlands-third-place-world-cup',
    type:'WM · Spiel um Platz 3',
    date,
    competition:'FIFA World Cup 2042',
    headline:'Niederlande holen Bronze: Oranje beendet die WM auf Platz drei',
    subheadline:'Nach dem 0:2 im Halbfinale gegen Irland reagieren die Niederlande im Spiel um Platz drei und schließen das Turnier vor Brasilien auf Rang drei ab.',
    label:'FIFA WORLD CUP 2042 · SPIEL UM PLATZ 3 · 19. JULI',
    heroStat:{label:'PLATZ 3',value:'NIEDERLANDE',note:'Brasilien beendet die WM als Vierter'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Die Niederlande verabschieden sich mit Bronze aus der WM 2042. Im Spiel um Platz drei steht auf dem sichtbaren Wettbewerbsbildschirm ein 1:1 gegen Brasilien. N. Ribeiro trifft in Minute 44 für Brasilien, K. Arana Barrantes gleicht in Minute 75 aus. Der Turnierausgang weist die Niederlande anschließend als Dritten aus; die konkrete Entscheidungsart ist im vorliegenden Screenshot nicht ausgewiesen.',
    sections:[
      {title:'Oranje antwortet auf das Halbfinal-Aus',text:'Nur wenige Tage nach dem 0:2 gegen Irland schaffen es die Niederlande, die WM mit einem Podestplatz zu beenden. Für eine Mannschaft, die im Halbfinale offensiv kaum zur Entfaltung kam, ist Rang drei ein versöhnlicher Abschluss eines starken Turniers.'},
      {title:'Brasilien bleibt ohne Medaille',text:'Brasilien, das im Halbfinale nach 120 torlosen Minuten an Mexiko scheiterte, beendet die Weltmeisterschaft auf Rang vier. Damit bleiben die Seleção trotz stabiler K.-o.-Phase und mehrerer starker Auftritte ohne Podestplatz.'},
      {title:'Jetzt gehört die Bühne nur noch dem Finale',text:'Mit Platz drei und vier vergeben, bleibt nur noch eine Entscheidung offen: Mexiko gegen Irland um den Weltmeistertitel. Das ungewöhnlichste Finale dieser WM bekommt damit endgültig die gesamte Bühne.'}
    ],
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Reaktionen',items:[
      '„Nach so einem Halbfinale noch Bronze mitzunehmen, ist Charakter.“',
      '„Brasilien Vierter, Niederlande Dritter und Mexiko gegen Irland im Finale. Diese WM hat wirklich jede Vorhersage zerlegt.“',
      '„Jetzt kann niemand mehr ausweichen: Alles schaut auf Mexiko gegen Irland.“'
    ]},
    sources:['FM World Cup 2042 · Spiel um Platz 3 · Brasilien 1:1 Niederlande · Niederlande belegt Rang 3']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-07-19-netherlands-third-world-cup',
    date,
    type:'world-cup',
    title:'Niederlande beendet die WM 2042 auf Platz drei',
    text:'Die Niederlande sichern sich im Spiel um Platz drei gegen Brasilien die Bronzemedaille. Auf dem Wettbewerbsbildschirm steht ein 1:1; die konkrete Entscheidungsart ist im Screenshot nicht ausgewiesen.',
    href:`presse.html?id=${report.id}`
  });
})();