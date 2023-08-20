import React from 'react';
import { RecipeCardStyles } from './RecipeCard.Styles';
import useFetch from '../../customHooks/useFetch/useFetch';

export default function RecipeCard({ img, title, id }) {
  const apiKey = '7512f786bb8c48f78f19e3d7d688a04c';
  const { data, error } = useFetch(
    `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apiKey}`
  );
  if (error) console.log(error);
  return (
    <RecipeCardStyles className='column'>
      <span>
        <img src={img} alt='Recipe image' />
      </span>
      <h3>{title}</h3>
      <ul className='column'>
        <p className='title01'>Ingredients</p>
        {data?.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.name}</li>
        ))}
      </ul>
    </RecipeCardStyles>
  );
}
