(()=>{
  const season=(window.FM_SEASONS||[]).find(item=>item.year===2041);
  if(!season)return;

  season.status='Laufend';
  season.referenceDate='2041-01-12';
  season.snapshotDate='2041-01-12';
  season.summary='Die Saison 2041 beginnt mit einem 3:0-Testspielsieg bei Cercle Brugge, dem verletzungsbedingten Ausfall von Dom Docherty und einem historischen Infrastrukturentscheid: Finn Harps hat die Planung eines neuen Stadions mit rund 20.000 Plätzen angestoßen.';
  season.changes={
    ...(season.changes||{}),
    notes:[
      ...((season.changes?.notes||[]).filter(note=>!String(note).includes('neuen Stadions'))),
      '12.01.2041: Der Vorstand leitet die Planung eines neuen Stadions mit rund 20.000 Plätzen ein; die Pläne sollen voraussichtlich bis Januar 2043 vorliegen.',
      'Standort, Kosten, Ausstattung und Bauzeitraum sind noch offen. Der endgültige Baubeschluss ist noch nicht gefallen.'
    ]
  };
  season.milestones=[
    ...((season.milestones||[]).filter(item=>item.id!=='2041-new-stadium-planning')),
    {
      id:'2041-new-stadium-planning',
      date:'2041-01-12',
      type:'Infrastruktur',
      title:'Planung für neues 20.000er-Stadion beginnt',
      summary:'Der Vorstand stößt das größte Infrastrukturprojekt der Vereinsgeschichte an. Die Planungsphase soll bis Januar 2043 abgeschlossen sein.'
    }
  ];
})();