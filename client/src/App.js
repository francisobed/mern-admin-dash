import { CssBaseline, ThemeProvider } from "@mui/material";
import {createTheme} from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { themeSettings } from "theme";

import Layout from './scenes/layout'
import Dashboard from './scenes/dashboard' // Here we import the dahsboard from the scenes component


function App() {

  const mode = useSelector((state) => state.global.mode); //this line will grab the state file
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return   <div className="App">
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Navigate to='/dashboard' replace />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
  </div>
  
}

export default App;
