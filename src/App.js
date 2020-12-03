import "./App.css";
import { Routes } from "./Routes";

export const App = () => (
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation" style={{justifyContent: "space-between", "display": "flex"}}>
      <div class="navbar-brand">
        <a class="navbar-item" href="https://defa.com">
          <img
            src="https://www.defa.com/content/themes/defa/dist/images/defa-logo.svg"
            width="80"
            height="28"
            alt="Defa logoytype"
          />
        </a>

      </div>
      <div class="navbar-brand">
        <a class="navbar-item" href="https://defa.com">
          <img
            src="it-works-at-home-logo.png"
            alt="IT works @ home logoytype"
            className="logo-image"
          />
        </a>
        </div>
    </nav>
    <Routes />
  </div>
);
