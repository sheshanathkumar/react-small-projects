import React, { useState } from "react";
import PropTypes from "prop-types";
import App from "./App";

export default function Navbar(props) {
  const [modes, setMode] = useState("light");

  const handleToggleMode = (e) => {
    setMode(modes === "dark" ? "light" : "dark");
    props.color(modes);
    // e.preventDefault();
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${modes} bg-${modes}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.name}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Contact
              </a>
            </li>
          </ul>

          <div
            className={`form-check form-switch text-${
              modes === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="darkmode"
              onClick={handleToggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  name: PropTypes.string,
};
