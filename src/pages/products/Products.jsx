import React, { useState } from 'react';
import FoodDisplay from '../../component/foodDisplay/FoodDisplay';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [category, setCategory] = useState('All');
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
      />
    </div>
  );
};

export default Products;
