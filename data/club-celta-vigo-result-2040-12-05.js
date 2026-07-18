(()=>{
  const c=(window.FM_CLUBS||[]).find(x=>x.id==='celta-vigo');
  if(!c)return;
  Object.assign(c,{
    status:'complete',completion:100,
    summary:'Finn Harps gewann das letzte Spiel des Jahres bei RC Celta de Vigo mit 3:1. Celta ging durch Pete Cooper bereits in der vierten Minute in Führung, verlor danach aber gegen Papini, Ramsey und Blanco die Kontrolle über das Ergebnis. Die Spanier erzeugten 1,79 xG und sechs Schüsse aufs Tor, während Finn Harps mit 59 Prozent Ballbesitz, 2,18 xG und drei Großchancen die klarere Chancenqualität besaß.',
    tags:['Champions League','3:1 für Finn Harps','La Liga · Platz 3','4-3-3','Vigo','Spiel abgeschlossen'],
    lastMeeting:{date:'2040-12-05',competition:'UEFA Champions League · Ligaphase',venue:'Iago Aspas-Park',result:'RC Celta de Vigo 1:3 Finn Harps',xg:'1,79 : 2,18',possession:'41 % : 59 %',report:'spiel.html?id=2040-12-05-celta-vigo'},
    pressReport:{
      id:'2040-12-05-celta-vigo-nachbericht',href:'presse.html?id=2040-12-05-celta-vigo-nachbericht',label:'PRESSEKOMMENTAR · 05.12.2040',
      headline:'Der frühe Rückstand war nur der Anfang der Antwort',
      standfirst:'Celta traf nach vier Minuten. Finn Harps antwortete mit Ballkontrolle, drei unterschiedlichen Torschützen und einem jungen Torwart, der nach seinem ersten Champions-League-Gegentor nicht wackelte.'
    }
  });
  c.scouting={...(c.scouting||{}),postMatch:[
    'Celtas frühe Stärke bestätigte sich mit Coopers Führungstor in der vierten Minute.',
    'Finn Harps kontrollierte danach 59 Prozent Ballbesitz und brachte 571 Pässe an.',
    'Die angekündigte offensive Qualität blieb sichtbar: Celta kam auf 15 Abschlüsse und 1,79 xG.',
    'Finn Harps erzeugte mit drei Großchancen die bessere Abschlussqualität und gewann 3:1.',
    'Papini war mit Tor, Vorlage und Note 8,5 der prägende Spieler.',
    'Reilly parierte nach dem frühen Gegentor fünf weitere Schüsse aufs Tor.'
  ]};
  c.checklist={...(c.checklist||{}),profile:true,squad:true,tactics:true,meetings:true,history:true};
})();