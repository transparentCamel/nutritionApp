import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';
export const HeaderStyles = styled.header`
  height: 64px;
  justify-content: space-between;
  padding: 0px 64px;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  div {
    margin: 8px 0px;
    cursor: pointer;
    gap: 16px;
    span {
      width: 48px;
    }
    p {
      align-items: center;
    }
  }
`;
