import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  // Ensure we never show more than 9 pages
  const maxPages = Math.min(totalPages, 9);
  
  return (
    <nav aria-label="Product pagination" className="mt-4">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className={`page-link ${isDarkTheme ? 'bg-dark text-light' : ''}`}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ←
          </button>
        </li>
        
        {[...Array(maxPages)].map((_, index) => (
          <li 
            key={index + 1} 
            className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
          >
            <button
              className={`page-link ${isDarkTheme ? 'bg-dark text-light' : ''}`}
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}

        <li className={`page-item ${currentPage === maxPages ? 'disabled' : ''}`}>
          <button
            className={`page-link ${isDarkTheme ? 'bg-dark text-light' : ''}`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === maxPages}
          >
            →
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;