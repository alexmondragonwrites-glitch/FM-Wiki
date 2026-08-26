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

  const fixtureId='2042-04-27-finn-harps-derry-city-premier-division';
  const reportId='2042-04-27-finn-harps-derry-city-3-0-spielbericht';

  const match={
    id:fixtureId,date:'2042-04-27',season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:3},
    away:{id:'derry-city',name:'Derry City',short:'DER',score:0},
    score:'3:0',homeGoals:3,awayGoals:0,halfTime:'3:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12800,awayFans:640,weather:'Heiter · 18 °C',referee:'Robert Hennessy',
    headline:'Vor Barcelona ein Statement: Finn Harps weisen Derry mit 3:0 in die Schranken',
    verdict:'Finn Harps beantwortet die 1:2-Derbyniederlage vom März mit einer souveränen Machtdemonstration. Emerson Escárcega trifft in der 23. Minute per Elfmeter und nur neun Minuten später erneut, Pol Muñoz erhöht in Minute 35. Mit 76 Prozent Ballbesitz, 14:4 Schüssen, 8:1 Schüssen aufs Tor und 2,68:0,48 xG kontrollieren die Harps den direkten Rivalen klar und gehen mit fünf Ligasiegen in Folge in die Champions-League-Halbfinalphase gegen Barcelona.',
    scorers:[
      {player:'Emerson Escárcega',team:'Finn Harps',goals:2,minutes:[23,32],penaltyMinutes:[23]},
      {player:'Pol Muñoz',team:'Finn Harps',goals:1,minutes:[35]}
    ],
    events:[
      {minute:23,type:'penalty-goal',team:'Finn Harps',player:'Emerson Escárcega',text:'1:0 · Elfmeter'},
      {minute:26,type:'yellow',team:'Derry City',player:'Ashley Davies',text:'Gelbe Karte'},
      {minute:32,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'2:0'},
      {minute:35,type:'goal',team:'Finn Harps',player:'Pol Muñoz',text:'3:0'},
      {minute:40,type:'yellow',team:'Finn Harps',player:'Gustavo da Silva',text:'Gelbe Karte'},
      {minute:65,type:'yellow',team:'Derry City',player:'Paddy Ireland',text:'Gelbe Karte'},
      {minute:87,type:'yellow',team:'Derry City',player:'Rob Todd',text:'Gelbe Karte'}
    ],
    stats:[
      {label:'Schüsse',home:14,away:4,kind:'number'},
      {label:'Schüsse aufs Tor',home:8,away:1,kind:'number'},
      {label:'xG',home:2.68,away:0.48,kind:'decimal'},
      {label:'Ballbesitz',home:76,away:24,kind:'percent'},
      {label:'Ecken',home:11,away:5,kind:'number'},
      {label:'Fouls',home:11,away:17,kind:'number'},
      {label:'Angekommene Pässe',home:'598/670',away:'156/248',kind:'text'},
      {label:'Passquote',home:89,away:63,kind:'percent'},
      {label:'Gelbe Karten',home:1,away:4,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'}
    ],
    ratings:{
      'Paulo Henrique':7.4,'Callum Brennan':7.3,'Daniele Di Maio':7.0,'Torric Bruce':7.3,'Gustavo da Silva':6.9,
      "Jim O'Neill":7.0,'Ben Barry':7.8,"Cormac O'Kane":7.2,'Pol Muñoz':7.4,'Romano Maisto':6.9,
      'Emerson Escárcega':8.0,'Giacomo Papini':6.9,'Diego Fernández':6.8,'Dom Docherty':6.7,'Fionn Gavin':6.4,'Jake Roberts':6.7
    },
    standout:{player:'Emerson Escárcega',team:'Finn Harps',rating:8.0,goals:2,note:'Doppelpack innerhalb von neun Minuten; eröffnet per Elfmeter und macht das Derby früh zu.'},
    leagueAfterMatch:{played:14,wins:12,draws:0,losses:2,goalsFor:41,goalsAgainst:5,goalDifference:36,points:36,position:1},
    analysis:{
      revenge:'Am 24. März verlor Finn Harps das North-West-Derby in Derry 1:2. Gut einen Monat später fällt die Antwort eindeutig aus: 3:0, 76 Prozent Ballbesitz und nur ein zugelassener Schuss aufs Tor.',
      escarcega:'Escárcega bestätigt seine außergewöhnlich ruhige Form in großen Spielen. Nach Tor und Vorlage gegen Manchester City, dem Doppelpack gegen St Patrick’s und weiteren starken Auftritten entscheidet er nun auch das Derby mit zwei frühen Treffern.',
      munoz:'Pol Muñoz krönt die starke erste Halbzeit mit dem 3:0 in Minute 35 und sorgt noch vor der Pause für die Vorentscheidung.',
      control:'Derry kommt bei nur 24 Prozent Ballbesitz und vier Abschlüssen kaum zur Entfaltung. Die Harps dominieren das Zentrum, produzieren elf Ecken und halten das Spiel nach der Pause kontrolliert.',
      barcelona:'Als Generalprobe für das Champions-League-Halbfinale gegen Barcelona ist der Auftritt nahezu ideal: klare Kontrolle, frühe Tore, kein Gegentor und keine Notwendigkeit, in der zweiten Halbzeit unnötig Kräfte zu verbrennen.'
    },
    milestones:[
      {player:'Gustavo da Silva',achievement:'75. Ligaspiel für Finn Harps'},
      {player:"Jim O'Neill",achievement:'375. Einsatz für Finn Harps'},
      {player:'Ben Barry',achievement:'50. Profispiel'},
      {player:'Emerson Escárcega',achievement:'25. Tor für Finn Harps'}
    ],
    notes:[
      'Finn Harps schlägt Derry City im North-West-Derby 3:0.',
      'Emerson Escárcega trifft in Minute 23 per Elfmeter und in Minute 32 erneut.',
      'Pol Muñoz erzielt in Minute 35 das 3:0.',
      'Finn Harps gewinnt die Schussstatistik 14:4 und die Schüsse aufs Tor 8:1.',
      '76 Prozent Ballbesitz und 2,68:0,48 xG unterstreichen die klare Überlegenheit.',
      'Fünfter Ligasieg in Folge.',
      'Nach 14 Ligaspielen: 36 Punkte und 41:5 Tore.',
      'Direkte Generalprobe vor dem Champions-League-Halbfinale gegen Barcelona bestanden.'
    ],
    sources:['FM-Spielübersicht Finn Harps – Derry City · 27.04.2042','Finn-Harps-Spielerstatistiken · 27.04.2042','FourFourTwo · Spielbericht 27.04.2042']
  };

  upsert(window.FM_MATCHES,match);

  const fixtureArray=['2042-04-27','15:00','Derry City','Heim','3:0','Premier Division',0];
  const oldIdx=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[2]==='Derry City'&&x[5]==='Premier Division'&&x[0]==='2042-04-27');
  if(oldIdx>=0)window.FM_FIXTURES[oldIdx]=fixtureArray;else window.FM_FIXTURES.push(fixtureArray);

  const derry=window.FM_CLUBS.find(x=>x.id==='derry-city'||x.name==='Derry City'||x.name==='Derry City FC');
  if(derry){
    derry.meetings=derry.meetings||[];
    const meeting={date:'27.04.2042',competition:'Premier Division',venue:'A',result:'3:0'};
    const idx=derry.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)derry.meetings[idx]=meeting;else derry.meetings.unshift(meeting);
    derry.lastMeeting='27.04.2042 · Finn Harps 3:0 Derry City';
    derry.summary='Derry City wird im Donegal Stadium klar mit 0:3 geschlagen. Escárcega trifft doppelt, Muñoz ebenfalls; die Harps revanchieren sich damit deutlich für die 1:2-Derbyniederlage im März.';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-04-27';
    season.latestHeadline='North-West-Derby: Finn Harps schlagen Derry City 3:0. Escárcega trifft doppelt, Muñoz ebenfalls – fünfter Ligasieg in Folge vor Barcelona.';
    season.league=season.league||{};
    season.league.current={played:14,wins:12,draws:0,losses:2,goalsFor:41,goalsAgainst:5,goalDifference:36,points:36,position:1};
    season.nextFocus={competition:'UEFA Champions League',stage:'Halbfinale',opponent:'Barcelona',status:'Generalprobe bestanden: 3:0 gegen Derry und fünf Ligasiege in Folge'};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='27.04.2042: Finn Harps gewinnt das North-West-Derby gegen Derry City 3:0. Escárcega trifft per Elfmeter in Minute 23 und erneut in Minute 32, Pol Muñoz erhöht in Minute 35. Mit 76 Prozent Ballbesitz, 14:4 Schüssen und 2,68:0,48 xG gelingt eine klare Generalprobe vor dem Champions-League-Halbfinale gegen Barcelona. Nach 14 Ligaspielen stehen 36 Punkte und 41:5 Tore.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-04-27-escarcega-derry',date:'2042-04-27',player:'Emerson Escárcega',type:'standout',title:'Escárcega entscheidet auch das Derby',detail:'Doppelpack gegen Derry City; 25. Tor für Finn Harps und Note 8,0.'},
    {id:'2042-04-27-pol-munoz-derry',date:'2042-04-27',player:'Pol Muñoz',type:'goal',title:'Muñoz macht das 3:0 perfekt',detail:'Trifft in Minute 35 und besiegelt die klare erste Halbzeit.'},
    {id:'2042-04-27-ben-barry-50',date:'2042-04-27',player:'Ben Barry',type:'milestone',title:'Barry erreicht 50 Profispiele',detail:'Der 18-Jährige feiert gegen Derry sein 50. Profispiel.'},
    {id:'2042-04-27-oneill-375-harps',date:'2042-04-27',player:"Jim O'Neill",type:'milestone',title:"O'Neill bei 375 Harps-Einsätzen",detail:'Ein weiterer großer Meilenstein im North-West-Derby.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2042-04-27',competition:'Premier Division',fixtureDate:'27.04.2042',
    headline:'Derby-Statement vor Barcelona: Harps fertigen Derry 3:0 ab',
    subheadline:'Escárcega trifft doppelt, Muñoz erhöht noch vor der Pause. Finn Harps revanchiert sich für die März-Niederlage und geht mit fünf Ligasiegen in Folge ins Champions-League-Halbfinale.',
    label:'PREMIER DIVISION · NORTH-WEST-DERBY',
    heroStat:{label:'Ballbesitz',value:'76 %',note:'14:4 Schüsse · 8:1 aufs Tor · 2,68:0,48 xG'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Besser hätte die Generalprobe kaum laufen können. Finn Harps nimmt Derry City im Donegal Stadium bereits in der ersten Halbzeit auseinander und kontrolliert das Derby danach ohne Hektik bis zum Ende.',
    sections:[
      {title:'Escárcega mit der Ruhe eines Weltklassestürmers',text:'In Minute 23 verwandelt Emerson Escárcega den Elfmeter zum 1:0. Neun Minuten später legt er das 2:0 nach und erreicht damit zugleich sein 25. Tor für Finn Harps.'},
      {title:'Muñoz setzt den Deckel früh drauf',text:'Nur drei Minuten nach Escárcegas zweitem Treffer erhöht Pol Muñoz auf 3:0. Noch vor der Pause ist das Derby damit praktisch entschieden.'},
      {title:'Die Antwort auf den März',text:'Das 1:2 in Derry am 24. März war die zweite Niederlage in Folge und hatte den perfekten Saisonstart beendet. Einen Monat später dreht Finn Harps den Spieß mit einer der kontrolliertesten Liga-Leistungen der Saison vollständig um.'},
      {title:'Generalprobe für Barcelona bestanden',text:'76 Prozent Ballbesitz, nur vier zugelassene Abschlüsse und ein Clean Sheet sind genau die Art von Kontrolle, die vor einem Champions-League-Halbfinale gesucht wird. Finn Harps reist mit fünf Ligasiegen in Folge in die Duelle mit Barcelona.'}
    ],
    verdictHeading:'Mehr als nur drei Punkte',
    verdict:'Der Sieg festigt nicht nur Platz eins. Er zeigt, dass die Harps den kurzen März-Wackler verarbeitet haben und unmittelbar vor Barcelona wieder in einem Zustand aus Kontrolle, Effizienz und Selbstverständlichkeit angekommen sind.',
    sources:['FM-Spielübersicht Finn Harps – Derry City · 27.04.2042','Finn-Harps-Spielerstatistiken · 27.04.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-04-27-finn-harps-derry-3-0',date:'2042-04-27',season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'NORTH-WEST-DERBY · 3:0',
    title:'Vor Barcelona: Escárcega führt Harps zum Derby-Statement',
    summary:'Finn Harps schlägt Derry City 3:0. Escárcega trifft doppelt, Muñoz ebenfalls; mit 76 Prozent Ballbesitz gelingt eine nahezu perfekte Generalprobe für Barcelona.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','derry-city','emerson-escarcega','pol-munoz','barcelona','season-2042']
  });
})();