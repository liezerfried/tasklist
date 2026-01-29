import WeatherInfo from './WeatherInfo';
import TimeInfo from './TimeInfo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <WeatherInfo />
      </div>
      <div className="footer-right">
        <TimeInfo />
      </div>
    </footer>
  );
};

export default Footer;