import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './core/globalStyles/GlobalStyles';
import { theme } from './core/globalStyles/Theme';
import Header from './core/features/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import Footer from './core/features/footer/Footer';
import { Recipes } from './screens/Recipes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
