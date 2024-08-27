import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Switch } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import { RtlProvider } from './RtlProvider.tsx';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (prefersDark) {
      setDarkMode(true);
    } else if (prefersLight) {
      setDarkMode(false);
    }
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <RtlProvider>
        <Switch
          sx={{ zIndex: 9999999, position: 'fixed', right: '80px', top: '15px' }}
          checked={darkMode}
          onChange={handleThemeChange}
        />
        <RouterProvider router={router} />
      </RtlProvider>
    </ThemeProvider>
  );
}

export default App;
