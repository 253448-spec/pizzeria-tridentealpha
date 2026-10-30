# Sprint 1 — Carlitos y Emmanuel (Base de Datos)

## Fecha límite
31 de octubre, 6 pm.

## ¿Qué deben hacer?
Crear el archivo `schema.sql` con las siguientes tablas:

### Tabla `pedidos`
- `id` (número único, autoincremental)
- `folio` (texto, ej. "#01")
- `pizza` (texto)
- `tamano` (texto)
- `total` (número decimal)
- `estado` (texto: "En horno", "Listo", "Entregado")
- `horno_asignado` (número del 1 al 6)

### Tabla `ventas`
- `id` (número único, autoincremental)
- `folio` (texto)
- `monto` (número decimal)
- `fecha` (texto de la fecha de venta)

## ¿Cómo saber que está bien?
- Las tablas tienen todos los campos necesarios.
- Los tipos de datos son correctos (números para precios, texto para nombres).
- El archivo `schema.sql` se puede ejecutar sin errores en un gestor como SQLite.