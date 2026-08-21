(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2042-02-14-shamrock-rovers-finn-harps-premier-division';
  const reportId='2042-02-14-shamrock-rovers-finn-harps-report';

  const match={
    id:fixtureId,date:'2042-02-14',season:2042,competition:'SSE Airtricity League Premier Division',stage:'1. Spieltag',
    home:{id:'shamrock-rovers',name:'Shamrock Rovers',short:'SHR',score:0},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:5},
    score:'0:5',homeGoals:0,awayGoals:5,halfTime:'0:3',
    venue:'Tallaght Stadium',location:'Dublin, Irland',attendance:9544,awayFans:500,weather:'Graupelschauer · 2 °C',referee:'Simon Farrelly',
    headline:'Antwort eines Champions: Finn Harps zerlegt Shamrock zum Ligaauftakt 5:0',
    verdict:'Sechs Tage nach der 2:3-Niederlage gegen Derry im President’s Cup antwortet Finn Harps mit einem Machtdemonstrations-Start in die Premier Division. Cormac O’Kane trifft doppelt, Papini, Maisto und Escárcega ebenfalls. 22:3 Schüsse, 70 Prozent Ballbesitz und 3,12 xG lassen keinen Zweifel: Der Serienmeister beginnt die Liga 2042 wieder im Vollgasmodus.',
    scorers:[
      {player:"Cormac O'Kane",team:'Finn Harps',goals:2,minutes:[9,47]},
      {player:'Giacomo Papini',team:'Finn Harps',goals:1,minutes:[23]},
      {player:'Romano Maisto',team:'Finn Harps',goals:1,minutes:[37]},
      {player:'Emerson Escárcega',team:'Finn Harps',goals:1,minutes:[53]}
    ],
    events:[
      {minute:2,type:'yellow',team:'Shamrock Rovers',player:'Tom Hayes',text:'Gelbe Karte'},
      {minute:9,type:'goal',team:'Finn Harps',player:"Cormac O'Kane",text:'0:1'},
      {minute:23,type:'goal',team:'Finn Harps',player:'Giacomo Papini',text:'0:2'},
      {minute:37,type:'goal',team:'Finn Harps',player:'Romano Maisto',text:'0:3'},
      {minute:47,type:'goal',team:'Finn Harps',player:"Cormac O'Kane",text:'0:4'},
      {minute:53,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'0:5'},
      {minute:65,type:'yellow',team:'Shamrock Rovers',player:'Iolo Evans',text:'Gelbe Karte'},
      {minute:79,type:'yellow',team:'Finn Harps',player:'Callum Brennan',text:'Gelbe Karte'}
    ],
    stats:[
      {label:'Schüsse',home:3,away:22,kind:'number'},
      {label:'Schüsse aufs Tor',home:1,away:11,kind:'number'},
      {label:'xG',home:0.85,away:3.12,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:2,away:8,kind:'number'},
      {label:'Großchancen',home:1,away:4,kind:'number'},
      {label:'Ballbesitz',home:30,away:70,kind:'percent'},
      {label:'Ecken',home:3,away:7,kind:'number'},
      {label:'Fouls',home:19,away:11,kind:'number'},
      {label:'Angekommene Pässe',home:256,away:611,kind:'number',homeDetail:'77 % · 256/334',awayDetail:'90 % · 611/682'},
      {label:'Gelbe Karten',home:2,away:1,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Notenschnitt',home:6.22,away:7.50,kind:'decimal'},
      {label:'Intensive Sprints',home:52,away:79,kind:'number'}
    ],
    standout:{player:"Cormac O'Kane",team:'Finn Harps',rating:9.2,goals:2,assists:1,note:'Doppelpack, eine Vorlage und Note 9,2. O’Kane macht den Saisonauftakt zu seiner Bühne.'},
    analysis:{
      summary:'Nach dem Derry-Dämpfer im President’s Cup zeigt Finn Harps beim ersten Ligaspiel keinerlei Nachwirkung. Shamrock wird in Dublin mit 22:3 Schüssen und 70 Prozent Ballbesitz kontrolliert.',
      firstHalf:'O’Kane eröffnet in Minute 9, Papini legt nach 23 Minuten nach und Maisto macht in der 37. Minute das 0:3 zur Pause. Die Partie ist schon vor dem Seitenwechsel fast entschieden.',
      secondHalf:'O’Kane trifft zwei Minuten nach Wiederbeginn erneut. Escárcega setzt in der 53. Minute das 0:5. Danach verwaltet Finn Harps die Begegnung souverän, ohne Shamrock zurück ins Spiel zu lassen.',
      statement:'Der Kontrast zum President’s Cup ist deutlich: Gegen Derry hatte die Kontrolle nicht gereicht, in Tallaght wird dieselbe Dominanz in Tore übersetzt. Der Meister startet mit einem Ausrufezeichen in die Liga.'
    },
    notes:[
      'Finn Harps gewinnt am 1. Spieltag der Premier Division 2042 mit 5:0 bei Shamrock Rovers.',
      'Cormac O’Kane trifft doppelt und bereitet ein weiteres Tor vor; Note 9,2.',
      'Giacomo Papini, Romano Maisto und Emerson Escárcega erzielen die weiteren Treffer.',
      '22:3 Schüsse, 11:1 Schüsse aufs Tor und 70 Prozent Ballbesitz.',
      'Finn Harps übernimmt nach dem ersten Spieltag mit +5 Tordifferenz die Tabellenführung.'
    ],
    sources:['FM-Spielübersicht Shamrock Rovers – Finn Harps · 14.02.2042','FM-Spielerstatistiken Finn Harps · 14.02.2042']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const shamrock=window.FM_CLUBS.find(x=>x.id==='shamrock-rovers'||x.name==='Shamrock Rovers');
  if(shamrock){
    shamrock.meetings=shamrock.meetings||[];
    const meeting={date:'14.02.2042',venue:'H',result:'0:5',competition:'Premier Division'};
    const idx=shamrock.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)shamrock.meetings[idx]=meeting;else shamrock.meetings.push(meeting);
    shamrock.lastMeeting='14.02.2042 · Shamrock Rovers 0:5 Finn Harps';
    shamrock.summary='Finn Harps startet die Premier-Division-Saison 2042 mit einem 5:0 im Tallaght Stadium. O’Kane trifft doppelt, Papini, Maisto und Escárcega ebenfalls.';
    shamrock.pressReport={id:reportId,href:`presse.html?id=${reportId}`,label:'PREMIER DIVISION · 1. SPIELTAG',headline:'Antwort eines Champions: Harps zerlegen Shamrock 5:0'};
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-02-14';
    season.latestHeadline='Premier Division: Finn Harps startet mit einem 5:0 bei Shamrock Rovers in die Saison 2042.';
    season.league=season.league||{};
    Object.assign(season.league,{played:1,wins:1,draws:0,losses:0,goalsFor:5,goalsAgainst:0,goalDifference:5,points:3,position:1,latestResult:'14.02.2042 · Shamrock Rovers 0:5 Finn Harps'});
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='14.02.2042: Ligaauftakt nach Maß. Finn Harps gewinnt 5:0 bei Shamrock Rovers. O’Kane trifft doppelt, Papini, Maisto und Escárcega ebenfalls.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-02-14-cormac-okane-shamrock-masterclass',date:'2042-02-14',player:"Cormac O'Kane",type:'standout',title:'Doppelpack und Vorlage zum Ligastart',detail:'O’Kane trifft beim 5:0 gegen Shamrock in Minute 9 und 47, bereitet ein weiteres Tor vor und erhält Note 9,2.'},
    {id:'2042-02-14-giacomo-papini-shamrock-goal',date:'2042-02-14',player:'Giacomo Papini',type:'goal',title:'Papini trifft zum 0:2',detail:'Papini erzielt in Minute 23 den zweiten Harps-Treffer des Ligaauftakts.'},
    {id:'2042-02-14-romano-maisto-shamrock-goal',date:'2042-02-14',player:'Romano Maisto',type:'goal',title:'Maisto macht vor der Pause das 0:3',detail:'Maisto trifft in Minute 37 und sorgt für die klare Pausenführung.'},
    {id:'2042-02-14-escarcega-shamrock-goal',date:'2042-02-14',player:'Emerson Escárcega',type:'goal',title:'Escárcega setzt den Schlusspunkt',detail:'Escárcega erzielt in Minute 53 das 0:5.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2042-02-14',competition:'SSE Airtricity League Premier Division',fixtureDate:'14.02.2042',
    home:'Shamrock Rovers',away:'Finn Harps',score:'0:5',location:'Tallaght Stadium · Dublin · 9.544 Zuschauer',
    headline:'Antwort eines Champions: Finn Harps startet mit 5:0 bei Shamrock',
    subheadline:'Nach dem President’s-Cup-Dämpfer gegen Derry folgt sechs Tage später die passende Antwort. O’Kane trifft doppelt, Papini, Maisto und Escárcega ebenfalls. Shamrock kommt im eigenen Stadion nur auf drei Abschlüsse.',
    label:'PREMIER DIVISION · 1. SPIELTAG · 14.02.2042',
    heroStat:{label:'Dominanz',value:'22 : 3 Schüsse',note:'70 % Ballbesitz · 3,12 xG · 5 Tore'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Wenn die Niederlage gegen Derry im President’s Cup eine kleine Warnleuchte war, dann hat Finn Harps sie beim Ligastart mit einem Vorschlaghammer ausgeschaltet. Im Tallaght Stadium lässt der Serienmeister Shamrock Rovers kaum Luft und gewinnt 5:0.',
    sections:[
      {title:'Drei Tore vor der Pause',text:'Cormac O’Kane eröffnet nach neun Minuten. Giacomo Papini erhöht in Minute 23, Romano Maisto trifft in Minute 37 zum 0:3. Shamrock findet gegen die Harps-Kontrolle kaum Entlastung.'},
      {title:'O’Kane setzt sofort nach',text:'Nur zwei Minuten nach Wiederbeginn trifft O’Kane erneut. Sein Doppelpack und eine zusätzliche Vorlage bringen ihm die herausragende Note 9,2 ein.'},
      {title:'Escárcega macht den Deckel drauf',text:'Emerson Escárcega erzielt in der 53. Minute das 0:5. Danach wird aus der Partie eine kontrollierte Verwaltung, ohne dass Shamrock noch eine echte Aufholphase entwickelt.'},
      {title:'Die Zahlen sind fast brutaler als das Ergebnis',text:'Finn Harps kommt auf 22:3 Schüsse, 11:1 Schüsse aufs Tor, 3,12:0,85 xG und 70 Prozent Ballbesitz. Auch die Passkontrolle ist mit 611 angekommenen Pässen bei 90 Prozent deutlich auf Seiten des Meisters.'},
      {title:'Saisonauftakt nach Plan',text:'Nach der Niederlage im President’s Cup war die Frage, ob Derry einen kleinen Riss hinterlassen hatte. Die Antwort in Tallaght lautet: nein. Finn Harps startet mit fünf Toren, drei Punkten und der Tabellenführung in die Liga.'}
    ],
    strengthsTitle:'WAS DEN AUFTAKT AUSMACHT',
    strengthsHeading:'Dominanz von der ersten Minute an',
    strengths:['Fünf Tore bei 3,12 xG.','Cormac O’Kane mit zwei Toren, einer Vorlage und Note 9,2.','70 Prozent Ballbesitz und 90 Prozent Passquote.','Shamrock kommt nur auf einen Schuss aufs Tor.'],
    vulnerabilitiesTitle:'KAUM ANGRIFFSFLÄCHE',
    vulnerabilitiesHeading:'Nur kleine Randnotizen',
    vulnerabilities:['Einige gute Angriffe enden trotz klarer Überlegenheit ohne Abschluss.','Die Chancenverwertung hätte bei 22 Schüssen sogar noch höher ausfallen können.'],
    verdictHeading:'Genau die Antwort, die ein Serienmeister geben will',
    verdict:'Das 0:5 ist nicht nur ein gelungener Start, sondern die passende Reaktion auf den verlorenen President’s Cup. Derry hatte die Harps geärgert. Shamrock bekommt sechs Tage später die volle Antwort ab. In der Premier Division beginnt 2042 damit wieder unter vertrauten Vorzeichen.',
    sourcesHeading:'Grundlage',
    sourcesNote:'Ergebnis, Torschützen, Spielstatistiken und Zuschauerzahl basieren auf den FM-Screenshots vom 14. Februar 2042.',
    sources:['FM24 · Shamrock Rovers 0:5 Finn Harps · 14.02.2042','FM24 · Finn-Harps-Spielerstatistiken · 14.02.2042']
  };

  upsert(window.FM_PRESS_REPORTS,report);
  upsert(window.FM_NEWS,{
    id:'2042-02-14-shamrock-rovers-finn-harps-league-opener',date:'2042-02-14',season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'PREMIER DIVISION · 1. SPIELTAG',title:'Fünf Tore als Antwort: Harps zerlegen Shamrock zum Saisonauftakt',
    summary:'Finn Harps reagiert auf die President’s-Cup-Niederlage gegen Derry mit einem 5:0 bei Shamrock Rovers. O’Kane trifft doppelt und liefert eine Vorlage, dazu treffen Papini, Maisto und Escárcega.',
    href:`presse.html?id=${reportId}`,entities:['finn-harps','shamrock-rovers','cormac-okane','giacomo-papini','romano-maisto','emerson-escarcega','season-2042']
  });
})();