import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div id="header-background">
      <div className="container">
        <div id="intro">
          <div id="intro-img">
            <img
              id="img-char"
              src="https://i.pinimg.com/474x/f4/dc/3b/f4dc3b71684db1ced74c570b6b643242.jpg"
              alt=""
            />
          </div>
          <div>
            <div className="intro_about-me">
              <h1 className="name-tag" class="intro_name">
                Robert Downey Jr.
              </h1>
              <p className="intro_profession">актёр, продюсер и музыкант.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
