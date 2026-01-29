
# TaskList App

Aplicación de lista de tareas construida con React, Vite y Zustand para el manejo de estado global. Utiliza Material UI para los componentes visuales y React Router para la navegación.

## Estructura del proyecto

```
src/
	App.jsx                # Componente principal, define las rutas de la app
	main.jsx               # Punto de entrada, monta la app en el DOM
	assets/                # Recursos estáticos (imágenes, íconos, etc.)
	components/
		Footer.jsx           # Pie de página de la app
		Nav.jsx              # Barra de navegación principal
		TaskList.jsx         # Componente principal de la lista de tareas
	hooks/                 # (Reservado para hooks personalizados)
	pages/
		About.jsx            # Página "Acerca de"
		Home.jsx             # Página principal, muestra la lista de tareas
	store/
		useStore.js          # Store global de tareas usando Zustand
	styles/
		global.css           # Estilos globales (vacío por defecto)
		global.js            # Archivo para estilos globales JS (no usado actualmente)
index.html               # HTML principal
package.json             # Dependencias y scripts del proyecto
vite.config.js           # Configuración de Vite
eslint.config.js         # Configuración de ESLint
```

## Descripción de los archivos principales

- **App.jsx**: Define las rutas principales de la aplicación usando React Router.
- **main.jsx**: Punto de entrada, monta el componente App y envuelve con StrictMode y BrowserRouter.
- **components/Nav.jsx**: Barra de navegación con enlaces a Home y About.
- **components/Footer.jsx**: Pie de página (puede personalizarse).
- **components/TaskList.jsx**: Componente central para mostrar, agregar, editar y eliminar tareas. Usa Material UI y animaciones para UX.
- **pages/Home.jsx**: Página principal, muestra la navegación y la lista de tareas.
- **pages/About.jsx**: Página informativa sobre la app o el autor.
- **store/useStore.js**: Store global de tareas usando Zustand. Permite agregar, editar, eliminar y alternar tareas.
- **styles/global.css**: Archivo de estilos globales (vacío por defecto, puedes agregar tus estilos aquí).
- **styles/global.js**: Archivo opcional para estilos globales en JS (no usado actualmente).

## Estado global y lógica

El estado de las tareas se maneja con Zustand en `store/useStore.js`. Las tareas pueden:
- Agregarse
- Editarse
- Eliminarse
- Marcarse como completadas (con animación de fade out)

## UI y dependencias

Se utiliza [Material UI](https://mui.com/) para los componentes visuales y [React Router](https://reactrouter.com/) para la navegación.

## Scripts útiles

- `npm install` — Instala las dependencias
- `npm run dev` — Inicia el servidor de desarrollo
- `npm run build` — Genera la build de producción
- `npm run preview` — Previsualiza la build de producción

---
Puedes personalizar y expandir la aplicación agregando más páginas, hooks o funcionalidades según tus necesidades.
