import React from 'react';
import { HeaderStyles } from './Header.Styles';
import Nav from '../navigation/Nav';
import fruitTree from '../../../assets/svg/fruit-tree.svg';

export default function Header() {
  return (
    <HeaderStyles className='row'>
      <div>
        <img src={fruitTree} alt='Logo' />
        <p>FRUITition</p>
      </div>
      <Nav />
    </HeaderStyles>
  );
}
