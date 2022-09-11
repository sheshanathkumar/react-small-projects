import React, { useState } from "react";
import { FaBars, FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import logo from "./logo.svg";
import { links, social } from "./Links";

function Navbar() {
  const [showLink, setShowLink] = useState(false);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={() => setShowLink(!showLink)}>
            <FaBars />
          </button>
        </div>

        <div
          className={`${
            showLink ? "links-container show-container" : "links-container"
          }`}
        >
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((x) => {
            const { id, url, icon } = x;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
