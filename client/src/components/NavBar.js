import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ user, setUser }) {

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
        <h1>SitterRating</h1>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/new'>New Sitter</NavLink>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

// {user ? (
//   <div>
//       <p>Welcome, {user.username}!</p>
//       {/* <NavLink to='/logout'>Logout</NavLink> */}
//       <button onClick={handleLogout}>Logout</button>
//   </div>
// ) : (
//   // <NavLink to='/'>Home</NavLink>
//   <NavLink to='/login'>Login</NavLink>
// )}

export default NavBar;