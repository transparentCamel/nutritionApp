import React from 'react';
import { NavStyles } from './Nav.Styles';

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li className='title02'>Home</li>
        <li className='title02'>Nutrition</li>
        <li className='title02'>Recipes</li>
      </ul>
    </NavStyles>
  );
}
