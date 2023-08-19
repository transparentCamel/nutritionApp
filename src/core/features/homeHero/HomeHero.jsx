import React from 'react';
import { HomeHeroStyles } from './HomeHero.Styles';
import source from '../../../assets/images/cooking.jpg';
import Button from '../../components/button/Button';
import { theme } from '../../globalStyles/Theme';

export default function HomeHero() {
  return (
    <HomeHeroStyles>
      <div className='imageContainer'>
        <img src={source} alt='Cooking table' />
      </div>
      <div className='overlay'></div>
      <div className='textContainer column'>
        <h1>Healthy living</h1>
        <p className='title02'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ab
          quasi maxime nesciunt deleniti exercitationem laudantium hic obcaecati
          qui fuga assumenda accusamus sequi quaerat libero ipsam aliquid illo
          aut quidem!
        </p>
        <Button
          text={'Get started'}
          backgroundColor={theme.colors.green}
          textColor={theme.colors.black}
        />
      </div>
    </HomeHeroStyles>
  );
}
