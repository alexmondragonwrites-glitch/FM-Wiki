(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];
  window.FM_FIXTURES=window.FM_FIXTURES||[];
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_CLUB_WORLD_CUPS=window.FM_CLUB_WORLD_CUPS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const fixtureId='2041-07-03-caen-finn-harps-club-world-cup-semifinal';
  const reportId='2041-07-03-klub-wm-caen-spielbericht';
  const match={
    id:fixtureId,date:'2041-07-03',season:2041,competition:'FIFA Club World Cup',stage:'Halbfinale',
    home:{id:'caen',name:'Caen',short:'CAE',score:4},
    away:{id:'finn-harps',name:'Finn Harps',short:'FH',score:1},
    score:'4:1',homeGoals:4,awayGoals:1,halfTime:'3:1',
    venue:'Stade de France',location:'Saint-Denis, Frankreich',attendance:81338,awayFans:16077,weather:'21 °C',
    headline:'Caen stoppt Finn Harps klar im Klub-WM-Halbfinale',
    verdict:'Caen gewinnt verdient 4:1. Finn Harps hat etwas mehr Ballbesitz und mehr angekommene Pässe, Caen ist aber bei Abschlüssen und Strafraumwirkung deutlich gefährlicher.',
    events:[
      {minute:20,type:'goal',team:'Caen',player:'Yannick Jaffre',text:'1:0'},
      {minute:26,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'1:1'},
      {minute:38,type:'goal',team:'Caen',player:"Harry O'Leary",text:'2:1'},
      {minute:39,type:'goal',team:'Caen',player:'Yannick Jaffre',text:'3:1'},
      {minute:60,type:'yellow',team:'Finn Harps',player:'Gustavo da Silva',text:'Verwarnung'},
      {minute:90,type:'goal',stoppage:2,team:'Caen',player:'Adama Koné',text:'4:1'}
    ],
    stats:[
      {label:'Schüsse',home:11,away:6,kind:'number'},
      {label:'Schüsse aufs Tor',home:7,away:2,kind:'number'},
      {label:'xG',home:1.59,away:0.68,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:3,away:3,kind:'number'},
      {label:'Großchancen',home:1,away:0,kind:'number'},
      {label:'Ballbesitz',home:48,away:52,kind:'percent'},
      {label:'Ecken',home:2,away:3,kind:'number'},
      {label:'Fouls',home:23,away:7,kind:'number'},
      {label:'Angekommene Pässe',home:452,away:482,kind:'number',homeDetail:'89 % · 452/508',awayDetail:'86 % · 482/561'},
      {label:'Gewonnene Zweikämpfe',home:67,away:69,kind:'percent',homeDetail:'20/30',awayDetail:'32/46'},
      {label:'Gewonnene Kopfbälle',home:48,away:52,kind:'percent',homeDetail:'11/23',awayDetail:'12/23'},
      {label:'Gelbe Karten',home:0,away:1,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Mannschaftsnote',home:7.20,away:6.60,kind:'decimal'},
      {label:'Intensive Sprints',home:198,away:263,kind:'number'}
    ],
    analysis:{
      summary:'Caen war in Saint-Denis die klar bessere K.-o.-Mannschaft. Finn Harps hatte zwar 52 Prozent Ballbesitz und brachte 482 Pässe an, kam daraus aber nur zu sechs Abschlüssen, zwei Schüssen aufs Tor und 0,68 xG. Caen produzierte aus weniger Ballbesitz sieben Schüsse aufs Tor und gewann 4:1.',
      possession:'Der Ballbesitz spricht nicht für französische Dominanz: Finn Harps lag mit 52 Prozent leicht vorne und spielte 482 angekommene Pässe. Entscheidend war, wo diese Aktionen stattfanden. Laut Mannschaftsanalyse hatten die Harps Schwierigkeiten, in der gegnerischen Hälfte in Ballbesitz zu kommen.',
      chanceCreation:'Caen gewann die Abschlussqualität klar: 11:6 Schüsse, 7:2 aufs Tor und 1,59:0,68 xG. Finn Harps kam auf keine Großchance und zu wenig Ballkontakte im Strafraum.',
      turningPoint:"Nach Ramseys Ausgleich in der 26. Minute war das Spiel kurz offen. Harry O'Leary traf in der 38. Minute zum 2:1, nur eine Minute später machte Yannick Jaffre mit seinem zweiten Treffer das 3:1. Diese Doppelaktion entschied das Halbfinale praktisch vor der Pause.",
      crowd:'Das Halbfinale fand im Stade de France in Saint-Denis vor 81.338 Zuschauern statt. 16.077 wurden als Finn-Harps-Auswärtsfans ausgewiesen. Die Kulisse hatte damit deutlich französischen Heimspielcharakter, auch wenn die statistische Überlegenheit Caens unabhängig davon klar erkennbar ist.',
      nuance:'Finn Harps lief mit 263 intensiven Sprints sogar deutlich mehr als Caen mit 198. Einsatz und Laufarbeit fehlten nicht; Qualität und Durchschlagskraft in den entscheidenden Zonen machten den Unterschied.'
    },
    keyPerformers:[
      {player:'Yannick Jaffre',team:'Caen',rating:10.0,note:'Doppelpack in der 20. und 39. Minute; Spieler des Spiels.'},
      {player:"Harry O'Leary",team:'Caen',note:'Irischer Nationalstürmer erzielt in der 38. Minute das 2:1 gegen den Klub seines Nationaltrainers Ryan Flannigan.'},
      {player:'Justin Ramsey',team:'Finn Harps',rating:7.0,note:'Gleicht in der 26. Minute zum 1:1 aus und ist der beste bewertete Harps-Spieler.'},
      {player:'Paulo Henrique',team:'Finn Harps',rating:6.2,note:'Sieben Schüsse aufs Tor und vier Gegentreffer in einem schwierigen Halbfinale.'}
    ],
    sources:['FM-Spielübersicht Caen – Finn Harps · 03.07.2041','Finn-Harps-Spielerstatistiken · Klub-WM-Halbfinale']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const caen=(window.FM_CLUBS||[]).find(x=>x.id==='caen'||x.name==='Caen')||{};
  upsert(window.FM_CLUBS,{
    ...caen,id:'caen',name:'Caen',short:'CAE',country:'Frankreich',
    clubWorldCup2041:{stage:'Finale',status:'qualifiziert',semifinalOpponent:'Finn Harps',semifinalResult:'4:1',finalOpponent:'AC Milan'},
    summary:"Finalist der Klub-WM 2041. Caen schlug Finn Harps im Stade de France verdient 4:1. Yannick Jaffre traf doppelt, Harry O'Leary erzielte das 2:1 und Adama Koné den Schlusspunkt. Im Finale wartet AC Milan.",
    meetings:[...(caen.meetings||[]).filter(x=>x.date!=='03.07.2041'),{date:'03.07.2041',competition:'FIFA Club World Cup · Halbfinale',venue:'Stade de France · Saint-Denis',result:'4:1'}]
  });

  const current=window.FM_CLUB_WORLD_CUPS.find(x=>x.id==='club-world-cup-2041')||{};
  upsert(window.FM_CLUB_WORLD_CUPS,{
    ...current,
    id:'club-world-cup-2041',year:2041,status:'final-set',titleHolder:'Finn Harps',group:'H',
    finalists:['AC Milan','Caen'],
    final:{home:'AC Milan',away:'Caen',status:'anstehend'},
    knockout:{...(current.knockout||{}),round:'Finale',previousRound:'Halbfinale · Caen 4:1 Finn Harps',finnHarpsStatus:'ausgeschieden',semiFinalOpponent:'Caen',semiFinalResult:'1:4',finalPairing:'AC Milan – Caen'},
    headline:'Klub-WM 2041: Finn Harps scheidet nach einem 1:4 gegen Caen im Halbfinale aus. Das Finale lautet AC Milan gegen Caen.'
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-07-03';
    season.latestHeadline='Klub-WM: Finn Harps verliert das Halbfinale gegen Caen klar mit 1:4.';
    season.clubWorldCup={...(season.clubWorldCup||{}),status:'Halbfinale ausgeschieden',lastResult:'03.07.2041 · Caen 4:1 Finn Harps',finalPairing:'AC Milan – Caen',knockoutWins:2,finish:'Halbfinale'};
    season.changes=season.changes||{notes:[]};
    const note="03.07.2041: 1:4 gegen Caen im Klub-WM-Halbfinale. Ramsey gleicht zwischenzeitlich aus; Jaffre trifft doppelt, O'Leary und Koné ebenfalls für Caen.";
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  window.FM_PLAYER_UPDATES.push({date:'2041-07-03',player:'Justin Ramsey',type:'goal',title:'Treffer im Klub-WM-Halbfinale',detail:'Tor zum zwischenzeitlichen 1:1 in der 26. Minute gegen Caen; Finn Harps verliert 1:4.'});

  const report={
    id:reportId,type:'Spielbericht',date:'2041-07-03',competition:'FIFA Club World Cup',fixtureDate:'03.07.2041',
    home:'Caen',away:'Finn Harps',score:'4:1',location:'Stade de France · Saint-Denis · 81.338 Zuschauer · 16.077 Harps-Auswärtsfans',
    headline:'Caen ist eine Nummer zu groß: Finn Harps scheidet im Halbfinale aus',
    subheadline:"Ramsey antwortet auf Jaffres frühe Führung, doch O'Leary und erneut Jaffre entscheiden das Spiel noch vor der Pause. Caen gewinnt verdient 4:1 und trifft im Finale auf Milan.",
    label:'FIFA CLUB WORLD CUP · HALBFINALE · CAEN 4:1 FINN HARPS',
    heroStat:{label:'Schüsse aufs Tor',value:'7:2',note:'xG 1,59:0,68 · 11:6 Schüsse'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:"Diesmal gab es keinen späten Harps-Zauber. Nach Manchester City, Bayern und Barcelona traf Finn Harps im Stade de France auf ein Caen, das mit der französischen Kulisse im Rücken von Beginn an gefährlicher wirkte. Yannick Jaffre brachte Caen nach 20 Minuten in Führung. Justin Ramsey glich sechs Minuten später aus, doch Harry O'Leary und erneut Jaffre stellten innerhalb von zwei Minuten auf 3:1. Adama Koné setzte in der Nachspielzeit den Schlusspunkt zum 4:1.",
    sections:[
      {title:'Ramsey gibt kurz Hoffnung',text:'Nach Jaffres 1:0 in der 20. Minute reagierte Finn Harps schnell. Justin Ramsey traf in der 26. Minute zum 1:1 und hielt das Halbfinale zunächst offen.'},
      {title:"O'Leary und Jaffre entscheiden das Spiel vor der Pause",text:"In der 38. Minute erzielte Irlands Nationalstürmer Harry O'Leary ausgerechnet gegen den Klub seines Nationaltrainers Ryan Flannigan das 2:1. Nur eine Minute später traf Yannick Jaffre zum zweiten Mal. Aus einem offenen 1:1 wurde innerhalb von rund 60 Sekunden ein 3:1."},
      {title:'Mehr Ball, weniger Gefahr',text:'Finn Harps hatte 52 Prozent Ballbesitz und brachte 482 Pässe an, Caen 452. Doch die Franzosen gewannen die entscheidenden Zahlen: 11:6 Schüsse, 7:2 aufs Tor und 1,59:0,68 xG. Die Harps kamen auf keine Großchance.'},
      {title:'Die Kulisse gehört weitgehend Caen',text:'81.338 Zuschauer füllten das Stade de France. 16.077 davon wurden als Harps-Auswärtsfans ausgewiesen. Für ein neutrales Klub-WM-Spiel in Frankreich hatte die Partie damit deutlich Heimspielcharakter für Caen. Die Kulisse erklärt das Ergebnis nicht allein, sie verstärkte aber den Rahmen eines ohnehin starken Caen-Auftritts.'},
      {title:'Der Lauf endet einen Schritt vor dem Finale',text:'Finn Harps hatte in diesem Turnier Manchester City geschlagen, Bayern im Achtelfinale ausgeschaltet und Barcelona nach Verlängerung niedergerungen. Gegen Caen reichte es nicht. Das Finale der Klub-WM 2041 bestreiten AC Milan und Caen.'}
    ],
    strengthsTitle:'WAS TROTZDEM BLIEB',strengthsHeading:'Kein Einbruch bei Einsatz und Ballbesitz',
    strengths:['52 Prozent Ballbesitz','482 angekommene Pässe','263 intensive Sprints gegenüber 198 bei Caen','Ramsey gleicht nach Rückstand zum 1:1 aus','Halbfinale nach Siegen über Manchester City, Bayern und Barcelona'],
    vulnerabilitiesTitle:'WARUM CAEN VERDIENT GEWANN',vulnerabilitiesHeading:'Zu wenig Wirkung in den entscheidenden Räumen',
    vulnerabilities:['Nur 6 Abschlüsse und 2 Schüsse aufs Tor','0,68 xG und keine Großchance','Caen bringt 7 von 11 Abschlüssen aufs Tor','Zwei Gegentore in der 38. und 39. Minute brechen das Spiel auf','Laut Mannschaftsanalyse Probleme mit Ballbesitz in der gegnerischen Hälfte und zu wenigen Strafraumkontakten'],
    verdictHeading:'Keine Tragödie, sondern eine klare Niederlage gegen den besseren Gegner',
    verdict:'Finn Harps war nicht chancenlos, aber Caen war an diesem Abend deutlich besser. Der leichte Vorteil bei Ballbesitz und Pässen führte nicht zu Kontrolle in gefährlichen Zonen. Caen spielte direkter, kam häufiger zum Abschluss und war vor dem Tor wesentlich schärfer. Nach dem emotionalen 4:2 gegen Barcelona endet der Klub-WM-Lauf damit verdient im Halbfinale.',
    sourcesHeading:'Spielbelege',sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots vom Halbfinale am 3. Juli 2041.',
    sources:['FM-Spielübersicht Caen – Finn Harps · 03.07.2041','Finn-Harps-Spielerstatistiken · 03.07.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-07-03-klub-wm-caen',date:'2041-07-03',season:2041,category:'Klub-WM',accent:'red',featured:true,
    eyebrow:'FIFA CLUB WORLD CUP · HALBFINALE · 4:1',title:'Caen stoppt den Harps-Lauf im Stade de France',
    summary:"Finn Harps verliert das Klub-WM-Halbfinale 1:4. Ramsey gleicht zunächst aus, doch Jaffre trifft doppelt, O'Leary erzielt das 2:1 und Koné den Schlusspunkt. Caen war bei 7:2 Schüssen aufs Tor und 1,59:0,68 xG klar gefährlicher.",
    href:`presse.html?id=${reportId}`,entities:['finn-harps','caen','harry-oleary','justin-ramsey','club-world-cup']
  });
})();