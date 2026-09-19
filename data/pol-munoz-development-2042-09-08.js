(()=>{
  window.FM_NEWS=window.FM_NEWS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const date='2042-09-08';
  const reportId='2042-09-08-pol-munoz-development-snapshot';

  const snapshot={
    player:'Pol Muñoz',
    age:22,
    nationality:'Spanien',
    club:'Finn Harps',
    personality:'Professionell',
    squadStatus:'Stammspieler',
    currentAbility:171,
    estimatedValue:'€59–64 Mio.',
    wage:'€39K/Woche',
    contractEnd:'31.12.2045',
    seniorCaps:5,
    seniorGoals:1,
    heightCm:186,
    weightKg:78,
    preferredFoot:'rechts',
    season2042:{
      league:{starts:9,subApps:15,goals:7,assists:7,xG:5.43,xA:5.45,averageRating:7.25},
      total:{starts:12,subApps:15,goals:11,assists:7,xG:7.62,xA:7.35,averageRating:7.35}
    },
    standoutAttributes:{
      anticipation:20,vision:19,decisions:18,flair:18,
      technique:17,acceleration:17,pace:17,nerves:17,
      passing:15,balance:15
    },
    developmentSinceMay:{
      previousDate:'2042-05-25',
      previousCurrentAbility:163,
      currentAbilityGain:8,
      previousValue:'€29–32 Mio.',
      currentValue:'€59–64 Mio.',
      previousSeniorCaps:0,
      currentSeniorCaps:5
    }
  };

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-09-08-pol-munoz-development',date,player:'Pol Muñoz',type:'development',
    title:'Pol Muñoz ist endgültig in der Elite angekommen',
    detail:'Seit dem Porträt vom 25. Mai ist Muñoz von CA 163 auf 171 gestiegen. Sein Marktwert hat sich von €29–32 Mio. auf €59–64 Mio. nahezu verdoppelt. Dazu stehen nun fünf A-Länderspiele und ein Tor für Spanien sowie 11 Tore und 7 Vorlagen in 27 Pflichtspieleinsätzen 2042.'
  });

  const oldPortrait=window.FM_PRESS_REPORTS.find(x=>x&&x.id==='2042-05-25-pol-munoz-portrait-von-coventry-zur-wm');
  if(oldPortrait){
    oldPortrait.followUp={
      date,
      title:'September-Update: Der nächste Sprung',
      text:'Nur gut drei Monate später steht Muñoz bereits bei CA 171 und einem Marktwert von €59–64 Mio. Aus dem spanischen WM-Neuling ist ein etablierter A-Nationalspieler mit fünf Einsätzen und einem Tor geworden. Für Finn Harps kommt er 2042 wettbewerbsübergreifend auf 11 Tore und 7 Vorlagen.'
    };
  }

  upsert(window.FM_PRESS_REPORTS,{
    id:reportId,type:'Spielerentwicklung',date,competition:'Finn Harps · Spielerentwicklung',
    headline:'Von 163 auf 171: Pol Muñoz ist zum Monster geworden',
    subheadline:'Drei Monate nach seinem WM-Porträt ist der 22-Jährige sportlich und finanziell noch einmal explodiert: CA 171, €59–64 Mio. Marktwert, fünf Spanien-Länderspiele sowie 11 Tore und 7 Vorlagen für die Harps.',
    label:'SPIELERUPDATE · POL MUÑOZ · 8. SEPTEMBER 2042',
    heroStat:{label:'ENTWICKLUNG',value:'163 → 171 CA',note:'€29–32 Mio. → €59–64 Mio.'},
    backlink:{href:'spieler.html?id=pol-munoz',label:'← ZU POL MUÑOZ'},
    intro:'Im Mai war Pol Muñoz bereits eine der stärksten Entwicklungsgeschichten des Kaders. Im September sieht sein Profil aus, als hätte jemand den Regler noch einmal nach rechts geschoben. Er ist nicht mehr nur ein sehr guter Entwicklungsspieler. Er ist mit 22 Jahren ein kompletter offensiver Mittelfeldspieler auf europäischem Topniveau.',
    snapshot,
    sections:[
      {title:'Acht Fähigkeitspunkte in gut drei Monaten',text:'Am 25. Mai lag Muñoz bei CA 163. Am 8. September steht er bei 171. Ein Sprung um acht Punkte in dieser Leistungsregion ist besonders wertvoll, weil er nicht mehr aus einem niedrigen Ausgangsniveau kommt.'},
      {title:'Der Marktwert hat sich praktisch verdoppelt',text:'Im Mai wurde Muñoz auf €29–32 Mio. geschätzt. Jetzt liegt sein Wert bei €59–64 Mio. Finn Harps zahlte 2041 nur €12,95 Mio. für ihn.'},
      {title:'Nicht mehr nur Perspektive, sondern Produktion',text:'Wettbewerbsübergreifend steht Muñoz 2042 bei 12 Startelfeinsätzen plus 15 Einwechslungen, 11 Toren, 7 Vorlagen und einer Durchschnittsnote von 7,35. In der Liga sind es 7 Tore und 7 Vorlagen.'},
      {title:'Das Profil ist inzwischen absurd komplett',text:'Antizipation 20, Übersicht 19, Entscheidungen 18, Flair 18, Technik 17, Schnelligkeit 17 und Antritt 17 geben ihm kaum noch eine echte Schwachstelle für eine offensive Mittelfeldrolle. Dazu kommen professionelle Persönlichkeit und starke Vielseitigkeit.'},
      {title:'Spanien hat ihn inzwischen fest im Blick',text:'Vor der WM stand Muñoz noch bei null A-Länderspielen. Inzwischen besitzt er fünf Einsätze und ein Tor für Spanien. Auch international hat sich sein Status innerhalb weniger Monate verändert.'}
    ],
    verdictHeading:'Aus einer Entwicklungsgeschichte ist ein Star geworden',
    verdict:'Der interessanteste Teil ist nicht nur CA 171. Es ist die Geschwindigkeit der Entwicklung. Muñoz kam einst aus einem schwierigen Coventry-Umfeld, wurde bei Finn Harps zum WM-Fahrer und ist wenige Monate später ein Spieler mit €60-Millionen-Marktwert, zweistelliger Torproduktion und Elite-Mentalwerten. Mit 22 ist die Geschichte wahrscheinlich noch nicht fertig.',
    sources:['FM-Spielerprofil Pol Muñoz · 08.09.2042','FM-Saisonstatistik Pol Muñoz · 08.09.2042']
  });

  upsert(window.FM_NEWS,{
    id:'2042-09-08-pol-munoz-development',date,season:2042,category:'Spielerentwicklung',accent:'red',featured:false,
    eyebrow:'POL MUÑOZ · CA 171',
    title:'Vom WM-Neuling zum €60-Mio.-Spieler',
    summary:'Pol Muñoz steigt seit Mai von CA 163 auf 171. Sein Marktwert liegt nun bei €59–64 Mio.; 2042 kommt er auf 11 Tore und 7 Vorlagen.',
    href:`presse.html?id=${reportId}`,
    entities:['pol-munoz','finn-harps','spain','season-2042']
  });

  const season=(window.FM_SEASONS||[]).find(x=>x&&(x.year===2042||x.season===2042));
  if(season){
    season.referenceDate=date;
    season.changes=season.changes||{notes:[]};
    season.changes.notes=season.changes.notes||[];
    const note='08.09.2042: Pol Muñoz erreicht CA 171. Seit dem 25.05. ist er um acht Fähigkeitspunkte gestiegen; sein Marktwert wächst von €29–32 Mio. auf €59–64 Mio. 2042 steht er bei 11 Toren und 7 Vorlagen sowie fünf A-Länderspielen für Spanien.';
    if(!season.changes.notes.includes(note))season.changes.notes.push(note);
  }
})();