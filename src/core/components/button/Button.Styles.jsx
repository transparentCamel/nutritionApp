import styled from 'styled-components';
//import { theme } from '../../globalStyles/Theme';
export const ButtonStyles = styled.button`
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  height: 32px;
  width: 128px;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
`;
