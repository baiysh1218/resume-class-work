import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="background-footer">
        <div className="container">
          <div className="footer-content">
            <h5>Company</h5>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-end">
            <div className="footer-end-text">
              <p className="footer-text">© 2020 - All rights reserved</p>
            </div>
            <div className="footer-icon">
              <img
                className="img-footer"
                src="https://cdn-icons-png.flaticon.com/128/7826/7826862.png"
                alt=""
              />
              <img
                className="img-footer"
                src="https://cdn-icons-png.flaticon.com/128/7826/7826858.png"
                alt=""
              />
              <img
                className="img-footer"
                src="https://cdn-icons-png.flaticon.com/128/7826/7826858.png"
                alt=""
              />
              <img
                className="img-footer"
                src="https://cdn-icons-png.flaticon.com/128/7826/7826858.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
