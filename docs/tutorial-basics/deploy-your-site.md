---
sidebar_position: 5
---

# Routes
Rutas y la importancia de un *** Restful API ***

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

def funcion_envolvente(name: str, callback):
    print("Hello", name)
    callback()


 @funcion_envolvente("Kike")
 def funcion():
    print("Hello World!")


 ```

 Danos una salida como la siguiente:

 ```bash
Hello Kike 
Hello World!
 ```
Por ende usamos los decoradores del framework `FastAPI` para que este se encarga de recibir todos los `response` y `request` entre otros y nosotros nos enfoquemos solo de usar estos métodos para aplicar la lógica de nuestras rutas.

### Decoradores en rutas 
Ahora como vemos estos decoradores aceptan varios parametros, primero encontramos lo que es el path de la ruta que viene en formato string, un `response_model` que es el modelo con el que la ruta responderá en caso de éxito y de la misma manera con el `status_code`, también tenemos lo que son los `tags`, este ultimo mas que nada nos ayuda a organizar todas estas rutas en la documentación generada a partir de *** FastAPI ***, para saber mas de esto visita [`FastAPI/Metadata`](https://fastapi.tiangolo.com/tutorial/metadata/)


## Enrutador
Bien para poder usar este decoradores lo traemos de una clase llamada `APIRouter`, el cual es un _Enrutador_ y esta trae varias funciones decoradoras para poder hacer uso de ellas, que son las cuatro principales, de los verbos que ya mencionamos `GET`, `POST`, `PUT` y  `DELETE` todo esto a partir del objeto  generado de APIRouter.

> Ahora una vez generado tu enrutador no olvides agregarlo al app principal, que tendrá nuestro enrutador principal con un prefijo o prefix como verás a continuación.

`src/app.py`
```python
app = FastAPI()
app.include_router(chapter_routes, prefix="/capitulo")
```
