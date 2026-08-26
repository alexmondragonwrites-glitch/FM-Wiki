(()=>{
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_CHAMPIONS_LEAGUE=window.FM_CHAMPIONS_LEAGUE||{};

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-05-06';
  const venue='Olympic Athletic Center of Athens';
  const location='Athen, Griechenland';
  const reportId='2042-05-06-champions-league-finale-finn-harps-man-utd';
  const recentWinners=[
    {season:'2037/38',winner:'Finn Harps'},
    {season:'2038/39',winner:'Manchester United'},
    {season:'2039/40',winner:'Finn Harps'},
    {season:'2040/41',winner:'Manchester United'}
  ];
  const route={
    finnHarps:['Ligaphase: 2. Platz · 21 Punkte','Achtelfinale: Caen ausgeschaltet · 8:4 insgesamt','Viertelfinale: Manchester City · 1:0 / 3:0 · 4:0 insgesamt','Halbfinale: Barcelona · 0:0 / 1:0 n.V. · 1:0 insgesamt'],
    manUtd:['Ligaphase: 12. Platz · 15 Punkte','Zwischenrunde: Young Boys ausgeschaltet · 5:4 insgesamt','Achtelfinale: Arsenal · 1:1 insgesamt · im Elfmeterschießen weiter','Viertelfinale: Monaco · 2:2 insgesamt · im Elfmeterschießen weiter','Halbfinale: Inter · 3:0 insgesamt · Rückspiel 2:0 auswärts']
  };

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-05-06-emerson-escarcega-final-status',date,player:'Emerson Escárcega',type:'injury',
    title:'Escárcega verpasst drei Wochen und ist fürs Finale fraglich',
    detail:'Nach der Handgelenksfraktur gegen Barcelona fällt Escárcega drei Wochen aus. Sein Einsatz im Champions-League-Finale gegen Manchester United in Athen ist sehr fraglich.'
  });

  const cl=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  const knockoutStage=cl.knockoutStage||{};
  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...cl,status:'Finale erreicht',
    final:{
      date:null,venue,location,teams:['Finn Harps','Manchester United'],status:'Finalpaarung steht fest',titleHolder:'Manchester United',
      recentWinners,route,
      rivalry:'Seit 2037/38 wechseln sich Finn Harps und Manchester United als Champions-League-Sieger ab. Athen entscheidet, welcher Klub in fünf Spielzeiten den dritten Titel holt.',
      finnHarpsAvailability:{emersonEscarcega:'3 Wochen Ausfall nach Handgelenksfraktur · Finaleinsatz sehr fraglich'},
      semifinalSecondLegManUtd:{opponent:'Inter',venue:'Auswärts',result:'2:0',aggregate:'3:0',scorers:[{player:'M. Ciliberti',minute:62},{player:'G. Villano',minute:73}]}
    },
    knockoutStage:{...knockoutStage,final:{...(knockoutStage.final||{}),finnHarps:{qualified:true,status:'Finale erreicht',opponent:'Manchester United',venue,location,opponentStatus:'Titelverteidiger',availability:['Emerson Escárcega: 3 Wochen Ausfall · Finaleinsatz sehr fraglich']}}}
  };

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Champions League: Finn Harps trifft in Athen auf Titelverteidiger Manchester United. Seit 2037/38 wechselten sich beide Klubs als Sieger ab; der Gewinner holt nun den dritten Titel in fünf Jahren. Escárcega ist nach drei Wochen Ausfall sehr fraglich.';
    season.nextFocus={competition:'UEFA Champions League',stage:'Finale',opponent:'Manchester United',venue,location,status:'Finalpaarung steht fest',availability:['Emerson Escárcega sehr fraglich · 3 Wochen Ausfall']};
    season.changes=season.changes||{notes:[]};season.changes.notes=season.changes.notes||[];
    const note='06.05.2042: Finale in Athen: Finn Harps gegen Titelverteidiger Manchester United. United schlägt Inter im Halbfinale 3:0 insgesamt. Seit 2037/38 wechseln sich Harps und United als Champions-League-Sieger ab; der Sieger des Finals holt den dritten Titel in fünf Spielzeiten. Escárcega fällt drei Wochen aus und ist sehr fraglich.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  const reports=[
    {
      id:reportId,type:'Finalvorschau',date,competition:'UEFA Champions League',fixtureDate:'Finale 2041/42',
      headline:'Athen entscheidet die Ära: Finn Harps gegen Manchester United',
      subheadline:'Vier Jahre lang wechselten sich Harps und United als Champions-League-Sieger ab. Jetzt treffen sie direkt im Finale aufeinander – der Sieger holt Titel Nummer drei in fünf Spielzeiten.',
      label:'CHAMPIONS LEAGUE · FINALE · ATHEN',heroStat:{label:'Letzte vier Sieger',value:'Harps · United · Harps · United',note:'2041/42 entscheidet die Fünfjahresära'},backlink:{href:'saison.html',label:'← ZUR SAISON'},
      intro:'Das Endspiel steht. Finn Harps trifft im Olympic Athletic Center of Athens auf Titelverteidiger Manchester United. Das Besondere: Seit 2037/38 hat kein anderer Klub die Champions League gewonnen. Harps 2037/38 und 2039/40, United 2038/39 und 2040/41. Nun begegnen sich die beiden prägenden Vereine dieser Ära direkt.',
      sections:[
        {title:'Der Weg der Harps',text:'Rang zwei in der Ligaphase, danach Caen, ein 4:0-Gesamtsieg gegen Manchester City und schließlich Barcelona. Gegen City und Barça blieb Finn Harps über Viertel- und Halbfinale ohne Gegentor.'},
        {title:'Der Weg des Titelverteidigers',text:'United wurde nur Zwölfter der Ligaphase. Young Boys wurde in der Zwischenrunde ausgeschaltet; Arsenal und Monaco erst im Elfmeterschießen. Gegen Inter folgte ein souveränes 3:0 insgesamt.'},
        {title:'Escárcega als große Personalfrage',text:'Der mexikanische Stürmer fällt nach seiner Handgelenksfraktur drei Wochen aus und ist für Athen sehr fraglich. O’Kane, Barry, Ramsey, Frame und Papini haben jedoch bereits gezeigt, dass die Harps Verantwortung verteilen können.'},
        {title:'Zwei Titel gegen zwei Titel',text:'Athen entscheidet nicht nur die Saison. Der Sieger wird der erste der beiden Rivalen mit drei Champions-League-Titeln innerhalb von fünf Spielzeiten.'}
      ],
      verdictHeading:'Das direkte Endspiel einer europäischen Ära',
      verdict:'Manchester United bringt den Status des Titelverteidigers. Finn Harps bringt die stärkere Ligaphase und zwei beeindruckende letzte K.-o.-Runden. Einen echten Außenseiter gibt es in Athen nicht mehr.'
    },
    {
      id:'2042-05-06-final-fanlager',type:'Fanperspektive',date,competition:'UEFA Champions League',fixtureDate:'Finale 2041/42',
      headline:'Stolz gegen Selbstverständnis: So ticken die Fanlager vor Athen',
      subheadline:'Donegal glaubt inzwischen an den dritten Titel. United vertraut auf die Härte des Champions. Beide Lager wissen: Der Gegner ist längst kein Zufallsfinalist.',
      label:'FANS · FINALE',heroStat:{label:'Titel seit 2037/38',value:'2 : 2',note:'Finn Harps und Manchester United'},backlink:{href:'saison.html',label:'← ZUR SAISON'},
      intro:'Die Harps-Fans bestaunen nicht mehr, dass ihr Klub im Finale steht. Sie fragen, wie er es gewinnen kann. United-Fans wiederum reisen mit dem Selbstverständnis des Titelverteidigers, aber ohne Überheblichkeit gegenüber einem Gegner, der City und Barcelona ausgeschaltet hat.',
      sections:[
        {title:'Donegal: Warum nicht wir?',text:'Nach dem 4:0 gegen City und 210 torlosen Minuten gegen Barcelona ist das Vertrauen groß. Die Sorge um Escárcega ist real, doch O’Kane, Barry und der zurückgekehrte Ramsey geben Hoffnung.'},
        {title:'Manchester: Respekt vor dem Rivalen',text:'United hat einen dramatischen Weg über zwei Elfmeterschießen überlebt und Inter danach klar bezwungen. Das Lager vertraut auf diese K.-o.-Härte, nimmt Finn Harps aber als direkten europäischen Rivalen wahr.'}
      ],
      verdictHeading:'Zwei verschiedene Emotionen, derselbe Anspruch',
      verdict:'Harps-Fans wirken hungriger, United-Fans routinierter. Beide erwarten ein Finale auf Augenhöhe.'
    },
    {
      id:'2042-05-06-final-europa-welt',type:'Medienperspektive',date,competition:'UEFA Champions League',fixtureDate:'Finale 2041/42',
      headline:'Europa sieht kein Märchen mehr – die Welt schaut nach Athen',
      subheadline:'International gilt Finn Harps längst als europäische Macht. Das Finale gegen United wird als Duell zweier Modelle und als Machtfrage einer ganzen Ära gelesen.',
      label:'EUROPA & WELT · MEDIENBLICK',heroStat:{label:'Sieger seit 2037/38',value:'nur zwei Klubs',note:'Finn Harps und Manchester United'},backlink:{href:'saison.html',label:'← ZUR SAISON'},
      intro:'Der europäische Blick hat sich verschoben: Finn Harps wird nicht mehr romantisiert, sondern analysiert wie jeder andere Spitzenklub. City wurde kontrolliert ausgeschaltet, Barcelona niedergerungen. Global besitzt United die größere Marke, doch die ungewöhnliche Entwicklung der Harps macht Athen zu einer Geschichte weit über Irland hinaus.',
      sections:[
        {title:'Europa',text:'England sieht nach dem City-Aus einen echten Rivalen. Spanien hebt die defensive Reife nach 210 torlosen Minuten gegen Barcelona hervor. Kontinental wird Athen als Jugend und Entwicklung gegen institutionelle Siegererfahrung gelesen.'},
        {title:'Welt',text:'International funktioniert die alte David-gegen-Goliath-Erzählung kaum noch. Zwei Champions-League-Titel machen Finn Harps sportlich zu einem zweiten Schwergewicht. Besonders Escárcegas möglicher Ausfall sorgt als persönliche Finalgeschichte für Aufmerksamkeit.'}
      ],
      verdictHeading:'Kein Außenseiterfinale',
      verdict:'Manchester United ist die größere globale Marke. Finn Harps ist inzwischen der sportlich gleichwertige Gegenspieler dieser Ära.'
    },
    {
      id:'2042-05-06-final-presseschau',type:'Presseschau',date,competition:'UEFA Champions League',fixtureDate:'Finale 2041/42',
      headline:'Presseschau vor Athen: „Zwei Könige, ein Thron“',
      subheadline:'Redaktionell simulierte Stimmen aus der Save-Welt bündeln den internationalen Blick auf das Endspiel.',
      label:'PRESSSCHAU · FINALE',heroStat:{label:'Leitmotiv',value:'Machtfrage Europas',note:'keine realen Medienzitate'},backlink:{href:'saison.html',label:'← ZUR SAISON'},
      intro:'Die folgenden Stimmen sind fiktive redaktionelle Perspektiven innerhalb der FM-Save-Welt und keine realen Zitate externer Medien.',
      sections:[
        {title:'England',text:'„United verteidigt nicht nur den Pokal, sondern seinen Platz an der Spitze gegen den einzigen Klub, der diesen Anspruch zuletzt genauso oft eingelöst hat.“'},
        {title:'Irland',text:'„Finn Harps fährt nicht nach Athen, um Geschichte zu erleben. Diese Mannschaft fährt hin, um ihre eigene Geschichte fortzuschreiben.“'},
        {title:'Spanien',text:'„Barcelona fand in 210 Minuten keinen Weg durch Donegal. Wer die Harps nur über Tempo und Emotion erklärt, hat ihre Entwicklung verpasst.“'},
        {title:'International',text:'„Vier Jahre, zwei Sieger, jetzt ein direktes Endspiel. Selten hat ein Finale eine Ära so sauber zusammengefasst.“'}
      ],
      verdictHeading:'Der gemeinsame Nenner',
      verdict:'United wird als Champion respektiert. Finn Harps wird nicht mehr als Märchen behandelt. Athen gilt als echtes Duell um die Vorherrschaft.'
    }
  ];
  reports.forEach(report=>upsert(window.FM_PRESS_REPORTS,report));

  upsert(window.FM_NEWS,{
    id:'2042-05-06-champions-league-finalpaarung',date,season:2042,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · FINALE · ATHEN',
    title:'Athen entscheidet die Ära: Harps gegen United',
    summary:'Seit 2037/38 wechseln sich Finn Harps und Manchester United als Champions-League-Sieger ab. Jetzt treffen sie direkt im Finale aufeinander. Der Sieger holt den dritten Titel in fünf Spielzeiten; Escárcega ist sehr fraglich.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','man-utd','emerson-escarcega','cormac-okane','ben-barry','justin-ramsey','season-2042']
  });
})();