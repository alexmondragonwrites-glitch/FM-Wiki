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
  const reportId='2042-05-06-champions-league-finale-finn-harps-man-utd';

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-05-06-emerson-escarcega-final-status',
    date,
    player:'Emerson Escárcega',
    type:'injury',
    title:'Escárcega verpasst drei Wochen und ist fürs Finale fraglich',
    detail:'Nach der Handgelenksfraktur aus dem Halbfinal-Rückspiel gegen Barcelona fällt Emerson Escárcega drei Wochen aus. Damit ist sein Einsatz im Champions-League-Finale gegen Manchester United in Athen sehr fraglich.'
  });

  const cl=window.FM_CHAMPIONS_LEAGUE['2041-42']||{};
  const knockoutStage=cl.knockoutStage||{};
  window.FM_CHAMPIONS_LEAGUE['2041-42']={
    ...cl,
    status:'Finale erreicht',
    final:{
      date:null,
      venue:'Olympic Athletic Center of Athens',
      location:'Athen, Griechenland',
      teams:['Finn Harps','Manchester United'],
      status:'Finalpaarung steht fest',
      titleHolder:'Manchester United',
      finnHarpsAvailability:{
        emersonEscarcega:'3 Wochen Ausfall nach Handgelenksfraktur · Finaleinsatz sehr fraglich'
      },
      route:{
        finnHarps:'Halbfinale gegen Barcelona: 0:0 auswärts, 1:0 n.V. zuhause · Gesamt 1:0',
        manUtd:'Halbfinale gegen Inter: Rückspiel 2:0 auswärts · Gesamt 3:0'
      },
      semifinalSecondLegManUtd:{
        opponent:'Inter',venue:'Auswärts',result:'2:0',aggregate:'3:0',
        scorers:[{player:'M. Ciliberti',minute:62},{player:'G. Villano',minute:73}]
      }
    },
    knockoutStage:{
      ...knockoutStage,
      final:{
        ...(knockoutStage.final||{}),
        finnHarps:{
          qualified:true,
          status:'Finale erreicht',
          opponent:'Manchester United',
          venue:'Olympic Athletic Center of Athens',
          location:'Athen, Griechenland',
          opponentStatus:'Titelverteidiger',
          availability:['Emerson Escárcega: 3 Wochen Ausfall nach Handgelenksfraktur, Finaleinsatz sehr fraglich']
        }
      }
    }
  };

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate=date;
    season.latestHeadline='Champions League: Das Finale steht fest. Finn Harps trifft in Athen auf Titelverteidiger Manchester United. Escárcega fällt nach seiner Handgelenksfraktur drei Wochen aus und ist für das Endspiel sehr fraglich.';
    season.nextFocus={competition:'UEFA Champions League',stage:'Finale',opponent:'Manchester United',venue:'Olympic Athletic Center of Athens',location:'Athen, Griechenland',status:'Finalpaarung steht fest',availability:['Emerson Escárcega sehr fraglich · 3 Wochen Ausfall']};
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='06.05.2042: Das Champions-League-Finale steht fest. Manchester United gewinnt das Halbfinal-Rückspiel bei Inter 2:0 und zieht mit 3:0 im Gesamtergebnis ins Endspiel ein. Finale: Finn Harps gegen Titelverteidiger Manchester United im Olympic Athletic Center of Athens. Emerson Escárcega fällt nach seiner Handgelenksfraktur drei Wochen aus und ist für das Finale sehr fraglich.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }

  const report={
    id:reportId,
    type:'Finalvorschau',
    date,
    competition:'UEFA Champions League',
    fixtureDate:'Finale 2041/42',
    headline:'Athen ruft: Finn Harps trifft im Finale auf Titelverteidiger Manchester United',
    subheadline:'United setzt sich mit 3:0 insgesamt gegen Inter durch. Für Finn Harps wartet nach City und Barcelona der Titelverteidiger, während Escárcega nach seiner Handgelenksfraktur drei Wochen ausfällt und für das Endspiel sehr fraglich ist.',
    label:'CHAMPIONS LEAGUE · FINALE · PAARUNG STEHT FEST',
    heroStat:{label:'Finale',value:'Finn Harps – Man Utd',note:'Olympic Athletic Center of Athens · Athen'},
    backlink:{href:'saison.html',label:'← ZUR SAISON'},
    intro:'Das Endspiel steht. Finn Harps trifft im Olympic Athletic Center of Athens auf Manchester United. Der Titelverteidiger macht sein Halbfinale gegen Inter mit einem 2:0-Auswärtssieg und 3:0 im Gesamtergebnis klar. Für die Harps ist es nach Manchester City und Barcelona der nächste europäische Gigant. Gleichzeitig hängt über der Vorbereitung eine große Personalfrage: Emerson Escárcega fällt nach seiner Handgelenksfraktur drei Wochen aus und ist für das Finale sehr fraglich.',
    sections:[
      {title:'United zieht souverän nach Athen',text:'Manchester United gewinnt das Rückspiel bei Inter 2:0. M. Ciliberti trifft in der 62. Minute, G. Villano in der 73. Minute. Mit 3:0 im Gesamtergebnis steht der Titelverteidiger im Finale.'},
      {title:'Das Wiedersehen mit dem Titelverteidiger',text:'Manchester United geht als amtierender Champions-League-Sieger in das Endspiel. Nach dem Halbfinal-Aus der Harps gegen United in der Vorsaison bekommt dieses Finale zusätzliche Schärfe: diesmal geht es direkt um den Pokal.'},
      {title:'Escárcega wird zur großen Personalfrage',text:'Der legendäre Stürmer fehlt nach seiner Handgelenksfraktur drei Wochen. Damit ist ein Einsatz in Athen sehr fraglich. Gerade nach seinen wichtigen Beiträgen gegen Manchester City wäre sein Fehlen ein erheblicher Einschnitt für die offensive Ruhe und Effizienz der Harps.'},
      {title:'Athen als letzte Bühne',text:'Nach dem 4:0-Gesamtsieg gegen Manchester City und dem 1:0 nach 210 Minuten gegen Barcelona wartet nur noch ein Spiel. Ein Sieg würde Finn Harps den dritten Champions-League-Titel dieser Mannschaft bringen.'}
    ],
    verdictHeading:'Ein Finale mit Geschichte und einer offenen Stürmerfrage',
    verdict:'Finn Harps hat sich durch zwei völlig unterschiedliche K.-o.-Duelle gearbeitet: City wurde kontrolliert zerlegt, Barcelona niedergerungen. Nun wartet ausgerechnet Titelverteidiger Manchester United. Die größte Unsicherheit ist Escárcega. Fällt er tatsächlich aus, muss die Mannschaft ihre bisherige Stärke erneut beweisen: große Spiele nicht von einem einzigen Namen abhängig zu machen.',
    sources:['FM-Wettbewerbsübersicht UEFA Champions League · 06.05.2042','Medizinischer Status Emerson Escárcega · 06.05.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2042-05-06-champions-league-finalpaarung',date,season:2042,category:'Champions League',accent:'blue',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · FINALE · ATHEN',
    title:'Finn Harps gegen Manchester United: Das Finale steht',
    summary:'Titelverteidiger Manchester United schlägt Inter mit 3:0 insgesamt und trifft in Athen auf Finn Harps. Escárcega fällt drei Wochen aus und ist für das Finale sehr fraglich.',
    href:`presse.html?id=${reportId}`,
    entities:['finn-harps','man-utd','emerson-escarcega','season-2042']
  });
})();