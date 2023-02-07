import { NavLink } from 'react-router-dom';

function NavBar({ onLogout }) {

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE',
        }).then(() => onLogout());
    }
  
  return (
    <div className='nav-menu'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/logout'>Logout</NavLink>
    </div>
  );
}

export default NavBar;