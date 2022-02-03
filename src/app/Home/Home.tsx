import logo from "../shared/assets/images/logo.svg";
import { PillButton } from "../shared/components/PillButton/PillButton";
import "./Home.css";

export function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PillButton to='/projects' text='Projects'/>
      </header>
    </div>
  );
}
