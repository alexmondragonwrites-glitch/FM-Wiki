(()=>{
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]={...list[index],...item};else list.push(item);
  };

  const player=(window.FM_PLAYERS||[]).find(p=>p.id==='robert-boylan'||p.name==='Robert Boylan');
  if(player){
    player.profileDate='2041-07-29';
    player.currentClub='Norwich';
    player.status='Ehemaliger Finn-Harps-Spieler · Vereinsikone';
    player.legacy={
      ...(player.legacy||{}),
      finnHarpsLeagueApps:267,
      finnHarpsLeagueGoals:38,
      finnHarpsLeagueAssists:105,
      joined:'2030/31 von Derry City für €625K',
      left:'2040 zu Norwich · €13M Grundablöse / bis €15,75M',
      irelandCaps:42,
      irelandGoals:4,
      careerTitles:34,
      fanStatus:'Vereinsikone',
      retrospectiveDate:'2041-07-29'
    };
  }

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2041-07-29-robert-boylan-retrospective',
    date:'2041-07-29',
    player:'Robert Boylan',
    type:'legacy',
    title:'Rückblick auf eine Finn-Harps-Vereinsikone',
    detail:'Robert Boylan kam 2030/31 für €625K aus Derry, bestritt 267 Ligaspiele für Finn Harps, erzielte 38 Tore und bereitete 105 weitere vor. 2040 wechselte er zu Norwich; die Fans vermissen den langjährigen Flügelspieler bis heute.'
  });

  const reportId='2041-07-29-robert-boylan-retrospective';
  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,
    type:'Rückblick',
    date:'2041-07-29',
    competition:'Vereinschronik',
    fixtureDate:'29.07.2041',
    home:'Finn Harps',away:'Robert Boylan',score:'2010er-Ikone',
    location:'Donegal · Norwich · Irland',
    headline:'Robert Boylan: Vom €625K-Transfer zur Vereinsikone',
    subheadline:'267 Ligaspiele, 38 Tore, 105 Vorlagen und ein Teil der größten Finn-Harps-Jahre. Der Verkauf nach Norwich war wirtschaftlich stark, emotional aber bis heute umstritten.',
    label:'VEREINSCHRONIK · ROBERT BOYLAN · RÜCKBLICK 2041',
    heroStat:{label:'Finn-Harps-Ligaspiele',value:'267',note:'38 Tore · 105 Vorlagen · von 2030/31 bis 2040'},
    backlink:{href:'news.html',label:'← ZUR CHRONIK'},
    intro:'Robert Boylan war nie nur ein Rotationsspieler. Als er 2030/31 für €625K von Derry City kam, begann eine Dekade, in der er vom irischen Talent zum festen Bestandteil der Finn-Harps-Dynastie wurde. Sein Profil war das eines Flügelspielers, seine Geschichte die eines Verbindungsspielers zwischen dem nationalen Aufstieg und den europäischen Titeln.',
    sections:[
      {title:'Von Glenavon über Derry nach Donegal',text:'Boylan feierte am 5. Februar 2028 für Glenavon gegen Knockbreda sein Seniorendebüt und traf direkt. 2028 wechselte er zu Derry City. Zwei Jahre später zahlten Finn Harps €625K und holten einen Spieler, der den Verein für ein Jahrzehnt prägen sollte.'},
      {title:'267 Ligaspiele und 105 Vorlagen',text:'Zwischen 2030/31 und seinem Abschied 2040 kam Boylan in der Premier Division auf 267 Einsätze, 38 Tore und 105 Vorlagen. Besonders seine Assistzahlen erzählen seinen Wert: Er war weniger der Endpunkt als der Spieler, der Angriffe verband, Räume öffnete und andere besser machte.'},
      {title:'Teil der großen Titelgeneration',text:'Die Spielhistorie weist 34 Karrieretitel aus. Mit Finn Harps gewann Boylan unter anderem die Premier Division durchgehend von 2030 bis 2039, neunmal den FAI Cup, die Europa League 2033, die Champions League 2038, den UEFA-Superpokal 2038, die Klub-WM 2037 sowie weitere nationale und internationale Titel. Mit Irland kamen die Nations League 2039 und die Europameisterschaft 2040 hinzu.'},
      {title:'Auch Irland war Teil seiner Geschichte',text:'Nach seinem Debüt für die irische Nationalmannschaft gegen Belarus kam Boylan bis zum dokumentierten Stand auf 42 Länderspiele und vier Tore. Er wurde mehrfach in Irlands beste Elf des Jahres gewählt und sammelte individuelle Auszeichnungen vom U21-Spieler des Jahres bis zum Premier-Division-Spieler des Jahres.'},
      {title:'Der Abschied, den die Fans nicht mochten',text:'2040 ging Boylan zu Norwich. Der Deal brachte Finn Harps rund €15,75M und damit einen massiven Gewinn auf die ursprünglichen €625K. Der Vorstand lobte den Verkauf, die Fans reagierten dagegen mit klarer Ablehnung: Für sie ging kein gewöhnlicher Rotationsspieler, sondern eine Vereinsikone.'},
      {title:'Norwich bestätigt, dass noch Fußball in ihm steckt',text:'In seiner ersten Championship-Saison bei Norwich bestritt Boylan 22 Ligaspiele, erzielte zwei Tore und bereitete zwei weitere vor. Im Mai 2041 gelang mit Norwich der Aufstieg in die Premier League. Der Verkauf war also kein Karriereausklang, sondern der Beginn eines neuen Kapitels.'}
    ],
    strengthsTitle:'WARUM BOYLAN IN ERINNERUNG BLEIBT',
    strengthsHeading:'Nicht der größte Star, aber Teil des Fundaments',
    strengths:['267 Ligaspiele für Finn Harps','38 Ligatore','105 Ligavorlagen','€625K Einkauf → bis €15,75M Verkauf','34 dokumentierte Karrieretitel','42 Länderspiele für Irland','Fanstatus: Vereinsikone'],
    vulnerabilitiesTitle:'DER BLICK ZURÜCK',
    vulnerabilitiesHeading:'Sportlich ersetzbar, historisch nicht',
    vulnerabilities:['Beim Verkauf war Boylan nicht mehr unantastbarer Stammspieler','Der finanzielle Gewinn war außergewöhnlich','Die Fanreaktion zeigt, dass Kaderwert und Vereinsbindung zwei verschiedene Dinge sind'],
    verdictHeading:'Ein Transfergewinn mit emotionalem Preis',
    verdict:'Der Verkauf zu Norwich war aus Kadersicht nachvollziehbar und finanziell exzellent. Die Rückschau erklärt trotzdem, warum die Fans ihn so hart bewerten: Boylan verkörperte einen ganzen Abschnitt der Finn-Harps-Geschichte. Er kam für kleines Geld, blieb ein Jahrzehnt, gewann praktisch alles und verließ den Verein erst, als aus dem Außenseiter längst eine europäische Macht geworden war.',
    sourcesHeading:'Quellen',
    sourcesNote:'Der Rückblick basiert auf Robert Boylans Football-Manager-Profil, Karrierehistorie, Meilensteinen und der dokumentierten Fanreaktion auf seinen Verkauf.',
    sources:['FM-Spielerprofil Robert Boylan · 29.07.2041','FM-Karrierestatistik Robert Boylan · 29.07.2041','FM-Historie und Meilensteine Robert Boylan · 29.07.2041','Finn-Harps-Fanreaktion auf Transfers · Juli 2041']
  });

  upsert(window.FM_NEWS,{
    id:'2041-07-29-robert-boylan-retrospective',
    date:'2041-07-29',season:2041,category:'Vereinschronik',accent:'gold',featured:false,
    eyebrow:'RÜCKBLICK · ROBERT BOYLAN · VEREINSIKONE',
    title:'Warum die Fans Robert Boylan noch immer vermissen',
    summary:'267 Ligaspiele, 38 Tore, 105 Vorlagen und ein Jahrzehnt Finn-Harps-Geschichte: Der Verkauf nach Norwich war wirtschaftlich stark, doch die Fanreaktion zeigt, wie tief Boylans Verbindung zum Klub geblieben ist.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','robert-boylan','norwich','ireland']
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.changes=season.changes||{notes:[]};
    const note='29.07.2041: Vereinschronik-Rückblick auf Robert Boylan. Die ehemalige Finn-Harps-Ikone kam 2030/31 für €625K, bestritt 267 Ligaspiele mit 38 Toren und 105 Vorlagen und wechselte 2040 für bis zu €15,75M zu Norwich.';
    if(!(season.changes.notes||[]).includes(note))season.changes.notes=[...(season.changes.notes||[]),note];
  }
})();