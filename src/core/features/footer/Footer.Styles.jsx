import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';
export const FooterStyles = styled.footer`
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  align-items: center;
  justify-content: center;
  padding: 64px 64px;

  div {
    span {
      gap: 8px;
      p {
        margin: 0px;
      }
      p:nth-child(1) {
        color: #a9a9a9;
      }
    }
    span:nth-child(2) {
      margin: 16px 0px;
    }
  }
  div:nth-child(2) {
    margin-left: 128px;
  }
  div:nth-child(1) {
    max-width: 480px;
  }
`;
