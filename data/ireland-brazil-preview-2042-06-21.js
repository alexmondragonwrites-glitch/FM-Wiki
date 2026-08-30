(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_IRELAND=window.FM_IRELAND||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-06-21';
  const reportId='2042-06-21-irland-brasilien-wm-scouting';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  const likelyXI=[
    {player:'Paulo Henrique',position:'TW',club:'Finn Harps',age:28,heightCm:188,value:'€26–29 Mio.',note:'Harps-Keeper und damit der besondere Fixpunkt des Duells'},
    {player:'Rafael',position:'V/FV (L)',club:'Wolves',age:29,heightCm:173,value:'€137–194 Mio.'},
    {player:'Darlan',position:'V (Z)',club:'Nice',age:33,heightCm:187,value:'€8,2–11,5 Mio.'},
    {player:'Riquelme',position:'V (Z)',club:'Inter',age:29,heightCm:185,value:'€138–159 Mio.'},
    {player:'Hélton',position:'V/FV (R)',club:'Tottenham',age:30,heightCm:179,value:'€127–179 Mio.'},
    {player:'Heriberto',position:'FV (R), DM, M (Z)',club:'Atlético de Madrid',age:27,heightCm:182,value:'€119–168 Mio.'},
    {player:'Amauri Pereira Lima',position:'V (Z), DM, M (Z)',club:'Inter',age:20,heightCm:181,value:'€120–147 Mio.',note:'Im Scoutbericht zuletzt außer Form'},
    {player:'Flavio Henrique',position:'M/OM (RL)',club:'Liverpool',age:31,heightCm:173,value:'nicht zum Verkauf'},
    {player:'Emerson',position:'M (RZ), OM (Z)',club:'Caen',age:27,heightCm:182,value:'€178–196 Mio.'},
    {player:'Nathan Ribeiro',position:'OM (R), ST (Z)',club:'Manchester United',age:25,heightCm:180,value:'€23–33 Mio.'},
    {player:'Yan Cavalcanti',position:'ST (Z)',club:'Newcastle',age:34,heightCm:180,value:'€57–81 Mio.'}
  ];

  const comparison={
    ireland:{averageAge:27.15,averageHeightCm:183,averageWeightKg:77,averageCaps:46,averageYouthCaps:8,averageWeeklyWage:'€69.000',averageTransferValue:'€31 Mio.',unavailable:0},
    brazil:{averageAge:29.08,averageHeightCm:182,averageWeightKg:77,averageCaps:39,averageYouthCaps:1,averageWeeklyWage:'€250.000',averageTransferValue:'€58,11 Mio.',unavailable:0}
  };

  const depth=[
    {player:'João',club:'Bayer Leverkusen',position:'V/FV/M/OM (R)',age:29,value:'€106–150 Mio.'},
    {player:'Luiz Carlos',club:'Wolves',position:'V (Z)',age:27,value:'€61–92 Mio.'},
    {player:'Caetano',club:'Wolfsburg',position:'V (Z), DM, M (Z)',age:30,value:'€136–192 Mio.'},
    {player:'Felipe',club:'Cagliari',position:'V/FV/OM (L)',age:23,value:'€83–120 Mio.'},
    {player:'Dudu',club:'Tottenham',position:'V (Z), DM, M/OM (Z)',age:25,value:'€60–91 Mio.'},
    {player:'Vinícius Pimenta',club:'Tottenham',position:'M (RZ), OM (Z)',age:33,value:'€53–78 Mio.',worldCup:{apps:'1 (1)',goals:1,assists:3,rating:8.75}},
    {player:'Fernando',club:'Liverpool',position:'OM (LZ), ST (Z)',age:32,heightCm:195,value:'nicht zum Verkauf',worldCup:{apps:1,goals:3,rating:9.40}}
  ];

  const scouting={
    likelyShape:'4-2-3-1 mit zwei tiefen/zentralen Mittelfeldspielern und drei offensiven Mittelfeldspielern hinter der Spitze; der aktuelle Stil wird als Tiki-Taka geführt.',
    strengths:[
      'Nervenstärke, Antizipation, Deckung, Passspiel, Stellungsspiel und Technik werden im Scoutbericht ausdrücklich hervorgehoben.',
      'Brasilien besitzt starke Entscheidungsfindung, Ballannahme, Teamwork und Bewegung ohne Ball.',
      'Tackling und defensive Grundqualität sind gut, dazu kommt hohe individuelle Qualität in praktisch jeder Linie.',
      'Paulo Henrique wird als starke Option im Tor geführt; hohe Bälle, Strafraumkontrolle, Abschläge und Abwürfe gehören zu den positiven Torwartbereichen.',
      'Die Kadertiefe ist außergewöhnlich: Spieler mit dreistelligen Millionenwerten sitzen außerhalb der gezeigten besten Elf.'
    ],
    weaknesses:[
      'Das reine Halten wird im Torwartprofil nicht als absolute Stärke des Kaders geführt.',
      'Beim Herauslaufen der Torhüter sieht der Scoutbericht keine besondere Stärke.',
      'Aggressivität ist ein Problemfeld; mehreren Spielern fehlt die nötige Härte, um Gegner konsequent zu stoppen.',
      'Standards sind ein klarer Angriffspunkt: 6 von 15 Gegentoren in den letzten 19 Spielen fielen nach Standardsituationen.',
      'Amauri Pereira Lima wird als außer Form markiert und lag zuletzt bei etwa 6,58 im Schnitt über fünf Spiele.'
    ],
    tacticalKeysForIreland:[
      'Brasiliens Tiki-Taka nicht in einen gemütlichen Rhythmus kommen lassen. Die erste Pressingwelle muss Passwege schließen, nicht nur ballführende Spieler jagen.',
      'Standards maximal ernst nehmen: Sechs der letzten 15 Gegentore nach Standards sind die klarste statistische Schwachstelle.',
      'Nach Ballgewinnen schnell hinter die hoch positionierten Außenverteidiger kommen. Die individuelle Klasse ist enorm, aber Irland kann Tempo und Direktheit gegen die Struktur stellen.',
      'Amauri Pereira Lima gezielt unter Druck setzen, falls er startet. Seine jüngste Form ist der sichtbarste schwächere Punkt in einer ansonsten elitären Elf.',
      'Paulo Henrique kennt die Harps-Spieler, aber umgekehrt kennen Barry, Ramsey, O’Kane und Co. auch seine Gewohnheiten. Das Keeper-Duell ist taktisch ungewöhnlich vertraut.'
    ]
  };

  wc.preIrelandBrazil={
    date,
    fixture:'Irland – Brasilien',
    group:'K',
    context:'Irland hat nach Siegen gegen China und Südafrika bereits sechs Punkte und die K.-o.-Runde sicher. Der Scout-Snapshot vom 21.06. führt Brasilien auf Platz zwei der Gruppe. Das direkte Duell ist damit vor allem ein Härtetest und ein möglicher Kampf um den Gruppensieg.',
    opponentScout:{
      name:'Brasilien',comparison,likelyBestXI:likelyXI,depth,scouting,
      harpsConnection:{player:'Paulo Henrique',role:'Brasiliens Torhüter und Stammtorwart von Finn Harps',note:'Das Duell bringt eine seltene Situation: Irlands Harps-Offensive trifft auf ihren eigenen Klubkeeper.'},
      standoutDepth:[
        {player:'Fernando',club:'Liverpool',note:'195 cm, im Kaderexport mit drei WM-Toren und 9,40 nach einem Einsatz geführt.'},
        {player:'Vinícius Pimenta',club:'Tottenham',note:'Im Kaderexport mit einem Tor, drei Vorlagen und 8,75 aus 1 (1) Einsätzen.'},
        {player:'Emerson',club:'Caen',value:'€178–196 Mio.'},
        {player:'Rafael',club:'Wolves',value:'€137–194 Mio.'}
      ]
    }
  };

  Object.assign(window.FM_IRELAND,{
    updated:'21.06.2042',competition:'FIFA World Cup 2042',
    latestHeadline:'Nach sechs Punkten aus zwei Spielen wartet Brasilien: Irland ist bereits weiter, doch jetzt kommt der größte Gruppentest.',
    nextFocus:{competition:'FIFA World Cup 2042',stage:'Gruppenphase · Gruppe K · letztes Gruppenspiel',opponent:'Brasilien',date:'im aktuellen Material nicht eingeblendet'}
  });

  const report={
    id:reportId,type:'WM-Vorschau / Scouting',date,competition:'FIFA World Cup 2042',fixtureDate:'Irland – Brasilien · Gruppe K',
    headline:'Der große Härtetest: Irland trifft auf Brasilien – und auf den eigenen Torwart',
    subheadline:'Brasilien bringt den teureren Kader, enorme technische Tiefe und ein Tiki-Taka-Profil. Irland kommt mit sechs Punkten, 5:0 Toren und der vielleicht kuriosesten Personalnote des Turniers: Paulo Henrique steht auf der anderen Seite.',
    label:'FIFA WORLD CUP 2042 · IRLAND – BRASILIEN · SCOUTING',
    heroStat:{label:'KADERVERGLEICH',value:'€31 MIO. vs. €58,11 MIO.',note:'durchschnittlicher Transferwert · Irland vs. Brasilien'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM / WM'},
    intro:'Irland hat China und Südafrika geschlagen und die K.-o.-Runde bereits sicher. Brasilien ist trotzdem ein anderer Planet als die ersten beiden Gegner. Der Scoutbericht zeigt einen technisch extrem sauberen, tief besetzten Kader. Und mitten darin steht Paulo Henrique: Der Stammtorwart von Finn Harps könnte im grün-gelben Trikot gegen genau jene Spieler antreten, mit denen er sonst Woche für Woche trainiert.',
    sections:[
      {title:'Der Vergleich: Brasilien kostet fast doppelt so viel',text:'Irland liegt bei rund 31 Mio. Euro durchschnittlichem Transferwert, Brasilien bei 58,11 Mio. Euro. Noch drastischer ist das Gehaltsniveau: etwa 69.000 Euro pro Woche bei Irland gegenüber 250.000 Euro bei Brasilien. Interessant ist aber, dass Irland im Schnitt sogar mehr A-Länderspiele mitbringt: 46 zu 39.'},
      {title:'Eine Elf voller europäischer Schwergewichte',text:'Die gezeigte beste Elf verteilt sich auf Klubs wie Wolves, Inter, Tottenham, Liverpool, Atlético Madrid, Manchester United, Newcastle und Caen. Rafael, Riquelme, Hélton, Heriberto, Amauri Pereira Lima und Emerson liegen jeweils in oder nahe dreistelligen Millionen-Marktwertregionen.'},
      {title:'Und die Bank ist beinahe noch absurder',text:'Der Kaderexport zeigt João von Leverkusen, Caetano von Wolfsburg, Dudu von Tottenham und Felipe von Cagliari als weitere hoch bewertete Optionen. Fernando von Liverpool wird nach einem Einsatz mit drei Toren und 9,40 geführt; Vinícius Pimenta von Tottenham kommt im Export auf ein Tor, drei Vorlagen und 8,75. Brasilien kann also selbst bei Rotation Weltklasse nachlegen.'},
      {title:'Paulo Henrique gegen seine eigene Kabine',text:'Der ungewöhnlichste Teil des Spiels ist der Torwart. Paulo Henrique spielt für Brasilien, trainiert aber bei Finn Harps täglich mit Barry, Ramsey, O’Kane, Papini und den übrigen irischen Harps-Akteuren. Er kennt ihre Abschlüsse und Laufwege. Sie kennen dafür seine Bewegungen, sein Timing und seine Vorlieben. Kaum ein WM-Duell kann taktisch vertrauter und gleichzeitig fremder sein.'},
      {title:'Brasiliens Stärke ist die technische Sauberkeit',text:'Nervenstärke, Antizipation, Deckung, Passen, Stellungsspiel, Technik, Entscheidungen und Ballannahme werden im Scoutbericht als Stärken geführt. Dazu kommen Teamwork, Bewegung ohne Ball und eine starke defensive Basis. Wer Brasilien den Rhythmus schenkt, kann sehr lange dem Ball hinterherlaufen.'},
      {title:'Der sichtbarste Riss: Standards',text:'Sechs von Brasiliens letzten 15 Gegentoren in 19 Spielen entstanden nach Standardsituationen. Das ist die klarste statistische Einladung. Irland sollte jede Ecke und jeden Freistoß behandeln, als wäre er eine echte Torchance.'},
      {title:'Wo Irland sonst ansetzen kann',text:'Amauri Pereira Lima wird im Scoutbericht als außer Form markiert. Außerdem zählen Aggressivität und bestimmte Torwartbereiche nicht zu den hervorgehobenen Stärken. Irland sollte Brasilien nicht in offenen technischen Schlagabtausch zwingen, sondern Passwege stressen, zweite Bälle gewinnen und nach Ballverlusten der Brasilianer möglichst schnell vertikal werden.'}
    ],
    verdictHeading:'Irland muss Brasilien nicht fürchten – aber anders behandeln als China und Südafrika',
    verdict:'Mit sechs Punkten ist der Druck auf Irland gering. Genau das macht das Spiel wertvoll. Gegen einen Kader dieser Qualität kann Ryan Flannigan testen, ob sein Gegenpressing und seine jungen Schlüsselspieler auch gegen die technisch sauberste Mannschaft der Gruppe funktionieren. Und falls Ben Barry wieder trifft, muss er dafür ausgerechnet Paulo Henrique überwinden.',
    comparison,likelyXI,depth,scouting,
    sources:['FM-Scoutbericht Brasilien · 21.06.2042','FM-Kadervergleich Irland – Brasilien · 21.06.2042','FM-Kaderexport Brasilien · 21.06.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-06-21-ireland-brazil-preview',date,type:'world-cup',
    title:'Brasilien wartet: Irland trifft auf Weltklasse – und auf Paulo Henrique',
    text:'Irland ist bereits sicher weiter. Der letzte große Gruppentest führt gegen einen Brasilien-Kader mit rund 58,11 Mio. Euro durchschnittlichem Transferwert und Harps-Keeper Paulo Henrique im Tor.',
    href:'presse.html?id=2042-06-21-irland-brasilien-wm-scouting'
  });
})();