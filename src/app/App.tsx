import React from "react";
import { Outlet } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { AppContainer } from "./App.styles";
import { NavBar } from "./NavBar/NavBar";
import { GlobalStyle } from "./shared/assets/styles/global";
import { DarkTheme, LightTheme } from "./shared/configs/themes/default";
import { ServiceLoader } from "./shared/http/services/ServiceLoader";
import TimeUtils from "./shared/utils/time";

type AppState = {
  theme: DefaultTheme;
};

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = this.setState();
    ServiceLoader.getInstance();
  }

  setState(): AppState {
    const hours = TimeUtils.hours;
    if (hours >= 18 || hours <= 6) {
      return { theme: DarkTheme };
    } else {
      return {
        theme: LightTheme,
      }
    }
  }

  render(): React.ReactNode {
    return (
      <AppContainer>
        <ThemeProvider theme={this.state.theme}>
          <GlobalStyle />
          <NavBar />
          <Outlet />
        </ThemeProvider>
      </AppContainer>
    );
  }
}

export default App;
