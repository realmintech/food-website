import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FaBasketShopping, FaBowlFood } from 'react-icons/fa6';

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState('home');
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
          onClick={() => setMenu('menu')}
          className={menu === 'menu' ? 'active' : ''}
        >
          <a href="#explore-menu"> Menu</a>
        </li>
        <li
          onClick={() => setMenu('gallery')}
          className={menu === 'gallery' ? 'active' : ''}
        >
          <a href="#food-display">Gallery</a>
        </li>
        <li
          onClick={() => setMenu('contact-us')}
          className={menu === 'contact-us' ? 'active' : ''}
        >
          <a href="#footer"> Contact us</a>
        </li>
      </ul>
      <div className="navbar-right">
        <div className="search-icon">
          <FaSearch />
        </div>
        <div className="navbar-search-icon">
          <Link to="/cart">
            <FaBasketShopping />
          </Link>
          <div className="dot"></div>
        </div>
        <button className="sign-in-btn" onClick={() => setShowLogin(true)}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
