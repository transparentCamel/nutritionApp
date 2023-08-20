import React from 'react';
import { RecipesMainStyles } from './RecipesMain.Styles';
import Button from '../../components/button/Button';
import { theme } from '../../globalStyles/Theme';

export default function RecipesMain() {
  return (
    <RecipesMainStyles className='column'>
      <h1>Browse our recipes!</h1>
      <div className='searchContainer'>
        <input type='text' />
        <Button text={'Search'} backgroundColor={theme.colors.green} />
      </div>
      <div className='recipesCardContainer'></div>
    </RecipesMainStyles>
  );
}
