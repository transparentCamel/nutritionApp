import styled from 'styled-components';
import { theme } from '../../globalStyles/Theme';
export const HomeHeroStyles = styled.section`
  height: 768px;

  .imageContainer {
    position: relative;
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .overlay {
    position: absolute;
    background-color: ${theme.colors.black};
    opacity: 0.6;
    width: 100%;
    height: 768px;
  }
  .textContainer {
    position: absolute;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    align-items: center;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${theme.colors.white};
    p {
      margin-top: 0px;
      text-align: center;
    }
  }
`;
