import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './core/globalStyles/GlobalStyles';
import { theme } from './core/globalStyles/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div></div>
      <div></div>
    </ThemeProvider>
  );
}

export default App;
