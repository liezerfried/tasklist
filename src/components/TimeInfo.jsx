// Componente que muestra la hora actual usando el hook useTime.
// Muestra la hora en la zona horaria de Argentina.
import { useTime } from '../hooks/useTime';

const TimeInfo = () => {
  const { time, error } = useTime();

  if (error) return <div className="time-info">{error}</div>;
  if (!time) return <div className="time-info">Loading Hour...</div>;

  return (
    <div className="time-info">🕒 {time}</div>
  );
};

export default TimeInfo;