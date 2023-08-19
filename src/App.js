import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './core/globalStyles/GlobalStyles';
import { theme } from './core/globalStyles/Theme';
import Header from './core/features/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
