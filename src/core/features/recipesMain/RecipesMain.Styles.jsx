import styled from 'styled-components';

export const RecipesMainStyles = styled.main`
  background-color: #f8f8f8;
  padding: 128px;
  align-items: center;
  justify-content: start;
  min-height: 100vh;
  h1 {
    margin-top: 0px;
  }
  .searchContainer {
    width: 512px;

    gap: 32px;
    align-items: center;
    input {
      padding: 16px;
      flex: 1;
    }
  }
  .recipesCardContainer {
    padding-top: 64px;
    gap: 32px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .loadingContainer {
    align-items: center;
    justify-content: center;
    margin-top: 128px;
  }
`;
