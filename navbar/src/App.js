import logo from "./logo.svg";
import "./App.css";
import { FaBars } from "react-icons/fa";

function App() {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container show-container">
          <ul className="links">
            <li>
              <a href="#">HOME</a>
              <a href="#">PROFILE</a>
              <a href="#">SOCIAL</a>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
        <ul className="social-icons"></ul>
      </div>
    </nav>
  );
}

export default App;
