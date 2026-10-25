# Sprint 1 — Developer de Frontend

## Fecha límite para publicar la rama
Domingo 25, 6 pm.

## ¿Qué debe hacer este rol?
Crear cuatro archivos dentro de `frontend/`:
- `login.html` → pantalla de inicio de sesión
- `cliente.html` → formulario para registrar un cliente
- `pedido.html` → formulario para registrar un pedido
- `styles.css` → estilos para las 3 pantallas

## ¿Qué debe tener cada pantalla?

### login.html
- Campo de usuario
- Campo de contraseña
- Botón "Entrar"
- Título: "Pizzería — Iniciar sesión"

### cliente.html
- Campo de nombre
- Campo de teléfono
- Checkbox "¿Es estudiante?"
- Botón "Guardar cliente"

### pedido.html
- Selector de cliente (una lista desplegable)
- Selector de pizza: Hawaiana, Estravaganza, Carnes Frías, Queso
- Selector de tamaño: Mediana / Grande
- Campo de cantidad
- Botón "Guardar pedido"

## ¿Cómo se ve un HTML básico?
```html
<!DOCTYPE html>
<html>
<head>
  <title>Pizzería — Login</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Iniciar sesión</h1>
  <label>Usuario: <input type="text"></label>
  <label>Contraseña: <input type="password"></label>
  <button>Entrar</button>
</body>
</html>

¿Qué debe tener el CSS?
Colores simples (pueden ser tonos de rojo/naranja por ser pizzería)

Que se vea ordenado (márgenes, espacios)

Que se vea bien en computadora (no se necesita móvil todavía)

¿Se necesita conectar con el backend?
NO. En este Sprint solo son las pantallas "bonitas". En el Sprint 2 se
conectan con los datos reales.

¿Cómo entregar?
En VS Code, abajo a la izquierda, clic en "main".

Clic en "Create new branch".

Escribir: feature/frontend-emiliano y Enter.

Guardar los archivos (Ctrl+S).

Control de código fuente → mensaje "Pantallas de login, cliente y pedido" → Confirmar (✓) → Publicar rama.

Avisar en el grupo.

Reglas importantes
NO tocar backend/ ni db/.

NO trabajar en main.

Diseño simple, bonito y claro (la dueña pidió "fácil, bonito y barato").