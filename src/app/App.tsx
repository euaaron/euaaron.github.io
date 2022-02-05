import React from "react";
import { Outlet } from "react-router-dom";
import { AppContainer } from "./App.styles";
import { ThemeContainer } from "./Core/ThemeContainer/ThemeContainer";
import { LivePlayer } from "./LivePlayer/LivePlayer";
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
