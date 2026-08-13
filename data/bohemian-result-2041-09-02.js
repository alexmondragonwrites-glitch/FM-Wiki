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

  const fixtureId='2041-09-02-finn-harps-bohemian-premier-division';
  const reportId='2041-09-02-bohemian-liga-spielbericht';

  const match={
    id:fixtureId,date:'2041-09-02',season:2041,competition:'Premier Division',stage:'Liga',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:3},
    away:{id:'bohemian',name:'Bohemian',short:'BOH',score:0},
    score:'3:0',homeGoals:3,awayGoals:0,halfTime:'3:0',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12800,awayFans:640,weather:'25 °C',referee:'Callum Patton',
    headline:'Drei Tore vor der Pause: Finn Harps zerlegen Bohemian mit kontrollierter Wucht',
    verdict:'Finn Harps entscheiden das Heimspiel bereits vor der Pause. Pol Muñoz erzielt in der 4. Minute sein erstes Ligator für den Klub, Daniele Di Maio legt in der 38. Minute sein erstes Tor für Finn Harps nach und Emerson Escárcega trifft in der 44. Minute zum 3:0. 79 Prozent Ballbesitz, 28:4 Schüsse und 3,71:1,01 xG machen die Dominanz deutlich.',
    scorers:[
      {player:'Pol Muñoz',team:'Finn Harps',goals:1,minutes:[4]},
      {player:'Daniele Di Maio',team:'Finn Harps',goals:1,minutes:[38]},
      {player:'Emerson Escárcega',team:'Finn Harps',goals:1,minutes:[44]}
    ],
    events:[
      {minute:4,type:'goal',team:'Finn Harps',player:'Pol Muñoz',text:'1:0'},
      {minute:26,type:'yellow',team:'Bohemian',player:'Steve Meyler',text:'Gelbe Karte'},
      {minute:28,type:'yellow',team:'Bohemian',player:'Anthony Mulvey',text:'Gelbe Karte'},
      {minute:32,type:'penalty-missed',team:'Bohemian',player:'Euan McGill',text:'Elfmeter verschossen'},
      {minute:38,type:'goal',team:'Finn Harps',player:'Daniele Di Maio',text:'2:0'},
      {minute:41,type:'yellow',team:'Bohemian',player:'Dylan Bowen',text:'Gelbe Karte'},
      {minute:44,type:'goal',team:'Finn Harps',player:'Emerson Escárcega',text:'3:0'},
      {minute:68,type:'yellow',team:'Bohemian',player:'Kane Bellow',text:'Gelbe Karte'}
    ],
    stats:[
      {label:'Schüsse',home:28,away:4,kind:'number'},
      {label:'Schüsse aufs Tor',home:10,away:1,kind:'number'},
      {label:'xG',home:3.71,away:1.01,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:12,away:1,kind:'number'},
      {label:'Großchancen',home:3,away:1,kind:'number'},
      {label:'Ballbesitz',home:79,away:21,kind:'percent'},
      {label:'Ecken',home:14,away:2,kind:'number'},
      {label:'Fouls',home:7,away:29,kind:'number'},
      {label:'Angekommene Pässe',home:583,away:156,kind:'number',homeDetail:'89 % · 583/652',awayDetail:'74 % · 156/212'},
      {label:'Gewonnene Zweikämpfe',home:79,away:54,kind:'percent',homeDetail:'15/19',awayDetail:'15/28'},
      {label:'Gewonnene Kopfbälle',home:43,away:53,kind:'percent',homeDetail:'25/58',awayDetail:'31/58'},
      {label:'Gelbe Karten',home:0,away:7,kind:'number'},
      {label:'Rote Karten',home:0,away:1,kind:'number'}
    ],
    leagueAfterMatch:{position:1,played:29,wins:27,draws:2,losses:0,goalsFor:87,goalsAgainst:10,goalDifference:77,points:83},
    standout:{player:'Paulo Henrique',team:'Finn Harps',rating:8.2,note:'Hält die Null und trägt dazu bei, dass Bohemians einzige große Chance ungenutzt bleibt.'},
    milestones:[
      {player:'Callum Brennan',text:'100. Ligaspiel seiner Karriere'},
      {player:'Callum Brennan',text:'100. Ligaspiel für Finn Harps'},
      {player:'Daniele Di Maio',text:'1. Tor für Finn Harps'},
      {player:'Pol Muñoz',text:'1. Ligator für Finn Harps'},
      {player:'Jake Roberts',text:'25. Ligaspiel seiner Karriere'},
      {player:'Jordan Blinn',text:'425. Ligaspiel seiner Karriere'},
      {player:'Anthony Mulvey',text:'425. Ligaspiel seiner Karriere'}
    ],
    analysis:{
      summary:'Der bereits feststehende Meister nimmt den Fuß nicht vom Gas. Finn Harps schießt Bohemian in der ersten Hälfte mit drei Treffern auseinander und kontrolliert danach das Spiel vollständig.',
      firstHalf:'Pol Muñoz trifft bereits in der 4. Minute. Bohemian vergibt in der 32. Minute durch Euan McGill einen Elfmeter, danach ziehen die Harps davon: Di Maio trifft in der 38., Escárcega in der 44. Minute.',
      control:'79 Prozent Ballbesitz, 583 angekommene Pässe und 14 Ecken zeigen, wie tief Bohemian über weite Strecken eingeschnürt wird. Die Gäste kommen insgesamt nur auf vier Abschlüsse und einen Schuss aufs Tor.',
      discipline:'Bohemian begeht 29 Fouls, sieht sieben Gelbe Karten und beendet die Partie mit einer Roten Karte. Finn Harps bleibt dagegen ohne Karte.',
      leagueContext:'Nach 29 Ligaspielen bleibt Finn Harps ungeschlagen: 27 Siege, zwei Remis, 87:10 Tore und 83 Punkte. Die Meisterschaft ist bereits gesichert, doch die Jagd auf eine ungeschlagene Ligasaison läuft weiter.',
      europeContext:'Acht Tage vor dem Champions-League-Auftakt gegen Manchester United liefert Finn Harps einen sehr kontrollierten Härtetest und verteilt die Tore auf drei verschiedene Spieler.'
    },
    sources:['FM-Spielübersicht Finn Harps – Bohemian · 02.09.2041','Finn-Harps-Spielerstatistiken · 02.09.2041']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-09-02';
    season.latestHeadline='Premier Division: Finn Harps schlagen Bohemian 3:0 und bleiben nach 29 Ligaspielen ungeschlagen.';
    season.league={
      ...(season.league||{}),position:1,played:29,wins:27,draws:2,losses:0,goalsFor:87,goalsAgainst:10,goalDifference:77,points:83,
      latestResult:'02.09.2041 · Finn Harps 3:0 Bohemian',champion:true,titleClinchedDate:'2041-08-30'
    };
    season.changes=season.changes||{notes:[]};
    const note='02.09.2041: 3:0 gegen Bohemian. Pol Muñoz (4.), Daniele Di Maio (38.) und Emerson Escárcega (44.) entscheiden die Partie bereits vor der Pause. Liga: 29 Spiele, 27 Siege, 2 Remis, 0 Niederlagen, 87:10 Tore, 83 Punkte.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {id:'2041-09-02-pol-munoz-first-league-goal',date:'2041-09-02',player:'Pol Muñoz',type:'milestone',title:'Erstes Ligator für Finn Harps',detail:'Eröffnet beim 3:0 gegen Bohemian bereits in der 4. Minute den Torreigen.'},
    {id:'2041-09-02-daniele-di-maio-first-goal',date:'2041-09-02',player:'Daniele Di Maio',type:'milestone',title:'Erstes Tor für Finn Harps',detail:'Erzielt in der 38. Minute das 2:0 gegen Bohemian und damit seinen ersten Treffer für den Klub.'},
    {id:'2041-09-02-emerson-escarcega-bohemian-goal',date:'2041-09-02',player:'Emerson Escárcega',type:'goal',title:'Trifft erneut',detail:'Setzt in der 44. Minute mit dem 3:0 den Schlusspunkt unter eine dominante erste Hälfte.'},
    {id:'2041-09-02-callum-brennan-100-league',date:'2041-09-02',player:'Callum Brennan',type:'milestone',title:'100 Ligaspiele',detail:'Bestreitet gegen Bohemian sein 100. Ligaspiel der Karriere und zugleich sein 100. Ligaspiel für Finn Harps.'},
    {id:'2041-09-02-jake-roberts-25-league',date:'2041-09-02',player:'Jake Roberts',type:'milestone',title:'25 Ligaspiele',detail:'Erreicht beim 3:0 gegen Bohemian die Marke von 25 Ligaspielen seiner Karriere.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2041-09-02',competition:'Premier Division',fixtureDate:'02.09.2041',
    home:'Finn Harps',away:'Bohemian',score:'3:0',location:'Donegal Stadium · Stranorlar · 12.800 Zuschauer',
    headline:'Drei Treffer vor der Pause: Der Meister bleibt hungrig',
    subheadline:'Pol Muñoz, Daniele Di Maio und Emerson Escárcega treffen beim 3:0 gegen Bohemian. Finn Harps dominiert mit 79 Prozent Ballbesitz, 28:4 Schüssen und bleibt auch im 29. Ligaspiel ungeschlagen.',
    label:'PREMIER DIVISION · FINN HARPS 3:0 BOHEMIAN',
    heroStat:{label:'Liga nach 29 Spielen',value:'27–2–0',note:'83 Punkte · 87:10 Tore · weiterhin ungeschlagen'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Der Titel ist bereits gesichert, aber Finn Harps spielt nicht wie eine Mannschaft, die den Rest der Saison auslaufen lässt. Bohemian wird im Donegal Stadium in der ersten Hälfte in drei schnellen Wellen überrollt und verbringt den Rest des Abends weitgehend im eigenen Drittel.',
    sections:[
      {title:'Muñoz braucht vier Minuten',text:'Pol Muñoz eröffnet das Spiel bereits in der 4. Minute und erzielt damit sein erstes Ligator für Finn Harps.'},
      {title:'Bohemians Elfmeter bleibt der einzige echte Ausweg',text:'Euan McGill vergibt in der 32. Minute einen Elfmeter. Es ist die große Chance der Gäste, wieder ins Spiel zu kommen. Stattdessen macht Finn Harps kurz darauf alles klar.'},
      {title:'Di Maio und Escárcega schließen die Halbzeit ab',text:'Daniele Di Maio erzielt in der 38. Minute sein erstes Tor für Finn Harps. Emerson Escárcega trifft sechs Minuten später zum 3:0. Der Endstand steht damit bereits vor der Pause fest.'},
      {title:'Dominanz ohne Ergebnisverwaltung',text:'Auch nach dem Seitenwechsel behalten die Harps die Kontrolle. 28 Schüsse, 10 aufs Tor, 14 Ecken, 79 Prozent Ballbesitz und 583 erfolgreiche Pässe zeigen, wie einseitig die Partie bleibt.'},
      {title:'29 Spiele, noch immer keine Niederlage',text:'Die Ligabilanz wächst auf 27 Siege und zwei Remis. Finn Harps steht bei 83 Punkten und 87:10 Toren. Nach dem bereits gesicherten Titel rückt damit die ungeschlagene Saison stärker in den Fokus.'},
      {title:'Der nächste Maßstab heißt Manchester United',text:'Acht Tage vor dem Champions-League-Auftakt gegen Manchester United wirkt Finn Harps stabil, variabel und voll im Rhythmus. Drei verschiedene Torschützen unterstreichen, dass die Gefahr nicht an einem einzelnen Spieler hängt.'}
    ],
    strengthsTitle:'WAS BESONDERS STARK IST',strengthsHeading:'Kontrolle, Breite und frühe Konsequenz',
    strengths:['3 Tore in der ersten Hälfte','28:4 Schüsse','10:1 Schüsse aufs Tor','79 % Ballbesitz','14:2 Ecken','583 angekommene Pässe','Drei verschiedene Torschützen'],
    vulnerabilitiesTitle:'WAS BOHEMIAN FAST NUTZT',vulnerabilitiesHeading:'Ein unnötiger Elfmeter öffnet kurz die Tür',
    vulnerabilities:['Bohemian erhält beim Stand von 1:0 einen Elfmeter','1,01 xG der Gäste entsteht trotz nur vier Abschlüssen','Nach der Pause fällt trotz 18 weiterer Abschlüsse kein Tor mehr'],
    verdictHeading:'Der Meister spielt weiter wie ein Herausforderer',
    verdict:'Genau das macht diese Phase der Saison interessant. Der Titel ist bereits eingefahren, trotzdem sinkt weder Intensität noch Kontrolle. Finn Harps erledigt Bohemian vor der Pause und nutzt die zweite Hälfte als Demonstration der eigenen Spielkontrolle. Für Manchester United ist das kein schlechtes Bewerbungsschreiben.',
    sourcesHeading:'Spieldaten',sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots vom Premier-Division-Spiel am 2. September 2041.',
    sources:['FM-Spielübersicht Finn Harps – Bohemian · 02.09.2041','Finn-Harps-Spielerstatistiken · 02.09.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-09-02-bohemian-liga',date:'2041-09-02',season:2041,category:'Premier Division',accent:'blue',featured:true,
    eyebrow:'PREMIER DIVISION · FINN HARPS 3:0 BOHEMIAN',
    title:'Drei Tore vor der Pause: Harps bleiben auch nach dem Titelgewinn hungrig',
    summary:'Pol Muñoz, Daniele Di Maio und Emerson Escárcega treffen beim 3:0 gegen Bohemian. Finn Harps steht nach 29 Ligaspielen bei 27 Siegen, zwei Remis und keiner Niederlage.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','bohemian','pol-munoz','daniele-di-maio','emerson-escarcega','callum-brennan','jake-roberts','premier-division']
  });
})();