(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-07-25';
  const fixtureId='2042-07-25-derry-city-finn-harps-premier-division';
  const reportId='2042-07-25-derry-city-finn-harps-1-4-post-world-cup-return';

  const match={
    id:fixtureId,date,season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'derry-city',name:'Derry City',short:'DER',score:1},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:4},
    score:'1:4',homeGoals:1,awayGoals:4,halfTime:'0:3',
    venue:'Ryan McBride Brandywell',location:'Derry, Irland',attendance:7381,awayFans:369,weather:'Wolkig · 23 °C',referee:'Robert Hennessy',
    headline:'Zurück aus der WM, sofort wieder dominant: Finn Harps gewinnen das North-West-Derby 4:1',
    verdict:'Fünf Tage nach dem WM-Finale kehrt der Harps-Kern in den Liga-Alltag zurück und liefert sofort wieder ab. Jake Roberts und Torric Bruce stellen früh auf 2:0, Weltmeister Emerson Escárcega verwandelt noch vor der Pause einen Elfmeter und Neuzugang Alejandro López krönt sein Ligadebüt mit seinem ersten Tor für Finn Harps. Mit 16:5 Schüssen, 63 Prozent Ballbesitz und 3,36 xG gewinnen die Harps in Derry klar und bauen ihre Serie auf elf Ligasiege in Folge aus.',
    scorers:[
      {player:'Jake Roberts',team:'Finn Harps',goals:1,minutes:[20]},
      {player:'Torric Bruce',team:'Finn Harps',goals:1,minutes:[29]},
      {player:'Emerson Escárcega',team:'Finn Harps',goals:1,minutes:[42],penaltyMinutes:[42]},
      {player:'Andy Clark',team:'Derry City',goals:1,minutes:[60]},
      {player:'Alejandro López',team:'Finn Harps',goals:1,minutes:[81]}
    ],
    events:[
      {minute:8,type:'yellow',team:'Derry City',player:'Kel Eire',text:'Gelbe Karte'},
      {minute:20,type:'goal',team:'Finn Harps',player:'Jake Roberts',text:'0:1'},
      {minute:27,type:'yellow',team:'Derry City',player:'Sébastien Barbier',text:'Gelbe Karte'},
      {minute:29,type:'goal',team:'Finn Harps',player:'Torric Bruce',text:'0:2'},
      {minute:34,type:'yellow',team:'Derry City',player:'Paddy Ireland',text:'Gelbe Karte'},
      {minute:42,type:'penalty-goal',team:'Finn Harps',player:'Emerson Escárcega',text:'0:3 · Elfmeter'},
      {minute:60,type:'goal',team:'Derry City',player:'Andy Clark',text:'1:3'},
      {minute:68,type:'yellow',team:'Derry City',player:'Wandilo Mbatha',text:'Gelbe Karte'},
      {minute:68,type:'yellow',team:'Finn Harps',player:'Gustavo da Silva',text:'Gelbe Karte'},
      {minute:81,type:'goal',team:'Finn Harps',player:'Alejandro López',text:'1:4'}
    ],
    stats:[
      {label:'Schüsse',home:5,away:16,kind:'number'},
      {label:'Schüsse aufs Tor',home:2,away:5,kind:'number'},
      {label:'xG',home:1.77,away:3.36,kind:'decimal'},
      {label:'Ballbesitz',home:37,away:63,kind:'percent'},
      {label:'Ecken',home:2,away:12,kind:'number'},
      {label:'Fouls',home:17,away:13,kind:'number'},
      {label:'Passquote',home:82,away:87,kind:'percent'},
      {label:'Gelbe Karten',home:4,away:1,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'}
    ],
    ratings:{
      'Paulo Henrique':7.2,'Diego Fernández':6.9,'Torric Bruce':7.7,'Gustavo da Silva':6.4,'Raúl':6.8,
      'Amir Mašić':6.9,'Daryl Frame':6.7,'Jake Roberts':7.4,'Billy Walker':7.7,'Dom Docherty':6.7,
      'Emerson Escárcega':7.2,'Daniele Di Maio':6.6,'Giacomo Papini':6.8,'Ben Barry':6.7,'Alejandro López':7.4,'Pol Muñoz':6.8
    },
    standout:{player:'Torric Bruce',team:'Finn Harps',rating:7.7,goals:1,note:'Trifft zum 2:0 und fällt zusätzlich durch starke Ballrückeroberungen auf.'},
    otherStandouts:[
      {player:'Billy Walker',rating:7.7,assists:2,note:'Zwei Vorlagen und viel Einfluss aus dem Mittelfeld.'},
      {player:'Jake Roberts',rating:7.4,goals:1,note:'Eröffnet den Torreigen in Minute 20.'},
      {player:'Alejandro López',rating:7.4,goals:1,note:'Ligadebüt und direkt das erste Tor für Finn Harps.'}
    ],
    form:{leagueWinningStreak:11,positionAfterMatch:1},
    milestones:[
      {player:'Raúl',achievement:'Ligadebüt für Finn Harps'},
      {player:'Amir Mašić',achievement:'100. Ligaspiel für Finn Harps'},
      {player:'Daniele Di Maio',achievement:'125. Profispiel'},
      {player:'Alejandro López',achievement:'Ligadebüt für Finn Harps'},
      {player:'Alejandro López',achievement:'1. Tor für Finn Harps'},
      {player:'Pol Muñoz',achievement:'150. Ligaspiel seiner Karriere'}
    ],
    analysis:{
      returnFromWorldCup:'Der Übergang vom WM-Finale zurück in den Vereinsfußball gelingt ohne Anlaufzeit. Mehrere WM-Fahrer stehen direkt wieder auf dem Platz, doch die Harps wirken weder müde noch emotional leer.',
      escarcega:'Emerson Escárcega kehrt als frischgebackener Weltmeister zurück und trifft sofort wieder für Finn Harps. Sein Elfmeter zum 3:0 in Minute 42 macht die erste Halbzeit praktisch perfekt.',
      newFaces:'Raúl feiert sein Ligadebüt. Alejandro López kommt ebenfalls erstmals in der Liga für Finn Harps zum Einsatz und setzt mit dem 4:1 in Minute 81 direkt seinen ersten Treffer.',
      depth:'Der Sieg wird nicht nur von den großen WM-Namen getragen. Jake Roberts und Torric Bruce sorgen für die ersten beiden Tore, Billy Walker liefert zwei Vorlagen. Genau diese Breite macht den Auftritt nach dem langen Nationalmannschaftssommer besonders stark.',
      league:'Der elfte Ligasieg in Folge bringt Finn Harps auf Platz eins und zeigt, dass die WM-Unterbrechung den Rhythmus der Mannschaft nicht gebrochen hat.'
    },
    notes:[
      'Erstes Ligaspiel nach der WM-Rückkehr: Derry City 1:4 Finn Harps.',
      'Zur Pause führen die Harps bereits 3:0.',
      'Jake Roberts 20., Torric Bruce 29., Emerson Escárcega 42. per Elfmeter, Alejandro López 81.',
      'Andy Clark erzielt in Minute 60 Derrys Ehrentreffer.',
      'Finn Harps gewinnt 16:5 nach Schüssen und 3,36:1,77 nach xG.',
      '63 Prozent Ballbesitz und zwölf Ecken unterstreichen die Kontrolle.',
      'Elfter Ligasieg in Folge; Finn Harps steht auf Platz eins.',
      'Raúl gibt sein Ligadebüt für Finn Harps.',
      'Alejandro López gibt sein Ligadebüt und erzielt sein erstes Tor für Finn Harps.'
    ],
    sources:['FM-Spielübersicht Derry City – Finn Harps · 25.07.2042','Finn-Harps-Spielerstatistiken · 25.07.2042','FourFourTwo · Premier Division: Finn Harps gewinnt North-West-Derby nach Machtdemonstration']
  };

  upsert(window.FM_MATCHES,match);

  const fixtureArray=['2042-07-25','19:45','Derry City','Auswärts','4:1','Premier Division',0];
  const oldIdx=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[2]==='Derry City'&&x[5]==='Premier Division'&&x[0]===date);
  if(oldIdx>=0)window.FM_FIXTURES[oldIdx]=fixtureArray;else window.FM_FIXTURES.push(fixtureArray);

  const derry=window.FM_CLUBS.find(x=>x.id==='derry-city'||x.name==='Derry City'||x.name==='Derry City FC');
  if(derry){
    derry.meetings=derry.meetings||[];
    const meeting={date:'25.07.2042',competition:'Premier Division',venue:'A',result:'4:1'};
    const idx=derry.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)derry.meetings[idx]=meeting;else derry.meetings.unshift(meeting);
    derry.lastMeeting='25.07.2042 · Derry City 1:4 Finn Harps';
    derry.summary='Finn Harps gewinnt das North-West-Derby im Ryan McBride Brandywell 4:1. Roberts, Bruce, Escárcega und Debütant Alejandro López treffen; die Harps feiern den elften Ligasieg in Folge.';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Zurück aus der WM und sofort wieder da: Finn Harps gewinnen bei Derry City 4:1. Escárcega trifft als frischgebackener Weltmeister, Alejandro López bei seinem Ligadebüt.';
    season.league=season.league||{};
    season.league.latestForm='11 Ligasiege in Folge · Platz 1';
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='25.07.2042: Im ersten Ligaspiel nach der WM-Rückkehr gewinnt Finn Harps das North-West-Derby bei Derry City 4:1. Roberts, Bruce, Weltmeister Escárcega und Alejandro López treffen. Raúl und López geben ihr Ligadebüt; López erzielt direkt sein erstes Harps-Tor. Es ist der elfte Ligasieg in Folge.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-07-25-escarcega-world-champion-return-goal',date,player:'Emerson Escárcega',type:'goal',title:'Weltmeister Escárcega trifft bei der Rückkehr',detail:'Fünf Tage nach Mexikos WM-Titel verwandelt Escárcega in Derry den Elfmeter zum 3:0.'},
    {id:'2042-07-25-raul-league-debut',date,player:'Raúl',type:'debut',title:'Raúl gibt sein Ligadebüt',detail:'Der spanische Star läuft erstmals in der Premier Division für Finn Harps auf.'},
    {id:'2042-07-25-alejandro-lopez-league-debut-first-goal',date,player:'Alejandro López',type:'debut-goal',title:'Traumstart für Alejandro López',detail:'Ligadebüt und erstes Tor für Finn Harps: López erzielt in Minute 81 das 4:1.'},
    {id:'2042-07-25-masic-100-league-harps',date,player:'Amir Mašić',type:'milestone',title:'Mašić erreicht 100 Ligaspiele für Finn Harps',detail:'Der Schweizer absolviert in Derry sein 100. Ligaspiel für den Klub.'},
    {id:'2042-07-25-di-maio-125-pro',date,player:'Daniele Di Maio',type:'milestone',title:'Di Maio bei 125 Profispielen',detail:'Der 21-Jährige erreicht beim 4:1 in Derry seinen nächsten Karriere-Meilenstein.'},
    {id:'2042-07-25-pol-munoz-150-league',date,player:'Pol Muñoz',type:'milestone',title:'Muñoz erreicht 150 Ligaspiele',detail:'Pol Muñoz absolviert in Derry das 150. Ligaspiel seiner Karriere.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date,competition:'Premier Division',fixtureDate:'25.07.2042',
    headline:'Zurück aus Wembley, zurück im Harps-Modus: 4:1 im Derby bei Derry',
    subheadline:'Roberts und Bruce eröffnen, Weltmeister Escárcega trifft per Elfmeter und Alejandro López feiert sein Ligadebüt mit seinem ersten Harps-Tor. Finn Harps gewinnen zum elften Mal in Folge in der Liga.',
    label:'PREMIER DIVISION · NORTH-WEST-DERBY · 25. JULI 2042',
    heroStat:{label:'SERIE',value:'11 LIGASIEGE',note:'16:5 Schüsse · 3,36 xG · Platz 1'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Nach Wochen voller Weltmeisterschaft, Finaldrama und individueller Auszeichnungen hätte ein emotionaler Kater niemanden überrascht. Stattdessen schalten die Harps sofort wieder in den Vereinsmodus. Im ausverkauften Ryan McBride Brandywell führt Finn Harps bereits zur Pause 3:0 und gewinnt das North-West-Derby am Ende souverän 4:1.',
    sections:[
      {title:'Roberts und Bruce nehmen dem Derby früh die Spannung',text:'Jake Roberts trifft in Minute 20 zum 1:0, Torric Bruce legt nur neun Minuten später nach. Bruce beendet den Abend mit Note 7,7 und gehört gemeinsam mit Billy Walker zu den besten Harps-Spielern.'},
      {title:'Der Weltmeister ist wieder da',text:'Emerson Escárcega braucht nach Mexikos WM-Triumph keine Eingewöhnungszeit. In Minute 42 verwandelt er einen Elfmeter zum 3:0. Fünf Tage nach dem größten Erfolg seiner Nationalmannschaft trifft er damit direkt wieder für seinen Klub.'},
      {title:'Neue Gesichter, sofort neue Geschichten',text:'Raúl feiert sein Ligadebüt für Finn Harps. Noch spektakulärer startet Alejandro López: Der 20-Jährige kommt zu seinem ersten Ligaeinsatz und erzielt in Minute 81 mit seinem Treffer zum 4:1 zugleich sein erstes Tor für den Klub.'},
      {title:'Die Breite trägt den Neustart',text:'Dass Roberts und Bruce die ersten beiden Tore erzielen und Billy Walker zwei Vorlagen beisteuert, ist nach der WM fast ebenso wichtig wie Escárcegas Treffer. Die Harps hängen nicht nur an den Rückkehrern aus dem Turnier, sondern bekommen sofort wieder Produktion aus der gesamten Kaderbreite.'},
      {title:'Elf Siege und wieder Platz eins',text:'Derry kommt zwar durch Andy Clark in Minute 60 zum 1:3, doch an der Richtung des Spiels ändert das nichts. Finn Harps gewinnt 16:5 nach Schüssen, hat 63 Prozent Ballbesitz und produziert 3,36 xG. Es ist der elfte Ligasieg in Serie und der Sprung auf Platz eins.'}
    ],
    verdictHeading:'Kein WM-Kater in Donegal',
    verdict:'Der vielleicht bemerkenswerteste Teil dieses 4:1 ist, wie normal es wirkt. Weltmeister, Vizeweltmeister, neue Stars und junge Spieler stehen wenige Tage nach dem größten Turnier des Jahres wieder gemeinsam auf dem Platz und dominieren ein Derby. Die WM hat Finn Harps nicht aus dem Rhythmus gebracht. Sie scheint den Klub eher noch größer gemacht zu haben.',
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Reaktionen.',items:[
      '„Esca kommt als Weltmeister zurück und trifft einfach direkt wieder. Natürlich tut er das.“',
      '„Raúl debütiert, López debütiert und trifft, Roberts und Bruce liefern. Der Kader ist absurd tief.“',
      '„Nach dieser WM hatte ich mit schweren Beinen gerechnet. Stattdessen gewinnen wir in Derry 4:1.“'
    ]},
    sources:['FM-Spielübersicht Derry City – Finn Harps · 25.07.2042','Finn-Harps-Spielerstatistiken · 25.07.2042','FourFourTwo · Spielbericht · 25.07.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-07-25-derry-city-finn-harps-1-4',date,season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'NORTH-WEST-DERBY · 1:4',
    title:'Harps kehren aus der WM zurück und zerlegen Derry',
    summary:'Roberts, Bruce, Weltmeister Escárcega und Debütant Alejandro López treffen beim 4:1. Finn Harps feiern den elften Ligasieg in Folge und stehen auf Platz eins.',
    href:`presse.html?id=${reportId}`
  });
})();