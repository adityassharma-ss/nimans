import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/search">
            Search
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/recommend">
            Recommend
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/signup">
            Sign up
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/profile">
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
