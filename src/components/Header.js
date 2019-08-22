import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileHeader from "./MobileHeader";

const Header = () => {
  let [mobile, setMobile] = useState(false);

  let updateDimensions = () => {
    if (window.innerWidth <= 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);
  return (
    <>
      {mobile ? (
        <MobileHeader mobile={mobile} />
      ) : (
        <header className={mobile ? "mobile-header" : "main-header"}>
          <div className="logo">
            <Link to="/">
              <img src="./Properties_Logo.png" alt="logo" />
            </Link>
          </div>

          <nav>
            <a href="#-">Create Ads</a>
            <a href="#-">About Us</a>
            <a href="#-">Log In</a>
            <a href="#-" className="register-btn">
              Register
            </a>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
