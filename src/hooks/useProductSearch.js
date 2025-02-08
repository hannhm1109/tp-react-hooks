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
        const response = await fetch(
          `https://api.daaif.net/products?delay=1000${
            debouncedSearchTerm ? `&search=${debouncedSearchTerm}` : ''
          }`
        );
        if (!response.ok) throw new Error('Erreur réseau');
        const data = await response.json();
        setProducts(data.products);
        setError(null);
      } catch (err) {
        setError(err.message);
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