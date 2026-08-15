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
    {player:'Torric Bruce',nation:'Ghana',opponent:'Uganda',result:'3:1',date:'2041-10-04',minutes:90,rating:7.4,goals:0,assists:0},
    {player:'Emerson Escárcega',nation:'Mexiko',opponent:'USA',result:'0:1',date:'2041-10-04',minutes:78,rating:6.5,goals:0,assists:0,caps:102,nationalGoals:60},
    {player:'Diego Fernández',nation:'Argentinien',opponent:'Peru',result:'1:0',date:'2041-10-04',minutes:72,rating:7.2,goals:0,assists:0},
    {player:'Daryl Frame',nation:'Schottland',opponent:'Japan',result:'0:1',date:'2041-10-04',minutes:77,rating:6.5,goals:0,assists:0},
    {player:'Paulo Henrique',nation:'Brasilien',opponent:'Paraguay',result:'3:0',date:'2041-10-04',minutes:90,rating:7.4,goals:0,assists:0,cleanSheet:true}
  ];

  const roundup={
    id:'2041-10-04-finn-harps-international-duty',date:'2041-10-04',type:'Länderspielüberblick',results,
    headline:'Escárcegas Serie stoppt gegen die USA – Brasilien und Ghana siegen',
    summary:'Mexiko verliert in der nordamerikanischen WM-Qualifikation 0:1 gegen die USA; Emerson Escárcega bleibt nach seinem Hattrick diesmal ohne Tor. Torric Bruce gewinnt mit Ghana 3:1 in Uganda, Paulo Henrique hält beim 3:0 Brasiliens gegen Paraguay erneut die Null.',
    qualificationSnapshots:{
      northAmerica:{competition:'FIFA World Cup 2042 Qualification · Nordamerika',group:'Gruppe A · 3. Runde',table:[
        {position:1,team:'USA',played:3,wins:3,draws:0,losses:0,goalsFor:6,goalsAgainst:1,points:9},
        {position:2,team:'Mexiko',played:3,wins:2,draws:0,losses:1,goalsFor:10,goalsAgainst:6,points:6},
        {position:3,team:'Costa Rica',played:3,wins:1,draws:0,losses:2,goalsFor:3,goalsAgainst:3,points:3},
        {position:4,team:'Trinidad & Tobago',played:3,wins:0,draws:0,losses:3,goalsFor:1,goalsAgainst:10,points:0}
      ],matchdayResults:['Costa Rica 3:0 Trinidad & Tobago','Mexiko 0:1 USA','Dominikanische Republik 0:1 Jamaika','Panama 0:2 Barbados','Haiti 3:0 Montserrat','Kuba 1:0 Suriname'],escarcega:{goals:6,averageRating:7.65,note:'Nach drei Gruppenspielen weiterhin bei sechs Qualifikationstoren; gemeinsam mit mehreren Spielern hinter Darren Hilton (9) in der Spitzengruppe der Torjägerliste.'}},
      southAmerica:{competition:'FIFA World Cup 2042 Qualification · Südamerika',matchdayResults:['Bolivien 2:0 Venezuela','Brasilien 3:0 Paraguay','Ecuador 1:3 Kolumbien','Peru 0:1 Argentinien','Uruguay 1:1 Chile'],brazil:{position:1,played:17,wins:14,draws:0,losses:3,points:42},argentina:{position:5,played:17,wins:8,draws:4,losses:5,points:28},pauloHenrique:{cleanSheets:6,note:'Sechs Spiele ohne Gegentor in der Südamerika-Qualifikation.'}}
    },
    sources:['FM-Länderspielüberblick Finn Harps · 04.10.2041','FM-WM-Qualifikation Südamerika · Stand nach 17 Spielen','FM-WM-Qualifikation Nordamerika · 3. Runde nach drei Spielen']
  };
  upsert(window.FM_INTERNATIONAL_DUTY,roundup);

  [
    {id:'2041-10-04-torric-bruce-uganda',date:'2041-10-04',player:'Torric Bruce',type:'nationalteam',title:'3:1-Sieg mit Ghana',detail:'Spielt beim 3:1-Auswärtssieg Ghanas gegen Uganda 90 Minuten und erhält Note 7,4.'},
    {id:'2041-10-04-escarcega-mexico-usa',date:'2041-10-04',player:'Emerson Escárcega',type:'nationalteam',title:'Niederlage gegen die USA',detail:'Mexiko verliert 0:1 gegen die USA. Escárcega spielt 78 Minuten, bleibt ohne Tor und erhält Note 6,5; seine Nationalteambilanz bleibt bei 60 Toren.'},
    {id:'2041-10-04-diego-fernandez-peru',date:'2041-10-04',player:'Diego Fernández',type:'nationalteam',title:'Sieg mit Argentinien',detail:'Argentinien gewinnt 1:0 in Peru; Fernández spielt 72 Minuten und erhält Note 7,2.'},
    {id:'2041-10-04-daryl-frame-japan',date:'2041-10-04',player:'Daryl Frame',type:'nationalteam',title:'Niederlage gegen Japan',detail:'Schottland verliert 0:1 gegen Japan. Frame spielt 77 Minuten und erhält Note 6,5.'},
    {id:'2041-10-04-paulo-henrique-paraguay-clean-sheet',date:'2041-10-04',player:'Paulo Henrique',type:'nationalteam',title:'Erneut zu null für Brasilien',detail:'Brasilien schlägt Paraguay 3:0. Paulo Henrique spielt 90 Minuten, erhält Note 7,4 und verbucht sein sechstes Zu-null-Spiel der Qualifikation.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:'2041-10-04-finn-harps-laenderspielueberblick',type:'Länderspielüberblick',date:'2041-10-04',competition:'Länderspiele',
    headline:'Esca diesmal gestoppt: Mexiko verliert 0:1 gegen die USA',
    subheadline:'Nach sechs Qualifikationstoren in zwei Spielen bleibt Emerson Escárcega gegen die USA ohne Treffer. Brasilien, Argentinien und Ghana gewinnen, Schottland verliert gegen Japan.',
    label:'FINN HARPS · LÄNDERSPIELE · 4. OKTOBER 2041',
    heroStat:{label:'Paulo Henrique',value:'3:0 · Clean Sheet',note:'Brasilien gegen Paraguay · sechstes Zu-null-Spiel der Qualifikation'},
    backlink:{href:'kader.html',label:'← ZUM KADER'},
    intro:'Der zweite internationale Spieltag dieses Blocks fällt für die Finn-Harps-Legionäre gemischter aus. Emerson Escárcegas Torlauf endet vorerst beim 0:1 Mexikos gegen die USA. Dafür gewinnen Brasilien, Argentinien und Ghana ihre Qualifikationsspiele.',
    sections:[
      {title:'USA stoppt Mexiko und Escárcega',text:'Mexiko verliert 0:1 gegen die USA und fällt in Gruppe A hinter den direkten Rivalen zurück. Escárcega spielt 78 Minuten, erhält die Note 6,5 und bleibt nach sechs Toren in den ersten beiden Gruppenspielen diesmal ohne Treffer.'},
      {title:'Esca bleibt trotzdem in der Torjäger-Spitzengruppe',text:'Mit sechs Treffern liegt Escárcega nach drei Gruppenspielen weiterhin gemeinsam mit mehreren Spielern weit vorne. Darren Hilton führt die Liste mit neun Toren an.'},
      {title:'Paulo Henrique hält wieder die Null',text:'Brasilien gewinnt 3:0 gegen Paraguay und bleibt mit 42 Punkten Tabellenführer der Südamerika-Qualifikation. Paulo Henrique absolviert 90 Minuten, bekommt 7,4 und steht nun bei sechs Zu-null-Spielen.'},
      {title:'Fernández gewinnt mit Argentinien',text:'Argentinien setzt sich 1:0 in Peru durch. Diego Fernández spielt 72 Minuten und erhält die Note 7,2.'},
      {title:'Bruce siegt, Frame verliert',text:'Torric Bruce spielt beim 3:1 Ghanas in Uganda durch und erhält 7,4. Daryl Frame steht beim schottischen 0:1 gegen Japan 77 Minuten auf dem Platz und kommt auf 6,5.'}
    ],
    verdictHeading:'Ein normalerer Abend nach Escas Tor-Feuerwerk',
    verdict:'Nach fünf Toren in seinen beiden vorherigen Mexiko-Spielen bleibt Escárcega diesmal torlos. Das ändert wenig an seinem starken Qualifikationsstart, zeigt aber, dass Mexiko gegen die USA deutlich mehr Widerstand bekommt als gegen Costa Rica oder Trinidad & Tobago. Für Finn Harps ist vor allem erfreulich, dass Paulo Henrique weiter konstant auf hohem Niveau spielt.',
    sources:roundup.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2041-10-04-finn-harps-international-duty',date:'2041-10-04',season:2041,category:'Nationalteam',accent:'green',featured:false,
    eyebrow:'LÄNDERSPIELE · FINN HARPS',title:'Esca gegen die USA gestoppt, Paulo Henrique wieder zu null',
    summary:'Mexiko verliert 0:1 gegen die USA. Escárcega bleibt bei sechs Qualifikationstoren, Paulo Henrique hält beim brasilianischen 3:0 gegen Paraguay erneut die Null.',
    href:'presse.html?id=2041-10-04-finn-harps-laenderspielueberblick',entities:['emerson-escarcega','paulo-henrique','finn-harps','season-2041']
  });
})();