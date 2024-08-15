import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBasketShopping, FaBowlFood } from 'react-icons/fa6';
import { StoreContext } from '../context/StoreContext';

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState();
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/">
        {' '}
        <FaBowlFood />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu('home')}
          className={menu === 'home' ? 'active' : ''}
        >
          Home
        </Link>
        <li
          onClick={() => setMenu('products')}
          className={menu === 'products' ? 'active' : ''}
        >
          <a href="/products"> Products</a>
        </li>
        <li
          onClick={() => setMenu('gallery')}
          className={menu === 'gallery' ? 'active' : ''}
        >
          <a href="#food-card">Gallery</a>
        </li>
        <li
          onClick={() => setMenu('contact-us')}
          className={menu === 'contact-us' ? 'active' : ''}
        >
          <a href="#footer"> Contact us</a>
        </li>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/cart">
            <FaBasketShopping />
          </Link>
          <div className={getTotalCartAmount()===0? '': 'dot'}></div>
        </div>
        <button className="sign-in-btn" onClick={() => setShowLogin(true)}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
