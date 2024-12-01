import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__about">
          <h3>Artacode</h3>
          <p>
            Delivering excellence and innovation for your business needs. Let's shape the future together.
          </p>
        </div>
        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer__social">
          <h4>Follow Us</h4>
          <div className="footer__social-icons">
            <a href="https://www.facebook.com/dohertyleonardo"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.facebook.com/dohertyleonardo"><i className="fab fa-twitter"></i></a>
            <a href="https://www.facebook.com/dohertyleonardo"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.facebook.com/dohertyleonardo"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 Artacode. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
