// src/components/Navbar.js
import React from 'react';
import '../Style/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/todoapp">Todo App</Link>
        </li>
        <li>
          <Link to="/shoppingapp">Shopping App</Link>
        </li>

        <li>
          <Link to="/blogapp">Blog App</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
