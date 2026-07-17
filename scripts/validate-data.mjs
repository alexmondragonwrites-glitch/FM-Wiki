import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const errors=[];
const warnings=[];
const rel=file=>path.relative(root,file).replaceAll(path.sep,'/');
const exists=file=>fs.existsSync(path.join(root,file));

function walk(dir){
  return fs.readdirSync(dir,{withFileTypes:true}).flatMap(entry=>{
    if(entry.name==='.git'||entry.name==='node_modules')return [];
    const full=path.join(dir,entry.name);
    return entry.isDirectory()?walk(full):[full];
  });
}
function browserContext(seed={}){
  const context={console,...seed};
  context.window=context;
  context.globalThis=context;
  vm.createContext(context);
  return context;
}
function runBrowserScript(file,context){
  const absolute=path.join(root,file);
  try{
    vm.runInContext(fs.readFileSync(absolute,'utf8'),context,{filename:file});
  }catch(error){
    errors.push(`Ausführung fehlgeschlagen: ${file}\n${error.stack||error.message}`);
  }
}
function duplicates(values){
  return [...new Set(values.filter((value,index)=>value&&values.indexOf(value)!==index))];
}
function validateIds(label,items){
  const ids=(items||[]).map(item=>item?.id);
  const duplicateIds=duplicates(ids);
  if(duplicateIds.length)errors.push(`Doppelte ${label}-IDs: ${duplicateIds.join(', ')}`);
  (items||[]).forEach((item,index)=>{if(!item?.id)errors.push(`${label} ohne ID an Position ${index+1}`);});
}

const files=walk(root);
const jsFiles=files.filter(file=>file.endsWith('.js')||file.endsWith('.mjs'));
const htmlFiles=files.filter(file=>file.endsWith('.html'));
for(const file of jsFiles){
  const result=spawnSync(process.execPath,['--check',file],{encoding:'utf8'});
  if(result.status!==0)errors.push(`JavaScript-Syntax: ${rel(file)}\n${result.stderr.trim()}`);
}

const manifestContext=browserContext();
runBrowserScript('data/manifest.js',manifestContext);
const manifest=manifestContext.FM_DATA_MANIFEST;
if(!manifest)errors.push('data/manifest.js erzeugt kein FM_DATA_MANIFEST.');
const manifestFiles=[];
function collect(value){
  if(Array.isArray(value))manifestFiles.push(...value);
  else if(value&&typeof value==='object')Object.values(value).forEach(collect);
}
collect(manifest);
for(const file of new Set(manifestFiles)){
  if(typeof file==='string'&&!exists(file))errors.push(`Manifest verweist auf fehlende Datei: ${file}`);
}

const playerContext=browserContext({FM_PLAYERS:[]});
const playerBase=(manifest?.players?.base||[]).filter(file=>!file.endsWith('birthdates.js'));
playerBase.forEach(file=>runBrowserScript(file,playerContext));
validateIds('Spieler-Basis',playerContext.FM_PLAYERS);
(manifest?.players?.base||[]).filter(file=>file.endsWith('birthdates.js')).forEach(file=>runBrowserScript(file,playerContext));
(manifest?.players?.current||[]).forEach(file=>runBrowserScript(file,playerContext));
Object.values(manifest?.players?.optional||{}).flat().forEach(file=>runBrowserScript(file,playerContext));
validateIds('Spieler',playerContext.FM_PLAYERS);
for(const player of playerContext.FM_PLAYERS||[]){
  if(!player.name)errors.push(`Spieler ohne Namen: ${player.id||'unbekannt'}`);
  if(!player.group)warnings.push(`Spieler ohne Mannschaftsteil: ${player.id}`);
  if(player.birthDate&&!/^\d{4}-\d{2}-\d{2}$/.test(player.birthDate))errors.push(`Ungültiges Geburtsdatum bei ${player.id}: ${player.birthDate}`);
  if(player.page){
    const target=player.page.split(/[?#]/)[0];
    if(target&&!exists(target))errors.push(`Spielerlink zeigt auf fehlende Seite: ${player.id} → ${target}`);
  }
}

const nationalContext=browserContext();
(manifest?.nationalTeam?.current||[]).forEach(file=>runBrowserScript(file,nationalContext));
const ireland=nationalContext.FM_IRELAND;
if(!ireland)errors.push('Nationalteam-Manifest erzeugt kein FM_IRELAND.');
if(!Array.isArray(ireland?.players)||!ireland.players.length)errors.push('Irland besitzt keinen validierbaren Kader.');
const duplicateNationalNames=duplicates((ireland?.players||[]).map(player=>player.name));
if(duplicateNationalNames.length)errors.push(`Doppelte Namen im Irland-Kader: ${duplicateNationalNames.join(', ')}`);

const matchContext=browserContext();
(manifest?.matches?.current||[]).forEach(file=>runBrowserScript(file,matchContext));
validateIds('Spiel',matchContext.FM_MATCHES);
for(const match of matchContext.FM_MATCHES||[]){
  if(match.date&&!/^\d{4}-\d{2}-\d{2}$/.test(match.date))errors.push(`Ungültiges Spieldatum bei ${match.id}: ${match.date}`);
  if(!match.home?.name||!match.away?.name)errors.push(`Spiel ohne vollständige Paarung: ${match.id}`);
}

const fixtureContext=browserContext();
(manifest?.fixtures?.current||[]).forEach(file=>runBrowserScript(file,fixtureContext));
const fixtures=fixtureContext.FM_FIXTURES||[];
for(const [index,fixture] of fixtures.entries()){
  if(!Array.isArray(fixture)||fixture.length<6){
    errors.push(`Ungültiger Spielplan-Eintrag an Position ${index+1}`);
    continue;
  }
  const [date,time,opponent,venue,,competition]=fixture;
  if(!/^\d{4}-\d{2}-\d{2}$/.test(date||''))errors.push(`Ungültiges Spielplandatum an Position ${index+1}: ${date}`);
  if(!time||!opponent||!venue||!competition)errors.push(`Unvollständiger Spielplan-Eintrag am ${date||`Index ${index+1}`}`);
}
const fixtureKeys=fixtures.map(row=>Array.isArray(row)?`${row[0]}|${row[2]}|${row[3]}`:null);
const duplicateFixtures=duplicates(fixtureKeys);
if(duplicateFixtures.length)warnings.push(`Mögliche doppelte Spielplan-Einträge: ${duplicateFixtures.join(', ')}`);

const clubContext=browserContext();
(manifest?.clubs?.current||[]).forEach(file=>runBrowserScript(file,clubContext));
validateIds('Klub',clubContext.FM_CLUBS);

const seasonContext=browserContext({FM_PLAYERS:playerContext.FM_PLAYERS});
(manifest?.archive?.current||[]).forEach(file=>runBrowserScript(file,seasonContext));
for(const season of seasonContext.FM_SEASONS||[]){
  if(!/^\d{4}-\d{2}-\d{2}$/.test(season.referenceDate||''))errors.push(`Ungültiges Referenzdatum der Saison ${season.year}: ${season.referenceDate}`);
  for(const id of season.squadIds||[]){
    if(!playerContext.FM_PLAYERS.some(player=>player.id===id))errors.push(`Saison ${season.year} verweist auf unbekannten Spieler: ${id}`);
  }
}

const staffContext=browserContext({FM_STAFF:[]});
(manifest?.staff?.current||[]).forEach(file=>runBrowserScript(file,staffContext));
if(!staffContext.FM_STAFF.length)errors.push('Staff-Daten enthalten keine Einträge.');

const pressContext=browserContext();
(manifest?.press?.current||[]).forEach(file=>runBrowserScript(file,pressContext));
validateIds('Pressebericht',pressContext.FM_PRESS_REPORTS||[]);

const newsContext=browserContext({FM_NEWS:[]});
(manifest?.news?.current||[]).forEach(file=>runBrowserScript(file,newsContext));
const news=newsContext.FM_NEWS||[];
validateIds('News',news);
for(const item of news){
  if(!item.title)errors.push(`News ohne Titel: ${item.id||'unbekannt'}`);
  if(!item.category)errors.push(`News ohne Kategorie: ${item.id||'unbekannt'}`);
  if(!/^\d{4}-\d{2}-\d{2}$/.test(item.date||''))errors.push(`Ungültiges Newsdatum bei ${item.id}: ${item.date}`);
  if(!item.href)errors.push(`News ohne Zielseite: ${item.id||'unbekannt'}`);
  const target=item.href?.split(/[?#]/)[0];
  if(target&&!exists(target))errors.push(`Newslink zeigt auf fehlende Seite: ${item.id} → ${target}`);
  if(item.entities&&!Array.isArray(item.entities))errors.push(`News-Entities müssen ein Array sein: ${item.id}`);
}

const localRef=/\b(?:href|src)=["']([^"']+)["']/g;
for(const file of htmlFiles){
  const html=fs.readFileSync(file,'utf8');
  for(const match of html.matchAll(localRef)){
    const value=match[1];
    if(!value||value.startsWith('#')||/^(?:https?:|mailto:|tel:|javascript:|data:)/.test(value))continue;
    const clean=value.split(/[?#]/)[0];
    if(!clean)continue;
    const target=path.resolve(path.dirname(file),clean);
    if(!fs.existsSync(target))errors.push(`Defekter lokaler Verweis in ${rel(file)}: ${value}`);
  }
  if(html.includes('class="main-nav"')){
    if(!html.includes('data/config.js'))errors.push(`Zentrale Konfiguration fehlt in ${rel(file)}`);
    if(!html.includes('assets/site-shell.js'))errors.push(`Zentrale Seitenshell fehlt in ${rel(file)}`);
  }
  if(html.includes('player-fixes.js')||html.includes('player-polish.js'))errors.push(`Veraltete Spieler-Reparaturschicht in ${rel(file)}`);
}

const configContext=browserContext();
runBrowserScript('data/config.js',configContext);
const config=configContext.FM_CONFIG;
if(!config)errors.push('data/config.js erzeugt kein FM_CONFIG.');
if(config?.referenceDate&&!/^\d{4}-\d{2}-\d{2}$/.test(config.referenceDate))errors.push(`Ungültiger zentraler Stichtag: ${config.referenceDate}`);
for(const [domain,date] of Object.entries(config?.dataDates||{})){
  if(!/^\d{4}-\d{2}-\d{2}$/.test(date))errors.push(`Ungültiger Datenstand für ${domain}: ${date}`);
}
if(config?.schemaVersion!==2)warnings.push(`Unerwartete Schema-Version: ${config?.schemaVersion}`);
const navIds=duplicates((config?.navigation||[]).map(item=>item.id));
if(navIds.length)errors.push(`Doppelte Navigations-IDs: ${navIds.join(', ')}`);
for(const item of config?.navigation||[]){
  const target=item.href?.split(/[?#]/)[0];
  if(target&&!exists(target))errors.push(`Navigation verweist auf fehlende Seite: ${item.label} → ${target}`);
}

for(const file of jsFiles.filter(file=>rel(file).startsWith('assets/'))){
  const code=fs.readFileSync(file,'utf8');
  if(/referenceDate\s*=\s*['"]2040-11-02['"]/.test(code))warnings.push(`Alter fest codierter Stichtag in ${rel(file)}`);
}

if(warnings.length){
  console.warn('\nWarnungen:');
  warnings.forEach(message=>console.warn(`- ${message}`));
}
if(errors.length){
  console.error('\nValidierung fehlgeschlagen:');
  errors.forEach(message=>console.error(`- ${message}`));
  process.exit(1);
}
console.log(`Validierung erfolgreich: ${playerContext.FM_PLAYERS.length} Spieler, ${(matchContext.FM_MATCHES||[]).length} Spiele, ${(clubContext.FM_CLUBS||[]).length} Klubs, ${news.length} News, ${staffContext.FM_STAFF.length} Mitarbeiter, ${htmlFiles.length} HTML-Seiten.`);