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
    {player:'Torric Bruce',nation:'Ghana',opponent:'Eritrea',result:'5:0',date:'2041-10-01',minutes:90,rating:8.0,goals:0,assists:1},
    {player:'Emerson Escárcega',nation:'Mexiko',opponent:'Trinidad & Tobago',result:'8:0',date:'2041-10-01',minutes:90,rating:9.4,goals:3,assists:0,caps:101,nationalGoals:60},
    {player:'Diego Fernández',nation:'Argentinien',opponent:'Brasilien',result:'0:1',date:'2041-10-01',minutes:74,rating:6.7,goals:0,assists:0},
    {player:'Amir Mašić',nation:'Schweiz',opponent:'Montenegro',result:'1:0',date:'2041-10-01',minutes:71,rating:7.1,goals:0,assists:0},
    {player:'Paulo Henrique',nation:'Brasilien',opponent:'Argentinien',result:'1:0',date:'2041-10-01',minutes:90,rating:7.6,goals:0,assists:0,cleanSheet:true}
  ];

  const roundup={
    id:'2041-10-01-finn-harps-international-duty',date:'2041-10-01',type:'Länderspielüberblick',results,
    headline:'Escárcega schon wieder: Hattrick beim 8:0 gegen Trinidad & Tobago',
    summary:'Emerson Escárcega erzielt für Mexiko drei Tore, steigt auf 101 Länderspiele und 60 Nationalteam-Tore. Torric Bruce liefert beim 5:0 Ghanas eine Vorlage, Paulo Henrique hält beim 1:0 Brasiliens gegen Argentinien die Null.',
    qualificationSnapshots:{
      northAmerica:{competition:'FIFA World Cup 2042 Qualification · Nordamerika',group:'Gruppe A · 3. Runde',mexico:{played:2,wins:2,draws:0,losses:0,goalsFor:11,goalsAgainst:0,goalDifference:11,points:6},escarcega:{goals:6,averageRating:7.88,note:'Nach zwei Gruppenspielen gemeinsam mit Ricardo López bei sechs Toren.'}},
      southAmerica:{competition:'FIFA World Cup 2042 Qualification · Südamerika',brazil:{position:1,played:16,wins:13,draws:0,losses:3,points:39},argentina:{position:5,played:16,wins:7,draws:4,losses:5,points:25},pauloHenrique:{cleanSheets:5,note:'Fünf Spiele ohne Gegentor in der Qualifikation.'}}
    },
    sources:['FM-Länderspielüberblick Finn Harps · 01.10.2041','FM-WM-Qualifikation Südamerika · Stand 02.10.2041','FM-WM-Qualifikation Nordamerika · Stand 02.10.2041']
  };
  upsert(window.FM_INTERNATIONAL_DUTY,roundup);

  [
    {id:'2041-10-01-escarcega-mexico-hat-trick',date:'2041-10-01',player:'Emerson Escárcega',type:'nationalteam',title:'Hattrick für Mexiko',detail:'Trifft beim 8:0 gegen Trinidad & Tobago dreimal, erhält Note 9,4 und steht nun bei 101 Länderspielen und 60 Toren für Mexiko.'},
    {id:'2041-10-01-torric-bruce-ghana-assist',date:'2041-10-01',player:'Torric Bruce',type:'nationalteam',title:'Vorlage beim 5:0',detail:'Spielt beim 5:0 Ghanas gegen Eritrea 90 Minuten, liefert eine Vorlage und erhält Note 8,0.'},
    {id:'2041-10-01-diego-fernandez-argentina-brazil',date:'2041-10-01',player:'Diego Fernández',type:'nationalteam',title:'74 Minuten gegen Brasilien',detail:'Argentinien verliert 0:1 gegen Brasilien; Fernández spielt 74 Minuten und erhält Note 6,7.'},
    {id:'2041-10-01-amir-masic-switzerland',date:'2041-10-01',player:'Amir Mašić',type:'nationalteam',title:'Sieg mit der Schweiz',detail:'Spielt beim 1:0 gegen Montenegro 71 Minuten und erhält Note 7,1.'},
    {id:'2041-10-01-paulo-henrique-brazil-clean-sheet',date:'2041-10-01',player:'Paulo Henrique',type:'nationalteam',title:'Zu null gegen Argentinien',detail:'Spielt beim 1:0 Brasiliens 90 Minuten, erhält Note 7,6 und hält die Null.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:'2041-10-01-finn-harps-laenderspielueberblick',type:'Länderspielüberblick',date:'2041-10-01',competition:'Länderspiele',
    headline:'Escárcega setzt seinen Lauf fort: Hattrick für Mexiko',
    subheadline:'101 Länderspiele, 60 Tore: Emerson Escárcega trifft beim 8:0 gegen Trinidad & Tobago dreifach. Auch Torric Bruce und Paulo Henrique liefern starke Auftritte.',
    label:'FINN HARPS · LÄNDERSPIELE · 1. OKTOBER 2041',
    heroStat:{label:'Emerson Escárcega',value:'3 Tore · Note 9,4',note:'Mexiko 8:0 Trinidad & Tobago · 101 Lsp / 60 Tore'},
    backlink:{href:'kader.html',label:'← ZUM KADER'},
    intro:'Während Irland sich auf das Spitzenspiel gegen Tschechien vorbereitet, sind weitere Finn-Harps-Spieler weltweit im Einsatz. Wieder ragt Emerson Escárcega heraus: Der 31-Jährige erzielt für Mexiko einen Hattrick und schraubt seine Nationalmannschaftsbilanz auf 60 Tore.',
    sections:[
      {title:'Escárcega erreicht 60 Länderspieltore',text:'Mexiko schlägt Trinidad & Tobago 8:0. Escárcega spielt 90 Minuten, erzielt drei Tore und bekommt die Note 9,4. Nach 101 A-Länderspielen steht er nun bei 60 Treffern.'},
      {title:'Sechs Tore in zwei Qualifikationsspielen',text:'In der nordamerikanischen WM-Qualifikation steht Mexiko nach zwei Spielen bei sechs Punkten und 11:0 Toren. Escárcega hat bereits sechs Treffer erzielt und liegt damit gemeinsam mit Ricardo López an der Spitze der Torjägerliste.'},
      {title:'Bruce liefert für Ghana',text:'Torric Bruce spielt beim 5:0 gegen Eritrea über die volle Distanz, steuert eine Vorlage bei und erhält die Note 8,0.'},
      {title:'Brasilien schlägt Argentinien',text:'Paulo Henrique steht beim 1:0 für Brasilien 90 Minuten im Tor und erhält die Note 7,6. Diego Fernández spielt auf der Gegenseite 74 Minuten und kommt auf 6,7.'},
      {title:'Mašić gewinnt mit der Schweiz',text:'Amir Mašić spielt beim 1:0 gegen Montenegro 71 Minuten und erhält die Note 7,1.'}
    ],
    verdictHeading:'Esca spielt gerade in zwei Welten gleichzeitig heiß',
    verdict:'Sein Lauf bei Finn Harps setzt sich nahtlos in der Nationalmannschaft fort. Nach dem Doppelpack im 100. Länderspiel folgt direkt ein Hattrick im 101. Einsatz. 60 Tore für Mexiko und sechs Treffer in den ersten beiden Spielen dieser Qualifikationsrunde unterstreichen, wie außergewöhnlich seine aktuelle Form ist.',
    sources:roundup.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2041-10-01-escarcega-mexico-hattrick',date:'2041-10-01',season:2041,category:'Nationalteam',accent:'green',featured:false,
    eyebrow:'LÄNDERSPIELE · FINN HARPS',title:'Escárcega mit Hattrick für Mexiko',
    summary:'Beim 8:0 gegen Trinidad & Tobago erzielt Esca drei Tore. Nach 101 Länderspielen steht er bei 60 Treffern für Mexiko.',
    href:'presse.html?id=2041-10-01-finn-harps-laenderspielueberblick',entities:['emerson-escarcega','mexico','finn-harps','season-2041']
  });
})();