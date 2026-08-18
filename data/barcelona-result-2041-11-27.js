(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2041-11-27-barcelona-finn-harps-champions-league';
  const reportId='2041-11-27-barcelona-finn-harps-spielbericht';

  const match={
    id:fixtureId,date:'2041-11-27',season:2041,competition:'UEFA Champions League',stage:'Ligaphase · 5. Spieltag',
    home:{id:'barcelona',name:'FC Barcelona',short:'BAR',score:2},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:1},
    score:'2:1',homeGoals:2,awayGoals:1,halfTime:'2:0',
    venue:'Spotify Camp Nou',location:'Barcelona, Spanien',attendance:97928,awayFans:560,weather:'Windig · 14 °C',referee:'Nicht bekannt',
    headline:'Erste Niederlage der Ligaphase: Finn Harps verliert 1:2 bei Barcelona',
    verdict:'Nach vier Siegen in Serie endet der perfekte Champions-League-Start der Harps im Camp Nou. Emmanuel Musah und Fernandes treffen innerhalb von zwei Minuten kurz vor der Pause, Emerson Escárcega verkürzt direkt nach Wiederbeginn. Barcelona erzeugt insgesamt mehr Druck und gewinnt verdient, auch wenn Finn Harps nach dem 1:2 im Spiel bleibt.',
    scorers:[
      {player:'Emmanuel Musah',team:'FC Barcelona',goals:1,minutes:[39]},
      {player:'Fernandes',team:'FC Barcelona',goals:1,minutes:[40]},
      {player:'Emerson Escárcega',team:'Finn Harps',goals:1,minutes:[50],assist:'Diego Fernández'}
    ],
    events:[
      {minute:39,type:'goal',team:'FC Barcelona',player:'Emmanuel Musah',text:'1:0'},
      {minute:40,type:'goal',team:'FC Barcelona',player:'Fernandes',text:'2:0'},
      {minute:'45+1',type:'yellow',team:'FC Barcelona',player:'Ángel',text:'Gelbe Karte'},
      {minute:50,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',assist:'Diego Fernández',text:'2:1'}
    ],
    stats:[
      {label:'Schüsse',home:12,away:5,kind:'number'},
      {label:'Schüsse aufs Tor',home:4,away:1,kind:'number'},
      {label:'xG',home:2.30,away:0.76,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:4,away:3,kind:'number'},
      {label:'Großchancen',home:3,away:1,kind:'number'},
      {label:'Ballbesitz',home:54,away:46,kind:'percent'},
      {label:'Ecken',home:6,away:2,kind:'number'},
      {label:'Fouls',home:10,away:13,kind:'number'},
      {label:'Angekommene Pässe',home:541,away:462,kind:'number',homeDetail:'90 % · 541/604',awayDetail:'86 % · 462/536'},
      {label:'Gewonnene Zweikämpfe',home:79,away:67,kind:'percent',homeDetail:'26/33',awayDetail:'31/46'},
      {label:'Gewonnene Kopfbälle',home:56,away:41,kind:'percent',homeDetail:'14/25',awayDetail:'11/27'},
      {label:'Gelbe Karten',home:1,away:0,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Intensive Sprints',home:98,away:123,kind:'number'}
    ],
    championsLeagueAfterMatch:{position:5,played:5,wins:4,draws:0,losses:1,goalsFor:11,goalsAgainst:3,goalDifference:8,points:12},
    opponentAfterMatch:{team:'FC Barcelona',position:4,played:5,wins:4,draws:1,losses:0,goalsFor:10,goalsAgainst:2,goalDifference:8,points:13},
    ratings:{
      'Paulo Henrique':6.4,'Diego Fernández':7.5,'Darcy Andrews':6.8,'Daniele Di Maio':6.8,'Kevin Kelly':6.4,
      'Amir Mašić':6.7,'Justin Ramsey':6.5,"Cormac O'Kane":6.6,'Giacomo Papini':6.4,'Romano Maisto':6.5,
      'Emerson Escárcega':7.4,"Jim O'Neill":6.6,'Dom Docherty':6.5,'Jake Roberts':6.7,'Pol Muñoz':6.5,'Billy Walker':6.4
    },
    standout:{player:'Diego Fernández',team:'Finn Harps',rating:7.5,assists:1,note:'Bereitet Escárcegas 1:2 vor und wird in der Matchanalyse als häufigster Ballgewinner der Harps hervorgehoben.'},
    goalscorer:{player:'Emerson Escárcega',team:'Finn Harps',rating:7.4,goals:1,note:'Verkürzt in der 50. Minute auf 1:2 und erzielt mit dem einzigen Harps-Schuss aufs Tor den Anschlusstreffer.'},
    opponentStandout:{player:'Álvaro Pérez',team:'FC Barcelona',rating:8.9,note:'Wird als bester Spieler der Partie geführt; die Matchübersicht weist 1,57 Expected Assists aus.'},
    analysis:{
      summary:'Barcelona kontrolliert mehr Phasen des Spiels und gewinnt das Chancenbild klar. Die Harps kommen nur auf fünf Abschlüsse und einen Schuss aufs Tor, bleiben nach Escárcegas frühem Anschlusstreffer in der zweiten Hälfte aber bis zum Ende im Ergebnis.',
      decisiveSpell:'Die Partie kippt unmittelbar vor der Pause: Emmanuel Musah trifft in der 39. Minute, Fernandes nur eine Minute später. Aus einem offenen Spiel wird innerhalb von zwei Angriffen ein 0:2-Rückstand.',
      response:'Emerson Escárcega antwortet in der 50. Minute nach Vorlage von Diego Fernández. Der Treffer verhindert, dass Barcelona das Spiel früh komplett beruhigen kann.',
      chanceVolume:'Mit 12:5 Schüssen, 4:1 Abschlüssen aufs Tor und 2,30:0,76 xG erzeugt Barcelona deutlich mehr Abschlussvolumen. Finn Harps kommt zwar zu einzelnen gefährlichen Situationen, aber zu selten in den Strafraum.',
      midfield:'Diego Fernández liefert mit Note 7,5 die stärkste Harps-Leistung und bereitet das Tor vor. Cormac O’Kane wird in der Matchanalyse dagegen als Spieler mit geringem offensivem Einfluss genannt.',
      table:'Nach fünf Spielen steht Finn Harps bei zwölf Punkten und 11:3 Toren auf Platz fünf. Barcelona zieht mit 13 Punkten auf Rang vier vorbei.'
    },
    notes:[
      'Barcelona bleibt mit dem Sieg seit zwölf Spielen ungeschlagen.',
      'Paulo Henriques Serie ohne Gegentor endet nach zuvor 203 Minuten.'
    ],
    sources:['FM-Spielübersicht FC Barcelona – Finn Harps · 27.11.2041','Finn-Harps-Spielerstatistiken · 27.11.2041','Champions-League-Tabelle nach dem 5. Spieltag · 27.11.2041']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const barcelona=window.FM_CLUBS.find(x=>x.id==='barcelona'||x.name==='FC Barcelona'||x.name==='Barcelona');
  if(barcelona){
    barcelona.meetings=barcelona.meetings||[];
    const meeting={date:'27.11.2041',venue:'A',result:'1:2',competition:'UEFA Champions League · Ligaphase'};
    const idx=barcelona.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)barcelona.meetings[idx]=meeting;else barcelona.meetings.push(meeting);
    barcelona.lastMeeting='27.11.2041 · FC Barcelona 2:1 Finn Harps';
    barcelona.summary='Barcelona revanchiert sich am 27. November 2041 für das Klub-WM-Aus gegen Finn Harps und gewinnt das Champions-League-Ligaphasenspiel im Spotify Camp Nou mit 2:1. Musah und Fernandes treffen vor der Pause, Escárcega verkürzt nach Wiederbeginn.';
    barcelona.pressReport={id:reportId,href:`presse.html?id=${reportId}`,label:'CHAMPIONS LEAGUE · LIGAPHASE',headline:'Barcelona beendet Harps-Siegesserie in Europa'};
  }

  const current=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...current,
    season:'2041/42',format:'Ligaphase',
    matchday5:{...(current.matchday5||{}),finnHarpsResult:{date:'2041-11-27',home:'FC Barcelona',away:'Finn Harps',score:'2:1'}},
    standingsSnapshot:{
      ...(current.standingsSnapshot||{}),date:'2041-11-27',
      barcelona:{position:4,played:5,wins:4,draws:1,losses:0,goalsFor:10,goalsAgainst:2,goalDifference:8,points:13},
      finnHarps:{position:5,played:5,wins:4,draws:0,losses:1,goalsFor:11,goalsAgainst:3,goalDifference:8,points:12}
    },
    headline:'Finn Harps verliert nach vier Champions-League-Siegen erstmals und unterliegt beim FC Barcelona mit 1:2.'
  };

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-11-27';
    season.latestHeadline='Champions League: Finn Harps verliert 1:2 bei Barcelona und steht nach fünf Spielen mit zwölf Punkten auf Rang fünf.';
    season.championsLeagueLeaguePhase={
      ...(season.championsLeagueLeaguePhase||{}),played:5,wins:4,draws:0,losses:1,goalsFor:11,goalsAgainst:3,goalDifference:8,points:12,position:5,
      latestResult:'27.11.2041 · FC Barcelona 2:1 Finn Harps'
    };
    season.changes=season.changes||{notes:[]};
    const note='27.11.2041: Erste Champions-League-Niederlage der Saison. Finn Harps verliert 1:2 beim FC Barcelona; Escárcega trifft nach Vorlage von Diego Fernández. Nach fünf Spielen: 12 Punkte, 11:3 Tore, Platz 5.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {id:'2041-11-27-escarcega-barcelona-goal',date:'2041-11-27',player:'Emerson Escárcega',type:'goal',title:'Tor im Camp Nou',detail:'Trifft bei der 1:2-Niederlage gegen Barcelona in der 50. Minute zum Anschlusstreffer und erhält Note 7,4.'},
    {id:'2041-11-27-diego-fernandez-barcelona-assist',date:'2041-11-27',player:'Diego Fernández',type:'standout',title:'Vorlage und beste Harps-Note',detail:'Bereitet Escárcegas Treffer vor, erhält Note 7,5 und wird in der Matchanalyse als häufigster Ballgewinner der Harps hervorgehoben.'},
    {id:'2041-11-27-paulo-henrique-clean-sheet-run-ends',date:'2041-11-27',player:'Paulo Henrique',type:'milestone',title:'Serie ohne Gegentor endet',detail:'Seine Serie ohne Gegentor endet im Camp Nou nach zuvor 203 Minuten.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2041-11-27',competition:'UEFA Champions League',fixtureDate:'27.11.2041',
    home:'FC Barcelona',away:'Finn Harps',score:'2:1',location:'Spotify Camp Nou · Barcelona · 97.928 Zuschauer',
    headline:'Zwei Minuten vor der Pause entscheiden es: Harps verlieren 1:2 bei Barça',
    subheadline:'Musah und Fernandes treffen in der 39. und 40. Minute. Escárcega antwortet direkt nach der Pause, doch Finn Harps erzeugt im Camp Nou insgesamt zu wenig Abschlussvolumen für das Comeback.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · FC BARCELONA 2:1 FINN HARPS',
    heroStat:{label:'Entscheidende Phase',value:'39. + 40. Minute',note:'Musah 1:0 · Fernandes 2:0'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Vier Spiele, vier Siege: Mit dieser perfekten Bilanz reist Finn Harps nach Barcelona. Dort endet die Serie nicht in einem Einbruch, sondern in einem engen Ergebnis bei einem Gegner, der über 90 Minuten mehr Chancen erzeugt. Zwei Gegentore unmittelbar vor der Pause geben der Partie ihre Richtung. Escárcega bringt die Harps nach Wiederbeginn sofort zurück, doch ein zweiter Treffer fällt nicht mehr.',
    sections:[
      {title:'39 und 40: Barça schlägt doppelt zu',text:'Emmanuel Musah bringt Barcelona in der 39. Minute in Führung. Nur eine Minute später erhöht Fernandes auf 2:0. Die Harps gehen damit nach einer bis dahin offenen Partie plötzlich mit einem Zwei-Tore-Rückstand in die Kabine.'},
      {title:'Escárcega antwortet sofort',text:'Fünf Minuten nach Wiederbeginn verkürzt Emerson Escárcega auf 1:2. Diego Fernández liefert die Vorlage. Es bleibt der einzige Harps-Schuss aufs Tor, aber er öffnet die Partie für die gesamte zweite Hälfte wieder.'},
      {title:'Barcelona erzeugt mehr Druck',text:'Die Gastgeber gewinnen die Schussstatistik 12:5 und das xG-Duell 2,30:0,76. Barcelona bringt vier Abschlüsse aufs Tor, Finn Harps einen. Auch bei Großchancen liegt Barça mit 3:1 vorne.'},
      {title:'Fernández hält das Zentrum zusammen',text:'Diego Fernández erhält mit 7,5 die beste Harps-Note und bereitet den Treffer vor. Zusätzlich hebt die Matchanalyse seine vielen Ballgewinne hervor. Offensiv fehlt dagegen insbesondere über O’Kane und die Verbindungen in den Strafraum der gewohnte Einfluss.'},
      {title:'Die erste Niederlage ändert wenig an der Ausgangslage',text:'Finn Harps steht nach fünf Champions-League-Spielen bei vier Siegen, einer Niederlage, zwölf Punkten und 11:3 Toren. Das reicht nach dem Spieltag für Platz fünf und hält die direkte Top-8-Qualifikation weiter klar in Reichweite.'},
      {title:'Barcelona gewinnt das Wiedersehen',text:'Im Juni hatte Finn Harps Barcelona im Klub-WM-Viertelfinale nach Verlängerung mit 4:2 ausgeschaltet. Fünf Monate später holt Barça im eigenen Stadion die Revanche in der Ligaphase.'}
    ],
    strengthsTitle:'WAS TROTZ DER NIEDERLAGE TRÄGT',strengthsHeading:'Reaktion und Widerstandskraft',
    strengths:['Escárcega trifft direkt nach der Pause','Diego Fernández mit Vorlage und Note 7,5','Nur zwei Gegentore trotz 2,30 xG Barcelonas','123 intensive Sprints','Nach dem 1:2 bleibt die Partie bis zum Ende offen'],
    vulnerabilitiesTitle:'WAS BARCELONA OFFENLEGT',vulnerabilitiesHeading:'Zu wenig Zugriff im letzten Drittel',
    vulnerabilities:['Nur fünf Abschlüsse','Nur ein Schuss aufs Tor','0,76 xG','Nur eine Großchance','Zwei Gegentore innerhalb von zwei Minuten','Zu wenige Ballkontakte im gegnerischen Strafraum'],
    verdictHeading:'Keine Krise, sondern die erste echte Grenze dieser Ligaphase',
    verdict:'Barcelona ist an diesem Abend die bessere Mannschaft und erzeugt mehr Druck, aber Finn Harps fällt nicht auseinander. Die zwei Tore kurz vor der Pause entscheiden die Partie, Escárcegas schnelle Antwort hält sie offen. Nach vier Siegen ist ein 1:2 im Camp Nou eher ein nützlicher Härtetest als ein Rückschlag mit struktureller Bedeutung.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-11-27-barcelona-finn-harps',date:'2041-11-27',season:2041,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · 5. SPIELTAG',
    title:'Erste Niederlage: Harps unterliegen Barça 1:2',
    summary:'Musah und Fernandes treffen innerhalb von zwei Minuten vor der Pause. Escárcega verkürzt nach Vorlage von Diego Fernández, doch Barcelona beendet den perfekten Champions-League-Start der Harps.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','barcelona','emerson-escarcega','diego-fernandez','season-2041']
  });
})();