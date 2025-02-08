// src/hooks/useProductSearch.js
import { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';

const useProductSearch = (searchTerm = '') => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        console.log('Fetching products with search term:', debouncedSearchTerm);
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${debouncedSearchTerm}`
        );
        console.log('Response status:', response.status);
        
        if (!response.ok) throw new Error('Erreur réseau');
        const data = await response.json();
        console.log('Received data:', data);

        setProducts(data.products || []);
        setError(null);
      } catch (err) {
        console.error('Error:', err);
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [debouncedSearchTerm]);

  return { 
    products, 
    loading, 
    error
  };
};

export default useProductSearch;