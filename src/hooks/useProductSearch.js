import { useState, useEffect, useCallback } from 'react';
import { useDebounce } from './useDebounce';

const useProductSearch = (searchTerm = '', page = 1) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const reloadData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=9&skip=${(page - 1) * 9}${
          debouncedSearchTerm ? `&q=${debouncedSearchTerm}` : ''
        }`
      );
      if (!response.ok) throw new Error('Erreur réseau');
      const data = await response.json();
      setProducts(data.products);
      // Limit total pages to 9
      setTotalPages(Math.min(Math.ceil(data.total / 9), 9));
      setError(null);
    } catch (err) {
      setError(err.message);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearchTerm, page]);

  useEffect(() => {
    reloadData();
  }, [reloadData]);

  return {
    products,
    loading,
    error,
    totalPages,
    reloadData
  };
};

export default useProductSearch;