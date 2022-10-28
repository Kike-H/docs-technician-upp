---
sidebar_position: 4
---

# Models
Los modelos y los *** mappers ***

Los modelos son los encargados de mapear la información obtenida de la base de datos, así como de mapearla para su procesamiento y posterior inserción a la base de datos.

## Código
```python
from typing import List, Optional
from pydantic import BaseModel
from src.models.status import StatusModel


class ChapterBase(BaseModel):
    idCapitulo: Optional[int]


class ChapterIn(StatusModel, ChapterBase):
    numero: int
    nombre: str
    tipoGasto: str
    nombreGasto: str
    descripcion: str


class ChapterOut(BaseModel):
    values: List[ChapterIn] = [ChapterIn(**example)]
    num: int = 0

    def __init__(self, values: List[ChapterIn], **kwargs):
        super().__init__(**kwargs)
        self.values = values
        self.num = len(values)
```

## Creación
:::caution
Tome en cuenta que estos modelos heredan de la clase Base Model, por lo que al usted querer generar un inicializador, deberá hacer uso del `super().__init__(**kwargs)`
:::

Como vemos aquí tenemos las clases que definen como serán los objetos que demos utilizar, como la clase `In` es la que nos mapea de *** Json *** a la entidad de la base de datos para su posterior inserción. O la `Out` que es la que nos mapea de la entidad al modelo correspondiente para retornarlos como  *** Json *** en las posibles rutas de este apartado.
