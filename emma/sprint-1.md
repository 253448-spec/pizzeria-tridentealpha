# Sprint 1 — Emma (Scrum Master)

## ¿Qué es un Sprint?
Es un periodo corto de tiempo (en este caso 4 días) en el que el equipo
hace un pedazo del proyecto. Al final del Sprint se entrega algo que funciona.

## Fechas del Sprint 1
- **Inicio:** jueves 22
- **Fin:** lunes 26 (demo en clase)
- **Entrega de tu rama:** no aplica, tú trabajas en `main`

## ¿Qué debes entregar TÚ?
1. **La tabla de sprints** para la maestra → domingo 25, 10 pm
2. **El backend base funcionando** (server.js)
3. **La integración** de las ramas de tus compañeros el domingo en la noche
4. **El documento final** empezado (no terminado, solo la estructura)

## Paso a paso

### 1. Crear `backend/server.js`
Este archivo es el "cerebro" del backend. Aquí se conectan los routers de
Martin y Mario. Ya está creado en el repo con el código base. Tu tarea es
revisarlo y, cuando Martin y Mario suban sus archivos, descomentar las líneas
que empiezan con `// app.use(...)`.

### 2. Revisar `db/schema.sql` de Carlitos
Abre el archivo y verifica que las tablas tengan los campos que Martin y Mario
van a usar. Si algo no coincide con `docs/contrato-api.md`, avísale a Carlitos.

### 3. Integrar las ramas (domingo en la noche)
Sigue los pasos de `emma/integracion.md`. Es el paso más importante:
sin esto, el trabajo de tus compañeros no llega a `main`.

### 4. Entregar la tabla de sprints (domingo 10 pm)
El archivo `docs/sprints.md` ya tiene la tabla. Cópiala en un documento
Word o PDF y súbela a la plataforma de la maestra.

## ¿Cómo saber que está bien?
- El lunes en clase puedes abrir `backend/server.js` y mostrar que arranca.
- Los routers de Martin y Mario aparecen conectados (sin `//`).
- La maestra tiene su tabla de sprints.

## Tu parte de Base de Datos (Sprint 1)

### ¿Qué haces tú con la BD?
1. **Diseñar `db/schema.sql`** (ya está creado). Revisar que tenga las 4 tablas:
   - cliente (id, nombre, telefono, es_estudiante)
   - pizza (id, nombre, tamano, precio)
   - pedido (id, cliente_id, fecha, total, descuento)
   - detalle_pedido (id, pedido_id, pizza_id, cantidad)

2. **Revisar el reporte del Developer de BD/QA** (`docs/revision-bd.md`).
   Si reporta un error en el schema, corregirlo tú mismo (eres el único
   que puede editar `schema.sql`).

3. **Asegurar que `schema.sql` y `seed.sql` funcionen juntos**:
   el schema crea las tablas, el seed las llena. Si el seed falla porque
   un campo no existe, corregir el schema.

### ¿Por qué el Scrum Master diseña el schema y no el Developer de BD/QA?
Porque el Scrum Master es quien integra el trabajo de todos y necesita
que el modelo de datos sea consistente con lo que los developers de APIs
van a usar. El Developer de BD/QA se encarga de los datos de ejemplo,
las pruebas y la revisión.