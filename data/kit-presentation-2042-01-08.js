(()=>{
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const report={
    id:'2042-01-08-finn-harps-kit-presentation',
    type:'Pressekonferenz',
    date:'2042-01-08',
    competition:'Finn Harps · Saison 2042',
    headline:'Blau für die Bühne, Grün für die Wurzeln, Navy für die großen Nächte',
    subheadline:'Finn Harps präsentiert die Trikots für 2042. Das neue Set verbindet die gewachsene internationale Identität des Klubs mit Donegal, Letterkenny und der eigenen Geschichte. Spieler, Vereinsführung, Sponsor und Fans reagieren auf einen bewusst selbstbewussten Auftritt.',
    label:'KIT LAUNCH · SAISON 2042 · 08.01.2042',
    home:'FINN HARPS',
    fixtureDate:'TRIKOTPRÄSENTATION 2042',
    away:'WILD ATLANTIC',
    location:'Medientag · Finn Harps',
    heroStat:{label:'Neue Spielkleidung',value:'3 Kits',note:'Home: Royalblau · Away: Smaragdgrün · Third: Navy/Gold'},
    backlink:{href:'verein.html',label:'← ZUM VEREIN'},
    intro:'Kurz vor dem ersten Testspiel des Jahres hat Finn Harps die Spielkleidung für 2042 vorgestellt. Die Kollektion macht keinen Versuch, klein aufzutreten: Royalblau und Gold prägen das Heimtrikot, das klassische Grün bleibt als Auswärtsfarbe erhalten, und das dunkle Third Kit ist klar für europäische Abende gedacht. Über allen drei Designs liegt ein feines, topografisch anmutendes Muster als Verweis auf Atlantikküste und Donegal.',
    sections:[
      {title:'Drei Trikots, drei Seiten derselben Geschichte',text:'Das Heimtrikot setzt auf kräftiges Royalblau mit weißen und goldenen Abschlüssen. Das Auswärtstrikot hält bewusst an Smaragdgrün und Weiß fest und trägt damit die traditionellste Farbwelt des Sets. Beim dritten Trikot treffen tiefes Navy und Gold aufeinander. Wild Atlantic bleibt auf allen drei Varianten zentraler Hauptsponsor; Letterkenny erscheint als ergänzendes regionales Branding.'},
      {title:'Ryan Flannigan: „Wir dürfen größer aussehen, ohne unsere Herkunft zu verlieren.“',text:'Der Vereinsvorsitzende ordnet die Präsentation als Teil der Entwicklung der Harps ein: „Dieser Klub spielt inzwischen regelmäßig auf einer europäischen Bühne. Das darf man auch sehen. Gleichzeitig wollten wir unbedingt ein grünes Trikot im Set behalten. Donegal, unsere Leute und unsere Geschichte sind kein Dekor, sie sind der Ausgangspunkt.“'},
      {title:'Wild Atlantic sieht die Partnerschaft als Teil der Klubgeschichte',text:'Ein Vertreter des Hauptsponsors betont bei der Präsentation die regionale Erzählung hinter dem Design: „Finn Harps trägt den Nordwesten inzwischen weit über Irland hinaus. Genau diese Verbindung aus Atlantik, Heimat und internationaler Reise wollten wir sichtbar machen. Das Muster ist zurückhaltend, aber wer näher hinsieht, erkennt die Idee dahinter.“'},
      {title:'Ramsey, Papini und Escárcega über das neue Set',text:'Justin Ramsey gefällt vor allem die Klarheit des Heimtrikots: „Das Blau wirkt auf dem Platz sehr stark, gerade mit den weißen und goldenen Details.“ Giacomo Papini nennt das Third Kit mit einem Lächeln „das Trikot für Flutlicht und Champions League“. Emerson Escárcega hebt dagegen das grüne Auswärtstrikot hervor: „Das fühlt sich sofort nach Irland an. Es ist schlicht genug, aber trotzdem nicht langweilig.“'},
      {title:'Die Fans diskutieren vor allem über eine Frage: Muss das Heimtrikot grün sein?',text:'Im Supporter-Umfeld fällt die Reaktion überwiegend positiv aus, aber nicht völlig einheitlich. Ein Teil der traditionellen Anhängerschaft hätte Grün weiterhin als erste Farbe bevorzugt. Andere sehen gerade im blauen Heimtrikot ein Symbol der neuen Ära. Das Navy-Gold-Third entwickelt sich schon bei der Präsentation zum Publikumsliebling: elegant, europäisch und deutlich genug vom Heim- und Auswärtstrikot getrennt.'}
    ],
    strengthsTitle:'STIMMEN AUS DEM RAUM',
    strengthsHeading:'Was sofort ankommt',
    strengths:[
      'Justin Ramsey: „Das Blau wirkt auf dem Platz sehr stark.“',
      'Giacomo Papini: „Navy und Gold? Das ist das Trikot für Flutlicht und Champions League.“',
      'Emerson Escárcega: „Das Grün fühlt sich sofort nach Irland an.“',
      'Sponsor Wild Atlantic: Die Verbindung aus Atlantik, Heimat und internationaler Reise steht im Mittelpunkt.'
    ],
    vulnerabilitiesTitle:'FANPERSPEKTIVE',
    vulnerabilitiesHeading:'Wo trotzdem diskutiert wird',
    vulnerabilities:[
      'Traditionelle Stimmen hätten Grün weiterhin lieber als Heimfarbe gesehen.',
      'Royalblau wird von vielen Fans inzwischen als Farbe der erfolgreichen internationalen Ära akzeptiert.',
      'Das Third Kit in Navy und Gold erhält bei der Präsentation die deutlichsten spontanen Reaktionen.',
      'Das grüne Away Kit wirkt als Brücke zwischen neuer Markenwelt und klassischer Finn-Harps-Identität.'
    ],
    verdictHeading:'Ein Set, das den Statuswechsel des Klubs sichtbar macht',
    verdict:'Die 2042er Trikots erzählen ziemlich genau, wo Finn Harps inzwischen steht. Das Heimtrikot will nicht nostalgisch sein, sondern wie die Kleidung eines Klubs aussehen, der in Europa angekommen ist. Das grüne Away verhindert dabei, dass die eigene Herkunft unter Hochglanz verschwindet. Und Navy-Gold ist beinahe schon eine kleine Kampfansage an die europäischen Nächte. Entscheidend ist deshalb weniger, welches Trikot das schönste ist, sondern dass alle drei gemeinsam dieselbe Entwicklung erzählen.',
    sourcesHeading:'Designbasis und redaktionelle Inszenierung',
    sourcesNote:'Die Trikotfarben, Muster, Sponsor- und Klubdetails basieren auf den final festgelegten Finn-Harps-Kits für 2042. Die Stimmen von Spielern, Vereinsführung, Fans und Sponsor sind als redaktionelle In-Universe-Inszenierung für das FM-Archiv formuliert.',
    sources:[
      'Finn Harps · finales 2D-Kit-Set 2042',
      'Finn Harps · finales 3D-Kit-Set 2042',
      'Vereinsstatus zum Saisonstart 2042',
      'Redaktionelle FM-Wiki-Inszenierung der Präsentation'
    ]
  };

  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-01-08-finn-harps-kit-presentation',date:'2042-01-08',season:2042,category:'Verein',accent:'gold',
    eyebrow:'SAISON 2042 · KIT LAUNCH',
    title:'Finn Harps enthüllt die Trikots für 2042',
    summary:'Royalblau und Gold zuhause, Smaragdgrün auswärts und Navy-Gold für die großen Nächte: Finn Harps präsentiert das neue Set. Spieler, Vereinsführung, Sponsor und Fans diskutieren dabei vor allem über Tradition, neue Identität und Europas Bühne.',
    href:'presse.html?id=2042-01-08-finn-harps-kit-presentation',
    entities:['finn-harps','season-2042','kits-2042','wild-atlantic','justin-ramsey','giacomo-papini','emerson-escarcega'],featured:true
  });
})();
