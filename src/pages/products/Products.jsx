import React, { useState } from 'react';
import FoodDisplay from '../../component/foodDisplay/FoodDisplay';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [category, setCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust the number of items per page as needed
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <FoodDisplay
        category={category}
        setCategory={setCategory}
        onProductClick={handleNavigate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default Products;
