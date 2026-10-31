'use strict';

/**
 * Módulo de ventas y reportes - Mario (Sprint 1)
 * Endpoint (contrato HU12): GET /api/ventas/resumen[?fecha=YYYY-MM-DD]
 *
 * La conexión de SQLite (better-sqlite3) se recibe desde server.js:
 *   const ventasRoutes = require('./mario/ventas.routes');
 *   app.use('/api/ventas', ventasRoutes(db));
 */

const express = require('express');

const pad = (n) => String(n).padStart(2, '0');

// Fecha local del sistema (no UTC) en formato YYYY-MM-DD.
function fechaLocalHoy() {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

// Valida formato YYYY-MM-DD y que sea una fecha real de calendario.
function esFechaValida(valor) {
  if (typeof valor !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(valor)) return false;
  const [y, m, d] = valor.split('-').map(Number);
  const f = new Date(y, m - 1, d);
  return f.getFullYear() === y && f.getMonth() === m - 1 && f.getDate() === d;
}

function crearVentasRouter(db) {
  if (!db || typeof db.prepare !== 'function') {
    throw new Error('ventas.routes: se requiere la conexión de better-sqlite3 (db).');
  }

  const router = express.Router();

  // Solo cuentan los pedidos cobrados (estado_pago = 'pagado') del día indicado.
  // ROUND evita residuos de precisión si los importes se guardan como REAL.
  const stmtTotales = db.prepare(`
    SELECT COALESCE(ROUND(SUM(total), 2), 0) AS total_dia,
           COUNT(*)                          AS pedidos
    FROM pedidos
    WHERE DATE(fecha_hora) = DATE(?)
      AND estado_pago = 'pagado'
  `);

  const stmtFolios = db.prepare(`
    SELECT folio
    FROM pedidos
    WHERE DATE(fecha_hora) = DATE(?)
      AND estado_pago = 'pagado'
    ORDER BY fecha_hora ASC, id_pedido ASC
  `);

  // Una sola transacción: total, conteo y folios siempre coinciden entre sí.
  const leerResumen = db.transaction((fecha) => ({
    totales: stmtTotales.get(fecha),
    folios: stmtFolios.all(fecha),
  }));

  // GET /api/ventas/resumen?fecha=YYYY-MM-DD  (fecha opcional; por defecto, hoy)
  router.get('/resumen', (req, res) => {
    const { fecha: fechaQuery } = req.query;

    let fecha;
    if (fechaQuery === undefined) {
      fecha = fechaLocalHoy();
    } else if (esFechaValida(fechaQuery)) {
      fecha = fechaQuery;
    } else {
      return res.status(400).json({
        mensaje: 'Parámetro "fecha" inválido. Usa el formato YYYY-MM-DD con una fecha real.',
      });
    }

    try {
      const { totales, folios } = leerResumen(fecha);
      return res.status(200).json({
        fecha,
        total_dia: totales.total_dia,
        pedidos: totales.pedidos,
        lista_folios: folios.map((fila) => fila.folio),
      });
    } catch (error) {
      console.error('Error al obtener el resumen de ventas:', error);
      return res.status(500).json({ mensaje: 'Ocurrió un error al obtener el resumen de ventas.' });
    }
  });

  return router;
}

module.exports = crearVentasRouter;
