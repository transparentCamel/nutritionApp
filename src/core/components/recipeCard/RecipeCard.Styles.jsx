import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';
export const RecipeCardStyles = styled.div`
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  padding: 32px;
  width: 512px;
  height: 768px;
  span {
    width: 100%;
    height: 256px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  ul {
    margin: 0px;
    padding: 0px;
  }
`;
