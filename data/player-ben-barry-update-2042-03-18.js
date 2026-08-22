(()=>{
  window.FM_PLAYERS=window.FM_PLAYERS||[];
  window.FM_PLAYER_UPDATES=window.FM_PLAYER_UPDATES||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const player=window.FM_PLAYERS.find(x=>x.id==='ben-barry'||x.name==='Ben Barry');
  if(player){
    Object.assign(player,{
      profileDate:'2042-03-18',
      birthDate:'2023-07-20',birthPlace:'Mayo, Irland',age:18,height:'182 cm',weight:'75 kg',
      personality:'Professionell',mediaDescription:'Wunderknabe',preferredFoot:'Rechts sehr stark · links gut',
      contractUntil:'31.12.2045',wage:'€12.250 pro Woche',transferValue:'€21Mio – €26Mio',
      status:'Talent vor Durchbruch',availability:'Einsatzbereit',currentAbilityNumeric:138,potentialAbilityLabel:'ca. 4½ Sterne',
      bestRole:'Stoßstürmer',systemRole:'Stoßstürmer / kompletter Stürmer',rating:5,
      summary:'Ben Barry ist mit 18 längst mehr als nur ein schneller Abschlussstürmer. Seit dem Profil vom November 2040 haben sich 22 der damals gespeicherten Attribute verbessert, keines ist gefallen. Abschluss 16, Antritt 17 und Zielstrebigkeit 19 bleiben die Spitze; entscheidend ist aber, dass Ohne Ball und Nervenstärke inzwischen jeweils 13 erreicht haben.',
      analysis:'Die Entwicklung geht genau in die gewünschte Richtung. Barry war 2040 bereits ein explosiver Torjäger, dessen Verbindungsspiel, Physis und Bewegung noch hinterherhinkten. Bis März 2042 sind besonders Ohne Ball, Nervenstärke, Ausdauer und Kraft jeweils um zwei Punkte gestiegen. Damit wird aus dem reinen Tiefenläufer zunehmend ein Stürmer, der bessere Räume findet, unter Druck sauberer abschließt und körperlich mehr Minuten tragen kann. Passen 10 und Teamwork 9 bleiben die klarsten Grenzen für eine stärker verbindende Rolle.',
      strengths:['Zielstrebigkeit 19','Antritt 17 und Beweglichkeit 17','Abschluss 16','Dribbling 15 und Technik 14','Ohne Ball 13 und Nervenstärke 13','Professionelle Persönlichkeit · Medienbeschreibung Wunderknabe'],
      risks:['Passen 10 und Teamwork 9 bleiben für eine verbindende Neunerrolle ausbaufähig','Kopfballtechnik 8 trotz Sprunghöhe 12','Konzentration 9 bleibt unter dem Niveau seiner Offensivwerte','Hohe Verletzungsanfälligkeit laut aktuellem Profil'],
      future:'Barry weiter als zentralen Stürmer entwickeln und ihm echte Pflichtspielminuten geben. Der größte Hebel ist jetzt weniger der Abschluss als die Vervollständigung des Profils: Passen, Teamwork und Antizipation können ihn von einem sehr gefährlichen Vollstrecker zu einem komplett einsetzbaren europäischen Stürmer machen.',
      verdict:'Vom Rohdiamanten zum echten Escárcega-Nachfolger',
      deepAnalysisTitle:'Wie Barry in Richtung erster Sturmreihe wächst',
      traits:['Schießt bei erster Gelegenheit'],
      attributes:{
        Technik:{Abschluss:16,Ballannahme:11,Deckung:7,Dribbling:15,Ecken:7,Elfmeter:8,Flanken:8,Freistöße:11,Kopfballtechnik:8,Passen:10,Tackling:5,Technik:14,'Weite Einwürfe':2,Weitschüsse:8},
        Mental:{Aggressivität:11,Antizipation:11,Einsatzfreude:12,Entscheidungen:13,Flair:14,Führungsqualitäten:14,Konzentration:9,Mut:10,Nervenstärke:13,'Ohne Ball':13,Stellungsspiel:7,Teamwork:9,Übersicht:11,Zielstrebigkeit:19},
        Physis:{Antritt:17,Ausdauer:12,Balance:16,Beweglichkeit:17,Grundfitness:14,Kraft:12,Schnelligkeit:15,Sprunghöhe:12}
      },
      developmentSnapshot:{
        baselineDate:'2040-11-09',currentDate:'2042-03-18',improvedAttributes:22,declinedAttributes:0,
        note:'Der alte Wiki-Wert currentAbility „14“ stammt aus einer früheren Darstellungslogik und wird deshalb nicht direkt mit dem aktuellen numerischen FM-Wert 138 verglichen.',
        majorChanges:[
          {attribute:'Deckung',from:5,to:7,delta:2},
          {attribute:'Nervenstärke',from:11,to:13,delta:2},
          {attribute:'Ohne Ball',from:11,to:13,delta:2},
          {attribute:'Ausdauer',from:10,to:12,delta:2},
          {attribute:'Kraft',from:10,to:12,delta:2},
          {attribute:'Abschluss',from:15,to:16,delta:1},
          {attribute:'Antritt',from:16,to:17,delta:1},
          {attribute:'Dribbling',from:14,to:15,delta:1}
        ],
        contextChanges:{
          age:'17 → 18',weight:'72 kg → 75 kg',personality:'Antrieb → Professionell',mediaDescription:'Stürmer → Wunderknabe',
          marketValue:'€16,5–21 Mio. → €21–26 Mio.',wage:'€2.400/Woche → €12.250/Woche',contract:'31.12.2042 → 31.12.2045',status:'Perspektivspieler → Talent vor Durchbruch'
        }
      },
      deepAnalysis:[
        {title:'22 grüne Pfeile, kein Rückschritt',text:'Von den 36 Attributen, die sowohl im Profil vom 9. November 2040 als auch am 18. März 2042 gespeichert sind, haben sich 22 verbessert und keines verschlechtert. Das ist ein ausgesprochen breiter Entwicklungsschub statt eines einzelnen Attributsprungs.'},
        {title:'Die wichtigsten +2 liegen genau richtig',text:'Nervenstärke 11→13 und Ohne Ball 11→13 verbessern zwei zentrale Stürmerqualitäten. Ausdauer 10→12 und Kraft 10→12 machen Barry gleichzeitig belastbarer und weniger abhängig von kurzen explosiven Phasen.'},
        {title:'Die Torjägerbasis wächst weiter',text:'Abschluss steigt von 15 auf 16, Dribbling von 14 auf 15 und Antritt von 16 auf 17. Zielstrebigkeit bleibt bei herausragenden 19. Seine ursprünglichen Waffen stagnieren also nicht, während die Nebenattribute aufholen.'},
        {title:'Noch nicht komplett, aber viel kompletter',text:'Passen 10, Teamwork 9 und Antizipation 11 zeigen, wo noch Luft liegt. Barry ist weiterhin eher Endpunkt als Verbindungsspieler. Der Abstand zwischen seinen Spitzenwerten und dem Rest des Profils wird aber deutlich kleiner.'},
        {title:'Kaderplanung bekommt ein Luxusproblem',text:'Mit Escárcega als etabliertem Stürmer und Barry als 18-jährigem Wunderknaben entsteht bereits intern die nächste Generation für die Neun. Wenn Barry sein Potenzial weiter so schnell in aktuelle Qualität umsetzt, muss Finn Harps den künftigen Stammstürmer möglicherweise gar nicht auf dem Transfermarkt suchen.'}
      ]
    });
  }

  upsert(window.FM_PLAYER_UPDATES,{
    id:'2042-03-18-ben-barry-entwicklungssprung',date:'2042-03-18',player:'Ben Barry',type:'development',
    title:'Barry macht den nächsten Entwicklungssprung',
    detail:'Der 18-jährige Wunderknabe steht bei numerischer Fähigkeit 138. Gegenüber dem gespeicherten Profil vom 09.11.2040 sind 22 vergleichbare Attribute gestiegen und keines gefallen; besonders Ohne Ball, Nervenstärke, Ausdauer und Kraft legen jeweils um zwei Punkte zu.'
  });

  upsert(window.FM_NEWS,{
    id:'2042-03-18-ben-barry-entwicklung',date:'2042-03-18',type:'Spielerentwicklung',importance:'normal',
    title:'22 Verbesserungen: Ben Barry klopft an die erste Sturmreihe',
    summary:'Abschluss 16, Antritt 17, Zielstrebigkeit 19 und deutliche Fortschritte bei Ohne Ball, Nervenstärke und Physis: Der 18-Jährige entwickelt sich vom reinen Torjäger zu einem zunehmend vollständigen Stürmer.',
    href:'spieler.html?id=ben-barry'
  });
})();