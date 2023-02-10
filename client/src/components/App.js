import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import Login from './Login';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  if (user) {
    return (
      <div>
        <BrowserRouter>
          <h2>Welcome, {user.username}!</h2>
          {/* <Routes>
            <Route path='/' element={<Sitters />} />
            <Route path='/Login' element={<Login onLogin={onLogin} />} />
          </Routes> */}
        </BrowserRouter>
          <NavBar user={user} onLogout={handleLogout}/>
      </div>
    )
  } else {
    return <Login onLogin={handleLogin} />;
  }
}

export default App;