import React from 'react';
import { CardStyles } from './Card.Styles';
import arrow from '../../../assets/svg/arrow-right-long-solid.svg';
export default function ({ img, headerText, paragraph }) {
  return (
    <CardStyles className='column'>
      <span>
        <img src={img} alt='Card image' />
      </span>
      <div className='textContainer column'>
        <p className='title01'>{headerText}</p>
        <p>{paragraph}</p>
      </div>
      <div className='moreContainer'>
        <p>See more</p>
        <img className='arrow' src={arrow} alt='Arrow' />
      </div>
    </CardStyles>
  );
}
