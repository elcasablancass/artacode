import React, { useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router";
import ArtaLogo from "../assets/ArtaLogo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container arta-container">
        <NavLink to="/" className="header__logo">
          <ArtaLogo />
        </NavLink>
        <button
          className={`header__menu-btn ${isMenuOpen ? "header__menu-btn--open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="header__menu-icon"></span>
          <span className="header__menu-icon"></span>
          <span className="header__menu-icon"></span>
        </button>
        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <NavLink to="/" className="header__link" onClick={() => setIsMenuOpen(false)}>
            <i className="fas fa-home header__icon"></i> Home
          </NavLink>
          <NavLink to="/about" className="header__link" onClick={() => setIsMenuOpen(false)}>
            <i className="fas fa-info-circle header__icon"></i> About
          </NavLink>
          <NavLink to="/contact" className="header__link" onClick={() => setIsMenuOpen(false)}>
            <i className="fas fa-envelope header__icon"></i> Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
