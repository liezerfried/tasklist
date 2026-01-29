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
        setError('No se pudo obtener la hora');
      }
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return { time, error };
}