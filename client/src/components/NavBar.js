import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/SitterRatingLogo.png';

function NavBar({ setUser }) {

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE',
        }).then((r) => {
          if (r.ok) {
            // console.log('delete me')
            setUser(null);
          }
        });
    }
  
  return (
    <div className='nav-menu'>
      <NavLink to='/' className="logo"><img src={logo} alt='SitterRating Logo - a circle with SR'/></NavLink>
      <div className='float-right'>
      <NavLink end to='/sitters'>All Sitters</NavLink>
      <NavLink end to='sitters/new'>New Sitter</NavLink>
      <button onClick={handleLogout} id="nav-logout">Logout</button>
      </div>
    </div>
  );
}

export default NavBar;