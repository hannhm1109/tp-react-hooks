import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const translations = {
  fr: {
    title: 'Catalogue de Produits',
    search: 'Rechercher un produit...',
    loading: 'Chargement...',
    error: 'Erreur:',
    price: 'Prix:',
    darkMode: 'Mode Sombre',
    lightMode: 'Mode Clair',
    language: 'Langue'
  },
  en: {
    title: 'Product Catalog',
    search: 'Search for a product...',
    loading: 'Loading...',
    error: 'Error:',
    price: 'Price:',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    language: 'Language'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const value = {
    language,
    setLanguage,
    translations: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};