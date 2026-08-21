(()=>{
  window.FM_PLAYERS=window.FM_PLAYERS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_TRANSFER_TARGETS=window.FM_TRANSFER_TARGETS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const playerId='raul-valencia';
  let player=window.FM_PLAYERS.find(item=>item.id===playerId||item.name==='Raúl');
  if(!player){
    player={id:playerId,name:'Raúl'};
    window.FM_PLAYERS.push(player);
  }

  Object.assign(player,{
    name:'Raúl',
    fullName:'Raúl',
    age:27,
    nation:'Spanien',
    club:'Valencia',
    positionCode:'VL',
    position:'Verteidiger (links)',
    group:'Transferziele',
    availability:'Beobachtet · Vertrag läuft am 30.06.2042 aus',
    ability:195,
    value:'€39–58 Mio.',
    currentWage:'€350.000/Woche',
    contractEnd:'30.06.2042',
    statusAtClub:'Starspieler',
    personality:'Perfektionist',
    height:'190 cm',
    weight:'85 kg',
    international:'Spanien · 59 Länderspiele · 1 Tor',
    scouting2042:{
      date:'2042-01-31',
      priority:'Sehr hoch',
      recommendation:'Sportlich Weltklasse; wirtschaftlich nur sinnvoll, wenn das Gehalt die interne Struktur nicht dauerhaft sprengt.',
      strengths:[
        'Antizipation 19, Konzentration 19 und Entscheidungen 18: außergewöhnliche defensive Entscheidungsqualität.',
        'Stellungsspiel 17, Deckung 16 und Tackling 15 machen ihn zu einem sehr stabilen Linksverteidiger auf höchstem Niveau.',
        'Antritt 17, Schnelligkeit 18, Ausdauer 18, Balance 19 und Sprunghöhe 16 liefern ein nahezu komplettes physisches Profil.',
        'Flanken 16 und Technik 16 geben ihm auch im letzten Drittel echten Mehrwert.',
        'Mit 27 Jahren im unmittelbaren Leistungsmaximum und bereits mit 59 spanischen Länderspielen international vollständig erprobt.'
      ],
      risks:[
        'Das aktuelle Valencia-Gehalt von 350.000 Euro pro Woche läge deutlich über der bisherigen Harps-Gehaltsstruktur.',
        'Aggressivität 8 und Mut 11 sind die wenigen klaren mentalen Schwachstellen.',
        'Bei einer Verpflichtung wäre er klarer Stammspieler; Kevin Kelly und Gustavo da Silva würden unmittelbar um Einsatzzeit verdrängt.',
        'Ein langfristiger Vertrag auf dem aktuellen Gehaltsniveau würde die Erwartungen künftiger Vertragsverhandlungen im Kader verschieben.'
      ],
      attributes:{
        antizipation:19,konzentration:19,entscheidungen:18,stellungsspiel:17,deckung:16,tackling:15,
        flanken:16,technik:16,antritt:17,schnelligkeit:18,ausdauer:18,balance:19,sprunghoehe:16
      }
    }
  });

  const target={
    id:'2042-01-31-raul-valencia-target',
    date:'2042-01-31',
    playerId,
    player:'Raúl',
    club:'Valencia',
    age:27,
    nation:'Spanien',
    position:'Linksverteidiger',
    ability:195,
    value:'€39–58 Mio.',
    currentWage:'€350.000/Woche',
    contractEnd:'30.06.2042',
    status:'Transferziel',
    priority:'A',
    summary:'Finn Harps prüft eine außergewöhnliche Marktchance: Valencias 27-jähriger spanischer Linksverteidiger Raúl besitzt Weltklasse-Niveau und steht nur noch bis Ende Juni 2042 unter Vertrag. Die sportliche Qualität ist eindeutig; die zentrale Frage ist das Gehaltsniveau.'
  };
  upsert(window.FM_TRANSFER_TARGETS,target);

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-01-31-raul-valencia-transfer-target',
    date:'2042-01-31',
    player:'Raúl',
    type:'transfer-target',
    title:'Weltklasse-Chance auf links',
    detail:'Finn Harps beobachtet Valencias 27-jährigen Linksverteidiger Raúl. Der spanische Nationalspieler besitzt Fähigkeit 195, sein Vertrag läuft am 30.06.2042 aus. Sein aktuelles Valencia-Gehalt beträgt 350.000 Euro pro Woche.'
  });

  upsert(window.FM_NEWS,{
    id:'2042-01-31-raul-valencia-transfer-target',
    date:'2042-01-31',
    season:2042,
    category:'Transfers',
    accent:'gold',
    featured:true,
    eyebrow:'TRANSFERZIEL · VALENCIA · LINKSVERTEIDIGER',
    title:'Galáctico-Chance auf links: Finn Harps prüft Raúl',
    summary:'Raúl, 27, gehört mit Fähigkeit 195 zur absoluten Weltklasse. Der Valencia-Vertrag läuft im Sommer aus. Sportlich wäre der spanische Nationalspieler ein gewaltiges Upgrade, wirtschaftlich liegt die Hürde vor allem beim aktuellen Gehalt von 350.000 Euro pro Woche.',
    href:'spieler.html?id=raul-valencia',
    entities:['finn-harps','raul-valencia','valencia','season-2042']
  });

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2042||x.season===2042);
  if(season){
    season.referenceDate='2042-01-31';
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='31.01.2042: Finn Harps prüft eine Verpflichtung von Valencias Linksverteidiger Raúl. Der 27-jährige spanische Nationalspieler besitzt Fähigkeit 195 und einen bis 30.06.2042 laufenden Vertrag; sein aktuelles Gehalt beträgt 350.000 Euro pro Woche.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }
})();