(()=>{
  const club=(window.FM_CLUBS||[]).find(item=>item.id==='as-roma');
  if(!club)return;
  club.completion=97;
  club.stadium='Stadio Olimpico · Spielansicht 69.110 Plätze; Vereinsansicht zuvor 89.110';
  club.summary='A.S. Roma gewann das Hinspiel des Champions-League-Achtelfinals am 5. März 2041 im Stadio Olimpico mit 2:1 gegen Finn Harps. Kevin Kelly brachte die Gäste in Führung, doch Andrea Schiavo und Carmelo Torchio drehten die Partie rund um die Pause. Das Ergebnis fiel gemessen an 0,54 zu 2,16 xG deutlich günstiger für Roma aus als der Spielverlauf.';
  club.tags=[...(club.tags||[]).filter(tag=>!String(tag).includes('Achtelfinale 2041')&&!String(tag).includes('Stadio Olimpico')),'2:1 im Achtelfinalhinspiel','0,54 xG gegen 2,16 xG','Schiavo und Torchio treffen','66.300 Zuschauer','Stadionkapazität in FM-Ansichten widersprüchlich: 69.110 / 89.110'];
  club.meetings=[
    {date:'05.03.2041',venue:'A',result:'2:1'},
    ...(club.meetings||[]).filter(item=>item.date!=='05.03.2041'&&!String(item.date).includes('Hinspiel'))
  ];
  club.lastMatch={
    date:'05.03.2041',competition:'UEFA Champions League · Achtelfinale Hinspiel',result:'A.S. Roma 2:1 Finn Harps',
    scorers:['Kevin Kelly 19.','Andrea Schiavo 44.','Carmelo Torchio 48.'],
    note:'Finn Harps führte früh und erspielte sich zwölf Abschlüsse, sechs Schüsse aufs Tor, drei Großchancen und 2,16 xG. Roma benötigte nur sieben Abschlüsse und 0,54 xG für zwei Treffer. Das Rückspiel bleibt bei einem Tor Differenz vollständig offen.'
  };
  club.pressReport={
    id:'2041-03-05-as-roma-spielbericht',href:'presse.html?id=2041-03-05-as-roma-spielbericht',
    label:'SPIELBERICHT · 05.03.2041',headline:'Zwei römische Stiche drehen ein starkes Harps-Spiel',
    standfirst:'Finn Harps verliert das Achtelfinalhinspiel trotz 2,16 xG, drei Großchancen und mehr Abschlüssen mit 1:2.'
  };
  club.checklist={...(club.checklist||{}),profile:true,squad:true,tactics:true,meetings:true,history:true};
})();
