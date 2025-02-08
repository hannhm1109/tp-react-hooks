import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

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
    language: 'Langue',
    previous: 'Précédent',
    next: 'Suivant',
    reload: 'Recharger'
  },
  en: {
    title: 'Product Catalog',
    search: 'Search for a product...',
    loading: 'Loading...',
    error: 'Error:',
    price: 'Price:',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    language: 'Language',
    previous: 'Previous',
    next: 'Next',
    reload: 'Reload'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('language', 'fr');

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