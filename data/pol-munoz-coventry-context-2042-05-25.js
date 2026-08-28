(()=>{
  const reports=window.FM_PRESS_REPORTS||[];
  const updates=window.FM_PLAYER_UPDATES||[];
  const news=window.FM_NEWS||[];

  const portrait=reports.find(item=>item&&item.id==='2042-05-25-pol-munoz-portrait-von-coventry-zur-wm');
  if(portrait){
    portrait.subheadline='Sevilla bildete ihn aus. Danach spielte Pol Muñoz 40 Championship-Partien für einen Coventry-Absteiger in einer miserablen finanziellen Lage und mit schlechten Trainings- und Jugendeinrichtungen. Finn Harps machte aus ihm einen 163er Stammspieler und spanischen WM-Fahrer.';
    portrait.intro='Pol Muñoz ist vielleicht die sauberste Fallstudie dafür, was Finn Harps inzwischen mit Spielerkarrieren macht. Er war kein fertiger Weltstar, als er nach Donegal kam. Nach seiner Ausbildung im Sevilla-System landete er bei Coventry City: 40 Championship-Spiele in einer Abstiegssaison, ein Klub in einer miserablen finanziellen Situation und mit bereits damals schlechten Trainings- und Jugendeinrichtungen. Finn Harps sah darin keinen Makel, sondern Entwicklungspotenzial. Heute ist Muñoz Stammspieler in Donegal und Teil des spanischen WM-Kaders.';
    portrait.sections=portrait.sections||[];

    const coventry=portrait.sections.find(section=>section&&section.title&&section.title.startsWith('Coventry:'));
    if(coventry){
      coventry.title='Coventry: Stammspieler bei einem Absteiger';
      coventry.text='2040/41 wechselte Muñoz ablösefrei nach Coventry City und absolvierte 40 Ligaspiele in der EFL Championship. Zwei Tore, neun Vorlagen und eine Durchschnittsnote von 6,80 entstanden nicht in einem stabilen Entwicklungsprojekt, sondern bei einem Absteiger. Coventry befand sich in einer miserablen finanziellen Lage und fiel anschließend in die League One. Muñoz bekam dort wertvolle Erwachsenenminuten, musste sie aber in einem sportlich und strukturell schwierigen Umfeld sammeln.';
    }

    const infrastructure=portrait.sections.find(section=>section&&section.title==='Die Infrastruktur macht den Kontrast sichtbar');
    if(infrastructure){
      infrastructure.title='Schlechte Anlagen waren schon damals Realität';
      infrastructure.text='Der Infrastrukturvergleich ist kein nachträglicher Zufall: Als Muñoz für Coventry spielte, waren die Trainings- und Jugendeinrichtungen bereits genauso schwach wie im aktuellen Vereinsprofil. Dazu kam die miserable finanzielle Situation des späteren Absteigers. Genau deshalb ist der Sprung nach Donegal so relevant: Finn Harps bot ihm nicht nur europäischen Fußball, sondern einen fundamentalen Wechsel der täglichen Entwicklungsbedingungen.';
    }

    const ending=portrait.sections.find(section=>section&&section.title&&section.title.startsWith('Nicht „aus League One'));
    if(ending){
      ending.title='Vom Championship-Absteiger direkt in eine andere Fußballwelt';
      ending.text='Die präzise Geschichte ist härter als die verkürzte League-One-Erzählung: Muñoz spielte 2040/41 in der Championship, aber für einen Verein, der abstieg, finanziell massiv unter Druck stand und schon damals über schlechte Trainings- und Jugendeinrichtungen verfügte. Finn Harps zahlte anschließend €12,95 Millionen und setzte bewusst darauf, dass der Spieler in einem deutlich besseren Umfeld noch nicht ausgeschöpft war. Wenig später steht er mit Spanien vor einer Weltmeisterschaft.';
    }

    portrait.verdictHeading='Ein Transfer, der den Wert von Umfeld und Entwicklung zeigt';
    portrait.verdict='Pol Muñoz ist kein Spieler, der einfach von einem starken englischen Projekt nach Donegal weitergereicht wurde. Er kam aus einer Abstiegsmannschaft mit miserabler finanzieller Lage und schlechten Entwicklungsbedingungen. Sevilla gab ihm die Ausbildung, Coventry gab ihm trotz schwieriger Umstände die Erwachsenenminuten, Finn Harps gab ihm schließlich die Infrastruktur und Bühne, auf der sein Potenzial explodieren konnte. Dass Spanien ihn nun zur WM mitnimmt, macht diesen Weg zu einer der stärksten Entwicklungsgeschichten des Saves.';
  }

  const milestone=updates.find(item=>item&&item.id==='2042-05-23-pol-munoz-spain-world-cup-story');
  if(milestone){
    milestone.title='Vom Championship-Absteiger in Spaniens WM-Kader';
    milestone.detail='Pol Muñoz spielte 2040/41 40 Championship-Partien für Coventry City, das in einer miserablen finanziellen Situation steckte, bereits damals schlechte Trainings- und Jugendeinrichtungen hatte und abstieg. Über Finn Harps schaffte er anschließend den Sprung in Spaniens WM-Kader.';
  }

  const portraitUpdate=updates.find(item=>item&&item.id==='2042-05-25-pol-munoz-portrait-update');
  if(portraitUpdate){
    portraitUpdate.detail='Mit 21 Jahren, Fähigkeit 163 und einem Wert von €29–32 Mio gehört Pol Muñoz zum spanischen WM-Aufgebot. Zwei Jahre zuvor spielte er noch für einen Coventry-Absteiger in miserabler finanzieller Lage und mit bereits damals schlechten Trainings- und Jugendeinrichtungen.';
  }

  const wcReport=reports.find(item=>item&&item.id==='2042-05-23-finn-harps-20-spieler-world-cup');
  if(wcReport&&Array.isArray(wcReport.sections)){
    const pol=wcReport.sections.find(section=>section&&section.title==='Pol Muñoz: der Weg, der hängen bleibt');
    if(pol){
      pol.text='Kaum eine Nominierung erzählt die Entwicklung des Klubs besser als die von Pol Muñoz. Er kam nach 40 Championship-Spielen für einen Coventry-Absteiger, der finanziell massiv unter Druck stand und bereits damals schlechte Trainings- und Jugendeinrichtungen hatte. Finn Harps investierte €12,95 Millionen, gab ihm ein völlig anderes Entwicklungsumfeld und nun steht er im spanischen WM-Kader.';
    }
  }

  const fanReport=reports.find(item=>item&&item.id==='2042-05-23-world-cup-fans-donegal');
  if(fanReport&&Array.isArray(fanReport.sections)){
    const pol=fanReport.sections.find(section=>section&&section.title==='Pol bekommt besonders viel Liebe');
    if(pol){
      pol.text='Bei Muñoz reagieren die Fans fast persönlicher als bei manchem etablierten Star. Er kam aus einer Coventry-Mannschaft, die abstieg, finanziell am Limit war und schon damals schlechte Trainings- und Jugendeinrichtungen hatte. Dass ausgerechnet dieser Spieler nun mit Spanien zur WM fährt, passt perfekt zum Selbstbild der Harps: Hier sollen Karrieren nicht verwaltet, sondern verändert werden.';
    }
    if(Array.isArray(fanReport.fanVoices)){
      fanReport.fanVoices=fanReport.fanVoices.map(line=>line.includes('Pol von League One')?'„Pol vom Championship-Absteiger mit schlechten Anlagen zu Spanien. Genau deshalb liebe ich diesen Klub.“':line);
    }
  }

  const mediaReport=reports.find(item=>item&&item.id==='2042-05-23-world-cup-europe-world-media');
  if(mediaReport&&Array.isArray(mediaReport.sections)){
    const spain=mediaReport.sections.find(section=>section&&section.title==='Spanien');
    if(spain){
      spain.text='Pol Muñoz ist die aufmerksamkeitsstärkste Einzelgeschichte. Vor seinem Wechsel nach Donegal spielte er 40 Championship-Partien für einen Coventry-Absteiger in miserabler finanzieller Lage und mit schlechten Trainings- und Jugendeinrichtungen. Dass er über Finn Harps nun ohne vorheriges A-Länderspiel in Spaniens WM-Kader landet, liefert eine außergewöhnlich starke Erzählung über Scouting, Umfeld und Entwicklung.';
    }
  }

  const portraitNews=news.find(item=>item&&item.id==='2042-05-25-pol-munoz-portrait');
  if(portraitNews){
    portraitNews.summary='Mit 21 Jahren, Fähigkeit 163 und einem Wert von €29–32 Mio fährt Pol Muñoz zur WM. Vor Finn Harps spielte er für einen Championship-Absteiger in miserabler finanzieller Lage und mit bereits damals schlechten Trainings- und Jugendeinrichtungen.';
  }

  const season=(window.FM_SEASONS||[]).find(item=>item&&(item.year===2042||item.season===2042));
  if(season&&season.changes&&Array.isArray(season.changes.notes)){
    season.changes.notes=season.changes.notes.map(note=>note.includes('Pol Muñoz schafft den Sprung aus der dritten englischen Liga')?'23.05.2042: 20 Spieler von Finn Harps werden für die WM 2042 nominiert. Zehn vertreten Irland, zwei Italien, zwei Schottland; Ghana, Mexiko, Spanien, Schweiz, Argentinien und Brasilien stellen je einen Harps-Spieler. Pol Muñoz schafft nach 40 Championship-Spielen für einen finanziell angeschlagenen Coventry-Absteiger mit schlechten Trainings- und Jugendeinrichtungen über Finn Harps den Sprung in Spaniens WM-Kader.':note);
  }
})();