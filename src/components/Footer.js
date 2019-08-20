import React from 'react';

import { Icon } from '@iconify/react';
import googlePlay from '@iconify/icons-fa-brands/google-play';
import appleFill from '@iconify/icons-ant-design/apple-fill';
import facebookIcon from '@iconify/icons-fa-brands/facebook';
import twitterCircleFill from '@iconify/icons-ant-design/twitter-circle-fill';


const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        {/* <img src="./iphone.png" alt='iphone' /> */}
      <div className='footer-left'>
      <div className='app-writing'>
      <h1>Download Properties App</h1>
      <p>Use your app to have access to all our rental properties</p>
      </div>
      <div className='footer-btn-container'>
      <a href="#-" className="footer-btn"><Icon icon={googlePlay} className='icon' /> Playstore</a>
      <a href="#-" className="footer-btn"><Icon icon={appleFill} className='icon' /> AppStore</a>
      </div>
      <div className='social-media'>
      <Icon icon={facebookIcon} className='facebook' />
      <Icon icon={twitterCircleFill} className='twitter' />
      </div>
      <h5>2019 Properties</h5>
      </div>
      <div className='footer-right'>
      <div className='tentants'>
        <h3>For Tentants</h3>
        <p>About Properties</p>
        <p>Sign Up for free</p>
        <p>This is us</p>
        <p>Properties APP</p>
      </div>
      <div className='advertisers'>
        <h3>For Advertisers</h3>
        <p>About Properties</p>
      </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer;