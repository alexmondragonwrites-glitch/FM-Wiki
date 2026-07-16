window.FM_PLAYER_META={
"paulo-henrique":{"birthDate":"2014-05-10","source":"Profil-Screenshot"},
"torric-bruce":{"birthDate":"2019-02-17","source":"Profil-Screenshot"},
"daryl-frame":{"birthDate":"2021-03-30","source":"Profil-Screenshot"},
"justin-ramsey":{"birthDate":"2019-06-26","source":"Profil-Screenshot"},
"billy-walker":{"birthDate":"2021-12-10","source":"Profil-Screenshot"},
"callum-brennan":{"birthDate":"2021-10-07","source":"Profil-Screenshot"},
"jim-oneill":{"birthDate":"2013-12-12","source":"Profil-Screenshot"},
"cormac-okane":{"birthDate":"2015-12-31","source":"Profil-Screenshot"},
"amir-masic":{"birthDate":"2018-09-20","source":"Profil-Screenshot"},
"vinicius":{"birthDate":"2013-09-02","source":"Profil-Screenshot"},
"basile-rouviere":{"birthDate":"2011-09-30","source":"Profil-Screenshot"},
"dom-docherty":{"birthDate":"2017-04-11","source":"Profil-Screenshot"},
"diego-fernandez":{"birthDate":"2020-04-11","source":"Profil-Screenshot"},
"kevin-kelly":{"birthDate":"2019-12-07","source":"Profil-Screenshot"},
"mareks-istrankins":{"birthDate":"2022-07-18","source":"Profil-Screenshot"},
"romano-maisto":{"birthDate":"2020-06-12","source":"Profil-Screenshot"},
"evan-reilly":{"birthDate":"2022-11-18","source":"Profil-Screenshot"},
"eduardo-blanco":{"birthDate":"2012-06-19","source":"Profil-Screenshot"},
"ben-barry":{"birthDate":"2023-07-20","source":"Profil-Screenshot"},
"gustavo-da-silva":{"birthDate":"2021-02-25","source":"Profil-Screenshot"}
};
window.FM_AGE_AT=function(birthDate,referenceDate){if(!birthDate)return null;const b=new Date(`${birthDate}T00:00:00Z`),r=new Date(`${referenceDate}T00:00:00Z`);let age=r.getUTCFullYear()-b.getUTCFullYear();if(r.getUTCMonth()<b.getUTCMonth()||(r.getUTCMonth()===b.getUTCMonth()&&r.getUTCDate()<b.getUTCDate()))age--;return age;};
(window.FM_PLAYERS||[]).forEach(p=>{const meta=window.FM_PLAYER_META[p.id];if(meta)Object.assign(p,meta);});