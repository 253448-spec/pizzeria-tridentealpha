# Cómo integrar las ramas de los developers

## ¿Qué es integrar?
Es juntar el trabajo de todos (cada uno en su rama) en una sola versión
oficial (`main`). Solo el Scrum Master hace esto.

## ¿Cuándo se hace?
Domingo 25 en la noche, después de que todos hayan publicado su rama.

## Paso a paso en VS Code

### 1. Traer lo último de GitHub
- Abrir VS Code en la carpeta del proyecto.
- Abajo a la izquierda, clic en la rama actual (`main`).
- Menú `...` → "Pull".

### 2. Traer la rama del Developer de APIs de pedidos
- Clic en la rama actual → elegir `feature/backend-martin`.
- Menú `...` → "Pull" (para traer lo último).
- Volver a `main` (clic en la rama → elegir `main`).
- Menú `...` → "Merge Branch" → elegir `feature/backend-martin`.
- Si no hay conflictos, se fusiona sola.

### 3. Repetir con los otros developers
Mismo proceso con `feature/backend-mario`, `feature/frontend-emiliano`
y `feature/bd-carlitos`.

### 4. Si hay conflictos
VS Code muestra los dos cambios y deja elegir cuál queda.
Elegir el que tenga más sentido. Si no se sabe, preguntar en el grupo.

### 5. Subir todo a GitHub
- Control de código fuente → mensaje "Integración Sprint 1" → Confirmar (✓) → Push.

## ¿Cómo saber que salió bien?
- En GitHub, en `main`, aparecen los archivos de todos.
- `backend/server.js` puede conectarse a los routers de los developers de APIs.