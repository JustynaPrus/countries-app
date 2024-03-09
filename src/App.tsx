import React, { useState } from 'react';
import { CountriesPage } from "./pages/CountriesPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/nunito-sans";
import "./App.css";
import { Switch } from '@mui/material';

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode  ? 'dark' : 'light',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <React.Fragment>
        <CssBaseline />
        <Switch checked={toggleDarkMode} onChange={toggleDarkTheme}/>
        <CountriesPage />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
