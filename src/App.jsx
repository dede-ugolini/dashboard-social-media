import { CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';

import Dashboard from './Dashboard';
import Header from './Header';
import { darkTheme, lightTheme } from './theme/theme';

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Dashboard />
      </ThemeProvider>
    </>
  )
}

export default App
