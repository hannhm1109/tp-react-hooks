import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { LanguageContext } from '../contexts/LanguageContext';
import ProductSearch from './ProductSearch';
import useProductSearch from '../hooks/useProductSearch';
import Pagination from './Pagination';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { isDarkTheme } = useContext(ThemeContext);
  const { translations } = useContext(LanguageContext);
  
  const { products, loading, error, totalPages, reloadData } = useProductSearch(searchTerm, currentPage);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page on new search
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <ProductSearch onSearch={handleSearch} />
        <button 
          onClick={reloadData}
          className={`btn ${isDarkTheme ? 'btn-outline-light' : 'btn-outline-dark'} ms-2`}
        >
          ↻
        </button>
      </div>

      {loading && <div className="text-center">{translations.loading}</div>}
      {error && <div className="alert alert-danger">{translations.error} {error}</div>}
      
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

      {products.length > 0 && (
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default ProductList;