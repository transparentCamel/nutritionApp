import React from 'react';
import { FooterStyles } from './Footer.Styles';
import instagram from '../../../assets/svg/instagram.svg';
import linkedIn from '../../../assets/svg/linkedin.svg';
import facebook from '../../../assets/svg/square-facebook.svg';
import twitter from '../../../assets/svg/square-x-twitter.svg';
export default function Footer() {
  return (
    <FooterStyles>
      <div className='column'>
        <h3>Get in touch with us for your service</h3>
        <span className='svgContainer'>
          <img src={instagram} alt='Instagram icon' />
          <img src={linkedIn} alt='LinkedIn icon' />
          <img src={facebook} alt='Facebook icon' />
          <img src={twitter} alt='Twitter icon' />
        </span>
      </div>
      <div className='column'>
        <span className='column'>
          <p>Help Line Number</p>
          <p className='title02'>+370 666 66 666</p>
        </span>
        <span className='column'>
          <p>Adress</p>
          <p className='title02'>Vilnius, Lithuania</p>
        </span>
        <span className='column'>
          <p>We are in reach</p>
          <p className='title02'>Monday to Friday 9:00 AM to 6 PM</p>
        </span>
      </div>
    </FooterStyles>
  );
}
