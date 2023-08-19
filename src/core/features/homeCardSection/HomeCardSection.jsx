import React from 'react';
import { HomeCardSectionStyles } from './HomeCardSection.Styles';
import Card from '../../components/card/Card';
import nutrition from '../../../assets/images/nutrition.jpeg';
import recipes from '../../../assets/images/recipes.jpg';
export default function HomeCardSection() {
  return (
    <HomeCardSectionStyles>
      <Card
        img={nutrition}
        headerText={'Your nutrition needs'}
        paragraph={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ab quasi maxime nesciunt deleniti exercitationem laudantium hic obcaecati qui fuga assumenda accusamus sequi quaerat libero ipsam aliquid illo aut quidem!'
        }
      />
      <Card
        img={recipes}
        headerText={'Browse our recipes'}
        paragraph={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ab quasi maxime nesciunt deleniti exercitationem laudantium hic obcaecati qui fuga assumenda accusamus sequi quaerat libero ipsam aliquid illo aut quidem!'
        }
      />
    </HomeCardSectionStyles>
  );
}
