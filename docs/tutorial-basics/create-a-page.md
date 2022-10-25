---
sidebar_position: 1
---

# Estructura de Ficheros

Estructurando nuestro proyecto (*** Diagram Tree ***)


El proyecto en la parte del lado del backend sigue la estructura de la arquitectura *** API Restfu ***, basándonos en las filosofías principales de *** clean code ***, así como de *** DRY *** (Don't repeat yourself)

Aquí abajo verá un diagrama de árbol de la estructura del proyecto:

```
.
├── README.md
├── exc.sh
├── files
├── requirements.txt
├── src
│   ├── app.py
│   ├── config
│   │   └── database.py
│   ├── middlewares
│   │   └── middlewares.py
│   ├── models
│   │   └── models.py
│   ├── routes
│   │   ├── routes.py
│   ├── schemas
│   │   ├── schemas.py
│   └── utilities
│       └── files.py
└── test
    ├── test_files
    │   ├── test.pdf
    │   └── test2.pdf
    └── test.py
```

## exc.sh

Este es el ejecutable creado, para ejecutar, la api, limpiar las tablas y ejecutar los test creados de la API.

### Dev
Este comando ejecuta el servidor en modo de desarrollo en [http://localhost:8000/](http://localhost:8000)
```bash
e./exc.sh dev
```

### Test
Este comando ejecuta todos los archivos test, que se encuentra en el directorio de: `./test/`
```bash
e./exc.sh test
```

### Delete
Este comando limpia las tablas de la base de datos local 
```bash
e./exc.sh delete 
```

## Files
Este directorio es donde se almacenan todos los archivos subidos al backend, tanto PDF como CSV  o EXCEL

:::caution
Si nota que este directorio no se encuentra es porque se crea automáticamente, una vez que ejecuta la ruta para crear archivos, este directorio está ignorado en el  `.gitignore`

:::

## Requirements.txt
Este es un archivo, donde se registran los paquetes utilizados, para el proyecto así como su versión, para que de esta forma se puedan instalar en una nueva máquina.
```bash
pip install -r requirements.txt
```

:::caution
Si usted añade, actualiza o elimina un paquete asegúrese de actualizar el `requirements.txt` con el siguiente comando:
```bash
pip freeze < requirements.txt
```
:::

##
src
Se almacena todo el código fuente del proyecto.
### Config
En este directorio se almacenan las configuraciones del proyecto, por ejemplo las conexiones a la base de datos.

### Middlewares
Aquí se guardan los middlewares de la API.

### Models
Aquí se guardan los modelos de la API.

### Routes
Aquí se guardan las rutas de la API.

### Schemas
Aquí se guardan las schemas de la API.

### Utilities
Aquí se guardan los archivos auxiliares que ayudan al buen funcionamiento de la API.

## Test
Aquí se guardan los test de la API.

### Test Files 
Aquí en `./test/test_files` se guardan los archivos de prueba utilizados en las pruebas de la API.