import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <nav>
            <h1>KSM</h1>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Posts">Posts</NavLink></li>
    </ul>  
    </nav>
    </div>
  )
}

export default NavBar;