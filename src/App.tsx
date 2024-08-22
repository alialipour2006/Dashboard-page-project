import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Switch } from '@mui/material';
import { StylesProvider } from '@mui/styles';
import { lightTheme, darkTheme, jss } from './theme';
import Allroute from './Allroute';
import { RtlProvider } from './RtlProvider.tsx';
function App (){
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <RtlProvider>
        <CssBaseline />
        <div dir="rtl">
          <Switch sx={{zIndex: 9999999}} checked={darkMode} onChange={handleThemeChange} />
          <Allroute />
        </div>
        </RtlProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
