# light-it-challenge

## Ejecución de la aplicación
Agregar archivo `.env` con los siguientes valores en la carpeta `backend`:
```env
PORT=3001

DATABASE_URL=mysql://user:password@db:3306/light_it_challenge
```

Agregar archivo `.env` con los siguientes valores en la carpeta `frontend`:
```env
REACT_APP_BACKEND_URL=http://localhost:3001
```

Asegurar que `Docker` está instalado en el sistema.

**Si no se llevan acabo las acciones anteriores no se podrá ejecutar correctamente la aplicación**

Abrir una terminal en la carpeta raíz del proyecto y ejecutar el siguiente comando:
```cmd
docker compose up
```
En caso de error de permisos ejecutar:
```cmd
sudo docker compose up
```

## Backend
Aplicación de Node.js con la biblioteca NestJS y Prima como ORM

## Frontend
Aplicación de React creada con CRA.

Diseño elegido https://dribbble.com/shots/21234580-Fedbly-team-view