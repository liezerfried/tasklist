

# TaskList App

Aplicación de lista de tareas construida con React, Vite y Zustand para el manejo de estado global. Utiliza Material UI para los componentes visuales y React Router para la navegación.

Incluye funcionalidades adicionales como:
- Visualización del clima actual según tu ubicación (Open-Meteo)
- Visualización de la hora actual (zona horaria de Argentina)
- Frases motivacionales aleatorias

## Estructura del proyecto


```
src/
	App.jsx                # Componente principal, define las rutas de la app
	main.jsx               # Punto de entrada, monta la app en el DOM
	assets/
		quotes.js           # Frases motivacionales
	components/
		Footer.jsx           # Pie de página de la app (clima, hora, enlaces)
		Nav.jsx              # Barra de navegación principal
		TaskList.jsx         # Componente principal de la lista de tareas
		QuoteInfo.jsx        # Muestra una frase motivacional aleatoria
		WeatherInfo.jsx      # Muestra el clima actual
		TimeInfo.jsx         # Muestra la hora actual
		AboutInfo.jsx        # Información sobre la app
	hooks/
		useTime.js           # Hook personalizado para obtener la hora
		useWeather.js        # Hook personalizado para obtener el clima
	pages/
		About.jsx            # Página "Acerca de"
		Home.jsx             # Página principal, muestra la lista de tareas
	store/
		useStore.js          # Store global de tareas usando Zustand
	styles/
		global.css           # Estilos globales
index.html               # HTML principal
package.json             # Dependencias y scripts del proyecto
vite.config.js           # Configuración de Vite
eslint.config.js         # Configuración de ESLint
```


## Descripción de los archivos principales

- **App.jsx**: Define las rutas principales de la aplicación usando React Router.
- **main.jsx**: Punto de entrada, monta el componente App y envuelve con StrictMode y BrowserRouter.
- **components/Nav.jsx**: Barra de navegación con enlaces a Home y About.
- **components/Footer.jsx**: Pie de página, muestra clima, hora y enlaces a redes.
- **components/TaskList.jsx**: Componente central para mostrar, agregar, editar y eliminar tareas. Usa Material UI y animaciones para UX.
- **components/QuoteInfo.jsx**: Muestra una frase motivacional aleatoria y permite cambiarla.
- **components/WeatherInfo.jsx**: Muestra el clima actual según tu ubicación.
- **components/TimeInfo.jsx**: Muestra la hora actual (zona horaria de Argentina).
- **components/AboutInfo.jsx**: Información sobre la app y su propósito.
- **pages/Home.jsx**: Página principal, muestra la navegación, la lista de tareas y una frase motivacional.
- **pages/About.jsx**: Página informativa sobre la app o el autor.
- **store/useStore.js**: Store global de tareas usando Zustand. Permite agregar, editar, eliminar y alternar tareas.
- **hooks/useTime.js**: Hook personalizado para obtener la hora actual.
- **hooks/useWeather.js**: Hook personalizado para obtener el clima actual.
- **styles/global.css**: Archivo de estilos globales.


## Estado global y lógica

El estado de las tareas se maneja con Zustand en `store/useStore.js`. Las tareas pueden:
- Agregarse
- Editarse
- Eliminarse
- Marcarse como completadas (con animación de fade out)

La información del clima y la hora se obtiene mediante hooks personalizados (`useWeather.js` y `useTime.js`). Las frases motivacionales se obtienen de un archivo de recursos (`assets/quotes.js`).


## UI y dependencias

Se utiliza [Material UI](https://mui.com/) para los componentes visuales y [React Router](https://reactrouter.com/) para la navegación. Para el clima se usa la API pública de [Open-Meteo](https://open-meteo.com/), y para las frases motivacionales un archivo local.

## Scripts útiles

- `npm install` — Instala las dependencias
- `npm run dev` — Inicia el servidor de desarrollo
- `npm run build` — Genera la build de producción
- `npm run preview` — Previsualiza la build de producción

---
Puedes personalizar y expandir la aplicación agregando más páginas, hooks o funcionalidades según tus necesidades.
