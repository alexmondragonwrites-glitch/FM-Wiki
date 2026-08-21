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

  const fixtureId='2042-02-08-finn-harps-derry-presidents-cup';
  const reportId='2042-02-08-finn-harps-derry-presidents-cup-report';

  const match={
    id:fixtureId,date:'2042-02-08',season:2042,competition:"President's Cup",stage:'Finale',
    home:{id:'finn-harps',name:'Finn Harps',short:'FH',score:2},
    away:{id:'derry-city',name:'Derry City',short:'DER',score:3},
    score:'2:3',homeGoals:2,awayGoals:3,halfTime:'1:2',
    venue:'Donegal Stadium',location:'Stranorlar, Irland',attendance:12800,awayFans:640,weather:'Böig · Nieselregen · 4 °C',referee:'Lee Lynch',
    headline:"Derry sticht wieder zu: Finn Harps verliert den President's Cup 2:3",
    verdict:'Finn Harps kontrolliert weite Teile des Spiels, produziert mehr Ballbesitz und den deutlich höheren xG-Wert, doch Derry City ist im Strafraum eiskalt. Andy Clark dreht Pol Muñoz’ frühe Führung mit einem Doppelpack, Justin Ramsey gleicht per Elfmeter aus, ehe Kavanagh Hamici in der 83. Minute den erneuten Derry-Nadelstich setzt. Schon wieder ist es Derry, das den Harps in einem großen irischen Spiel den Abend verdirbt.',
    scorers:[
      {player:'Pol Muñoz',team:'Finn Harps',goals:1,minutes:[21]},
      {player:'Andy Clark',team:'Derry City',goals:2,minutes:[27,35]},
      {player:'Justin Ramsey',team:'Finn Harps',goals:1,minutes:[67],penalty:true},
      {player:'Kavanagh Hamici',team:'Derry City',goals:1,minutes:[83]}
    ],
    events:[
      {minute:6,type:'yellow',team:'Finn Harps',player:'Mareks Istrankins',text:'Gelbe Karte'},
      {minute:14,type:'yellow',team:'Finn Harps',player:"Jim O'Neill",text:'Gelbe Karte'},
      {minute:21,type:'goal',team:'Finn Harps',player:'Pol Muñoz',text:'1:0'},
      {minute:27,type:'goal',team:'Derry City',player:'Andy Clark',text:'1:1'},
      {minute:35,type:'goal',team:'Derry City',player:'Andy Clark',text:'1:2'},
      {minute:46,type:'yellow',team:'Finn Harps',player:'Torric Bruce',text:'Gelbe Karte'},
      {minute:51,type:'yellow',team:'Derry City',player:'Simon Wilson',text:'Gelbe Karte'},
      {minute:67,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'2:2 · Elfmeter'},
      {minute:83,type:'goal',team:'Derry City',player:'Kavanagh Hamici',text:'2:3'}
    ],
    stats:[
      {label:'Schüsse',home:17,away:13,kind:'number'},
      {label:'Schüsse aufs Tor',home:5,away:5,kind:'number'},
      {label:'xG',home:3.37,away:1.63,kind:'decimal'},
      {label:'Schüsse neben das Tor',home:7,away:5,kind:'number'},
      {label:'Großchancen',home:2,away:2,kind:'number'},
      {label:'Ballbesitz',home:68,away:32,kind:'percent'},
      {label:'Ecken',home:8,away:8,kind:'number'},
      {label:'Fouls',home:8,away:17,kind:'number'},
      {label:'Angekommene Pässe',home:548,away:262,kind:'number',homeDetail:'89 % · 548/619',awayDetail:'81 % · 262/324'},
      {label:'Gewonnene Zweikämpfe',home:76,away:50,kind:'percent',homeDetail:'16/21',awayDetail:'14/28'},
      {label:'Gewonnene Kopfbälle',home:52,away:44,kind:'percent',homeDetail:'30/58',awayDetail:'26/59'}
    ],
    standout:{player:'Andy Clark',team:'Derry City',rating:8.6,goals:2,note:'Doppelpack in acht Minuten. Derry braucht nicht viele Chancen, weil Clark zwei davon brutal effizient nutzt.'},
    harpsStandout:{player:"Jim O'Neill",team:'Finn Harps',rating:7.8,note:'Mit zwölf progressiven Pässen der auffälligste Harps-Spieler, trotz der Niederlage.'},
    analysis:{
      summary:'Das Ergebnis widerspricht dem Chancenbild: 68 Prozent Ballbesitz und 3,37 xG reichen Finn Harps nicht, weil Derry mit 1,63 xG drei Treffer erzielt. Die Harps kontrollieren, Derry verwertet.',
      firstHalf:'Pol Muñoz bringt die Harps in der 21. Minute in Führung. Andy Clark antwortet in Minute 27 und 35 doppelt und dreht das Finale noch vor der Pause.',
      secondHalf:'Ramsey gleicht in der 67. Minute per Elfmeter aus. Als das Spiel auf eine Schlussphase mit Harps-Druck zuläuft, trifft Kavanagh Hamici in Minute 83 zum 2:3.',
      rivalry:'Derry bestätigt erneut, dass es im irischen Fußball der unangenehmste nationale Gegenspieler der Harps ist. Selbst wenn Finn Harps strukturell und qualitativ überlegen wirkt, findet Derry Wege, große Spiele gegen den Serienmeister zu kippen.',
      efficiency:'Fünf Schüsse aufs Tor auf beiden Seiten, aber Derry macht daraus drei Tore. Genau darin liegt die Geschichte des Spiels.'
    },
    notes:[
      "Derry City gewinnt den President's Cup 2042 mit 3:2 im Donegal Stadium.",
      'Finn Harps führt durch Pol Muñoz, liegt zur Pause aber 1:2 zurück.',
      'Andy Clark erzielt für Derry einen Doppelpack in der 27. und 35. Minute.',
      'Justin Ramsey gleicht per Elfmeter zum 2:2 aus.',
      'Kavanagh Hamici entscheidet das Finale in der 83. Minute.',
      'Finn Harps kommt trotz 68 % Ballbesitz und 3,37 xG nicht zum Sieg.'
    ],
    sources:["FM-Spielbericht Finn Harps – Derry City · President's Cup · 08.02.2042",'FM-Spielübersicht und Matchstatistiken · 08.02.2042']
  };

  upsert(window.FM_MATCHES,match);
  upsert(window.FM_FIXTURES,match);

  const derry=window.FM_CLUBS.find(x=>x.id==='derry-city'||x.name==='Derry City');
  if(derry){
    derry.meetings=derry.meetings||[];
    const meeting={date:'08.02.2042',venue:'A',result:'3:2',competition:"President's Cup · Finale"};
    const idx=derry.meetings.findIndex(x=>x.date===meeting.date&&x.competition===meeting.competition);
    if(idx>=0)derry.meetings[idx]=meeting;else derry.meetings.push(meeting);
    derry.lastMeeting="08.02.2042 · Finn Harps 2:3 Derry City · President's Cup";
    derry.summary='Derry City bleibt der nationale Stachel im Fleisch der Harps und gewinnt den President’s Cup 2042 trotz klarer Harps-Vorteile bei Ballbesitz und xG mit 3:2.';
    derry.pressReport={id:reportId,href:`presse.html?id=${reportId}`,label:"PRESIDENT'S CUP · FINALE",headline:'Derry sticht wieder zu: Harps verlieren 2:3'};
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-02-08';
    season.latestHeadline="President's Cup: Finn Harps verliert 2:3 gegen Derry City. Trotz 68 % Ballbesitz und 3,37 xG entscheidet Derry das Finale spät.";
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note="08.02.2042: 2:3-Niederlage gegen Derry City im President's Cup. Pol Muñoz und Justin Ramsey treffen für die Harps; Andy Clark erzielt einen Doppelpack, Kavanagh Hamici entscheidet das Finale in der 83. Minute.";
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  [
    {id:'2042-02-08-pol-munoz-presidents-cup-goal',date:'2042-02-08',player:'Pol Muñoz',type:'goal',title:"Führung im President's Cup",detail:'Muñoz bringt Finn Harps in der 21. Minute mit 1:0 in Führung.'},
    {id:'2042-02-08-justin-ramsey-presidents-cup-goal',date:'2042-02-08',player:'Justin Ramsey',type:'goal',title:'Ramsey gleicht per Elfmeter aus',detail:'Der Weltklassestürmer verwandelt in der 67. Minute den Strafstoß zum zwischenzeitlichen 2:2.'},
    {id:'2042-02-08-jim-oneill-progressive-passes',date:'2042-02-08',player:"Jim O'Neill",type:'standout',title:'O’Neill trotz Niederlage auffällig',detail:'O’Neill liefert zwölf progressive Pässe und erhält mit 7,8 die beste Harps-Note.'}
  ].forEach(item=>upsert(window.FM_PLAYER_UPDATES,item));

  const report={
    id:reportId,type:'Spielbericht',date:'2042-02-08',competition:"President's Cup",fixtureDate:'08.02.2042',
    home:'Finn Harps',away:'Derry City',score:'2:3',location:'Donegal Stadium · Stranorlar · 12.800 Zuschauer',
    headline:'Schon wieder Derry: Harps verlieren den President’s Cup 2:3',
    subheadline:'Finn Harps hat 68 Prozent Ballbesitz, 3,37 xG und führt früh. Trotzdem nimmt Derry City den Pokal mit. Andy Clark trifft doppelt, Kavanagh Hamici setzt in der 83. Minute den entscheidenden Stich.',
    label:"PRESIDENT'S CUP · FINALE · 08.02.2042",
    heroStat:{label:'Chancenbild',value:'3,37 : 1,63 xG',note:'Finn Harps kontrolliert – Derry trifft'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Es ist inzwischen fast ein eigenes Kapitel dieser Dynastie: Finn Harps kann in Irland fast jeden Gegner strukturell erdrücken, doch Derry City findet immer wieder einen Weg, den Serienmeister in den großen Momenten zu ärgern. Im President’s Cup 2042 ist es wieder so. Die Harps haben mehr Ball, mehr xG und die größere territoriale Kontrolle. Der Pokal geht trotzdem nach Derry.',
    sections:[
      {title:'Muñoz eröffnet – Clark dreht das Finale',text:'Pol Muñoz bringt Finn Harps nach 21 Minuten mit einem Volley aus kurzer Distanz in Führung. Die Antwort ist schnell und doppelt: Andy Clark gleicht in der 27. Minute aus und trifft nur acht Minuten später erneut. Aus 1:0 wird 1:2, obwohl die Harps spielerisch nicht die schlechtere Mannschaft sind.'},
      {title:'Ramsey bringt Hoffnung zurück',text:'Nach der Pause drückt Finn Harps weiter. In der 67. Minute verwandelt Justin Ramsey einen Elfmeter zum 2:2. Zu diesem Zeitpunkt spricht viel dafür, dass die größere Spielkontrolle der Harps das Finale doch noch kippen könnte.'},
      {title:'83. Minute: Derry macht Derry-Dinge',text:'Dann kommt der Moment, der sich für Harps-Fans inzwischen unangenehm vertraut anfühlt. Kavanagh Hamici nutzt in der 83. Minute eine der wenigen klaren Derry-Situationen und trifft aus 19 Metern zum 2:3. Die Harps laufen noch einmal an, aber der Ausgleich fällt nicht mehr.'},
      {title:'Die Zahlen sagen Harps, das Ergebnis sagt Derry',text:'17:13 Schüsse, 68:32 Prozent Ballbesitz und 3,37:1,63 xG sprechen für Finn Harps. Aufs Tor schießen beide Teams fünfmal. Derry macht aus diesen fünf Versuchen drei Tore. Diese Effizienz entscheidet das Finale.'},
      {title:'Der nationale Gegenspieler',text:'Derry ist inzwischen mehr als nur ein starker Ligakonkurrent. Während Finn Harps international längst in anderen Sphären unterwegs ist, bleibt Derry national jener Gegner, der die Harps regelmäßig aus der Komfortzone zieht. Genau deshalb tut diese Niederlage mehr weh als ein gewöhnlicher Saisonauftakt.'}
    ],
    strengthsTitle:'WAS TROTZDEM FUNKTIONIERTE',
    strengthsHeading:'Harps mit Kontrolle und Chancen',
    strengths:[
      '68 Prozent Ballbesitz und 89 Prozent Passquote.',
      '3,37 xG zeigen, dass die Harps genug Chancen für einen Sieg produzieren.',
      'Pol Muñoz trifft zur frühen Führung.',
      'Jim O’Neill liefert zwölf progressive Pässe und die beste Harps-Note mit 7,8.'
    ],
    vulnerabilitiesTitle:'WARUM DERRY GEWINNT',
    vulnerabilitiesHeading:'Effizienz schlägt Kontrolle',
    vulnerabilities:[
      'Derry erzielt aus fünf Schüssen aufs Tor drei Treffer.',
      'Andy Clark bestraft die Harps mit einem Doppelpack innerhalb von acht Minuten.',
      'Nach dem 2:2 reicht ein weiterer sauber ausgespielter Derry-Moment für die Entscheidung.',
      'Die Harps können ihre klare xG-Überlegenheit nicht in Tore übersetzen.'
    ],
    verdictHeading:'Derry bleibt der Stachel im Fleisch',
    verdict:'Eine 2:3-Niederlage im President’s Cup verändert die Saison der Harps nicht grundsätzlich. Aber sie bestätigt etwas, das inzwischen fast wichtiger ist: Derry City ist der Gegner, gegen den Finn Harps national nie in den Autopiloten schalten kann. Europa mag größer sein. Barcelona, Manchester oder Monaco mögen glamouröser klingen. Aber wenn es darum geht, den Harps in Irland einen schmerzhaften Abend zu bereiten, bleibt Derry Spezialist.',
    sourcesHeading:'Spielbasis',
    sourcesNote:'Ergebnis, Tore, Karten, Zuschauerzahl und Matchstatistiken basieren auf den FM-Screenshots vom 8. Februar 2042. Die redaktionelle Rivalitäts-Einordnung ist eine In-Universe-Inszenierung für das Finn-Harps-FM-Wiki.',
    sources:["FM24 · Finn Harps 2:3 Derry City · President's Cup · 08.02.2042",'FM24 · Spielübersicht und Matchstatistiken · 08.02.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:reportId,date:'2042-02-08',season:2042,category:'Spiele',accent:'red',featured:true,
    eyebrow:"PRESIDENT'S CUP · FINALE",
    title:'Schon wieder Derry: Finn Harps verliert den President’s Cup 2:3',
    summary:'Pol Muñoz bringt die Harps in Führung, Ramsey gleicht später per Elfmeter aus. Doch Andy Clarks Doppelpack und Kavanagh Hamicis spätes 2:3 sorgen dafür, dass Derry City erneut zum nationalen Spielverderber der Harps wird.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','derry-city','pol-munoz','justin-ramsey','jim-oneill','season-2042']
  });
})();