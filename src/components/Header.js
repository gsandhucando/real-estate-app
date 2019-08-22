import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

// import MobileHeader from "./MobileHeader";

const Header = ({location}) => {
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

  let [burger, setBurger] = useState(false);

  function burgerClick() {
    // console.log('click')
    setBurger(!burger);
  }
  const ellipise = (
    <FontAwesomeIcon
      className={burger ? "mobile-burger" : "mobile-burger-animation"}
      icon={faEllipsisH}
      onClick={burgerClick}
    />
  );

  let styles = {
    hideNav: {
      opacity: 0,
      visibility: "hidden"
    },
    showNav: {
      opacity: 1,
      visibility: "visible"
    }
  };

  return (
    <>
      {mobile ? (
        <header className="mobile-header">
        {ellipise}
        <div className="logo mobile-nav">
          <Link to="/">
            <img src={`${location.pathname.split('/').length > 2 ? '..' : '.'}/Properties_Logo.png`} alt="ellipise" />
          </Link>
        </div>

        <nav style={!burger ? styles.hideNav : styles.showNav}>
          <a href="#-">Create Ads</a>
          <a href="#-">About Us</a>
          <a href="#-">Log In</a>
          <a href="#-" className="register-btn">
            Register
          </a>
        </nav>
      </header>
      ) : (
        <header className={mobile ? "mobile-header" : "main-header"}>
          <div className="logo">
            <Link to="/">
              <img src={`${location.pathname.split('/').length > 2 ? '..' : '.'}/Properties_Logo.png`} alt="logo" />
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
