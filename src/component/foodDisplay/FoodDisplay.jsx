import React, { useState, useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../foodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      const results = food_list.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results.length > 0 ? results : ['No match found']);
    } else {
      setSearchResults([]);
    }
  };

  const displayedItems = searchResults.length > 0 ? searchResults : food_list;

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
        {displayedItems.map((item) => {
          if (category === 'All' || category === item.name) {
            return (
              <FoodItem
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
