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
    // console.log(rating)
    const s = sitters.find(s => s.id === rating.sitter_id);
    const newS = {...s, ratings: [...s.ratings, rating]};
    const newSitters = sitters.map((sit) => sit.id === s.id ? newS : sit);
    
    let updatedUser = { ...user };
    const existingSitter = updatedUser.sitters.find(s => s.id === rating.sitter_id);

    if(!existingSitter) {
      updatedUser = {
        ...updatedUser,
        sitters: [...updatedUser.sitters, {
          id: s.id, 
          first_name: s.first_name,
          last_name: s.last_name,
          email: s.email,
          hourly_rate: s.hourly_rate,
          years_of_experience: s.years_of_experience,
          ratings: [rating] }],
      };
    } else {
      const updatedRatings = [...existingSitter.ratings, rating];
      const updatedSitters = updatedUser.sitters.map(s => {
        if(s.id === rating.sitter_id) {
          return { ...s, ratings: updatedRatings };
        }
        return s;
      });
      updatedUser = { ...updatedUser, sitters: updatedSitters };
    }
    
    setSitters(newSitters);
    setUser(updatedUser);

    // --- add sitter if new sitter and rating. Only add rating of already have sitter
    // -------------- both states need to updated
  };

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

  function deleteSitterRating(ratingId, sitterId) {
    const s = sitters.find(s => s.id.toString() === sitterId)
    const sitterRating = s.ratings.filter(r => r.id.toString() !== ratingId)
    const newS = {...s, ratings: sitterRating}
    const newSitters = sitters.map((sit) => sit.id === s.id ? newS : sit)
    
    let updatedUser = { ...user };
    const existingSitter = updatedUser.sitters.find(ss => JSON.stringify(ss.id) === sitterId);
    
    if(existingSitter && existingSitter.ratings.length === 1) {
      const updatedSitters = updatedUser.sitters.filter(s => JSON.stringify(s.id) !== sitterId);
      console.log(updatedSitters)
      updatedUser = { ...updatedUser, sitters: updatedSitters};
    }
    
    setSitters(newSitters);
    setUser(updatedUser)
  }

  if (!user) return <Login onLogin={setUser} />;

    return (
      <div>
        <BrowserRouter>
          <NavBar setUser={setUser} />
          <Routes>
            <Route exact path='/' element={<MySittersList user={user} sitters={sitters} setSitters={setSitters} />} />
            <Route path='/sitters' element={<SitterList sitters={sitters} />} />
            <Route path='/sitters/new' element={<NewSitter addSitter={addSitter} />} />
            <Route path='/sitters/:id' element={<OneSitter sitters={sitters} user={user} addSitterRating={addSitterRating} />} />
            <Route path='/sitters/:sitter_id/ratings/:id/edit' element={<UpdateRating sitters={sitters} updateSitterRating={updateSitterRating} deleteSitterRating={deleteSitterRating} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;