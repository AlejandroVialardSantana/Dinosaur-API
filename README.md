# DINOSAUR API 🦖

## Descripción

Esta es una pequeña API empleando buenas prácticas de desarrollo de software, para el manejo de dinosaurios. La API permite realizar las operaciones CRUD (Create, Read, Update, Delete) sobre los dinosaurios.

## Requisitos

Para poder ejecutar la API, se debe tener instalado Node.js y MySQL.

## Tabla de la base de datos

La tabla de la base de datos se debe crear con el siguiente script:

```sql
CREATE TABLE dinosaur (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) DEFAULT NULL,
    diet VARCHAR(255) DEFAULT NULL,
    period VARCHAR(255) DEFAULT NULL,
    length VARCHAR(255) DEFAULT NULL,
    weight VARCHAR(255) DEFAULT NULL,
    description VARCHAR(255) DEFAULT NULL,
    image VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (id)
);
```

## Instalación

Para instalar la API, se debe clonar el repositorio y luego instalar las dependencias con el siguiente comando:

```bash
git clone
```

```bash
npm install
```

## Variables de entorno

Para poder ejecutar la API, se debe crear un archivo .env en la raíz del proyecto, con las siguientes variables de entorno:

```bash
DB_HOST
DB_PORT
DB_USER
DB_DATABASE
DB_PASSWORD
CORS_ORIGIN
```

Estas variables irán de acuerdo a la configuración propia de la base de datos. Por ejemplo:

```bash
DB_HOST=localhost

DB_PORT=3306

DB_USER=root

DB_DATABASE=dinodatabase

DB_PASSWORD=1234

CORS_ORIGIN=http://localhost:3000
```


## Uso

Para ejecutar la API, se debe ejecutar el siguiente comando:

```bash
npm run dev
```


## Endpoints

### GET /api/dinosaurs

Este endpoint permite obtener todos los dinosaurios de la base de datos.

### GET /api/dinosaurs/:id

Este endpoint permite obtener un dinosaurio de la base de datos según su id.

### POST /api/dinosaurs

Este endpoint permite crear un dinosaurio en la base de datos.

### PATCH /api/dinosaurs/:id

Este endpoint permite editar un dinosaurio de la base de datos según su id.

### DELETE /api/dinosaurs/:id

Este endpoint permite eliminar un dinosaurio de la base de datos según su id.

## Visualización de imágenes

Para poder visualizar las imágenes de los dinosaurios, se debe acceder a la siguiente ruta:

```bash
http://host:port/uploads/:image
```

Esto se encuentra en el atributo image de cada dinosaurio.

## Tecnologías

- Node.js 

- Express

- MySQL

- Nodemon   

- Dotenv

- Cors

## Despliegue de prueba

Actualmente está desplegada en Railway, y se puede acceder a ella mediante el siguiente enlace:

[Acceder a la API](https://dinosaur-api-production.up.railway.app/api) 🚀

---

Desarrollado con ❤️ por **[Alejandro Vialard Santana](https://github.com/AlejandroVialardSantana)**