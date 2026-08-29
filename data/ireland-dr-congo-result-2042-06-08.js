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

  const date='2042-06-08';
  const matchId='2042-06-08-ireland-dr-congo-friendly';
  const reportId='2042-06-08-irland-dr-kongo-9-1-letzter-wm-test';

  const match={
    id:matchId,date,season:2042,competition:'Testländerspiel',
    home:'Irland',away:'Demokratische Republik Kongo',homeScore:9,awayScore:1,score:'9:1',halfTime:'7:0',
    venue:'Universitätssportplatz',location:'Limerick, Irland',attendance:1000,
    context:'Letztes Testländerspiel vor der FIFA World Cup 2042.',
    scorers:[
      {team:'Irland',player:'Justin Ramsey',goals:4,minutesKnown:[18,20,37],note:'Ein weiterer Ramsey-Treffer fällt zwischen Papinis 25. Minute und Ramseys Treffer in Minute 37; die exakte Minute ist im eingeblendeten Spielbericht nicht genannt.'},
      {team:'Irland',player:'Giacomo Papini',goals:1,minutes:[25]},
      {team:'Irland',player:'Brendan McHugh',goals:1,minutes:[40]},
      {team:'Irland',player:"Cormac O'Kane",goals:1,minutes:[43]},
      {team:'Irland',player:'Shane Fox',goals:1,minutes:[73]},
      {team:'Demokratische Republik Kongo',player:'Eden Mwamba',goals:1,minutes:[74]},
      {team:'Irland',player:'Callum Mooney',goals:1,minutes:[88]}
    ],
    events:[
      {minute:18,team:'Irland',type:'goal',player:'Justin Ramsey',text:'1:0'},
      {minute:20,team:'Irland',type:'goal',player:'Justin Ramsey',text:'2:0'},
      {minute:25,team:'Irland',type:'goal',player:'Giacomo Papini',text:'3:0'},
      {minute:null,team:'Irland',type:'goal',player:'Justin Ramsey',text:'Ramseys dritter Treffer; exakte Minute im Bericht nicht sichtbar'},
      {minute:37,team:'Irland',type:'goal',player:'Justin Ramsey',text:'Ramsey komplettiert seinen Viererpack'},
      {minute:40,team:'Irland',type:'goal',player:'Brendan McHugh',text:'6:0'},
      {minute:43,team:'Irland',type:'goal',player:"Cormac O'Kane",text:'7:0'},
      {minute:73,team:'Irland',type:'goal',player:'Shane Fox',text:'8:0'},
      {minute:74,team:'Demokratische Republik Kongo',type:'goal',player:'Eden Mwamba',text:'8:1'},
      {minute:88,team:'Irland',type:'goal',player:'Callum Mooney',text:'9:1'}
    ],
    ratings:{
      'Evan Reilly':7.1,'Callum Brennan':8.4,'Darcy Andrews':7.5,'Mareks Istrankins':7.4,'Kevin Kelly':7.0,
      'Callum Duggan':9.2,'Justin Ramsey':10.0,"Cormac O'Kane":8.2,'Giacomo Papini':8.5,'Brendan McHugh':9.4,
      'Callum Mooney':7.8,'Robert Boylan':6.9,'Brendan Costello':6.6,'Billy Walker':6.4,'Colum Winnall':6.8,
      'Ben Barry':6.9,'Shane Fox':7.1
    },
    assists:{'Callum Brennan':2,'Callum Duggan':3,'Giacomo Papini':1,'Brendan McHugh':1,'Robert Boylan':1,'Ben Barry':1},
    playerOfMatch:{player:'Justin Ramsey',team:'Irland',rating:10.0,goals:4,note:'Vier Tore im letzten Test vor der WM; perfekte 10,0.'},
    irelandStandouts:[
      {player:'Justin Ramsey',rating:10.0,goals:4,note:'Viererpack und perfekte Note 10,0.'},
      {player:'Brendan McHugh',rating:9.4,goals:1,assists:1,note:'Tor, Vorlage und starke 9,4.'},
      {player:'Callum Duggan',rating:9.2,assists:3,note:'Drei Vorlagen und 9,2.'},
      {player:'Giacomo Papini',rating:8.5,goals:1,assists:1,note:'Trifft in Minute 25 und liefert zusätzlich eine Vorlage.'},
      {player:'Callum Brennan',rating:8.4,assists:2,note:'Zwei Vorlagen aus der Defensive.'}
    ],
    analysis:{
      ramsey:'Der letzte Test wird zur Ramsey-Show: vier Tore, darunter Treffer in Minute 18, 20 und 37, dazu die perfekte Matchnote 10,0.',
      firstHalf:'Irland führt zur Pause bereits 7:0. Zwischen Minute 18 und 43 fallen sieben Treffer; die Partie ist damit noch vor der Pause vollständig entschieden.',
      harpsAxis:'Ramsey, Papini und O’Kane treffen, Brennan liefert zwei Vorlagen. Die Finn-Harps-Achse geht mit maximalem Selbstvertrauen in die Weltmeisterschaft.',
      depth:'Auch McHugh, Fox und Mooney tragen sich in die Torschützenliste ein. Duggan liefert drei Vorlagen und McHugh kommt auf Tor plus Assist.',
      caution:'Das 9:1 ist ein starkes Formsignal, aber als Test gegen einen klar unterlegenen Gegner nicht mit einem WM-Spiel gegen Brasilien gleichzusetzen.'
    },
    notes:[
      'Irland gewinnt den letzten Test vor der WM mit 9:1 gegen die Demokratische Republik Kongo.',
      'Zur Pause steht es bereits 7:0.',
      'Justin Ramsey erzielt vier Tore und erhält die perfekte Note 10,0.',
      'Giacomo Papini und Cormac O’Kane treffen ebenfalls.',
      'Callum Duggan liefert drei Vorlagen, Callum Brennan zwei.',
      'Eden Mwamba erzielt in Minute 74 den einzigen Treffer der DR Kongo.'
    ],
    sources:['FM-Spielerstatistiken Irland – DR Kongo · letzter WM-Test','90min.com Spielbericht · Irland 9:1 DR Kongo']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_IRELAND_MATCHES,match);

  Object.assign(window.FM_IRELAND,{
    title:'Irland 2042',season:2042,updated:'08.06.2042',competition:'Nationalmannschaft',
    lastMatch:match,
    latestMatch:{date,opponent:'Demokratische Republik Kongo',venue:'Universitätssportplatz · Limerick',result:'9:1',competition:'Testländerspiel'},
    latestHeadline:'WM-Generalprobe mit Torrausch: Irland schlägt die DR Kongo 9:1. Justin Ramsey trifft viermal und erhält die perfekte Note 10,0.',
    worldCupPreparation:{status:'Abgeschlossen',friendlies:[{date:'2042-06-02',opponent:'Kamerun',result:'4:0'},{date,opponent:'DR Kongo',result:'9:1'}],aggregate:'13:1',worldCupStart:'12.06.2042'},
    nextFocus:{competition:'FIFA World Cup 2042',stage:'Gruppenphase',group:'K',opponents:['Brasilien','China','Südafrika'],start:'12.06.2042'}
  });

  [
    {id:'2042-06-08-justin-ramsey-four-goals-dr-congo',date,player:'Justin Ramsey',type:'nationalteam',title:'Viererpack in der WM-Generalprobe',detail:'Trifft beim 9:1 gegen die DR Kongo viermal und erhält die perfekte Note 10,0.'},
    {id:'2042-06-08-giacomo-papini-dr-congo-goal',date,player:'Giacomo Papini',type:'nationalteam',title:'Papini trifft im letzten WM-Test',detail:'Erzielt in Minute 25 das 3:0 und erhält die Note 8,5.'},
    {id:'2042-06-08-cormac-okane-dr-congo-goal',date,player:"Cormac O'Kane",type:'nationalteam',title:'O’Kane trifft vor der WM',detail:'Erzielt in Minute 43 das 7:0 und erhält die Note 8,2.'},
    {id:'2042-06-08-callum-brennan-dr-congo-two-assists',date,player:'Callum Brennan',type:'nationalteam',title:'Brennan erneut mit zwei Vorlagen',detail:'Bereitet beim 9:1 zwei Treffer vor und erhält die Note 8,4.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date,competition:'Testländerspiel',fixtureDate:'Letzter Test vor der WM 2042',home:'Irland',away:'Demokratische Republik Kongo',score:'9:1',location:'Universitätssportplatz · Limerick · 1.000 Zuschauer',
    headline:'Mit neun Toren zur WM: Ramsey zerlegt die Generalprobe',
    subheadline:'Irland beendet die Vorbereitung mit einem 9:1 gegen die DR Kongo. Justin Ramsey trifft viermal und erhält die perfekte 10,0; schon zur Pause steht es 7:0.',
    label:'WM-GENERALPROBE · IRLAND 9:1 DR KONGO',
    heroStat:{label:'Justin Ramsey',value:'4 Tore · 10,0',note:'Viererpack im letzten Test vor der WM'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM'},
    intro:'Wenn ein letzter Test vor einer Weltmeisterschaft Selbstvertrauen liefern soll, hätte Irland das kaum deutlicher erledigen können. Gegen die Demokratische Republik Kongo entwickelt sich die Generalprobe schon in der ersten Halbzeit zum Torrausch. Nach 43 Minuten steht es 7:0, am Ende 9:1.',
    sections:[
      {title:'Ramsey braucht zwei Minuten für den Doppelschlag',text:'Justin Ramsey eröffnet in Minute 18 und legt schon in Minute 20 nach. Nach Papinis 3:0 in der 25. Minute trifft Ramsey noch zweimal und komplettiert noch vor der Pause seinen Viererpack. Die eingeblendete Spielzusammenfassung nennt für einen dieser beiden weiteren Treffer keine exakte Minute; der vierte fällt in Minute 37.'},
      {title:'Sieben vor der Pause',text:'Brendan McHugh trifft in Minute 40, Cormac O’Kane in Minute 43. Damit geht Irland mit einem 7:0 in die Kabine. Es ist keine Generalprobe mehr auf Messers Schneide, sondern eine Demonstration offensiver Wucht.'},
      {title:'Fox und Mooney legen nach',text:'Shane Fox erhöht in Minute 73, Eden Mwamba erzielt eine Minute später den Ehrentreffer für die DR Kongo. Callum Mooney setzt in Minute 88 den Schlusspunkt zum 9:1.'},
      {title:'Finn-Harps-Achse mit Rückenwind',text:'Ramsey erhält mit vier Toren die perfekte 10,0. Papini trifft und kommt auf 8,5, O’Kane erzielt ebenfalls ein Tor und erhält 8,2. Callum Brennan liefert zwei Vorlagen und eine 8,4. Die zentrale Achse aus Donegal reist damit mit maximalem Selbstvertrauen zur WM.'},
      {title:'Auch die Tiefe funktioniert',text:'Callum Duggan liefert drei Vorlagen und eine 9,2, Brendan McHugh kommt auf Tor und Vorlage bei 9,4. Irland hängt damit nicht nur an den großen Harps-Namen.'},
      {title:'13:1 aus den beiden Tests',text:'Nach dem 4:0 gegen Kamerun folgt ein 9:1 gegen die DR Kongo. Irland beendet seine unmittelbare WM-Vorbereitung damit mit zwei Siegen und 13:1 Toren. Das ist ein starkes Formsignal, auch wenn Brasilien, China und Südafrika in Gruppe K eine andere Prüfung darstellen werden.'}
    ],
    verdictHeading:'Mehr Selbstvertrauen kann man kaum einpacken',
    verdict:'Der Gegner erlaubt keine seriöse Hochrechnung auf die Weltmeisterschaft, aber Irland erledigt exakt das, was ein Favorit in so einem Test tun sollte: früh entscheiden, viele Chancen verwerten und mehrere Spieler in Rhythmus bringen. Ramsey reist nach seiner perfekten 10,0 als Mann der Generalprobe zur WM.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-06-08-ireland-dr-congo-9-1',date,season:2042,category:'Nationalteam',accent:'green',featured:true,
    eyebrow:'WM-GENERALPROBE · IRLAND 9:1 DR KONGO',
    title:'Neun Tore zum Abschied: Ramsey schießt Irland zur WM',
    summary:'Vier Tore und die perfekte 10,0 für Justin Ramsey. Irland führt zur Pause 7:0 und beendet die WM-Vorbereitung nach zwei Tests mit 13:1 Toren.',
    href:`presse.html?id=${reportId}`,
    entities:['ireland','dr-congo','justin-ramsey','giacomo-papini','cormac-okane','callum-brennan','world-cup-2042']
  });
})();