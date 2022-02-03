import React from "react";
import { Moon, Sun } from "react-feather";
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
  hasPreferences: boolean;
};

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { theme: DarkTheme, hasPreferences: false };
    ServiceLoader.getInstance();
  }

  setTheme() {
    if (!this.state.hasPreferences) {
      const hours = TimeUtils.hours;
      if (hours >= 18 || hours <= 6) {
        this.setState({ theme: DarkTheme });
      } else {
        this.setState({ theme: LightTheme });
      }
    }
  }

  toggleTheme(): void {
    this.setState({
      theme: this.state.theme === DarkTheme ? LightTheme : DarkTheme,
      hasPreferences: true,
    });
  }

  render(): React.ReactNode {
    return (
      <ThemeProvider theme={this.state.theme}>
        <GlobalStyle />
        <NavBar>
          <button onClick={() => this.toggleTheme()} title="Alterar Tema">
            {this.state.theme === DarkTheme ? <Moon /> : <Sun />}
          </button>
        </NavBar>
        <AppContainer>
          <Outlet />
        </AppContainer>
      </ThemeProvider>
    );
  }
}

export default App;
