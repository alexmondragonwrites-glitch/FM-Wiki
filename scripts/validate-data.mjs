import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const errors=[];
const warnings=[];
const rel=file=>path.relative(root,file).replaceAll(path.sep,'/');

function walk(dir){
  return fs.readdirSync(dir,{withFileTypes:true}).flatMap(entry=>{
    if(entry.name==='.git'||entry.name==='node_modules')return [];
    const full=path.join(dir,entry.name);
    return entry.isDirectory()?walk(full):[full];
  });
}

const files=walk(root);
const jsFiles=files.filter(file=>file.endsWith('.js')||file.endsWith('.mjs'));
const htmlFiles=files.filter(file=>file.endsWith('.html'));

for(const file of jsFiles){
  const result=spawnSync(process.execPath,['--check',file],{encoding:'utf8'});
  if(result.status!==0)errors.push(`JavaScript-Syntax: ${rel(file)}\n${result.stderr.trim()}`);
}

function runBrowserScript(file,context){
  const code=fs.readFileSync(file,'utf8');
  vm.runInContext(code,context,{filename:rel(file)});
}

const manifestContext={console};
manifestContext.window=manifestContext;
manifestContext.globalThis=manifestContext;
vm.createContext(manifestContext);
runBrowserScript(path.join(root,'data/manifest.js'),manifestContext);
const manifest=manifestContext.FM_DATA_MANIFEST;
if(!manifest)errors.push('data/manifest.js erzeugt kein FM_DATA_MANIFEST.');

const manifestFiles=[];
function collect(value){
  if(Array.isArray(value))manifestFiles.push(...value);
  else if(value&&typeof value==='object')Object.values(value).forEach(collect);
}
collect(manifest?.players?.base);
collect(manifest?.players?.current);
collect(manifest?.players?.optional);
collect(manifest?.nationalTeam?.current);
for(const file of new Set(manifestFiles)){
  if(!fs.existsSync(path.join(root,file)))errors.push(`Manifest verweist auf fehlende Datei: ${file}`);
}

const playerContext={console};
playerContext.window=playerContext;
playerContext.globalThis=playerContext;
playerContext.FM_PLAYERS=[];
vm.createContext(playerContext);
const baseScripts=(manifest?.players?.base||[]).filter(file=>!file.endsWith('birthdates.js'));
for(const file of baseScripts)runBrowserScript(path.join(root,file),playerContext);
const baseIds=playerContext.FM_PLAYERS.map(player=>player.id);
const duplicateBaseIds=[...new Set(baseIds.filter((id,index)=>baseIds.indexOf(id)!==index))];
if(duplicateBaseIds.length)errors.push(`Doppelte Spieler-IDs in den Basisdaten: ${duplicateBaseIds.join(', ')}`);
for(const file of manifest?.players?.base||[]){
  if(file.endsWith('birthdates.js'))runBrowserScript(path.join(root,file),playerContext);
}
for(const file of manifest?.players?.current||[])runBrowserScript(path.join(root,file),playerContext);

for(const player of playerContext.FM_PLAYERS){
  if(!player.id)errors.push(`Spieler ohne ID: ${player.name||'unbekannt'}`);
  if(!player.name)errors.push(`Spieler ohne Namen: ${player.id||'unbekannt'}`);
  if(!player.group)warnings.push(`Spieler ohne Mannschaftsteil: ${player.id}`);
  if(player.birthDate&&!/^\d{4}-\d{2}-\d{2}$/.test(player.birthDate))errors.push(`Ungültiges Geburtsdatum bei ${player.id}: ${player.birthDate}`);
  if(player.page){
    const target=player.page.split(/[?#]/)[0];
    if(target&&!fs.existsSync(path.join(root,target)))errors.push(`Spielerlink zeigt auf fehlende Seite: ${player.id} → ${target}`);
  }
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
}

const configContext={console};
configContext.window=configContext;
configContext.globalThis=configContext;
vm.createContext(configContext);
runBrowserScript(path.join(root,'data/config.js'),configContext);
const config=configContext.FM_CONFIG;
if(!config)errors.push('data/config.js erzeugt kein FM_CONFIG.');
if(config?.referenceDate&&!/^\d{4}-\d{2}-\d{2}$/.test(config.referenceDate))errors.push(`Ungültiger zentraler Stichtag: ${config.referenceDate}`);
if(config?.schemaVersion!==2)warnings.push(`Unerwartete Schema-Version: ${config?.schemaVersion}`);
for(const item of config?.navigation||[]){
  const target=item.href?.split(/[?#]/)[0];
  if(target&&!fs.existsSync(path.join(root,target)))errors.push(`Navigation verweist auf fehlende Seite: ${item.label} → ${target}`);
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
console.log(`Validierung erfolgreich: ${playerContext.FM_PLAYERS.length} Spieler, ${htmlFiles.length} HTML-Seiten, ${manifestFiles.length} Manifest-Einträge.`);
