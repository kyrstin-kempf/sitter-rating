import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/SitterRatingLogo.png';

function NavBar({ setUser }) {

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE',
        }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
    }
  
  return (
    <div className='nav-menu'>
      <NavLink
        to='/' 
        className={({ isActive }) => "logo" + (isActive ? " active" : "")}
        >
          <img src={logo} alt='SitterRating Logo - a circle with SR'/>
        </NavLink>
      <div className='float-right'>
      <NavLink 
        to='/sitters' 
        className={({ isActive }) => (isActive ? " active" : "")}
        >
          All Sitters
        </NavLink>
      <NavLink 
      to='/sitters/new' 
      className={({ isActive }) => (isActive ? " active" : "")}
      >
        New Sitter
      </NavLink>
      <button onClick={handleLogout} id="nav-logout">Logout</button>
      </div>
    </div>
  );
}

export default NavBar;