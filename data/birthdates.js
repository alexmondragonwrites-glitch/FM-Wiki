window.FM_BIRTHDATES={
"paulo-henrique":"2014-05-10","daryl-frame":"2021-03-30","jim-oneill":"2013-12-12","cormac-okane":"2015-12-31","amir-masic":"2018-09-20","vinicius":"2013-09-02","basile-rouviere":"2011-09-30","billy-walker":"2021-12-10","dom-docherty":"2017-04-11","diego-fernandez":"2020-04-11","kevin-kelly":"2019-12-07","mareks-istrankins":"2022-07-18","romano-maisto":"2020-06-12","justin-ramsey":"2019-06-26","evan-reilly":"2022-11-18","eduardo-blanco":"2012-06-19","ben-barry":"2023-07-20","callum-brennan":"2021-10-07","gustavo-da-silva":"2021-02-25","torric-bruce":"2019-02-17","fionn-gavin":"2024-06-17","giacomo-papini":"2013-05-03"
};
window.FM_DATE_UTILS={
 ageAt(birthDate,referenceDate){if(!birthDate)return null;const b=new Date(birthDate+'T00:00:00'),r=new Date(referenceDate+'T00:00:00');let age=r.getFullYear()-b.getFullYear();if(r.getMonth()<b.getMonth()||(r.getMonth()===b.getMonth()&&r.getDate()<b.getDate()))age--;return age;},
 formatBirthDate(value){if(!value)return 'Noch nicht erfasst';const [y,m,d]=value.split('-');return `${d}.${m}.${y}`;}
};
(window.FM_PLAYERS||[]).forEach(p=>{p.birthDate=window.FM_BIRTHDATES[p.id]||p.birthDate||null;});