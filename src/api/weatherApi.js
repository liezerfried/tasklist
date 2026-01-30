// API pública de clima: Open-Meteo (no requiere API key)
// Docs: https://open-meteo.com/en/docs

export async function getWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Error al obtener el clima');
  const data = await response.json();
  return data.current_weather;
}