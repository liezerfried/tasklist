import React, { useEffect, useState } from "react";

// WeatherInfo: muestra la temperatura actual usando weatherapi.com
const WeatherInfo = () => {
  const [temperature] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      Promise.resolve().then(() => {
        setError("Geolocation not supported");
        setLoading(false);
      });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async () => {
        try {
          // Aquí deberías implementar la consulta al clima usando un backend seguro
          setError("Weather API key removed. Implement backend proxy for weather data.");
        } catch {
          setError("Could not fetch weather");
        }
        setLoading(false);
      },
      () => {
        setError("Location not allowed");
        setLoading(false);
      }
    );
  }, []);

  if (loading) return <div className="weather-info">Loading weather...</div>;
  if (error) return <div className="weather-info">{error}</div>;
  return (
    <div className="weather-info">
      <span>🌡️ {temperature}°C</span>
    </div>
  );
};

export default WeatherInfo;