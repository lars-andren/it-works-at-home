import "./App.css";
import { Routes } from "./Routes";

export const App = () => (
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://defa.com">
          <img
            src="https://www.defa.com/content/themes/defa/dist/images/defa-logo.svg"
            width="112"
            height="28"
          />
        </a>
      </div>
    </nav>
    <Routes />
  </div>
);
