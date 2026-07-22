(()=>{
  window.FM_CLUBS=window.FM_CLUBS||[];
  let club=window.FM_CLUBS.find(item=>item.id==='paris-saint-germain');
  if(!club){
    club={id:'paris-saint-germain',name:'Paris Saint-Germain',short:'PSG',country:'Frankreich',league:'Ligue 1 Uber Eats',scope:['Champions League'],meetings:[],checklist:{}};
    window.FM_CLUBS.push(club);
  }
  Object.assign(club,{
    name:'Paris Saint-Germain',short:'PSG',country:'Frankreich',league:'Ligue 1 Uber Eats',scope:['Champions League'],status:'complete',completion:88,season:2041,
    summary:'Paris Saint-Germain kommt als Dritter der Ligue 1 und nahezu gleichstarker Gegner zur letzten Partie der Champions-League-Ligaphase nach Donegal. Der 27 Spieler starke Kader verbindet enorme individuelle Qualität mit Flügelspiel, frühen Ballgewinnen auf den Außenbahnen und einer laufintensiven Offensive.',
    manager:'Offen',stadium:'Donegal Stadium · Auswärtsspiel',formation:'4-3-3 mit defensivem Mittelfeld',squadValue:'€1,309–1,660 Mrd.*',avgAge:'30,1',
    keyPlayers:['William Diallo','João Domingos Coentrão','David Bauduin','Tiago Costa','Luís Abreu'],
    tags:['Champions League','Ligaphase 2040/41','Flügelspiel','Dritter der Ligue 1','27 Spieler'],
    meetings:[{date:'29.01.2041',venue:'H',result:'offen'}],
    checklist:{profile:true,squad:true,tactics:true,transfers:false,meetings:true,history:false},
    squadMeta:{count:27,xiAvgAge:'29,5',knownValue:'€1,309–1,660 Mrd.*',contracts2041:6},
    probableXI:[
      {zone:'TW',name:'Guillaume Restes',role:'Mitspielender Torwart'},{zone:'RV',name:'David Bauduin',role:'Inverser Flügelverteidiger'},
      {zone:'IV',name:'Tiago Costa',role:'Innenverteidiger'},{zone:'IV',name:'Abdelrahman Hussein',role:'Kompromissloser Innenverteidiger'},
      {zone:'LV',name:'Maximiliano Acosta',role:'Inverser Außenverteidiger'},{zone:'DM',name:'Hassane Alzouma',role:'Abräumer'},
      {zone:'ZM',name:'Milan Kresoja',role:'Mezzala'},{zone:'ZM',name:'Eden Mbombo',role:'Mezzala'},
      {zone:'RA',name:'William Diallo',role:'Flügelspieler'},{zone:'LA',name:'Pouria Yousefi',role:'Inverser Außenstürmer'},
      {zone:'ST',name:'Luís Abreu',role:'Hängende Spitze'}
    ],
    scouting:{
      planHeading:'So wird Paris’ Flügelmaschine gebremst',
      strengths:[
        'PSG zeigt laut Datencenter in allen Kategorien deutlich überdurchschnittliche Leistungen und kommt mit positivem Match-Momentum nach Donegal.',
        'Der erwartete Stil ist Flügelspiel: frühe Ballgewinne auf den Außenbahnen, hinterlaufende Außenverteidiger und zahlreiche Hereingaben in den Strafraum.',
        'Die Laufleistung der Offensive weicht gewaltig von der Norm ab und macht Paris auch ohne Ball dauerhaft gefährlich.',
        'William Diallo erreicht in den Schlüsselwerten seiner kreativen Flügelrolle weit überdurchschnittliche Werte.',
        'Guillaume Restes weist in den defensiven Torwartkategorien überdurchschnittliche Leistungen auf.',
        'Einsatzfreude, Konzentration, Grundfitness, Aggressivität, Stellungsspiel, Entscheidungen, Antizipation, Übersicht und Tackling gehören zu den Mannschaftsstärken.'
      ],
      weaknesses:[
        'Hohe Bälle und die Lufthoheit der Torhüter zählen laut Scoutbericht nicht zu den Stärken.',
        'Die Torhüter neigen dazu, Bälle eher wegzufausten als sicher zu fangen.',
        'Daniel Anav befindet sich mit einer Formnote von 6,26 in den letzten fünf Spielen deutlich außer Form.',
        'Fünf der letzten 13 Gegentore fielen zwischen der 16. und 30. Minute der ersten Halbzeit.',
        'Vier von zehn Gegentorvorlagen in den letzten 19 Spielen entstanden innerhalb des Strafraums.',
        'Luís Abreu ist mit sieben Treffern bester Torschütze, liegt damit ligaweit aber nur auf Rang 15.',
        'Pouria Yousefi, Mario Ramírez und Jhonny Guanipa sind im Kaderexport verletzt geführt.'
      ],
      threats:[
        'William Diallo ist mit sieben Toren, sechs Vorlagen und einer Durchschnittsnote von 7,34 der produktivste und formstärkste Offensivspieler.',
        'João Domingos Coentrão verbindet das Zentrum und den linken Halbraum; sechs Vorlagen und ein Marktwert von bis zu 137 Mio. Euro zeigen seine Bedeutung.',
        'Luís Abreu arbeitet als hängende Spitze zwischen den Linien und ist mit sieben Toren der beste PSG-Schütze.',
        'Maik de Bone bringt als alternative Spitze fünf Tore und sechs Vorlagen aus 18 Einsätzen mit.',
        'David Bauduin und die inversen Außenverteidiger können die Flügelüberladungen in zentrale Passdreiecke verwandeln.',
        'Tiago Costa und Abdelrahman Hussein geben dem Aufbau eine robuste, spielstarke Innenverteidigung.'
      ],
      plan:[
        'Die Flügel nicht isoliert verteidigen: Außenverteidiger, Achter und Flügelspieler müssen Diallo sowie die hinterlaufenden Außenverteidiger gemeinsam aufnehmen.',
        'Paris auf eine Seite lenken, den Rückpass ins Zentrum schließen und anschließend aggressiv auf den Ballführenden springen.',
        'Nach Ballgewinnen sofort die Räume hinter den aufrückenden Außenverteidigern attackieren.',
        'Im Zentrum O’Neill als Anker belassen, damit die beiden PSG-Mezzalas nicht gleichzeitig zwischen die Linien gelangen.',
        'Bei Hereingaben den ersten Pfosten und den Rückraum getrennt absichern; Abreu darf nicht frei aus der Tiefe nachstoßen.',
        'Offensiv hohe Bälle, zweite Bälle und aggressive Strafraumbesetzung nutzen, weil die Pariser Torhüter in der Luft und beim Fangen nicht unangreifbar sind.',
        'Zwischen der 16. und 30. Minute bewusst Druck erhöhen, da PSG in diesem Fenster auffällig viele Gegentore kassiert.',
        'Nach einer Führung nicht zu tief fallen: Paris besitzt genug Laufstärke und Kreativität, um einen passiven Block dauerhaft zu überladen.'
      ]
    },
    pressReport:{id:'2041-01-27-paris-saint-germain-vorbericht',href:'presse.html?id=2041-01-27-paris-saint-germain-vorbericht',label:'CHAMPIONS-LEAGUE-VORBERICHT · 27.01.2041',headline:'Die Flügelmaschine kommt nach Donegal',standfirst:'Paris Saint-Germain reist als nahezu gleichstarker Gegner mit enormer individueller Qualität und einem laufintensiven Flügelspiel an. Finn Harps muss Diallo kontrollieren, die Räume hinter den Außenverteidigern angreifen und Paris in dessen anfälliger Phase zwischen Minute 16 und 30 unter Druck setzen.'},
    squad:[
      {slot:'TW',info:'',name:'Guillaume Restes',position:'TW',nation:'FRA',height:'187 cm',weight:'84 kg',age:35,condition:'Ausgezeichnet · 94%',fitness:'94%',morale:'Exzellent',apps:'24',goals:'0',assists:'0',rating:7.17,value:'€13.5Mio - €16Mio',contract:'30/6/2041',agent:'Xavier Meynard'},
      {slot:'VR',info:'',name:'David Bauduin',position:'V (RL), FV (R)',nation:'FRA',height:'169 cm',weight:'66 kg',age:25,condition:'Ordentlich · 72%',fitness:'72%',morale:'Wirklich gut',apps:'23',goals:'0',assists:'1',rating:6.97,value:'€141Mio - €204Mio',contract:'30/6/2045',agent:'Damien Ferrer'},
      {slot:'VZR',info:'',name:'Abdelrahman Hussein',position:'V (Z)',nation:'QAT',height:'184 cm',weight:'78 kg',age:31,condition:'Ordentlich · 74%',fitness:'74%',morale:'Wirklich gut',apps:'27',goals:'1',assists:'0',rating:7.1,value:'Steht nicht zum Verkauf',contract:'30/6/2043',agent:'Noham Lemaître'},
      {slot:'VZL',info:'',name:'Maximiliano Acosta',position:'V (RLZ)',nation:'ARG',height:'185 cm',weight:'79 kg',age:28,condition:'Ordentlich · 72%',fitness:'72%',morale:'Scouting erforderlich',apps:'6 (7)',goals:'0',assists:'0',rating:6.92,value:'€24Mio - €36Mio',contract:'30/6/2043',agent:'Diego Souto'},
      {slot:'VL',info:'',name:'Byron Sepúlveda',position:'V/FV (L)',nation:'CHI',height:'174 cm',weight:'71 kg',age:30,condition:'Ordentlich · 74%',fitness:'74%',morale:'Exzellent',apps:'23 (1)',goals:'1',assists:'1',rating:7.09,value:'€43Mio - €62Mio',contract:'1/7/2041',agent:'Noham Lemaître'},
      {slot:'DM',info:'Unr',name:'Tom Tischler',position:'V (RZ), FV (R), DM',nation:'GER',height:'186 cm',weight:'80 kg',age:30,condition:'Ausgezeichnet · 90%',fitness:'90%',morale:'Scouting erforderlich',apps:'8 (2)',goals:'0',assists:'0',rating:6.98,value:'€18Mio - €23Mio',contract:'30/6/2043',agent:'Marlon Mayer'},
      {slot:'MZR',info:'',name:'Eden Mbombo',position:'V (R), DM, M (Z), OM (R)',nation:'FRA',height:'182 cm',weight:'78 kg',age:32,condition:'Gut · 77%',fitness:'77%',morale:'Hervorragend',apps:'15 (13)',goals:'2',assists:'3',rating:6.92,value:'€25Mio - €36Mio',contract:'30/6/2043',agent:'Florian Malandain'},
      {slot:'MZL',info:'',name:'João Domingos Coentrão',position:'M (Z), OM (RLZ)',nation:'POR',height:'168 cm',weight:'66 kg',age:30,condition:'Ordentlich · 70%',fitness:'70%',morale:'Wirklich gut',apps:'22 (1)',goals:'0',assists:'6',rating:7.1,value:'€113Mio - €137Mio',contract:'30/6/2043',agent:'David Dionísio'},
      {slot:'OMR',info:'',name:'Eduardo',position:'M/OM (R)',nation:'BRA',height:'178 cm',weight:'74 kg',age:27,condition:'Gut · 76%',fitness:'76%',morale:'Hervorragend',apps:'8 (12)',goals:'4',assists:'2',rating:7.26,value:'€39Mio - €47Mio',contract:'30/6/2044',agent:'David Thorpe'},
      {slot:'OML',info:'Ver',name:'Pouria Yousefi',position:'V/FV/OM (L)',nation:'IRN',height:'179 cm',weight:'73 kg',age:30,condition:'Verletzt',fitness:'-',morale:'Gut',apps:'20 (1)',goals:'3',assists:'2',rating:7.07,value:'€140Mio - €163Mio',contract:'30/6/2042',agent:'Noham Lemaître'},
      {slot:'STZ',info:'',name:'Maik de Bone',position:'ST (Z)',nation:'NED',height:'186 cm',weight:'79 kg',age:27,condition:'Ordentlich · 74%',fitness:'74%',morale:'Okay',apps:'9 (9)',goals:'5',assists:'6',rating:7.09,value:'€50Mio - €74Mio',contract:'30/6/2044',agent:'Bob Verberne'},
      {slot:'E1',info:'',name:'Warren Zaïre-Emery',position:'DM, M (Z)',nation:'FRA',height:'179 cm',weight:'75 kg',age:34,condition:'Ausgezeichnet · 91%',fitness:'91%',morale:'Gut',apps:'2 (12)',goals:'2',assists:'0',rating:6.79,value:'€120K - €4Mio',contract:'30/6/2041',agent:'Christian Lebeau'},
      {slot:'E2',info:'Vin',name:'Hugo Martins',position:'TW',nation:'POR',height:'181 cm',weight:'70 kg',age:29,condition:'Erstklassig · 100%',fitness:'100%',morale:'Scouting erforderlich',apps:'4',goals:'0',assists:'0',rating:7.17,value:'€15.5Mio - €18.5Mio',contract:'30/6/2043',agent:'Marco Sousa'},
      {slot:'E3',info:'Unr',name:'Ismail Hajib',position:'M (Z), OM (RZ)',nation:'BEL',height:'180 cm',weight:'74 kg',age:31,condition:'Gut · 82%',fitness:'82%',morale:'Geht so',apps:'1 (7)',goals:'0',assists:'1',rating:6.75,value:'€36Mio - €43Mio',contract:'30/6/2042',agent:'Fabio Consonni'},
      {slot:'E4',info:'Unr',name:'Juan Miguel Giner',position:'OM (RZ), ST (Z)',nation:'ESP',height:'181 cm',weight:'75 kg',age:33,condition:'Erstklassig · 100%',fitness:'100%',morale:'Ziemlich gut',apps:'0 (4)',goals:'0',assists:'0',rating:7.07,value:'€18Mio',contract:'30/6/2041',agent:'Giacomo Gherardi'},
      {slot:'E6',info:'Kar',name:'Rico Lewis',position:'V (RL), FV (R), DM, M (Z)',nation:'ENG',height:'171 cm',weight:'68 kg',age:36,condition:'Ausgezeichnet · 95%',fitness:'95%',morale:'Extrem gut',apps:'2 (4)',goals:'0',assists:'0',rating:6.7,value:'€45K - €450K',contract:'30/6/2041',agent:'Danny Lee'},
      {slot:'-',info:'',name:'Luís Abreu',position:'M/OM (Z), ST (Z)',nation:'POR',height:'181 cm',weight:'75 kg',age:32,condition:'Ausgezeichnet · 89%',fitness:'89%',morale:'Wirklich gut',apps:'19',goals:'7',assists:'2',rating:6.91,value:'Steht nicht zum Verkauf',contract:'30/6/2042',agent:'Luís Sousa'},
      {slot:'-',info:'Gel',name:'William Diallo',position:'M (RZ), OM (RLZ)',nation:'GHA',height:'174 cm',weight:'71 kg',age:28,condition:'Ausgezeichnet · 86%',fitness:'86%',morale:'Wirklich gut',apps:'20',goals:'7',assists:'6',rating:7.34,value:'€234Mio - €281Mio',contract:'30/6/2043',agent:'Noham Lemaître'},
      {slot:'-',info:'Unr',name:'Bernard Mitchell',position:'TW',nation:'CAN',height:'189 cm',weight:'81 kg',age:33,condition:'Erstklassig · 100%',fitness:'100%',morale:'Relativ gut',apps:'-',goals:'-',assists:'-',rating:null,value:'€100K - €4.9Mio',contract:'30/6/2042',agent:'Marco Sousa'},
      {slot:'-',info:'Unr',name:'Gonzalo Retamal',position:'OM (R), ST (Z)',nation:'CHI',height:'180 cm',weight:'74 kg',age:28,condition:'Ausgezeichnet · 86%',fitness:'86%',morale:'Ziemlich gut',apps:'18',goals:'5',assists:'1',rating:6.82,value:'€21Mio - €32Mio',contract:'30/6/2044',agent:'Javier Aravena'},
      {slot:'-',info:'Unr',name:'Daniel Anav',position:'TW',nation:'ISR',height:'190 cm',weight:'82 kg',age:31,condition:'Erstklassig · 100%',fitness:'100%',morale:'Scouting erforderlich',apps:'16',goals:'0',assists:'0',rating:6.34,value:'€210K - €2.1Mio',contract:'30/6/2042',agent:'Gontran Vanhecke'},
      {slot:'-',info:'Unz',name:'Modeste Mbombo',position:'V/FV (L)',nation:'USA',height:'170 cm',weight:'67 kg',age:31,condition:'Erstklassig · 100%',fitness:'100%',morale:'Relativ schlecht',apps:'1',goals:'0',assists:'0',rating:6.4,value:'€475K - €7.4Mio',contract:'30/6/2043',agent:'Lorre Gillain'},
      {slot:'-',info:'Ver',name:'Mario Ramírez',position:'DM, M (Z)',nation:'PER',height:'185 cm',weight:'81 kg',age:31,condition:'Verletzt',fitness:'-',morale:'Gut',apps:'23 (1)',goals:'3',assists:'4',rating:7.18,value:'€28Mio - €33Mio',contract:'30/6/2042',agent:'Bob Verberne'},
      {slot:'-',info:'',name:'Tiago Costa',position:'V (RZ)',nation:'POR',height:'186 cm',weight:'81 kg',age:30,condition:'Ausgezeichnet · 88%',fitness:'88%',morale:'Wirklich gut',apps:'25',goals:'2',assists:'1',rating:7.33,value:'€141Mio - €165Mio',contract:'30/6/2044',agent:'Noham Lemaître'},
      {slot:'-',info:'',name:'Milan Kresoja',position:'M/OM (Z)',nation:'SRB',height:'176 cm',weight:'71 kg',age:29,condition:'Ausgezeichnet · 90%',fitness:'90%',morale:'Exzellent',apps:'19 (3)',goals:'3',assists:'3',rating:7.13,value:'€43Mio - €59Mio',contract:'1/7/2041',agent:'Pol Sáez'},
      {slot:'-',info:'',name:'Hassane Alzouma',position:'V (RZ), DM, OM (R)',nation:'GER',height:'183 cm',weight:'77 kg',age:29,condition:'Gut · 84%',fitness:'84%',morale:'Wirklich gut',apps:'23',goals:'1',assists:'0',rating:7.05,value:'€119Mio - €139Mio',contract:'30/6/2042',agent:'Sebastian Ackerschott'},
      {slot:'-',info:'Ver',name:'Jhonny Guanipa',position:'OM (RLZ), ST (Z)',nation:'ITA',height:'170 cm',weight:'65 kg',age:24,condition:'Verletzt',fitness:'-',morale:'Scouting erforderlich',apps:'5 (5)',goals:'2',assists:'0',rating:7.04,value:'€46Mio - €55Mio',contract:'30/6/2044',agent:'Arturo Bonomo'}
    ]
  });
})();