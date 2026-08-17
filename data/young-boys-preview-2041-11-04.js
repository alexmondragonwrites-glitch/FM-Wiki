(()=>{
  window.FM_CLUBS=window.FM_CLUBS||[];
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const previous=window.FM_CLUBS.find(x=>x.id==='young-boys')||{};
  const meetings=[...(previous.meetings||[])];
  const upcoming={date:'05.11.2041',venue:'A',result:'UEFA Champions League · Ligaphase · anstehend'};
  const meetingIndex=meetings.findIndex(x=>x.date===upcoming.date);
  if(meetingIndex>=0)meetings[meetingIndex]=upcoming;else meetings.push(upcoming);

  const clubData={
    ...previous,
    id:'young-boys',name:'Young Boys',fullName:'Berner Sport Club Young Boys',short:'YB',country:'Schweiz',season:2041,
    status:'current',completion:90,
    summary:'Finn Harps trifft als nächstes in der Champions-League-Ligaphase auswärts auf Young Boys. Der Scoutbericht zeigt eine erfahrene, physisch starke 4-4-2-Mannschaft mit viel Kopfballstärke, Ausdauer, Schnelligkeit und guter Defensivorganisation. Mehrere Schlüsselspieler sind unmittelbar vor dem Spiel jedoch als verletzt markiert.',
    formation:'Erwartete Best-XI laut Scoutbericht: 4-4-2',
    tacticalStyle:'Kompaktes 4-4-2 mit zwei Stürmern, physischer Präsenz, guter Arbeit ohne Ball und klaren Stärken in Luftduellen und defensiver Organisation.',
    keyPlayers:['Renato Ajdini','Saber Salhi','Hristijan Mihailov','Eugenio Trunz','Mohamed Boukhriss','Giovanni Martone'],
    tags:['Champions League 2041/42','Ligaphase','Auswärtsspiel','4-4-2','Kopfballstärke','Physis','Defensive Organisation'],
    meetings,
    checklist:{...(previous.checklist||{}),profile:true,squad:true,tactics:true,meetings:true},
    probableXI:[
      {name:'Giovanni Martone',role:'Mitspielender Torwart',zone:'TW'},
      {name:'Artan Mustafa',role:'Außenverteidiger',zone:'VL'},
      {name:'Mohamed Boukhriss',role:'Kompromissloser Innenverteidiger',zone:'IVL'},
      {name:'Sebastiano Zecchini',role:'Innenverteidiger',zone:'IVR'},
      {name:'Evan Andre',role:'Inverser Flügelverteidiger',zone:'VR'},
      {name:'Eugenio Trunz',role:'Äußerer Spielmacher',zone:'ML'},
      {name:'Walter Bollhalder',role:'Zentraler Mittelfeldspieler',zone:'MZL'},
      {name:'Elvis Dumoulin',role:'Vertikaler Spielmacher',zone:'MZR'},
      {name:'Hristijan Mihailov',role:'Äußerer Mittelfeldspieler',zone:'MR',note:'Im aktuellen Kaderexport als verletzt markiert.'},
      {name:'Saber Salhi',role:'Hängende Spitze',zone:'STL'},
      {name:'Renato Ajdini',role:'Knipser',zone:'STR',note:'Im aktuellen Kaderexport als verletzt markiert.'}
    ],
    squadNotes:[
      {name:'Hristijan Mihailov',detail:'25-jähriger Rechtsaußen aus Nordmazedonien. 12 Einsätze, 3 Tore, 3 Vorlagen und Durchschnittsnote 7,51. Im Export aktuell verletzt.'},
      {name:'Renato Ajdini',detail:'28-jähriger Schweizer Stürmer, 186 cm. 18 Einsätze, 11 Tore, 2 Vorlagen, Durchschnittsnote 6,98. Im Export aktuell verletzt.'},
      {name:'Saber Salhi',detail:'28 Jahre, flexibel als offensiver Mittelfeldspieler oder Stürmer. 20 Einsätze, 7 Tore, 3 Vorlagen, Durchschnittsnote 6,99.'},
      {name:'Eugenio Trunz',detail:'26-jähriger linker/zentraler Mittelfeldspieler. 20 Einsätze, 1 Tor, 6 Vorlagen und Durchschnittsnote 7,22.'},
      {name:'Mohamed Boukhriss',detail:'31-jähriger marokkanischer Innenverteidiger/Sechser, 187 cm und 83 kg. 18 Einsätze, Durchschnittsnote 7,09.'},
      {name:'Sebastiano Zecchini',detail:'30-jähriger Schweizer Innenverteidiger, 197 cm und 91 kg. 20 Startelf- plus 1 Joker-Einsatz, 1 Tor, 1 Vorlage, Durchschnittsnote 6,93.'},
      {name:'Giovanni Martone',detail:'31-jähriger italienischer Torwart, 188 cm. 21 Einsätze, Durchschnittsnote 6,94.'},
      {name:'Evan Andre',detail:'26-jähriger rechter Verteidiger. 18 Startelf- plus 1 Joker-Einsatz, 1 Tor, 3 Vorlagen, Durchschnittsnote 7,13.'},
      {name:'Walter Bollhalder',detail:'23-jähriger zentraler Mittelfeldspieler. 20 Einsätze, 2 Tore, 3 Vorlagen, Durchschnittsnote 6,93.'},
      {name:'Mislav Janko Hrvoj',detail:'30 Jahre, Defensiv-Allrounder. 0 Startelf- plus 6 Joker-Einsätze, Durchschnittsnote 6,36; Scoutbericht markiert ihn als Spieler außer Form.'},
      {name:'Leonardo Dettori',detail:'32-jähriger linker Verteidiger; im aktuellen Export verletzt.'}
    ],
    scouting:{
      strengths:[
        'Der Scoutbericht hebt die Arbeit ohne Ball als klare Stärke hervor.',
        'Kopfballtechnik, Kraft, Ausdauer, Schnelligkeit und Sprunghöhe gehören zu den auffälligen Mannschaftsstärken.',
        'Auch Deckung, Tackling, Antizipation, Entscheidungen und Stellungsspiel werden positiv bewertet.',
        'Young Boys verfügt über mehrere Spieler mit guter Übersicht und Führungsqualität.',
        'Die Mannschaft verteidigt Standards am kurzen Pfosten besonders konsequent.',
        'Renato Ajdini ist mit 11 Toren in 18 Einsätzen der produktivste Stürmer im aktuellen Kaderexport.',
        'Eugenio Trunz bringt mit sechs Vorlagen die stärkste sichtbare Vorlagenproduktion des exportierten Kaders mit.'
      ],
      weaknesses:[
        'Mislav Janko Hrvoj wird im Scoutbericht ausdrücklich als formschwach markiert.',
        'Der Bericht weist 4-3-3-DM-breite Formationen als problematisches gegnerisches Grundmuster aus.',
        'Die nominelle Best-XI ist vor dem Spiel möglicherweise nicht vollständig verfügbar: Mihailov und Ajdini sind im aktuellen Kaderexport als verletzt markiert.',
        'Die Innenverteidigung ist groß und robust, wodurch planlose hohe Bälle eher Young Boys entgegenkommen dürften.',
        'Mehrere Stammspieler sind 28 bis 32 Jahre alt; das Harps-Tempo und Positionswechsel können die erfahrene, aber weniger junge Struktur fordern.'
      ],
      plan:[
        'Die zentrale Überzahl gegen das 4-4-2 nutzen und zwischen den beiden Mittelfeldspielern und der Abwehrlinie kombinieren.',
        'Keine unnötige Flankenorgie gegen Zecchini und Boukhriss. Flache Hereingaben, Rückpässe und Steckpässe sind das attraktivere Angriffsmittel.',
        'Ajdini und Salhi bei direkten Umschaltmomenten früh aufnehmen und zweite Bälle vor dem eigenen Strafraum sichern.',
        'Die Young-Boys-Außen nach hinten binden, um das 4-4-2 in eine tiefe Sechserkette zu drücken und Räume im Rückraum zu öffnen.',
        'Bei Standards die starke Schweizer Lufthoheit respektieren und besonders auf zweite Bälle achten.',
        'Falls Mihailov und Ajdini ausfallen, die Ersatzbesetzung sofort aggressiv testen und den Qualitätsverlust auf der rechten Seite sowie im Abschluss ausnutzen.'
      ]
    },
    pressReport:{id:'2041-11-04-young-boys-ligaphase-vorbericht',href:'presse.html?id=2041-11-04-young-boys-ligaphase-vorbericht',label:'CHAMPIONS LEAGUE · LIGAPHASE',headline:'Nach der irischen Saison wartet Bern: Harps vor dem vierten Champions-League-Spiel'}
  };
  upsert(window.FM_CLUBS,clubData);

  const season=(window.FM_SEASONS||[]).find(x=>x.year===2041||x.season===2041);
  if(season){
    season.referenceDate='2041-11-04';
    season.latestHeadline='Champions League: Nach dem Ende der irischen Saison bereitet sich Finn Harps auf das Auswärtsspiel bei Young Boys vor.';
  }

  const report={
    id:'2041-11-04-young-boys-ligaphase-vorbericht',type:'Pressevorbericht',date:'2041-11-04',competition:'UEFA Champions League',
    fixtureDate:'05.11.2041',home:'Young Boys',away:'Finn Harps',location:'Bern · Auswärtsspiel · Champions-League-Ligaphase, 4. Spieltag',
    headline:'Nach der irischen Saison wartet Bern: Harps vor dem vierten Champions-League-Spiel',
    subheadline:'Young Boys setzt auf ein physisch starkes 4-4-2. Ajdini und Salhi bringen Tore, Trunz Kreativität, doch mit Mihailov und Ajdini sind zwei wichtige Offensivspieler unmittelbar vor dem Spiel als verletzt markiert.',
    label:'CHAMPIONS LEAGUE · LIGAPHASE · 4. SPIELTAG',
    heroStat:{label:'Finn Harps vor Spieltag 4',value:'9 Punkte',note:'3 Spiele · 3 Siege · 9:1 Tore'},
    backlink:{href:'klub.html?id=young-boys',label:'← ZUM YOUNG-BOYS-DOSSIER'},
    intro:'Die irische Saison ist beendet, jetzt gehört die Bühne wieder Europa. Finn Harps reist mit drei Siegen aus drei Champions-League-Spielen nach Bern. Young Boys bringt ein klassisches 4-4-2, viel Physis und eine robuste Defensive mit, doch die aktuelle Verletzungslage könnte die Schweizer Offensive schwächen.',
    sections:[
      {title:'Das 4-4-2 lebt von Physis und Ordnung',text:'Der Scoutbericht hebt Young Boys vor allem ohne Ball hervor. Kopfballtechnik, Kraft, Ausdauer, Schnelligkeit, Sprunghöhe, Deckung, Tackling, Antizipation und Stellungsspiel gehören zu den markierten Stärken.'},
      {title:'Ajdini ist der wichtigste Vollstrecker',text:'Renato Ajdini kommt im aktuellen Kaderexport auf elf Tore in 18 Einsätzen. Der 186 Zentimeter große Stürmer bildet mit Saber Salhi die nominelle Doppelspitze. Ajdini ist unmittelbar vor dem Spiel allerdings als verletzt markiert.'},
      {title:'Mihailov wäre die Formwaffe auf rechts',text:'Hristijan Mihailov steht bei drei Toren und drei Vorlagen in zwölf Einsätzen sowie einer Durchschnittsnote von 7,51. Auch er ist im aktuellen Export verletzt, weshalb die tatsächliche Startelf von der angezeigten Best-XI abweichen kann.'},
      {title:'Trunz bringt Kreativität',text:'Eugenio Trunz hat sechs Vorlagen in 20 Einsätzen gesammelt. Über die linke Seite bzw. aus eingerückten Positionen ist er der sichtbar produktivste Vorbereiter im exportierten Kader.'},
      {title:'Hohe Bälle wären ein Geschenk',text:'Mit dem 197 Zentimeter großen Sebastiano Zecchini und dem 187 Zentimeter großen Mohamed Boukhriss besitzt Young Boys ein sehr robustes Zentrum. Finn Harps dürfte mehr davon haben, die Abwehr mit flachen Kombinationen, Rückpässen und Läufen zwischen den Linien auseinanderzuziehen.'},
      {title:'Das Harps-System kann das 4-4-2 im Zentrum knacken',text:'Gegen zwei zentrale Mittelfeldspieler kann Finn Harps mit seiner Ein-Stürmer-Struktur und zusätzlichen Spielern zwischen den Linien Überzahlen schaffen. Der Scoutbericht markiert zudem ein breites 4-3-3 mit defensivem Mittelfeld als problematisches gegnerisches Grundmuster.'}
    ],
    strengthsTitle:'WAS YOUNG BOYS GEFÄHRLICH MACHT',strengthsHeading:'Physis, Luftduelle und zwei echte Stürmer',
    strengths:['Starke Arbeit ohne Ball','Kopfballtechnik und Sprunghöhe','Kraft und Ausdauer','Gute Deckung und Stellungsspiel','Ajdini: 11 Tore in 18 Einsätzen','Salhi: 7 Tore und 3 Vorlagen','Trunz: 6 Vorlagen','Robuste Innenverteidigung mit Zecchini (197 cm) und Boukhriss (187 cm)'],
    vulnerabilitiesTitle:'WO FINN HARPS ANSETZEN KANN',vulnerabilitiesHeading:'Zentrale Überzahl statt Flankenschlacht',
    vulnerabilities:['4-4-2 bietet im Zentrum Räume für zusätzliche Harps-Mittelfeldspieler','4-3-3 DM breit wird im Scoutbericht als problematisches gegnerisches Muster genannt','Mihailov und Ajdini sind im aktuellen Export verletzt','Hohe Bälle spielen der Schweizer Innenverteidigung in die Karten','Flache Kombinationen und Rückraumläufe können die kompakte Linie auseinanderziehen'],
    keyDuelsTitle:'SCHLÜSSELDUELLE',keyDuelsHeading:'Wo das Spiel kippen kann',
    keyDuels:[
      {title:'Harps-Zentrum gegen Bollhalder und Dumoulin',text:'Young Boys stellt nominell nur zwei zentrale Mittelfeldspieler. Finn Harps kann diesen Raum mit zusätzlichen Bewegungen zwischen den Linien überladen.'},
      {title:'Escárcega gegen Zecchini/Boukhriss',text:'Gegen 197 und 187 Zentimeter sollte Escárcega nicht zum Zielspieler für hohe Bälle degradiert werden. Seine Technik und Bewegung sind wertvoller, wenn er zwischen den Verteidigern auf flache Zuspiele wartet.'},
      {title:'Harps-Abwehr gegen Ajdini/Salhi',text:'Falls Ajdini rechtzeitig fit wird, muss Finn Harps die Doppelspitze bei direkten Angriffen und zweiten Bällen konsequent aufnehmen. Falls er ausfällt, verliert Young Boys seinen sichtbar produktivsten Vollstrecker.'}
    ],
    verdictHeading:'Favorit, aber kein Spiel für Leichtsinn',
    verdict:'Finn Harps geht nach drei Siegen aus drei Champions-League-Spielen als Favorit in das Duell. Young Boys besitzt genug Physis und Strafraumpräsenz, um ein unsauberes Harps-Spiel zu bestrafen. Kontrolliert Finn Harps jedoch das Zentrum und vermeidet planlose hohe Bälle, spricht das Matchup klar für den irischen Meister.',
    sources:['FM-Scoutbericht Young Boys · 04.11.2041','Young-Boys-Kaderexport · 04.11.2041']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  upsert(window.FM_NEWS,{
    id:'2041-11-04-young-boys-preview',date:'2041-11-04',season:2041,category:'Champions League',accent:'yellow',featured:true,
    eyebrow:'CHAMPIONS LEAGUE · 4. SPIELTAG',
    title:'Bern wartet: Harps vor dem Duell mit Young Boys',
    summary:'Young Boys bringt ein physisches 4-4-2 mit. Ajdini und Mihailov sind im aktuellen Kaderexport allerdings als verletzt markiert.',
    href:'presse.html?id=2041-11-04-young-boys-ligaphase-vorbericht',
    entities:['finn-harps','young-boys','renato-ajdini','saber-salhi','hristijan-mihailov','season-2041']
  });
})();