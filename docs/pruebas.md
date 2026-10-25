# Plan de Pruebas — Pizzería Tridente Alpha

## ¿Qué es un plan de pruebas?
Es una lista de casos que se prueban para ver si el programa funciona bien.

| # | Caso | Pasos | Resultado esperado |
|---|---|---|---|
| 1 | Registrar pedido válido | Abrir pedido.html, elegir cliente, pizza y cantidad, y guardar. | El pedido aparece en la lista con el total correcto. |
| 2 | Registrar cliente nuevo | Abrir cliente.html, llenar nombre y teléfono, y guardar. | El cliente aparece disponible para elegir en un pedido. |
| 3 | Aplicar descuento a estudiante | Registrar un pedido a un cliente marcado como estudiante. | El total final tiene un 10% de descuento aplicado. |
| 4 | Consultar reporte de pizzas | Abrir la pantalla de reportes (o consultar la API). | Se ve la lista de pizzas con la cantidad vendida de cada una. |
| 5 | Pedido con datos incompletos | Intentar guardar un pedido sin elegir pizza. | El sistema marca error o no permite guardar. |