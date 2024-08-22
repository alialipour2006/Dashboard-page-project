import { createTheme } from '@mui/material/styles';

// Configure JSS with
// Define the light theme
export const lightTheme = createTheme({
  direction: 'rtl', // Right-to-left direction
  palette: {
    mode: 'light',
    primary: {
      main: '#00FF00',
    },
    secondary: {
      main: '#DBE0EB',
    },
  },
});

// Define the dark theme
export const darkTheme = createTheme({
  direction: 'rtl', // Right-to-left direction
  palette: {
    mode: 'dark',
    primary: {
      main: '#0d1b26',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});
