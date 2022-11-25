---
sidebar_position: 3
---

# Typescript y React


## ¿Por que usar Typescript?

El proyecto está configurado para usar typescript, pero porque preferir, typescript sobre javascript, bueno el tener un tipado estático, nos permite detectar errores en tiempo de escritura y prevenir futuros bugs, así como autocompletado de mucha sintaxis.

Además al usar vite nos ahorramos la tarea de configurar manualmente todos los compiladores de TS a JS.


## ¿Conexión con React?

Como ya sabemos react usa una sintaxis similar a html llamada  en JS como JSX to JS-extend, y por la parte de TS esto no cambia solo cambiando a TSX o TS-extend, como podras observar en el proyecto hay barrios archivos TSX que son los que usan estan sintaxis, mas sin embargo no es necesario llamarlos asi para usar esa sintaxis, pero por buenas prácticas es lo que hacemos. 

:::caution

Nota que la única diferencia de JSX a TSX es el tipado sobre todo en los props de los componentes por lo que recuerda usar interfaces para declarar las props.

:::