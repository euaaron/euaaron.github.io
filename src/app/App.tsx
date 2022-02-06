import React from "react";
import { Outlet } from "react-router-dom";
import { LivePlayer } from "./Addons/LivePlayer/LivePlayer";
import { ThemeContainer } from "./Addons/ThemeContainer/ThemeContainer";
import { AppContainer } from "./App.styles";
import { ServiceLoader } from "./shared/http/services/ServiceLoader";

export class App extends React.Component {
  private serviceLoader = ServiceLoader.getInstance();

  render(): React.ReactNode {
    return (
      <ThemeContainer>
        <AppContainer>
          <Outlet />
        </AppContainer>
        <LivePlayer />
      </ThemeContainer>
    );
  }
}

export default App;
