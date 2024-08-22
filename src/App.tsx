import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Switch } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import Allroute from './Allroute';
import { RtlProvider } from './RtlProvider.tsx';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <RtlProvider>
        <Switch
          sx={{ zIndex: 9999999, position: 'fixed', right: '80px', top: '15px' }}
          checked={darkMode}
          onChange={handleThemeChange}
        />
        <Allroute />
      </RtlProvider>
    </ThemeProvider>
  );
}

export default App;
