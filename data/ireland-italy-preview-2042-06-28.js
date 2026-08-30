(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_IRELAND=window.FM_IRELAND||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-06-28';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const italy={
    team:'Italien',stage:'2. Runde',matchDate:'2042-06-29',kickoff:'19:00',
    likelyXI:[
      {player:'Maurizio Laporta',club:'Inter',position:'TW',age:32},
      {player:'Luca Passariello',club:'Napoli',position:'V/FV/M/OM (R)',age:21},
      {player:'Daniele Di Maio',club:'Finn Harps',position:'V (Z), DM',age:21},
      {player:'Massimiliano Romano',club:'Marseille',position:'V (RLZ)',age:25},
      {player:'Leonardo Greco',club:'Barcelona',position:'V (RL), FV (R)',age:27},
      {player:'Filippo Silvestri',club:'Milan',position:'V (RZ), DM',age:27},
      {player:'Roberto Lucarelli',club:'Tottenham',position:'DM, M (Z), OM (RZ)',age:29},
      {player:'Romano Maisto',club:'Finn Harps',position:'FV (L), M/OM (LZ)',age:22},
      {player:'Andrea Schiavo',club:'Roma',position:'M/OM (Z)',age:26},
      {player:'Luigi Ginelli',club:'Inter',position:'OM (RZ), ST (Z)',age:31},
      {player:'Alberto Fabbri',club:'Juventus',position:'OM (R), ST (Z)',age:33}
    ],
    squadHighlights:[
      {player:'Roberto Lucarelli',club:'Tottenham',value:'€195–234 Mio',note:'Zentrale Schaltstelle; 3 WM-Einsätze, 1 Tor, 1 Vorlage, Ø 7,20.'},
      {player:'Andrea Schiavo',club:'Roma',value:'€190–227 Mio',note:'Kreativer Offensivspieler; drei Einsätze und eine Vorlage.'},
      {player:'Leonardo Greco',club:'Barcelona',value:'€189–208 Mio',note:'Außenverteidiger mit außergewöhnlicher Moral.'},
      {player:'Alberto Fabbri',club:'Juventus',value:'€136–160 Mio',note:'33-jähriger Mittelstürmer; 3 Einsätze, 2 Tore, Ø 7,47.'},
      {player:'Marco Sacco',club:'Crystal Palace',value:'nicht zum Verkauf',note:'2 Tore und 1 Vorlage in 2(1) Einsätzen, Ø 7,65.'}
    ],
    harpsConnections:[
      {player:'Daniele Di Maio',age:21,club:'Finn Harps',role:'Innenverteidiger',wc:'2 Einsätze, Ø 6,75'},
      {player:'Romano Maisto',age:22,club:'Finn Harps',role:'linke Offensiv-/Flügelrolle',wc:'1 Einsatz, 1 Vorlage, Ø 7,40'}
    ],
    comparison:{
      ireland:{avgAge:27.19,avgHeightCm:183,avgWeightKg:77,avgCaps:46,avgYouthCaps:8,avgWagePerWeek:'€69.000',avgTransferValue:'€31 Mio',unavailable:0},
      italy:{avgAge:27.85,avgHeightCm:181,avgWeightKg:76,avgCaps:44,avgYouthCaps:14,avgWagePerWeek:'€225.000',avgTransferValue:'€56,79 Mio',unavailable:1}
    },
    strengths:['Abschluss und Weitschüsse','Dribbling und erster Kontakt','Kraft und Balance','Standards: Ecken, Elfmeter und weite Einwürfe','Passspiel und Tackling','Laporta im Tor sowie Greco in der Defensive'],
    weaknesses:['Torwart-Exzentrizität','Herauslaufen der Torhüter','Luca Passariello zuletzt außer Form','Sieben der letzten 22 Gegentore kamen von außerhalb des Strafraums'],
    tacticalRead:'Italien ist individuell teurer und in der Breite voller Spieler aus europäischen Spitzenklubs. Irland hält mit mehr durchschnittlicher Größe, hoher Länderspielerfahrung und einem eingespielten Finn-Harps-Kern dagegen. Der Schlüssel liegt darin, Italiens technische Qualität nicht in ruhige Ballbesitzphasen kommen zu lassen und die Räume hinter den Außenverteidigern zu attackieren.'
  };

  wc.updated=date;
  wc.irelandItalyPreview=italy;
  wc.knockoutPairings=wc.knockoutPairings||[];
  const pairing={id:'2042-world-cup-round2-ireland-italy',stage:'2. Runde',home:'Irland',away:'Italien',status:'angesetzt',date:'2042-06-29',kickoff:'19:00',note:'Gruppensieger Irland gegen den Dritten der Gruppe G.'};
  const index=wc.knockoutPairings.findIndex(item=>item&&item.id===pairing.id);
  if(index>=0)wc.knockoutPairings[index]=Object.assign({},wc.knockoutPairings[index],pairing);else wc.knockoutPairings.push(pairing);

  Object.assign(window.FM_IRELAND,{
    updated:'28.06.2042',
    nextFocus:{competition:'FIFA World Cup 2042',stage:'2. Runde · K.-o.-Phase',opponent:'Italien',date:'29.06.2042',kickoff:'19:00'},
    italyPreview:italy
  });

  const report={
    id:'2042-06-28-ireland-italy-world-cup-preview',type:'WM-Vorbericht',date,competition:'FIFA World Cup 2042',
    headline:'Irland gegen Italien: Jetzt beginnt die WM ohne Sicherheitsnetz',
    subheadline:'Der Gruppensieger trifft auf einen italienischen Kader voller europäischer Spitzenklubs. Mit Di Maio und Maisto stehen zwei Finn-Harps-Spieler auf der anderen Seite.',
    label:'FIFA WORLD CUP 2042 · 2. RUNDE · IRLAND – ITALIEN',
    heroStat:{label:'KADERWERT',value:'€31 Mio vs. €56,79 Mio',note:'durchschnittlicher Transferwert pro Spieler: Irland vs. Italien'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Nach sieben Punkten aus einer Gruppe mit Brasilien wartet auf Irland nun Italien. Die Azzurri wurden in Gruppe G nur Dritter, besitzen aber einen Kader mit massivem Klubniveau: Inter, Barcelona, Tottenham, Roma, Juventus, Milan und weitere Spitzenadressen prägen die Mannschaft. Dazu kommt die besondere Finn-Harps-Note durch Daniele Di Maio und Romano Maisto.',
    sections:[
      {title:'Italiens Mannschaft: keine normale Nummer drei',text:'Die Platzierung in Gruppe G täuscht über die Qualität hinweg. Roberto Lucarelli wird auf €195–234 Mio geschätzt, Andrea Schiavo auf €190–227 Mio und Leonardo Greco auf €189–208 Mio. Alberto Fabbri bringt als 33-jähriger Stürmer zwei WM-Tore und eine Durchschnittsnote von 7,47 mit.'},
      {title:'Harps gegen Harps',text:'Daniele Di Maio dürfte im Zentrum der italienischen Abwehr stehen, Romano Maisto links offensiv. Für Irland bedeutet das: zwei Spieler kennen Flannigans Abläufe, Pressingwinkel und viele irische Teamkollegen aus dem täglichen Training. Umgekehrt kennt Irland ihre Stärken genauso gut.'},
      {title:'Der Größenunterschied ist finanziell, nicht automatisch sportlich',text:'Italien kommt auf rund €225.000 durchschnittliches Wochengehalt und €56,79 Mio durchschnittlichen Transferwert, Irland auf €69.000 und €31 Mio. Irland ist im Schnitt etwas größer und hat sogar mehr A-Länderspiele pro Spieler. Das erklärt, warum der Außenseiter auf dem Papier längst nicht mehr wie ein klassischer Außenseiter wirkt.'},
      {title:'Taktischer Brennpunkt',text:'Italiens Stärken liegen bei Abschluss, Dribbling, erstem Kontakt, Standards, Passspiel und Zweikampftechnik. Angreifbar wirken vor allem das Torwartverhalten beim Herauslaufen, die Exzentrizität sowie Passariellos Form. Auffällig: Sieben der letzten 22 italienischen Gegentore entstanden durch Abschlüsse von außerhalb des Strafraums.'},
      {title:'Die Bühne',text:'Anstoß ist am 29. Juni um 19:00 Uhr. Nach dem Ausscheiden Argentiniens und Portugals ist die Botschaft dieser K.-o.-Runde klar: Reputation schützt niemanden. Irland kann mit einem Sieg den nächsten europäischen Schwergewichtler aus dem Turnier nehmen.'}
    ],
    fanReactions:{simulated:true,note:'Simulierte Save-Welt-Reaktionen',items:[
      '„Wir haben Brasilien nicht geschlagen, aber wir haben ihnen gezeigt, dass wir auf diesem Niveau leben können. Jetzt Italien.“',
      '„Di Maio und Maisto gegen ihre Harps-Teamkollegen ist genau die Sorte WM-Geschichte, die man sich nicht ausdenken könnte.“',
      '„Italien hat die teureren Namen. Irland hat inzwischen das unangenehmere System.“'
    ]},
    sources:['FM Italien-Scoutbericht · 27./28.06.2042','FM Kadervergleich Irland – Italien · 27.06.2042','FM Italien-Kaderexport · 28.06.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);
  upsert(window.FM_NEWS,{
    id:'2042-06-28-ireland-italy-preview',date,type:'world-cup',
    title:'Irland vor Italien: zwei Finn-Harps-Spieler auf der Gegenseite',
    text:'Irland trifft am 29. Juni um 19:00 Uhr auf Italien. Di Maio und Maisto gehören zum italienischen Aufgebot; der Kadervergleich zeigt enorme italienische Marktwerte, aber auch eine erfahrene irische Mannschaft.',
    href:'presse.html?id=2042-06-28-ireland-italy-world-cup-preview'
  });
})();