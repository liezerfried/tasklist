// Componente que muestra una frase motivacional aleatoria y permite cambiarla.
// Utiliza Material UI para el diseño de la tarjeta y Emotion para estilos.
// Las frases se obtienen de src/assets/quotes.js.
import React, { useState } from "react";
import quotes from "../assets/quotes";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { css } from "@emotion/react";

function QuoteInfo() {
  const [quote, setQuote] = useState(() =>
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  const handleNewQuote = () => {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote.q === quote.q && quotes.length > 1);
    setQuote(newQuote);
  };

  return (
    <Card
      sx={{
        maxWidth: 350,
        margin: "32px auto",
        background: "#f5f5f5",
        boxShadow: 3,
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          component="p"
          sx={{ fontStyle: "italic", marginBottom: 2 }}
        >
          "{quote.q}"
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{ textAlign: "right", fontWeight: "bold", marginBottom: 2 }}
        >
          - {quote.a}
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          onClick={handleNewQuote}
          css={css`
            display: block;
            margin: 0 auto;
          `}
        >
          New quote
        </Button>
      </CardContent>
    </Card>
  );
}

export default QuoteInfo;