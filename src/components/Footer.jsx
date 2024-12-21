import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="connect">
            <span className="linksvg">
              <img src="/assets/link.svg" alt="link" />
            </span>
            <h3>Connect with me</h3>
          </div>
          <ul>
            <li>
              <a
                href="https://github.com/Eagleclaw123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
                <span>Manideep</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:manideep.workspace@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope"></i>
                <span>manideep.workspace@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/gundu_manideep"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
                <span>@gundu_manideep</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/manideep-gundu-203198284/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
                <span>Manideep G</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
