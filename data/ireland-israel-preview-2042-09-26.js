(()=>{
  window.FM_IRELAND=window.FM_IRELAND||{};
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-09-26';
  const fixtureDate='2042-09-29';
  const reportId='2042-09-26-ireland-israel-nations-league-preview';

  const israelScout={
    team:'Israel',
    competition:'UEFA Nations League A',
    group:'Gruppe 3',
    fixtureDate,
    venue:'Heim',
    strengths:[
      'Volleys','Technik','Teamwork','Führungsqualitäten','Sprunghöhe',
      'Grundfitness','Kraft','Ecken','Passspiel','Elfmeter','Einsatzfreude','Beweglichkeit'
    ],
    weaknesses:[
      'Abschluss','Kopfballtechnik','Flanken','Antizipation','Stellungsspiel','Mut',
      'Antritt','Entscheidungen','Aggressivität','Reflexe','Ballannahme','Freistöße',
      'Halten','Strafraumkontrolle','Exzentrizität','Kommunikation','weite Abwürfe'
    ],
    shape:'Offensiv ausgerichtete Viererkette mit zentralem Zehner, breiten Flügeln und einer einzelnen Spitze',
    tacticalNotes:[
      'Israel besitzt technisch starke und passsichere Spieler, wirkt im Scoutbericht aber in mehreren defensiven und torwartspezifischen Attributen angreifbar.',
      'Die Flügel sind klar besetzt; Irland sollte die Breite kontrollieren, ohne den Raum hinter den Außenverteidigern zu öffnen.',
      'Schwächen bei Antizipation, Stellungsspiel und Entscheidungen sprechen dafür, mit Tempo und Positionswechseln Druck auf die letzte Linie auszuüben.',
      'Nach dem 2:2 in Dänemark ist das Heimspiel bereits drei Tage später die nächste Belastungsprobe.'
    ]
  };

  window.FM_IRELAND.updated=date;
  window.FM_IRELAND.israelPreview=israelScout;
  window.FM_IRELAND.nextFocus={
    competition:'UEFA Nations League A',stage:'Gruppe 3 · 2. Spieltag',
    opponent:'Israel',venue:'Heim',date:fixtureDate,status:'Vorbereitung'
  };

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Nations-League-Vorbericht',date,competition:'UEFA Nations League A',fixtureDate,
    headline:'Keine Verschnaufpause: Nach Kopenhagen wartet Israel auf Irland',
    subheadline:'Drei Tage nach dem 2:2 gegen Dänemark folgt das erste Heimspiel der Nations League. Israel bringt Technik und Passqualität mit, zeigt im Scoutbericht aber klare defensive Angriffspunkte.',
    label:'UEFA NATIONS LEAGUE A · GRUPPE 3 · IRLAND – ISRAEL',
    heroStat:{label:'NÄCHSTE AUFGABE',value:'ISRAEL',note:'Heimspiel · 29.09.2042'},
    backlink:{href:'nationalteam.html',label:'← ZUR NATIONALMANNSCHAFT'},
    intro:'Irland hat kaum Zeit, den Punkt von Kopenhagen zu sortieren. Schon drei Tage später geht es zuhause gegen Israel weiter. Der Gegner wirkt technisch sauber und kollektiv ordentlich, lässt laut Scoutbericht aber in mehreren Bereichen der Defensive und im Tor Ansatzpunkte erkennen.',
    sections:[
      {title:'Technik und Passspiel als israelische Basis',text:'Israels Stärken liegen vor allem bei Technik, Teamwork, Passspiel, Führungsqualitäten und Standards. Im Ballbesitz ist daher mit einer Mannschaft zu rechnen, die längere Kombinationen nicht scheut.'},
      {title:'Die defensive Seite wirkt weniger stabil',text:'Der Scoutbericht nennt unter anderem Antizipation, Stellungsspiel, Entscheidungen, Aggressivität und Antritt als Schwächen. Genau dort kann Irland mit dynamischen Läufen und schnellen Positionswechseln ansetzen.'},
      {title:'Auch im Tor gibt es Angriffspunkte',text:'Reflexe, Halten, Strafraumkontrolle, Kommunikation und weite Abwürfe werden nicht als Stärken bewertet. Abschlüsse aus unterschiedlichen Winkeln und konsequentes Nachsetzen können deshalb wertvoll sein.'},
      {title:'Flügel kontrollieren, Zentrum attackieren',text:'Israel besetzt beide Seiten offensiv und arbeitet mit einem zentralen offensiven Mittelfeldspieler hinter einer einzelnen Spitze. Irland muss außen sauber absichern, sollte bei eigenem Ballbesitz aber gezielt die Räume zwischen Mittelfeld und Abwehr anlaufen.'},
      {title:'Regeneration wird Teil des Matchplans',text:'Zwischen dem 2:2 gegen Dänemark und dem Israel-Spiel liegen nur drei Tage. Rotation und Belastungssteuerung werden deshalb fast genauso wichtig wie die taktische Vorbereitung.'}
    ],
    verdictHeading:'Andere Aufgabe, anderer Rhythmus',
    verdict:'Dänemark stellte Irland vor allem mit individueller Qualität und Ballkontrolle vor Probleme. Israel sieht auf dem Papier anders aus: technisch ordentlich, aber mit mehr potenziellen Brüchen in Defensive und Entscheidungsfindung. Das Heimspiel verlangt deshalb weniger Geduld gegen Dominanz und mehr Präzision beim Bespielen dieser Schwächen.',
    sources:['FM-Israel-Scoutbericht · 26.09.2042','FM-Nations-League-Spielplan Irland · 26.09.2042']
  });

  upsert(window.FM_NEWS,{
    id:'2042-09-26-ireland-israel-preview',date,season:2042,category:'Nationalteam',accent:'green',featured:false,
    eyebrow:'NATIONS LEAGUE · VORSCHAU',
    title:'Nächste Aufgabe Israel: nur drei Tage bis zum Heimspiel',
    summary:'Irland bereitet sich nach dem 2:2 in Dänemark auf Israel vor. Der Scoutbericht sieht technische Qualität, aber auch klare defensive Schwachstellen.',
    href:`presse.html?id=${reportId}`,
    entities:['ireland','israel','nations-league','season-2042']
  });
})();