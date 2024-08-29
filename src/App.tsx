import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import { RtlProvider } from './RtlProvider.tsx';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';
import useStore from './useStore.ts';
function App() {
  const { darkMode } = useStore();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <RtlProvider>
        <RouterProvider router={router} />
      </RtlProvider>
    </ThemeProvider>
  );
}

export default App;
