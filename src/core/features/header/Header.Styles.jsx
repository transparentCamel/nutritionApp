import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';
export const HeaderStyles = styled.header`
  height: 64px;
  width: 100%;
  justify-content: space-between;
  padding: 0px 64px;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  div {
    margin: 8px 0px;
    cursor: pointer;
    gap: 8px;
    img {
      width: 100%;
    }
    p {
      align-items: center;
    }
  }
`;
