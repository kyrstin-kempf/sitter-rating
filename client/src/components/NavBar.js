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
      <NavLink to='/'><img className='logo' src={logo} alt='SitterRating Logo - a circle with SR'/></NavLink>
      <NavLink to='/new'>New Sitter</NavLink>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default NavBar;