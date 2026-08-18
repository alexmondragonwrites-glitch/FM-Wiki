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
    {player:'Callum Bonner',nation:'Irland U19',opponent:'Kroatien U19',result:'0:1',date:'2041-11-19',minutes:27,rating:6.5,goals:0,assists:0},
    {player:'Gustavo da Silva',nation:'Portugal',opponent:'Montenegro',result:'1:1',date:'2041-11-19',minutes:62,rating:6.7,goals:0,assists:0},
    {player:'Dom Docherty',nation:'Schottland',opponent:'Iran',result:'0:1',date:'2041-11-19',minutes:76,rating:6.2,goals:0,assists:0},
    {player:'Emerson Escárcega',nation:'Mexiko',opponent:'USA',result:'2:2',date:'2041-11-19',minutes:90,rating:7.2,goals:1,assists:0,caps:105,nationalGoals:62},
    {player:'Daryl Frame',nation:'Schottland',opponent:'Iran',result:'0:1',date:'2041-11-19',minutes:45,rating:6.7,goals:0,assists:0,injury:'Kniedrehung',injuryLayoff:'5–7 Tage',injuryContext:'Beim Hinterherjagen des Balls verletzt; bereits die dritte Verletzung Frames im Nationalteam.'},
    {player:'Callum Hoey',nation:'Irland U19',opponent:'Kroatien U19',result:'0:1',date:'2041-11-19',minutes:63,rating:7.1,goals:0,assists:0},
    {player:'Eoin Kierans',nation:'Irland U18',opponent:'England U18',result:'2:3',date:'2041-11-19',minutes:90,rating:7.0,goals:0,assists:1},
    {player:'Amir Mašić',nation:'Schweiz',opponent:'Albanien',result:'1:1',date:'2041-11-19',minutes:90,rating:6.8,goals:0,assists:0},
    {player:'Callum Parke',nation:'Irland U18',opponent:'England U18',result:'2:3',date:'2041-11-19',minutes:90,rating:6.6,goals:0,assists:0}
  ];

  const roundup={
    id:'2041-11-19-finn-harps-international-duty',date:'2041-11-19',type:'Länderspielüberblick',results,
    headline:'Escárcega trifft gegen die USA – Frame kehrt verletzt zurück',
    summary:'Neun Finn-Harps-Spieler sind am 19. November international im Einsatz. Emerson Escárcega erzielt beim 2:2 Mexikos gegen die USA sein 62. Länderspieltor. Eoin Kierans liefert für Irlands U18 eine Vorlage, Callum Hoey überzeugt bei der U19. Daryl Frame erleidet bei Schottlands 0:1 gegen Iran eine Kniedrehung.',
    sources:['FM-Länderspielüberblick Finn Harps · 19.11.2041','FM-Medizinischer Bericht Daryl Frame · 19.11.2041']
  };
  upsert(window.FM_INTERNATIONAL_DUTY,roundup);

  [
    {id:'2041-11-19-callum-bonner-croatia-u19',date:'2041-11-19',player:'Callum Bonner',type:'nationalteam',title:'27 Minuten für Irlands U19',detail:'Kommt beim 0:1 gegen Kroatiens U19 auf 27 Minuten und erhält Note 6,5.'},
    {id:'2041-11-19-gustavo-da-silva-montenegro',date:'2041-11-19',player:'Gustavo da Silva',type:'nationalteam',title:'Remis mit Portugal',detail:'Spielt beim 1:1 Portugals gegen Montenegro 62 Minuten und erhält Note 6,7.'},
    {id:'2041-11-19-dom-docherty-iran',date:'2041-11-19',player:'Dom Docherty',type:'nationalteam',title:'Niederlage mit Schottland',detail:'Steht beim 0:1 Schottlands gegen Iran 76 Minuten auf dem Platz und erhält Note 6,2.'},
    {id:'2041-11-19-escarcega-usa',date:'2041-11-19',player:'Emerson Escárcega',type:'nationalteam',title:'62. Länderspieltor',detail:'Trifft beim 2:2 Mexikos gegen die USA, spielt 90 Minuten und erhält Note 7,2. Nach 105 Länderspielen steht er bei 62 Toren.'},
    {id:'2041-11-19-daryl-frame-iran-injury',date:'2041-11-19',player:'Daryl Frame',type:'injury',title:'Kniedrehung im Nationalteam',detail:'Verletzt sich bei Schottlands 0:1 gegen Iran beim Hinterherjagen des Balls. Der medizinische Bericht nennt 5–7 Tage Ausfall. Es ist bereits Frames dritte Verletzung bei der Nationalmannschaft.'},
    {id:'2041-11-19-callum-hoey-croatia-u19',date:'2041-11-19',player:'Callum Hoey',type:'nationalteam',title:'Starker U19-Auftritt',detail:'Spielt beim 0:1 gegen Kroatiens U19 63 Minuten und erhält mit 7,1 eine der besten Harps-Noten des Tages.'},
    {id:'2041-11-19-eoin-kierans-england-u18',date:'2041-11-19',player:'Eoin Kierans',type:'nationalteam',title:'Vorlage gegen England U18',detail:'Spielt beim 2:3 von Irlands U18 gegen England über 90 Minuten, bereitet ein Tor vor und erhält Note 7,0.'},
    {id:'2041-11-19-amir-masic-albania',date:'2041-11-19',player:'Amir Mašić',type:'nationalteam',title:'90 Minuten für die Schweiz',detail:'Spielt beim 1:1 der Schweiz gegen Albanien über die volle Distanz und erhält Note 6,8.'},
    {id:'2041-11-19-callum-parke-england-u18',date:'2041-11-19',player:'Callum Parke',type:'nationalteam',title:'Volle Distanz gegen England U18',detail:'Spielt beim 2:3 von Irlands U18 gegen England 90 Minuten und erhält Note 6,6.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:'2041-11-19-finn-harps-laenderspielueberblick',type:'Länderspielüberblick',date:'2041-11-19',competition:'Länderspiele',
    headline:'Esca trifft, Kierans assistiert – Frame verletzt sich für Schottland',
    subheadline:'Neun Harps-Akteure sind international unterwegs. Escárcega bleibt für Mexiko torgefährlich, mehrere Talente sammeln Jugend-Länderspielminuten, doch Daryl Frames Kniedrehung trübt den Abend.',
    label:'FINN HARPS · LÄNDERSPIELE · 19. NOVEMBER 2041',
    heroStat:{label:'Emerson Escárcega',value:'1 Tor · Note 7,2',note:'USA 2:2 Mexiko · 105 Lsp / 62 Tore'},
    backlink:{href:'kader.html',label:'← ZUM KADER'},
    intro:'Der internationale Block endet für Finn Harps mit einem gemischten Bild. Emerson Escárcega liefert beim 2:2 gegen die USA erneut ein Tor und schraubt seine mexikanische Bilanz auf 62 Treffer in 105 Länderspielen. Dahinter sammeln mehrere junge Harps-Spieler wertvolle Minuten. Der Preis des Abends ist Daryl Frame: Der 20-Jährige verletzt sich im schottischen Spiel gegen Iran am Knie.',
    sections:[
      {title:'Escárcega bleibt Mexikos Fixpunkt',text:'Beim 2:2 gegen die USA spielt Escárcega 90 Minuten, trifft einmal und erhält Note 7,2. Mit 105 Länderspielen und 62 Toren wächst seine ohnehin außergewöhnliche Bilanz weiter.'},
      {title:'Kierans liefert gegen England',text:'Eoin Kierans absolviert für Irlands U18 die vollen 90 Minuten beim knappen 2:3 gegen England und steuert eine Vorlage bei. Callum Parke spielt dieselbe Partie ebenfalls komplett.'},
      {title:'Hoey überzeugt trotz U19-Niederlage',text:'Callum Hoey kommt gegen Kroatiens U19 auf 63 Minuten und Note 7,1. Callum Bonner sammelt in derselben Partie 27 Minuten.'},
      {title:'Da Silva und Mašić mit Remis',text:'Gustavo da Silva spielt 62 Minuten beim portugiesischen 1:1 gegen Montenegro. Amir Mašić steht beim 1:1 der Schweiz gegen Albanien über die volle Distanz auf dem Platz.'},
      {title:'Schottland verliert – Frame verletzt sich',text:'Dom Docherty spielt beim 0:1 gegen Iran 76 Minuten. Daryl Frame muss nach 45 Minuten raus und erhält anschließend die Diagnose Kniedrehung. Der medizinische Bericht rechnet mit fünf bis sieben Tagen Pause.'},
      {title:'Bei Frame wird das Muster langsam auffällig',text:'Laut medizinischem Bericht ist dies bereits seine dritte Verletzung im Umfeld der schottischen Nationalmannschaft. Die aktuelle Blessur ist kurz, aber bei einem Schlüsselspieler mit hoher Belastung bleibt die Wiederholung bemerkenswert.'}
    ],
    verdictHeading:'Viel Entwicklung, ein kleiner Warnblinker',
    verdict:'Sportlich ist der Block stark: Escárcega liefert weiter auf Weltklasse-Niveau für Mexiko und die nächste Harps-Generation sammelt internationale Minuten. Frames Verletzung ist voraussichtlich nur eine kurze Unterbrechung, doch dass sie bereits die dritte im Nationalteam ist, macht Belastungssteuerung bei künftigen Abstellungen zu einem Thema.',
    sources:roundup.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2041-11-19-finn-harps-international-duty',date:'2041-11-19',season:2041,category:'Nationalteam',accent:'green',featured:false,
    eyebrow:'LÄNDERSPIELE · FINN HARPS',title:'Esca trifft – Frame kehrt verletzt zurück',
    summary:'Escárcega erzielt gegen die USA sein 62. Länderspieltor. Kierans assistiert für Irlands U18, während Daryl Frame mit einer Kniedrehung zurückkehrt.',
    href:'presse.html?id=2041-11-19-finn-harps-laenderspielueberblick',entities:['emerson-escarcega','daryl-frame','eoin-kierans','finn-harps','season-2041']
  });
})();