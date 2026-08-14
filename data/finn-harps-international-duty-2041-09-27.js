(()=>{
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_INTERNATIONAL_DUTY=window.FM_INTERNATIONAL_DUTY||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const duty={
    id:'2041-09-27-finn-harps-international-duty',
    date:'2041-09-27',
    title:'Länderspielüberblick der Finn-Harps-Spieler',
    headline:'Escárcega trifft doppelt für Mexiko und erreicht 100 Länderspiele',
    matches:[
      {player:'Torric Bruce',nation:'Ghana',opponent:'Gabun',venue:'Auswärts',result:'0:1',minutes:90,rating:6.3,goals:0,assists:0},
      {player:'Dom Docherty',nation:'Schottland',opponent:'Südkorea',venue:'Auswärts',result:'1:3',minutes:55,rating:7.8,goals:1,assists:0,injured:true},
      {player:'Emerson Escárcega',nation:'Mexiko',opponent:'Costa Rica',venue:'Auswärts',result:'3:0',minutes:86,rating:8.6,goals:2,assists:0,milestone:'100. A-Länderspiel · 57 Länderspieltore'},
      {player:'Diego Fernández',nation:'Argentinien',opponent:'Uruguay',venue:'Auswärts',result:'1:2',minutes:45,rating:6.4,goals:0,assists:0},
      {player:'Daryl Frame',nation:'Schottland',opponent:'Südkorea',venue:'Auswärts',result:'1:3',minutes:90,rating:7.0,goals:0,assists:0},
      {player:'Paulo Henrique',nation:'Brasilien',opponent:'Peru',venue:'Auswärts',result:'4:0',minutes:90,rating:7.8,goals:0,assists:0}
    ],
    notable:{player:'Emerson Escárcega',text:'Zwei Tore beim 3:0 gegen Costa Rica, Note 8,6. Nach dem Spiel steht er bei 100 Länderspielen und 57 Toren für Mexiko.'},
    injury:{player:'Dom Docherty',text:'Verletzt sich beim 1:3 Schottlands gegen Südkorea und wird nach 55 Minuten geführt. Eine genaue Diagnose oder Ausfallzeit ist im Bericht nicht angegeben.'},
    sources:['FM-Länderspielüberblick Finn Harps · 27.09.2041']
  };
  upsert(window.FM_INTERNATIONAL_DUTY,duty);

  [
    {id:'2041-09-27-emerson-escarcega-mexico-100-caps',date:'2041-09-27',player:'Emerson Escárcega',type:'nationalteam',title:'100 Länderspiele für Mexiko',detail:'Erreicht beim 3:0 gegen Costa Rica sein 100. A-Länderspiel und trifft doppelt. Damit steht er bei 57 Länderspieltoren.'},
    {id:'2041-09-27-dom-docherty-scotland-goal-injury',date:'2041-09-27',player:'Dom Docherty',type:'nationalteam',title:'Tor für Schottland, danach verletzt',detail:'Trifft beim 1:3 gegen Südkorea, wird mit 7,8 bewertet und nach 55 Minuten verletzt geführt. Eine genaue Diagnose ist noch nicht bekannt.'},
    {id:'2041-09-27-daryl-frame-scotland',date:'2041-09-27',player:'Daryl Frame',type:'nationalteam',title:'90 Minuten für Schottland',detail:'Spielt beim 1:3 gegen Südkorea durch und erhält die Note 7,0.'},
    {id:'2041-09-27-paulo-henrique-brazil',date:'2041-09-27',player:'Paulo Henrique',type:'nationalteam',title:'4:0 mit Brasilien',detail:'Spielt beim 4:0 gegen Peru 90 Minuten und wird mit 7,8 bewertet.'},
    {id:'2041-09-27-torric-bruce-ghana',date:'2041-09-27',player:'Torric Bruce',type:'nationalteam',title:'90 Minuten für Ghana',detail:'Spielt bei der 0:1-Niederlage gegen Gabun durch und erhält die Note 6,3.'},
    {id:'2041-09-27-diego-fernandez-argentina',date:'2041-09-27',player:'Diego Fernández',type:'nationalteam',title:'45 Minuten für Argentinien',detail:'Kommt bei der 1:2-Niederlage gegen Uruguay auf 45 Minuten und die Note 6,4.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const escarcega=(window.FM_PLAYERS||[]).find(p=>p.id==='emerson-escarcega'||p.name==='Emerson Escárcega');
  if(escarcega){
    escarcega.international={...(escarcega.international||{}),nation:'Mexiko',caps:100,goals:57,updated:'2041-09-27'};
    escarcega.careerNarrative=escarcega.careerNarrative||[];
    const note='27.09.2041: Emerson Escárcega erzielt beim 3:0 Mexikos gegen Costa Rica zwei Tore, erreicht sein 100. A-Länderspiel und steht nun bei 57 Treffern für Mexiko.';
    if(!escarcega.careerNarrative.includes(note))escarcega.careerNarrative.push(note);
  }

  const docherty=(window.FM_PLAYERS||[]).find(p=>p.id==='dom-docherty'||p.name==='Dom Docherty');
  if(docherty){
    docherty.injuryStatus={date:'2041-09-27',injury:'Verletzung im Länderspiel',recovery:'Noch nicht bekannt',context:'Schottland gegen Südkorea'};
    docherty.careerNarrative=docherty.careerNarrative||[];
    const note='27.09.2041: Dom Docherty trifft für Schottland beim 1:3 gegen Südkorea, zieht sich im Länderspiel jedoch eine Verletzung zu. Diagnose und Ausfallzeit sind im vorliegenden Bericht noch nicht angegeben.';
    if(!docherty.careerNarrative.includes(note))docherty.careerNarrative.push(note);
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-09-27';
    season.latestHeadline='Länderspielpause: Escárcega trifft doppelt bei seinem 100. Mexiko-Länderspiel, Dom Docherty verletzt sich für Schottland.';
    season.changes=season.changes||{notes:[]};
    const note='27.09.2041: Länderspielüberblick. Escárcega erzielt beim 3:0 Mexikos gegen Costa Rica zwei Tore und erreicht 100 A-Länderspiele/57 Tore. Docherty trifft für Schottland, verletzt sich jedoch. Bruce, Frame, Fernández und Paulo Henrique ebenfalls im Einsatz.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  const report={
    id:'2041-09-27-finn-harps-laenderspielueberblick',type:'Länderspielüberblick',date:'2041-09-27',competition:'Nationalmannschaften',
    headline:'Escárcega feiert 100. Länderspiel mit Doppelpack',
    subheadline:'Der Finn-Harps-Stürmer trifft beim 3:0 Mexikos gegen Costa Rica zweimal und steht nun bei 57 Länderspieltoren. Dom Docherty trifft für Schottland, zieht sich dabei aber eine Verletzung zu.',
    label:'FINN HARPS · LÄNDERSPIELPAUSE · 27.09.2041',
    heroStat:{label:'Emerson Escárcega',value:'100 Lsp · 57 Tore',note:'2 Tore gegen Costa Rica · Note 8,6'},
    backlink:{href:'kader.html',label:'← ZUM KADER'},
    intro:'Während Irland in der WM-Qualifikation Aserbaidschan mit 8:1 schlägt, sind weitere Finn-Harps-Spieler rund um den Globus im Einsatz. Der größte Moment gehört Emerson Escárcega, der sein 100. Länderspiel für Mexiko mit zwei Toren krönt.',
    sections:[
      {title:'Escárcega schreibt das nächste Kapitel',text:'Mexiko gewinnt 3:0 bei Costa Rica. Escárcega spielt 86 Minuten, erzielt zwei Tore und erhält die Note 8,6. Nach der Partie steht der 31-Jährige bei 100 A-Länderspielen und 57 Toren.'},
      {title:'Docherty trifft und verletzt sich',text:'Dom Docherty erzielt beim 1:3 Schottlands gegen Südkorea ein Tor und wird trotz Niederlage mit 7,8 bewertet. Gleichzeitig meldet der Länderspielüberblick eine Verletzung. Eine genaue Diagnose oder Ausfallzeit ist noch nicht angegeben.'},
      {title:'Frame spielt für Schottland durch',text:'Daryl Frame absolviert gegen Südkorea 90 Minuten und erhält die Note 7,0.'},
      {title:'Paulo Henrique mit souveränem Brasilien-Abend',text:'Brasilien gewinnt 4:0 gegen Peru. Paulo Henrique spielt die gesamte Partie und kommt auf eine Bewertung von 7,8.'},
      {title:'Bruce und Fernández verlieren ihre Spiele',text:'Torric Bruce absolviert 90 Minuten bei Ghanas 0:1 gegen Gabun und wird mit 6,3 bewertet. Diego Fernández spielt 45 Minuten bei Argentiniens 1:2 gegen Uruguay und erhält die Note 6,4.'}
    ],
    verdictHeading:'Ein großer Abend für Esca, ein neuer Verletzungsschatten für die Harps',
    verdict:'Der Länderspielblock zeigt erneut, wie international der Harps-Kader inzwischen geworden ist. Escárcegas 100. Länderspiel und 57. Treffer sind ein Karriere-Meilenstein. Gleichzeitig erhöht Dochertys Verletzung nach Papinis Ausfall die personellen Sorgen während der Nationalmannschaftsphase.',
    sources:['FM-Länderspielüberblick Finn Harps · 27.09.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-09-27-finn-harps-laenderspielueberblick',date:'2041-09-27',season:2041,category:'Nationalteams',accent:'green',featured:true,
    eyebrow:'FINN HARPS · LÄNDERSPIELPAUSE',title:'Escárcega: 100 Länderspiele und Doppelpack für Mexiko',
    summary:'Escárcega trifft beim 3:0 gegen Costa Rica doppelt und steht nun bei 57 Mexiko-Toren. Docherty trifft für Schottland, verletzt sich aber; Frame, Bruce, Fernández und Paulo Henrique sind ebenfalls im Einsatz.',
    href:'presse.html?id=2041-09-27-finn-harps-laenderspielueberblick',entities:['finn-harps','emerson-escarcega','dom-docherty','daryl-frame','torric-bruce','diego-fernandez','paulo-henrique','season-2041']
  });
})();