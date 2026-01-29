// API pública de frases motivacionales: Quotable
// Docs: https://github.com/lukePeavey/quotable

export async function getRandomQuote() {
  const url = 'https://zenquotes.io/api/random';
  const response = await fetch(url);
  if (!response.ok) throw new Error('Error al obtener la frase motivacional');
  const data = await response.json();
  // La respuesta es un array con un objeto que contiene "q" (quote) y "a" (author)
  if (!Array.isArray(data) || !data[0]) throw new Error('Respuesta inesperada de la API de ZenQuotes');
  return {
    quote: data[0].q,
    author: data[0].a,
  };
}