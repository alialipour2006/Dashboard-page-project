import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import { RtlProvider } from './RtlProvider.tsx';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';
import useStore from './useStore.ts';
function App() {
  //FIXME: move mode to the zustandZZZZ
  const { darkMode, toggleMode } = useStore();

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (prefersDark) {
      toggleMode(true);
    } else if (prefersLight) {
      toggleMode(false);
    }
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <RtlProvider>
        <RouterProvider router={router} />
      </RtlProvider>
    </ThemeProvider>
  );
}

export default App;
