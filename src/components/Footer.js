import React from "react";

/*
  The component displays the footer at the bottom of the page
*/

function Footer() {
  return (
    <footer>
      <div
        className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-1 px-1 px-xl-5 fixed-bottom"
        style={{ backgroundColor: "#004085", minHeight: "50px" }}
      >
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2024.All rights reserverd
        </div>
        <div>
          <a href="https://www.facebook.com/" className="text-white me-4" aria-label="Facebook">
            <i className="fab fa-facebook-f" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/?lang=en" className="text-white me-4" aria-label="Twitter">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://telegram.org/" className="text-white me-4" aria-label="Telegram">
            <i className="fab fa-telegram" />
          </a>
          <a href="https://ie.linkedin.com/" className="text-white" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
