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

  const fixtureId='2041-07-29-finn-harps-waterford-premier-division';
  const reportId='2041-07-29-waterford-liga-spielbericht';

  const match={
    id:fixtureId,date:'2041-07-29',season:2041,competition:'Premier Division',stage:'Liga',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:2},
    away:{id:'waterford',name:'Waterford',short:'WAT',score:1},
    score:'2:1',homeGoals:2,awayGoals:1,halfTime:'2:1',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12471,awayFans:311,weather:'17 °C',referee:'Declan Toland',
    headline:'Ramsey entscheidet, was längst deutlicher hätte sein müssen',
    verdict:'Finn Harps gewinnt nur 2:1, obwohl das Spiel statistisch viel deutlicher ausfällt. 23:2 Schüsse, 9:1 aufs Tor, 3,62:0,63 xG und 77 Prozent Ballbesitz ergeben ein klares Übergewicht. Waterford hält das Resultat mit disziplinierter Defensivarbeit klein, während Justin Ramsey beide Harps-Tore erzielt.',
    events:[
      {minute:14,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'1:0'},
      {minute:27,type:'goal',team:'Waterford',player:"Cian O'Connell",text:'1:1'},
      {minute:38,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'2:1'},
      {minute:51,type:'yellow',team:'Finn Harps',player:"Jim O'Neill",text:'Gelbe Karte'}
    ],
    stats:[
      {label:'Schüsse',home:23,away:2,kind:'number'},
      {label:'Schüsse aufs Tor',home:9,away:1,kind:'number'},
      {label:'xG',home:3.62,away:0.63,kind:'decimal'},
      {label:'Großchancen',home:4,away:1,kind:'number'},
      {label:'Ballbesitz',home:77,away:23,kind:'percent'},
      {label:'Ecken',home:6,away:2,kind:'number'},
      {label:'Fouls',home:14,away:24,kind:'number'},
      {label:'Angekommene Pässe',home:607,away:180,kind:'number',homeDetail:'90 % · 607/674',awayDetail:'73 % · 180/247'},
      {label:'Gelbe Karten',home:1,away:3,kind:'number'},
      {label:'Rote Karten',home:0,away:0,kind:'number'},
      {label:'Durchschnittsnote',home:7.11,away:6.58,kind:'decimal'},
      {label:'Intensive Sprints',home:110,away:97,kind:'number'}
    ],
    leagueAfterMatch:{position:1,played:24,wins:22,draws:2,losses:0,goalsFor:74,goalsAgainst:7,goalDifference:67,points:68},
    standout:{player:'Justin Ramsey',rating:8.6,goals:2,assists:0,shots:3,shotsOnTarget:3},
    milestones:[
      {player:"Cormac O'Kane",text:'150. Ligaspiel seiner Karriere'},
      {player:'Basile Rouviere',text:'250. Ligaspiel seiner Karriere'},
      {player:'Darcy Morling',text:'275. Ligaspiel seiner Karriere'}
    ],
    analysis:{
      summary:'Das Resultat bleibt bis zum Schluss knapp, das Spiel selbst ist es kaum. Finn Harps kontrolliert Ball und Chancen fast vollständig, macht aus 3,62 xG aber nur zwei Tore.',
      firstHalf:'Justin Ramsey eröffnet in der 14. Minute. Waterford antwortet mit seinem einzigen Schuss aufs Tor durch Cian O’Connell in der 27. Minute, ehe Ramsey in der 38. Minute den späteren Endstand herstellt.',
      secondHalf:'Nach der Pause bleibt Finn Harps klar überlegen, findet aber keinen dritten Treffer. Waterford verteidigt das 1:2 kompakt und verhindert trotz dauerhaften Drucks eine deutlichere Niederlage.',
      efficiency:'23 Abschlüsse, neun Schüsse aufs Tor, vier Großchancen und 3,62 xG ergeben normalerweise mehr als zwei Treffer. Diesmal muss Ramsey die fehlende Effizienz der übrigen Offensive auffangen.',
      control:'77 Prozent Ballbesitz und 607 angekommene Pässe zeigen, dass Waterford kaum Zugriff auf den Spielrhythmus erhält. Die Gäste kommen insgesamt nur auf zwei Abschlüsse.',
      leagueContext:'Nach 24 Ligaspielen bleibt Finn Harps ungeschlagen: 22 Siege, zwei Remis, 74:7 Tore und 68 Punkte.'
    },
    sources:['FM-Spielübersicht Finn Harps – Waterford · 29.07.2041','Finn-Harps-Spielerstatistiken · 29.07.2041']
  };
  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-07-29';
    season.latestHeadline='Premier Division: Ramsey erzielt beide Tore beim statistisch deutlich klareren 2:1 gegen Waterford.';
    season.league={...(season.league||{}),position:1,played:24,wins:22,draws:2,losses:0,goalsFor:74,goalsAgainst:7,goalDifference:67,points:68,latestResult:'29.07.2041 · Finn Harps 2:1 Waterford'};
    season.changes=season.changes||{notes:[]};
    const note='29.07.2041: 2:1 gegen Waterford. Finn Harps dominiert mit 23:2 Schüssen, 3,62:0,63 xG und 77 % Ballbesitz, benötigt aber Justin Ramseys Doppelpack. Nach 24 Ligaspielen: 22 Siege, 2 Remis, 0 Niederlagen, 74:7 Tore und 68 Punkte.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  [
    {id:'2041-07-29-justin-ramsey-waterford-brace',date:'2041-07-29',player:'Justin Ramsey',type:'brace',title:'Doppelpack entscheidet Waterford-Spiel',detail:'Trifft in der 14. und 38. Minute beim 2:1 gegen Waterford. Drei Schüsse, drei aufs Tor und Note 8,6.'},
    {id:'2041-07-29-cormac-okane-150-league',date:'2041-07-29',player:"Cormac O'Kane",type:'milestone',title:'150. Ligaspiel der Karriere',detail:'Der Spielbildschirm vermerkt gegen Waterford O’Kanes 150. Ligaspiel seiner Karriere.'},
    {id:'2041-07-29-basile-rouviere-250-league',date:'2041-07-29',player:'Basile Rouviere',type:'milestone',title:'250. Ligaspiel der Karriere',detail:'Erreicht beim 2:1 gegen Waterford sein 250. Ligaspiel der Karriere.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2041-07-29',competition:'Premier Division',fixtureDate:'29.07.2041',
    home:'Finn Harps',away:'Waterford',score:'2:1',location:'Donegal Stadium · Stranorlar · 12.471 Zuschauer',
    headline:'Ramsey entscheidet, was längst deutlicher hätte sein müssen',
    subheadline:'23:2 Schüsse, 3,62:0,63 xG und 77 Prozent Ballbesitz ergeben nur ein 2:1. Justin Ramsey trifft zweimal und verhindert, dass aus deutlicher Überlegenheit ein unnötiger Punktverlust wird.',
    label:'PREMIER DIVISION · FINN HARPS 2:1 WATERFORD',
    heroStat:{label:'xG',value:'3,62:0,63',note:'23:2 Schüsse · 9:1 aufs Tor · 77 % Ballbesitz'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Finn Harps gewinnt gegen Waterford mit 2:1 und muss sich dafür deutlich mehr strecken, als die Spieldaten vermuten lassen. Die Harps kontrollieren fast jeden statistischen Bereich, doch Waterford bleibt dank kompakter Verteidigung und Cian O’Connells Ausgleich bis zum Ende in Reichweite. Den Unterschied macht Justin Ramsey mit zwei Treffern.',
    sections:[
      {title:'Ramsey trifft, Waterford antwortet sofort',text:'Justin Ramsey bringt Finn Harps in der 14. Minute in Führung. Waterford benötigt nur einen seiner wenigen offensiven Momente: Cian O’Connell gleicht in der 27. Minute aus. Elf Minuten später trifft Ramsey erneut und stellt den 2:1-Pausenstand her.'},
      {title:'23:2 Schüsse, aber nur zwei Tore',text:'Finn Harps produziert 23 Abschlüsse, neun davon aufs Tor, vier Großchancen und 3,62 xG. Waterford kommt auf zwei Schüsse und 0,63 xG. Das Ergebnis spiegelt die Chancenverteilung deshalb nur sehr begrenzt wider.'},
      {title:'Waterford hält das Spiel künstlich eng',text:'Nach der Pause verteidigen die Gäste das 1:2 mit großer Disziplin. Obwohl Finn Harps 77 Prozent Ballbesitz erreicht und 607 Pässe an den Mann bringt, fällt kein drittes Tor. Aus deutlicher Feldüberlegenheit wird so ein Ergebnis, das bis zum Abpfiff nach Gefahr aussieht.'},
      {title:'Ramsey ist der Effizienzanker',text:'Ramsey benötigt drei Abschlüsse für zwei Tore und beendet die Partie mit Note 8,6. Während die Mannschaft insgesamt Chancen liegen lässt, ist der Stürmer genau in den Momenten effizient, in denen das Spiel kippen könnte.'},
      {title:'Ungeschlagen nach 24 Ligaspielen',text:'Mit dem Sieg verbessert Finn Harps seine Bilanz auf 22 Siege und zwei Remis. Das Torverhältnis steht bei 74:7, der Punktestand bei 68. Selbst ein ungewöhnlich ineffizienter Abend endet damit erneut mit drei Punkten.'}
    ],
    strengthsTitle:'WARUM DIE HARPS TROTZDEM GEWINNEN',strengthsHeading:'Strukturelle Dominanz und ein effizienter Ramsey',
    strengths:['23:2 Schüsse','9:1 aufs Tor','3,62 xG','77 % Ballbesitz','607 angekommene Pässe','Ramsey: 2 Tore + Note 8,6'],
    vulnerabilitiesTitle:'WARUM ES NUR 2:1 WIRD',vulnerabilitiesHeading:'Viele Chancen, zu wenig Ertrag',
    vulnerabilities:['Nur zwei Tore aus 3,62 xG','Waterford verwertet seinen einzigen Schuss aufs Tor','Vier Großchancen führen nicht zu einem klaren Ergebnis','Der dritte Treffer bleibt trotz dauerhaften Drucks aus'],
    verdictHeading:'Ein knapper Spielstand, kein knappes Spiel',
    verdict:'Waterford verdient Anerkennung dafür, dass es ein statistisch einseitiges Spiel bis zum Schluss offen hält. Trotzdem bleibt die eigentliche Geschichte die Finn-Harps-Dominanz: 23:2 Schüsse und 77 Prozent Ballbesitz sind kein 50:50-Spiel. Dass es dennoch nur 2:1 endet, macht Ramseys Doppelpack umso wertvoller.',
    sourcesHeading:'Spieldaten',sourcesNote:'Der Bericht basiert auf den bereitgestellten Football-Manager-Screenshots vom Premier-Division-Spiel am 29. Juli 2041.',
    sources:['FM-Spielübersicht Finn Harps – Waterford · 29.07.2041','Finn-Harps-Spielerstatistiken · 29.07.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-07-29-waterford-liga',date:'2041-07-29',season:2041,category:'Premier Division',accent:'blue',featured:true,
    eyebrow:'PREMIER DIVISION · FINN HARPS 2:1 WATERFORD',title:'Ramsey macht aus Dominanz drei Punkte',
    summary:'Finn Harps schlägt Waterford 2:1 trotz 23:2 Schüssen und 3,62 xG. Justin Ramsey erzielt beide Tore; nach 24 Ligaspielen bleiben die Harps ungeschlagen.',
    href:`presse.html?id=${reportId}`,entities:['finn-harps','waterford','justin-ramsey','cormac-okane','basile-rouviere']
  });
})();