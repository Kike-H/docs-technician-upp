---
sidebar_position: 5
---

# Routes
Rutas ejemplo de lo que es un *** Restful API ***

Porque decimos que nuestra API es una restful API, bien porque esta cumnple con los conocidos verbos de una API Restful, los cuales son `GET`, `POST`, `PUT` y `DELETE`

En el código de a continuación se crean las rutas con los 4 verbos para `Capítulo`

## Código
```python
from fastapi import APIRouter, status
from src.models.chapter import ChapterBase, ChapterIn, ChapterOut
from src.schemas.schemas import chapter
from src.config.database import conn

chapter_routes = APIRouter()

# * ---- BASIC CRUD


@chapter_routes.post('/', response_model=ChapterBase, tags=['Capitulo'], status_code=status.HTTP_201_CREATED)
def anadir_nueva(chapter_v: ChapterIn):
    return ChapterBase(idCapitulo=conn.execute(chapter.insert().values(chapter_v.dict())).lastrowid)


@chapter_routes.get('/', response_model=ChapterOut, tags=['Capitulo'])
def obtener_todas():
    return ChapterOut(values=conn.execute(chapter.select()).all())


@chapter_routes.put('/', response_model=ChapterIn, tags=['Capitulo'])
def actualizar(chapter_v: ChapterIn):
    return conn.execute(chapter.update().values(chapter_v.dict()).where(chapter.c.idCapitulo == chapter_v.idCapitulo)).last_updated_params()


@chapter_routes.get('/{id}', response_model=ChapterIn, tags=['Capitulo'])
def obtener_una(id: str):
    return conn.execute(chapter.select().where(


@chapter_routes.delete('/{id}', tags=['Capitulo'], status_code=status.HTTP_204_NO_CONTENT)
def eliminar(id: str):
    conn.execute(chapter.delete().where(

# * ---- BASIC CRUD
```
## ¿Que es un decorador?

Bien en palabras sencillas los decoradores en python, son funciones que envuelven a otra, esto con la intención de de ejecutar funciones que suelen repetirse dentro de otras, esta acción en python lo hacemos en base a la siguiente estructura:
 
 ```python

def funcion_envolvente(name: str):
    print("Hello", name)


 @funcion_envolvente("Kike")
 def funcion():
    print("Hello World!")


 ```

 Danos una salida como la siguiente:

 ```bash
Hello Kike 
Hello World!
 ```
Por ende usamos los decoradores del framework `FastAP` para que este se encarga de recibir todos los response y request entre otros, y la estructura de los mismos y nosotros nos enfoquemos solo de usar estos métodos para aplicar la lógica de que harán nuestras rutas.



