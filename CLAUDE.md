# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A location-based historical expedition through 19th-century Barcelona, tracing the Godes Caballeria family. Static HTML, no build system.

## Project Structure

```
/
├── index.html                         — Landing page (entry point)
├── experiencia/                       — The expedition: 9 stops, each preceded by a navigation page
│   ├── navegacion-1..9.html           — GPS walking directions to the next stop (Leaflet + OSRM)
│   ├── carrer-fonollar-20.html        — Stop 1 · Fonollar 20 (1857-1860)
│   ├── claveguera-14.html             — Stop 2 · Claveguera 14 (1860-1864)
│   ├── sant-agusti-vell-19.html       — Stop 3 · Pl. Sant Agustí Vell 19 (1864-1868)
│   ├── fonollar-30.html               — Stop 4 · Fonollar 30 i 3 (1868-1874)
│   ├── jaume-giralt-3.html            — Stop 5 · Jaume Giralt 3 (1874-1885)
│   ├── sant-pere-mes-baix-40.html     — Stop 6 · Sant Pere Més Baix 40 (1885-1891)
│   ├── banys-vells-15.html            — Stop 7 · Banys Vells 15 (1891-1915), incl. the Poblenou graves
│   ├── sant-pere-mitja-12.html        — Stop 8 · Sant Pere Mitjà 12 (1896-1899)
│   ├── ripoll-12.html                 — Stop 9 · Ripoll 12 (1891-1908), last Ciutat Vella address
│   ├── cronologia.html                — Visual timeline of houses and events
│   ├── mapa.html                      — All ten addresses on one Leaflet map
│   ├── arxiu.html                     — Documentary layer: the eleven people and the sources
│   └── veredicte.html                 — Closing: quiz score, summary of the walk, family photographs
├── navegacion/                        — Standalone GPS navigation app
│   ├── destino.html                   — Destination input with geocoding
│   └── ruta.html                      — Step-by-step turn-by-turn navigation
├── js/shared.js                       — Language (ca/es), font size, side menu — used by every page
├── recursos/
│   ├── imagen/<stop-slug>/            — Web-sized images, one folder per stop
│   └── audio/<stop-slug>-{cat,esp}.mp3 — Audioguides, all nine stops in both languages
└── docs/
    ├── audioguies/                    — Narration scripts (one per stop and language) + voice samples
    ├── design-system.md               — L'Eixample Chronology design system
    └── README.md
```

### User flow
`index.html` → `navegacion-1` → `carrer-fonollar-20` → `navegacion-2` → `claveguera-14` → … → `navegacion-9` → `ripoll-12` → `veredicte.html`

Each stop page ends with a quiz whose "Continuar" button unlocks only after answering; that
button is the link to the next navigation page. The bottom bar (Arxiu · Mapa · Cronologia) is
identical on every page.

### Adding a stop
1. Drop the source material in `docs/` (a stage `.md`, photos). Delete it once processed.
2. Copy the most recent stop page as the template — it carries the current CSS (ledger, lightbox
   with `data-full`, quiz) — and swap `<title>`, the header `<h1>`, the audio slug and the content.
3. Clone the last `navegacion-N.html`, change `DESTINATION` (lat/lng/display_name), the headline,
   the arrival address and the continue link. Bump every `Etapa N/M` counter across `experiencia/`.
4. Point the previous stop's `#quiz-continue` at the new navigation page.
5. Add the stop to `cronologia.html`, to the `STOPS` array and card list in `mapa.html`, and to the
   pending-audio note in `arxiu.html`.
6. Every user-visible string needs both `data-ca` and `data-es` (see `js/shared.js`); the counts
   must match or the language toggle leaves text behind.

## Local Development

To serve the site locally, use Python's built-in HTTP server:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Git Workflow

This project uses GitHub (EnricGodes/cases-godes) for version control. **As work is completed, commit changes to git with clean, descriptive commit messages and push to GitHub.** This ensures we never lose work and maintain a clear history of changes. Each commit message should explain what changed and why, making it easy to understand the project's evolution.

## Key Constraints

- Static HTML only — no build process or transpilation needed
- No package.json or npm dependencies
- Changes are immediately visible when the HTML files are modified
