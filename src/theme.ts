import { createTheme } from '@mui/material/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@mui/styles';

// Configure JSS with RTL
export const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// Define the light theme
export const lightTheme = createTheme({
  direction: 'rtl', // Right-to-left direction
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

// Define the dark theme
export const darkTheme = createTheme({
  direction: 'rtl', // Right-to-left direction
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});
