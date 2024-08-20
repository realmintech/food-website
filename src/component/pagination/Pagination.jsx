import React, { useState } from 'react';
import { food_list } from '../../assest/Food';
// import FoodDisplay from '../foodDisplay/FoodDisplay';
import FoodItem from '../foodItem/FoodItem';

const itemsPerPage = 15;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={currentPage === index + 1 ? 'active' : ''}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

const PaginatedList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(food_list.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = food_list.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="paginated-list">
      <ul>
        {paginatedItems.map((item, index) => (
            <FoodItem key={index} />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginatedList;