(()=>{
  const p=(window.FM_PLAYERS||[]).find(item=>item.id==='jake-roberts');
  if(!p)return;
  Object.assign(p,{
    info:'Finn-Harps-Spieler · Pflichtspieldebüt am 23.01.2041',
    status:'Talent vor dem Durchbruch',
    summary:'Jake Roberts feierte am 23. Januar 2041 beim 2:0 gegen BSC Young Boys sein Pflichtspieldebüt für Finn Harps. Der 19-jährige Mittelfeldspieler kam in der 61. Minute, spielte 29 Minuten und fügte sich mit 17 Pässen bei 88 Prozent Passquote kontrolliert in den Champions-League-Abend ein.',
    analysis:'Das Debüt bestätigte zunächst genau den vorgesehenen Einstieg: Roberts musste das Spiel nicht an sich reißen, sondern die Führung stabilisieren und sich in die Passstruktur einfügen. Mit 17 Pässen, 88 Prozent Passquote, einem Dribbling und einer Bewertung von 6,7 blieb sein erster Auftritt unspektakulär, aber sauber. Für einen 19-Jährigen in seinem ersten Pflichtspiel bei einem neuen Klub und direkt auf Champions-League-Niveau ist das ein sinnvoller erster Schritt.',
    future:'Nach dem kontrollierten Debüt kann Roberts schrittweise weitere Minuten als linker Achter oder zurückgezogener Spielmacher erhalten. Der nächste Entwicklungsschritt besteht darin, neben sauberer Ballzirkulation häufiger progressive Pässe und Aktionen im letzten Drittel einzubringen.',
    verdict:'Der erste Schritt ist gemacht',
    appearances:'0 (1)',
    goals:0,
    assists:0,
    avgRating:'6,70',
    profileDate:'2041-01-23'
  });
  const splits=[...(p.seasonSplits||[])].filter(item=>item.competition!=='Finn Harps · Pflichtspiele'&&item.competition!=='UEFA Champions League 2041');
  p.seasonSplits=[
    {competition:'Finn Harps · Pflichtspiele 2041',appearances:'0 (1)',goals:0,assists:0,pom:0,rating:'6,70'},
    {competition:'UEFA Champions League 2041',appearances:'0 (1)',goals:0,assists:0,pom:0,rating:'6,70'},
    ...splits
  ];
  p.careerSeasons=[
    {season:'2041',club:'Finn Harps',league:'Premier Division',appearances:'0 (1)',goals:0,assists:0,pom:0,rating:'6,70'},
    ...(p.careerSeasons||[]).filter(item=>!(item.season==='2041'&&item.club==='Finn Harps'))
  ];
  p.careerNarrative=[
    ...(p.careerNarrative||[]).filter(text=>!String(text).includes('erstes Pflichtspiel für den Klub steht noch aus')),
    'Am 23. Januar 2041 feierte Roberts beim 2:0-Heimsieg gegen BSC Young Boys sein Pflichtspieldebüt für Finn Harps. Er wurde in der 61. Minute eingewechselt, spielte 29 Minuten und erhielt die Note 6,7.'
  ];
  p.honours=[
    {year:'2041',type:'Finn-Harps-Debüt',items:['Pflichtspieldebüt gegen BSC Young Boys am 23.01.2041','2:0-Sieg in der Champions-League-Ligaphase','29 Minuten · 17 Pässe · 88 Prozent Passquote · Note 6,7']},
    ...(p.honours||[]).filter(item=>item.year!=='2041')
  ];
  p.strengths=[...(p.strengths||[]).filter(text=>!String(text).includes('erstes Pflichtspiel')),'Kontrolliertes Pflichtspieldebüt auf Champions-League-Niveau'];
})();