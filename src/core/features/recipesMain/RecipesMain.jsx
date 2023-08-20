import React from 'react';
import { RecipesMainStyles } from './RecipesMain.Styles';
import Button from '../../components/button/Button';
import { theme } from '../../globalStyles/Theme';
import useFetch from '../../customHooks/useFetch/useFetch';
import RecipeCard from '../../components/recipeCard/RecipeCard';
import rolling from '../../../assets/gifs/rolling.gif';

export default function RecipesMain() {
  const apiKey = '7512f786bb8c48f78f19e3d7d688a04c';
  const { data, loading, error } = useFetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=100`
  );

  return (
    <RecipesMainStyles className='column'>
      <h1>Browse our recipes!</h1>
      <div className='searchContainer'>
        <input type='text' />
        <Button text={'Search'} backgroundColor={theme.colors.green} />
      </div>
      {loading ? (
        <span className='loadingContainer'>
          <img src={rolling} alt='Loading..' />
        </span>
      ) : (
        <>
          {error && error.response && error.response.status === 402 ? (
            <h2>Daily limit reached</h2>
          ) : (
            <div className='recipesCardContainer'>
              {data?.results.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  title={recipe.title}
                  img={recipe.image}
                  id={recipe.id}
                />
              ))}
            </div>
          )}
        </>
      )}
    </RecipesMainStyles>
  );
}
