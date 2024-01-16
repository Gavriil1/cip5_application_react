import React from "react";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.Footer}>
      {/* Add your footer content here */}
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary fixed-bottom" >
                  {/* Copyright */}
                      <div className="text-white mb-3 mb-md-0">
                        Copyright © 2024. All rights reserved.
                      </div>
                      {/* Copyright */}
                      {/* Right */}
                  <div>
                    <a href="https://www.facebook.com/" className="text-white me-4">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://twitter.com/?lang=en" className="text-white me-4">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="https://telegram.org/" className="text-white me-4">
                      <i className="fab fa-telegram" />
                    </a>
                    <a href="https://ie.linkedin.com/" className="text-white">
                      <i className="fab fa-linkedin-in" />
                    </a>
          </div>
              {/* Right */}
        </div>
    </footer>
  );
}

export default Footer;