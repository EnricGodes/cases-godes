# Audioguies

Guions i àudio de les audioguies de la ruta.

## Guions

Un fitxer per parada i idioma (`-cat` / `-esp`). Són **resums** del contingut de
la pàgina, no el text sencer: entre 200 i 240 paraules, que donen entre 75 i 115
segons de narració.

## Àudio

Els `.mp3` de `recursos/audio/` estan generats amb la síntesi de veu del sistema
(macOS `say` + `ffmpeg`), no amb ElevenLabs:

- **Català:** veu `Montse` (l'única veu catalana instal·lada)
- **Castellà:** veu `Mónica`

> **Compte amb el nom de la veu.** `say` només accepta el nom **sencer** tal com
> el llista `say -v '?'`. Hi ha una veu «Reed» en tretze idiomes: si li passes
> `-v Reed` t'agafa l'anglesa llegint castellà, i si li passes un nom que no
> reconeix —`-v "Reed (es_ES)"`, per exemple— no avisa de res i fa servir la veu
> per defecte del sistema. Comprova sempre que dos fitxers de veus diferents no
> tinguin el mateix `md5`.

Entre paràgraf i paràgraf s'hi insereix una pausa de 550 ms perquè no soni tot
seguit.

### Regenerar

Editant un `.txt` i tornant a executar el mateix procés:

```
say -v Montse  -r 170 -o /tmp/x.aiff "<text amb [[slnc 550]] entre paràgrafs>"   # català
say -v "Mónica" -r 170 -o /tmp/x.aiff "<text amb [[slnc 550]] entre paràgrafs>"   # castellà
ffmpeg -y -i /tmp/x.aiff -codec:a libmp3lame -q:a 4 recursos/audio/<parada>-<cat|esp>.mp3
```

### Canviar de veu

Veus instal·lades: `say -v '?'`. Cal el nom **sencer** tal com el llista.
