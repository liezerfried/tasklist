
// Punto de entrada de la aplicación. Monta el componente App en el DOM y envuelve con StrictMode y BrowserRouter.
import { StrictMode } from 'react'
import './styles/global.css';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Habilita el enrutamiento y las comprobaciones estrictas de React */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
