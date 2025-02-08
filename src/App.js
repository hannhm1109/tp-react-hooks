import React, { createContext, useState } from 'react';
import ProductList from './components/ProductList';
import ThemeToggle from './components/ThemeToggle';
import LanguageSelector from './components/LanguageSelector';
import { LanguageProvider } from './contexts/LanguageContext';

export const ThemeContext = createContext();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <LanguageProvider>
        <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
          <header className="my-4">
            <h1 className="text-center">Catalogue de Produits</h1>
            <div className="d-flex justify-content-end gap-2 align-items-center">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </header>
          <main>
            <ProductList />
          </main>
        </div>
      </LanguageProvider>
    </ThemeContext.Provider>
  );
};

export default App;