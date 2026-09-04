(()=>{
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_TRANSFER_UPDATES=window.FM_TRANSFER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-07-05';
  const reportId='2042-07-05-alejandro-lopez-finn-harps';

  const transfer={
    id:'2042-07-05-alejandro-lopez-finn-harps',date,type:'arrival',player:'Alejandro López',from:'Club América',to:'Finn Harps',
    fee:'€8 Mio.',maxFee:'bis zu €9,5 Mio.',age:20,nation:'Mexiko',position:'DM',squadStatus:'Schlüsselspieler',
    weeklyWage:'€40.000',contractUntil:'2046-12-31',
    clauses:{afterLeagueAppearances:'€1,6 Mio. nach 50 Ligaspielen',sellOn:'30 % Gewinnbeteiligung bei Weiterverkauf'},
    bonuses:{loyalty:'€1,4 Mio.',appearance:'€775',cleanSheet:'€7.250',leagueTeamOfTheYear:'€100.000',championsLeagueTitle:'€185.000',agentFee:'€300.000'},
    previousSeason:{club:'Club América',appearances:47,substituteAppearances:7},
    staffAssessment:'Spieler für die Breite mit Verbesserungspotenzial; deutliches Steigerungspotenzial.',
    fanMood:'glücklich',
    welcomeMentor:'Emerson Escárcega',
    context:'Finn Harps verpflichtet einen 20-jährigen mexikanischen defensiven Mittelfeldspieler mit Entwicklungspotenzial und gibt ihm direkt den Status Schlüsselspieler.'
  };
  upsert(window.FM_TRANSFER_UPDATES,transfer);

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-07-05-alejandro-lopez-joins-finn-harps',date,player:'Alejandro López',type:'transfer',
    title:'Alejandro López ist neuer Harps-Spieler',
    detail:'Der 20-jährige mexikanische defensive Mittelfeldspieler kommt für €8 Mio. von Club América. Durch Klauseln kann die Ablöse bis auf €9,5 Mio. steigen. López erhält €40.000 pro Woche und einen Vertrag bis Ende 2046.'
  });

  const season=(window.FM_SEASONS||[]).find(item=>item&&(item.year===2042||item.season===2042));
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Finn Harps verpflichtet Alejandro López von Club América.';
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='05.07.2042: Finn Harps verpflichtet den 20-jährigen mexikanischen DM Alejandro López für €8 Mio. von Club América. Die Ablöse kann durch Klauseln bis auf €9,5 Mio. steigen.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  const report={
    id:reportId,type:'Transfer',date,competition:'Finn Harps · Transfermarkt',
    headline:'Nächster Zukunftsbaustein: Finn Harps holt Alejandro López',
    subheadline:'Der 20-jährige mexikanische defensive Mittelfeldspieler kommt für €8 Mio. von Club América. Mit Boni kann das Paket bis auf €9,5 Mio. steigen.',
    label:'FINN HARPS · TRANSFER · 5. JULI 2042',
    heroStat:{label:'ABLÖSE',value:'€8 MIO.',note:'bis zu €9,5 Mio. · Vertrag bis 31.12.2046'},
    backlink:{href:'kaderplanung.html',label:'← ZUR KADERPLANUNG'},
    intro:'Finn Harps ergänzt den Kader um einen jungen mexikanischen Mittelfeldspieler mit klarer Entwicklungsperspektive. Alejandro López wechselt von Club América nach Donegal und soll trotz seiner erst 20 Jahre bereits als Schlüsselspieler eingeplant werden.',
    sections:[
      {title:'Jung, aber bereits mit viel Profierfahrung',text:'López kam in der vergangenen Saison 47-mal für Club América zum Einsatz, davon siebenmal als Einwechselspieler. Für einen 20-Jährigen bringt er damit bereits einen ungewöhnlich großen Erfahrungssockel aus dem Profifußball mit.'},
      {title:'Überschaubare Grundablöse mit Entwicklungschance',text:'Die feste Ablöse beträgt €8 Mio. Durch erfolgsabhängige Klauseln kann die Summe bis auf €9,5 Mio. steigen. Zusätzlich enthält der Deal eine 30-prozentige Gewinnbeteiligung bei einem späteren Weiterverkauf.'},
      {title:'Schlüsselspieler statt Perspektivbank',text:'López unterschreibt bis zum 31. Dezember 2046 und erhält €40.000 pro Woche. Bemerkenswert ist seine vereinbarte Einsatzzeit als Schlüsselspieler. Der Klub sieht ihn also nicht nur als Projekt für später, sondern als Spieler, der schon zeitnah Verantwortung übernehmen soll.'},
      {title:'Das Scouting sieht noch Luft nach oben',text:'Der Co-Trainer beschreibt López derzeit als Spieler für die Breite mit Verbesserungspotenzial und sieht deutliches Steigerungspotenzial. Genau darin liegt der Reiz des Transfers: Finn Harps kauft nicht nur den heutigen Spieler, sondern auch eine mögliche deutliche Entwicklungskurve.'},
      {title:'Escárcega als mexikanische Brücke',text:'Emerson Escárcega soll López im Verein willkommen heißen und beim Einleben unterstützen. Gerade während Escárcega mit Mexiko eine starke WM spielt, bekommt der Transfer dadurch eine zusätzliche Verbindung zwischen der mexikanischen Nationalmannschaft und Donegal.'}
    ],
    verdictHeading:'Ein Transfer zwischen Gegenwart und Zukunft',
    verdict:'Für €8 Mio. ist das Risiko überschaubar, während Alter, Erfahrung und Entwicklungspotenzial eine hohe Decke versprechen. Der Schlüsselspieler-Status zeigt zugleich, dass Finn Harps López schneller integrieren will als einen klassischen Nachwuchstransfer.',
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Reaktionen, ergänzt um die im Spiel sichtbare positive Fanreaktion.',items:[
      '„20 Jahre, fast 50 Einsätze in der letzten Saison und schon Schlüsselspieler? Das klingt nach einem sehr bewussten Entwicklungsdeal.“',
      '„Wenn Escárcega ihn in Donegal an die Hand nimmt, kann das ein richtig schöner mexikanischer Harps-Strang werden.“',
      '„Acht Millionen für so ein Profil ist genau die Sorte Transfer, bei der man in zwei Jahren zurückschaut und grinst.“'
    ]},
    sources:['FM Transfer-News · Finn Harps hat López verpflichtet · 05.07.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-07-05-alejandro-lopez-signing',date,type:'transfer',
    title:'Finn Harps verpflichtet Alejandro López',
    text:'Der 20-jährige mexikanische defensive Mittelfeldspieler kommt für €8 Mio. von Club América. Mit Klauseln kann die Ablöse bis auf €9,5 Mio. steigen.',
    href:`presse.html?id=${reportId}`
  });
})();