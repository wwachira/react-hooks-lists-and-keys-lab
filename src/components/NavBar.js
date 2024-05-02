import React from "react";

function NavBar({ home, about, projects }) {
  return (
    <div>
      <nav>{home}</nav>
      <nav>{about}</nav>
      <nav>{projects}</nav>
    </div>
  );
}

export default NavBar;