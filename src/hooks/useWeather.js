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
            setError('No se pudo obtener el clima');
          }
        },
        () => setError('Ubicación no permitida')
      );
    } else {
      // Avoid calling setState synchronously in the effect body
      Promise.resolve().then(() => setError('Geolocalización no soportada'));
    }
  }, []);

  return { weather, error };
}