import React from 'react';
import { ButtonStyles } from './Button.Styles';

export default function Button({ text, backgroundColor, textColor }) {
  return (
    <ButtonStyles backgroundColor={backgroundColor} textColor={textColor}>
      {text}
    </ButtonStyles>
  );
}
