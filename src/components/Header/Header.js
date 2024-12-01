import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">Company Name</h1>
        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <a href="#home" className="header__link">
            Home
          </a>
          <a href="#about" className="header__link">
            About
          </a>
          <a href="#contact" className="header__link">
            Contact
          </a>
        </nav>
        <button className="header__menu-btn" onClick={toggleMenu}>
          <span className="header__menu-icon"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
