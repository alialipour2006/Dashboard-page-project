import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Allroute from './Allroute';
import { RtlProvider } from './RtlProvider.tsx';
import theme from './theme.ts';
import { ThemeProvider } from '@mui/material';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RtlProvider>
    <BrowserRouter>
      <Allroute />
    </BrowserRouter>
    </RtlProvider>
    </ThemeProvider>
  );
}

export default App;
