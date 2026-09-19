(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-09-09';
  const fixtureId='2042-09-09-finn-harps-inter-champions-league';
  const matchReportId='2042-09-09-finn-harps-inter-4-0-match-report';
  const halftimeId='2042-09-09-finn-harps-inter-halftime-analysis';
  const reactionId='2042-09-09-finn-harps-inter-postmatch-reaction';
  const roundupId='2042-09-09-champions-league-tuesday-roundup';

  const match={
    id:fixtureId,date,season:2042,competition:'UEFA Champions League',stage:'Ligaphase · 1. Spieltag',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:4},
    away:{id:'inter',name:'FC Internazionale Milano',short:'INT',score:0},
    score:'4:0',homeGoals:4,awayGoals:0,halfTime:'3:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:10000,awayFans:500,
    weather:'Böig · 20 °C',pitch:'Perfekter Rasen',
    headline:'Traumstart in die Königsklasse: Finn Harps zerlegen Inter 4:0',
    verdict:'Drei Tore in den ersten 15 Minuten nehmen Inter jede Luft. Diego Fernández eröffnet, Emerson Escárcega trifft doppelt und Giacomo Papini setzt früh den dritten Treffer. Nach der Pause kontrollieren die Harps das Spiel und Escárcega vollendet seinen Doppelpack zum 4:0. Nach dem ersten Dienstag der Ligaphase steht Finn Harps damit an der Tabellenspitze.',
    scorers:[
      {player:'Diego Fernández',team:'Finn Harps',goals:1,minutes:[4]},
      {player:'Emerson Escárcega',team:'Finn Harps',goals:2,minutes:[9,54]},
      {player:'Giacomo Papini',team:'Finn Harps',goals:1,minutes:[15]}
    ],
    events:[
      {minute:4,type:'goal',team:'Finn Harps',player:'Diego Fernández',text:'1:0'},
      {minute:9,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'2:0'},
      {minute:15,type:'goal',team:'Finn Harps',player:'Giacomo Papini',text:'3:0'},
      {minute:54,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'4:0'}
    ],
    stats:[
      {label:'Schüsse',home:15,away:2,kind:'number'},
      {label:'Schüsse aufs Tor',home:5,away:1,kind:'number'},
      {label:'xG',home:3.15,away:0.31,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:6,away:1,kind:'number'},
      {label:'Großchancen',home:3,away:0,kind:'number'},
      {label:'Ballbesitz',home:55,away:45,kind:'percent'},
      {label:'Ecken',home:5,away:2,kind:'number'},
      {label:'Fouls',home:15,away:15,kind:'number'},
      {label:'Angekommene Pässe',home:'90% (484/539)',away:'88% (394/450)',kind:'text'},
      {label:'Gewonnene Zweikämpfe',home:'86% (24/28)',away:'63% (20/33)',kind:'text'},
      {label:'Gewonnene Kopfduelle',home:'52% (14/27)',away:'41% (12/29)',kind:'text'},
      {label:'Gelbe Karten',home:0,away:0,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Notenschnitt',home:7.44,away:6.31,kind:'decimal'},
      {label:'Intensive Sprints',home:143,away:160,kind:'number'}
    ],
    ratings:{
      'Evan Reilly':7.0,'Diego Fernández':7.8,'Torric Bruce':7.2,'Mareks Istrankins':7.2,'Raúl':7.4,
      'Amir Mašić':7.0,'Pol Muñoz':7.0,"Cormac O'Kane":7.3,'Giacomo Papini':7.2,'Dom Docherty':8.0,
      'Emerson Escárcega':8.2,'Gustavo da Silva':6.9,'Justin Ramsey':6.8,'Alejandro López':6.9,
      'Daryl Frame':6.7,'Billy Walker':8.3
    },
    standout:{
      player:'Billy Walker',team:'Finn Harps',rating:8.3,
      note:'Spieler des Spiels laut 90min. Der Flügelspieler erzeugt 1,37 Expected Assists und prägt die rechte Seite, obwohl die Tore anderen gehören.'
    },
    milestones:[
      'Evan Reilly absolviert seinen 50. Einsatz für Finn Harps.',
      'Evan Reilly bleibt seit 492 Minuten ohne Gegentor für Finn Harps.',
      'Amir Mašić absolviert seinen 175. Einsatz für Finn Harps.',
      'Finn Harps schraubt den Saisonrekord an Siegen in Serie auf 18.',
      'Inters Torwart Maurizio Laporta wird nach zuvor 203 Minuten ohne Gegentor wieder bezwungen.',
      'Thomas Lamptey absolviert seinen 150. Einsatz für Inter.',
      'Paolo Bonato absolviert seinen 325. Einsatz für Inter.'
    ],
    tacticalNotes:{
      finnHarps:[
        'Gute Quote von Vorstößen ins letzte Drittel, die zu Torschüssen führen.',
        'Kaum Freistöße in vielversprechenden Bereichen zugelassen.',
        'Die Harps gewinnen 86 Prozent ihrer registrierten Zweikämpfe.'
      ],
      inter:[
        'Julian Reyes verliert häufiger als jeder andere Inter-Spieler den Ballbesitz.',
        'Adama Konaté nimmt insgesamt wenig Einfluss auf Inters Offensivspiel.',
        'Inter verzeichnet zu wenige Ballkontakte im Strafraum und kommt insgesamt nur auf zwei Abschlüsse.'
      ]
    },
    halftimeAnalysis:{
      score:'3:0',
      title:'15 Minuten reichen, um Inter zu zerlegen',
      text:'Die erste Viertelstunde entscheidet den europäischen Auftakt praktisch im Alleingang: Fernández trifft nach vier Minuten, Escárcega nach neun, Papini nach 15. Inter kommt mit seiner körperlichen Qualität und der Doppelspitze überhaupt nicht in die Partie. Für die Harps lautet die Aufgabe zur Pause nicht mehr, das Spiel zu öffnen, sondern es mit Kontrolle, sauberen Abständen und ohne unnötige Risiken zu Ende zu bringen.',
      turningPoint:'Das 3:0 durch Papini nach nur 15 Minuten nimmt Inter den letzten Rest an Spielkontrolle.',
      secondHalfPlan:[
        'Zentrum kompakt halten und Fornés/Vukelja voneinander trennen.',
        'Inter zu langen Angriffswegen zwingen statt selbst in wilde Umschaltduelle zu geraten.',
        'Nach der Stunde mit frischen Spielern das im Scouting identifizierte Inter-Zeitfenster 61.–75. Minute attackieren, falls sich Räume ergeben.'
      ]
    },
    postMatchAnalysis:{
      title:'Nicht nur ein Sieg, sondern eine europäische Ansage',
      text:'Das 4:0 ist auch statistisch keine Laune des Ergebnisses. Finn Harps führt bei Schüssen 15:2, bei xG 3,15:0,31 und bei Großchancen 3:0. Inter hat 45 Prozent Ballbesitz, aber fast keine gefährlichen Aktionen. Die Harps gewinnen nicht durch Rückzug, sondern indem sie dem italienischen Schwergewicht ihre eigene Spielidee aufzwingen.',
      keyPoints:[
        'Drei Tore bis Minute 15.',
        'Escárcega mit Doppelpack.',
        'Billy Walker trotz fehlenden Tores mit Note 8,3 Spieler des Spiels.',
        'Reilly mit dem nächsten Zu-null-Spiel und nun 492 Minuten ohne Gegentor.',
        'Finn Harps ist nach dem ersten Dienstag aufgrund des 4:0 Tabellenführer der Ligaphase.'
      ]
    },
    sources:[
      'FM-Spielübersicht Finn Harps – Inter · 09.09.2042',
      'Finn-Harps-Spielerstatistiken · 09.09.2042',
      '90min-Spielbericht · 09.09.2042',
      'Champions-League-Ergebnisse · Dienstag, 09.09.2042',
      'Champions-League-Tabelle · nach den Dienstagsspielen'
    ]
  };

  upsert(window.FM_MATCHES,match);

  const fixture=['2042-09-09','20:00','Inter','Heim','4:0','Ligaphase der UEFA Champions League',0];
  const fixtureIndex=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[0]===date&&x[2]==='Inter');
  if(fixtureIndex>=0)window.FM_FIXTURES[fixtureIndex]=fixture;else window.FM_FIXTURES.push(fixture);

  const inter=window.FM_CLUBS.find(x=>x.id==='inter'||x.id==='internazionale'||x.name==='Inter'||x.name==='FC Internazionale Milano');
  if(inter){
    inter.meetings=inter.meetings||[];
    const meeting={date:'09.09.2042',competition:'UEFA Champions League · Ligaphase',venue:'A',result:'4:0'};
    const idx=inter.meetings.findIndex(x=>x.date===meeting.date);
    if(idx>=0)inter.meetings[idx]=meeting;else inter.meetings.unshift(meeting);
    inter.lastMeeting='09.09.2042 · Finn Harps 4:0 Inter';
    inter.summary='Inter erlebt in Donegal einen Albtraumstart: Nach 15 Minuten steht es bereits 3:0. Escárcega trifft doppelt, Fernández und Papini ebenfalls. Am Ende verliert Inter den Champions-League-Auftakt 0:4.';
  }

  const tuesdayResults=[
    {home:'Bodø/Glimt',away:"St Patrick's Athletic",homeGoals:0,awayGoals:0,score:'0:0'},
    {home:'Celtic',away:'Cagliari',homeGoals:1,awayGoals:1,score:'1:1'},
    {home:'Dortmund',away:'Liverpool',homeGoals:2,awayGoals:4,score:'2:4'},
    {home:'Finn Harps',away:'Inter',homeGoals:4,awayGoals:0,score:'4:0'},
    {home:'Napoli',away:'Caen',homeGoals:0,awayGoals:0,score:'0:0'},
    {home:'Real Madrid',away:'Manchester United',homeGoals:3,awayGoals:2,score:'3:2'},
    {home:'Roma',away:'Bayer Leverkusen',homeGoals:3,awayGoals:0,score:'3:0'},
    {home:'Villarreal',away:'Atlético de Madrid',homeGoals:1,awayGoals:3,score:'1:3'},
    {home:'Wolfsburg',away:'Young Boys',homeGoals:3,awayGoals:1,score:'3:1'}
  ];

  const tableAfterTuesday=[
    {pos:1,team:'Finn Harps',p:1,w:1,d:0,l:0,gf:4,ga:0,gd:4,pts:3},
    {pos:2,team:'Roma',p:1,w:1,d:0,l:0,gf:3,ga:0,gd:3,pts:3},
    {pos:3,team:'Liverpool',p:1,w:1,d:0,l:0,gf:4,ga:2,gd:2,pts:3},
    {pos:4,team:'Atlético de Madrid',p:1,w:1,d:0,l:0,gf:3,ga:1,gd:2,pts:3},
    {pos:5,team:'Wolfsburg',p:1,w:1,d:0,l:0,gf:3,ga:1,gd:2,pts:3},
    {pos:6,team:'Real Madrid',p:1,w:1,d:0,l:0,gf:3,ga:2,gd:1,pts:3},
    {pos:7,team:'Cagliari',p:1,w:0,d:1,l:0,gf:1,ga:1,gd:0,pts:1},
    {pos:8,team:'Celtic',p:1,w:0,d:1,l:0,gf:1,ga:1,gd:0,pts:1},
    {pos:9,team:'Napoli',p:1,w:0,d:1,l:0,gf:0,ga:0,gd:0,pts:1},
    {pos:10,team:'Caen',p:1,w:0,d:1,l:0,gf:0,ga:0,gd:0,pts:1},
    {pos:11,team:"St Patrick's Athletic",p:1,w:0,d:1,l:0,gf:0,ga:0,gd:0,pts:1},
    {pos:12,team:'Bodø/Glimt',p:1,w:0,d:1,l:0,gf:0,ga:0,gd:0,pts:1},
    {pos:13,team:'Monaco',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
    {pos:14,team:'Barcelona',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
    {pos:15,team:'Tottenham',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
    {pos:16,team:'West Ham',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
    {pos:17,team:'Manchester City',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
    {pos:18,team:'Milan',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
    {pos:19,team:'Benfica',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
    {pos:20,team:'Sporting CP',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
    {pos:21,team:'Galatasaray SK',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
    {pos:22,team:'AEK',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
    {pos:23,team:'PSV Eindhoven',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
    {pos:24,team:'Eintracht Frankfurt',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
    {pos:25,team:'Grenoble Foot 38',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
    {pos:26,team:'Kortrijk',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
    {pos:27,team:'Crvena zvezda',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
    {pos:28,team:'Paris Saint-Germain',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
    {pos:29,team:'Red Bull Salzburg',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
    {pos:30,team:'Dynamo Kyiv',p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0},
    {pos:31,team:'Manchester United',p:1,w:0,d:0,l:1,gf:2,ga:3,gd:-1,pts:0},
    {pos:32,team:'Dortmund',p:1,w:0,d:0,l:1,gf:2,ga:4,gd:-2,pts:0},
    {pos:33,team:'Young Boys',p:1,w:0,d:0,l:1,gf:1,ga:3,gd:-2,pts:0},
    {pos:34,team:'Villarreal',p:1,w:0,d:0,l:1,gf:1,ga:3,gd:-2,pts:0},
    {pos:35,team:'Bayer Leverkusen',p:1,w:0,d:0,l:1,gf:0,ga:3,gd:-3,pts:0},
    {pos:36,team:'Inter',p:1,w:0,d:0,l:1,gf:0,ga:4,gd:-4,pts:0}
  ];

  const cl=window.FM_CHAMPIONS_LEAGUE['2042-43']||{};
  window.FM_CHAMPIONS_LEAGUE['2042-43']={
    ...cl,
    titleHolder:'Manchester United',
    leaguePhase:{
      ...(cl.leaguePhase||{}),
      matchday1:{
        date,
        status:'Dienstagsspiele abgeschlossen',
        finnHarps:{opponent:'Inter',venue:'Heim',score:'4:0',halfTime:'3:0',result:'Sieg'},
        tuesdayResults,
        tableAfterTuesday
      },
      opener:{
        ...((cl.leaguePhase||{}).opener||{}),
        opponent:'Inter',date,venue:'Heim',status:'abgeschlossen',result:'4:0'
      }
    }
  };

  const season=(window.FM_SEASONS||[]).find(x=>x&&(x.year===2042||x.season===2042));
  if(season){
    season.referenceDate=date;
    season.snapshotDate=date;
    season.latestHeadline='Champions League: Finn Harps zerlegt Inter 4:0 und führt nach dem ersten Dienstag die Ligaphase an.';
    season.nextFocus={competition:'UEFA Champions League',stage:'Ligaphase · 2. Spieltag',opponent:'Benfica',venue:'Heim',date:'2042-09-16',status:'anstehend'};
    season.championsLeague=season.championsLeague||{};
    season.championsLeague.current={played:1,wins:1,draws:0,losses:0,goalsFor:4,goalsAgainst:0,goalDifference:4,points:3,positionAfterTuesday:1};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='09.09.2042: Traumstart in die Champions-League-Ligaphase. Finn Harps schlägt Inter 4:0. Fernández (4.), Escárcega (9., 54.) und Papini (15.) treffen. Halbzeit 3:0, Endstatistik 15:2 Schüsse und 3,15:0,31 xG. Nach den Dienstagsspielen führen die Harps die Ligaphase an.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-09-09-evan-reilly-50-harps',date,player:'Evan Reilly',type:'milestone',title:'50 Einsätze für Finn Harps',detail:'Reilly erreicht gegen Inter seinen 50. Einsatz für den Klub und hält erneut die Null.'},
    {id:'2042-09-09-evan-reilly-492-clean',date,player:'Evan Reilly',type:'streak',title:'492 Minuten ohne Gegentor',detail:'Nach dem 4:0 gegen Inter ist Reilly seit 492 Minuten ohne Gegentreffer.'},
    {id:'2042-09-09-amir-masic-175-harps',date,player:'Amir Mašić',type:'milestone',title:'175 Einsätze für Finn Harps',detail:'Mašić erreicht beim Champions-League-Auftakt seinen 175. Einsatz für die Harps.'},
    {id:'2042-09-09-escarcega-double-inter',date,player:'Emerson Escárcega',type:'standout',title:'Doppelpack gegen Inter',detail:'Escárcega trifft in Minute 9 und 54 beim 4:0 gegen Inter.'},
    {id:'2042-09-09-billy-walker-motm-inter',date,player:'Billy Walker',type:'standout',title:'Spieler des Spiels gegen Inter',detail:'Walker erhält Note 8,3 und erzeugt 1,37 Expected Assists.'},
    {id:'2042-09-09-diego-fernandez-inter-opener',date,player:'Diego Fernández',type:'goal',title:'Blitzstart gegen Inter',detail:'Fernández eröffnet das 4:0 bereits in Minute 4.'},
    {id:'2042-09-09-papini-inter-goal',date,player:'Giacomo Papini',type:'goal',title:'3:0 nach 15 Minuten',detail:'Papini trifft in Minute 15 und vollendet den historischen Blitzstart.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  upsert(window.FM_PRESS_REPORTS,{
    id:halftimeId,type:'Halbzeitanalyse',date,competition:'UEFA Champions League',fixtureDate:date,
    headline:'HALBZEIT: 15 Minuten reichen – Harps führen Inter 3:0 vor',
    subheadline:'Fernández, Escárcega und Papini treffen bis zur 15. Minute. Inter findet keinen Zugriff auf das Zentrum und keine Tiefe im eigenen Angriff.',
    label:'CHAMPIONS LEAGUE · HALBZEIT · FINN HARPS 3:0 INTER',
    heroStat:{label:'BLITZSTART',value:'3 TORE',note:'4. · 9. · 15. Minute'},
    intro:'Der Champions-League-Auftakt kippt in einer Viertelstunde komplett. Finn Harps bestraft Inter dreimal, bevor die Partie überhaupt ihren normalen Rhythmus findet.',
    sections:[
      {title:'4. Minute: Fernández öffnet die Tür',text:'Diego Fernández trifft früh und zwingt Inter sofort dazu, seinen ursprünglichen Plan zu verlassen.'},
      {title:'9. Minute: Escárcega macht aus Druck Kontrolle',text:'Nur fünf Minuten später erhöht Escárcega. Der italienische Gegner muss nun höher und riskanter spielen.'},
      {title:'15. Minute: Papini macht den Blitzstart komplett',text:'Papini nutzt den nächsten Fehler und trifft zum 3:0. Innerhalb von elf Minuten verwandelt Finn Harps den europäischen Auftakt in eine Machtdemonstration.'},
      {title:'Was jetzt wichtig ist',text:'Die zweite Halbzeit verlangt keine Hektik. Inter muss kommen. Für die Harps geht es darum, das Zentrum kompakt zu halten, die Doppelspitze voneinander zu trennen und freie Räume nach Ballgewinnen sauber auszuspielen.'}
    ],
    verdictHeading:'Die erste Hälfte ist gewonnen – das Spiel noch nicht',
    verdict:'3:0 ist eine außergewöhnliche Ausgangslage, aber genau deshalb muss Finn Harps nach der Pause kontrolliert bleiben. Kein offener Schlagabtausch, keine Einladung zu Standards und keine unnötigen Ballverluste im Zentrum.',
    sources:['FM-Spielstand zur Halbzeit · Finn Harps 3:0 Inter · 09.09.2042']
  });

  upsert(window.FM_PRESS_REPORTS,{
    id:matchReportId,type:'Spielbericht',date,competition:'UEFA Champions League',fixtureDate:date,
    headline:'Vier Tore, keine Zweifel: Finn Harps demontiert Inter zum Königsklassen-Auftakt',
    subheadline:'3:0 nach 15 Minuten, 4:0 nach 54. Escárcega trifft doppelt, Fernández und Papini ebenfalls. Inter kommt im Donegal Stadium auf nur zwei Abschlüsse.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · FINN HARPS 4:0 INTER',
    heroStat:{label:'AUFTAKT',value:'4:0',note:'15:2 Schüsse · 3,15:0,31 xG'},
    intro:'Das sollte der schwere Auftakt in die Ligaphase werden. Stattdessen erlebt Inter in Donegal eine Viertelstunde, die das ganze Spiel verschluckt. Finn Harps trifft dreimal bis Minute 15 und gewinnt am Ende 4:0.',
    sections:[
      {title:'Fernández nach vier Minuten',text:'Finn Harps braucht kaum Anlauf. Diego Fernández bringt die Gastgeber bereits in Minute vier in Führung und setzt damit die Tonlage des Abends.'},
      {title:'Escárcega und Papini machen Inter schwindelig',text:'Escárcega erhöht in Minute neun, Papini trifft sechs Minuten später zum 3:0. Der Gegner findet weder defensive Stabilität noch gefährliche Strafraumaktionen.'},
      {title:'Escárcega beendet jede Resthoffnung',text:'In Minute 54 erzielt der 32-jährige Stürmer seinen zweiten Treffer. Danach verwaltet Finn Harps den Vorsprung, ohne die Kontrolle abzugeben.'},
      {title:'Die Zahlen sind ebenso brutal wie das Ergebnis',text:'15:2 Schüsse, 5:1 aufs Tor, 3,15:0,31 xG, 3:0 Großchancen und 55 Prozent Ballbesitz. Inter hat durchaus Ballphasen, aber fast keine Durchschlagskraft.'},
      {title:'Walker ist der unsichtbare Mann des Abends',text:'Die Tore gehören Fernández, Papini und Escárcega. Spieler des Spiels wird jedoch Billy Walker mit Note 8,3. Seine 1,37 Expected Assists zeigen, wie viel Gefahr er aus seiner Zone erzeugt.'},
      {title:'Reillys neue Rolle beginnt mit einem Statement',text:'Nach dem Henrique-Verkauf ist Evan Reilly die neue Nummer eins. Gegen Inter bleibt er zu null, absolviert seinen 50. Harps-Einsatz und steht nun bei 492 Minuten ohne Gegentor.'}
    ],
    strengthsTitle:'WAS DEN ABEND AUSMACHT',strengthsHeading:'Ein Auftakt ohne Schwachstelle',
    strengths:['3:0 nach 15 Minuten','Escárcega mit Doppelpack','Billy Walker: Note 8,3 und 1,37 xA','Reilly seit 492 Minuten ohne Gegentor','86 % gewonnene Zweikämpfe','Inter nur mit zwei Schüssen','Finn Harps nach dem Dienstag auf Platz 1 der Ligaphase'],
    verdictHeading:'Aus Respekt wird Distanz',
    verdict:'Finn Harps behandelt Inter nicht wie einen großen Namen, sondern wie ein taktisches Problem. Das Ergebnis ist eine der klarsten europäischen Vorstellungen der jüngeren Vereinsgeschichte. Der Finalist der vergangenen Saison beginnt die neue Kampagne nicht mit einem vorsichtigen Schritt, sondern mit einem Knall.',
    sources:['FM-Spielübersicht Finn Harps – Inter · 09.09.2042','Finn-Harps-Spielerstatistiken · 09.09.2042','90min-Spielbericht · 09.09.2042']
  });

  upsert(window.FM_PRESS_REPORTS,{
    id:reactionId,type:'Nachspiel',date,competition:'UEFA Champions League',fixtureDate:date,
    headline:'NACHSPIEL: Donegal spricht wieder europäisch',
    subheadline:'Der 4:0-Auftakt gegen Inter verändert nicht die Saisonziele – aber er verändert sofort den Ton dieser Ligaphase.',
    label:'NACHSPIEL · FINN HARPS 4:0 INTER',
    heroStat:{label:'TABELLENPLATZ',value:'#1',note:'nach den Dienstagsspielen'},
    intro:'Die vielleicht wichtigste Erkenntnis des Abends steckt nicht im vierten Tor. Finn Harps brauchte gegen Inter keine Außenseitergeschichte. Die Harps waren das bessere Team, spielten wie das bessere Team und gewannen wie das bessere Team.',
    sections:[
      {title:'Der Name Inter hatte keine taktische Wirkung',text:'Die Harps blieben bei ihrer Struktur, ihrer Pressingidee und ihrer offensiven Besetzung. Es gab keinen defensiven Sonderplan aus Ehrfurcht – und genau das zahlte sich aus.'},
      {title:'Escárcega beantwortet Monaco auf dem Platz',text:'Nur wenige Tage nach dem Transferinteresse aus Monaco liefert der 32-Jährige auf Europas Bühne zwei Tore. Der Wert seines Verbleibs ist damit ziemlich anschaulich dokumentiert.'},
      {title:'Frame kommt diesmal von der Bank',text:'Nach seinem Doppelpack gegen UCD startet Frame nicht. Das unterstreicht die Tiefe des Kaders: Selbst ein Spieler in solcher Form ist kein Zwangsbaustein, sondern eine weitere hochwertige Option.'},
      {title:'Die neue Nummer eins bleibt unberührt',text:'Reilly erlebt seinen ersten Champions-League-Abend nach Henriques Abgang mit einem Zu-null-Spiel. Für einen 19-Jährigen ist das weniger Prüfung als Ausrufezeichen.'},
      {title:'Benfica wird nun ein anderes Spiel',text:'Der 4:0-Sieg verschafft den Harps sofort Spielraum. Gegen Benfica geht es am zweiten Spieltag nicht darum, einen Fehlstart zu vermeiden, sondern den perfekten Start auszubauen.'}
    ],
    verdictHeading:'Der Finalist von 2042 ist auch 2042/43 sofort wieder da',
    verdict:'Ein Spiel gewinnt noch keine Ligaphase. Aber es kann eine Hierarchie sichtbar machen. Nach diesem Abend gehört Finn Harps nicht zu den Teams, die auf einen guten europäischen Lauf hoffen. Die Harps gehören zu den Teams, gegen die andere einen guten Abend brauchen.',
    sources:['FM-Spielübersicht Finn Harps – Inter · 09.09.2042','Champions-League-Tabelle nach den Dienstagsspielen · 09.09.2042']
  });

  upsert(window.FM_PRESS_REPORTS,{
    id:roundupId,type:'Europapokal-Rundschau',date,competition:'UEFA Champions League',fixtureDate:date,
    headline:'Dienstag in Europa: Liverpool gewinnt in Dortmund, Real schlägt United – Harps ganz oben',
    subheadline:'Neun Spiele eröffnen den ersten Champions-League-Dienstag. Finn Harps liefert mit dem 4:0 gegen Inter das höchste Ergebnis des Abends.',
    label:'CHAMPIONS LEAGUE · DIENSTAGSRUNDSCHAU · 09.09.2042',
    heroStat:{label:'HÖCHSTER SIEG',value:'4:0',note:'Finn Harps gegen Inter'},
    intro:'Der erste Dienstag der Ligaphase liefert klare Sieger, drei Remis und einen spektakulären Auswärtssieg Liverpools in Dortmund. Nach den neun Partien steht Finn Harps aufgrund der besten Tordifferenz ganz oben.',
    sections:[
      {title:'Bodø/Glimt 0:0 St Patrick’s Athletic',text:'Der zweite irische Vertreter startet auswärts mit einem Punkt. Tore fallen in Norwegen keine.'},
      {title:'Celtic 1:1 Cagliari',text:'Auch in Glasgow gibt es keinen Sieger. Beide Teams starten mit einem Punkt.'},
      {title:'Dortmund 2:4 Liverpool',text:'Liverpool setzt eines der offensiven Ausrufezeichen des Abends und gewinnt mit vier Auswärtstoren in Dortmund.'},
      {title:'Finn Harps 4:0 Inter',text:'Der höchste Sieg des Dienstags. Drei Harps-Tore fallen bereits in den ersten 15 Minuten.'},
      {title:'Napoli 0:0 Caen',text:'Der im Vorfeld als Wettbewerbsfavorit genannte Napoli kommt zuhause nicht über ein torloses Remis hinaus.'},
      {title:'Real Madrid 3:2 Manchester United',text:'Der Titelverteidiger startet mit einer Niederlage. Real Madrid gewinnt das prominenteste Duell des Abends 3:2.'},
      {title:'Roma 3:0 Bayer Leverkusen',text:'Roma bleibt ohne Gegentor und schiebt sich mit +3 direkt hinter Finn Harps.'},
      {title:'Villarreal 1:3 Atlético de Madrid',text:'Atlético gewinnt das spanische Duell auswärts und startet mit drei Punkten.'},
      {title:'Wolfsburg 3:1 Young Boys',text:'Auch Wolfsburg beginnt mit einem klaren Heimsieg und reiht sich in der Spitzengruppe ein.'}
    ],
    verdictHeading:'Erste Tabelle, erste kleine Botschaft',
    verdict:'Die Tabelle ist nach einem halben Spieltag naturgemäß nur eine Momentaufnahme. Trotzdem ist das Bild hübsch: Finn Harps auf Platz eins, Inter auf Platz 36 – und Titelverteidiger Manchester United startet ebenfalls mit einer Niederlage.',
    table:tableAfterTuesday,
    results:tuesdayResults,
    sources:['Champions-League-Ergebnisse · Dienstag, 09.09.2042','Champions-League-Tabelle · nach den Dienstagsspielen']
  });

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  [
    {
      id:'2042-09-09-finn-harps-inter-4-0',date,season:2042,category:'Champions League',accent:'blue',featured:true,
      eyebrow:'CHAMPIONS LEAGUE · 4:0',
      title:'Drei Tore in 15 Minuten: Harps zerlegen Inter',
      summary:'Fernández, Escárcega und Papini sorgen für ein 3:0 nach einer Viertelstunde. Escárcega legt nach der Pause nach. Finn Harps startet mit einem 4:0 in die Ligaphase.',
      href:`presse.html?id=${matchReportId}`,
      entities:['finn-harps','inter','diego-fernandez','emerson-escarcega','giacomo-papini','billy-walker','evan-reilly','season-2042']
    },
    {
      id:'2042-09-09-inter-halftime-analysis',date,season:2042,category:'Analyse',accent:'blue',featured:false,
      eyebrow:'HALBZEIT · 3:0',
      title:'15 Minuten, drei Tore, Inter ohne Antwort',
      summary:'Die Halbzeitanalyse zum Champions-League-Auftakt: Finn Harps entscheidet die Partie früh und muss nach der Pause vor allem die Kontrolle bewahren.',
      href:`presse.html?id=${halftimeId}`,
      entities:['finn-harps','inter','season-2042']
    },
    {
      id:'2042-09-09-inter-postmatch-reaction',date,season:2042,category:'Nachspiel',accent:'green',featured:false,
      eyebrow:'NACHSPIEL · 4:0',
      title:'Donegal spricht wieder europäisch',
      summary:'Warum der 4:0-Sieg mehr als ein gutes Ergebnis ist: Die Harps behandeln Inter nicht wie einen Mythos, sondern wie ein lösbares taktisches Problem.',
      href:`presse.html?id=${reactionId}`,
      entities:['finn-harps','inter','season-2042']
    },
    {
      id:'2042-09-09-champions-league-roundup',date,season:2042,category:'Champions League',accent:'gold',featured:false,
      eyebrow:'DIENSTAGSRUNDSCHAU',
      title:'Liverpool siegt in Dortmund, Real schlägt United, Harps führen',
      summary:'Alle neun Dienstagsspiele des ersten Ligaphasen-Spieltags inklusive der ersten Tabelle.',
      href:`presse.html?id=${roundupId}`,
      entities:['champions-league','finn-harps','liverpool','real-madrid','man-utd','season-2042']
    }
  ].forEach(item=>upsert(window.FM_NEWS,item));
})();