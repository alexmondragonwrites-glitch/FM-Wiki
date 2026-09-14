(()=>{
  window.FM_MATCHES=window.FM_MATCHES||[];window.FM_FIXTURES=window.FM_FIXTURES||[];window.FM_NEWS=window.FM_NEWS||[];window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  const upsert=(a,x)=>{const i=a.findIndex(y=>y&&y.id===x.id);if(i>=0)a[i]=x;else a.push(x)};
  const date='2042-08-08',reportId='2042-08-08-athlone-town-finn-harps-1-5-ramsey-brace';

  upsert(window.FM_MATCHES,{
    id:'2042-08-08-athlone-town-finn-harps-premier-division',date,season:2042,competition:'SSE Airtricity League Premier Division',stage:'Liga',
    home:{id:'athlone-town',name:'Athlone Town',score:1},away:{id:'finn-harps',name:'Finn Harps',score:5},score:'1:5',halfTime:'0:2',
    venue:'Athlone Town Stadium',attendance:3678,awayFans:1500,weather:'19 °C',referee:'Jason Forde',
    scorers:[
      {player:'Romano Maisto',team:'Finn Harps',goals:1,minutes:[27]},
      {player:'Justin Ramsey',team:'Finn Harps',goals:2,minutes:[33,61]},
      {player:'Daryl Frame',team:'Finn Harps',goals:1,minutes:[46]},
      {player:'Quentin Rioch',team:'Athlone Town',goals:1,minutes:[72]},
      {player:'Pol Muñoz',team:'Finn Harps',goals:1,minutes:[90]}
    ],
    events:[
      {minute:1,type:'injury',team:'Finn Harps',player:'Emerson Escárcega',text:'Knöchelprellung; Justin Ramsey übernimmt im Sturm'},
      {minute:27,type:'goal',team:'Finn Harps',player:'Romano Maisto',text:'0:1'},
      {minute:33,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'0:2'},
      {minute:46,type:'goal',team:'Finn Harps',player:'Daryl Frame',text:'0:3'},
      {minute:61,type:'goal',team:'Finn Harps',player:'Justin Ramsey',text:'0:4'},
      {minute:72,type:'goal',team:'Athlone Town',player:'Quentin Rioch',text:'1:4'},
      {minute:90,type:'goal',team:'Finn Harps',player:'Pol Muñoz',text:'1:5'}
    ],
    stats:[
      {label:'Schüsse',home:2,away:17},{label:'Schüsse aufs Tor',home:1,away:7},{label:'xG',home:0.48,away:3.41},
      {label:'Großchancen',home:1,away:3},{label:'Ballbesitz',home:25,away:75},{label:'Ecken',home:1,away:4},{label:'Fouls',home:20,away:11},
      {label:'Angekommene Pässe',home:'79% (219/277)',away:'92% (651/705)'}
    ],
    standout:{player:'Giacomo Papini',team:'Finn Harps',rating:8.6,assists:2,note:'Zwei Torvorlagen und erneut der kreative Taktgeber des klaren Auswärtssiegs.'},
    leagueAfterMatch:{played:24,wins:22,draws:0,losses:2,goalsFor:84,goalsAgainst:10,goalDifference:74,points:66,position:1},
    form:{leagueWinningStreak:15,positionAfterMatch:1},
    injury:{player:'Emerson Escárcega',minute:1,type:'Knöchelprellung',expectedAbsence:'1–3 Tage'},
    headline:'Ramsey springt für Escárcega ein: Finn Harps gewinnen 5:1 in Athlone',
    verdict:'Escárcega muss praktisch sofort verletzt raus, Ramsey übernimmt im Sturm und trifft doppelt. Papini liefert zwei Vorlagen, Maisto, Frame und Pol Muñoz treffen ebenfalls. Finn Harps feiert den 15. Ligasieg in Folge.'
  });

  const fx=['2042-08-08','19:45','Athlone Town','Auswärts','1:5','Premier Division',0];
  const i=window.FM_FIXTURES.findIndex(x=>Array.isArray(x)&&x[0]===date&&['Athlone Town','Athlone Town FC'].includes(x[2]));if(i>=0)window.FM_FIXTURES[i]=fx;else window.FM_FIXTURES.push(fx);

  [
    {id:'2042-08-08-escarcega-ankle-injury',date,player:'Emerson Escárcega',type:'injury',title:'Knöchelprellung nach harmloser Aktion',detail:'Escárcega muss gegen Athlone praktisch sofort vom Feld. Erwartete Ausfallzeit: 1–3 Tage.'},
    {id:'2042-08-08-ramsey-brace-athlone',date,player:'Justin Ramsey',type:'performance',title:'Ramsey übernimmt vorne und trifft doppelt',detail:'Nach Escárcegas frühem Ausfall rückt Ramsey ins Sturmzentrum und erzielt die Treffer zum 0:2 und 0:4.'},
    {id:'2042-08-08-papini-two-assists-athlone',date,player:'Giacomo Papini',type:'performance',title:'Papini mit zwei Vorlagen',detail:'Papini bereitet zwei Treffer vor und wird mit Note 8,6 bester Harps-Spieler.'}
  ].forEach(x=>upsert(window.FM_PLAYER_UPDATES,x));

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Spielbericht',date,competition:'Premier Division',fixtureDate:'08.08.2042',
    headline:'Ramsey übernimmt sofort: Harps spazieren zum 5:1 in Athlone',
    subheadline:'Escárcega verletzt sich nach einer Minute. Ramsey rückt nach vorne, trifft doppelt und Finn Harps gewinnt den 15. Ligaauftritt in Folge.',
    label:'PREMIER DIVISION · 8. AUGUST 2042',
    heroStat:{label:'JUSTIN RAMSEY',value:'2 TORE',note:'Nach Escárcegas frühem Ausfall sofort im Sturmzentrum'},
    intro:'Eigentlich sollte Emerson Escárcega den Angriff anführen. Nach praktisch einer Minute war dieser Plan erledigt: Knöchelprellung, Wechsel, Ramsey nach vorne. Was wie ein früher Störfall begann, wurde zur nächsten Demonstration der Kadertiefe.',
    sections:[
      {title:'Plan B braucht keine Anlaufzeit',text:'Romano Maisto eröffnet in Minute 27. Sechs Minuten später trifft Ramsey zum 0:2. Nach der Pause erhöht Daryl Frame sofort auf 0:3, Ramsey legt in Minute 61 sein zweites Tor nach.'},
      {title:'Papini zieht die Fäden',text:'Giacomo Papini liefert zwei Torvorlagen und erhält mit 8,6 die beste Harps-Note. Mit 75 Prozent Ballbesitz und 92 Prozent Passquote kontrolliert Finn Harps die Partie nahezu durchgehend.'},
      {title:'Escárcega nur kurz außer Gefecht',text:'Die Diagnose fällt vergleichsweise mild aus: Knöchelprellung, voraussichtlich ein bis drei Tage Pause. Der Abend zeigt trotzdem erneut, wie wertvoll Ramsey als sofort verfügbare Sturmoption bleibt.'},
      {title:'15 Siege am Stück',text:'Nach 24 Ligaspielen steht Finn Harps bei 66 Punkten und 84:10 Toren. Seit nun 15 Ligaspielen kennt die Mannschaft nur noch Siege.'}
    ],
    verdictHeading:'Ein Ausfall, der die Maschine nicht aus dem Takt bringt',
    verdict:'Escárcegas früher Abgang hätte den Matchplan zerlegen können. Stattdessen übernimmt Ramsey die Neun und liefert zwei Tore. Genau diese Austauschbarkeit auf hohem Niveau macht die Harps national derzeit so schwer angreifbar.'
  });

  upsert(window.FM_NEWS,{
    id:'2042-08-08-athlone-town-finn-harps-1-5',date,season:2042,category:'Premier Division',accent:'green',featured:true,
    eyebrow:'PREMIER DIVISION · 1:5',title:'Ramsey übernimmt für Escárcega und trifft doppelt',
    summary:'Escárcega verletzt sich früh, Ramsey rückt ins Sturmzentrum und erzielt zwei Tore. Finn Harps gewinnt 5:1 bei Athlone und feiert den 15. Ligasieg in Folge.',
    href:`presse.html?id=${reportId}`
  });
})();