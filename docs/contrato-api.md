# Contrato de API — Pizzería Tridente Alpha

## ¿Qué es este documento?
Es el "acuerdo" entre el frontend y el backend. Dice exactamente qué direcciones (endpoints) existen, qué datos reciben y qué datos devuelven. Así el Developer de Frontend y los Developers de APIs saben cómo comunicarse sin adivinar.

## APIs del Developer de pedidos y clientes
| Método | Ruta | Qué recibe (Body) | Qué responde |
|---|---|---|---|
| POST | `/pedido` | `{cliente_id, pizzas:[{pizza_id, cantidad}], total}` | 201 con el pedido creado |
| GET | `/pedido` | Nada | Lista de todos los pedidos |
| POST | `/cliente` | `{nombre, telefono, es_estudiante}` | 201 con el cliente creado |

## APIs del Developer de reportes
| Método | Ruta | Qué recibe (Body) | Qué responde |
|---|---|---|---|
| GET | `/pizzas` | Nada | Lista de las 4 pizzas con precios |
| POST | `/descuento` | `{cliente_id, total}` | `{total_con_descuento}` |
| GET | `/reporte/pizzas` | Nada | `[{pizza, cantidad_vendida}]` |