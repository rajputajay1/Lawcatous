
import './App.css'
import Appbar from './component/appbar'
import MainContent from './component/MainContent'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import SimpleBottomNavigation from './component/bottom';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <div >
        <Appbar check={isDarkMode} change={handleDarkModeToggle} >
        </Appbar>
        <MainContent check={isDarkMode} />
        <SimpleBottomNavigation check={isDarkMode}></SimpleBottomNavigation>
      </div>
    </ThemeProvider>


  )
}

export default App
