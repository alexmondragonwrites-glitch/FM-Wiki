(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-07-13';
  const wc=window.FM_WORLD_CUP['2042']||(window.FM_WORLD_CUP['2042']={tournament:'FIFA World Cup 2042'});

  wc.status='K.-o.-Phase · Finale';
  wc.updated=date;
  wc.finalists=['Mexiko','Irland'];
  wc.final=Object.assign({},wc.final||{}, {stage:'Finale',home:'Mexiko',away:'Irland',status:'angesetzt'});

  wc.finalPreview={
    date,
    matchup:'Mexiko – Irland',
    headline:'Das Finale, das niemand vorhergesagt hat – und das sich beide verdient haben',
    framing:'Zwei Mannschaften, die vor dem Turnier kaum jemand gemeinsam im Endspiel erwartet hätte, treffen nach außergewöhnlichen K.-o.-Läufen aufeinander. Mexiko kommt über England, Japan und Brasilien. Irland über Italien, Österreich, Spanien und die Niederlande.',
    irelandPath:[
      'Gruppenphase: 4:0 China',
      'Gruppenphase: 1:0 Südafrika',
      'Gruppenphase: 2:2 Brasilien',
      'K.-o.-Runde: 3:1 Italien',
      'Achtelfinale: 3:0 Österreich',
      'Viertelfinale: 2:2 Spanien · 4:3 i.E.',
      'Halbfinale: 2:0 Niederlande'
    ],
    mexicoPath:[
      'K.-o.-Runde: 4:1 Südafrika',
      'Achtelfinale: 5:2 England',
      'Viertelfinale: 4:1 Japan',
      'Halbfinale: 0:0 Brasilien nach 120 Minuten · Mexiko gewinnt im Elfmeterschießen'
    ],
    verdict:'Sportlich ein nahezu offenes Finale. Mexiko besitzt enorme individuelle Starpower, Irland die eingespielteren Beziehungen und die größere taktische Kontinuität. Die Einschätzung der Redaktion liegt bei 52:48 für Irland.'
  };

  wc.finalSquadComparison={
    mexico:{
      keyPlayers:[
        {player:'José Antonio Rangel',club:'Paris Saint-Germain',position:'TW',apps:7,rating:7.30,value:'€60–71 Mio.'},
        {player:'Ricardo López',club:'Manchester United',position:'ST',apps:6,goals:4,rating:7.05,value:'€268–338 Mio.'},
        {player:'Paulo Gutiérrez',club:'Al-Gharrafa',position:'OM (Z) / ST',apps:'2 (3)',goals:3,assists:1,rating:7.60},
        {player:'Juan Sergio Tavares',club:'Monaco',position:'M/OM (L)',apps:7,goals:2,assists:3,rating:7.14,value:'€55–78 Mio.'},
        {player:'Emerson Escárcega',club:'Finn Harps',position:'ST',apps:6,goals:4,assists:2,rating:7.50,value:'€46–51 Mio.',note:'Im Halbfinale gegen Brasilien nicht eingesetzt.'},
        {player:'Luis Sánchez',club:'Bayern München',position:'M/OM (R) / ST',apps:'3 (3)',goals:1,assists:1,rating:6.82,value:'€113–161 Mio.'},
        {player:'José Ruvalcaba',club:'Manchester City',position:'V (Z)',apps:5,rating:6.86,value:'€208–227 Mio.'}
      ],
      profile:'Der Name Mexiko wirkt exotischer als der Kader: PSG, Real Madrid, Bayern, Manchester United, Manchester City, Dortmund, Monaco, Arsenal, Leipzig und weitere europäische Topklubs prägen die Mannschaft.',
      attack:'Breite und Tiefe sind die größte Waffe. Mexiko kann auch ohne Escárcega auf Ricardo López, Paulo Gutiérrez, Tavares, Sánchez und weitere starke Offensivoptionen zurückgreifen.'
    },
    ireland:{
      keyPlayers:[
        {player:'Evan Reilly',club:'Finn Harps',position:'TW',age:19,apps:7,rating:7.37,value:'€14–19.5 Mio.'},
        {player:'Harry O’Leary',club:'Caen',position:'ST',age:30,apps:'5 (1)',goals:5,rating:7.25,value:'€179–206 Mio.'},
        {player:'Ben Barry',club:'Finn Harps',position:'M (Z) / ST',age:18,apps:'3 (4)',goals:4,assists:3,rating:7.30,value:'€24–29 Mio.'},
        {player:'Brendan McHugh',club:null,position:'OM (L) / ST',age:34,apps:'5 (1)',goals:1,assists:4,rating:7.55,note:'Hat sein Karriereende für Juli 2042 angekündigt.'},
        {player:'Justin Ramsey',club:'Finn Harps',position:'M (Z) / ST',age:23,apps:6,goals:2,assists:1,rating:6.95,value:'€52–57 Mio.',note:'Nach Sperre im Halbfinale wieder verfügbar.'},
        {player:'Cormac O’Kane',club:'Finn Harps',position:'DM / M/OM (Z)',age:26,apps:'4 (2)',goals:2,rating:6.95,value:'€32–35 Mio.'},
        {player:'Darcy Andrews',club:'Monaco',position:'V (Z)',age:28,apps:'5 (1)',assists:2,rating:7.03,value:'€60–71 Mio.'},
        {player:'Callum Duggan',club:'Everton',position:'V (RZ) / DM',age:28,apps:'5 (2)',goals:1,rating:6.89,value:'€52–66 Mio.'}
      ],
      profile:'Irland wird von einem zehn Spieler starken Finn-Harps-Kern getragen, ist aber keine Vereinskopie. Andrews von Monaco, Duggan von Everton, O’Leary von Caen und weitere Akteure ergänzen das Harps-Rückgrat mit eigener Qualität.',
      attack:'Irland verteilt seine Gefahr auf mehrere Schultern: O’Leary 5 Tore, Barry 4 Tore und 3 Vorlagen, McHugh 1 Tor und 4 Vorlagen, Ramsey 2 Tore und 1 Vorlage, O’Kane 2 Tore.'
    }
  };

  wc.finalTacticalAnalysis={
    irelandLikelyStructure:'Reilly; Brennan, Andrews, Duggan, Kelly; O’Neill; Ramsey, O’Kane; Papini, McHugh; O’Leary. Barry ist die gefährlichste flexible Option von der Bank oder eine Alternative für die Startelf.',
    irelandKeys:[
      'Ramseys Rückkehr gibt Irland wieder die stärkere Mezzala-Option und erlaubt Barry, höher eingesetzt zu werden.',
      'O’Neill kann als tiefer Spielmacher die Basis sichern, während Ramsey und O’Kane aus den Halbspuren nach vorne schieben.',
      'O’Leary bindet die letzte Linie. Barry kann später gegen müde Beine als Stürmer oder Mittelfeldspieler das Profil verändern.',
      'Irland darf Mexiko nicht auf Escárcega reduzieren. Das Halbfinale gegen Brasilien zeigte, dass Mexiko auch ohne ihn bestehen kann.',
      'Reilly ist nach Spanien und der starken Turnierleistung mental ein echter Faktor für ein mögliches Elfmeterschießen.'
    ],
    mexicoKeys:[
      'Ricardo López ist mit vier Turniertoren und enormer individueller Qualität der zentrale Abschlussfaktor.',
      'Tavares bringt mit zwei Toren und drei Vorlagen permanente Gefahr von links.',
      'Paulo Gutiérrez hat trotz weniger Starts bereits drei Tore und eine Vorlage und kann als zusätzlicher zentraler Angreifer das Spiel verändern.',
      'Escárcega ist mit vier Toren und zwei Vorlagen eine mögliche emotionale und sportliche Schlüsselkarte, falls er nach seinem Halbfinal-Aussetzen zurückkehrt.',
      'Mexikos Kaderbreite erlaubt mehrere offensive Profile, ohne die Grundqualität stark zu senken.'
    ],
    decisiveQuestion:'Kann Irlands eingespieltes Zentrum mit Ramsey, O’Kane und O’Neill Mexikos individuelle Offensivklasse kontrollieren, ohne selbst an Durchschlagskraft zu verlieren?'
  };

  wc.finnHarps=wc.finnHarps||{};
  wc.finnHarps.finalAngle={
    headline:'Finn Harps kann dieses Finale nicht verlieren',
    mexico:['Emerson Escárcega'],
    ireland:['Evan Reilly','Callum Brennan','Kevin Kelly','Jim O’Neill','Justin Ramsey','Cormac O’Kane','Giacomo Papini','Billy Walker','Ben Barry','Mareks Istrankins'],
    note:'Unabhängig vom Ergebnis wird mindestens ein aktueller Finn-Harps-Spieler Weltmeister. Auf irischer Seite steht ein ganzer Harps-Block, auf mexikanischer Seite Emerson Escárcega.'
  };

  const report={
    id:'2042-07-13-mexico-ireland-world-cup-final-mega-preview',
    type:'WM-Finale · Großer Vorbericht',date,competition:'FIFA World Cup 2042',
    headline:'Das Finale, das niemand vorhergesagt hat: Mexiko gegen Irland um die Welt',
    subheadline:'Zwei Exoten auf dem Papier, zwei vollkommen verdiente Finalisten auf dem Platz. Escárcega trifft auf Ryan Flannigan und seine Harps-Kollegen, Ramsey kehrt zurück, McHugh steht vor seinem letzten Tanz und ganz Donegal kann nur gewinnen.',
    label:'FIFA WORLD CUP 2042 · FINALE · GROSSER VORBERICHT',
    heroStat:{label:'WM-FINALE',value:'MEXIKO – IRLAND',note:'Das Traumfinale ist Realität'},
    backlink:{href:'nationalteam.html',label:'← ZUR WM / NATIONALTEAM'},
    intro:'Diese Paarung hätte vor dem Turnier wie eine Wette mit zu vielen Nullen hinter dem Komma geklungen. Jetzt wirkt sie logisch. Mexiko hat England 5:2 und Japan 4:1 geschlagen und Brasilien über 120 torlose Minuten bis ins Elfmeterschießen gezwungen. Irland hat Brasilien in der Gruppe ein 2:2 abgenommen, Italien 3:1 und Österreich 3:0 geschlagen, Spanien im Elfmeterschießen überlebt und die Niederlande im Halbfinale mit 14:3 Schüssen, 5:0 Schüssen aufs Tor und 2,03:0,40 xG kontrolliert. Das hier ist kein Märchenfinale zweier Zufallsgäste. Es ist das Finale zweier Mannschaften, die die alte Ordnung selbst aus dem Weg geräumt haben.',
    sections:[
      {title:'Die Welt hat aufgehört, beide Außenseiter zu nennen',text:'Mexiko und Irland bleiben historische Finalisten, aber ihre Leistungen passen nicht mehr zur klassischen Außenseiter-Erzählung. Mexiko besitzt einen Kader mit Spielern von PSG, Real Madrid, Bayern, Manchester United, Manchester City, Dortmund, Monaco und Arsenal. Irland bringt einen eingespielten Harps-Kern mit O’Leary, Andrews und Duggan als hochklassige Ergänzungen. Die Namen überraschen. Die Qualität nicht mehr.'},
      {title:'Mexikos Angriff ist mehr als Escárcega',text:'Ricardo López von Manchester United kommt mit vier WM-Toren und einem Transferwert von bis zu 338 Millionen Euro. Paulo Gutiérrez steht bei drei Toren und einer Vorlage, Juan Sergio Tavares bei zwei Toren und drei Assists. Escárcega selbst kommt auf vier Tore, zwei Vorlagen und 7,50 im Schnitt, obwohl er im Halbfinale gegen Brasilien nicht spielte. Für Irland wäre es deshalb gefährlich, das Spiel nur als Duell gegen den eigenen Harps-Stürmer zu behandeln.'},
      {title:'Irland bekommt Ramsey zurück',text:'Justin Ramsey fehlte beim 2:0 gegen die Niederlande gesperrt. Seine Rückkehr ist mehr als ein zusätzlicher Name auf dem Spielbericht. Als Mezzala gibt er Irland Kontrolle, Läufe in den Halbraum und eine Verbindung zur Spitze. Dadurch kann Ben Barry wieder stärker dort eingesetzt werden, wo seine vier Tore und drei Vorlagen am meisten weh tun: höher und näher am Tor.'},
      {title:'O’Leary, Barry, McHugh: Irland hat mehrere Endgegner',text:'Harry O’Leary führt Irland mit fünf Turniertoren an. Der 18-jährige Ben Barry steht bei sieben direkten Torbeteiligungen. Brendan McHugh kommt auf 7,55 im Schnitt, ein Tor und vier Vorlagen und wurde gegen die Niederlande Spieler des Spiels. Irland muss nicht auf einen einzigen Helden warten.'},
      {title:'McHughs letzter Tanz',text:'McHugh hat sein Karriereende für Juli 2042 angekündigt. Gegen Spanien rettete er Irland mit seinem Kopfball in Minute 115. Gegen die Niederlande war er mit Note 7,9 Spieler des Spiels. Das WM-Finale könnte nun tatsächlich sein letzter großer Auftritt sein. Ein Ende mit dem Pokal wäre eine jener Geschichten, die selbst Football Manager fast zu dick auftragen würde.'},
      {title:'Reilly ist 19 und längst kein nettes Talent mehr',text:'Evan Reilly kommt auf sieben WM-Einsätze und 7,37 im Schnitt. Gegen Spanien hielt er zwei Elfmeter im Shootout. Gegen die Niederlande bekam er keinen einzigen Schuss aufs Tor, blieb aber Teil einer defensiv perfekten Mannschaft. Sollte das Finale vom Punkt entschieden werden, wird Mexiko genau wissen, wer auf der anderen Seite wartet.'},
      {title:'Der Harps-Wahnsinn erreicht seinen Gipfel',text:'Auf irischer Seite stehen zehn aktuelle Finn-Harps-Spieler im Kader. Auf mexikanischer Seite wartet Emerson Escárcega. Egal, wer Weltmeister wird: Ein aktueller Harps-Spieler hebt den Pokal. Die internationale Frage ist längst nicht mehr, warum so viele Nationalspieler bei Finn Harps spielen. Die Frage lautet inzwischen, wie ein Klub aus Donegal zu einem der wichtigsten Talent- und Leistungszentren dieser WM geworden ist.'},
      {title:'Taktische Kernfrage: Wer kontrolliert das Zentrum?',text:'Irland kann mit O’Neill als tiefer Basis sowie Ramsey und O’Kane davor ein extrem eingespieltes Zentrum aufstellen. Mexiko bringt dagegen enorme individuelle Qualität und mehrere offensive Profile mit. Wenn Irland Mexikos Zentrum bindet, ohne seine eigenen Läufe nach vorne zu verlieren, bekommt es Kontrolle. Wenn Mexiko Ramsey und O’Kane auseinanderzieht, wird seine Offensivbreite gefährlich.'},
      {title:'Warum das Finale bei 52:48 liegt',text:'Mexiko besitzt wahrscheinlich die größere individuelle Starpower. Irland besitzt die stärkeren Automatismen und hat bei dieser WM mehr unterschiedliche Wege gezeigt, ein Spiel zu gewinnen. Mit Ramsey zurück und nach der dominanten Leistung gegen die Niederlande liegt die minimale Einschätzung deshalb bei 52:48 für Irland. Im Grunde ist es ein Münzwurf mit Weltpokal.'}
    ],
    interviews:{simulated:true,note:'Simulierte Save-Welt-Interviews und TV-Stimmen',items:[
      {speaker:'Ryan Flannigan',outlet:'RTÉ',quote:'Vor dem Turnier hätte mich wahrscheinlich jeder gefragt, was ich getrunken habe, wenn ich Mexiko gegen Irland als Finale vorhergesagt hätte. Jetzt fühlt es sich nicht mehr absurd an. Mexiko verdient es. Wir verdienen es.'},
      {speaker:'Ryan Flannigan',outlet:'Mexikanische Presse',quote:'Ich wünsche Emerson nur das Beste. Ab dem Tag nach dem Finale.'},
      {speaker:'Emerson Escárcega',outlet:'TUDN',quote:'Ich kenne diese Jungs. Ich kenne Ryan. Ich kenne ihre Bewegungen. Aber sie kennen meine auch.'},
      {speaker:'Justin Ramsey',outlet:'RTÉ',quote:'Das Halbfinale von außen zu sehen war schrecklich. Aber der Sieg war perfekt. Jetzt hoffe ich trotzdem, dass Ryan mich im Finale aufstellt.'},
      {speaker:'Brendan McHugh',outlet:'RTÉ',quote:'Ob man ein Karriereende besser schreiben kann? Fragen Sie mich nach dem Finale. Mit dem Pokal aufzuhören wäre besser.'},
      {speaker:'Evan Reilly',outlet:'BBC',quote:'Wenn es wieder Elfmeterschießen gibt, versuche ich wieder welche zu halten.'},
      {speaker:'Roy Keane',outlet:'RTÉ Studio',quote:'Irland ist im WM-Finale. Das ist die Antwort auf fast jede Frage darüber, ob sie hierher gehören.'},
      {speaker:'Hugo Sánchez',outlet:'Mexikanisches Fernsehen',quote:'Mexiko muss nicht vor Irland zurückschrecken. Aber wer Brasilien, Italien, Spanien und die Niederlande überlebt, ist kein Märchen mehr.'}
    ]},
    worldReaction:{simulated:true,note:'Simulierte Save-Welt-Presse',items:[
      'BBC: „The Final Nobody Predicted, The Final Both Earned.“',
      'RTÉ: „ONE MORE.“',
      'The Guardian: „Finn Harps Cannot Lose This Final.“',
      'Marca: „Der Klub, der die WM eroberte, ohne selbst mitzuspielen.“',
      'Mexikanische Presse: „A 90 Minutos de la Eternidad.“',
      'Niederländische Analyse: „Irland hat inzwischen zu viele Wege zu gewinnen.“'
    ]},
    sources:[
      'FM-Kaderexport Mexiko · WM 2042 · 13.07.2042',
      'FM-Kaderexport Irland · WM 2042 · 13.07.2042',
      'FM World Cup 2042 · Mexiko 0:0 Brasilien nach 120 Minuten · Halbfinale · Mexiko gewinnt i.E.',
      'FM World Cup 2042 · Niederlande 0:2 Irland · Halbfinale',
      'Simulierte Save-Welt-Interviews und Pressestimmen, redaktionell erstellt'
    ]
  };

  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-07-13-mexico-ireland-world-cup-final-mega-preview',date,type:'world-cup',
    title:'Mexiko gegen Irland: Das Traumfinale ist Realität',
    text:'Mexiko und Irland stehen verdient im WM-Finale 2042. Ramsey kehrt zurück, McHugh steht vor seinem letzten Tanz, Escárcega trifft auf Ryan Flannigan und seine Finn-Harps-Kollegen. Die große Finalanalyse sieht ein nahezu offenes Duell.',
    href:`presse.html?id=${report.id}`
  });
})();