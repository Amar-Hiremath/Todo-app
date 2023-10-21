import React from "react";
import "./Header.css";
import {useTheme, Box, IconButton } from "@mui/material";
import LightModeOutLinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutlined";
import { ColorModeContext, tokens } from "../theams";
import { useContext } from "react";

function App() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box bagroundcolor={colors.primary[500]} display="flex" justifyContent="center">
      <h3 className="heading">Todo App</h3>
      <div className="mode">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutLinedIcon/>
          ) : (
            <LightModeOutLinedIcon />
          )}
        </IconButton>
      </div>
    </Box>
  );
}

export default App;
