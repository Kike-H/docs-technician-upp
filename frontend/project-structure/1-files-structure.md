---
sidebar_position: 1
---

# Estructura de Ficheros

Estructurando nuestro proyecto (*** Diagram Tree ***)


El proyecto en la parte del lado del frontend sigue la estructura de la arquitectura *** MVVM ***, basándonos en las filosofías principales de *** clean code ***, así como de *** DRY *** (Don't repeat yourself)

Aquí abajo verá un diagrama de árbol de la estructura del proyecto:

```
.
├── index.html
├── package.json
├── public
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── RoutesApp.tsx
│   ├── assets
│   ├── components
│   ├── context
│   ├── data
│   ├── domain
│   ├── index.css
│   ├── main.tsx
│   ├── model
│   ├── theme
│   │   └── MainTheme.tsx
│   ├── utilities
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.jso
```

Como vemos tenemos la arquitectura básica de un proyecto creado con ViteJS, mas sin embargo,tendremos diversos directorios extras creados por nosotros para seguir la arquitectura de MVVM, los cuales explicaremos a continuación.

## Components 

En este directorio lo que encontrará serán las diversas, componentes que suelen repetirse en nuestras vistas y que al crearlos de esta manera nos aseguramos de reutilizar al máximo, nuestras interfaces y si hay un cambio, el mismo se aplique a todos las visitas que poseen estados components facilitando así el mantenimiento del software.


## Context 

Como nuestro proyecto está hecho con react lo cual quiere decir que es un proyecto reactivo, aquí estamos manejando el estado de nuestras vistas, para los diversos cambios que se puedan presentar en tiempo real.


## Data

En la capa de data nos enfocamos a la implementación y conexión de nuestras vistas con la API que hemos creado.


## Domain

En la capa de domain encontrará todas las vistas del proyecto así como sus respectivos modelos que se encarga de parsear los JSON de la API a modelos de TS (Typescript).


## Theme 

Aquí está la configuración básica del tema de MUI (Material UI), para saber más acerca de esta parte visita su sección.


## Model

Aquí están presentes los modelos globales de la app
