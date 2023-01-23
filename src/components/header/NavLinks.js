import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const [showMenu, setShowMenu] = useState(false);

  // STUB: pop out drawer onclick
  const toggleMenu = () => {
    if (!showMenu) {
      document.querySelector(".menu-btn__burger").classList.add("open");
      document.querySelector(".nav").classList.add("open");
      document.querySelector(".menu-nav").classList.add("open");
      document
        .querySelectorAll(".menu-nav__item")
        .forEach((item) => item.classList.add("open"));

      setShowMenu(true);
    } else {
      document.querySelector(".menu-btn__burger").classList.remove("open");
      document.querySelector(".nav").classList.remove("open");
      document.querySelector(".menu-nav").classList.remove("open");
      document
        .querySelectorAll(".menu-nav__item")
        .forEach((item) => item.classList.remove("open"));

      setShowMenu(false);
    }
  };

  return (
    <>
      <div className="menu-btn" onClick={toggleMenu}>
        <span className="menu-btn__burger"></span>
      </div>

      <nav className="nav">
        <ul className="menu-nav">
          <li className="menu-nav__item" onClick={toggleMenu}>
            <Link to="/" className="menu-nav__link">
              Home
            </Link>
          </li>
          <li className="menu-nav__item" onClick={toggleMenu}>
            <Link to="about" className="menu-nav__link">
              About Me
            </Link>
          </li>
          <li className="menu-nav__item" onClick={toggleMenu}>
            <Link to="projects" className="menu-nav__link">
              My Projects
            </Link>
          </li>
          <li className="menu-nav__item" onClick={toggleMenu}>
            <Link to="contact" className="menu-nav__link">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavLinks;
