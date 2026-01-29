
// Barra de navegación principal con enlaces a Home y About usando Material UI.
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box'


const Nav = () => {
  // Renderiza botones de navegación
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '4rem', // Más espacio arriba
      }}
    >
      <ButtonGroup variant="contained" size='large' aria-label="navigation button group">
        <Button component={Link} to="/tasklist/home">
          Home
        </Button>
        <Button component={Link} to="/tasklist/about">
          About
        </Button>
      </ButtonGroup>
    </Box>
  )
}

// Exporta el componente de navegación
export default Nav