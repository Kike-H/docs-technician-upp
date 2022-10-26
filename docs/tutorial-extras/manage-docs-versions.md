---
sidebar_position: 1
---

# Estructura de pruebas unitarias 

La importancia de las *** pruebas ***

Para este proyecto se decidió hacer las pruebas unitarias para cada ruta usando [`PyTest`](https://docs.pytest.org/en/7.1.x/getting-started.html), este es un tema muy importante, ya que es donde se determina si una ruta funciona como debe, el encargado de hacer estas rutas debe seguir la siguiente estructura:  

## Código

```python
from fastapi.testclient import TestClient
from src.app import app

clinet = TestClient(app)


def test_post():
    request = clinet.post("/capitulo/", json={
        "idCapitulo": 0,
        "status": 0,
        "numero": 0,
        "nombre": "string",
        "tipoGasto": "string",
        "nombreGasto": "string",
        "descripcion": "string"

    })
    assert request.status_code == 201
    assert request.json() == {
        "idCapitulo": 1
    }


def test_get():
    request = clinet.get("/capitulo/")
    assert request.status_code == 200
    assert request.json() == {
        "values": [
            {
                "idCapitulo": 1,
                "status": 0,
                "numero": 0,
                "nombre": "string",
                "tipoGasto": "string",
                "nombreGasto": "string",
                "descripcion": "string"
            }
        ],
        "num": 1
    }


def test_put():
    request = clinet.put("/capitulo/", json={
        "idCapitulo": 1,
        "status": 1,
        "numero": 1,
        "nombre": "string",
        "tipoGasto": "string",
        "nombreGasto": "string",
        "descripcion": "string"
    }
    )
    assert request.status_code == 200
    assert request.json() == {
        "idCapitulo": 1,
        "status": 1,
        "numero": 1,
        "nombre": "string",
        "tipoGasto": "string",
        "nombreGasto": "string",
        "descripcion": "string"
    }


def test_delete():
    request = clinet.delete("/capitulo/1")
    assert request.status_code == 204

```
## Creación
Como vemos se crea un cliente que pueda ejecutar estas rutas, se crean funciones de prueba para cada ruta en donde se decide que se enviará y como y que se espera como respuesta desde el status code hasta la respuesta json.

## Ejecución
Para ejecutar cualquier prueba de forma independiente puedes hacer lo siguiente:
```bash 
 pytest -vv ./test/test.py
```

