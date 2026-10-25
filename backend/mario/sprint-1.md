# Sprint 1 — Developer de APIs de pizzas, descuentos y reportes

## Fecha límite para publicar la rama
Domingo 25, 6 pm.

## ¿Qué debe hacer este rol?
Crear tres archivos dentro de `backend/mario/`:
- `pizzas.js` → devuelve el catálogo de pizzas
- `descuentos.js` → esqueleto del descuento estudiante
- `reportes.js` → esqueleto del reporte de pizzas más vendidas

## ¿Qué es un router en Express?
Es un archivito de JavaScript que agrupa endpoints. Se ve así:

```javascript
const express = require('express');
const router = express.Router();

router.get('/pizzas', (req, res) => {
  res.json([/* lista de pizzas */]);
});

module.exports = router;  // ← OBLIGATORIO
Endpoints que debe crear este rol
En pizzas.js
Método	Ruta	Qué responde
GET	/pizzas	lista de las 4 pizzas con precio mediana y grande
Las pizzas son: Hawaiana, Estravaganza, Carnes Frías, Queso.
Precios sugeridos (se pueden ajustar si el Developer de BD/QA pone otros):

Mediana: $120

Grande: $180

En descuentos.js
Método	Ruta	Qué recibe	Qué responde
POST	/descuento	{cliente_id, total}	{total_con_descuento}
Por ahora puede devolver el total sin descuento. En el Sprint 2 se completa.

En reportes.js
Método	Ruta	Qué responde
GET	/reporte/pizzas	lista vacía [] por ahora
En el Sprint 2 se completa contando cuántas pizzas se vendieron.

¿Dónde se guardan los datos?
En arrays en memoria (variables dentro del archivo). No preocuparse por
la base de datos todavía.

¿Cómo entregar?
En VS Code, abajo a la izquierda, clic en "main".

Clic en "Create new branch".

Escribir: feature/backend-mario y Enter.

Guardar los archivos (Ctrl+S).

Control de código fuente → mensaje "Endpoints de pizzas y reportes" → Confirmar (✓) → Publicar rama.

Avisar en el grupo.

Reglas importantes
NO tocar backend/martin/, backend/server.js, db/ ni frontend/.

NO trabajar en main.

Si hay dudas, revisar docs/contrato-api.md.