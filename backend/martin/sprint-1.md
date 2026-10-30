# Sprint 1 — Martin (Backend - Pedidos y Clientes)

## ¿Qué debes hacer?
Programar los endpoints (rutas) para manejar los pedidos y clientes.

## Fecha límite
31 de octubre, 6 pm.

## ¿Qué debes crear en tu carpeta?
- `pedidos.routes.js` (Archivo con las rutas y lógica).
- Un archivo de pruebas `pruebas-pedidos.http` para verificar que funciona.

## ¿Qué endpoints debes programar?
1.  `POST /api/pedidos` → Recibe los datos del carrito y genera un folio.
2.  `GET /api/pedidos/activos` → Devuelve los pedidos que están en cocina.
3.  `PUT /api/pedidos/:folio/completar` → Cambia el estado a "Listo" y libera el horno.

## ¿Cómo entregar?
1. En VS Code, crear rama: `feature/backend-martin`.
2. Guardar los archivos.
3. Control de código fuente → mensaje "API de pedidos y clientes" → Confirmar → Publicar rama.
4. Avisar en el grupo.

## Regla
NO toques `backend/mario/` ni `frontend/`.