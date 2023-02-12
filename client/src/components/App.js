import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import Login from '../pages/Login';
import SitterList from '../pages/SitterList';
import NewSitter from '../pages/NewSitter';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser}/>;

    return (
      <div>
        <BrowserRouter>
          <NavBar setUser={setUser} />
          <Routes>
            <Route path='/' element={<SitterList />} />
            <Route path='/new' element={<NewSitter />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;