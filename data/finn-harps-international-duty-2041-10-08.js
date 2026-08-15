(()=>{
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_INTERNATIONAL_DUTY=window.FM_INTERNATIONAL_DUTY||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const results=[
    {player:'Torric Bruce',nation:'Ghana',opponent:'Burundi',result:'6:0',date:'2041-10-08',minutes:90,rating:7.2,goals:0,assists:0},
    {player:'Emerson Escárcega',nation:'Mexiko',opponent:'Trinidad & Tobago',result:'3:0',date:'2041-10-08',minutes:90,rating:7.2,goals:0,assists:1,caps:103,nationalGoals:60},
    {player:'Diego Fernández',nation:'Argentinien',opponent:'Venezuela',result:'4:0',date:'2041-10-08',minutes:90,rating:7.9,goals:1,assists:0,caps:14,nationalGoals:2},
    {player:'Paulo Henrique',nation:'Brasilien',opponent:'Chile',result:'2:1',date:'2041-10-08',minutes:90,rating:6.8,goals:0,assists:0}
  ];

  const roundup={
    id:'2041-10-08-finn-harps-international-duty',date:'2041-10-08',type:'Länderspielüberblick',results,
    headline:'Fernández trifft für Argentinien – Escárcega legt beim 3:0 Mexikos auf',
    summary:'Diego Fernández erzielt beim 4:0 Argentiniens gegen Venezuela sein zweites Länderspieltor. Emerson Escárcega steuert beim 3:0 Mexikos gegen Trinidad & Tobago eine Vorlage bei. Torric Bruce gewinnt mit Ghana 6:0, Paulo Henrique mit Brasilien 2:1 gegen Chile.',
    sources:['FM-Länderspielüberblick Finn Harps · 08.10.2041']
  };
  upsert(window.FM_INTERNATIONAL_DUTY,roundup);

  [
    {id:'2041-10-08-torric-bruce-burundi',date:'2041-10-08',player:'Torric Bruce',type:'nationalteam',title:'6:0-Sieg mit Ghana',detail:'Spielt beim 6:0 gegen Burundi 90 Minuten und erhält Note 7,2.'},
    {id:'2041-10-08-escarcega-mexico-trinidad',date:'2041-10-08',player:'Emerson Escárcega',type:'nationalteam',title:'Vorlage beim 3:0',detail:'Mexiko schlägt Trinidad & Tobago 3:0. Escárcega spielt 90 Minuten, bereitet ein Tor vor und erhält Note 7,2; seine Nationalteambilanz steht nun bei 103 Einsätzen und 60 Toren.'},
    {id:'2041-10-08-diego-fernandez-venezuela',date:'2041-10-08',player:'Diego Fernández',type:'nationalteam',title:'Zweites Länderspieltor',detail:'Argentinien gewinnt 4:0 gegen Venezuela. Fernández spielt 90 Minuten, erzielt ein Tor und erhält Note 7,9. Nach 14 Länderspielen steht er bei zwei Treffern.'},
    {id:'2041-10-08-paulo-henrique-chile',date:'2041-10-08',player:'Paulo Henrique',type:'nationalteam',title:'2:1-Sieg gegen Chile',detail:'Brasilien schlägt Chile 2:1. Paulo Henrique spielt 90 Minuten und erhält Note 6,8.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:'2041-10-08-finn-harps-laenderspielueberblick',type:'Länderspielüberblick',date:'2041-10-08',competition:'Länderspiele',
    headline:'Fernández trifft, Esca assistiert: Harps-Spieler weltweit erfolgreich',
    subheadline:'Argentinien schlägt Venezuela 4:0, Mexiko gewinnt 3:0 gegen Trinidad & Tobago, Ghana 6:0 gegen Burundi und Brasilien 2:1 gegen Chile.',
    label:'FINN HARPS · LÄNDERSPIELE · 8. OKTOBER 2041',
    heroStat:{label:'Diego Fernández',value:'1 Tor · Note 7,9',note:'Argentinien 4:0 Venezuela · 14 Lsp / 2 Tore'},
    backlink:{href:'kader.html',label:'← ZUM KADER'},
    intro:'Nach dem irischen Sieg in Kroatien laufen auch die übrigen Finn-Harps-Nationalspieler erfolgreich aus. Diego Fernández liefert die auffälligste Leistung und trifft beim 4:0 Argentiniens gegen Venezuela. Emerson Escárcega bleibt diesmal ohne eigenes Tor, bereitet beim 3:0 Mexikos aber einen Treffer vor.',
    sections:[
      {title:'Fernández trifft beim 4:0',text:'Diego Fernández spielt gegen Venezuela über die volle Distanz, erzielt ein Tor und erhält die Note 7,9. Nach 14 A-Länderspielen steht der Mittelfeldspieler bei zwei Treffern.'},
      {title:'Esca diesmal als Vorbereiter',text:'Mexiko gewinnt 3:0 gegen Trinidad & Tobago. Escárcega spielt 90 Minuten, liefert eine Vorlage und kommt auf die Note 7,2. Nach seinem jüngsten Torfeuerwerk zeigt er diesmal eine andere Facette seines Spiels.'},
      {title:'Bruce erlebt einen ruhigen Kantersieg',text:'Ghana schlägt Burundi 6:0. Torric Bruce spielt 90 Minuten und erhält die Note 7,2.'},
      {title:'Brasilien gewinnt auch gegen Chile',text:'Paulo Henrique steht beim 2:1 Brasiliens gegen Chile über die gesamte Spielzeit im Tor und erhält die Note 6,8.'}
    ],
    verdictHeading:'Nicht immer Tore, aber weiter Einfluss',
    verdict:'Escárcega muss diesmal nicht selbst treffen, um für Mexiko produktiv zu sein. Fernández nutzt dagegen seine Chance im argentinischen Mittelfeld und baut seine noch junge Nationalmannschaftsbilanz aus. Insgesamt bleibt der Harps-Block auch nach dem langen Länderspielfenster auf mehreren Kontinenten sichtbar.',
    sources:roundup.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2041-10-08-finn-harps-international-duty',date:'2041-10-08',season:2041,category:'Nationalteam',accent:'green',featured:false,
    eyebrow:'LÄNDERSPIELE · FINN HARPS',title:'Fernández trifft, Esca legt auf',
    summary:'Diego Fernández erzielt beim 4:0 Argentiniens ein Tor. Escárcega steuert beim mexikanischen 3:0 gegen Trinidad & Tobago eine Vorlage bei.',
    href:'presse.html?id=2041-10-08-finn-harps-laenderspielueberblick',entities:['diego-fernandez','emerson-escarcega','finn-harps','season-2041']
  });
})();