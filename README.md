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

Das Wiki bleibt eine statische Anwendung ohne Server und Datenbank. Die Architektur wurde in Version 2 in zentrale Schichten aufgeteilt:

```text
FM-Wiki/
├── data/
│   ├── config.js                 # Stichtag, Saison, Navigation und Schema-Version
│   ├── manifest.js               # Reihenfolge der Basis- und Aktualisierungsdaten
│   ├── players.js                # manifestgesteuerter Spieler-Einstiegspunkt
│   └── nationalteam.js           # manifestgesteuerter Irland-Einstiegspunkt
├── assets/
│   ├── data-loader.js            # sequenzielles Laden der Datendateien
│   ├── site-shell.js             # zentrale Navigation und Footer
│   ├── layout-consistency.css    # gemeinsames Designsystem
│   └── player.js                 # direkter Spieler-Renderer ohne DOM-Reparaturschichten
├── scripts/
│   └── validate-data.mjs         # Syntax-, Daten-, ID- und Linkprüfung
├── .github/workflows/
│   └── validate.yml              # automatische Prüfung bei Änderungen
└── docs/
    └── ARCHITECTURE.md           # ausführliche Architektur und Pflegeprinzipien
```

## Datenprinzipien

1. Fakten aus Screenshots und Exporten werden von Interpretation getrennt.
2. Datierte Korrekturen bleiben historisch nachvollziehbar.
3. Der aktuelle Live-Stand wird zentral über `data/manifest.js` bestimmt.
4. Altersberechnung und Saisonstichtage stammen aus `data/config.js` oder dem jeweiligen Saison-Snapshot.
5. Nachträgliche DOM-Reparaturen werden vermieden. Renderer sollen Daten unmittelbar korrekt ausgeben.
6. Änderungen müssen die automatische Validierung bestehen.

## Qualitätssicherung

Die Validierung kann lokal ausgeführt werden:

```bash
node scripts/validate-data.mjs
```

Sie prüft unter anderem:

- JavaScript-Syntax
- fehlende Manifest-Dateien
- defekte lokale Links
- doppelte Spieler-IDs
- Pflichtfelder und Datumsformate
- Navigationsziele

## Aktueller Datenstand

Zentraler Referenzstichtag: **23. November 2040**  
Aktuelle Saison: **2040**  
Vorbereitete nächste Saison: **2041**

Das Wiki wächst weiter mit jedem Screenshot, Export, Spielbericht und Transferentscheid.
