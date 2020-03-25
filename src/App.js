import React from "react";
import MainScreen from "./screens/MainScreen";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainScreen />
    </ThemeProvider>
  );
}

export default App;
