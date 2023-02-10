import { NavLink } from 'react-router-dom';

function NavBar({ user, onLogout }) {

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE',
        }).then(() => onLogout());
    }
  
  return (
    <div className='nav-menu'>
        <h1>SitterRating</h1>
        {user ? (
            <div>
                <p>Welcome, {user.username}!</p>
                {/* <NavLink to='/logout'>Logout</NavLink> */}
                <button onClick={handleLogout}>Logout</button>
            </div>
        ) : (
            <NavLink to='/login'>Login</NavLink>
        )}
      <NavLink to='/'>Home</NavLink>
    </div>
  );
}

export default NavBar;