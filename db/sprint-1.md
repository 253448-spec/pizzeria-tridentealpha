# Carpeta de Base de Datos

## ¿Quién trabaja aquí?
Dos roles, con archivos separados para no pisarse:

| Archivo | Rol dueño | Qué hace |
|---|---|---|
| `db/schema.sql` | Scrum Master | Diseña las tablas y campos |
| `db/seed.sql` | Developer de BD/QA | Agrega datos de ejemplo (pizzas) |
| `docs/pruebas.md` | Developer de BD/QA | Plan de pruebas |
| `docs/revision-bd.md` | Developer de BD/QA | Reporte de revisión del schema |

## Regla de oro
**Nadie edita el archivo de otro.** El Developer de BD/QA no toca `schema.sql`; solo lo revisa y reporta en `revision-bd.md`. El Scrum Master no toca `seed.sql` ni `pruebas.md`.

## ¿Qué es una base de datos?
Es donde se guarda la información del programa de forma ordenada. Imagina una hoja de Excel con varias pestañas: una para clientes, otra para pizzas, otra para pedidos. Cada pestaña es una "tabla".

## ¿Qué es un schema?
Es el "plano" de la base de datos: qué tablas hay y qué columnas tiene cada una. Se escribe en un lenguaje llamado SQL.

## ¿Qué es un seed?
Es un archivo con datos de ejemplo para probar el sistema sin tener que escribirlos a mano cada vez. Ejemplo: las 4 pizzas con sus precios.

## Tareas del Sprint 1
- Scrum Master: leer `emma/sprint-1.md` (sección de BD)
- Developer de BD/QA: leer `db/sprint-1.md`

# Sprint 1 — Developer de BD/QA

## Fecha límite para publicar la rama
Domingo 25, 6 pm.

## ¿Qué debes hacer TÚ?

### 1. Crear `db/seed.sql`
Archivo nuevo. Aquí van los INSERTs de las 4 pizzas de ejemplo. NO toques `db/schema.sql` (ese es del Scrum Master).

INSERT INTO pizza (nombre, tamano, precio) VALUES
('Hawaiana', 'Mediana', 120),
('Hawaiana', 'Grande', 180),
('Estravaganza', 'Mediana', 140),
('Estravaganza', 'Grande', 200),
('Carnes Frias', 'Mediana', 150),
('Carnes Frias', 'Grande', 210),
('Queso', 'Mediana', 110),
('Queso', 'Grande', 170);

### 2. Revisar `db/schema.sql` (sin editarlo)
Abrirlo, leerlo y verificar que los campos coincidan con `docs/contrato-api.md`. Si algo no cuadra, escribir el reporte en `docs/revision-bd.md` (archivo nuevo) y avisar en el grupo.

Ejemplo de reporte:

# Revisión del schema — Sprint 1

## Tablas revisadas
- cliente: OK
- pizza: OK
- pedido: OK
- detalle_pedido: OK

## Observaciones
- El campo `es_estudiante` debería ser BOOLEAN, no TEXT. Avisar al Scrum Master.

### 3. Completar `docs/pruebas.md`
Agregarle a cada caso los pasos para probarlo.

Ejemplo:
| Caso | Pasos | Resultado esperado |
|---|---|---|
| 1. Registrar pedido válido | Abrir pedido.html, elegir cliente, pizza y cantidad, guardar | El pedido aparece en la lista con el total correcto |

## ¿Cómo entregar?
1. En VS Code, abajo a la izquierda, clic en "main".
2. Clic en "Create new branch".
3. Escribir: `feature/bd-carlitos` y Enter.
4. Guardar los archivos (Ctrl+S).
5. Control de código fuente → mensaje "Seed, revisión BD y pruebas" → Confirmar (✓) → Publicar rama.
6. Avisar en el grupo.

## Reglas importantes
- NO tocar `db/schema.sql` (es del Scrum Master).
- NO tocar `backend/` ni `frontend/`.
- NO trabajar en `main`.
- Si se detecta un error en el schema, reportarlo en `docs/revision-bd.md`.