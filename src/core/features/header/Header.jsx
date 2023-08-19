import React from 'react';
import { HeaderStyles } from './Header.Styles';
import Nav from '../navigation/Nav';
import fruitTree from '../../../assets/svg/fruit-tree.svg';

export default function Header() {
  return (
    <HeaderStyles className='row'>
      <div>
        <span>
          <img src={fruitTree} alt='Logo' />
        </span>

        <p>FRUITition</p>
      </div>
      <Nav />
    </HeaderStyles>
  );
}
