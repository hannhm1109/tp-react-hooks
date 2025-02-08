import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { LanguageContext } from '../contexts/LanguageContext';
import ProductSearch from './ProductSearch';
import useProductSearch from '../hooks/useProductSearch';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isDarkTheme } = useContext(ThemeContext);
  const { translations } = useContext(LanguageContext);
  const { products, loading, error } = useProductSearch(searchTerm);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (loading) return <div>{translations.loading}</div>;
  if (error) return <div>{translations.error} {error}</div>;

  return (
    <div>
      <ProductSearch onSearch={handleSearch} />
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className={`card ${isDarkTheme ? 'bg-dark text-light' : ''}`}>
              <img 
                src={product.thumbnail} 
                className="card-img-top" 
                alt={product.title}
                style={{height: '200px', objectFit: 'cover'}}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{translations.price} ${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;