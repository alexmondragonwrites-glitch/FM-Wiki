(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-06-13';
  const reportId='2042-06-13-world-cup-groups-d-f-mexico-escarcega';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const results=[
    {group:'D',home:'Niederlande',away:'Jamaika',score:'1:0',homeScore:1,awayScore:0,scorers:[
      {team:'Niederlande',player:'K. Arana Barrantes',minute:52}
    ],events:[{team:'Jamaika',player:'D. Barrett',minute:89,type:'red-card'}]},
    {group:'D',home:'Schweden',away:'Thailand',score:'2:0',homeScore:2,awayScore:0,scorers:[
      {team:'Schweden',player:'P. Magnusson',minute:38},
      {team:'Schweden',player:'H. Kenne',minute:56}
    ]},
    {group:'E',home:'Senegal',away:'Ecuador',score:'1:4',homeScore:1,awayScore:4,scorers:[
      {team:'Ecuador',player:'S. Valencia',minute:7},
      {team:'Ecuador',player:'S. Valencia',minute:36},
      {team:'Ecuador',player:'S. Valencia',minute:39},
      {team:'Ecuador',player:'J. Paredes',minute:75},
      {team:'Senegal',player:'M. Keita',minute:77}
    ]},
    {group:'E',home:'V.A.E.',away:'Portugal',score:'0:0',homeScore:0,awayScore:0,scorers:[]},
    {group:'F',home:'Neuseeland',away:'Südkorea',score:'1:2',homeScore:1,awayScore:2,scorers:[
      {team:'Südkorea',player:'Noh Tae-Ho',minute:15},
      {team:'Südkorea',player:'Jeong Yong-Gi',minute:39},
      {team:'Neuseeland',player:'C. Wilson',minute:81}
    ]},
    {group:'F',home:'Österreich',away:'Mexiko',score:'1:3',homeScore:1,awayScore:3,scorers:[
      {team:'Mexiko',player:'C. Miguel',minute:43},
      {team:'Österreich',player:'L. Lindner',minute:45},
      {team:'Mexiko',player:'R. López',minute:46},
      {team:'Mexiko',player:'J. Tavares',minute:89}
    ]}
  ];

  wc.status='Gruppenphase läuft';
  wc.updated=date;
  wc.resultsByDate=wc.resultsByDate||{};
  wc.resultsByDate[date]=results;
  wc.groupTables=Object.assign({},wc.groupTables||{}, {
    D:[
      {team:'Schweden',played:1,win:1,draw:0,loss:0,gf:2,ga:0,gd:2,points:3},
      {team:'Niederlande',played:1,win:1,draw:0,loss:0,gf:1,ga:0,gd:1,points:3},
      {team:'Jamaika',played:1,win:0,draw:0,loss:1,gf:0,ga:1,gd:-1,points:0},
      {team:'Thailand',played:1,win:0,draw:0,loss:1,gf:0,ga:2,gd:-2,points:0}
    ],
    E:[
      {team:'Ecuador',played:1,win:1,draw:0,loss:0,gf:4,ga:1,gd:3,points:3},
      {team:'V.A.E.',played:1,win:0,draw:1,loss:0,gf:0,ga:0,gd:0,points:1},
      {team:'Portugal',played:1,win:0,draw:1,loss:0,gf:0,ga:0,gd:0,points:1},
      {team:'Senegal',played:1,win:0,draw:0,loss:1,gf:1,ga:4,gd:-3,points:0}
    ],
    F:[
      {team:'Mexiko',played:1,win:1,draw:0,loss:0,gf:3,ga:1,gd:2,points:3},
      {team:'Südkorea',played:1,win:1,draw:0,loss:0,gf:2,ga:1,gd:1,points:3},
      {team:'Neuseeland',played:1,win:0,draw:0,loss:1,gf:1,ga:2,gd:-1,points:0},
      {team:'Österreich',played:1,win:0,draw:0,loss:1,gf:1,ga:3,gd:-2,points:0}
    ]
  });

  wc.dayTwoSummary={
    date,
    matches:6,
    goals:15,
    headline:'Ecuador setzt mit einem 4:1 das Ausrufezeichen, Mexiko startet mit 3:1 und Escárcega spielt durch.',
    harpsNote:'Emerson Escárcega absolviert beim 3:1 Mexikos gegen Österreich die vollen 90 Minuten als hängende Spitze.'
  };

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-06-13-emerson-escarcega-world-cup-austria',date,player:'Emerson Escárcega',type:'nationalteam',
    title:'Escárcega startet mit Mexiko siegreich in die WM',
    detail:'Spielt beim 3:1 gegen Österreich 90 Minuten als hängende Spitze. Bleibt ohne Tor und Vorlage, kommt auf einen Schuss aufs Tor, 0,10 xG und die Note 6,6.'
  });

  const report={
    id:reportId,type:'WM-Roundup',date,competition:'FIFA World Cup 2042',fixtureDate:'1. Spieltag · Gruppen D bis F',
    headline:'Mexiko startet mit Sieg: Escárcega spielt durch, Ecuador setzt das Ausrufezeichen',
    subheadline:'Mexiko schlägt Österreich 3:1 und eröffnet Gruppe F gemeinsam mit Südkorea erfolgreich. Emerson Escárcega spielt 90 Minuten, bleibt offensiv aber unauffällig. Ecuador fegt Senegal mit 4:1 vom Platz.',
    label:'FIFA WORLD CUP 2042 · GRUPPEN D BIS F',
    heroStat:{label:'EMERSON ESCÁRCEGA',value:'90 MIN · 3:1',note:'WM-Auftaktsieg mit Mexiko gegen Österreich'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Der zweite große Spielblock der WM 2042 ist absolviert. Mexiko beginnt das Turnier mit einem 3:1 gegen Österreich, Südkorea schlägt Neuseeland 2:1 und Ecuador liefert beim 4:1 gegen Senegal die deutlichste Vorstellung des Tages. Aus Finn-Harps-Sicht steht Emerson Escárcega im Mittelpunkt: Der 32-Jährige spielt für Mexiko über die volle Distanz.',
    sections:[
      {title:'Mexiko antwortet sofort auf Österreich',text:'C. Miguel bringt Mexiko in Minute 43 in Führung. L. Lindner gleicht für Österreich in Minute 45 aus, doch direkt nach der Pause stellt R. López in Minute 46 auf 2:1. J. Tavares entscheidet die Partie in Minute 89. Mexiko startet damit gemeinsam mit Südkorea mit drei Punkten in Gruppe F.'},
      {title:'Escárcega arbeitet, aber trifft nicht',text:'Emerson Escárcega spielt die gesamten 90 Minuten als hängende Spitze. Sein individueller Bericht beschreibt den Auftritt als unauffällig. Er bleibt ohne Tor und Vorlage, bringt seinen einzigen Abschluss aufs Tor, kommt auf 0,10 xG und 0,00 xA und erhält die Note 6,6. Nach seinem Treffer im Test gegen Schweden ist es diesmal eher ein Arbeitssieg als eine persönliche Show.'},
      {title:'Ecuador mit dem Statement des Tages',text:'S. Valencia trifft gegen Senegal bereits in Minute 7 und legt in Minute 36 und 39 nach. Sein Hattrick entscheidet die Partie noch vor der Pause. J. Paredes erhöht in Minute 75 auf 4:0, M. Keita erzielt zwei Minuten später Senegals Ehrentreffer.'},
      {title:'Portugal bleibt torlos',text:'Die V.A.E. und Portugal trennen sich 0:0. Damit übernimmt Ecuador nach dem ersten Spieltag sofort die Führung in Gruppe E und setzt Portugal bereits früh unter Zugzwang.'},
      {title:'Schweden und die Niederlande ohne Gegentor',text:'Die Niederlande schlagen Jamaika durch K. Arana Barrantes’ Treffer in Minute 52 mit 1:0; Jamaikas D. Barrett sieht in Minute 89 Rot. Schweden gewinnt gegen Thailand 2:0 durch P. Magnusson und H. Kenne und führt Gruppe D aufgrund der besseren Tordifferenz an.'},
      {title:'Südkorea hält Mexiko Schritt',text:'Noh Tae-Ho und Jeong Yong-Gi bringen Südkorea gegen Neuseeland früh mit 2:0 in Führung. C. Wilson verkürzt erst in Minute 81. Damit stehen Mexiko und Südkorea nach dem Auftakt gemeinsam bei drei Punkten.'}
    ],
    verdictHeading:'Für Mexiko zählt zunächst das Ergebnis',
    verdict:'Escárcega muss beim WM-Auftakt nicht der Held sein. Mexiko produziert drei Tore ohne direkten Scorerpunkt seines erfahrenen Harps-Stürmers und gewinnt trotzdem kontrolliert. Für ihn persönlich bleibt Luft nach oben, für Mexiko ist der Start mit drei Punkten genau das gewünschte Fundament.',
    results,
    sources:['FM-Wettbewerbsübersicht FIFA World Cup 2042 · Gruppen D bis F · 13.06.2042','FM-Spielbericht Emerson Escárcega · Mexiko 3:1 Österreich']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-06-13-world-cup-groups-d-f',date,season:2042,category:'World Cup',accent:'gold',featured:true,
    eyebrow:'FIFA WORLD CUP 2042 · GRUPPEN D BIS F',
    title:'Mexiko startet 3:1: Escárcega spielt 90 Minuten',
    summary:'Mexiko schlägt Österreich 3:1. Emerson Escárcega spielt durch, bleibt ohne Scorerpunkt und erhält 6,6. Ecuador setzt beim 4:1 gegen Senegal das Ausrufezeichen des Tages.',
    href:`presse.html?id=${reportId}`,
    entities:['world-cup-2042','mexico','emerson-escarcega','ecuador','portugal','sweden','netherlands','south-korea']
  });
})();