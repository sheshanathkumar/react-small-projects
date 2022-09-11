import React from "react";
import { links, social } from "./Links";

function Sidebar() {
  return (
    <div className="links-container show-container">
      <ul className="links">
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
  );
}

export default Sidebar;
