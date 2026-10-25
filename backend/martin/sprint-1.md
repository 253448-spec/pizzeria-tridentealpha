backend/martin/sprint-1.md
markdown
# Sprint 1 — Developer de APIs de pedidos y clientes

## Fecha límite para publicar la rama
Domingo 25, 6 pm.

## ¿Qué debe hacer este rol?
Crear dos archivos dentro de `backend/martin/`:
- `pedidos.js`
- `clientes.js`

Cada uno debe ser un **router** con los endpoints que dice el contrato.

## ¿Qué es un router en Express?
Es un archivito de JavaScript que agrupa endpoints. Se ve así:

```javascript
const express = require('express');
const router = express.Router();

// Aquí van los endpoints
router.post('/pedido', (req, res) => {
  // guardar el pedido
  res.status(201).json({ mensaje: 'Pedido guardado' });
});

router.get('/pedido', (req, res) => {
  // devolver la lista de pedidos
  res.json([]);
});

module.exports = router;  // ← ESTA LÍNEA ES OBLIGATORIA
Sin la última línea (module.exports = router), el Scrum Master no puede
conectar este trabajo al servidor. No olvidarla.

Endpoints que debe crear este rol
En pedidos.js
Método	Ruta	Qué recibe	Qué responde
POST	/pedido	{cliente_id, pizzas:[{pizza_id, cantidad}], total}	201 con mensaje
GET	/pedido	nada	lista de pedidos
En clientes.js
Método	Ruta	Qué recibe	Qué responde
POST	/cliente	{nombre, telefono, es_estudiante}	201 con mensaje
¿Dónde se guardan los datos?
Por ahora en un array en memoria (una variable dentro del archivo).
No preocuparse por la base de datos todavía; el Developer de BD/QA se
encarga de eso.

Ejemplo:

javascript
let pedidos = [];  // aquí se guardan los pedidos

router.post('/pedido', (req, res) => {
  const nuevoPedido = req.body;
  pedidos.push(nuevoPedido);
  res.status(201).json(nuevoPedido);
});
¿Cómo probar que funciona?
Abrir una terminal en VS Code (menú Terminal → Nueva terminal).

Entrar a la carpeta backend/: escribir cd backend y Enter.

Escribir npm install y Enter (instala Express, solo la primera vez).

Escribir node server.js y Enter. Debe decir "Servidor en http://localhost:3000".

Abrir el navegador en http://localhost:3000. Debe responder algo.

Para probar el endpoint, usar Postman o Thunder Client (extensión de VS Code).

¿Cómo entregar?
En VS Code, abajo a la izquierda, clic en "main".

Clic en "Create new branch".

Escribir: feature/backend-martin y Enter.

Guardar los archivos (Ctrl+S).

Ir a Control de código fuente (icono de bifurcación).

Escribir un mensaje: "Endpoints de pedidos y clientes".

Clic en Confirmar (✓).

Clic en "Publicar rama".

Avisar en el grupo de WhatsApp/Teams.

Reglas importantes
NO tocar backend/mario/, backend/server.js, db/ ni frontend/.

NO trabajar en main.

Si hay dudas del contrato, revisar docs/contrato-api.md.

Si algo no queda claro, preguntar en el grupo ANTES de hacerlo mal.