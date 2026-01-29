// API pública de hora mundial: WorldTimeAPI (no requiere API key)
// Docs: http://worldtimeapi.org/pages/examples

export async function getTimeByTimezone(timezone = 'America/Argentina/Buenos_Aires') {
  const url = `https://worldtimeapi.org/api/timezone/${timezone}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Error al obtener la hora');
  const data = await response.json();
  return data.datetime;
}