import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RtlProvider } from './RtlProvider.tsx';
import theme from "./theme.ts";
import {ThemeProvider} from "@mui/material";
import './App.css'
import App from './App.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RtlProvider>
      
         <App/>
       
      </RtlProvider>
    </ThemeProvider> 
  </StrictMode>
)
