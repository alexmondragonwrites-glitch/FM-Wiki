# Architektur des Finn Harps FM Wiki

## Ziel

Das Wiki bleibt eine statische GitHub-Pages-Anwendung. Es benötigt derzeit weder Server noch Datenbank. Die technische Architektur trennt jedoch Konfiguration, Datenreihenfolge, aktuelle Datenstände, historische Ebenen und Darstellung klar voneinander.

## Zentrale Dateien

### `data/config.js`

Enthält den globalen Referenzstichtag, aktuelle und nächste Saison, Schema-Version, Navigation und Footertext.

### `data/manifest.js`

Definiert, in welcher Reihenfolge Basisdaten und aktuelle Ergänzungsschichten geladen werden. Die Reihenfolge steht damit nicht mehr verteilt in mehreren HTML-Dateien.

### `assets/data-loader.js`

Lädt Datendateien kontrolliert und sequenziell. Während des initialen Seitenaufbaus bleibt ein synchroner Kompatibilitätsmodus erhalten, damit bestehende Renderer weiter funktionieren.

### `assets/site-shell.js`

Erzeugt Navigation und Footer aus der zentralen Konfiguration. Die Spezialgestaltung einzelner Bereiche bleibt davon unberührt.

### `scripts/validate-data.mjs`

Prüft JavaScript-Syntax, Manifest-Verweise, lokale Links, Spieler-IDs, Pflichtfelder, Datumsformate und Navigationsziele.

## Datenebenen

Die Spielerdaten bestehen aus drei Ebenen:

1. **Basisdaten**: ursprüngliche Kaderobjekte und Geburtsdaten.
2. **Aktueller Stand**: datierte Korrekturen und Fortschreibungen, die auf den Basisdaten aufbauen.
3. **Optionale Profile**: bestätigte oder vorbereitete Zugänge, die nur auf den dafür vorgesehenen Seiten geladen werden.

Das Manifest beschreibt diese Ebenen ausdrücklich. Dadurch kann die physische Ordnerstruktur später verändert werden, ohne sämtliche Seiten anzupassen.

## Historie

Datierte Ergänzungsdateien bleiben als nachvollziehbare Chronik erhalten. Normale Live-Seiten laden jedoch nur die im Manifest als aktuell markierten Schichten. Saisonarchive greifen zusätzlich auf `data/seasons.js` und ihre festgelegten Referenzdaten zu.

## Renderer

Renderer sollen Daten direkt korrekt ausgeben. Nachträgliche DOM-Reparaturen sind zu vermeiden. Spielerüberschriften, Altersberechnung und Quellenhinweise werden deshalb unmittelbar in `assets/player.js` aus Daten und Konfiguration erzeugt.

## Qualitätssicherung

Die GitHub Action `.github/workflows/validate.yml` läuft bei Änderungen auf `main` und bei Pull Requests. Ein fehlgeschlagener Test weist auf strukturelle Fehler hin, bevor neue Datenstände langfristig im Archiv verankert werden.

## Nächste Ausbaustufe

Wenn die Datenmenge in Saison 2041 deutlich wächst, können die aktuellen Ebenen physisch nach `data/current/` und historische Momentaufnahmen nach `data/snapshots/<datum>/` verschoben werden. Durch Manifest und Loader müssen die Seiten dafür nicht erneut umgebaut werden.
