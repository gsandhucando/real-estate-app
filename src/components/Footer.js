import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons'

//font awesome incons
const facebook = <FontAwesomeIcon className='facebook' icon={faFacebookF} />;
const twiiter = <FontAwesomeIcon className='twitter' icon={faTwitter} />;
const googlePlay = <FontAwesomeIcon className='icon' icon={faGooglePlay} />;
const apple = <FontAwesomeIcon className='icon' icon={faApple} />;


const Footer = ({mobile}) => {
  return (
    <footer id={!mobile ? 'def-footer' : 'mobile-footer'}>
      <div className={!mobile ? 'footer-container' : 'mobile-footer-container'}>
        {/* <img src="./iphone.png" alt='iphone' /> */}
      <div className={!mobile ? 'footer-left' : 'mobile-footer-left'}>
      <div className='app-writing'>
      <h1>Download Properties App</h1>
      <p>Use your app to have access to all our rental properties</p>
      </div>
      <div className='footer-btn-container'>
      <a href="#-" className="footer-btn">{googlePlay} Playstore</a>
      <a href="#-" className="footer-btn">{apple} AppStore</a>
      </div>
      <div className='social-media'>
        {facebook}
        {twiiter}
      </div>
      <h5>2019 Properties</h5>
      </div>
      <div className={!mobile ? 'footer-right' : 'mobile-footer-right'}>
      <div className='tentants'>
        <h3>For Tentants</h3>
        <p>About Properties</p>
        <p>Sign Up for free</p>
        <p>This is us</p>
        <p>Properties APP</p>
      </div>
      <div className={!mobile ? 'advertisers' : 'mobile-advertisers'}>
        <h3>For Advertisers</h3>
        <p>About Properties</p>
      </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer;