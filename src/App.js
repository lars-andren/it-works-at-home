import "./App.css";
import { Routes } from "./Routes";

export const App = () => (
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation" style={{justifyContent: "space-between", paddingRight: 20}}>
      <div class="navbar-brand">
        <a class="navbar-item" href="https://defa.com">
          <img
            src="https://www.defa.com/content/themes/defa/dist/images/defa-logo.svg"
            width="112"
            height="28"
            alt="Defa logoytype"
          />
        </a>

      </div>
      <div class="navbar-brand">
        <a class="navbar-item" href="https://defa.com">
          <img
            src="it-works-at-home-logo.png"
            width="140"
            height="60"
            alt="IT works @ home logoytype"
          />
        </a>
        </div>
    </nav>
    <Routes />
  </div>
);
