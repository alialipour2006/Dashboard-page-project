import { createTheme } from '@mui/material/styles';


export const lightTheme = createTheme({
  direction: 'rtl', 
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

export const darkTheme = createTheme({
  direction: 'rtl', 
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
