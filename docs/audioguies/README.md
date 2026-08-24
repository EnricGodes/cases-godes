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
- **Castellà:** veu `Reed`

Entre paràgraf i paràgraf s'hi insereix una pausa de 550 ms perquè no soni tot
seguit.

### Regenerar

Editant un `.txt` i tornant a executar el mateix procés:

```
say -v Montse -r 170 -o /tmp/x.aiff "<text amb [[slnc 550]] entre paràgrafs>"
ffmpeg -y -i /tmp/x.aiff -codec:a libmp3lame -q:a 4 recursos/audio/<parada>-cat.mp3
```

### Canviar de veu

A `mostres-veu/` hi ha la mateixa frase dita per les veus castellanes
disponibles (Reed, Rocko, Eddy, Grandpa, Mónica) i per la catalana (Montse).
Per canviar-la, només cal substituir el nom de la veu i regenerar.

Veus instal·lades: `say -v '?'`
