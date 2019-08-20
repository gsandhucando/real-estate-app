import React from 'react';
import MobileHeader from './MobileHeader';

const Header = ({mobile}) => {
	return (
		<>
		{ mobile ? <MobileHeader mobile={mobile} /> :
		<header className='header' >
			<div className="logo"><img src='./Properties_Logo.png' /></div>

			<nav>
				<a href="#-">Create Ads</a>
				<a href="#-">About Us</a>
				<a href="#-">Log In</a>
				<a href="#-" className="register-btn">
					Register
				</a>
			</nav>
		</header>
		}
		</>
	);
};

export default Header;