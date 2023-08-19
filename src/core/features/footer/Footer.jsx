import React from 'react';
import { FooterStyles } from './Footer.Styles';

export default function Footer() {
  return (
    <FooterStyles>
      <div>
        <h3>Get in touch with us for your service</h3>
        <span className='svgContainer'></span>
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
