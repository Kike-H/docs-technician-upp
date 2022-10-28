---
sidebar_position: 1
---

# Tutorial Intro

Aquí encontrarás toda la información acerca de cómo inicializar configurar y ver la estructura del proyecto del lado del **backend**
:::caution

La primera recomendación de esta documentación y para que no haya complicaciones deberías usar ya sé un entorno de ejecución basado en unix, como puede ser Linux o MacOS o algún Linux subsystem for Windows.

:::

## Empezando

Para empezar a usar este proyecto necesitarás lo siguiente:

- [Python 3.10.6](https://www.python.org/downloads/)

:::tip

Para ello puedes instalar la versión desde el link citado arriba o de igual manera y es la manera que recomiendo instalar la versión con [pyenv](https://github.com/pyenv/pyenv)

:::

También necesitarás una conexión de:

- [MySQL database](https://formulae.brew.sh/formula/mysql)

:::tip

Aqui te dejo el link de brew para que puedas hacer la descarga para ejecutar MySQL localmente, también puedes hacer la conexión remota si así lo deseas en dado caso recomiendo usar [PlanetScale](https://planetscale.com/), ya que tiene un plan gratuito o puedes usar cualquier otro, solo recuerda tener las llaves de tu conexión a la base de datos

:::

### Descarga el proyecto

El código fuente del proyecto se almacena en GitHub, por lo que aquí te dejo el link, recuerda que este es un repositorio privado así que tendrás que pedir acceso a él. Para ello no dudes en hacérselo saber a los encargados del proyecto.

> [Backend Repo](https://github.com/Kike-H/api-upp)

:::caution

Recuerda antes de hacer cualquier push realiza un pull, tambien debes de usar la rama de desarrollo una vez autorizados los cambios, realiza el push a producción 

:::

## Configurando el proyecto

1. Instalar [virtualenv](https://docs.python.org/es/3/library/venv.html)
```bash
pip install virtualenv
```
2. Una vez descargado el proyecto dirígete al  directorio del proyecto desde una terminal.
3. Ya dentro crea un nuevo entorno virtual con la versión de python 3.10.6
```bash 
virtualenv .venv
```
4. Activa el entorno virtual 
### `Linux/Unix` 
```bash
source ./.venv/bin/activate
```
### `Windows`

```bash
.\.venv\Scripts\activate.bat
```

5. Actualiza pip
```
python -m pip install --upgrade pip   
```
6. Instala las dependencias del proyecto 

```bash
pip install -r requirements.txt
```

7. Crea un archivo `.env` en la raíz del proyecto con tus credenciales para mysql 
```
USERDB=your-name-user
PASSWORDDB=your-password
DATABASE=your-database-name
SECRETE=your-secrets-key
```
:::note

La Secret Key es para la generacion de tokens de acceso

:::


:::caution

Asegurate de tener creado la base de datos 

:::

## Ejecutando el proyecto 

### Script
Si estás en un sistema unix, se realizó un script para ejecutar este proyecto 

#### Comandos

> Ejecutar servidor de desarrollo en [**http://localhost:8000/**](http://localhost:8000/)

```bash
./exc.sh dev
```

> Ejecutar pruebas  unitarias 

```bash
./exc.sh test
```

> Eliminar todas las tablas de la base de datos

```bash
./exc.sh delete
```


### Manual

> Ejecutar servidor de desarrollo en [**http://localhost:8000/**](http://localhost:8000/)

```bash
uvicorn src.app:app --reload
```