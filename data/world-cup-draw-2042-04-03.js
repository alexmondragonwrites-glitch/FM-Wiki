(()=>{
  window.FM_WORLD_CUP=window.FM_WORLD_CUP||{};
  window.FM_IRELAND=window.FM_IRELAND||{};
  window.FM_PRESS_REPORTS=window.FM_PRESS_REPORTS||[];
  window.FM_NEWS=window.FM_NEWS||[];

  const upsert=(list,item)=>{
    const index=list.findIndex(entry=>entry&&entry.id===item.id);
    if(index>=0)list[index]=item;else list.push(item);
  };

  const drawDate='2042-04-03';
  const reportId='2042-04-03-world-cup-auslosung-irland-gruppe-k';
  const groups={
    A:['England','Mali','Paraguay','Serbien'],
    B:['Argentinien','Katar','Nigeria','Schottland'],
    C:['Algerien','Belgien','Iran','Uruguay'],
    D:['Jamaika','Niederlande','Schweden','Thailand'],
    E:['Ecuador','Portugal','Senegal','V.A.E.'],
    F:['Mexiko','Neuseeland','Österreich','Südkorea'],
    G:['Italien','Kuba','Marokko','Schweiz'],
    H:['Dänemark','Elfenbeinküste','Haiti','Saudi-Arabien'],
    I:['Australien','Chile','Frankreich','USA'],
    J:['Deutschland','Ghana','Kolumbien','Ukraine'],
    K:['Brasilien','China','Irland','Südafrika'],
    L:['Barbados','DR Kongo','Japan','Spanien']
  };

  window.FM_WORLD_CUP['2042']={
    tournament:'FIFA World Cup 2042',
    drawDate,
    hosts:['England','Schottland'],
    defendingChampion:'Frankreich',
    openingDay:'2042-06-12',
    groups,
    ireland:{
      group:'K',
      opponents:['Brasilien','China','Südafrika'],
      headline:'Irland landet mit Brasilien, China und Südafrika in Gruppe K.',
      context:'Nur wenige Monate nach dem 1:2 in der Finalissima trifft Irland bei der WM erneut auf Brasilien.'
    }
  };

  Object.assign(window.FM_IRELAND,{
    updated:'03.04.2042',
    nextCompetition:'FIFA World Cup 2042',
    worldCup2042:{
      status:'Ausgelost',
      drawDate,
      group:'K',
      teams:groups.K,
      opponents:['Brasilien','China','Südafrika'],
      hosts:['England','Schottland'],
      defendingChampion:'Frankreich',
      openingDay:'12.06.2042',
      note:'Irland wurde in Gruppe K gemeinsam mit Brasilien, China und Südafrika gelost. Das Duell mit Brasilien ist die Neuauflage der Finalissima vom Januar 2042.'
    },
    latestHeadline:'WM-Auslosung 2042: Irland trifft in Gruppe K auf Brasilien, China und Südafrika.'
  });

  const report={
    id:reportId,
    type:'Auslosung',
    date:drawDate,
    competition:'FIFA World Cup 2042',
    fixtureDate:'Gruppenphase · Sommer 2042',
    headline:'Hammergruppe K: Irland bekommt Brasilien, China und Südafrika',
    subheadline:'Die WM-Auslosung ist durch. Irland landet in Gruppe K und trifft dort erneut auf Brasilien, dazu auf China und Südafrika. Titelverteidiger Frankreich spielt in Gruppe I, Gastgeber England in Gruppe A und Schottland in Gruppe B.',
    label:'FIFA WORLD CUP 2042 · AUSLOSUNG · 03.04.2042',
    heroStat:{label:'IRLAND',value:'GRUPPE K',note:'Brasilien · China · Südafrika'},
    backlink:{href:'nationalteam.html',label:'← ZUM NATIONALTEAM'},
    intro:'Die Route durch die WM-Gruppenphase steht fest. Irland bekommt mit Brasilien sofort einen Gegner aus der absoluten Weltspitze zugelost. China und Südafrika komplettieren Gruppe K. Besonders pikant: Das Wiedersehen mit Brasilien folgt nur wenige Monate nach der dramatischen 1:2-Niederlage in der Finalissima.',
    sections:[
      {title:'Neuauflage der Finalissima',text:'Brasilien und Irland sehen sich schneller wieder als erwartet. Im Januar verlor Irland die Finalissima erst in der 90.+6 Minute mit 1:2. Bei der WM folgt nun das nächste Kapitel dieses Duells, diesmal schon in der Gruppenphase.'},
      {title:'China und Südafrika komplettieren Gruppe K',text:'Neben Brasilien trifft Irland auf China und Südafrika. Damit ist die Gruppe stilistisch breit aufgestellt und bietet neben dem Schwergewicht Brasilien zwei Gegner, gegen die Irland seine inzwischen gewachsene internationale Stellung bestätigen muss.'},
      {title:'Die großen Namen verteilen sich über zwölf Gruppen',text:'Titelverteidiger Frankreich wurde mit Australien, Chile und den USA in Gruppe I gelost. Deutschland spielt gegen Ghana, Kolumbien und die Ukraine. Spanien bekommt Barbados, DR Kongo und Japan, während Portugal in Gruppe E auf Ecuador, Senegal und die V.A.E. trifft.'},
      {title:'Gastgeber auf zwei Gruppen verteilt',text:'England führt Gruppe A mit Mali, Paraguay und Serbien an. Schottland spielt in Gruppe B gegen Argentinien, Katar und Nigeria. Die WM beginnt laut Turnierübersicht am 12. Juni 2042.'}
    ],
    verdictHeading:'Schwer, aber keine Todesgruppe',
    verdict:'Brasilien macht Gruppe K sofort prominent, aber für Irland ist diese Auslosung keineswegs ein Schreckensszenario. China und Südafrika sind ernsthafte Gegner, doch die Mannschaft hat in den vergangenen Jahren genug internationale Substanz aufgebaut, um das Weiterkommen klar ins Visier zu nehmen. Das Duell mit Brasilien ist eher Gradmesser als Existenzfrage.',
    allGroups:groups,
    sources:['FM-Wettbewerbsübersicht FIFA World Cup 2042 · Auslosung · 03.04.2042']
  };
  upsert(window.FM_PRESS_REPORTS,report);

  (window.FM_NEWS||[]).forEach(item=>{if(item.featured)item.featured=false;});
  upsert(window.FM_NEWS,{
    id:'2042-04-03-world-cup-draw-ireland-group-k',
    date:drawDate,
    season:2042,
    category:'Nationalteam',
    accent:'green',
    featured:true,
    eyebrow:'FIFA WORLD CUP 2042 · AUSLOSUNG',
    title:'Brasilien wartet wieder: Irland landet in WM-Gruppe K',
    summary:'Irland trifft bei der WM 2042 auf Brasilien, China und Südafrika. Das Brasilien-Duell ist die Neuauflage der Finalissima vom Januar.',
    href:`presse.html?id=${reportId}`,
    entities:['ireland','brazil','china','south-africa','world-cup-2042']
  });
})();