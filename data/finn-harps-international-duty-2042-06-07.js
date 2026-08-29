(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_IRELAND_MATCHES=window.FM_IRELAND_MATCHES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_IRELAND=window.FM_IRELAND||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-06-07';
  const oldDate='2042-06-08';

  // Korrektur: Der letzte WM-Test gegen die DR Kongo fand laut Länderspielübersicht am 07.06.2042 statt.
  const fixMatch=(match)=>{
    if(!match)return;
    if(match.id==='2042-06-08-ireland-dr-congo-friendly'||(match.home==='Irland'&&match.away==='Demokratische Republik Kongo'&&match.score==='9:1')){
      match.id='2042-06-07-ireland-dr-congo-friendly';
      match.date=date;
      if(Array.isArray(match.sources))match.sources=match.sources.map(source=>String(source).replace('08.06.2042','07.06.2042'));
    }
  };
  window.FM_MATCHES.forEach(fixMatch);
  window.FM_IRELAND_MATCHES.forEach(fixMatch);

  const report=window.FM_PRESS_REPORTS.find(item=>item&&item.id==='2042-06-08-irland-dr-kongo-9-1-letzter-wm-test');
  if(report){
    report.id='2042-06-07-irland-dr-kongo-9-1-letzter-wm-test';
    report.date=date;
    report.fixtureDate='Sonntag, 07.06.2042 · letzter Test vor der WM';
  }

  const news=window.FM_NEWS.find(item=>item&&item.id==='2042-06-08-ireland-dr-congo-9-1');
  if(news){
    news.id='2042-06-07-ireland-dr-congo-9-1';
    news.date=date;
    news.href='presse.html?id=2042-06-07-irland-dr-kongo-9-1-letzter-wm-test';
  }

  window.FM_PLAYER_UPDATES.forEach(item=>{
    if(!item||item.date!==oldDate)return;
    if(['Justin Ramsey','Giacomo Papini',"Cormac O'Kane",'Callum Brennan'].includes(item.player)){
      item.date=date;
      if(typeof item.id==='string')item.id=item.id.replace('2042-06-08','2042-06-07');
    }
  });

  if(window.FM_IRELAND.latestMatch&&window.FM_IRELAND.latestMatch.result==='9:1')window.FM_IRELAND.latestMatch.date=date;
  if(window.FM_IRELAND.updated==='08.06.2042')window.FM_IRELAND.updated='07.06.2042';
  if(window.FM_IRELAND.worldCupPreparation&&Array.isArray(window.FM_IRELAND.worldCupPreparation.friendlies)){
    window.FM_IRELAND.worldCupPreparation.friendlies=window.FM_IRELAND.worldCupPreparation.friendlies.map(item=>item&&item.result==='9:1'?{...item,date}:item);
  }

  const duty=[
    {player:'Ben Barry',nation:'Irland',opponent:'DR Kongo',result:'9:1',minutes:45,rating:6.9,goals:0,assists:1},
    {player:'Callum Brennan',nation:'Irland',opponent:'DR Kongo',result:'9:1',minutes:45,rating:8.4,goals:0,assists:2},
    {player:'Torric Bruce',nation:'Ghana',opponent:'Schottland',result:'2:1',minutes:90,rating:6.9,goals:0,assists:0},
    {player:'Dom Docherty',nation:'Schottland',opponent:'Ghana',result:'1:2',minutes:78,rating:6.5,goals:0,assists:0},
    {player:'Daryl Frame',nation:'Schottland',opponent:'Ghana',result:'1:2',minutes:65,rating:6.5,goals:0,assists:0},
    {player:'Mareks Istrankins',nation:'Irland',opponent:'DR Kongo',result:'9:1',minutes:90,rating:7.4,goals:0,assists:0},
    {player:'Kevin Kelly',nation:'Irland',opponent:'DR Kongo',result:'9:1',minutes:45,rating:7.0,goals:0,assists:0},
    {player:'Amir Mašić',nation:'Schweiz',opponent:'Jamaika',result:'1:1',minutes:90,rating:6.4,goals:0,assists:0},
    {player:'Pol Muñoz',nation:'Spanien',opponent:'Senegal',result:'4:0',minutes:90,rating:8.5,goals:1,assists:1},
    {player:"Cormac O'Kane",nation:'Irland',opponent:'DR Kongo',result:'9:1',minutes:45,rating:8.2,goals:1,assists:0},
    {player:'Giacomo Papini',nation:'Irland',opponent:'DR Kongo',result:'9:1',minutes:45,rating:8.5,goals:1,assists:1},
    {player:'Justin Ramsey',nation:'Irland',opponent:'DR Kongo',result:'9:1',minutes:45,rating:10.0,goals:4,assists:0},
    {player:'Evan Reilly',nation:'Irland',opponent:'DR Kongo',result:'9:1',minutes:90,rating:7.1,goals:0,assists:0},
    {player:'Billy Walker',nation:'Irland',opponent:'DR Kongo',result:'9:1',minutes:45,rating:6.4,goals:0,assists:0}
  ];

  duty.forEach(entry=>{
    const slug=entry.player.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
    upsert(window.FM_PLAYER_UPDATES,{
      id:`2042-06-07-${slug}-international-duty`,date,player:entry.player,type:'nationalteam',
      title:`${entry.player}: ${entry.nation} ${entry.result} gegen ${entry.opponent}`,
      detail:`${entry.minutes} Minuten · Note ${entry.rating.toFixed(1).replace('.',',')} · ${entry.goals} Tore · ${entry.assists} Vorlagen.`,
      international:entry
    });
  });

  const roundupId='2042-06-07-harps-international-roundup-world-cup-prep';
  upsert(window.FM_PRESS_REPORTS,{
    id:roundupId,type:'Länderspielüberblick',date,competition:'WM-Vorbereitung 2042',fixtureDate:'07.06.2042',
    headline:'Harps rund um die Welt: Pol setzt Spaniens letztes WM-Signal',
    subheadline:'Während Irland die DR Kongo 9:1 schlägt, überzeugt Pol Muñoz beim spanischen 4:0 gegen Senegal mit Tor und Vorlage. Bruce gewinnt mit Ghana das direkte Harps-Duell gegen Frame und Docherty.',
    label:'HARPS INTERNATIONAL · WM-VORBEREITUNG',
    heroStat:{label:'Pol Muñoz für Spanien',value:'1 Tor · 1 Vorlage · 8,5',note:'90 Minuten beim 4:0 gegen Senegal'},
    backlink:{href:'kader.html',label:'← ZUM KADER'},
    intro:'Am letzten großen Länderspieltag vor der WM verteilen sich die Finn-Harps-Spieler wieder über mehrere Nationalmannschaften. Die größte Einzelgeschichte außerhalb Irlands liefert Pol Muñoz: 90 Minuten, ein Tor, eine Vorlage und die Note 8,5 beim 4:0 Spaniens gegen Senegal.',
    sections:[
      {title:'Pol Muñoz macht aus der Nominierung eine echte Bewerbung',text:'Der 21-Jährige spielt gegen Senegal durch und steuert beim spanischen 4:0 ein Tor und eine Vorlage bei. Nach seinem ungewöhnlichen Weg über Coventry und Finn Harps ist das unmittelbar vor der WM das bislang deutlichste sportliche Ausrufezeichen im spanischen Trikot.'},
      {title:'Harps gegen Harps: Ghana schlägt Schottland',text:'Torric Bruce absolviert beim 2:1 Ghanas gegen Schottland die vollen 90 Minuten und erhält die Note 6,9. Auf schottischer Seite kommen Dom Docherty auf 78 Minuten und Daryl Frame auf 65 Minuten; beide erhalten 6,5.'},
      {title:'Mašić mit kompletter Partie für die Schweiz',text:'Amir Mašić spielt beim 1:1 der Schweiz gegen Jamaika über 90 Minuten und wird mit 6,4 bewertet.'},
      {title:'Irlands Harps-Achse geht heiß ins Turnier',text:'Ramsey trifft beim 9:1 viermal und erhält 10,0. Papini kommt auf Tor und Vorlage bei 8,5, O’Kane trifft bei 8,2, Brennan liefert zwei Vorlagen bei 8,4. Istrankins spielt 90 Minuten und erhält 7,4; Reilly ebenfalls 90 Minuten bei 7,1.'},
      {title:'Belastung bleibt verteilt',text:'Barry, Brennan, Kelly, O’Kane, Papini, Ramsey und Walker kommen jeweils auf 45 Minuten. Damit sammelt ein großer Teil der Harps-Achse Rhythmus, ohne im letzten Test über die volle Distanz gehen zu müssen.'}
    ],
    verdictHeading:'Zwanzig WM-Fahrer, mehrere sofort in Form',
    verdict:'Der internationale Harps-Block reist nicht nur zahlenmäßig stark zur WM. Besonders Pol Muñoz liefert für Spanien ein Signal, das aus seiner überraschenden Nominierung eine ernsthafte Option macht. Gleichzeitig kommt Irlands Kern mit einer außergewöhnlich torreichen Generalprobe zum Turnier.',
    sources:['FM-Länderspielüberblick der Finn-Harps-Akteure · 07.06.2042']
  });

  upsert(window.FM_NEWS,{
    id:'2042-06-07-harps-international-roundup',date,season:2042,category:'Nationalspieler',accent:'green',featured:false,
    eyebrow:'HARPS INTERNATIONAL · 7. JUNI 2042',
    title:'Pol glänzt für Spanien, Bruce gewinnt Harps-Duell',
    summary:'Pol Muñoz liefert beim 4:0 gegen Senegal Tor und Vorlage. Ghana mit Torric Bruce schlägt Schottland mit Docherty und Frame 2:1; Mašić spielt 90 Minuten für die Schweiz.',
    href:`presse.html?id=${roundupId}`,
    entities:['pol-munoz','torric-bruce','dom-docherty','daryl-frame','amir-masic','world-cup-2042']
  });
})();