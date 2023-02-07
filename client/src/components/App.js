import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import Login from './Login';


function App() {
  const [user, setUser] = useState(null);
  const [sitter, setSitter] = useState('test');

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/sitters').then((response) => {
      if (response.ok) {
        response.json().then((sitter) => setSitter(sitter));
      }
    });
  }, []);

  if (user) {
    return (
      <div>
      <BrowserRouter>
        <NavBar onLogout={setUser}/>
        <h2>Welcome, {user.username}!</h2>
        {/* <Routes>
          <Route path='/' element={<Sitters />} />
          <Route path='/Login' element={<Login onLogin={onLogin} />} />
        </Routes> */}
      </BrowserRouter>
    </div>
    )
  } else {
    return <Login onLogin={setUser} />;
  }
}

export default App;