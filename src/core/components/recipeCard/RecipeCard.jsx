import React from 'react';
import { RecipeCardStyles } from './RecipeCard.Styles';

export default function RecipeCard({ img, title }) {
  return (
    <RecipeCardStyles>
      <span>
        <img src={img} alt='Recipe image' />
      </span>
      <h3>{title}</h3>
      <ul>
        <p className='title01'>Ingredients</p>
      </ul>
    </RecipeCardStyles>
  );
}
