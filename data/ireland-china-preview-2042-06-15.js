(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_IRELAND=window.FM_IRELAND||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-06-15';
  const reportId='2042-06-15-irland-china-wm-vorbericht';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const chinaSquad=[
    {player:'Ye Xiaodong',position:'TW',club:'Bordeaux',age:33,heightCm:192,value:'€6,2–7,6 Mio.'},
    {player:'Haiqing Yu',position:'V (R)',club:'Crvena zvezda',age:28,heightCm:177,value:'€0,85–9,4 Mio.'},
    {player:'Luo Mingyu',position:'V (RZ)',club:'Suwon Bluewings',age:26,heightCm:182,value:'€0,65–1,4 Mio.'},
    {player:'Yan Zheng',position:'V (RZ)',club:'SpVgg 07 Elversberg',age:29,heightCm:177,value:'€0,11–1,1 Mio.'},
    {player:'Lu Yang',position:'V (LZ)',club:'sc Heerenveen',age:32,heightCm:182,value:'€4,6–7 Mio.'},
    {player:'Li Feng',position:'DM, M/OM (Z)',club:'Qatar SC',age:32,heightCm:176,value:'€0,425–4,2 Mio.'},
    {player:'Zhi Binbin',position:'DM, M (LZ)',club:'AZ',age:23,heightCm:170,value:'€37–44 Mio.'},
    {player:'Luo Xiao',position:'OM (RL), ST (Z)',club:'Albirex Niigata',age:25,heightCm:181,value:'€0,275–2,8 Mio.'},
    {player:'Zhao Kun',position:'OM (Z)',club:'Shanghai Port',age:31,heightCm:173,value:'unbekannt'},
    {player:'Jin Bin',position:'M/OM (L), ST (Z)',club:'Shanghai Port',age:29,heightCm:172,value:'€18,5–28 Mio.'},
    {player:'Han Xu',position:'ST (Z)',club:'Shanghai Port',age:33,heightCm:195,value:'€0,25–2,5 Mio.'}
  ];

  const chinaBenchNotes=[
    {player:'Li Hao',position:'V/M (Z)',club:'Atalanta',age:22,value:'€0,475–4,7 Mio.'},
    {player:'Yuxi Zhao',position:'DM, M (Z)',club:'Levante',age:29,value:'€7,8–11,5 Mio.'},
    {player:'Zhang Yi',position:'OM (L), ST (Z)',club:'Shanghai Port',age:28,value:'€18,5–23 Mio.'},
    {player:'Fan Han',position:'ST (Z)',club:'Lecce',age:18,value:'unbekannt'}
  ];

  const comparison={
    ireland:{averageAge:27.15,averageHeightCm:183,averageWeightKg:77,averageCaps:45,averageYouthCaps:8,averageWeeklyWage:'€70.000',averageTransferValue:'€30,5 Mio.',unavailable:0},
    china:{averageAge:27.58,averageHeightCm:179,averageWeightKg:74,averageCaps:40,averageYouthCaps:0,averageWeeklyWage:'€18.000',averageTransferValue:'€6 Mio.',unavailable:0}
  };

  const scouting={
    likelyShape:'4-3-3 DM breit; 4-2-3-1 DM breit wurde ebenfalls häufig genutzt',
    strengths:[
      'China hat in den letzten 20 Spielen einen großen Teil seiner Vorlagen aus dem Strafraum produziert und sucht dort kreative Lösungen.',
      'Kurze Pässe gehören zu den auffälligeren Assist-Mustern.',
      'Torwart Ye Xiaodong wird im Scoutbericht positiv hervorgehoben.',
      'Die Grundfitness des Kaders gilt als Stärke.',
      'Zhi Binbin ist der formstärkste auffällige Spieler und kam zuletzt auf 7,44 im Schnitt über fünf Spiele.'
    ],
    weaknesses:[
      'Abschluss und Chancenverwertung werden nicht als Stärke bewertet.',
      'Das Passspiel gilt als inkonstant.',
      'Kraft, Sprunghöhe und Balance werden als Schwachpunkte genannt.',
      'Stellungsspiel, Antizipation, Konzentration und Deckung werfen im Scoutbericht Fragezeichen auf.',
      'Freistöße und Elfmeter gehören nicht zu den ausgewiesenen Stärken.',
      'Li Hao war zuletzt außer Form und kam in seinen letzten fünf Spielen auf 6,34 im Schnitt.'
    ],
    tacticalKeysForIreland:[
      'Früh und aggressiv pressen, weil Chinas Passspiel unter Druck nicht als stabil gilt.',
      'Die physische Überlegenheit nutzen: Irland ist im Kadervergleich im Schnitt vier Zentimeter größer und drei Kilogramm schwerer.',
      'Standards, zweite Bälle und Läufe hinter die letzte Linie können Chinas Schwächen bei Sprunghöhe, Stellungsspiel und Konzentration testen.',
      'Zhi Binbin nicht frei zwischen den Linien spielen lassen; er ist der deutlich wertvollste und formstärkste Spieler des Gegners.',
      'Geduldig bleiben: China hat mit Ye Xiaodong einen erfahrenen Torwart und mehrere Spieler mit Auslandserfahrung.'
    ]
  };

  wc.preIrelandChina=Object.assign({},wc.preIrelandChina||{}, {
    date,
    kickoff:'17:30',
    fixture:'China – Irland',
    group:'K',
    opponentScout:{
      name:'China',
      comparison,
      likelyBestXI:chinaSquad,
      notableBench:chinaBenchNotes,
      scouting,
      overseasPlayersInExport:15,
      squadExportSize:25,
      standout:{player:'Zhi Binbin',club:'AZ',age:23,value:'€37–44 Mio.',form:'7,44 über die letzten fünf Spiele'},
      note:'Der Export zeigt eine Mannschaft mit zahlreichen Legionären in Europa und Asien. China ist klarer Außenseiter, aber kein reiner Binnenliga-Kader.'
    }
  });

  Object.assign(window.FM_IRELAND,{
    updated:'15.06.2042',
    latestHeadline:'WM-Auftakt gegen China: Irland geht als Favorit hinein, darf Chinas Auslandskern aber nicht unterschätzen.',
    nextFocus:{competition:'FIFA World Cup 2042',stage:'Gruppenphase · Gruppe K',opponent:'China',date:'15.06.2042',kickoff:'17:30'}
  });

  const report={
    id:reportId,
    type:'WM-Vorschau',
    date,
    competition:'FIFA World Cup 2042',
    fixtureDate:'China – Irland · Gruppe K · 15.06.2042, 17:30',
    headline:'Favorit mit Auftrag: Irland darf China nicht ins Kombinationsspiel kommen lassen',
    subheadline:'Der Kadervergleich spricht deutlich für Irland, doch China bringt einen international verstreuten Kern, einen formstarken Zhi Binbin und mehrere klare Muster im kurzen Kombinationsspiel mit.',
    label:'FIFA WORLD CUP 2042 · CHINA – IRLAND · VORBERICHT',
    heroStat:{label:'KADERVERGLEICH',value:'€30,5 MIO. vs. €6 MIO.',note:'Durchschnittlicher Transferwert pro Spieler zugunsten Irlands'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM / WM'},
    intro:'Nach Brasiliens 3:3 gegen Südafrika liegt für Irland sofort eine Chance auf dem Tisch: Ein Sieg im ersten Gruppenspiel würde drei Punkte und die frühe Tabellenführung bringen. Der Gegner ist auf dem Papier klar schwächer, aber der China-Kader ist internationaler, als der Name der heimischen Liga vermuten lässt.',
    sections:[
      {title:'Der Vergleich ist deutlich, aber nicht grotesk',text:'Irland ist im Schnitt minimal jünger (27,15 zu 27,58 Jahre), größer (183 zu 179 cm), schwerer (77 zu 74 kg), international erfahrener (45 zu 40 A-Länderspiele pro Spieler) und wirtschaftlich in einer anderen Liga. Der durchschnittliche Transferwert liegt bei 30,5 Mio. Euro gegenüber 6 Mio. Euro, das durchschnittliche Wochengehalt bei 70.000 gegenüber 18.000 Euro. Beide Teams gehen ohne gemeldeten Ausfall in die Partie.'},
      {title:'15 Legionäre: China ist kein reiner Binnenliga-Kader',text:'Im 25 Spieler umfassenden Export stehen 15 Akteure bei Klubs außerhalb Chinas unter Vertrag. Ye Xiaodong spielt in Bordeaux, Haiqing Yu bei Crvena zvezda, Lu Yang in Heerenveen, Zhi Binbin bei AZ, Li Hao bei Atalanta und Yuxi Zhao bei Levante. Dazu kommen Stationen in Deutschland, Südkorea, Japan, Katar, Saudi-Arabien, Schweden und Italien. Das nimmt dem Gegner viel von dem vermeintlichen Exotenstatus.'},
      {title:'Zhi Binbin ist der Spieler, den Irland kontrollieren muss',text:'Der 23-jährige Zhi Binbin von AZ ist mit einem geschätzten Wert von 37 bis 44 Mio. Euro der auffälligste Einzelspieler im Kader und laut Scoutbericht zugleich Chinas formstärkster Akteur mit 7,44 im Schnitt über die letzten fünf Spiele. Er kann defensiv und zentral im Mittelfeld spielen und ist der naheliegende Fixpunkt, wenn China unter Druck Ruhe am Ball sucht.'},
      {title:'Chinas Muster: kurze Pässe und Kreativität im Strafraum',text:'Der Scoutbericht hebt hervor, dass viele chinesische Vorlagen der letzten 20 Spiele innerhalb des Strafraums entstanden und kurze Pässe ein wiederkehrendes Muster sind. China will also nicht nur lange Bälle schlagen, sondern Kombinationen bis in gefährliche Zonen tragen. Genau dort muss Irlands Gegenpressing den Gegner vom Rhythmus trennen.'},
      {title:'Wo Irland ansetzen kann',text:'Abschluss, Passkonstanz, Kraft, Sprunghöhe, Balance sowie mehrere defensive Mentalattribute werden als Schwachpunkte geführt. Das passt zu Irlands Profil: körperlich Druck erzeugen, zweite Bälle attackieren, Standards ernst nehmen und Chinas Aufbau früh stressen. Die vier Zentimeter Größenvorteil im Durchschnitt sind kein Selbstzweck, können bei ruhenden Bällen aber sehr konkret werden.'},
      {title:'Nicht überheblich werden',text:'China verfügt mit Ye Xiaodong über einen erfahrenen Torwart und mit Jin Bin, Zhao Kun und mehreren Shanghai-Port-Spielern über eingespielte Achsen. Ein Gegner mit 15 Legionären und einem AZ-Spieler im Bereich von 40 Mio. Euro ist kein Team, das man nur aufgrund des Namens wegmoderiert. Irland ist Favorit, muss den Status aber mit Tempo und Konsequenz bestätigen.'}
    ],
    verdictHeading:'Der Plan ist klar: Dominieren, ohne China leben zu lassen',
    verdict:'Irland hat mehr individuelle Qualität, mehr Physis und deutlich mehr Marktwert im Kader. Die Gefahr liegt weniger in einem offenen Schlagabtausch als darin, China über kurze Pässe und einen freien Zhi Binbin Sicherheit finden zu lassen. Wenn Irlands Gegenpressing früh greift und Standards sauber ausgespielt werden, sollte der Qualitätsunterschied sichtbar werden. Nach dem 3:3 zwischen Brasilien und Südafrika wäre alles andere als ein Sieg eine verpasste Einladung.',
    comparison,
    chinaSquad,
    scouting,
    sources:['FM-China-Scoutbericht · 15.06.2042','FM-Kaderexport China · 15.06.2042','FM-Kadervergleich China – Irland · 15.06.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-06-15-ireland-china-preview',date,season:2042,category:'World Cup',accent:'green',featured:true,
    eyebrow:'FIFA WORLD CUP 2042 · CHINA – IRLAND',
    title:'Irland vor China: Favorit, aber mit klarem taktischem Auftrag',
    summary:'Irland besitzt klare Vorteile bei Marktwert, Physis und Erfahrung. China bringt jedoch 15 Legionäre, einen formstarken Zhi Binbin und ein gefährliches Kurzpassmuster mit.',
    href:`presse.html?id=${reportId}`,
    entities:['ireland','china','world-cup-2042','zhi-binbin']
  });
})();