import { useWeather } from '../hooks/useWeather';

const WeatherInfo = () => {
  const { weather, error } = useWeather();

  if (error) return <div className="weather-info">{error}</div>;
  if (!weather) return <div className="weather-info">Loading Weather...</div>;

  return (
    <div className="weather-info">
      <span>🌡️ {weather.temperature}°C</span>
      <span> | {weather.weathercode !== undefined ? `Code: ${weather.weathercode}` : ''}</span>
    </div>
  );
};

export default WeatherInfo;