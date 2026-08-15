(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2041-10-11-finn-harps-athlone-town-premier-division';
  const reportId='2041-10-11-finn-harps-athlone-town-spielbericht';

  const match={
    id:fixtureId,date:'2041-10-11',season:2041,competition:'Premier Division',stage:'Liga',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:3},
    away:{id:'athlone-town',name:'Athlone Town',short:'ATH',score:2},
    score:'3:2',homeGoals:3,awayGoals:2,halfTime:'1:2',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:11984,awayFans:195,weather:'12 °C',referee:'Jason Forde',
    headline:'Rouvière rettet den Sieg spät: Finn Harps dreht Athlone Town zum 3:2',
    verdict:'Nach der langen Länderspielphase wirkt Finn Harps nicht ganz frisch und liegt zur Pause 1:2 zurück. Trotz klarer Überlegenheit bei Schüssen, Ballbesitz und xG braucht es bis in die Nachspielzeit, ehe Basile Rouvière das 3:2 erzielt. Das Ergebnis ist knapp, die Chancenbilanz aber deutlich zugunsten des Meisters.',
    scorers:[
      {player:'Vladyslav Protsiv',team:'Athlone Town',goals:1,minutes:[34]},
      {player:'Justin Ramsey',team:'Finn Harps',goals:1,minutes:[35]},
      {player:'Ben Campbell',team:'Athlone Town',goals:1,minutes:['45+1']},
      {player:'Gustavo da Silva',team:'Finn Harps',goals:1,minutes:[49]},
      {player:'Basile Rouvière',team:'Finn Harps',goals:1,minutes:['90+5']}
    ],
    events:[
      {minute:13,type:'yellow',team:'Finn Harps',player:'Jake Roberts',text:'Gelbe Karte'},
      {minute:28,type:'yellow',team:'Finn Harps',player:"Jim O'Neill",text:'Gelbe Karte'},
      {minute:34,type:'goal',team:'Athlone Town',player:'Vladyslav Protsiv',text:'0:1'},
      {minute:35,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'1:1'},
      {minute:'45+1',type:'goal',team:'Athlone Town',player:'Ben Campbell',text:'1:2'},
      {minute:49,type:'goal',team:'Finn Harps',player:'Gustavo da Silva',text:'2:2'},
      {minute:56,type:'yellow',team:'Athlone Town',player:'Vladyslav Protsiv',text:'Gelbe Karte'},
      {minute:62,type:'yellow',team:'Athlone Town',player:'Richie Doyle',text:'Gelbe Karte'},
      {minute:'90+5',type:'goal',team:'Finn Harps',player:'Basile Rouvière',text:'3:2'}
    ],
    stats:[
      {label:'Schüsse',home:22,away:7,kind:'number'},
      {label:'Schüsse aufs Tor',home:10,away:5,kind:'number'},
      {label:'xG',home:3.76,away:0.65,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:7,away:1,kind:'number'},
      {label:'Großchancen',home:2,away:1,kind:'number'},
      {label:'Ballbesitz',home:70,away:30,kind:'percent'},
      {label:'Ecken',home:12,away:2,kind:'number'},
      {label:'Fouls',home:23,away:22,kind:'number'},
      {label:'Angekommene Pässe',home:516,away:222,kind:'number',homeDetail:'88 % · 516/588',awayDetail:'74 % · 222/302'},
      {label:'Gewonnene Zweikämpfe',home:83,away:67,kind:'percent',homeDetail:'10/12',awayDetail:'18/27'},
      {label:'Gewonnene Kopfbälle',home:40,away:57,kind:'percent',homeDetail:'24/60',awayDetail:'33/58'},
      {label:'Gelbe Karten',home:2,away:2,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Intensive Sprints',home:103,away:59,kind:'number'}
    ],
    leagueAfterMatch:{position:1,played:31,wins:29,draws:2,losses:0,goalsFor:94,goalsAgainst:13,goalDifference:81,points:89},
    standout:{player:'Basile Rouvière',team:'Finn Harps',rating:8.8,goals:1,note:'Trifft in der 95. Minute zum 3:2 und entscheidet ein unerwartet zähes Heimspiel.'},
    keyPerformers:[
      {player:'Justin Ramsey',rating:6.8,goals:1,note:'Antwortet nur eine Minute nach dem 0:1 mit dem Ausgleich.'},
      {player:'Gustavo da Silva',rating:7.6,goals:1,note:'Gleicht kurz nach der Pause zum 2:2 aus.'}
    ],
    milestones:[
      {player:'Basile Rouvière',text:'100. Ligaspiel für Finn Harps'},
      {player:'Tommy Cowan',team:'Athlone Town',text:'175. Spiel als Profi'},
      {player:'Vladyslav Protsiv',team:'Athlone Town',text:'1. Tor für Athlone Town'},
      {player:'Sam Mukisa',team:'Athlone Town',text:'50. Spiel als Profi'},
      {player:'Sam Mukisa',team:'Athlone Town',text:'25. Ligaspiel für Athlone Town'},
      {player:'Callum Andrews',team:'Athlone Town',text:'50. Spiel als Profi'}
    ],
    injuries:[
      {player:'Amir Mašić',team:'Finn Harps',injury:'Knöchelverdrehung',date:'2041-10-11',cause:'Verletzt bei einem Zweikampf',estimatedAbsence:'3-4 Wochen',alternativeTreatment:'Injektion: gegen Shelbourne einsatzfähig, danach voraussichtlich 5-6 Wochen Ausfall'}
    ],
    analysis:{
      summary:'Das erste Ligaspiel nach dem internationalen Block wird überraschend zäh. Finn Harps kontrolliert die Partie statistisch, muss aber zweimal einem Rückstand hinterherlaufen und entscheidet das Spiel erst in der fünften Minute der Nachspielzeit.',
      firstHalf:'Athlone geht in der 34. Minute durch Vladyslav Protsiv in Führung. Justin Ramsey gleicht sofort aus, doch Ben Campbell bringt die Gäste in der Nachspielzeit der ersten Hälfte erneut nach vorne.',
      response:'Gustavo da Silva stellt vier Minuten nach Wiederbeginn auf 2:2. Danach läuft fast alles Richtung Athlone-Tor, ohne dass Finn Harps die Partie früh entscheidet.',
      lateWinner:'Basile Rouvière trifft in seinem 100. Ligaspiel für Finn Harps in der 95. Minute zum 3:2. Der späte Treffer verhindert den dritten Punktverlust der Ligasaison.',
      control:'22:7 Schüsse, 10:5 aufs Tor, 70 Prozent Ballbesitz, 12:2 Ecken und 3,76:0,65 xG zeigen, wie deutlich das Spiel territorial zugunsten der Harps verlief. Athlone verwertet seine wenigen Chancen außergewöhnlich effizient.',
      fatigueContext:'Nach mehreren Länderspielen innerhalb weniger Tage wirkt die Mannschaft weniger frisch und präzise als in den Wochen zuvor. Das erklärt den zähen Rhythmus eher als ein strukturelles Leistungsproblem.',
      injury:'Amir Mašić erleidet eine Knöchelverdrehung. Die konservative Behandlung bedeutet drei bis vier Wochen Pause; eine Injektion würde einen kurzfristigen Einsatz gegen Shelbourne ermöglichen, aber das Risiko eines längeren Ausfalls erhöhen.',
      leagueContext:'Finn Harps bleibt nach 31 Ligaspielen ungeschlagen: 29 Siege, zwei Remis, 89 Punkte und 94:13 Tore.'
    },
    sources:['FM-Spielübersicht Finn Harps – Athlone Town · 11.10.2041','Finn-Harps-Spielerstatistiken · 11.10.2041','FM-Medizinbericht Amir Mašić · 11.10.2041']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-10-11';
    season.latestHeadline='Premier Division: Finn Harps dreht Athlone Town spät zum 3:2. Basile Rouvière trifft in der 95. Minute.';
    season.league={
      ...(season.league||{}),position:1,played:31,wins:29,draws:2,losses:0,goalsFor:94,goalsAgainst:13,goalDifference:81,points:89,
      latestResult:'11.10.2041 · Finn Harps 3:2 Athlone Town',champion:true,titleClinchedDate:'2041-08-30'
    };
    season.changes=season.changes||{notes:[]};
    const note='11.10.2041: 3:2 gegen Athlone Town nach 1:2-Pausenrückstand. Ramsey, Gustavo da Silva und Rouvière treffen; Rouvière erzielt in der 95. Minute in seinem 100. Ligaspiel für Finn Harps den Siegtreffer. Liga: 31 Spiele, 29 Siege, 2 Remis, 0 Niederlagen, 94:13 Tore, 89 Punkte. Amir Mašić erleidet eine Knöchelverdrehung und fällt bei konservativer Behandlung 3-4 Wochen aus.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {id:'2041-10-11-basile-rouviere-100-league-winner',date:'2041-10-11',player:'Basile Rouvière',type:'milestone',title:'100. Ligaspiel mit Last-Minute-Siegtreffer',detail:'Erreicht gegen Athlone Town sein 100. Ligaspiel für Finn Harps und erzielt in der 95. Minute das 3:2.'},
    {id:'2041-10-11-justin-ramsey-athlone-goal',date:'2041-10-11',player:'Justin Ramsey',type:'goal',title:'Sofortige Antwort',detail:'Gleicht beim 3:2 gegen Athlone Town in der 35. Minute nur eine Minute nach dem Rückstand zum 1:1 aus.'},
    {id:'2041-10-11-gustavo-da-silva-athlone-goal',date:'2041-10-11',player:'Gustavo da Silva',type:'goal',title:'Ausgleich nach der Pause',detail:'Trifft in der 49. Minute zum 2:2 gegen Athlone Town.'},
    {id:'2041-10-11-amir-masic-ankle-sprain',date:'2041-10-11',player:'Amir Mašić',type:'injury',title:'Knöchelverdrehung',detail:'Verletzt sich im Zweikampf gegen Athlone Town. Bei physiotherapeutischer Behandlung wird mit drei bis vier Wochen Ausfall gerechnet.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2041-10-11',competition:'Premier Division',fixtureDate:'11.10.2041',
    home:'Finn Harps',away:'Athlone Town',score:'3:2',location:'Donegal Stadium · Stranorlar · 11.984 Zuschauer',
    headline:'Rouvière in der 95.: Müde Harps drehen Athlone Town spät zum 3:2',
    subheadline:'Nach dem Länderspielfenster liegt Finn Harps zur Pause 1:2 hinten. 3,76 xG und 22 Schüsse reichen erst in der Nachspielzeit zum Sieg.',
    label:'PREMIER DIVISION · FINN HARPS 3:2 ATHLONE TOWN',
    heroStat:{label:'Basile Rouvière',value:'90+5 · 3:2',note:'Siegtreffer im 100. Ligaspiel für Finn Harps'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Die Nationalspieler sind gerade erst zurück, der Rhythmus ist holprig und Athlone Town nutzt nahezu jede Gelegenheit. Finn Harps muss zweimal einem Rückstand hinterherlaufen. Statistisch ist die Partie deutlich, auf der Anzeigetafel bleibt sie bis zur letzten Aktion offen.',
    sections:[
      {title:'Athlone bestraft jeden Fehler',text:'Vladyslav Protsiv bringt Athlone in der 34. Minute in Führung. Ramsey antwortet sofort, doch Ben Campbell stellt in der 46. Minute auf 1:2. Aus nur sehr wenig offensivem Volumen holen die Gäste zur Pause zwei Tore.'},
      {title:'Gustavo gleicht aus',text:'Vier Minuten nach der Pause trifft Gustavo da Silva zum 2:2. Danach kontrollieren die Harps Ball und Raum, finden gegen ein tief verteidigendes Athlone aber lange nicht den entscheidenden Abschluss.'},
      {title:'Rouvière rettet den Abend',text:'In der fünften Minute der Nachspielzeit fällt doch noch das 3:2. Basile Rouvière macht aus seinem 100. Ligaspiel für Finn Harps einen kleinen Jubiläumsfilm und verhindert den dritten Punktverlust der Saison.'},
      {title:'Knappes Ergebnis, klare Chancenbilanz',text:'22:7 Schüsse, 10:5 aufs Tor, 70 Prozent Ballbesitz, 12:2 Ecken und 3,76:0,65 xG sprechen klar für Finn Harps. Das 3:2 ist deshalb weniger ein glücklicher Sieg als ein ungewöhnlich ineffizienter Abend mit zwei sehr effizienten Gegentoren.'},
      {title:'Mašić verletzt',text:'Amir Mašić verdreht sich bei einem Zweikampf den Knöchel. Ohne Injektion beträgt die prognostizierte Ausfallzeit drei bis vier Wochen.'},
      {title:'Ungeschlagen bleibt ungeschlagen',text:'Nach 31 Ligaspielen stehen 29 Siege, zwei Remis und keine Niederlage. Finn Harps hat 89 Punkte und ein Torverhältnis von 94:13.'}
    ],
    strengthsTitle:'WAS TROTZDEM FUNKTIONIERT',strengthsHeading:'Kontrolle und Beharrlichkeit',
    strengths:['22 Schüsse','3,76 xG','70 % Ballbesitz','12 Ecken','29. Ligasieg','Rouvière mit Last-Minute-Tor'],
    vulnerabilitiesTitle:'WARUM ES SO ENG WIRD',vulnerabilitiesHeading:'Müdigkeit und gegnerische Effizienz',
    vulnerabilities:['Athlone erzielt aus 0,65 xG zwei Tore','1:2-Pausenrückstand','weniger Präzision nach dem Länderspielfenster','Mašić verletzt sich'],
    verdictHeading:'Kein Glanzstück, aber ein wertvoller Charaktertest',
    verdict:'Nach einem intensiven Nationalmannschaftsblock ist das kein Spiel, aus dem man ein strukturelles Problem ableiten sollte. Die Harps erzeugen genügend Chancen für einen klareren Sieg, vergeben aber zu viel und werden defensiv zweimal hart bestraft. Dass die Mannschaft trotzdem bis zur 95. Minute weiterdrückt, ist eher ein gutes als ein schlechtes Signal.',
    sources:match.sources
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-10-11-finn-harps-athlone-3-2',date:'2041-10-11',season:2041,category:'Premier Division',accent:'blue',featured:true,
    eyebrow:'PREMIER DIVISION · 31. SPIELTAG',title:'Rouvière rettet Harps in der 95. Minute',
    summary:'Finn Harps dreht einen 1:2-Pausenrückstand gegen Athlone Town zum 3:2. Rouvière trifft in seinem 100. Ligaspiel in der Nachspielzeit, Mašić verletzt sich am Knöchel.',
    href:'presse.html?id=2041-10-11-finn-harps-athlone-town-spielbericht',entities:['finn-harps','athlone-town','basile-rouviere','amir-masic','season-2041']
  });
})();