import './App.css'
import NewUser from "./components/NewUser.tsx";
import { RtlProvider } from '/RtlProvider.tsx';
import theme from "./theme.ts";
import {ThemeProvider} from "@mui/material";


function App() {

  return (
      <ThemeProvider theme={theme}>
      <RtlProvider>
          <NewUser/>
      </RtlProvider>
        </ThemeProvider>
  )
}

export default App
