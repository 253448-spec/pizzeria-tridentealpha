'use strict';

/**
 * Servidor principal - Pizzería Chomsky (Sprint 1 MVP)
 * Une las rutas de Martin (pedidos) y Mario (ventas) con una sola
 * conexión compartida a SQLite.
 *
 * Variables de entorno opcionales:
 *   PORT     puerto del servidor (por defecto 3000)
 *   DB_PATH  ruta del archivo .db (por defecto db/pizzeria.db)
 *   INIT_DB  si vale 1 y la base no tiene tablas, las crea desde db/schema.sql
 *            (solo estructura, sin datos). Úsalo una vez, cuando el esquema
 *            esté confirmado por el equipo de base de datos.
 */

const fs = require('fs');
const path = require('path');
const express = require('express');
const Database = require('better-sqlite3');

const PORT = process.env.PORT || 3000;
const DB_PATH = process.env.DB_PATH
  ? path.resolve(process.env.DB_PATH)
  : path.resolve(__dirname, '..', 'db', 'pizzeria.db');
const SCHEMA_PATH = path.resolve(__dirname, '..', 'db', 'schema.sql');
const INICIALIZAR = process.env.INIT_DB === '1';

// ---------- Base de datos ----------
let db;
try {
  db = new Database(DB_PATH, { fileMustExist: !INICIALIZAR });
} catch (error) {
  console.error(`No se pudo abrir la base de datos en ${DB_PATH}: ${error.message}`);
  console.error('Verifica DB_PATH o crea la base con INIT_DB=1 una vez confirmado el esquema.');
  process.exit(1);
}
db.pragma('foreign_keys = ON');

const hayTablas = db
  .prepare("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = 'pedidos'")
  .get();

if (!hayTablas) {
  if (!INICIALIZAR) {
    console.error('La base de datos no tiene las tablas del esquema.');
    console.error('Pide la base al equipo de BD o ejecuta una vez con INIT_DB=1 (usa db/schema.sql).');
    db.close();
    process.exit(1);
  }
  db.exec(fs.readFileSync(SCHEMA_PATH, 'utf8'));
  console.log(`Tablas creadas desde ${SCHEMA_PATH}`);
}

// ---------- Aplicación ----------
const app = express();
app.use(express.json());

app.use('/api/pedidos', require('./martin/pedidos.routes')(db));
app.use('/api/ventas', require('./mario/ventas.routes')(db));

// JSON mal formado enviado por el cliente
app.use((err, req, res, next) => {
  if (err && err.type === 'entity.parse.failed') {
    return res.status(400).json({ mensaje: 'El cuerpo de la petición no es un JSON válido.' });
  }
  return next(err);
});

// Ruta inexistente
app.use((req, res) => {
  res.status(404).json({ mensaje: 'Ruta no encontrada.' });
});

const servidor = app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
  console.log(`Base de datos: ${DB_PATH}`);
});

// Cierre limpio
function cerrar() {
  servidor.close(() => {
    db.close();
    process.exit(0);
  });
}
process.on('SIGINT', cerrar);
process.on('SIGTERM', cerrar);
