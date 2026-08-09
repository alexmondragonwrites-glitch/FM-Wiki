(()=>{
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_CLUB_WORLD_CUPS=window.FM_CLUB_WORLD_CUPS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const previewId='2041-06-25-barcelona-klub-wm-viertelfinale-vorbericht';

  const probableXI=[
    {name:'José Antonio Rangel',role:'Mitspielender Torwart',zone:'TW',age:32,apps:'53',goals:0,assists:0,rating:7.02,fitness:91,value:'€56–67 Mio.'},
    {name:'James Ward',role:'Inverser Außenverteidiger',zone:'VR',age:31,apps:'41 (1)',goals:2,assists:4,rating:7.08,fitness:62,value:'Nicht zum Verkauf'},
    {name:'Ángel',role:'Abräumer',zone:'IVR',age:29,apps:'49 (2)',goals:1,assists:1,rating:7.06,fitness:72,value:'€224–246 Mio.'},
    {name:'Marko Radulović',role:'Innenverteidiger',zone:'IVL',age:30,apps:'48 (3)',goals:1,assists:1,rating:6.96,fitness:84,value:'€43–62 Mio.'},
    {name:'Leonardo Greco',role:'Außenverteidiger',zone:'VL',age:26,apps:'41 (2)',goals:0,assists:10,rating:7.14,fitness:73,value:'€189–208 Mio.'},
    {name:'Aleksandar Ilić',role:'Abräumer',zone:'DM',age:28,apps:'49 (1)',goals:0,assists:7,rating:7.14,fitness:60,value:'€209–274 Mio.'},
    {name:'Álvaro Pérez',role:'Zurückgezogener Spielmacher',zone:'MZR',age:30,apps:'44 (10)',goals:12,assists:6,rating:7.06,fitness:73,value:'€28–40 Mio.'},
    {name:'Carmelo Chirico',role:'Zurückgezogener Spielmacher',zone:'MZL',age:30,apps:'43 (7)',goals:4,assists:8,rating:7.11,fitness:76,value:'€57–67 Mio.'},
    {name:'Lamine Yamal',role:'Vorgeschobener Spielmacher',zone:'OMR',age:33,apps:'20 (14)',goals:9,assists:13,rating:7.43,fitness:63,value:'€20–24 Mio.'},
    {name:'Fernandes',role:'Stoßstürmer / linker Angreifer',zone:'OML',age:32,apps:'48',goals:24,assists:10,rating:7.27,fitness:68,value:'€69–97 Mio.'},
    {name:'Emmanuel Musah',role:'Stürmer',zone:'ST',age:27,apps:'45 (8)',goals:15,assists:5,rating:7.03,fitness:79,value:'€100–148 Mio.'}
  ];

  const squadSnapshot=[
    ...probableXI,
    {name:'Soroush Naderi',zone:'TW',age:31,fitness:100,value:'€8,2–12,5 Mio.'},
    {name:'Isidro Valle',zone:'AV',age:33,apps:'37 (12)',goals:1,assists:6,rating:7.21,fitness:87,value:'€26–36 Mio.'},
    {name:'Takashi Kobayashi',zone:'OM/ST',age:29,apps:'21 (17)',goals:16,assists:4,rating:7.38,fitness:80,value:'€158–197 Mio.'},
    {name:'Santiago Candia',zone:'TW',age:33,apps:'11 (3)',goals:0,assists:0,rating:6.75,fitness:100,value:'€0,17–1,7 Mio.'},
    {name:'Guychel Mukanya',zone:'V/FV',age:31,apps:'38 (14)',goals:1,assists:1,rating:7.03,fitness:86,value:'€34–50 Mio.'},
    {name:'Pep Flores',zone:'V/FV',age:21,apps:'2 (4)',goals:0,assists:0,rating:6.50,fitness:95,value:'€12,5–18,5 Mio.'},
    {name:'Antoni Gómez',zone:'IV/DM',age:23,apps:'0 (1)',goals:0,assists:0,fitness:100,value:'€0,325–1 Mio.'},
    {name:'Georgy Akerboom',zone:'V/FV/DM/MZ',age:28,apps:'19 (31)',goals:2,assists:1,rating:6.86,fitness:94,value:'€48–70 Mio.'},
    {name:'Hans Boeve',zone:'DM/MZ/OMZ',age:33,apps:'2 (24)',goals:0,assists:0,rating:6.53,fitness:100,value:'€0'},
    {name:'Pablo Amato',zone:'MZ/OMR/OMZ',age:29,apps:'5 (32)',goals:4,assists:7,rating:7.05,fitness:90,value:'€32–46 Mio.'},
    {name:'Petr Procházka',zone:'OM/ST',age:29,apps:'1 (15)',goals:4,assists:1,rating:7.26,fitness:100,value:'€22–32 Mio.'},
    {name:'Mattéo Schops',zone:'OMR/ST',age:31,apps:'0 (3)',goals:1,assists:0,rating:7.00,fitness:100,value:'€8,2 Mio.'},
    {name:'Alberto Castillo',zone:'TW',age:23,fitness:88,value:'€6,6–8,4 Mio.'},
    {name:'Brendan Costello',zone:'IV/DM',age:33,fitness:89,value:'€12,5–15 Mio.'},
    {name:'José Luis',zone:'DM/MZ/OMZ',age:27,apps:'33 (5)',goals:3,assists:3,rating:6.95,fitness:93,value:'€19,5–23 Mio.'},
    {name:'Milan Kresoja',zone:'MZ/OMZ',age:29,fitness:91,value:'€67–91 Mio.'},
    {name:'Timofey Yefremov',zone:'MZ/OMZ/ST',age:25,apps:'49 (1)',goals:26,assists:8,rating:7.28,fitness:null,value:'€194–260 Mio.',status:'verletzt'},
    {name:'Noah Darvich',zone:'MZ/OM',age:34,apps:'30 (20)',goals:11,assists:8,rating:7.00,fitness:100,value:'€0,009–0,09 Mio.'}
  ];

  const existing=(window.FM_CLUBS||[]).find(x=>x.id==='barcelona'||x.name==='FC Barcelona'||x.name==='Barcelona')||{};
  upsert(window.FM_CLUBS,{
    ...existing,
    id:'barcelona',name:'FC Barcelona',short:'BAR',country:'Spanien',league:'LaLiga',scope:['Club World Cup'],
    status:'partial',completion:72,season:2041,
    summary:'Klub-WM-Viertelfinalgegner 2041. Der aktuelle Kaderexport zeigt eine extrem erfahrene und produktive Mannschaft mit Lamine Yamal, Fernandes, Emmanuel Musah und einer sehr wertvollen zentralen Achse.',
    manager:existing.manager||'Nicht im Export enthalten',stadium:existing.stadium||'Nicht im Export enthalten',
    formation:'4-3-3 DM breit (aus der positionsweise ausgewählten Elf abgeleitet)',
    squadValue:'Mehrere Spieler im Bereich von €150–274 Mio.',avgAge:'29,8 (positionsweise ausgewählte Elf)',
    keyPlayers:['Lamine Yamal','Fernandes','Emmanuel Musah','Aleksandar Ilić','Ángel','Takashi Kobayashi'],
    tags:['Klub-WM 2041','Viertelfinale','sehr erfahrene Startelf','hohe individuelle Qualität','produktive Flügel','tiefer Kader'],
    meetings:[...(existing.meetings||[]),{date:'2041 · Klub-WM',venue:'neutral',result:'Viertelfinale · anstehend'}],
    checklist:{profile:true,squad:true,tactics:false,transfers:false,meetings:true,history:false},
    squadMeta:{count:squadSnapshot.length,knownValue:'Topspanne bis €274 Mio.',probableXIAverageAge:29.8,exportType:'FM-Kaderexport'},
    probableXI,
    squadSnapshot,
    scouting:{
      strengths:[
        'Die positionsweise ausgewählte Elf kommt im Export zusammen auf 68 Tore und 65 Vorlagen.',
        'Lamine Yamal liefert mit 33 Jahren weiterhin 9 Tore und 13 Vorlagen bei 7,43 Durchschnittsnote.',
        'Fernandes steht bei 24 Toren und 10 Vorlagen; Emmanuel Musah bei 15 Toren und 5 Vorlagen.',
        'Leonardo Greco liefert als Außenverteidiger 10 Vorlagen, Aleksandar Ilić aus dem defensiven Mittelfeld 7.',
        'Ángel, Ilić, Greco, Kobayashi und Yefremov werden in Wertspannen von ungefähr €158 Mio. bis €274 Mio. geführt.',
        'Von der Bank kommen mit Takashi Kobayashi 16 Tore und mit Pablo Amato 4 Tore plus 7 Vorlagen.'
      ],
      weaknesses:[
        'Der gezeigte Kern ist sehr erfahren: Die positionsweise ausgewählte Elf ist im Schnitt 29,8 Jahre alt.',
        'Mehrere Schlüsselspieler gehen mit reduzierter Athletik in die Momentaufnahme: Ilić 60 %, Ward 62 %, Yamal 63 %, Fernandes 68 %.',
        'Timofey Yefremov, mit 26 Toren und 8 Vorlagen einer der produktivsten Spieler des Kaders, ist im Export verletzt markiert.',
        'Die Innenverteidigung um Ángel und Radulović sowie große Teile des Mittelfelds sind 29 bis 30 Jahre alt und könnten gegen hohes Tempo hinter der letzten Linie verwundbar sein.',
        'Rangel ist mit 32 ein erfahrener Torwart; der Export liefert jedoch keine Attributdaten, weshalb eine gezielte Torwartschwäche nicht belegt ist.'
      ],
      plan:[
        'Tempo und Laufwege hinter Barcelonas erfahrene letzte Linie testen, statt das Spiel ausschließlich vor der Abwehr aufzubauen.',
        'Ilić und die beiden Spielmacher Pérez/Chirico im Zentrum nicht frei den Rhythmus bestimmen lassen.',
        'Yamal und Fernandes früh doppeln beziehungsweise ihre Passwege nach innen schließen; beide verbinden Abschluss und Vorbereitung.',
        'Greco auf Barcelonas linker Seite beachten: zehn Vorlagen aus der Außenverteidigerrolle machen ihn zu einer zusätzlichen Kreativquelle.',
        'Falls die Athletikwerte aus dem Export den Spieltag abbilden, das Tempo hochhalten und die zweite Halbzeit gezielt auf Barcelonas belastete Schlüsselspieler ausrichten.',
        'Yefremovs Verletzungsstatus vor Anpfiff erneut prüfen; sein möglicher Ausfall würde 26 Tore und 8 Vorlagen aus dem Kader nehmen.'
      ]
    },
    clubWorldCup2041:{stage:'Viertelfinale',opponent:'Finn Harps',status:'anstehend'},
    pressReport:{id:previewId,href:`presse.html?id=${previewId}`,label:'FIFA CLUB WORLD CUP · VIERTELFINALE',headline:'Nach Bayern wartet Barcelona'}
  });

  const current=window.FM_CLUB_WORLD_CUPS.find(x=>x.id==='club-world-cup-2041')||{};
  upsert(window.FM_CLUB_WORLD_CUPS,{
    ...current,
    id:'club-world-cup-2041',year:2041,status:'quarter-final',titleHolder:'Finn Harps',group:'H',
    knockout:{
      ...(current.knockout||{}),
      round:'Viertelfinale',previousRound:'Achtelfinale · 1:0 gegen Bayern München',
      opponent:'FC Barcelona',nextOpponent:'FC Barcelona',quarterFinalOpponent:'FC Barcelona',
      quarterFinalPath:['Barcelona'],opponentProfileId:'barcelona'
    },
    headline:'Klub-WM 2041: Nach dem 1:0 gegen Bayern München wartet im Viertelfinale der FC Barcelona.'
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-06-25';
    season.latestHeadline='Klub-WM-Viertelfinale: Nach Bayern wartet der FC Barcelona auf Finn Harps.';
    season.clubWorldCup={
      ...(season.clubWorldCup||{}),status:'Viertelfinale',lastResult:'25.06.2041 · Bayern München 0:1 Finn Harps',
      nextOpponent:'FC Barcelona',nextMatch:'Termin im bereitgestellten Export nicht enthalten',knockoutWins:1,
      opponentNote:'Barcelona kommt mit einer sehr erfahrenen Elf. Yamal steht bei 9 Toren und 13 Vorlagen, Fernandes bei 24 Toren und 10 Vorlagen; Yefremov ist mit 26 Toren und 8 Vorlagen als verletzt markiert.'
    };
    season.changes=season.changes||{notes:[]};
    const note='25.06.2041: Der Viertelfinalgegner der Klub-WM steht fest: FC Barcelona.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }

  const report={
    id:previewId,type:'Vorbericht',date:'2041-06-25',competition:'FIFA Club World Cup',fixtureDate:'Termin im Export nicht enthalten',
    home:'Finn Harps',away:'FC Barcelona',score:'–',location:'Neutraler Klub-WM-Spielort · im Export nicht enthalten',
    headline:'Nach Bayern wartet Barça: Finn Harps bekommt im Viertelfinale den nächsten Giganten',
    subheadline:'Der Titelverteidiger hat Bayern erneut aus dem Weg geräumt. Jetzt wartet Barcelona mit einer erfahrenen Achse, einem immer noch produktiven Lamine Yamal und gewaltiger individueller Qualität.',
    label:'FIFA CLUB WORLD CUP · VIERTELFINALE · VORBERICHT',
    heroStat:{label:'Barças gezeigte Elf',value:'68 Tore · 65 Vorlagen',note:'29,8 Jahre im Schnitt · auf Basis des bereitgestellten Kaderexports'},
    backlink:{href:'spiele.html',label:'← ZU DEN SPIELEN'},
    intro:'Die nächste Tür trägt ein noch größeres Namensschild. Nach dem 1:0 gegen Bayern München steht Finn Harps im Viertelfinale der Klub-WM 2041 und trifft dort auf den FC Barcelona. Der Kaderexport zeigt keinen jungen Neuaufbau, sondern eine hochklassige, extrem erfahrene Mannschaft: Die positionsweise ausgewählte Elf ist im Schnitt knapp 30 Jahre alt und vereint 68 Tore sowie 65 Vorlagen. Gleichzeitig kommen mehrere Schlüsselspieler mit auffällig niedrigen Athletikwerten in diese Momentaufnahme.',
    sections:[
      {title:'Yamal ist mit 33 immer noch der kreative Fixpunkt',text:'Lamine Yamal steht im Export bei 20 Startelfeinsätzen und 14 Einwechslungen, 9 Toren, 13 Vorlagen und einer Durchschnittsnote von 7,43. Selbst im Spätherbst seiner Karriere ist er damit einer der klaren Taktgeber dieses Barcelona.'},
      {title:'Fernandes und Musah liefern die Tore',text:'Fernandes kommt auf 24 Treffer und 10 Vorlagen in 48 Einsätzen. Emmanuel Musah steuert 15 Tore und 5 Vorlagen bei. Zusammen mit Yamal produziert die vordere Linie enorme direkte Gefahr.'},
      {title:'Die Qualität reicht bis tief auf die Bank',text:'Takashi Kobayashi hat trotz 17 Einwechslungen 16 Tore erzielt und steht bei 7,38 im Schnitt. Pablo Amato liefert 4 Tore und 7 Vorlagen. Selbst ohne die erste Elf kann Barcelona offensiv nachlegen.'},
      {title:'Yefremovs Verletzung könnte ein riesiger Faktor sein',text:'Timofey Yefremov ist im Export als verletzt markiert. Seine Saisonbilanz: 26 Tore und 8 Vorlagen bei 7,28. Sollte er tatsächlich ausfallen, verliert Barcelona den produktivsten Torschützen dieser Kaderaufnahme.'},
      {title:'Wertmonster im Zentrum und in der Defensive',text:'Ángel wird mit 224 bis 246 Millionen Euro geführt, Aleksandar Ilić mit 209 bis 274 Millionen, Leonardo Greco mit 189 bis 208 Millionen. Kobayashi liegt bei 158 bis 197 Millionen. Die individuelle Qualität ist also nicht nur auf die berühmten Namen im Angriff beschränkt.'},
      {title:'Aber die Athletikwerte öffnen ein Fenster',text:'Ilić steht in der Momentaufnahme bei 60 Prozent Athletik, James Ward bei 62, Yamal bei 63 und Fernandes bei 68. Auch Ángel, Greco und Pérez liegen nur im niedrigen 70er-Bereich. Falls diese Werte den Zustand vor dem Viertelfinale abbilden, könnte Finn Harps das Spiel über Intensität und Tempo in der zweiten Hälfte kippen.'},
      {title:'Jugend gegen Erfahrung',text:'Die gezeigte Barcelona-Elf ist im Schnitt 29,8 Jahre alt. Für eine junge, laufstarke Finn-Harps-Mannschaft ist das ein interessantes Matchup: Barça besitzt mehr individuelle Reife und enorme technische Qualität, die Harps könnten dagegen mit Dynamik, Pressing und langen intensiven Phasen antworten.'},
      {title:'Nach City und Bayern gibt es weiter keinen leichten Weg',text:'Finn Harps hat in dieser Klub-WM bereits Manchester City geschlagen und Bayern im Achtelfinale ausgeschaltet. Mit Barcelona wartet nun der nächste europäische Schwergewichtler. Eine Titelverteidigung müsste offenbar durch die Vordertür erfolgen, nicht durch einen freundlichen Turnierbaum.'}
    ],
    strengthsTitle:'WORAUF FINN HARPS ACHTEN MUSS',strengthsHeading:'Barças Qualität ist überall verteilt',
    strengths:[
      'Yamal: 9 Tore, 13 Vorlagen, 7,43 Durchschnittsnote','Fernandes: 24 Tore und 10 Vorlagen','Musah: 15 Tore und 5 Vorlagen','Kobayashi als Joker/Rotationsspieler mit 16 Toren','Greco mit 10 Vorlagen aus der Außenverteidigerposition','Mehrere Spieler mit Marktwertspannen deutlich über €150 Mio.'
    ],
    vulnerabilitiesTitle:'WO DAS FENSTER FÜR DIE HARPS LIEGT',vulnerabilitiesHeading:'Alter, Belastung und ein möglicher Top-Ausfall',
    vulnerabilities:[
      '29,8 Jahre Durchschnittsalter in der gezeigten Elf','Ilić 60 %, Ward 62 %, Yamal 63 % und Fernandes 68 % Athletik im Export','Yefremov ist mit 26 Toren und 8 Vorlagen verletzt markiert','Mehrere zentrale Spieler sind 29 bis 33 Jahre alt','Termin, Spielort und genaue taktische Attribute sind im bereitgestellten Export nicht enthalten und werden deshalb nicht erfunden'
    ],
    verdictHeading:'Ein Gigant, aber kein unantastbarer',
    verdict:'Barcelona ist auf dem Papier vermutlich der tiefere und individuell teurere Kader. Doch der Export zeigt gleichzeitig ein Team, dessen große Namen viel Erfahrung und einige Belastung mitbringen. Genau dort liegt die Harps-Chance: nicht versuchen, Barça in einem langsamen Technikduell zu schlagen, sondern das Spiel körperlich, intensiv und vertikal zu machen. Nach dem Bayern-Sieg muss Finn Harps vor dem Namen ohnehin keine Ehrfurcht mehr haben. Respekt ja. Unterordnung nein.',
    sourcesHeading:'Gegneranalyse aus dem aktuellen FM-Kaderexport',
    sourcesNote:'Spieler, Positionen, Rollen, Alter, Einsätze, Tore, Vorlagen, Durchschnittsnoten, Athletikwerte, Vertragsdaten und Wertspannen stammen aus dem vom Nutzer bereitgestellten Football-Manager-Kaderexport des FC Barcelona. Termin, Spielort, Trainer und Attributdetails sind darin nicht enthalten und werden bewusst offen gelassen.',
    sources:['FM-Kaderexport FC Barcelona · Klub-WM 2041 · bereitgestellt am 25.06.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2041-06-25-klub-wm-viertelfinale-barcelona',date:'2041-06-25',season:2041,category:'Klub-WM',accent:'blue',featured:true,
    eyebrow:'FIFA CLUB WORLD CUP · VIERTELFINALE',
    title:'Nach Bayern kommt Barça: Finn Harps vor dem nächsten Riesenduell',
    summary:'Barcelona wartet im Viertelfinale. Yamal liefert mit 33 noch 9 Tore und 13 Vorlagen, Fernandes steht bei 24 + 10; zugleich zeigt der Export bei mehreren Schlüsselspielern deutliche Belastung.',
    href:`presse.html?id=${previewId}`,
    entities:['finn-harps','barcelona','club-world-cup']
  });
})();