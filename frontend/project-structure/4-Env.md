---
sidebar_position: 4
---

# Env 

Un archivo que no mencionamos y decidimos hacerle su propia sección es el archivo **_.env._**

Tal vez se pregunte porque no lo ve en la estructura del proyecto y es porque este lo crea cada vez que clone el proyecto.

En este archivo se agregan todas las variables de entorno que se usan en el proyecto.


## Las llaves necesarias 

```typescript
VITE_CLIENTID=client-id-de-google
VITE_URLAPI=url-base-la-api
```

Recuerda que para agregar cualquier llave debes de anteponer el prefijo de VITE, siguiendo la siguiente estructura  `VITE_nombre_de_tu_llave`
