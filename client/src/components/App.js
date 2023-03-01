import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import Login from '../pages/Login';
import MySittersList from '../pages/MySittersList';
import SitterList from '../pages/SitterList';
import NewSitter from '../pages/NewSitter';
import OneSitter from '../pages/OneSitter';
import UpdateRating from '../pages/UpdateRating';
// import NewRating from '../pages/NewRating';

function App() {
  const [user, setUser] = useState(null);
  const [sitters, setSitters] = useState([]);

  useEffect(() => {
      fetch('/sitters')
      .then((r) => r.json())
      .then(setSitters);
  }, []);

  useEffect(() => {
    document.title = 'SitterRating';
  }, []);

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  const addSitter = (sitter) => {
    setSitters([...sitters, {...sitter, ratings: []}])
  }

  const addSitterRating = (rating) => {
    const s = sitters.find(s => s.id === rating.sitter_id)
    // console.log(s);
    const newS = {...s, ratings: [...s.ratings, rating]}
    const newSitters = sitters.map((sit) => sit.id === s.id ? newS : sit)
    setSitters(newSitters)
  }

  const updateSitterRating = (updatedRating) => {
    const s = sitters.find(s => s.id === updatedRating.sitter_id)
    // console.log(s);
    const sitRate = s.ratings.map(r => {
      if(r.id === updatedRating.id) {
        return updatedRating
      } return r
    })
    const newS = {...s, ratings: sitRate}
    const newSitters = sitters.map((sit) => sit.id === s.id ? newS : sit)
    setSitters(newSitters)
  }

  if (!user) return <Login onLogin={setUser} />;

    return (
      <div>
        <BrowserRouter>
          <NavBar setUser={setUser} />
          <Routes>
            <Route path='/' element={<MySittersList user={user} sitters={sitters} />} />
            <Route path='/sitters' element={<SitterList sitters={sitters} />} />
            <Route path='/sitters/new' element={<NewSitter addSitter={addSitter} />} />
            <Route path='/sitters/:id' element={<OneSitter sitters={sitters} user={user} addSitterRating={addSitterRating} />} />
            <Route path='/sitters/:sitter_id/ratings/:id/edit' element={<UpdateRating sitters={sitters} updateSitterRating={updateSitterRating} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;