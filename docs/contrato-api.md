# Contrato de API (MVP - Sprint 1)

## 1. Crear Pedido (HU01, HU04)
*   **Ruta:** `POST /api/pedidos`
*   **Envía:** `{ "pizza": "Hawaiana", "tamano": "Grande", "bebida": "Coca-Cola", "total": 150, "horno": 1 }`
*   **Retorna:** `{ "folio": "#01", "mensaje": "Pedido creado con éxito" }`

## 2. Obtener Pedidos Activos para Cocina (HU08)
*   **Ruta:** `GET /api/pedidos/activos`
*   **Retorna:** `[{ "folio": "#01", "pizza": "Hawaiana", "horno": 1, "estado": "En horno" }]`

## 3. Marcar Pedido como Completado (HU10)
*   **Ruta:** `PUT /api/pedidos/:folio/completar`
*   **Retorna:** `{ "mensaje": "Pedido #01 completado y horno liberado" }`

## 4. Obtener Resumen de Ventas (HU12)
*   **Ruta:** `GET /api/ventas/resumen`
*   **Retorna:** `{ "total_dia": 450, "pedidos": 3, "lista_folios": ["#01", "#02", "#03"] }`