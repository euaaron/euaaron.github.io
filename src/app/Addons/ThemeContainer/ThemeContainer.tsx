import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../shared/assets/styles/global";
import TimeUtils from "../../shared/utils/time";
import { LivePlayer } from "../LivePlayer/LivePlayer";
import { NavBar } from "../NavBar/NavBar";
import { DarkTheme, LightTheme } from "./themes/default";

type ThemeState = {
  theme: DefaultTheme;
  hasPreferences: boolean;
};

export class ThemeContainer extends React.Component<{}, ThemeState> {
  constructor(props: any) {
    super(props);
    this.state = { theme: DarkTheme, hasPreferences: false };
  }

  componentDidMount() {
    this.setTheme();
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
            {this.state.theme === DarkTheme ? <FiMoon /> : <FiSun />}
          </button>
          <LivePlayer />
        </NavBar>
        {this.props.children}
      </ThemeProvider>
    );
  }
}
