# Weboberfläche und Pflegeprozess

## Ziel

Die Weboberfläche ist die visuelle Startseite des Finn-Harps-Wikis. Sie ergänzt die ausführlichen Markdown-Dokumente und bietet einen schnellen Überblick über Kader, Rollen, Talente und Nachfolgeplanung.

## Technischer Aufbau

| Datei | Zweck |
|---|---|
| `index.html` | Struktur der Weboberfläche |
| `assets/styles.css` | Layout, Farben, responsive Darstellung |
| `assets/app.js` | Suche, Filter, Kennzahlen und Spieler-Dialoge |
| `data/players.js` | Zentrale strukturierte Spielerdaten |
| `spieler/*.md` | Ausführliche Tiefenprofile einzelner Spieler |
| `taktik/*.md` | Taktische Analysen |
| `transfers/*.md` | Kader- und Nachfolgeplanung |

Die Seite benötigt kein Framework und keinen Build-Prozess. GitHub Pages kann sie direkt als statische Website ausliefern.

## Datenmodell für Spieler

Ein Eintrag in `data/players.js` besitzt folgende Felder:

```js
{
  name: "Daryl Frame",
  nation: "Schottland",
  age: 19,
  position: "Zentrales Mittelfeld",
  status: "Talent vor Durchbruch",
  rating: 5,
  role: "Mezzala auf Angriff",
  summary: "Kurze taktische Einordnung.",
  strengths: ["Antritt 17", "Technik 16"],
  risks: ["Passen 9", "Entscheidungen 11"],
  future: "Konkreter Entwicklungs- oder Kaderplan.",
  file: "spieler/daryl-frame.md"
}
```

`file` ist optional. Es wird gesetzt, wenn bereits ein ausführliches Markdown-Profil existiert.

## Redaktionelle Regeln

1. **Fakten und Interpretation trennen.** Attribute, Alter, Vertrag und Statistik stammen aus Screenshots. Rollenbewertung und Zukunftsplanung sind Analyse.
2. **Datenstand nennen.** Aktuell basiert die Weboberfläche auf Oktober 2040.
3. **Keine erfundenen Werte ergänzen.** Nicht lesbare oder fehlende Angaben bleiben offen.
4. **Rollen korrekt abbilden.** Frame spielt zentral als Mezzala, Papini und Walker besetzen den rechten Flügel.
5. **Spieler nicht nur nach Sternen bewerten.** Systemfit, Attribute, Produktion, Alter, Persönlichkeit und Verletzungsrisiko werden gemeinsam betrachtet.
6. **Historische Stände erhalten.** Bei größeren Entwicklungssprüngen wird das Markdown-Profil mit einem datierten Abschnitt ergänzt, statt die Vergangenheit unsichtbar zu überschreiben.

## Ablauf bei neuen Screenshots

1. Screenshot lesen und Stammdaten prüfen.
2. Bestehenden Eintrag in `data/players.js` aktualisieren oder neuen Spieler ergänzen.
3. Bei Schlüsselspielern ein ausführliches Profil unter `spieler/` anlegen oder erweitern.
4. Kaderstatus, Rolle, Stärken, Grenzen und Zukunftsplan aktualisieren.
5. Bei taktischen Änderungen zusätzlich `taktik/` anpassen.
6. Bei Vertrags- oder Verkaufsentscheidungen `transfers/nachfolgeplanung.md` fortschreiben.

## GitHub Pages aktivieren

Im Repository:

1. `Settings` öffnen.
2. `Pages` auswählen.
3. Unter **Build and deployment** die Quelle **Deploy from a branch** wählen.
4. Branch `main` und Ordner `/ (root)` auswählen.
5. Speichern.

Danach ist die Website üblicherweise unter folgender Adresse erreichbar:

```text
https://alexmondragonwrites-glitch.github.io/FM-Wiki/
```

Die erstmalige Veröffentlichung kann einige Minuten benötigen.

## Lokale Vorschau

Die `index.html` kann direkt im Browser geöffnet werden. Zuverlässiger ist ein kleiner lokaler Webserver:

```bash
python -m http.server 8000
```

Danach im Browser `http://localhost:8000` öffnen.

## Geplante Erweiterungen

- Saisonchronik 2040
- Positionsbezogene Tiefe und Kaderampel
- Vertragsübersicht mit Laufzeiten
- Hall of Fame und Vereinsrekorde
- Entwicklungshistorie wichtiger Talente
- Matcharchiv für besondere Champions-League-Abende
- Filter nach Nation, Alter, Status und Zukunftskategorie
