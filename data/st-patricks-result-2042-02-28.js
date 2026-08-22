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

  const fixtureId='2042-02-28-st-patricks-finn-harps-premier-division';
  const reportId='2042-02-28-st-patricks-finn-harps-report';

  const leagueTable=[
    {position:1,team:'Finn Harps',played:4,wins:4,draws:0,losses:0,goalsFor:13,goalsAgainst:0,goalDifference:13,points:12},
    {position:2,team:'Athlone Town',played:4,wins:2,draws:1,losses:1,goalsFor:7,goalsAgainst:5,goalDifference:2,points:7},
    {position:3,team:'Waterford',played:4,wins:2,draws:1,losses:1,goalsFor:6,goalsAgainst:6,goalDifference:0,points:7},
    {position:4,team:'Derry City',played:3,wins:2,draws:0,losses:1,goalsFor:7,goalsAgainst:3,goalDifference:4,points:6},
    {position:5,team:'Sligo Rovers',played:4,wins:2,draws:0,losses:2,goalsFor:6,goalsAgainst:7,goalDifference:-1,points:6},
    {position:6,team:'Cork City',played:5,wins:1,draws:2,losses:2,goalsFor:4,goalsAgainst:6,goalDifference:-2,points:5},
    {position:7,team:'Shamrock Rovers',played:5,wins:1,draws:2,losses:2,goalsFor:2,goalsAgainst:9,goalDifference:-7,points:5},
    {position:8,team:'Bohemian',played:3,wins:1,draws:1,losses:1,goalsFor:3,goalsAgainst:5,goalDifference:-2,points:4},
    {position:9,team:'UCD',played:4,wins:1,draws:0,losses:3,goalsFor:5,goalsAgainst:8,goalDifference:-3,points:3},
    {position:10,team:"St Patrick's Athletic",played:4,wins:0,draws:1,losses:3,goalsFor:0,goalsAgainst:4,goalDifference:-4,points:1}
  ];

  const match={
    id:fixtureId,date:'2042-02-28',season:2042,competition:'SSE Airtricity League Premier Division',stage:'4. Spieltag',
    home:{id:'st-patricks-athletic',name:"St Patrick's Athletic",short:'STP',score:0},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:2},
    score:'0:2',homeGoals:0,awayGoals:2,halfTime:'0:0',
    venue:'Richmond Park',location:'Dublin, Irland',attendance:5400,weather:'Feucht · 14 °C',referee:'Callum Patton',
    headline:'Generalprobe geglückt: Escárcega schießt Harps bei St. Pat’s zum 2:0',
    verdict:'Finn Harps gewinnt auch das vierte Ligaspiel der Saison und reist mit einem sauberen 2:0 im Rücken in die Champions-League-Aufgabe gegen Caen. Nach einer torlosen ersten Hälfte entscheidet Emerson Escárcega die Partie mit zwei Treffern. Der Meister steht damit bei 12 Punkten und 13:0 Toren. Für den Vorjahres-Vizemeister St. Patrick’s verschärft sich dagegen der Fehlstart: ein Punkt, kein Sieg und noch kein Ligator nach vier Spielen.',
    scorers:[
      {player:'Emerson Escárcega',team:'Finn Harps',goals:2,minutes:[67,'90+5']}
    ],
    events:[
      {minute:1,type:'yellow',team:'Finn Harps',player:'Torric Bruce',text:'Gelbe Karte'},
      {minute:43,type:'yellow',team:"St Patrick's Athletic",player:'Gabby Jerrard',text:'Gelbe Karte'},
      {minute:52,type:'yellow',team:'Finn Harps',player:'Romano Maisto',text:'Gelbe Karte'},
      {minute:57,type:'yellow',team:"St Patrick's Athletic",player:'Keith Curran',text:'Gelbe Karte'},
      {minute:67,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'0:1'},
      {minute:80,type:'yellow',team:'Finn Harps',player:'Mareks Istrankins',text:'Gelbe Karte'},
      {minute:84,type:'yellow',team:"St Patrick's Athletic",player:'Karamoko Carbon',text:'Gelbe Karte'},
      {minute:'90+5',type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'0:2'}
    ],
    stats:[
      {label:'Schüsse',home:6,away:11,kind:'number'},
      {label:'Schüsse aufs Tor',home:2,away:4,kind:'number'},
      {label:'xG',home:0.67,away:1.87,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:3,away:5,kind:'number'},
      {label:'Großchancen',home:1,away:1,kind:'number'},
      {label:'Ballbesitz',home:54,away:46,kind:'percent'},
      {label:'Ecken',home:4,away:4,kind:'number'},
      {label:'Fouls',home:9,away:15,kind:'number'},
      {label:'Angekommene Pässe',home:553,away:480,kind:'number',homeDetail:'89 % · 553/623',awayDetail:'87 % · 480/553'},
      {label:'Gelbe Karten',home:3,away:3,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Notenschnitt',home:6.53,away:7.14,kind:'decimal'},
      {label:'Intensive Sprints',home:90,away:118,kind:'number'}
    ],
    standout:{player:'Emerson Escárcega',team:'Finn Harps',rating:9.1,goals:2,note:'Zwei Tore in der Schlussphase und Note 9,1. Escárcega entscheidet eine lange enge Partie praktisch allein.'},
    leagueAfterMatch:{position:1,played:4,wins:4,draws:0,losses:0,goalsFor:13,goalsAgainst:0,goalDifference:13,points:12,table:leagueTable},
    opponentAfterMatch:{position:10,played:4,wins:0,draws:1,losses:3,goalsFor:0,goalsAgainst:4,goalDifference:-4,points:1,previousSeason:'Vizemeister 2041'},
    analysis:{
      summary:'Die Generalprobe vor Caen ist gelungen, aber anders als die vorherigen Ligaauftritte ist sie kein früher Durchmarsch. St. Patrick’s hält das 0:0 bis in die 67. Minute, ehe Escárcega das Spiel öffnet und in der Nachspielzeit endgültig schließt.',
      control:'St. Pat’s hat mit 54 Prozent sogar etwas mehr Ballbesitz, Finn Harps produziert aber die klarere offensive Bilanz: 11:6 Schüsse, 4:2 aufs Tor und 1,87:0,67 xG.',
      escarcega:'Escárcega trifft in Minute 67 und 90+5. Nach seinen zwei Toren gegen UCD und dem Treffer beim 5:0 gegen Shamrock steht er damit bereits bei fünf Ligatoren in den ersten vier Spielen.',
      defence:'Die Harps-Defensive bleibt in der Liga weiter ohne Gegentor. Nach vier Spielen steht eine makellose Bilanz von 13:0 Toren.',
      stPatsCrisis:'Für St. Patrick’s ist der Kontrast zum Vorjahr scharf. Der Vizemeister von 2041 steht nach vier Spielen mit nur einem Punkt auf Rang zehn und hat noch kein einziges Ligator erzielt.'
    },
    notes:[
      'Finn Harps gewinnt am 4. Spieltag mit 2:0 bei St. Patrick’s Athletic.',
      'Emerson Escárcega erzielt beide Tore in Minute 67 und 90+5 und erhält Note 9,1.',
      'Die Harps stehen nach vier Ligaspielen bei 12 Punkten und 13:0 Toren.',
      'St. Patrick’s ist als Vizemeister des Vorjahres nach vier Spielen Letzter: 1 Punkt, 0 Siege, 0:4 Tore.',
      'Die Partie dient als erfolgreiche Generalprobe vor dem Champions-League-Achtelfinale gegen Caen.'
    ],
    sources:['FM24 · St Patrick’s Athletic 0:2 Finn Harps · 28.02.2042','FM24 · Spielstatistiken und Tabelle · 28.02.2042']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  let stPats=window.FM_CLUBS.find(x=>x.id==='st-patricks-athletic'||x.name==="St Patrick's Athletic"||x.name==='St Patricks Athletic');
  if(!stPats){
    stPats={id:'st-patricks-athletic',name:"St Patrick's Athletic",country:'Irland',meetings:[]};
    window.FM_CLUBS.push(stPats);
  }
  stPats.meetings=stPats.meetings||[];
  const meeting={date:'28.02.2042',venue:'H',result:'0:2',competition:'Premier Division'};
  const meetingIndex=stPats.meetings.findIndex(x=>x.date===meeting.date&&x.competition===meeting.competition);
  if(meetingIndex>=0)stPats.meetings[meetingIndex]=meeting;else stPats.meetings.push(meeting);
  stPats.lastMeeting='28.02.2042 · St Patrick’s Athletic 0:2 Finn Harps';
  stPats.currentLeaguePosition=10;
  stPats.currentLeagueRecord={played:4,wins:0,draws:1,losses:3,goalsFor:0,goalsAgainst:4,points:1};
  stPats.summary='Der Vizemeister von 2041 startet 2042 in einer frühen Krise: Nach dem 0:2 gegen Finn Harps steht St. Patrick’s mit einem Punkt und 0:4 Toren nach vier Spielen am Tabellenende.';
  stPats.pressReport={id:reportId,href:`presse.html?id=${reportId}`,label:'PREMIER DIVISION · 4. SPIELTAG',headline:'Harps gewinnen 2:0, St. Pat’s rutscht tiefer in die Krise'};

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-02-28';
    season.latestHeadline='Generalprobe vor Caen geglückt: Finn Harps gewinnt 2:0 bei St. Patrick’s und steht nach vier Ligaspielen bei 13:0 Toren.';
    season.league=season.league||{};
    Object.assign(season.league,{played:4,wins:4,draws:0,losses:0,goalsFor:13,goalsAgainst:0,goalDifference:13,points:12,position:1,latestResult:'28.02.2042 · St Patrick’s Athletic 0:2 Finn Harps',table:leagueTable});
    season.nextEuropeanOpponent='Caen';
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='28.02.2042: Generalprobe vor Caen geglückt. Finn Harps gewinnt bei St. Patrick’s 2:0 durch einen Escárcega-Doppelpack und steht nach vier Ligaspielen bei 12 Punkten und 13:0 Toren. Vorjahres-Vizemeister St. Pat’s bleibt mit einem Punkt und ohne Ligator Tabellenletzter.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-02-28-escarcega-st-pats-double',date:'2042-02-28',player:'Emerson Escárcega',type:'standout',
    title:'Doppelpack als Generalprobe vor Caen',detail:'Escárcega trifft in Minute 67 und 90+5 zum 2:0 bei St. Patrick’s, erhält Note 9,1 und steht nach vier Ligaspielen bei fünf Treffern.'
  });

  const report={
    id:reportId,type:'Spielbericht',date:'2042-02-28',competition:'SSE Airtricity League Premier Division',fixtureDate:'28.02.2042',
    home:"St Patrick's Athletic",away:'Finn Harps',score:'0:2',location:'Richmond Park · Dublin · 5.400 Zuschauer',
    headline:'Generalprobe geglückt: Escárcega schießt Harps bei St. Pat’s zum 2:0',
    subheadline:'Vier Spiele, vier Siege, 13:0 Tore. Finn Harps reist mit einer makellosen Ligabilanz in das Champions-League-Achtelfinale gegen Caen. Beim Vorjahres-Vizemeister entscheidet Emerson Escárcega die Partie mit einem späten Doppelpack.',
    label:'PREMIER DIVISION · 4. SPIELTAG · 28.02.2042',
    heroStat:{label:'Ligastart',value:'13 : 0 Tore',note:'4 Spiele · 4 Siege · 12 Punkte'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Die Generalprobe vor Caen ist bestanden. Finn Harps muss im Richmond Park länger arbeiten als in den bisherigen Ligaspielen, bleibt aber geduldig und gewinnt am Ende 2:0. Der Mann des Abends ist erneut Emerson Escárcega. Für St. Patrick’s wird der Fehlstart dagegen zunehmend zur echten Krise.',
    sections:[
      {title:'St. Pat’s hält eine Stunde dagegen',text:'Die erste Hälfte endet torlos. St. Patrick’s hat etwas mehr Ballbesitz und hält die Partie lange eng, ohne die Harps-Defensive ernsthaft zu knacken. Finn Harps kommt über 90 Minuten auf 11:6 Schüsse und 1,87:0,67 xG.'},
      {title:'Escárcega öffnet und schließt das Spiel',text:'In der 67. Minute fällt der Bann: Emerson Escárcega bringt Finn Harps mit 1:0 in Führung. In der fünften Minute der Nachspielzeit setzt er mit seinem zweiten Treffer den Schlusspunkt. Note 9,1 und zwei Tore machen ihn klar zum Spieler des Abends.'},
      {title:'Makellose Liga-Generalprobe vor Caen',text:'Vier Ligaspiele, vier Siege, 13 Tore und noch kein Gegentor. Finn Harps nimmt damit eine perfekte nationale Bilanz mit in die Champions-League-Woche gegen Caen.'},
      {title:'Vom Vizemeister zum Tabellenletzten',text:'Für St. Patrick’s sieht die Lage deutlich düsterer aus. Der Vizemeister von 2041 hat nach vier Spielen nur einen Punkt, noch keinen Sieg und noch kein Ligator. Mit 0:4 Toren steht der Klub auf Rang zehn.'},
      {title:'Escárcega ist sofort der Fixpunkt',text:'Mit den beiden Treffern im Richmond Park steht Escárcega bereits bei fünf Ligatoren in vier Spielen. Gerade während Justin Ramsey verletzt fehlt, übernimmt der Mexikaner die Verantwortung im Angriff.'}
    ],
    strengthsTitle:'WAS VOR CAEN MUT MACHT',
    strengthsHeading:'Geduld, Defensive und ein heißer Escárcega',
    strengths:['Vier Siege aus vier Ligaspielen.','Noch kein Gegentor in der Premier Division 2042.','Escárcega mit fünf Ligatoren nach vier Spielen.','Auch in einem engeren Auswärtsspiel findet die Mannschaft spät die Lösung.'],
    vulnerabilitiesTitle:'WAS CAEN TROTZDEM SEHEN WIRD',
    vulnerabilitiesHeading:'Nicht alles war dominant',
    vulnerabilities:['St. Patrick’s hält das Spiel bis zur 67. Minute offen.','Finn Harps hat diesmal nur 46 Prozent Ballbesitz.','Vier Schüsse aufs Tor aus elf Abschlüssen zeigen, dass die Partie offensiv weniger flüssig war als die vorherigen Ligaspiele.'],
    verdictHeading:'Die Generalprobe sitzt, der Vizemeister wankt',
    verdict:'Für Finn Harps ist das 2:0 genau die Art von Sieg, die vor einem europäischen K.-o.-Spiel willkommen ist: nicht spektakulär, aber kontrolliert, zu null und mit einem Unterschiedsspieler in Form. Auf der anderen Seite wächst in Dublin der Druck. St. Patrick’s war 2041 noch der erste Verfolger der Harps; vier Spieltage später steht der Vizemeister sieglos und ohne eigenes Tor am Tabellenende.',
    sourcesHeading:'Grundlage',
    sourcesNote:'Ergebnis, Torschützen, Spielstatistiken, Tabelle und Zuschauerzahl basieren auf den FM-Screenshots vom 28. Februar 2042. Die Einordnung St. Patrick’s als Vizemeister 2041 stammt aus dem laufenden Save-Kontext.',
    sources:['FM24 · St Patrick’s Athletic 0:2 Finn Harps · 28.02.2042','FM24 · Spielstatistiken und Premier-Division-Tabelle · 28.02.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-02-28-st-patricks-finn-harps-league',date:'2042-02-28',season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'PREMIER DIVISION · 4. SPIELTAG',title:'Generalprobe sitzt: Escárcega-Doppelpack vor Caen',
    summary:'Finn Harps gewinnt 2:0 bei St. Patrick’s und steht bei 12 Punkten sowie 13:0 Toren. Der Vorjahres-Vizemeister bleibt dagegen mit nur einem Punkt und ohne Ligator Letzter.',
    href:`presse.html?id=${reportId}`,reportId
  });
})();