
// Pie de página de la aplicación.
// Muestra información del clima, la hora y enlaces a redes sociales.
import WeatherInfo from './WeatherInfo';
import TimeInfo from './TimeInfo';
import Button from '@mui/material/Button';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <WeatherInfo />
        </div>
        <div className="footer-right">
          <TimeInfo />
        </div>
      </div>
      <div className="footer-buttons">
        <Button
           variant="contained"
           color="info"
           href="https://github.com/liezerfried"
           target="_blank"
           rel="noopener noreferrer"
           sx={{ mx: 2 }}
        >
          GitHub
        </Button>
        <Button
           variant="contained"
           color="info"
           href="https://www.linkedin.com/in/luciano-fried-a22b86248"
           target="_blank"
           rel="noopener noreferrer"
           sx={{ mx: 2 }}
        >
          LinkedIn
        </Button>
      </div>
    </footer>
  );
};

export default Footer;