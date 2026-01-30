

// Componente principal de la aplicación. Define las rutas principales usando React Router.
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route, Navigate } from 'react-router-dom'


// Renderiza las rutas principales de la app.
function App() {
  return (
    <>
      <Routes>
        {/* Redirige la raíz a la página principal */}
        <Route path="/" element={<Navigate to="/tasklist/home" replace />} />
        {/* Página principal */}
        <Route path="/tasklist/home" element={<Home />} />
        {/* Página Acerca de */}
        <Route path="/tasklist/about" element={<About />} />
      </Routes>
    </>
  )
}

// Exporta el componente principal
export default App
