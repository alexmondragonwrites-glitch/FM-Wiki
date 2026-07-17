# Architektur des Finn Harps FM Wiki

## Ziel

Das Wiki bleibt eine statische GitHub-Pages-Anwendung. Es benötigt derzeit weder Server noch Datenbank. Architekturversion 2 trennt Konfiguration, Datenreihenfolge, aktuelle Datenstände, historische Ebenen, Seitenshell, Darstellung und Qualitätssicherung.

## Zentrale Dateien

### `data/config.js`

Enthält globalen Referenzstichtag, aktuelle und nächste Saison, Schema-Version, Navigation, Footertext und bereichsspezifische Datenstände. Ein neuer Klub-Screenshot verändert dadurch nicht automatisch den ausgewiesenen Stand der Spieler- oder Staff-Daten.

### `data/manifest.js`

Ist die einzige Quelle für die aktive Reihenfolge sämtlicher Datendomänen. Es registriert Spieler, Nationalteam, Matches, Spielplan, Klubs, Archive, Ligadaten, Kaderplanung, Staff und Presseberichte.

### `assets/data-loader.js`

Lädt Dateien kontrolliert und sequenziell. Während des initialen Seitenaufbaus bleibt ein synchroner Kompatibilitätsmodus erhalten, damit die statischen Renderer unmittelbar nach den Daten ausgeführt werden können.

### `data/domain.js`

Ist der generische Einstiegspunkt für alle Domänen außerhalb der spezialisierten Spieler- und Nationalteam-Lader. Eine Seite fordert nur die benötigte Domäne an:

```html
<script src="data/domain.js" data-domain="clubs"></script>
```

Die tatsächlich geladenen Dateien stammen aus dem Manifest.

### `assets/site-shell.js`

Erzeugt Navigation und Footer aus der zentralen Konfiguration. Aktive Menüpunkte werden anhand der aktuellen Seite bestimmt. Spezialfarben und Seitentypen bleiben davon unberührt.

### `scripts/validate-data.mjs`

Prüft JavaScript-Syntax, Manifest-Verweise, lokale Links, Daten-IDs, Pflichtfelder, Datumsformate, Spielplanstruktur, Saisonreferenzen und die Einbindung der zentralen Seitenshell.

## Datendomänen

Das Manifest kennt folgende Live-Domänen:

1. **players**: Basisdaten, aktuelle Fortschreibungen und optionale Zugänge.
2. **nationalTeam**: Irland-Kader, Vorschauen und Ergebnisse.
3. **matches**: vollständige Matchakten.
4. **fixtures**: kompakter Saisonspielplan und Ergebnisfortschreibungen.
5. **clubs**: Klubstammdaten, Dossiers und datierte Gegnerupdates.
6. **archive**: eingefrorene Kaderstände pro Saison.
7. **league**: Ligatabelle und Abschlussdaten.
8. **planning**: Nachfolge- und Kaderplanung.
9. **staff**: Mitarbeiterexporte.
10. **press**: redaktionelle Vorberichte.

## Spielerdaten

Die Spielerdaten besitzen weiterhin drei Ebenen:

1. **Basisdaten**: ursprüngliche Kaderobjekte und Geburtsdaten.
2. **Aktueller Stand**: datierte Korrekturen und Fortschreibungen.
3. **Optionale Profile**: bestätigte oder vorbereitete Zugänge, die nur auf fachlich passenden Seiten geladen werden.

Der spezialisierte Einstiegspunkt `data/players.js` nutzt dasselbe Manifest und denselben Loader wie die generischen Domänen.

## Historie

Datierte Ergänzungsdateien bleiben als nachvollziehbare Chronik erhalten. Live-Seiten laden nur die im Manifest als aktuell markierten Schichten. Kaderarchive greifen auf `data/seasons.js` und ihre eigenen Referenzdaten zu. Damit kann Saison 2041 wachsen, ohne den Abschlussstand 2040 umzuschreiben.

## Renderer

Renderer sollen Daten unmittelbar korrekt ausgeben. Nachträgliche DOM-Reparaturen sind zu vermeiden. Spielerüberschriften, Altersberechnung und Quellenhinweise werden direkt in `assets/player.js` aus Daten und Konfiguration erzeugt. Die früheren Dateien `player-fixes.js` und `player-polish.js` wurden entfernt.

## Qualitätssicherung

Die GitHub Action `.github/workflows/validate.yml` läuft bei Änderungen auf `main` und bei Pull Requests. Geprüft werden unter anderem:

- Syntax aller JavaScript-Dateien
- Existenz aller Manifest-Einträge
- Spieler-, Match-, Klub- und Presse-IDs
- Irland- und Staff-Daten
- kompakte Spielplanzeilen
- Saisonkader und unbekannte Spielerreferenzen
- lokale Links
- zentrale Konfiguration und Seitenshell

## Nächste Ausbaustufe

Wenn Saison 2041 deutlich wächst, können aktuelle Ebenen physisch nach `data/current/` und historische Momentaufnahmen nach `data/snapshots/<datum>/` verschoben werden. Da Seiten nur Domänennamen kennen, erfordert diese Verschiebung keinen erneuten Umbau der HTML-Dateien.
