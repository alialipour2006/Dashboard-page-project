import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: {
      main: '#4caf50',
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
      main: '#fff',
    },
    secondary: {
      main: '#282f35',
    },
  },
});
