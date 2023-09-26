import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./Styles/Theme/default";
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from "./Styles/global";
import { Router } from "./Routes";


function App() {
  return (
    <>
    <ThemeProvider theme={defaultTheme}>
       <GlobalStyle/>
       <BrowserRouter>
         <Router/>
       </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App
