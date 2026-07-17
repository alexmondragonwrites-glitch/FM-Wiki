# Finn Harps FM Wiki

Ein lebendes Vereins- und Nationalmannschaftsarchiv für den Finn-Harps-Langzeitsave in Football Manager.

## Weboberfläche

Die veröffentlichte GitHub-Pages-Seite verbindet inzwischen:

- aktuelle und historische Kaderstände
- vollständige Spielerprofile mit Rollen- und Karriereanalyse
- Saison- und Spielarchive
- Gegner- und Klubdossiers
- Pressevorberichte
- Transfer- und Nachfolgeplanung
- Irlands Nationalmannschaft als zweite taktische Bühne

```text
https://alexmondragonwrites-glitch.github.io/FM-Wiki/
```

## Technisches Modell

Das Wiki bleibt eine statische Anwendung ohne Server und Datenbank. Architekturversion 2 trennt Konfiguration, Datenreihenfolge, Darstellung und Qualitätssicherung:

```text
FM-Wiki/
├── data/
│   ├── config.js                 # Saison, Referenzdatum, Bereichsstände und Navigation
│   ├── manifest.js               # einzige Quelle für die Reihenfolge aller Datendomänen
│   ├── domain.js                 # generischer Manifest-Lader für Spiele, Klubs, Staff usw.
│   ├── players.js                # Spieler-Einstiegspunkt mit Kompatibilitätsmodus
│   └── nationalteam.js           # Irland-Einstiegspunkt
├── assets/
│   ├── data-loader.js            # sequenzielles Laden ohne unkontrollierte Parallelität
│   ├── site-shell.js             # zentrale Navigation und Footer
│   ├── layout-consistency.css    # gemeinsames Designsystem
│   └── player.js                 # direkter Renderer ohne spätere DOM-Reparaturen
├── scripts/
│   └── validate-data.mjs         # Syntax-, Daten-, ID-, Manifest- und Linkprüfung
├── .github/workflows/
│   └── validate.yml              # automatische Prüfung bei Änderungen
└── docs/
    └── ARCHITECTURE.md           # Architektur und Pflegeprinzipien
```

## Datendomänen

`data/manifest.js` registriert die aktiven Dateien für:

- Spieler
- Nationalmannschaft
- Matches
- Spielplan
- Klubs
- Kaderarchive
- Ligadaten
- Kaderplanung
- Mitarbeiter
- Presseberichte

HTML-Seiten nennen nur noch die benötigte Domäne:

```html
<script src="data/domain.js" data-domain="matches"></script>
```

Neue datierte Ergänzungen werden dadurch im Manifest einsortiert, nicht mehr auf jeder Seite einzeln.

## Datenprinzipien

1. Fakten aus Screenshots und Exporten werden von Interpretation getrennt.
2. Datierte Korrekturen bleiben historisch nachvollziehbar.
3. Der aktuelle Live-Stand wird zentral über `data/manifest.js` bestimmt.
4. Globale und bereichsspezifische Datenstände stammen aus `data/config.js`.
5. Altersberechnung nutzt den zentralen Stichtag oder den Stichtag eines Saison-Snapshots.
6. Renderer erzeugen Inhalte unmittelbar korrekt. Nachträgliche Reparaturskripte werden vermieden.
7. Änderungen müssen die automatische Validierung bestehen.

## Qualitätssicherung

Die Validierung kann lokal ausgeführt werden:

```bash
node scripts/validate-data.mjs
```

Sie prüft unter anderem:

- JavaScript-Syntax
- fehlende Manifest-Dateien
- defekte lokale Links
- Spieler-, Match-, Klub- und Presse-IDs
- Spielplanstruktur
- Saisonkader und unbekannte Spielerreferenzen
- Nationalteam- und Staff-Daten
- Pflichtfelder und Datumsformate
- zentrale Navigation und Seitenshell

## Aktueller Datenstand

Globaler Referenzstichtag: **23. November 2040**  
Aktuelle Saison: **2040**  
Vorbereitete nächste Saison: **2041**

Die einzelnen Bereiche besitzen zusätzlich eigene Aktualitätsstände. Dadurch wird ein neues Tottenham-Dossier nicht fälschlich als neuer Spieler- oder Staff-Export ausgegeben.
