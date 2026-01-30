// Componente que muestra la información del clima actual usando el hook useWeather.
// Muestra temperatura y código de clima según la ubicación del usuario.
import { useWeather } from '../hooks/useWeather';

const WeatherInfo = () => {
  const { weather, error } = useWeather();

  if (error) return <div className="weather-info">{error}</div>;
  if (!weather) return <div className="weather-info">Loading Weather...</div>;

  return (
    <div className="weather-info">
      <span>🌡️ {weather.temperature}°C</span>
    </div>
  );
};

export default WeatherInfo;