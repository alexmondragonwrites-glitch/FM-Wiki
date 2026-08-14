(()=>{
  window.FM_IRELAND=window.FM_IRELAND||{};
  window.FM_IRELAND_MATCHES=window.FM_IRELAND_MATCHES||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const match={
    id:'2041-09-26-azerbaijan-ireland',date:'2041-09-26',competition:'FIFA World Cup European Qualification',group:'Gruppe C',
    venue:'Tofiq-Bəhramov-Stadion',location:'Baku, Aserbaidschan',attendance:31148,weather:'19 °C · windig',referee:'Dawid Poduch',
    home:'Aserbaidschan',away:'Irland',homeScore:1,awayScore:8,halfTime:'0:6',
    headline:'Irland zerlegt Aserbaidschan 8:1 – O’Leary trifft vierfach',
    events:[
      {minute:7,team:'Irland',type:'goal',player:"Cormac O'Kane",text:'0:1'},
      {minute:12,team:'Irland',type:'goal',player:"Harry O'Leary",text:'0:2'},
      {minute:13,team:'Aserbaidschan',type:'yellow',player:'Elvin Abdullayev',text:'Gelbe Karte'},
      {minute:26,team:'Irland',type:'goal',player:"Harry O'Leary",text:'0:3'},
      {minute:28,team:'Irland',type:'own-goal',player:'Farid Əliyev',text:'Eigentor zum 0:4'},
      {minute:35,team:'Irland',type:'goal',player:"Harry O'Leary",text:'0:5'},
      {minute:45,team:'Irland',type:'goal',player:"Harry O'Leary",text:'0:6'},
      {minute:52,team:'Irland',type:'injury',player:'Giacomo Papini',text:'Knöchelverdrehung · 3–6 Wochen'},
      {minute:84,team:'Irland',type:'goal',player:'Ben Barry',text:'0:7 · erstes A-Länderspieltor'},
      {minute:'90+1',team:'Aserbaidschan',type:'goal',player:'Ümit Bozqurt',text:'1:7'},
      {minute:'90+2',team:'Irland',type:'goal',player:'Justin Ramsey',text:'1:8'}
    ],
    scorers:[
      {player:"Harry O'Leary",team:'Irland',goals:4,minutes:[12,26,35,45]},
      {player:"Cormac O'Kane",team:'Irland',goals:1,minutes:[7]},
      {player:'Ben Barry',team:'Irland',goals:1,minutes:[84],debutGoal:true},
      {player:'Justin Ramsey',team:'Irland',goals:1,minutes:['90+2']},
      {player:'Farid Əliyev',team:'Aserbaidschan',ownGoal:true,minutes:[28]},
      {player:'Ümit Bozqurt',team:'Aserbaidschan',goals:1,minutes:['90+1']}
    ],
    stats:{
      shots:[5,39],shotsOnTarget:[2,19],xg:[0.57,5.38],shotsOffTarget:[1,13],bigChances:[0,3],
      possession:[29,71],corners:[6,14],fouls:[9,10],completedPasses:[207,514],attemptedPasses:[286,598],passAccuracy:[72,86],
      tacklesWon:['60% (15/25)','89% (20/23)'],headersWon:['33% (23/69)','63% (43/68)'],averageRating:[6.21,7.66],intenseSprints:[100,102],averageDistance:[11.2,12.2]
    },
    ratings:{'Evan Reilly':6.8,'Callum Brennan':7.0,'Darcy Andrews':7.8,'Mareks Istrankins':7.3,'Kevin Kelly':7.2,'Callum Duggan':7.8,'Justin Ramsey':8.7,"Cormac O'Kane":7.9,'Giacomo Papini':6.9,'Brendan McHugh':7.1,"Harry O'Leary":10.0,'Billy Walker':6.5,'Ben Barry':7.3,'Colum Winnall':7.1,'Ronan Reilly':7.4,'Brendan Costello':6.8},
    debuts:['Evan Reilly','Giacomo Papini','Ben Barry'],
    injuries:[{player:'Giacomo Papini',injury:'Knöchelverdrehung',recovery:'3–6 Wochen',minute:52,note:'Beim Sprint verletzt; laut medizinischem Bericht bereits die dritte Verletzung im Umfeld der Nationalmannschaft.'}],
    standout:{player:"Harry O'Leary",rating:10.0,goals:4,note:'Vier Tore bis zur Halbzeit beim 8:1-Auswärtssieg.'},
    groupAfterMatch:{name:'Gruppe C',position:2,played:3,wins:3,draws:0,losses:0,goalsFor:12,goalsAgainst:2,goalDifference:10,points:9},
    analysis:{
      summary:'Irland macht das Auswärtsspiel in Baku innerhalb einer Halbzeit zu einer Machtdemonstration. Nach 45 Minuten steht es 6:0, am Ende 8:1 bei 39:5 Schüssen und 5,38:0,57 xG.',
      oLeary:'Harry O’Leary erzielt vier Tore in der ersten Halbzeit und erhält die Maximalnote 10,0.',
      harpsCore:'Cormac O’Kane eröffnet den Torreigen, Justin Ramsey setzt in der Nachspielzeit den Schlusspunkt. Ben Barry trifft bei seinem A-Team-Debüt direkt zum ersten Länderspieltor.',
      debuts:'Evan Reilly, Giacomo Papini und Ben Barry feiern ihr Debüt für Irland.',
      injury:'Der einzige schwere Schatten über dem Abend ist Papinis Verletzung. Der Debütant verdreht sich beim Sprint den Knöchel und fällt laut medizinischem Bericht drei bis sechs Wochen aus.',
      qualification:'Irland steht nach drei Spielen bei neun Punkten und 12:2 Toren auf Rang zwei der Gruppe C. Als nächstes folgt am 29. September das Heimspiel gegen Zypern.'
    },
    sources:['FM-Spielübersicht Aserbaidschan – Irland · 26.09.2041','FM-Irland-Spielerstatistiken · 26.09.2041','FM-Medizinischer Bericht Giacomo Papini · 26.09.2041']
  };

  window.FM_IRELAND_MATCHES=[...(window.FM_IRELAND_MATCHES||[]).filter(x=>x.id!==match.id),match];
  Object.assign(window.FM_IRELAND,{
    title:'Irland 2041',updated:'26.09.2041',competition:'WM-Qualifikation',group:'Gruppe C',position:'2. Platz',
    lastMatch:match,
    nextMatch:{opponent:'Zypern',venue:'Heim',date:'29.09.2041',stadium:'Aviva Stadium'},
    groupStatus:'WM-Qualifikation · Gruppe C · 3 Spiele · 9 Punkte · 12:2 Tore · Rang 2',
    qualification:{stage:'FIFA World Cup European Qualification · Gruppe C',label:'WM-Qualifikation',status:'Rang 2',detail:'Irland gewinnt auch das dritte Gruppenspiel und steht nach dem 8:1 in Aserbaidschan bei neun Punkten aus drei Spielen und 12:2 Toren.'}
  });

  [
    {id:'2041-09-26-evan-reilly-ireland-debut',date:'2041-09-26',player:'Evan Reilly',type:'nationalteam',title:'A-Länderspieldebüt',detail:'Feiert beim 8:1-Auswärtssieg in Aserbaidschan sein Debüt für Irland.'},
    {id:'2041-09-26-giacomo-papini-ireland-debut',date:'2041-09-26',player:'Giacomo Papini',type:'nationalteam',title:'A-Länderspieldebüt',detail:'Feiert in Baku sein Irland-Debüt, muss jedoch in der 52. Minute verletzt ausgewechselt werden.'},
    {id:'2041-09-26-giacomo-papini-ankle-injury',date:'2041-09-26',player:'Giacomo Papini',type:'injury',title:'Knöchelverdrehung im Nationalteam',detail:'Verletzt sich beim Sprint gegen Aserbaidschan und fällt laut medizinischem Bericht drei bis sechs Wochen aus.'},
    {id:'2041-09-26-ben-barry-ireland-debut-goal',date:'2041-09-26',player:'Ben Barry',type:'nationalteam',title:'Debüt und erstes A-Länderspieltor',detail:'Kommt gegen Aserbaidschan zu seinem ersten A-Länderspiel und trifft in der 84. Minute zum 7:0.'},
    {id:'2041-09-26-justin-ramsey-azerbaijan-goal',date:'2041-09-26',player:'Justin Ramsey',type:'nationalteam',title:'Tor in der WM-Qualifikation',detail:'Erzielt in der 90.+2 Minute das 8:1 in Aserbaidschan.'},
    {id:'2041-09-26-cormac-okane-azerbaijan-goal',date:'2041-09-26',player:"Cormac O'Kane",type:'nationalteam',title:'Frühes Führungstor in Baku',detail:'Bringt Irland in der 7. Minute beim 8:1 gegen Aserbaidschan in Führung.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const papini=(window.FM_PLAYERS||[]).find(p=>p.id==='giacomo-papini'||p.name==='Giacomo Papini');
  if(papini){
    papini.injuryStatus={date:'2041-09-26',injury:'Knöchelverdrehung',recovery:'3–6 Wochen',context:'Irland gegen Aserbaidschan'};
    papini.careerNarrative=papini.careerNarrative||[];
    const note='26.09.2041: Giacomo Papini feiert beim 8:1 in Aserbaidschan sein Irland-Debüt, verletzt sich jedoch in der 52. Minute beim Sprint am Knöchel und fällt voraussichtlich drei bis sechs Wochen aus.';
    if(!papini.careerNarrative.includes(note))papini.careerNarrative.push(note);
  }

  const report={
    id:'2041-09-26-aserbaidschan-irland-wm-quali-spielbericht',type:'Spielbericht',date:'2041-09-26',competition:'WM-Qualifikation',
    home:'Aserbaidschan',away:'Irland',score:'1:8',location:'Tofiq-Bəhramov-Stadion · Baku · 31.148 Zuschauer',
    headline:'O’Leary-Viererpack: Irland fegt Aserbaidschan mit 8:1 vom Platz',
    subheadline:'Sechs Tore vor der Pause, 39 Abschlüsse und 5,38 xG: Irland setzt in Baku ein Ausrufezeichen. Ben Barry trifft beim Debüt, Giacomo Papini verletzt sich bei seinem ersten A-Länderspiel.',
    label:'IRLAND · WM-QUALIFIKATION · ASERBAIDSCHAN 1:8 IRLAND',
    heroStat:{label:'Harry O’Leary',value:'4 Tore',note:'12., 26., 35. und 45. Minute · Note 10,0'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM'},
    intro:'Der erste Auftritt des September/Oktober-Blocks wird zur Machtdemonstration. Irland führt schon zur Pause 6:0 und beendet den Abend mit 39 Schüssen, 19 Abschlüssen aufs Tor und acht Treffern. Der einzige Wermutstropfen ist die Verletzung von Debütant Giacomo Papini.',
    sections:[
      {title:'O’Leary entscheidet das Spiel in einer Halbzeit',text:'Harry O’Leary trifft viermal zwischen der 12. und 45. Minute und erhält die Maximalnote 10,0. Cormac O’Kane hatte Irland bereits in der 7. Minute in Führung gebracht.'},
      {title:'Sechs Tore vor der Pause',text:'Neben O’Kanes Treffer und O’Learys Viererpack fällt in der 28. Minute ein Eigentor von Farid Əliyev. Zur Halbzeit steht es 0:6.'},
      {title:'Barry trifft beim Debüt',text:'Ben Barry feiert sein A-Länderspieldebüt und erzielt in der 84. Minute direkt sein erstes Tor für Irland. Justin Ramsey stellt in der 90.+2 Minute den 8:1-Endstand her.'},
      {title:'Drei Debütanten',text:'Evan Reilly, Giacomo Papini und Ben Barry kommen erstmals für Irlands A-Nationalmannschaft zum Einsatz.'},
      {title:'Papinis Debüt endet bitter',text:'Giacomo Papini muss in der 52. Minute nach einer Knöchelverdrehung vom Feld. Der medizinische Bericht prognostiziert drei bis sechs Wochen Ausfallzeit.'},
      {title:'Perfekte Qualifikation bleibt bestehen',text:'Irland steht nach drei Gruppenspielen bei drei Siegen, neun Punkten und 12:2 Toren. In Gruppe C bedeutet das aktuell Rang zwei.'}
    ],
    strengths:['8 Tore','39:5 Schüsse','19:2 Schüsse aufs Tor','5,38:0,57 xG','71 % Ballbesitz','O’Leary mit vier Toren und Note 10,0','Debüttor von Ben Barry'],
    vulnerabilities:['Papini verletzt sich bei seinem Debüt','Spätes Gegentor in der 90.+1 Minute trotz völliger Spielkontrolle'],
    verdictHeading:'Ein Statement für die WM-Qualifikation, mit einem bitteren Preis',
    verdict:'Sportlich ist das 8:1 nahezu makellos. Irland bleibt in der Qualifikation ohne Punktverlust und verteilt die Verantwortung auf mehrere Harps-Spieler. Gleichzeitig verliert Flannigan mit Papini einen gerade erst eingebauten Flügelspieler für mehrere Wochen.',
    sources:['FM-Spielübersicht Aserbaidschan – Irland · 26.09.2041','FM-Irland-Spielerstatistiken · 26.09.2041','FM-Medizinischer Bericht Giacomo Papini · 26.09.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-09-26-aserbaidschan-irland-1-8',date:'2041-09-26',season:2041,category:'Nationalteam',accent:'green',featured:true,
    eyebrow:'IRLAND · WM-QUALIFIKATION',title:'8:1 in Baku: O’Leary trifft vierfach, Barry beim Debüt',
    summary:'Irland führt schon zur Pause 6:0 und gewinnt 8:1. Ben Barry trifft bei seinem Debüt, Giacomo Papini verletzt sich bei seinem ersten A-Länderspiel und fällt drei bis sechs Wochen aus.',
    href:'presse.html?id=2041-09-26-aserbaidschan-irland-wm-quali-spielbericht',entities:['ireland','finn-harps','harry-oleary','ben-barry','giacomo-papini','justin-ramsey','cormac-okane','season-2041']
  });
})();