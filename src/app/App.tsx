import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppContainer } from "./App.styles";
import { GlobalStyle } from "./assets/styles/global";
import { DarkTheme, LightTheme } from "./configs/themes/default";
import { ServiceLoader } from "./shared/http/services/ServiceLoader";
import TimeUtils from "./shared/utils/time";

function App() {
  ServiceLoader.getInstance();

  let theme = LightTheme;
  const hours = TimeUtils.hours;  

  if (hours >= 18 || hours <= 6) {
    theme = DarkTheme;
  }

  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <Outlet />
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;
