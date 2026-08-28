(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_IRELAND=window.FM_IRELAND||{};
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-05-23';
  const reportId='2042-05-23-finn-harps-20-spieler-world-cup';
  const nominations=[
    {player:'Torric Bruce',nation:'Ghana',group:'J',position:'V (Z)'},
    {player:'Emerson Escárcega',nation:'Mexiko',group:'F',position:'ST (Z)'},
    {player:'Daniele Di Maio',nation:'Italien',group:'G',position:'V (Z), DM'},
    {player:'Romano Maisto',nation:'Italien',group:'G',position:'FV (L), M/OM (LZ)'},
    {player:'Callum Brennan',nation:'Irland',group:'K',position:'V (R)'},
    {player:'Giacomo Papini',nation:'Irland',group:'K',position:'M (RZ), OM (R)'},
    {player:'Justin Ramsey',nation:'Irland',group:'K',position:'M (Z), ST (Z)'},
    {player:"Cormac O'Kane",nation:'Irland',group:'K',position:'DM, M/OM (Z)'},
    {player:"Jim O'Neill",nation:'Irland',group:'K',position:'DM, M/OM (Z)'},
    {player:'Billy Walker',nation:'Irland',group:'K',position:'M/OM (R)'},
    {player:'Ben Barry',nation:'Irland',group:'K',position:'M (Z), ST (Z)'},
    {player:'Kevin Kelly',nation:'Irland',group:'K',position:'V (LZ)'},
    {player:'Mareks Istrankins',nation:'Irland',group:'K',position:'V (Z)'},
    {player:'Evan Reilly',nation:'Irland',group:'K',position:'TW'},
    {player:'Daryl Frame',nation:'Schottland',group:'B',position:'DM, M/OM (Z)'},
    {player:'Dom Docherty',nation:'Schottland',group:'B',position:'M (L), OM (RL)'},
    {player:'Pol Muñoz',nation:'Spanien',group:'L',position:'M (LZ), OM (RLZ)'},
    {player:'Amir Mašić',nation:'Schweiz',group:'G',position:'DM, M (Z)'},
    {player:'Diego Fernández',nation:'Argentinien',group:'B',position:'V (R), DM, M (Z)'},
    {player:'Paulo Henrique',nation:'Brasilien',group:'K',position:'TW'}
  ];

  const byNation=nominations.reduce((acc,item)=>{acc[item.nation]=(acc[item.nation]||0)+1;return acc;},{});
  const byGroup=nominations.reduce((acc,item)=>{acc[item.group]=(acc[item.group]||0)+1;return acc;},{});
  const irelandPlayers=nominations.filter(item=>item.nation==='Irland').map(item=>item.player);

  const wc=window.FM_WORLD_CUP['2042']||{tournament:'FIFA World Cup 2042',openingDay:'2042-06-12'};
  window.FM_WORLD_CUP['2042']={
    ...wc,
    finnHarps:{
      nominationDate:date,
      participants:20,
      nations:9,
      groups:6,
      byNation,
      byGroup,
      players:nominations,
      headline:'20 Spieler von Finn Harps wurden für die Weltmeisterschaft 2042 nominiert.',
      context:'Das Champions-League-Finale gegen Manchester United ist der letzte große Klubtermin vor dem Wechsel auf die WM-Bühne.'
    }
  };

  Object.assign(window.FM_IRELAND,{
    updated:'23.05.2042',
    nextCompetition:'FIFA World Cup 2042',
    latestHeadline:'Zehn Finn-Harps-Spieler stehen in Irlands WM-Aufgebot für Gruppe K.',
    worldCup2042:{
      ...(window.FM_IRELAND.worldCup2042||{}),
      status:'Kader nominiert',
      group:'K',
      openingDay:'12.06.2042',
      finnHarpsPlayers:irelandPlayers,
      finnHarpsCount:irelandPlayers.length,
      note:'Finn Harps stellt zehn Spieler für Irlands WM-Kader. In Gruppe K warten Brasilien, China und Südafrika.'
    }
  });

  nominations.forEach(item=>upsert(window.FM_PLAYER_UPDATES,{
    id:`2042-05-23-world-cup-nomination-${item.player.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}`,
    date,player:item.player,type:'international',
    title:`WM-Nominierung für ${item.nation}`,
    detail:`${item.player} wurde für die Weltmeisterschaft 2042 nominiert und spielt mit ${item.nation} in Gruppe ${item.group}.`
  }));

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-05-23-pol-munoz-spain-world-cup-story',date,player:'Pol Muñoz',type:'milestone',
    title:'Von Englands dritter Liga in Spaniens WM-Kader',
    detail:'Pol Muñoz gehört zum spanischen WM-Aufgebot. Seine Entwicklung seit dem Wechsel aus der dritten englischen Liga zu Finn Harps ist eine der markantesten Aufstiegsgeschichten der Saison.'
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='20 Finn-Harps-Spieler wurden für die WM 2042 nominiert. Zehn davon stehen im irischen Kader. Vor dem Turnier wartet noch das Champions-League-Finale gegen Manchester United in Athen.';
    season.nextFocus={
      competition:'UEFA Champions League',stage:'Finale',opponent:'Manchester United',venue:'Olympic Athletic Center of Athens',location:'Athen, Griechenland',status:'Letzter Klub-Höhepunkt vor der WM',
      afterFinal:{competition:'FIFA World Cup 2042',openingDay:'12.06.2042',finnHarpsParticipants:20,nations:9}
    };
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='23.05.2042: 20 Spieler von Finn Harps werden für die WM 2042 nominiert. Zehn vertreten Irland, zwei Italien, zwei Schottland; Ghana, Mexiko, Spanien, Schweiz, Argentinien und Brasilien stellen je einen Harps-Spieler. Pol Muñoz schafft den Sprung aus der dritten englischen Liga über Finn Harps in Spaniens WM-Kader.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  const reports=[
    {
      id:reportId,type:'WM-Vorschau',date,competition:'FIFA World Cup 2042',fixtureDate:'Turnierstart · 12.06.2042',
      headline:'Zwanzig Harps für die Welt: Donegal schickt einen halben Kontinent zur WM',
      subheadline:'20 Spieler, neun Nationalteams, sechs Gruppen. Finn Harps reist erst zum Champions-League-Finale nach Athen und verteilt sich danach über die Weltmeisterschaft.',
      label:'FIFA WORLD CUP 2042 · NOMINIERUNGEN',
      heroStat:{label:'Finn Harps',value:'20 WM-Fahrer',note:'9 Nationen · 6 Gruppen · 10 davon für Irland'},
      backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM'},
      intro:'Aus einem irischen Klubprojekt ist eine internationale Drehscheibe geworden. Zwanzig Spieler von Finn Harps wurden für die Weltmeisterschaft 2042 nominiert. Noch steht das Champions-League-Finale gegen Manchester United zwischen Mannschaft und Turnier, danach zerfällt die Kabine für einige Wochen in neun verschiedene Nationalfarben.',
      sections:[
        {title:'Irland trägt deutlich Donegal',text:'Callum Brennan, Giacomo Papini, Justin Ramsey, Cormac O’Kane, Jim O’Neill, Billy Walker, Ben Barry, Kevin Kelly, Mareks Istrankins und Evan Reilly stehen im irischen WM-Kader. Zehn Spieler eines Klubs prägen damit die Auswahl, die in Gruppe K auf Brasilien, China und Südafrika trifft.'},
        {title:'Die Harps verteilen sich über neun Nationen',text:'Torric Bruce fährt mit Ghana, Escárcega mit Mexiko, Di Maio und Maisto mit Italien, Frame und Docherty mit Schottland. Amir Mašić vertritt die Schweiz, Diego Fernández Argentinien, Paulo Henrique Brasilien und Pol Muñoz Spanien.'},
        {title:'Pol Muñoz: der Weg, der hängen bleibt',text:'Kaum eine Nominierung erzählt die Entwicklung des Klubs besser als die von Pol Muñoz. Noch vor seinem Wechsel nach Donegal spielte er in der dritten englischen Liga. Nun steht er im spanischen WM-Kader. Für Finn Harps ist das mehr als ein persönlicher Erfolg: Es ist ein sichtbarer Beleg dafür, dass der Klub Spieler nicht nur einkauft, sondern Karrieren auf ein neues Niveau hebt.'},
        {title:'Eine kuriose Gruppe K',text:'Elf Harps-Spieler landen allein in Gruppe K: zehn für Irland und Paulo Henrique für Brasilien. Damit kann ein Teil der Finn-Harps-Kabine bei der WM plötzlich auf der anderen Seite des Tunnels stehen.'},
        {title:'Erst Athen, dann die Welt',text:'Der Übergang könnte kaum größer sein. Finn Harps spielt noch um den dritten Champions-League-Titel dieser Mannschaft, unmittelbar danach beginnt für zwanzig Spieler die Vorbereitung auf die WM. Für den Klub ist das ein Prestigegewinn, für die Belastungssteuerung aber auch eine Herausforderung.'}
      ],
      verdictHeading:'Vom Provinzklub zur globalen Spielerquelle',
      verdict:'Zwanzig WM-Fahrer sind kein hübsches Nebendetail mehr, sondern ein Strukturbeweis. Finn Harps ist nicht nur europäischer Spitzenklub, sondern inzwischen ein Verein, dessen Kader tief in die Nationalmannschaften der Welt hineinreicht.',
      nominations
    },
    {
      id:'2042-05-23-world-cup-fans-donegal',type:'Fanperspektive',date,competition:'FIFA World Cup 2042',fixtureDate:'Vor dem Turnier',
      headline:'Stolz, Sorge und ein bisschen Wahnsinn: Donegal zählt zwanzig WM-Fahrer',
      subheadline:'Die Fans feiern die Nominierungen, wissen aber auch: Vor der WM wartet noch das größte Klubspiel des Jahres.',
      label:'FANS · DONEGAL · WM 2042',
      heroStat:{label:'Fan-Gespräch',value:'20 Namen',note:'und davor noch Athen'},
      backlink:{href:'presse.html',label:'← ZUR PRESSE'},
      intro:'In Donegal ist die Reaktion eine Mischung aus Stolz und ungläubigem Kopfschütteln. Zwanzig Nationalspieler aus einem Kader wären für die Harps früher Stoff für eine absurde Zukunftsvision gewesen. 2042 ist es eine offizielle Nominierungsliste.',
      sections:[
        {title:'„Zehn von uns für Irland“',text:'Besonders die irischen Nominierungen fühlen sich für viele Fans wie die endgültige Verschmelzung von Klub- und Nationalteam an. Die Harps stellen nicht nur einzelne Stars, sondern einen ganzen Kern der Auswahl.'},
        {title:'Pol bekommt besonders viel Liebe',text:'Bei Muñoz reagieren die Fans fast persönlicher als bei manchem etablierten Star. Der Sprung aus Englands dritter Liga in den spanischen WM-Kader passt perfekt zu dem Selbstbild des Vereins: Hier sollen Karrieren nicht verwaltet, sondern beschleunigt werden.'},
        {title:'Der kleine Haken',text:'Die Freude hat eine nervöse Rückseite. Erst muss Manchester United in Athen gespielt werden. Verletzungen wie die von Escárcega haben bereits gezeigt, wie dünn die Linie zwischen Traumfinale und WM-Sorge sein kann.'}
      ],
      fanVoices:[
        '„Zwanzig? Früher hätten wir uns über zwei Nationalspieler die Köpfe eingerannt.“',
        '„Pol von League One zu Spanien. Genau deshalb liebe ich diesen Klub.“',
        '„Bitte erst den Henkelpott holen und dann alle gesund zur WM schicken.“',
        '„Gruppe K wird seltsam. Zehn Harps in Grün und Paulo auf der anderen Seite.“'
      ],
      note:'Die Fan-Stimmen sind redaktionell simulierte Reaktionen innerhalb der FM-Save-Welt.'
    },
    {
      id:'2042-05-23-world-cup-europe-world-media',type:'Medienperspektive',date,competition:'FIFA World Cup 2042',fixtureDate:'Vor dem Turnier',
      headline:'Europa schaut zweimal hin: Finn Harps wird vor der WM zum globalen Knotenpunkt',
      subheadline:'Die Nominierung von 20 Spielern verändert den Blick auf den Klub. Aus dem irischen Champions-League-Phänomen ist ein internationaler Talent- und Leistungshub geworden.',
      label:'EUROPA & WELT · MEDIENBLICK',
      heroStat:{label:'Reichweite',value:'9 Nationalteams',note:'von Ghana bis Brasilien'},
      backlink:{href:'presse.html',label:'← ZUR PRESSE'},
      intro:'Der internationale Blick auf Finn Harps war lange an die Champions League gebunden. Diese Nominierungsliste erweitert das Bild: Der Klub exportiert Leistung inzwischen in neun Nationalmannschaften und sechs WM-Gruppen.',
      sections:[
        {title:'Irland',text:'Die nationale Debatte dreht sich fast zwangsläufig um den Einfluss der Harps. Zehn nominierte Spieler bedeuten, dass Form, Rollen und Automatismen aus Donegal direkt in die Nationalmannschaft wandern.'},
        {title:'Spanien',text:'Pol Muñoz ist die aufmerksamkeitsstärkste Einzelgeschichte. Ein Spieler aus der dritten englischen Liga, der über Finn Harps in Spaniens WM-Kader gelangt, liefert eine einfache, starke Erzählung über Entwicklung und Scouting.'},
        {title:'England und Schottland',text:'Der Blick ist doppelt interessant: Finn Harps trifft zunächst Manchester United im Champions-League-Finale, gleichzeitig fahren Frame und Docherty für Gastgeber Schottland zur WM.'},
        {title:'Global',text:'Mit Brasilien, Argentinien, Mexiko, Ghana und mehreren europäischen Nationen ist der Klub über viele Fußballkulturen verteilt. Das macht Finn Harps bei dieser WM zu einem ungewöhnlich oft auftauchenden Vereinsnamen.'}
      ],
      verdictHeading:'Die Harps sind kein lokales Wunder mehr',
      verdict:'Ein europäischer Spitzenlauf kann eine Generation tragen. Zwanzig WM-Nominierungen zeigen etwas Breiteres: Kaderqualität, internationale Rekrutierung und Entwicklung haben einen Punkt erreicht, an dem Finn Harps weltweit Spuren hinterlässt.'
    },
    {
      id:'2042-05-23-pol-munoz-world-cup-feature',type:'Spielerporträt',date,competition:'FIFA World Cup 2042',fixtureDate:'Vor dem Turnier',
      headline:'Pol Muñoz: Von Englands dritter Liga zur spanischen WM',
      subheadline:'Der Wechsel nach Donegal war kein Seitenschritt, sondern ein Katapult. Jetzt steht Muñoz im Aufgebot Spaniens für Gruppe L.',
      label:'SPIELERPORTRÄT · POL MUÑOZ',
      heroStat:{label:'Pol Muñoz',value:'Spanien · WM 2042',note:'Gruppe L'},
      backlink:{href:'spieler.html?id=pol-munoz',label:'← ZUM SPIELER'},
      intro:'Es gibt Transfers, die erst im Rückblick ihre ganze Bedeutung zeigen. Pol Muñoz kam aus der dritten englischen Liga zu Finn Harps. Wenige Monate später reist er mit Spanien zur Weltmeisterschaft. Zwischen diesen beiden Punkten liegt eine Entwicklung, die selbst für die Harps-Dynastie besonders wirkt.',
      sections:[
        {title:'Kein glamouröser Ausgangspunkt',text:'Muñoz kam nicht als fertiger Weltstar. Sein Ausgangspunkt lag tief unter dem Niveau, auf dem Finn Harps inzwischen in Europa spielt. Gerade deshalb wirkt der Weg in den spanischen WM-Kader so bemerkenswert.'},
        {title:'Die Harps als Beschleuniger',text:'In Donegal bekam er ein Umfeld mit Champions-League-Niveau, modernen Strukturen und täglicher Konkurrenz durch internationale Spitzenkräfte. Aus einem interessanten Transfer wurde ein Spieler, den Spanien für die WM nominiert.'},
        {title:'Mehr als eine nette Randgeschichte',text:'Für Finn Harps ist Muñoz ein Beleg für die eigene Transferidee: Nicht jeder Zugang muss bereits Weltklasse sein. Entscheidend ist, ob der Klub den nächsten Entwicklungsschritt ermöglichen kann.'}
      ],
      verdictHeading:'Eine Karrierekurve, auf die der Klub stolz sein darf',
      verdict:'Der Name Pol Muñoz steht vor dieser WM vielleicht stärker als jeder andere für das, was Finn Harps 2042 geworden ist: ein Ort, an dem Spieler größer herauskommen können, als sie hineingegangen sind.'
    }
  ];
  reports.forEach(report=>upsert(window.FM_PRESS_REPORTS,report));

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-05-23-finn-harps-20-world-cup-players',date,season:2042,category:'World Cup',accent:'green',featured:true,
    eyebrow:'FIFA WORLD CUP 2042 · 20 NOMINIERUNGEN',
    title:'Zwanzig Harps für die Welt',
    summary:'20 Spieler von Finn Harps fahren zur WM 2042. Zehn stehen im irischen Kader, insgesamt verteilen sich die Harps auf neun Nationen. Besonders Pol Muñoz schreibt eine außergewöhnliche Geschichte: von Englands dritter Liga in Spaniens WM-Aufgebot.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','world-cup-2042','ireland','pol-munoz','justin-ramsey','ben-barry','emerson-escarcega']
  });
})();