
// Componente informativo sobre la aplicación.
// Explica el propósito de la app y sus funcionalidades principales.
import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutInfo = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '40vh',
      bgcolor: 'background.paper',
      borderRadius: 2,
      boxShadow: 3,
      p: 4,
      maxWidth: 500,
      margin: '2rem auto',
    }}
    className="about-info"
  >
    <Typography
      variant="h3"
      component="h2"
      align="center"
      gutterBottom
      sx={{
        fontWeight: 'bold',
        color: 'primary.main',
        letterSpacing: 1,
        mb: 2,
        textShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      What is this page about?
    </Typography>
    <Typography
      variant="body1"
      align="center"
      sx={{
        color: 'text.secondary',
        fontSize: '1.25rem',
        lineHeight: 1.7,
        maxWidth: 520,
        fontWeight: 400,
        background: 'rgba(255,255,255,0.7)',
        borderRadius: 2,
        px: 2,
        py: 1,
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
      }}
    >
      This page is a task list application that allows you to organize your tasks easily. Additionally, it includes useful information such as the weather, time, and motivational quotes to accompany you throughout your day.
    </Typography>
  </Box>
);

export default AboutInfo;