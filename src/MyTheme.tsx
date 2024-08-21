import { createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import { dark, light } from '@mui/material/styles/createPalette';

export default createMuiTheme({
    palette: {
        primary: { // works
          light: '#fff',
          dark: '#fff',
          contrastText: '#fff',
        },
        secondary: { // works
          main: '#69BE28',
          contrastText: '#fff',
        },
        companyBlue: { // doesn’t work - defaults to a grey button
            main: '#65CFE9',
            contrastText: '#fff',
        },
        companyRed: { // doesn’t work - grey button
            main: '#E44D69',
            contrastText: '#000',
        },
        accent: { // doesnt work - grey button
            main: purple, // import purple doesn’t work
            contrastText: '#000',
        },
    },
});