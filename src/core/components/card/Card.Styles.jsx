import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';
export const CardStyles = styled.div`
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  padding: 32px;
  max-width: 512px;
  span {
    width: 100%;
    height: 256px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  div {
    .arrow {
      width: 32px;
    }
  }
  .textContainer {
    p:nth-child(1) {
      font-weight: bold;
    }
  }
  .moreContainer {
    gap: 16px;
    align-items: center;
    max-width: 128px;
    cursor: pointer;
    p {
      font-weight: bold;
    }
  }
`;
