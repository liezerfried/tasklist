import React, { useEffect, useState } from "react";

// WeatherInfo: muestra la temperatura actual usando weatherapi.com
const WeatherInfo = () => {
  const [temperature, setTemperature] = useState(null);
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
      async (position) => {
        try {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const apiKey = import.meta.env.VITE_WEATHERAPI_KEY;
          const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`;
          const res = await fetch(url);
          const data = await res.json();
          if (data.current && typeof data.current.temp_c === "number") {
            setTemperature(data.current.temp_c);
          } else if (data.error && data.error.message) {
            setError(data.error.message);
          } else {
            setError("Weather data unavailable");
          }
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