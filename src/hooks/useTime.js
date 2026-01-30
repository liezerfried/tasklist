// Hook personalizado para obtener la hora actual en la zona horaria de Argentina.
// Devuelve la hora actualizada cada segundo y maneja errores si la zona horaria no es soportada.
// Uso: const { time, error } = useTime();
// filepath: src/hooks/useTime.js
import { useEffect, useState } from 'react';

export function useTime(timezone = 'America/Argentina/Buenos_Aires') {
  const [time, setTime] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    function updateTime() {
      try {
        // Usa la zona horaria de Argentina
        const date = new Date();
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'America/Argentina/Buenos_Aires' };
        setTime(date.toLocaleTimeString('es-AR', options));
        setError(null);
      } catch {
        setError('The time could not be obtained.');
      }
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return { time, error };
}