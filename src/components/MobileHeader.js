import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH
} from "@fortawesome/free-solid-svg-icons";

//font awesome incons

const MobileHeader = ({mobile}) => {
  let [burger, setBurger] = useState(false)

  function burgerClick() {
    console.log('click')
    setBurger(!burger)

  }
  const ellipise = <FontAwesomeIcon className={burger ? 'mobile-burger' : 'mobile-burger-animation'} icon={faEllipsisH} onClick={burgerClick} />;

  let styles= {
    hideNav: {
      opacity: 0,
      visibility: 'hidden'
    },
    showNav: {
      opacity: 1,
      visibility: 'visible'
    }
  }

  return(
		<header className='mobile-header'>
      {ellipise}
			<div className="logo mobile-nav"><img src='./Properties_Logo.png' alt='ellipise' /></div>

			<nav style={!burger ? styles.hideNav : styles.showNav}>
				<a href="#-">Create Ads</a>
				<a href="#-">About Us</a>
				<a href="#-">Log In</a>
				<a href="#-" className="register-btn">
					Register
				</a>
			</nav>
		</header>
  )
}

export default MobileHeader;