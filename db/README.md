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
**Nadie edita el archivo de otro.** El Developer de BD/QA no toca
`schema.sql`; solo lo revisa y reporta en `revision-bd.md`.
El Scrum Master no toca `seed.sql` ni `pruebas.md`.

## ¿Qué es una base de datos?
Es donde se guarda la información del programa de forma ordenada.
Imagina una hoja de Excel con varias pestañas: una para clientes, otra
para pizzas, otra para pedidos. Cada pestaña es una "tabla".

## ¿Qué es un schema?
Es el "plano" de la base de datos: qué tablas hay y qué columnas tiene
cada una. Se escribe en un lenguaje llamado SQL.

## ¿Qué es un seed?
Es un archivo con datos de ejemplo para probar el sistema sin tener que
escribirlos a mano cada vez. Ejemplo: las 4 pizzas con sus precios.

## Tareas del Sprint 1
- Scrum Master: leer `emma/sprint-1.md` (sección de BD)
- Developer de BD/QA: leer `db/sprint-1.md`