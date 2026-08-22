(()=>{
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];

  const history={
    date:'2041-07-03',
    competition:'FIFA Club World Cup',
    stage:'Halbfinale',
    venue:'Stade de France',
    location:'Saint-Denis, Frankreich',
    attendance:81338,
    result:'Caen 4:1 Finn Harps',
    halfTime:'3:1',
    finnHarpsScorer:{player:'Justin Ramsey',minute:26},
    caenScorers:[
      {player:'Yannick Jaffre',minutes:[20,39]},
      {player:"Harry O'Leary",minutes:[38]},
      {player:'Adama Koné',minutes:['90+2']}
    ],
    stats:{shots:'11:6',shotsOnTarget:'7:2',xG:'1,59:0,68',possession:'48:52'},
    note:'Caen eliminierte Finn Harps im Halbfinale der Klub-WM 2041 mit 4:1. Ramsey hatte zwischenzeitlich zum 1:1 ausgeglichen, ehe O’Leary und Jaffre die Partie noch vor der Pause entschieden.'
  };

  const caen=window.FM_CLUBS.find(x=>x.id==='caen'||x.name==='Caen'||x.name==='Stade Malherbe Caen Calvados');
  if(caen){
    caen.rivalryWithFinnHarps={
      type:'Europäisches Wiedersehen',
      previousKnockoutMeeting:history,
      storyline:'Offene Rechnung seit der Klub-WM 2041: Caen warf den damaligen Titelverteidiger Finn Harps im Halbfinale mit 4:1 aus dem Turnier. Das Champions-League-Achtelfinale 2042 ist damit kein erstes Kennenlernen, sondern ein Wiedersehen mit einer der deutlichsten K.-o.-Niederlagen der jüngeren Harps-Geschichte.'
    };
    caen.meetings=caen.meetings||[];
    const oldMeeting={date:'03.07.2041',competition:'FIFA Club World Cup · Halbfinale',venue:'Stade de France · Saint-Denis',result:'4:1'};
    const idx=caen.meetings.findIndex(x=>x.date===oldMeeting.date&&x.competition===oldMeeting.competition);
    if(idx>=0)caen.meetings[idx]=oldMeeting;else caen.meetings.unshift(oldMeeting);
    caen.summary='Caen ist vor dem Champions-League-Achtelfinale ein deutlich gefährlicherer Gegner, als der Name zunächst vermuten lässt: Rang vier in Frankreich, 42 Punkte aus 23 Spielen, ein Kader mit mehreren Spielern im dreistelligen Millionenbereich, der Erfolg gegen Bayern München in der Zwischenrunde und eine offene Rechnung mit Finn Harps. Im Klub-WM-Halbfinale 2041 schlug Caen die Harps im Stade de France mit 4:1.';
  }

  const cl=window.FM_CHAMPIONS_LEAGUE['2041-42'];
  if(cl&&cl.knockoutStage&&cl.knockoutStage.roundOf16&&cl.knockoutStage.roundOf16.finnHarps){
    cl.knockoutStage.roundOf16.finnHarps.previousMeeting=history;
    cl.knockoutStage.roundOf16.finnHarps.storyline='Revanchechance: Caen beendete Finn Harps’ Klub-WM-Lauf am 3. Juli 2041 im Halbfinale mit einem 4:1.';
  }

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.championsLeague=season.championsLeague||{};
    season.championsLeague.roundOf16=season.championsLeague.roundOf16||{};
    season.championsLeague.roundOf16.previousMeeting=history;
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='02.03.2042: Das Achtelfinale gegen Caen ist auch eine offene Rechnung. Am 03.07.2041 schlug Caen Finn Harps im Klub-WM-Halbfinale im Stade de France mit 4:1.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  const report=window.FM_PRESS_REPORTS.find(x=>x.id==='2042-03-02-caen-finn-harps-achtelfinale-preview');
  if(report){
    report.headline='Kein Freilos und eine offene Rechnung: Caen wartet auf die Harps';
    report.subheadline='Frankreichs Vierter hat Bayern München ausgeschaltet und verfügt über einen Milliardenkader. Für Finn Harps steckt aber noch mehr Geschichte in diesem Los: Caen warf die Harps 2041 mit 4:1 aus dem Klub-WM-Halbfinale.';
    report.heroStat={label:'Letztes K.-o.-Duell',value:'Caen 4:1 Harps',note:'Klub-WM-Halbfinale · 03.07.2041'};
    report.sections=report.sections||[];
    const title='Offene Rechnung seit der Klub-WM 2041';
    const section={
      title,
      text:'Caen ist für Finn Harps kein unbekannter Gegner. Am 3. Juli 2041 verlor der damalige Klub-Weltmeister im Halbfinale der FIFA Club World Cup im Stade de France mit 1:4 gegen die Franzosen. Yannick Jaffre traf zum 1:0, Justin Ramsey glich in der 26. Minute aus. Dann entschieden Harry O’Leary in Minute 38 und erneut Jaffre nur eine Minute später die Partie praktisch vor der Pause; Adama Koné setzte in der Nachspielzeit den Schlusspunkt. Das Achtelfinale 2042 ist damit auch ein Wiedersehen mit einer der klarsten K.-o.-Niederlagen der jüngeren Harps-Geschichte.'
    };
    const existing=report.sections.findIndex(x=>x.title===title);
    if(existing>=0)report.sections[existing]=section;else report.sections.unshift(section);
    report.verdictHeading='Favoritenrolle mit Erinnerung';
    report.verdict='Finn Harps darf nach der starken Ligaphase auf das Viertelfinale schauen, doch Caen ist weder sportlich noch historisch ein bequemes Los. Der französische Vierte hat Bayern ausgeschaltet, besitzt enorme individuelle Qualität und hat bereits bewiesen, dass er die Harps in einem großen K.-o.-Spiel deutlich schlagen kann. Das Achtelfinale ist deshalb zugleich Revanchechance und Warnschild.';
  }
})();