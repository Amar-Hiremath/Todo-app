import React from "react";
import Todos from "./components/Todos/Todos";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./components/theams";
import "./App.css";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Todos />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
