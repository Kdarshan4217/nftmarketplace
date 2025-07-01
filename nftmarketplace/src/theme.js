import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8e2de2',
    },
    secondary: {
      main: '#4a00e0',
    },
    background: {
      default: '#0e0e1a',
      paper: '#1c1c2e',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    body1: { fontSize: '1.1rem' },
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;
