import React, { useState, useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../foodItem/FoodItem';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const FoodDisplay = ({
  category,
  onProductClick,
  currentPage,
  setCurrentPage,
  itemsPerPage,
}) => {
  const { food_list } = useContext(StoreContext);

  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      const results = food_list.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results.length > 0 ? results : []);
    } else {
      setSearchResults([]);
    }
  };

  const filteredItems =
    searchResults.length > 0
      ? searchResults
      : food_list.filter(
          (item) => category === 'All' || category === item.category
        );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="food-display" id="food-display">
      <div className="topic-n-search">
        <h2 className="heading">Top dishes near you</h2>
        <div className="input-submit">
          <input
            type="text"
            id="search-inp"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search" onClick={handleSearch}>
            Search...
          </button>
        </div>
      </div>
      <div className="food-display-list">
        {paginatedItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onProductClick(item._id)}
            className="food-item"
          >
            <FoodItem
              id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          className="arrowIcon"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <IoIosArrowBack />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            id="numBtn"
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="arrowIcon"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default FoodDisplay;
