// src/Pagination.js

import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage, setItemsPerPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        <li className={currentPage === 1 ? 'disabled' : ''}>
          <button onClick={() => paginate(currentPage - 1)}>Previous</button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={number === currentPage ? 'active' : ''}>
            <button onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
        <li className={currentPage === pageNumbers.length ? 'disabled' : ''}>
          <button onClick={() => paginate(currentPage + 1)}>Next</button>
        </li>
      </ul>
      <div>
        Items per page: 
        <select value={itemsPerPage} onChange={(e) => setItemsPerPage(parseInt(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
    </nav>
  );
};

export default Pagination;
