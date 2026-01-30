// Hook personalizado para obtener el clima actual según la ubicación del usuario.
// Utiliza la API de Open-Meteo y maneja errores de geolocalización o red.
// Uso: const { weather, error } = useWeather();
import { useEffect, useState } from 'react';
import { getWeather } from '../api/weatherApi';

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const data = await getWeather(position.coords.latitude, position.coords.longitude);
            setWeather(data);
          } catch {
            setError('The weather could not be retrieved. Please try again.');
          }
        },
        () => setError('Location not allowed')
      );
    } else {
      // Avoid calling setState synchronously in the effect body
      Promise.resolve().then(() => setError('Geolocation not supported'));
    }
  }, []);

  return { weather, error };
}