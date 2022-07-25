
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { useContext } from 'react';
import { MaterialUISwitch } from './components/ui';
import { UIContext } from './context/ui';
import HomePage from './pages/HomePage';

import { darkTheme } from './themes';
import { lightTheme } from './themes';

function App() {
  const  { theme,toggleTheme } = useContext( UIContext )

  return (
  
          <ThemeProvider theme={ theme? darkTheme : lightTheme }>
            <CssBaseline />
              <Box sx={{ position: 'absolute', right: '10px',top:'10px'}}>
                <MaterialUISwitch onClick={toggleTheme}/> 
              </Box>
              <Box>
                <HomePage />
              </Box>
          </ThemeProvider>
   
  );
}

export default App;
